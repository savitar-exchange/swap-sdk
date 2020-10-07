(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Swap"] = factory();
	else
		root["Swap"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.js */ "./src/index.js");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Widget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Widget", function() { return Widget; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DEFAULT_OPTS = {
  type: 'modal',
  locale: 'fr',
  embedContainerId: 'swap-embed',
  iframeContainerClass: 'swap-widget-container',
  buttonId: 'swap-init',
  payButtons: false,
  payButtonsStyle: true,
  config: {}
};
var LOCALES = {
  fr: {
    'cookies_not_enabled': 'Les cookies ne sont pas activés, pour continuer veuillez cliquer sur le bouton ci-dessous',
    'continue': 'Continuer',
    'buy': 'Acheter',
    'payer': 'Payer',
    'in': 'en',
    'pay_now': 'Acheter maintenant avec Swap'
  },
  en: {
    'cookies_not_enabled': 'Cookies are not enabled, to continue click on the button below',
    'continue': 'Continue',
    'buy': 'Buy',
    'pay': 'Pay',
    'in': 'in',
    'pay_now': 'Pay now with Swap'
  }
};
var Widget = /*#__PURE__*/function () {
  function Widget() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_OPTS;

    _classCallCheck(this, Widget);

    options = _objectSpread(_objectSpread({}, DEFAULT_OPTS), options);
    this.base_url = "http://swap.savitar.devel" + '/widget';
    this.config = _objectSpread({}, options.config);
    this.default_config = _objectSpread({}, options.config);
    this.widgetStarted = false;
    this.widgetType = options.type;
    this.locale = options.locale;
    this.iframe = document.createElement('iframe');
    this.iframeContainerClass = options.iframeContainerClass;
    this.embedContainerId = options.embedContainerId;
    this.buttonId = options.buttonId;
    this.payButtons = options.payButtons;
    this.popup;
    this.injectStyle();
    if (options.payButtons && options.payButtonsStyle) this.injectButtonStyle();

    if (options.type === 'modal' || options.type === 'embed') {
      this.widgetType = options.type;
    } // this.userOnboardSuccessCallback = null
    // this.onExit = null
    // this.userOnboardDeclinedCallback = null

  }

  _createClass(Widget, [{
    key: "init",
    value: function init() {
      this.setupEvents();
      if (this.widgetType === 'embed' && this.embedContainerId !== '') this.initEmbed(this.embedContainerId);
      if (this.widgetType === 'modal') this.initModal();
      if (this.payButtons) this.initButtons();
      return this;
    }
  }, {
    key: "on",
    value: function on(type, callback) {
      switch (type) {
        case 'ready':
          this.onReady = callback;
          break;

        case 'close':
          this.onExit = callback;
          break;

        default:
          throw new SwapWidgetError('"' + type + '" event do not exists');
      }

      return this;
    } // private methods

  }, {
    key: "injectStyle",
    value: function injectStyle() {
      var styleSheet = document.createElement('style');
      styleSheet.type = 'text/css';
      styleSheet.innerText = globalStyles;
      document.head.appendChild(styleSheet);
    }
  }, {
    key: "injectButtonStyle",
    value: function injectButtonStyle() {
      var styleSheet = document.createElement('style');
      styleSheet.type = 'text/css';
      styleSheet.innerText = buttonStyle;
      document.head.appendChild(styleSheet);
    }
  }, {
    key: "injectNoCookiesStyle",
    value: function injectNoCookiesStyle(id) {
      var styleSheet = document.createElement('style');
      styleSheet.type = 'text/css';
      styleSheet.innerText = noCookiesStyle(id);
      document.head.appendChild(styleSheet);
    } //Modal

  }, {
    key: "initModal",
    value: function initModal() {
      var _this = this;

      document.addEventListener('click', function (e) {
        return _this.modalEvents(_this, e);
      });
    }
  }, {
    key: "closeModalEvents",
    value: function closeModalEvents() {
      var _this2 = this;

      document.removeEventListener('click', function (e) {
        return _this2.modalEvents(_this2, e);
      });
    }
  }, {
    key: "modalEvents",
    value: function modalEvents(self, event) {
      var element = event.target;

      if ((element.tagName === 'BUTTON' || element.tagName === 'SPAN') && element.attributes.id) {
        if (element.attributes.id.value === self.buttonId && !self.widgetStarted) {
          self.checkIframeCookie(function (status) {
            return status ? self.openModal() : self.openPopup();
          });
        }
      }
    }
  }, {
    key: "openModal",
    value: function openModal() {
      if (this.widgetStarted) return;
      this.iframe = this.initIframe();
      this.iframe.setAttribute('style', iframeStyle);
      this.widgetStarted = true;
      document.body.appendChild(this.iframe);
    }
  }, {
    key: "openPopup",
    value: function openPopup() {
      var _this$config, _this$config2, _this$config3, _this$config4, _this$config5, _this$config6, _this$config7, _this$config8, _this$config9, _this$config10;

      var popupWidth = 400;
      var popupHeight = 550;
      var src = "".concat(this.base_url, "?type=").concat(this.widgetType);
      if ((_this$config = this.config) === null || _this$config === void 0 ? void 0 : _this$config.email) src = "".concat(src, "&email=").concat(this.config.email);
      src = "".concat(src, "&email_editable=").concat(((_this$config2 = this.config) === null || _this$config2 === void 0 ? void 0 : _this$config2.email_editable) || 'true');
      if ((_this$config3 = this.config) === null || _this$config3 === void 0 ? void 0 : _this$config3.currency) src = "".concat(src, "&currency=").concat(this.config.currency);
      if ((_this$config4 = this.config) === null || _this$config4 === void 0 ? void 0 : _this$config4.amount) src = "".concat(src, "&amount=").concat(this.config.amount);
      if ((_this$config5 = this.config) === null || _this$config5 === void 0 ? void 0 : _this$config5.amount_currency) src = "".concat(src, "&amount_currency=").concat(this.config.amount_currency);
      src = "".concat(src, "&amount_editable=").concat(((_this$config6 = this.config) === null || _this$config6 === void 0 ? void 0 : _this$config6.amount_editable) || 'true');
      if ((_this$config7 = this.config) === null || _this$config7 === void 0 ? void 0 : _this$config7.delivery_address) src = "".concat(src, "&delivery_address=").concat(this.config.delivery_address);
      if ((_this$config8 = this.config) === null || _this$config8 === void 0 ? void 0 : _this$config8.payment_type) src = "".concat(src, "&payment_type=").concat(this.config.payment_type);
      if ((_this$config9 = this.config) === null || _this$config9 === void 0 ? void 0 : _this$config9.order_type) src = "".concat(src, "&order_type=").concat(this.config.order_type);
      if ((_this$config10 = this.config) === null || _this$config10 === void 0 ? void 0 : _this$config10.broker_address) src = "".concat(src, "&broker_address=").concat(this.config.broker_address); // Fixes dual-screen position                             Most browsers      Firefox

      var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
      var dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;
      var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
      var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
      var systemZoom = width / window.screen.availWidth;
      var left = (width - popupWidth) / 2 / systemZoom + dualScreenLeft;
      var top = (height - popupHeight) / 2 / systemZoom + dualScreenTop;
      var opts = "\n            directories=0,titlebar=0,toolbar=0,location=0,status=0,menubar=0,scrollbars=no,resizable=no,\n            width=".concat(popupWidth / systemZoom, ", \n            height=").concat(popupHeight / systemZoom, ", \n            top=").concat(top, ", \n            left=").concat(left, "\n        ");
      this.popup = window.open(src, 'Savitar Swap', opts);
      if (window.focus) this.popup.focus();
    }
  }, {
    key: "initIframe",
    value: function initIframe() {
      var _this$config11, _this$config12, _this$config13, _this$config14, _this$config15, _this$config16, _this$config17, _this$config18, _this$config19, _this$config20;

      var src = "".concat(this.base_url, "?type=").concat(this.widgetType);
      if ((_this$config11 = this.config) === null || _this$config11 === void 0 ? void 0 : _this$config11.email) src = "".concat(src, "&email=").concat(this.config.email);
      src = "".concat(src, "&email_editable=").concat(((_this$config12 = this.config) === null || _this$config12 === void 0 ? void 0 : _this$config12.email_editable) || 'true');
      if ((_this$config13 = this.config) === null || _this$config13 === void 0 ? void 0 : _this$config13.currency) src = "".concat(src, "&currency=").concat(this.config.currency);
      if ((_this$config14 = this.config) === null || _this$config14 === void 0 ? void 0 : _this$config14.amount) src = "".concat(src, "&amount=").concat(this.config.amount);
      if ((_this$config15 = this.config) === null || _this$config15 === void 0 ? void 0 : _this$config15.amount_currency) src = "".concat(src, "&amount_currency=").concat(this.config.amount_currency);
      src = "".concat(src, "&amount_editable=").concat(((_this$config16 = this.config) === null || _this$config16 === void 0 ? void 0 : _this$config16.amount_editable) || 'true');
      if ((_this$config17 = this.config) === null || _this$config17 === void 0 ? void 0 : _this$config17.delivery_address) src = "".concat(src, "&delivery_address=").concat(this.config.delivery_address);
      if ((_this$config18 = this.config) === null || _this$config18 === void 0 ? void 0 : _this$config18.payment_type) src = "".concat(src, "&payment_type=").concat(this.config.payment_type);
      if ((_this$config19 = this.config) === null || _this$config19 === void 0 ? void 0 : _this$config19.order_type) src = "".concat(src, "&order_type=").concat(this.config.order_type);
      if ((_this$config20 = this.config) === null || _this$config20 === void 0 ? void 0 : _this$config20.broker_address) src = "".concat(src, "&broker_address=").concat(this.config.broker_address);
      this.iframe.setAttribute('src', src);
      this.iframe.setAttribute('id', this.iframeContainerClass);
      this.iframe.setAttribute('allowtransparency', 'true');
      this.iframe.setAttribute('frameborder', 'none');
      this.iframe.setAttribute('border', '0');
      this.iframe.setAttribute('resize', 'none');
      return this.iframe;
    }
  }, {
    key: "_noCookiesDisclaimer",
    value: function _noCookiesDisclaimer(id, container) {
      var _this3 = this;

      var rand = Math.round(Math.random() * 100);
      document.addEventListener('click', function (e) {
        return _this3.noCookiesEvents(_this3, e, rand);
      });
      this.injectNoCookiesStyle(id);
      var titleSpan = document.createElement('span');
      var title = document.createTextNode(LOCALES[this.locale].cookies_not_enabled);
      titleSpan.appendChild(title);
      var buttonContainer = document.createElement('div');
      var button = document.createElement('button');
      button.innerHTML = LOCALES[this.locale]["continue"];
      button.className = 'swap-open';
      button.id = 'nocookies-' + rand;
      buttonContainer.appendChild(button);
      container.appendChild(titleSpan);
      container.appendChild(buttonContainer);
    }
  }, {
    key: "initEmbed",
    value: function initEmbed(id) {
      var _this4 = this;

      var embedContainer = document.getElementById(id);
      if (embedContainer === null) throw new SwapWidgetError('#' + id + ' container not found');
      this.checkIframeCookie(function (status) {
        if (!status) return _this4._noCookiesDisclaimer(id, embedContainer);
        _this4.iframe = _this4.initIframe();
        _this4.widgetStarted = true;

        _this4.iframe.setAttribute('class', _this4.iframeContainerClass);

        embedContainer.appendChild(_this4.iframe);
      });
    } // Buttons

  }, {
    key: "initButtons",
    value: function initButtons() {
      var _this5 = this;

      document.addEventListener('click', function (e) {
        return _this5.buttonsEvents(_this5, e);
      });
      var buttons = document.querySelectorAll('button[type="svt-btn"');
      buttons.forEach(function (e) {
        if (e.innerText.length === 0) {
          var amount = e.getAttribute('svt-amount');
          var currency = e.getAttribute('svt-currency');
          var payment_type = e.getAttribute('svt-payment-type');
          var order_type = e.getAttribute('svt-order-type') || 'buy';
          var amount_currency = e.getAttribute('svt-amount-currency') || 'eur';
          var text;
          text = payment_type === 'merchant' ? LOCALES[_this5.locale].pay + ' ' : LOCALES[_this5.locale].buy + ' ';
          text = order_type === 'sell' ? 'Sell ' : text;
          var currencyUnit = amount_currency === 'eur' ? '€' : currency.toUpperCase();
          if (amount) text += amount + ' ' + currencyUnit + ' ';
          var amountUnit = amount_currency !== 'eur' ? 'EUR' : currency.toUpperCase();
          if (currency) text += (amount ? LOCALES[_this5.locale]["in"] + ' ' : '') + amountUnit;
          e.textContent = text ? text : LOCALES[_this5.locale].pay_now;
        }
      });
    }
  }, {
    key: "closeButtonsEvents",
    value: function closeButtonsEvents() {
      var _this6 = this;

      document.removeEventListener('click', function (e) {
        return _this6.buttonsEvents(_this6, e);
      });
    }
  }, {
    key: "noCookiesEvents",
    value: function noCookiesEvents(self, event, rand) {
      var element = event.target;
      if (element.tagName !== 'BUTTON') return;
      if (element.attributes.id.value !== 'nocookies-' + rand) return;
      self.openPopup();
    }
  }, {
    key: "buttonsEvents",
    value: function buttonsEvents(self, event) {
      var element = event.target;

      if (element.tagName === 'BUTTON' || element.tagName === 'SAVITAR') {
        var _element$attributes, _element$attributes$t;

        if (((_element$attributes = element.attributes) === null || _element$attributes === void 0 ? void 0 : (_element$attributes$t = _element$attributes.type) === null || _element$attributes$t === void 0 ? void 0 : _element$attributes$t.value) !== 'svt-btn') return;
        var email = element.getAttribute('svt-email');
        var email_editable = element.getAttribute('svt-email-editable') === 'true';
        var amount = element.getAttribute('svt-amount');
        var amount_editable = element.getAttribute('svt-amount-editable') === 'true';
        var amount_currency = element.getAttribute('svt-amount-currency');
        var currency = element.getAttribute('svt-currency');
        var delivery_address = element.getAttribute('svt-delivery-address');
        var payment_type = element.getAttribute('svt-payment-type');
        var order_type = element.getAttribute('svt-order-type');
        var broker_address = element.getAttribute('svt-broker-address');

        if (!self.widgetStarted) {
          if (amount) this.config.amount = amount;
          if (amount_editable) this.config.amount_editable = amount_editable;
          if (amount_currency) this.config.amount_currency = amount_currency;
          if (email) this.config.email = email;
          if (email_editable) this.config.email_editable = email_editable;
          if (currency) this.config.currency = currency;
          if (delivery_address) this.config.delivery_address = delivery_address;
          if (payment_type) this.config.payment_type = payment_type;
          if (order_type) this.config.order_type = order_type;
          if (broker_address) this.config.broker_address = broker_address;
          self.openPopup();
        }
      }
    }
  }, {
    key: "callbacksListeners",
    value: function callbacksListeners(self, e) {
      if (e.data.action === undefined) return;

      switch (e.data.action) {
        case 'ready':
          if (typeof self.onReady === 'function') self.onReady();
          break;

        case 'close':
          if (self.widgetType === 'modal') {
            self.resetFrame();
            self.closeModalEvents();
            self.closeEvents();
          }

          if (typeof self.onExit === 'function') self.onExit();
          break;

        case 'exited':
          break;

        default:
          throw new SwapWidgetError(' "' + e.data.action + '" action not handled.');
      }
    }
  }, {
    key: "setupEvents",
    value: function setupEvents() {
      var _this7 = this;

      window.addEventListener('message', function (e) {
        return _this7.callbacksListeners(_this7, e);
      });
    }
  }, {
    key: "closeEvents",
    value: function closeEvents() {
      var _this8 = this;

      window.removeEventListener('message', function (e) {
        return _this8.callbacksListeners(_this8, e);
      });
    }
  }, {
    key: "resetFrame",
    value: function resetFrame() {
      this.config = _objectSpread({}, this.default_config);
      this.iframe.setAttribute('src', '#');
      this.iframe.setAttribute('style', 'display:none');
      this.widgetStarted = false;
      document.body.appendChild(this.iframe);
    }
  }, {
    key: "checkIframeCookie",
    value: function checkIframeCookie(callback) {
      var receiveMessage = function receiveMessage(event) {
        if (event.origin !== "http://exchange.savitar.devel") return;

        if (event.data === "iframecookie=true") {
          callback(true);
          ifrm.remove();
        } else if (event.data === "iframecookie=false") {
          callback(false);
          ifrm.remove();
        }

        window.removeEventListener("message", receiveMessage);
      };

      window.addEventListener("message", receiveMessage, false);
      var ifrm = document.createElement('iframe');
      ifrm.setAttribute("src", "http://exchange.savitar.devel/api/v0" + "/checkcookie");
      ifrm.setAttribute("frameBorder", "0");
      ifrm.style.width = "1px";
      ifrm.style.height = "1px";
      document.body.appendChild(ifrm);
    }
  }, {
    key: "setLocale",
    value: function setLocale(locale) {
      this.locale = locale;
    }
  }]);

  return Widget;
}();
var iframeStyle = "\n    z-index: 1000;\n    overflow: hidden auto;\n    visibility: visible;\n    position: fixed;\n    background-color: rgba(0,0,0,0.3);\n    border-color: transparent;\n    border-width: 0;\n    border-style: none;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    -webkit-tap-highlight-color: transparent;\n";
var blue_1 = '#0d4d9a';
var globalStyles = "\n    @import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,400&display=swap\");\n\n    .swap-open {\n        font-family: Roboto, sans-serif;\n\n        background-color: ".concat(blue_1, ";\n        border-radius: 20px;\n        display: inline-block;\n        font-weight: 400;\n        color: #ffffff;\n\n        text-align: center;\n        vertical-align: middle;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        border: 1px solid transparent;\n        padding: .375rem .75rem;\n        font-size: 1rem;\n        line-height: 1.5;\n        border-radius: .25rem;\n        transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;\n    }\n    .swap-open:hover {\n        -webkit-transition: background-color .25s ease-in-out;\n        transition: background-color .25s ease-in-out;\n        background-color: #0f59b2;\n    }\n\n    .swap-widget-container {\n        min-width: 540px;\n        width: 100%;\n        min-height: 480px;\n        height: 100%;\n        border-color: transparent;\n        border-width: 0;\n        border-style: none;\n        left: 0;\n        top: 0;\n        -webkit-tap-highlight-color: transparent\n    }\n\n");
var buttonStyle = "    \n    button[type='svt-btn']{\n        font-family: Roboto, sans-serif;\n\n        background-color: ".concat(blue_1, ";\n        border-radius: 20px;\n        display: inline-block;\n        font-weight: 400;\n        color: #ffffff;\n\n        margin: 5px;\n\n        text-align: center;\n        vertical-align: middle;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        border: 1px solid transparent;\n        padding: .375rem .75rem;\n        font-size: 1rem;\n        line-height: 1.5;\n        border-radius: .25rem;\n        transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;\n    }\n\n    button[type='svt-btn']:hover {\n        -webkit-transition: background-color .25s ease-in-out;\n        transition: background-color .25s ease-in-out;\n        background-color: #0f59b2;\n    }\n\n");

var noCookiesStyle = function noCookiesStyle(id) {
  return "   \n    #".concat(id, " {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n    #").concat(id, " > span {\n    } \n\n");
};

var SwapWidgetError = /*#__PURE__*/function (_Error) {
  _inherits(SwapWidgetError, _Error);

  var _super = _createSuper(SwapWidgetError);

  function SwapWidgetError() {
    var _this9;

    _classCallCheck(this, SwapWidgetError);

    for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
      params[_key] = arguments[_key];
    }

    _this9 = _super.call.apply(_super, [this].concat(params));
    if (Error.captureStackTrace) Error.captureStackTrace(_assertThisInitialized(_this9), SwapWidgetError);
    _this9.name = 'SwapWidgetError';
    return _this9;
  }

  return SwapWidgetError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

/***/ })

/******/ });
});
//# sourceMappingURL=bundle.js.map