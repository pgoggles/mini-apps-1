(()=>{"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function n(t,r){return!r||"object"!==e(r)&&"function"!=typeof r?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t):r}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}const a=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}(s,React.Component);var a,l,u,c,i=(u=s,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=o(u);if(c){var r=o(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return n(this,e)});function s(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),t=i.call(this,e);for(var r=[],n=0;n<e.n;n++){for(var o=[],a=0;a<e.n;a++)o.push({value:0,indices:"R"+n+"C"+a});r.push(o)}return t.state={gameBoard:r,n:e.n,currentPlayer:1,currentPlayerColor:"Red's Turn",rowFull:"",totalPlays:0,winner:""},t}return a=s,(l=[{key:"onClick",value:function(e){if(""===this.state.winner){for(var t=e.target.classList[1].split("R")[1].split("C"[0]),r=(t[0],t[1]),n=this.state.gameBoard,o=-1,a=this.state.n-1;a>-1;a--)if(0===n[a][r].value){o=a;break}if(o>-1){n[o][r].value=this.state.currentPlayer;var l=1===this.state.currentPlayer?2:1,u="Red's Turn"===this.state.currentPlayerColor?"Black's Turn":"Red's Turn",c=this.state.totalPlays+1;this.setState({gameBoard:n,currentPlayer:l,currentPlayerColor:u,rowFull:"",totalPlays:c}),c>6&&this.checkWin(n)}else this.setState({rowFull:"This row column is full, please play in another column."})}}},{key:"checkWin",value:function(e){if(""===this.state.winner){for(var t=-1,r=0;r<e.length;r++)for(var n=0;n<e.length;n++){var o=e[r][n].value;r<4&&0!==o&&o===e[r+1][n].value&&o===e[r+2][n].value&&o===e[r+3][n].value&&(t=o),n<4&&0!==o&&o===e[r][n+1].value&&o===e[r][n+2].value&&o===e[r][n+3].value&&(t=o),r<4&&n<4&&0!==o&&o===e[r+1][n+1].value&&o===e[r+2][n+2].value&&o===e[r+3][n+3].value&&(t=o),r>4&&n<4&&0!==o&&o===e[r-1][n+1].value&&o===e[r-2][n+2].value&&o===e[r-3][n+3].value&&(t=o)}1===t?this.setState({winner:"Red has won the game.",currentPlayerColor:""}):2===t&&this.setState({winner:"Black has won the game.",currentPlayerColor:""})}}},{key:"render",value:function(){var e=this;return React.createElement("div",null,React.createElement("div",null,this.state.gameBoard.map((function(t){return React.createElement("div",null,t.map((function(t){var r="circle"+t.value+" "+t.indices;return React.createElement("div",{class:r,onClick:e.onClick.bind(e)})})))}))),React.createElement("div",null,this.state.currentPlayerColor),React.createElement("div",null,this.state.rowFull),React.createElement("div",null,this.state.winner))}}])&&t(a.prototype,l),s}();ReactDOM.render(React.createElement(a,{n:7}),document.getElementById("App"))})();