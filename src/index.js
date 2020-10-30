
const DEFAULT_OPTS = {
    type: 'modal',
    lang: 'fr',
    embedContainerId: 'swap-embed',
    iframeContainerClass: 'swap-widget-container',
    buttonId: 'swap-init',
    payButtons: false,
    payButtonsStyle: true,
    config: {}
}

import LOCALES from './locales.js'

export class Widget {
	constructor(options = DEFAULT_OPTS) {
        options = {
            ...DEFAULT_OPTS,
            ...options
        }

		this.base_url = process.env.SWAP_URL+'/widget';

        this.config = {...options.config}
        this.default_config = {...options.config}
        this.widgetStarted = false

        this.widgetType = options.type
        this.lang = options.lang
        this.iframe = document.createElement('iframe')
        this.iframeContainerClass = options.iframeContainerClass
        this.embedContainerId = options.embedContainerId
        this.buttonId = options.buttonId
        this.payButtons = options.payButtons
        this.popup
        this.ready = false

		this.injectStyle()

        if(options.payButtons && options.payButtonsStyle) this.injectButtonStyle()

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
            case 'failure':
                this.onFailure = callback
            break

            case 'success':
                this.onSuccess = callback
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

            if (element.attributes.id.value === self.buttonId 
                && !self.widgetStarted) {
                    self.checkIframeCookie((status) => {
                        return status ? self.openModal() : self.openPopup()
                    })
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
    closeModal(){
        this.resetFrame()
        this.closeModalEvents()
        this.closeEvents()
    }
    openPopup(){
        const popupWidth = 400
        const popupHeight = 550

        let src = `${this.base_url}?type=${this.widgetType}`
        
		if (this.config?.email) src = `${src}&email=${this.config.email}`
        src = `${src}&email_editable=${this.config?.email_editable || 'true'}`
        
		if (this.config?.currency) src = `${src}&currency=${this.config.currency}`
		if (this.config?.amount) src = `${src}&amount=${this.config.amount}`
		if (this.config?.amount_currency) src = `${src}&amount_currency=${this.config.amount_currency}`
		src = `${src}&amount_editable=${this.config?.amount_editable || 'true'}`
		if (this.config?.delivery_address) src = `${src}&delivery_address=${this.config.delivery_address}`
		if (this.config?.payment_type) src = `${src}&payment_type=${this.config.payment_type}`
		if (this.config?.order_type) src = `${src}&order_type=${this.config.order_type}`
		if (this.config?.broker_address) src = `${src}&broker_address=${this.config.broker_address}`
        if (this.config?.hide_confirm) src = `${src}&hide_confirm=${this.config.hide_confirm}`
        if (this.config?.iov_domain) src = `${src}&iov_domain=${this.config.iov_domain}`
        if (this.config?.ref_code) src = `${src}&refCode=${this.config.ref_code}`

		src = `${src}&lang=${this.lang}`


        // Fixes dual-screen position                             Most browsers      Firefox
        const dualScreenLeft = window.screenLeft !==  undefined ? window.screenLeft : window.screenX;
        const dualScreenTop = window.screenTop !==  undefined   ? window.screenTop  : window.screenY;

        const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width
        const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height

        const systemZoom = width / window.screen.availWidth
        const left = (width - popupWidth) / 2 / systemZoom + dualScreenLeft
        const top = (height - popupHeight) / 2 / systemZoom + dualScreenTop

        const opts = `
            directories=0,titlebar=0,toolbar=0,location=0,status=0,menubar=0,scrollbars=no,resizable=no,
            width=${popupWidth / systemZoom}, 
            height=${popupHeight / systemZoom}, 
            top=${top}, 
            left=${left}
        `

        let popup = window.open(src, 'Savitar Swap', opts)
        // window.addEventListener("beforeunload", function(event) { 
        //     event.preventDefault()
        //     console.log('close window')
        // })
        if (window.focus) popup.focus()
    }
    initIframe() {
        let src = `${this.base_url}?type=${this.widgetType}`
        
		if (this.config?.email) src = `${src}&email=${this.config.email}`
        src = `${src}&email_editable=${this.config?.email_editable || 'true'}`
        
		if (this.config?.currency) src = `${src}&currency=${this.config.currency}`
		if (this.config?.amount) src = `${src}&amount=${this.config.amount}`
		if (this.config?.amount_currency) src = `${src}&amount_currency=${this.config.amount_currency}`
		src = `${src}&amount_editable=${this.config?.amount_editable || 'true'}`
		if (this.config?.delivery_address) src = `${src}&delivery_address=${this.config.delivery_address}`
		if (this.config?.payment_type) src = `${src}&payment_type=${this.config.payment_type}`
		if (this.config?.order_type) src = `${src}&order_type=${this.config.order_type}`
		if (this.config?.broker_address) src = `${src}&broker_address=${this.config.broker_address}`
        if (this.config?.hide_confirm) src = `${src}&hide_confirm=${this.config.hide_confirm}`
        if (this.config?.iov_domain) src = `${src}&iov_domain=${this.config.iov_domain}`
        if (this.config?.ref_code) src = `${src}&refCode=${this.config.ref_code}`

		src = `${src}&lang=${this.lang}`

		this.iframe.setAttribute('src', src)
		this.iframe.setAttribute('id', this.iframeContainerClass)
		this.iframe.setAttribute('allowtransparency', 'true')
		this.iframe.setAttribute('frameborder', 'none')
		this.iframe.setAttribute('border', '0')
        this.iframe.setAttribute('resize', 'none')
        
		return this.iframe
    }  
    _noCookiesDisclaimer(id, container) {
        const rand = Math.round(Math.random()*100)
        document.addEventListener('click', e => this.noCookiesEvents(this, e, rand))

        let content = document.createElement('div')
        content.className = 'text-center'

        let titleSpan = document.createElement('span')
        let title = document.createTextNode(LOCALES[this.lang].cookies_not_enabled)
        titleSpan.appendChild(title)


        let buttonContainer = document.createElement('div')
        let button = document.createElement('button')
        button.innerHTML = LOCALES[this.lang].continue
        button.className = 'swap-open'

        button.id = 'nocookies-'+rand

        buttonContainer.appendChild(button)

        content.appendChild(titleSpan)
        content.appendChild(buttonContainer)

        container.appendChild(content)
	}  
	initEmbed(id) {
        let embedContainer = document.getElementById(id)
            
        if (embedContainer === null) throw new SwapWidgetError('#'+id+' container not found')
        this.checkIframeCookie(status => {
            if(!status) return this._noCookiesDisclaimer(id, embedContainer)
            this.iframe = this.initIframe()

            this.widgetStarted = true
            this.iframe.setAttribute('class', this.iframeContainerClass)
            embedContainer.appendChild(this.iframe)
        })

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
                const order_type = e.getAttribute('svt-order-type') || 'buy'
                const amount_currency = e.getAttribute('svt-amount-currency') || 'eur'

                let text
                
                text = payment_type === 'merchant' ? LOCALES[this.lang].pay+' ' : LOCALES[this.lang].buy+' '
                text = order_type === 'sell' ? 'Sell ' : text

                const currencyUnit = amount_currency === 'eur' ? '€' : currency.toUpperCase()
                if(amount) text += amount+' '+currencyUnit+' '

                const amountUnit = amount_currency !== 'eur' ? 'EUR' : currency.toUpperCase()
                if(currency) text += (amount ? LOCALES[this.lang].in+' ' : '')+amountUnit

                e.textContent = text ? text : LOCALES[this.lang].pay_now
            }
        })
    }
    closeButtonsEvents(){
        document.removeEventListener('click', e => this.buttonsEvents(this, e))
    }
    noCookiesEvents(self, event, rand) {
        let element = event.target
        
        if ( element.tagName !== 'BUTTON') return
        if ( element.attributes.id.value !== 'nocookies-'+rand) return

        self.openPopup()
    }
    buttonsEvents(self, event) {
        let element = event.target
        
        if ( (element.tagName === 'BUTTON' || element.tagName === 'SAVITAR') ) {
            if( element.attributes?.type?.value !== 'svt-btn' ) return

            const email = element.getAttribute('svt-email')
            const email_editable = element.getAttribute('svt-email-editable') === 'true'
            const amount = element.getAttribute('svt-amount')
            const amount_editable = element.getAttribute('svt-amount-editable') === 'true'
            const amount_currency = element.getAttribute('svt-amount-currency')
            const currency = element.getAttribute('svt-currency')
            const delivery_address = element.getAttribute('svt-delivery-address')
            const payment_type = element.getAttribute('svt-payment-type')
            const order_type = element.getAttribute('svt-order-type')
            const broker_address = element.getAttribute('svt-broker-address')
            const iov_domain = element.getAttribute('svt-iov-domain')
            const ref_code = element.getAttribute('svt-ref-code')

            if (!self.widgetStarted) {
                if(amount) this.config.amount = amount
                if(amount_editable) this.config.amount_editable = amount_editable                
                if(amount_currency) this.config.amount_currency = amount_currency                
                if(email) this.config.email = email
                if(email_editable) this.config.email_editable = email_editable
                if(currency) this.config.currency = currency
                if(delivery_address) this.config.delivery_address = delivery_address
                if(payment_type) this.config.payment_type = payment_type
                if(order_type) this.config.order_type = order_type
                if(broker_address) this.config.broker_address = broker_address
                if(hide_confirm) this.config.hide_confirm = hide_confirm
                if(iov_domain) this.config.iov_domain = iov_domain
                if(ref_code) this.config.ref_code = ref_code

                self.openPopup()
            }
        }
    }
    callbacksListeners(self, e){
        if(e.data.action === undefined) return

        switch(e.data.action){
            case 'ready':
                if (typeof self.onReady === 'function' && !this.ready) {
                    self.onReady()
                    this.ready = true
                }
            break
            case 'success':
                if (typeof self.onSuccess === 'function') self.onSuccess(e.data.data)
            break
            case 'failure':
                if(this.config?.hide_confirm && this.widgetType === 'modal') this.closeModal()

                if (typeof self.onFailure === 'function') self.onFailure(e.data.data)
            break
            case 'close':
                if (self.widgetType === 'modal')  self.closeModal()
                if (typeof self.onExit === 'function') self.onExit()
            break

            case 'exited':
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
        this.ready = false
    }
    checkIframeCookie(callback) {

        const receiveMessage = (event) => {
          if (event.origin !== process.env.API_HOST) return
          if (event.data === "iframecookie=true") {
            callback(true)
            ifrm.remove()
          } else if (event.data === "iframecookie=false") {
            callback(false)
            ifrm.remove()
          }
          window.removeEventListener("message", receiveMessage)
        }

        window.addEventListener("message", receiveMessage, false)
        const ifrm = document.createElement('iframe')
        ifrm.setAttribute("src", process.env.API_URL+"/checkcookie")
        ifrm.setAttribute("frameBorder", "0")
        ifrm.style.width = "1px"
        ifrm.style.height = "1px"

        document.body.appendChild(ifrm)
    }
    setLang(lang){
        this.lang = lang
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
        width: 120px;
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