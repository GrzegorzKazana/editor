/*
object-assign
(c) Sindre Sorhus
@license MIT
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r=n(/*! react */"react"),i=n.n(r),o=n(/*! react-dom */"react-dom"),a=n.n(o),s=n(/*! prop-types */"prop-types"),u=n.n(s);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){function t(){return l(this,t),f(this,h(t).apply(this,arguments))}var r,o,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),r=t,(o=[{key:"propsWith",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n={};return Object.keys(this.props).forEach((function(r){if(-1!==r.search(e)){var i=t?r.replace(e,""):r;n[i]=this.props[r]}}),this),n}},{key:"componentWillUnmount",value:function(){this.clipboard&&this.clipboard.destroy()}},{key:"componentDidMount",value:function(){var e=this.props.options||this.propsWith(/^option-/,!0),t=a.a.findDOMNode(this.element);if(t){var r=n(/*! clipboard */"clipboard");this.clipboard=new r(t,e);var i=this.propsWith(/^on/,!0);Object.keys(i).forEach((function(e){this.clipboard.on(e.toLowerCase(),this.props["on"+e])}),this)}}},{key:"render",value:function(){var e=this,t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){g(e,t,n[t])}))}return e}({title:this.props.title||"",type:this.getType(),className:this.props.className||"",style:this.props.style||{},ref:function(t){return e.element=t},onClick:this.props.onClick},this.propsWith(/^data-/),this.propsWith(/^button-/,!0)),r=n(/*! clipboard */"clipboard");return this.props.isVisibleWhenUnsupported||r.isSupported()?i.a.createElement(this.getComponent(),t,this.props.children):null}},{key:"getType",value:function(){return"button"===this.getComponent()||"input"===this.getComponent()?this.props.type||"button":void 0}},{key:"getComponent",value:function(){return this.props.component||"button"}}])&&d(r.prototype,o),s&&d(r,s),t}(i.a.Component);g(m,"propTypes",{options:function(e,t,n){var r=e[t];return r&&"object"!==c(r)||Array.isArray(r)?new Error("Invalid props '".concat(t,"' supplied to '").concat(n,"'. ")+"'".concat(t,"' is not an object.")):void 0!==e["option-text"]&&"function"!=typeof e["option-text"]?new Error("Invalid props 'option-text' supplied to '".concat(n,"'. ")+"'option-text' is not a function."):void 0},title:u.a.string,type:u.a.string,className:u.a.string,style:u.a.object,component:u.a.any,children:u.a.any}),g(m,"defaultProps",{isVisibleWhenUnsupported:!0,onClick:function(){}}),t.default=m},clipboard:
/*!********************************************************************************************************!*\
  !*** external {"root":"ClipboardJS","amd":"clipboard","commonjs":"clipboard","commonjs2":"clipboard"} ***!
  \********************************************************************************************************/
/*! no static exports found */function(t,n){t.exports=e},"prop-types":
/*!*********************************************************************************************************!*\
  !*** external {"root":"PropTypes","amd":"prop-types","commonjs":"prop-types","commonjs2":"prop-types"} ***!
  \*********************************************************************************************************/
/*! no static exports found */function(e,n){e.exports=t},react:
/*!**************************************************************************************!*\
  !*** external {"root":"React","amd":"react","commonjs":"react","commonjs2":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */function(e,t){e.exports=n},"react-dom":
/*!*****************************************************************************************************!*\
  !*** external {"root":"ReactDOM","amd":"react-dom","commonjs":"react-dom","commonjs2":"react-dom"} ***!
  \*****************************************************************************************************/
/** @license React v16.12.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
/** @license React v16.12.0
 * react-dom.production.min.js
 *
 *
/** @license React v0.18.0
 *