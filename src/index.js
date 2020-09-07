  

const DEFAULT_OPTS = {
    type: 'modal',
    mode: 'production',
    embedContainerId: 'swap-embed',
    iframeContainerClass: 'swap-widget-container',
    buttonId: 'swap-init',
    payButtons: true,
    payButtonsStyle: true,
    config: {}
}
export class Widget {
	constructor(options = DEFAULT_OPTS) {
        options = {
            ...DEFAULT_OPTS,
            ...options
        }

		this.base_url = 'https://swap.savitar.io/widget';

        this.config = {...options.config}
        this.default_config = {...options.config}
        this.widgetStarted = false

        this.widgetType = options.type
		this.iframe = document.createElement('iframe')
        this.iframeContainerClass = options.iframeContainerClass
        this.embedContainerId = options.embedContainerId
        this.buttonId = options.buttonId
        this.payButtons = options.payButtons

		this.injectStyle()

        if(options.payButtons && options.payButtonsStyle) this.injectButtonStyle()

		if (options.mode === 'sandbox') {
            this.base_url = 'http://localhost:3000/widget';
		}

		if (options.type === 'modal' || options.type === 'embed') {
			this.widgetType = options.type
        }
        
        // this.userOnboardSuccessCallback = null
		// this.onExit = null
		// this.userOnboardDeclinedCallback = null
    }

    init() {
		this.setupEvents()
        
        if (this.widgetType === 'embed' 
            && this.embedContainerId !== '') this.initEmbed(this.embedContainerId)

        if (this.widgetType === 'modal') this.initModal()
        
        if(this.payButtons) this.initButtons()

        return this
    }
	on(type, callback) {
        switch(type){
            case 'ready':
                this.onReady = callback
            break
            case 'close':
                this.onExit = callback
            break

            default:
                throw new SwapWidgetError('"'+type+'" event do not exists');

        }

        return this
	}
// private methods
    injectStyle() {
		let styleSheet = document.createElement('style')
		styleSheet.type = 'text/css'
		styleSheet.innerText = globalStyles
		document.head.appendChild(styleSheet)
    }
    injectButtonStyle() {
		let styleSheet = document.createElement('style')
		styleSheet.type = 'text/css'
		styleSheet.innerText = buttonStyle
        document.head.appendChild(styleSheet)
    }
//Modal
	initModal() {
		document.addEventListener('click', e => this.modalEvents(this, e))
    }
    closeModalEvents() {
        document.removeEventListener('click', e => this.modalEvents(this, e))
    }
    modalEvents(self, event) {
        let element = event.target

        if ( (element.tagName === 'BUTTON' || element.tagName === 'SPAN')
        && element.attributes.id ) {

            if (element.attributes.id.value === this.buttonId 
                && !self.widgetStarted) {
                    self.openModal()
            }
        }
    }
    openModal() {
		if (this.widgetStarted) return
        
		this.iframe = this.initIframe()
		this.iframe.setAttribute('style', iframeStyle)

        this.widgetStarted = true
		document.body.appendChild(this.iframe)
    }
    initIframe() {
        let src = `${this.base_url}?type=${this.widgetType}`
        
		if (this.config?.email) src = `${src}&email=${this.config.email}`
		if (this.config?.email_editable === true) src = `${src}&email_editable=${this.config.email_editable}`
		if (this.config?.currency) src = `${src}&currency=${this.config.currency}`
		if (this.config?.amount) src = `${src}&amount=${this.config.amount}`
		if (this.config?.amount_editable === true) src = `${src}&amount_editable=${this.config.amount_editable}`
		if (this.config?.delivery_address) src = `${src}&delivery_address=${this.config.delivery_address}`
		if (this.config?.payment_type) src = `${src}&payment_type=${this.config.payment_type}`
		if (this.config?.order_type) src = `${src}&order_type=${this.config.order_type}`
        
		this.iframe.setAttribute('src', src)
		this.iframe.setAttribute('id', this.iframeContainerClass)
		this.iframe.setAttribute('allowtransparency', 'true')
		this.iframe.setAttribute('frameborder', 'none')
		this.iframe.setAttribute('border', '0')
        this.iframe.setAttribute('resize', 'none')
        
		return this.iframe
	}  
	initEmbed(id) {
		this.iframe = this.initIframe()
        let embedContainer = document.getElementById(id)
        
        if (embedContainer === null) throw new SwapWidgetError('#'+id+' container not found')

        this.widgetStarted = true
        this.iframe.setAttribute('class', this.iframeContainerClass)
        embedContainer.appendChild(this.iframe)
	}
// Buttons
    initButtons(){
        document.addEventListener('click', e => this.buttonsEvents(this, e))

        const buttons = document.querySelectorAll('button[type="svt-btn"')

        buttons.forEach(e => {
            if(e.innerText.length === 0) {
                const amount = e.getAttribute('svt-amount')
                const currency = e.getAttribute('svt-currency')
                const payment_type = e.getAttribute('svt-payment-type')

                let text
                

                text = payment_type === 'merchant' ? 'Pay ' : 'Buy '

                if(amount) text += amount+'€ '
                if(currency) text += (amount ? 'in ' : '')+currency

                e.textContent = text ? text : 'Pay now with Swap'
            }
        })
    }
    closeButtonsEvents(){
        document.removeEventListener('click', e => this.buttonsEvents(this, e))
    }
    buttonsEvents(self, event) {
        let element = event.target
        
        if ( (element.tagName === 'BUTTON' || element.tagName === 'SAVITAR') ) {
            if( !element.attributes?.type?.value === 'svt-btn' ) return

            const email = element.getAttribute('svt-email')
            const email_editable = element.getAttribute('svt-email-editable') === 'true'
            const amount = element.getAttribute('svt-amount')
            const amount_editable = element.getAttribute('svt-amount-editable') === 'true'
            const currency = element.getAttribute('svt-currency')
            const delivery_address = element.getAttribute('svt-delivery-address')
            const payment_type = element.getAttribute('svt-payment-type')
            const order_type = element.getAttribute('svt-order-type')

            if (!self.widgetStarted) {
                if(amount) this.config.amount = amount
                if(amount_editable) this.config.amount_editable = amount_editable                
                if(email) this.config.email = email
                if(email_editable) this.config.email_editable = email_editable
                if(currency) this.config.currency = currency
                if(delivery_address) this.config.delivery_address = delivery_address
                if(payment_type) this.config.payment_type = payment_type
                if(order_type) this.config.order_type = order_type

                self.openModal()
            }
        }
    }
    callbacksListeners(self, e){
        if(e.data.action === undefined) return

        switch(e.data.action){
            case 'ready':
                if (typeof self.onReady === 'function') self.onReady()
            break
            case 'close':
                if (self.widgetType === 'modal') {

                    self.resetFrame()
                    self.closeModalEvents()
                    self.closeEvents()
                }
                if (typeof self.onExit === 'function') self.onExit()
            break

            case 'exited':
                // console.log('kyc exited')
                // window.frames.postMessage({action: 'exited'}, '*')
                // window.parent.postMessage({action: 'exited'}, '*')
            break

            default:
                throw new SwapWidgetError(' "'+e.data.action+'" action not handled.')
        }
    }
    setupEvents() {
		window.addEventListener('message', e => this.callbacksListeners(this, e))
    }
    closeEvents() {
        window.removeEventListener('message', e => this.callbacksListeners(this, e))
    }


	resetFrame() {
        this.config = {...this.default_config}
		this.iframe.setAttribute('src', '#')
        this.iframe.setAttribute('style', 'display:none')
        
		this.widgetStarted = false
        document.body.appendChild(this.iframe)
	}
}

let iframeStyle = `
    z-index: 1000;
    overflow: hidden auto;
    visibility: visible;
    position: fixed;
    background-color: rgba(0,0,0,0.3);
    border-color: transparent;
    border-width: 0;
    border-style: none;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    -webkit-tap-highlight-color: transparent;
`

const blue_1 = '#0d4d9a'

const globalStyles = `
    @import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,400&display=swap");

    .swap-open {
        font-family: Roboto, sans-serif;

        background-color: ${blue_1};
        border-radius: 20px;
        display: inline-block;
        font-weight: 400;
        color: #ffffff;

        text-align: center;
        vertical-align: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        border: 1px solid transparent;
        padding: .375rem .75rem;
        font-size: 1rem;
        line-height: 1.5;
        border-radius: .25rem;
        transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    }
    .swap-open:hover {
        -webkit-transition: background-color .25s ease-in-out;
        transition: background-color .25s ease-in-out;
        background-color: #0f59b2;
    }

    .swap-widget-container {
        min-width: 540px;
        width: 100%;
        min-height: 480px;
        border-color: transparent;
        border-width: 0;
        border-style: none;
        left: 0;
        top: 0;
        -webkit-tap-highlight-color: transparent
    }

`

const buttonStyle = `    
    button[type='svt-btn']{
        font-family: Roboto, sans-serif;

        background-color: ${blue_1};
        border-radius: 20px;
        display: inline-block;
        font-weight: 400;
        color: #ffffff;

        margin: 5px;

        text-align: center;
        vertical-align: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        border: 1px solid transparent;
        padding: .375rem .75rem;
        font-size: 1rem;
        line-height: 1.5;
        border-radius: .25rem;
        transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    }

    button[type='svt-btn']:hover {
        -webkit-transition: background-color .25s ease-in-out;
        transition: background-color .25s ease-in-out;
        background-color: #0f59b2;
    }

`

class SwapWidgetError extends Error {
    constructor(...params) {
      super(...params)
  
      if(Error.captureStackTrace) Error.captureStackTrace(this, SwapWidgetError)

      this.name = 'SwapWidgetError'
    }
}