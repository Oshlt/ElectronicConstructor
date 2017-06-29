!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist",e(e.s=1)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.FPS=60},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();n(2);var o=n(0),s=(function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);e.default=t}(o),n(7));new(function(){function t(e){i(this,t),this.canvas=document.getElementById(e),this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight,this.ctx=this.canvas.getContext("2d"),this.menu=new s.Menu(this.canvas),this.FPS=60}return r(t,[{key:"init",value:function(){}},{key:"initEvents",value:function(){var t=this;this.canvas.onmousemove=function(e){return t.onMouseMove(e)},this.canvas.ondblclick=function(e){return t.onDoubleClick(e)},this.canvas.onmousedown=function(e){return t.onMouseDown(e)},this.canvas.onmouseup=function(e){return t.onMouseUp(e)}}},{key:"mainLoop",value:function(){this.redraw()}},{key:"onMouseMove",value:function(t){this.getMousePos(t)}},{key:"onDoubleClick",value:function(t){this.getMousePos(t)}},{key:"onMouseDown",value:function(t){this.getMousePos(t)}},{key:"onMouseUp",value:function(t){this.deselectElements(),this.canvas.style.cursor="default"}},{key:"isElementHover",value:function(t,e){return e.x>=t.posX&&t.posX+t.width>=e.x&&e.y>=t.posY&&t.posY+t.height>=e.y}},{key:"getMousePos",value:function(t){var e=this.canvas.getBoundingClientRect();return{x:t.clientX-e.left,y:t.clientY-e.top}}},{key:"clear",value:function(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}},{key:"draw",value:function(){}},{key:"redraw",value:function(){this.clear(),this.draw()}}]),t}())("app").init()},function(t,e,n){var i=n(3);"string"==typeof i&&(i=[[t.i,i,""]]);var r={};r.transform=void 0;n(5)(i,r);i.locals&&(t.exports=i.locals)},function(t,e,n){e=t.exports=n(4)(void 0),e.push([t.i,"*{margin:0;padding:0}",""])},function(t,e,n){"use strict";function i(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var o=r(i);return[n].concat(i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"})).concat([o]).join("\n")}return[n].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=i(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<t.length;r++){var s=t[r];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){function i(t,e){for(var n=0;n<t.length;n++){var i=t[n],r=p[i.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](i.parts[o]);for(;o<i.parts.length;o++)r.parts.push(l(i.parts[o],e))}else{for(var s=[],o=0;o<i.parts.length;o++)s.push(l(i.parts[o],e));p[i.id]={id:i.id,refs:1,parts:s}}}}function r(t,e){for(var n=[],i={},r=0;r<t.length;r++){var o=t[r],s=e.base?o[0]+e.base:o[0],a=o[1],u=o[2],c=o[3],l={css:a,media:u,sourceMap:c};i[s]?i[s].parts.push(l):n.push(i[s]={id:s,parts:[l]})}return n}function o(t,e){var n=y(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=w[w.length-1];if("top"===t.insertAt)i?i.nextSibling?n.insertBefore(e,i.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),w.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function s(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=w.indexOf(t);e>=0&&w.splice(e,1)}function a(t){var e=document.createElement("style");return t.attrs.type="text/css",c(e,t.attrs),o(t,e),e}function u(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",c(e,t.attrs),o(t,e),e}function c(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function l(t,e){var n,i,r,o;if(e.transform&&t.css){if(!(o=e.transform(t.css)))return function(){};t.css=o}if(e.singleton){var c=g++;n=m||(m=a(e)),i=f.bind(null,n,c,!1),r=f.bind(null,n,c,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(e),i=d.bind(null,n,e),r=function(){s(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(e),i=h.bind(null,n),r=function(){s(n)});return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else r()}}function f(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=x(e,r);else{var o=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function h(t,e){var n=e.css,i=e.media;if(i&&t.setAttribute("media",i),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function d(t,e,n){var i=n.css,r=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||o)&&(i=b(i)),r&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var s=new Blob([i],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}var p={},v=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),y=function(t){var e={};return function(n){return void 0===e[n]&&(e[n]=t.call(this,n)),e[n]}}(function(t){return document.querySelector(t)}),m=null,g=0,w=[],b=n(6);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=v()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=r(t,e);return i(n,e),function(t){for(var o=[],s=0;s<n.length;s++){var a=n[s],u=p[a.id];u.refs--,o.push(u)}if(t){i(r(t,e),e)}for(var s=0;s<o.length;s++){var u=o[s];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete p[u.id]}}}};var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){"use strict";t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,i=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))return t;var o;return o=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:i+r.replace(/^\.\//,""),"url("+JSON.stringify(o)+")"})}},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=n(0),s=(e.Menu=function(){function t(e){i(this,t),this.canvas=e,this.ctx=e.getContext("2d"),this.partOfCanvas=5,this.width=this.canvas.width/this.partOfCanvas,this.height=this.canvas.height,this.posX=this.canvas.width-this.width,this.posY=0,this.isDisplayed=!0,this.borderWidth=2,this.borderColor="#000000",this.backgroundColor="#cccccc",this.items=new s(this),this.itemTopMargin=10,this.itemTextSize=18,this.itemTextFont="Tahoma",this.itemTextColor="#000000",this.init()}return r(t,[{key:"initItems",value:function(){this.items.add("Copper"),this.items.add("another item")}},{key:"show",value:function(){this.isDisplayed=!0}},{key:"hide",value:function(){this.isDisplayed=!1}},{key:"init",value:function(){var t=this;this.initItems(),setInterval(function(){return t.mainLoop()},1e3/o.FPS)}},{key:"drawBorder",value:function(){this.ctx.lineWidth=this.borderWidth,this.ctx.strokeStyle=this.borderColor,this.ctx.strokeRect(this.posX,this.posY,this.width,this.height)}},{key:"drawBackground",value:function(){this.ctx.fillStyle=this.backgroundColor,this.ctx.fillRect(this.posX,this.posY,this.width,this.height)}},{key:"draw",value:function(){this.isDisplayed&&(this.drawBackground(),this.drawBorder(),this.items.draw())}},{key:"clear",value:function(){this.ctx.clearRect(this.posX,this.posY,this.width,this.height)}},{key:"redraw",value:function(){this.clear(),this.draw()}},{key:"mainLoop",value:function(){this.redraw()}}]),t}(),function(){function t(e){i(this,t),this.menu=e;for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];this.items=r}return r(t,[{key:"draw",value:function(){var t=this;this.forEach(function(e,n){return e.draw(t.menu,n)},0,!0)}},{key:"add",value:function(t){return t.constructor!==a&&(t=new a(this.menu,t)),this.items.push(t),this.items}},{key:"remove",value:function(t){return t.constructor===a&&(t=t.text),this.items=this.items.filter(function(e){return e.text!==t}),this.items}},{key:"forEach",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=void 0;i=n?this.displayedItems:this.items;for(var r=e,o=i.length+e;r<o;r++)t(i[r-e],r)}},{key:"displayedItems",get:function(){return this.items.filter(function(t){return t.isDisplayed})}},{key:"displayedItemsLength",get:function(){return this.displayedItems.length}},{key:"length",get:function(){return this.items.length}}]),t}()),a=function(){function t(e,n){i(this,t),this.menu=e,this.text=n,this.isDisplayed=!0,this.isSelected=!1}return r(t,[{key:"show",value:function(){this.isDisplayed=!0}},{key:"hide",value:function(){this.isDisplayed=!1}},{key:"select",value:function(){this.isSelected=!0}},{key:"deselect",value:function(){this.isSelected=!1}},{key:"draw",value:function(t,e){if(this.isDisplayed){t.ctx.fillStyle=t.itemTextColor,t.ctx.font=t.itemTextSize+"px "+t.itemTextFont,t.ctx.textAlign="center";var n=++e,i=t.posX+t.width/2,r=t.itemTextSize*n+t.itemTopMargin*n;t.ctx.fillText(this.text,i,r)}}}]),t}()}]);