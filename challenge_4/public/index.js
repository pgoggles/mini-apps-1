(()=>{"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t,e){return(n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e):n}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}const c=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}(a,React.Component);var c,u,i,f,l=(i=a,f=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=o(i);if(f){var n=o(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return r(this,t)});function a(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),l.call(this,t)}return c=a,(u=[{key:"gridInitialize",value:function(t){for(var e=[],n=0;n<t;n++){for(var r=[],o=0;o<t;o++)r.push({value:0,indices:"R"+n+"C"+o});e.push(r)}return e}},{key:"render",value:function(){var t=this.gridInitialize(7);return React.createElement("div",null,t.map((function(t){return React.createElement("div",null,t.map((function(t){var e="emptyCircle "+t.indices;return React.createElement("div",{class:e})})))})))}}])&&e(c.prototype,u),a}();ReactDOM.render(React.createElement(c,null),document.getElementById("App"))})();