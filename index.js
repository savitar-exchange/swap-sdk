  

const defaultOpts = {
    type: 'modal',
    mode: 'production',
    embedContainerId: 'savitar-embed',
    iframeContainerClass: 'savitar-widget-container',
    buttonId: 'savitar-init'
}
class SavitarWidget {
	constructor(client_id, options = defaultOpts) {
        options = {
            ...defaultOpts,
            ...options
        }

		this.base_url = 'https://widget.savitar.io/';
        this.client_id = client_id
        this.email = null

        this.widgetStarted = false

        this.widgetType = options.type
		this.iframe = document.createElement('iframe')
        this.iframeContainerClass = options.iframeContainerClass
        this.embedContainerId = options.embedContainerId
        this.buttonId = options.buttonId

		this.injectStyle()

		if (options.mode === 'sandbox') {
            this.base_url = 'http://127.0.0.1:5000';
		}

		if (options.type === 'modal' || options.type === 'embed') {
			this.widgetType = options.type
        }
        
        // this.userOnboardSuccessCallback = null
		// this.onExit = null
		// this.userOnboardDeclinedCallback = null
    }

    init(options = {
		email: ''
	}) {
		this.setupEvents()
        this.email = options.email
        
        if (this.widgetType === 'embed' 
            && this.embedContainerId !== '') this.initEmbed(this.embedContainerId)

        if (this.widgetType === 'modal') this.initModal()
        
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
                throw new SavitarWidgetError('"'+type+'" event do not exists');

        }

        return this
	}
// private methods
    injectStyle() {
		let styleSheet = document.createElement('style')
		styleSheet.type = 'text/css'
		styleSheet.innerText = styles
		document.head.appendChild(styleSheet)
    }
	initModal() {
		document.addEventListener('click', e => this.modalEvents(this, e))
    }
    closeModalEvents() {
        document.removeEventListener('click', e => this.modalEvents(this, e))
    }
    modalEvents(self, event) {
        let element = event.target

        if ( (element.tagName === 'BUTTON' || element.tagName === 'A')
        && element.attributes.id ) {

            if (element.attributes.id.value === this.buttonId 
            && !self.widgetStarted) {
                self.openModal()
            }
        }
    }
    openModal() {
		if (this.widgetStarted) return
        
		let src = `${this.base_url}?client_id=${this.client_id}`
		if (this.email !== null) {
			src = `${src}&email=${this.email}`
		}
        src = `${src}&type=${this.widgetType}`
        
		this.iframe = this.initIframe()
		this.iframe.setAttribute('style', iframeStyle)

        this.widgetStarted = true
		document.body.appendChild(this.iframe)
    }
    initIframe() {
		let src = `${this.base_url}?client_id=${this.client_id}`
		if (this.email !== null) {
			src = `${src}&email=${this.email}`
		}
        src = `${src}&${this.widgetType}`
        
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
        
        if (embedContainer === null) throw new SavitarWidgetError('#'+id+' container not found')

        this.widgetStarted = true
        this.iframe.setAttribute('class', this.iframeContainerClass)
        embedContainer.appendChild(this.iframe)
	}

    callbacksListeners(self, e){
        if(e.data.action === undefined) return

        switch(e.data.action){
            case 'ready':
                if (typeof self.onReady === 'function')  self.onReady()
            break
            case 'close':
                if (self.widgetType === 'modal') {

                    self.resetFrame()
                    self.closeModalEvents()
                    self.closeEvents()
                }
                if (typeof self.onExit === 'function') self.onExit()
            break
            default:
                throw new SavitarWidgetError(' "'+e.data.action+'" action not handled. Contact support.')
        }
    }
    setupEvents() {
		window.addEventListener('message', e => this.callbacksListeners(this, e))
    }
    closeEvents() {
        window.removeEventListener('message', e => this.callbacksListeners(this, e))
    }


	resetFrame() {
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

let styles = `
    @import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,400&display=swap");

    .savitar-open {
        font-family: Roboto, sans-serif;

        background-color: #0d4d9a;
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
    .savitar-open:hover {
        -webkit-transition: background-color .25s ease-in-out;
        transition: background-color .25s ease-in-out;
        background-color: #0f59b2;
    }

    .savitar-widget-container {
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

class SavitarWidgetError extends Error {
    constructor(...params) {
      super(...params)
  
      if(Error.captureStackTrace) Error.captureStackTrace(this, SavitarWidgetError)

      this.name = 'SavitarWidgetError'
    }
}