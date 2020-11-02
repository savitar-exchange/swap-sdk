!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Swap=e():t.Swap=e()}(window,(function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";n.r(e),n.d(e,"Widget",(function(){return b}));var o={fr:{cookies_not_enabled:"Les cookies ne sont pas activés, pour continuer veuillez cliquer sur le bouton ci-dessous",continue:"Continuer",buy:"Acheter",payer:"Payer",in:"en",pay_now:"Acheter maintenant avec Swap"},en:{cookies_not_enabled:"Cookies are not enabled, to continue click on the button below",continue:"Continue",buy:"Buy",pay:"Pay",in:"in",pay_now:"Pay now with Swap"}};function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?a(t):e}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function c(t){var e="function"==typeof Map?new Map:void 0;return(c=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,o)}function o(){return s(t,arguments,l(this).constructor)}return o.prototype=Object.create(t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),d(o,t)})(t)}function s(t,e,n){return(s=u()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(t,o));return n&&d(i,n.prototype),i}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){h(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function m(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var y={type:"modal",lang:"fr",embedContainerId:"swap-embed",iframeContainerClass:"swap-widget-container",buttonId:"swap-init",payButtons:!1,payButtonsStyle:!0,config:{}},b=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y;v(this,t),e=p(p({},y),e),this.base_url="https://swap.savitar.io/widget",this.config=p({},e.config),this.default_config=p({},e.config),this.widgetStarted=!1,this.widgetType=e.type,this.lang=e.lang,this.iframe=document.createElement("iframe"),this.iframeContainerClass=e.iframeContainerClass,this.embedContainerId=e.embedContainerId,this.buttonId=e.buttonId,this.payButtons=e.payButtons,this.popup,this.ready=!1,this.injectStyle(),e.payButtons&&e.payButtonsStyle&&this.injectButtonStyle(),"modal"!==e.type&&"embed"!==e.type||(this.widgetType=e.type)}var e,n,i;return e=t,(n=[{key:"init",value:function(){return this.setupEvents(),"embed"===this.widgetType&&""!==this.embedContainerId&&this.initEmbed(this.embedContainerId),"modal"===this.widgetType&&this.initModal(),this.payButtons&&this.initButtons(),this}},{key:"on",value:function(t,e){switch(t){case"ready":this.onReady=e;break;case"close":this.onExit=e;break;case"failure":this.onFailure=e;break;case"success":this.onSuccess=e;break;default:throw new k('"'+t+'" event do not exists')}return this}},{key:"injectStyle",value:function(){var t=document.createElement("style");t.type="text/css",t.innerText=w,document.head.appendChild(t)}},{key:"injectButtonStyle",value:function(){var t=document.createElement("style");t.type="text/css",t.innerText=_,document.head.appendChild(t)}},{key:"closeModalEvents",value:function(){var t=this;document.removeEventListener("click",(function(e){return t.modalEvents(t,e)}))}},{key:"initModal",value:function(){var t=this,e=document.querySelectorAll("#".concat(this.buttonId)),n=Math.round(100*Math.random());e.forEach((function(e){console.log("btn",e),e.setAttribute("svt-rand",n),document.addEventListener("click",(function(e){return t.modalEvents(t,e,n)}))}))}},{key:"modalEvents",value:function(t,e,n){var o=e.target;"BUTTON"!==o.tagName&&"SPAN"!==o.tagName||!o.attributes.id||n&&parseInt(o.attributes["svt-rand"].value)===n&&(o.attributes.id.value!==t.buttonId||t.widgetStarted||t.checkIframeCookie((function(e){return console.log("cookie state",e),e?t.openModal():t.openPopup()})))}},{key:"openModal",value:function(){this.widgetStarted||(this.iframe=this.initIframe(),this.iframe.setAttribute("style",g),this.widgetStarted=!0,document.body.appendChild(this.iframe))}},{key:"closeModal",value:function(){this.resetFrame(),this.closeModalEvents(),this.closeEvents()}},{key:"openPopup",value:function(){var t,e,n,o,i,r,a,c,s,u,d,l,f,p="".concat(this.base_url,"?type=").concat(this.widgetType);(null===(t=this.config)||void 0===t?void 0:t.email)&&(p="".concat(p,"&email=").concat(this.config.email)),p="".concat(p,"&email_editable=").concat((null===(e=this.config)||void 0===e?void 0:e.email_editable)||"true"),(null===(n=this.config)||void 0===n?void 0:n.currency)&&(p="".concat(p,"&currency=").concat(this.config.currency)),(null===(o=this.config)||void 0===o?void 0:o.amount)&&(p="".concat(p,"&amount=").concat(this.config.amount)),(null===(i=this.config)||void 0===i?void 0:i.amount_currency)&&(p="".concat(p,"&amount_currency=").concat(this.config.amount_currency)),p="".concat(p,"&amount_editable=").concat((null===(r=this.config)||void 0===r?void 0:r.amount_editable)||"true"),(null===(a=this.config)||void 0===a?void 0:a.delivery_address)&&(p="".concat(p,"&delivery_address=").concat(this.config.delivery_address)),(null===(c=this.config)||void 0===c?void 0:c.payment_type)&&(p="".concat(p,"&payment_type=").concat(this.config.payment_type)),(null===(s=this.config)||void 0===s?void 0:s.order_type)&&(p="".concat(p,"&order_type=").concat(this.config.order_type)),(null===(u=this.config)||void 0===u?void 0:u.broker_address)&&(p="".concat(p,"&broker_address=").concat(this.config.broker_address)),(null===(d=this.config)||void 0===d?void 0:d.hide_confirm)&&(p="".concat(p,"&hide_confirm=").concat(this.config.hide_confirm)),(null===(l=this.config)||void 0===l?void 0:l.iov_domain)&&(p="".concat(p,"&iov_domain=").concat(this.config.iov_domain)),(null===(f=this.config)||void 0===f?void 0:f.ref_code)&&(p="".concat(p,"&refCode=").concat(this.config.ref_code)),p="".concat(p,"&lang=").concat(this.lang);var h=void 0!==window.screenLeft?window.screenLeft:window.screenX,v=void 0!==window.screenTop?window.screenTop:window.screenY,m=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width,y=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height,b=m/window.screen.availWidth,g=(m-400)/2/b+h,w=(y-550)/2/b+v,_="\n            directories=0,titlebar=0,toolbar=0,location=0,status=0,menubar=0,scrollbars=no,resizable=no,\n            width=".concat(400/b,", \n            height=").concat(550/b,", \n            top=").concat(w,", \n            left=").concat(g,"\n        "),k=window.open(p,"Savitar Swap",_);window.focus&&k.focus()}},{key:"initIframe",value:function(){var t,e,n,o,i,r,a,c,s,u,d,l,f,p="".concat(this.base_url,"?type=").concat(this.widgetType);return(null===(t=this.config)||void 0===t?void 0:t.email)&&(p="".concat(p,"&email=").concat(this.config.email)),p="".concat(p,"&email_editable=").concat((null===(e=this.config)||void 0===e?void 0:e.email_editable)||"true"),(null===(n=this.config)||void 0===n?void 0:n.currency)&&(p="".concat(p,"&currency=").concat(this.config.currency)),(null===(o=this.config)||void 0===o?void 0:o.amount)&&(p="".concat(p,"&amount=").concat(this.config.amount)),(null===(i=this.config)||void 0===i?void 0:i.amount_currency)&&(p="".concat(p,"&amount_currency=").concat(this.config.amount_currency)),p="".concat(p,"&amount_editable=").concat((null===(r=this.config)||void 0===r?void 0:r.amount_editable)||"true"),(null===(a=this.config)||void 0===a?void 0:a.delivery_address)&&(p="".concat(p,"&delivery_address=").concat(this.config.delivery_address)),(null===(c=this.config)||void 0===c?void 0:c.payment_type)&&(p="".concat(p,"&payment_type=").concat(this.config.payment_type)),(null===(s=this.config)||void 0===s?void 0:s.order_type)&&(p="".concat(p,"&order_type=").concat(this.config.order_type)),(null===(u=this.config)||void 0===u?void 0:u.broker_address)&&(p="".concat(p,"&broker_address=").concat(this.config.broker_address)),(null===(d=this.config)||void 0===d?void 0:d.hide_confirm)&&(p="".concat(p,"&hide_confirm=").concat(this.config.hide_confirm)),(null===(l=this.config)||void 0===l?void 0:l.iov_domain)&&(p="".concat(p,"&iov_domain=").concat(this.config.iov_domain)),(null===(f=this.config)||void 0===f?void 0:f.ref_code)&&(p="".concat(p,"&refCode=").concat(this.config.ref_code)),p="".concat(p,"&lang=").concat(this.lang),this.iframe.setAttribute("src",p),this.iframe.setAttribute("id",this.iframeContainerClass),this.iframe.setAttribute("allowtransparency","true"),this.iframe.setAttribute("frameborder","none"),this.iframe.setAttribute("border","0"),this.iframe.setAttribute("resize","none"),this.iframe}},{key:"_noCookiesDisclaimer",value:function(t,e){var n=this,i=Math.round(100*Math.random());document.addEventListener("click",(function(t){return n.noCookiesEvents(n,t,i)}));var r=document.createElement("div");r.className="text-center";var a=document.createElement("span"),c=document.createTextNode(o[this.lang].cookies_not_enabled);a.appendChild(c);var s=document.createElement("div"),u=document.createElement("button");u.innerHTML=o[this.lang].continue,u.className="swap-open",u.id="nocookies-"+i,s.appendChild(u),r.appendChild(a),r.appendChild(s),e.appendChild(r)}},{key:"initEmbed",value:function(t){var e=this,n=document.getElementById(t);if(null===n)throw new k("#"+t+" container not found");this.checkIframeCookie((function(o){if(!o)return e._noCookiesDisclaimer(t,n);e.iframe=e.initIframe(),e.widgetStarted=!0,e.iframe.setAttribute("class",e.iframeContainerClass),n.appendChild(e.iframe)}))}},{key:"initButtons",value:function(){var t=this;document.addEventListener("click",(function(e){return t.buttonsEvents(t,e)})),document.querySelectorAll('button[type="svt-btn"').forEach((function(e){if(0===e.innerText.length){var n,i=e.getAttribute("svt-amount"),r=e.getAttribute("svt-currency"),a=e.getAttribute("svt-payment-type"),c=e.getAttribute("svt-order-type")||"buy",s=e.getAttribute("svt-amount-currency")||"eur";n="merchant"===a?o[t.lang].pay+" ":o[t.lang].buy+" ",n="sell"===c?"Sell ":n;var u="eur"===s?"€":r.toUpperCase();i&&(n+=i+" "+u+" ");var d="eur"!==s?"EUR":r.toUpperCase();r&&(n+=(i?o[t.lang].in+" ":"")+d),e.textContent=n||o[t.lang].pay_now}}))}},{key:"closeButtonsEvents",value:function(){var t=this;document.removeEventListener("click",(function(e){return t.buttonsEvents(t,e)}))}},{key:"noCookiesEvents",value:function(t,e,n){var o=e.target;"BUTTON"===o.tagName&&o.attributes.id.value==="nocookies-"+n&&t.openPopup()}},{key:"buttonsEvents",value:function(t,e){var n=e.target;if("BUTTON"===n.tagName||"SAVITAR"===n.tagName){var o,i;if("svt-btn"!==(null===(o=n.attributes)||void 0===o||null===(i=o.type)||void 0===i?void 0:i.value))return;var r=n.getAttribute("svt-email"),a="true"===n.getAttribute("svt-email-editable"),c=n.getAttribute("svt-amount"),s="true"===n.getAttribute("svt-amount-editable"),u=n.getAttribute("svt-amount-currency"),d=n.getAttribute("svt-currency"),l=n.getAttribute("svt-delivery-address"),f=n.getAttribute("svt-payment-type"),p=n.getAttribute("svt-order-type"),h=n.getAttribute("svt-broker-address"),v=n.getAttribute("svt-iov-domain"),m=n.getAttribute("svt-ref-code");t.widgetStarted||(c&&(this.config.amount=c),s&&(this.config.amount_editable=s),u&&(this.config.amount_currency=u),r&&(this.config.email=r),a&&(this.config.email_editable=a),d&&(this.config.currency=d),l&&(this.config.delivery_address=l),f&&(this.config.payment_type=f),p&&(this.config.order_type=p),h&&(this.config.broker_address=h),hide_confirm&&(this.config.hide_confirm=hide_confirm),v&&(this.config.iov_domain=v),m&&(this.config.ref_code=m),t.openPopup())}}},{key:"callbacksListeners",value:function(t,e){var n,o;if(void 0!==e.data.action)switch(e.data.action){case"ready":"function"!=typeof t.onReady||this.ready||(t.onReady(),this.ready=!0);break;case"success":(null===(n=this.config)||void 0===n?void 0:n.hide_confirm)&&"modal"===this.widgetType&&this.closeModal(),"function"==typeof t.onSuccess&&t.onSuccess(e.data.data);break;case"failure":(null===(o=this.config)||void 0===o?void 0:o.hide_confirm)&&"modal"===this.widgetType&&this.closeModal(),"function"==typeof t.onFailure&&t.onFailure(e.data.data);break;case"close":"modal"===t.widgetType&&t.closeModal(),"function"==typeof t.onExit&&t.onExit();break;case"exited":break;default:throw new k(' "'+e.data.action+'" action not handled.')}}},{key:"setupEvents",value:function(){var t=this;window.addEventListener("message",(function(e){return t.callbacksListeners(t,e)}))}},{key:"closeEvents",value:function(){var t=this;window.removeEventListener("message",(function(e){return t.callbacksListeners(t,e)}))}},{key:"resetFrame",value:function(){this.config=p({},this.default_config),this.iframe.setAttribute("src","#"),this.iframe.setAttribute("style","display:none"),this.widgetStarted=!1,document.body.appendChild(this.iframe),this.ready=!1}},{key:"checkIframeCookie",value:function(t){window.addEventListener("message",(function n(o){"https://exchange.savitar.io"===o.origin&&("iframecookie=true"===o.data?(t(!0),e.remove()):"iframecookie=false"===o.data&&(t(!1),e.remove()),window.removeEventListener("message",n))}),!1);var e=document.createElement("iframe");e.setAttribute("src","https://exchange.savitar.io/api/v1/checkcookie"),e.setAttribute("frameBorder","0"),e.style.width="1px",e.style.height="1px",document.body.appendChild(e)}},{key:"setLang",value:function(t){this.lang=t}}])&&m(e.prototype,n),i&&m(e,i),t}(),g="\n    z-index: 1000;\n    overflow: hidden auto;\n    visibility: visible;\n    position: fixed;\n    background-color: rgba(0,0,0,0.3);\n    border-color: transparent;\n    border-width: 0;\n    border-style: none;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    -webkit-tap-highlight-color: transparent;\n",w='\n    @import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,400&display=swap");\n\n    .swap-open {\n        font-family: Roboto, sans-serif;\n\n        background-color: '.concat("#0d4d9a",";\n        border-radius: 20px;\n        display: inline-block;\n        font-weight: 400;\n        color: #ffffff;\n        width: 120px;\n        text-align: center;\n        vertical-align: middle;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        border: 1px solid transparent;\n        padding: .375rem .75rem;\n        font-size: 1rem;\n        line-height: 1.5;\n        border-radius: .25rem;\n        transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;\n    }\n    .swap-open:hover {\n        -webkit-transition: background-color .25s ease-in-out;\n        transition: background-color .25s ease-in-out;\n        background-color: #0f59b2;\n    }\n\n    .swap-widget-container {\n        width: 100%;\n        min-height: 480px;\n        border-color: transparent;\n        border-width: 0;\n        border-style: none;\n        left: 0;\n        top: 0;\n        -webkit-tap-highlight-color: transparent\n    }\n\n"),_="    \n    button[type='svt-btn']{\n        font-family: Roboto, sans-serif;\n\n        background-color: ".concat("#0d4d9a",";\n        border-radius: 20px;\n        display: inline-block;\n        font-weight: 400;\n        color: #ffffff;\n\n        margin: 5px;\n\n        text-align: center;\n        vertical-align: middle;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        border: 1px solid transparent;\n        padding: .375rem .75rem;\n        font-size: 1rem;\n        line-height: 1.5;\n        border-radius: .25rem;\n        transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;\n    }\n\n    button[type='svt-btn']:hover {\n        -webkit-transition: background-color .25s ease-in-out;\n        transition: background-color .25s ease-in-out;\n        background-color: #0f59b2;\n    }\n\n"),k=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(i,t);var e,n,o=(e=i,n=u(),function(){var t,o=l(e);if(n){var i=l(this).constructor;t=Reflect.construct(o,arguments,i)}else t=o.apply(this,arguments);return r(this,t)});function i(){var t;v(this,i);for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t=o.call.apply(o,[this].concat(n)),Error.captureStackTrace&&Error.captureStackTrace(a(t),i),t.name="SwapWidgetError",t}return i}(c(Error))}])}));
//# sourceMappingURL=bundle.js.map