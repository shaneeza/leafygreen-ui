(self.webpackChunk=self.webpackChunk||[]).push([[1885],{"./packages/a11y/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Lk:()=>v,TX:()=>O,Tb:()=>y,nk:()=>m});var d,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/emotion/dist/esm/index.js"),react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./packages/hooks/dist/esm/index.js"),__webpack_require__("./node_modules/react/index.js")),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);function u(){return u=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},u.apply(this,arguments)}function f(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}function p(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function m(r){return null!=r&&"string"==typeof r?(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_0__.css)(d||(d=f(["\n      @media (prefers-reduced-motion: reduce) {\n        ","\n      }\n    "])),r):""}function y(){var e=function s(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,i,o,a,l=[],u=!0,c=!1;try{if(o=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;u=!1}else for(;!(u=(n=o.call(t)).done)&&(l.push(n.value),l.length!==r);u=!0);}catch(e){c=!0,i=e}finally{try{if(!u&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(c)throw i}}return l}}(e,r)||function(e,r){if(e){if("string"==typeof e)return p(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?p(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(!1),2),r=e[0],t=e[1],n=function n(e){t(e.matches)};return(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((function(){if(window&&window.matchMedia&&"function"==typeof window.matchMedia){var e=window.matchMedia("(prefers-reduced-motion: reduce)");return t(e.matches),e.addEventListener("change",n),function(){return e.removeEventListener("change",n)}}}),[]),r}function v(e,r){e["aria-label"]||e["aria-labelledby"]||console.error("For screen-reader accessibility, aria-label or aria-labelledby must be provided".concat(r?" to ".concat(r):"","."))}var h,g=["children","className"],w=(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_0__.css)(h||(h=f(["\n  clip: rect(0, 0, 0, 0);\n  clip-path: inset(50%);\n  height: 1px;\n  width: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n"])));function O(e){var t=e.children,i=e.className,o=function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}(e,g);return react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",u({},o,{className:(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_0__.cx)(w,i)}),t)}O.displayName="VisuallyHidden",O.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,className:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string},O.__docgenInfo={description:"",methods:[],displayName:"VisuallyHidden",props:{children:{description:"",type:{name:"string"},required:!1},className:{description:"",type:{name:"string"},required:!1}}}},"./packages/icon-button/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>V});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__),_leafygreen_ui_a11y__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/a11y/dist/esm/index.js"),_leafygreen_ui_box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/box/dist/esm/index.js"),_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/emotion/dist/esm/index.js"),_leafygreen_ui_icon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/icon/dist/esm/index.js"),_leafygreen_ui_leafygreen_provider__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/leafygreen-provider/dist/esm/index.js"),_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/lib/dist/esm/index.js"),_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/palette/dist/esm/index.js"),_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/tokens/dist/esm/index.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function g(n,r){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),e.push.apply(e,o)}return e}function d(n){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?g(Object(e),!0).forEach((function(r){p(n,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):g(Object(e)).forEach((function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(e,r))}))}return n}function p(n,r,e){return(r=function(n){var r=function(n,r){if("object"!=_typeof(n)||null===n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var o=e.call(n,"string");if("object"!=_typeof(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==_typeof(r)?r:String(r)}(r))in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}function y(){return y=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},y.apply(this,arguments)}function m(n,r){return r||(r=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(r)}}))}var v,k,O,w,j,x,P,D,S,L,z,E,I,N,C,M,B,T,X,R={Default:"default",Large:"large",XLarge:"xlarge"},q=(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_3__.css)(v||(v=m(["\n  border: none;\n  -webkit-appearance: unset;\n  padding: unset;\n"]))),A=(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_3__.css)(k||(k=m(["\n  display: inline-block;\n  border-radius: 100px;\n  position: relative;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: ","ms ease-in-out;\n  transition-property: color, box-shadow;\n\n  // Set background to fully-transparent white for cross-browser compatability with Safari\n  //\n  // Safari treats \"transparent\" values in CSS as transparent black instead of white\n  // which can make things render differently across browsers if not defined explicitly.\n  background-color: rgba(255, 255, 255, 0);\n\n  &:before {\n    content: '';\n    transition: ","ms all ease-in-out;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    border-radius: 100%;\n    opacity: 0;\n    transform: scale(0.8);\n  }\n\n  &:active:before,\n  &:hover:before,\n  &:focus:before {\n    opacity: 1;\n    transform: scale(1);\n  }\n\n  &:focus {\n    outline: none;\n  }\n"])),_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_8__.nV.default,_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_8__.nV.default),F=(p(x={},R.Default,(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_3__.css)(O||(O=m(["\n    height: 28px;\n    width: 28px;\n  "])))),p(x,R.Large,(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_3__.css)(w||(w=m(["\n    height: 36px;\n    width: 36px;\n  "])))),p(x,R.XLarge,(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_3__.css)(j||(j=m(["\n    height: 42px;\n    width: 42px;\n  "])))),x),G=(p(S={},_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_6__.Q2.Light,(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_3__.css)(P||(P=m(["\n    color: ",";\n\n    &:active,\n    &:hover {\n      color: ",";\n\n      &:before {\n        background-color: ",";\n      }\n    }\n  "])),_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_7__.D.gray.base,_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_7__.D.black,_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_7__.D.gray.light2)),p(S,_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_6__.Q2.Dark,(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_3__.css)(D||(D=m(["\n    color: ",";\n\n    &:active,\n    &:hover {\n      color: ",";\n\n      &:before {\n        background-color: ",";\n      }\n    }\n  "])),_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_7__.D.gray.light1,_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_7__.D.gray.light3,_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_7__.D.gray.dark1)),S),H=(p(E={},_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_6__.Q2.Light,(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_3__.css)(L||(L=m(["\n    &:focus-visible {\n      color: ",";\n      box-shadow: ",";\n\n      &:before {\n        background-color: ",";\n      }\n    }\n  "])),_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_7__.D.black,_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_8__.kN[_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_6__.Q2.Light].default,_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_7__.D.gray.light2)),p(E,_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_6__.Q2.Dark,(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_3__.css)(z||(z=m(["\n    &:focus-visible {\n      color: ",";\n      box-shadow: ",";\n\n      &:before {\n        background-color: ",";\n      }\n    }\n  "])),_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_7__.D.gray.light3,_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_8__.kN[_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_6__.Q2.Dark].default,_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_7__.D.gray.dark1)),E),J=(p(C={},_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_6__.Q2.Light,(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_3__.css)(I||(I=m(["\n    cursor: not-allowed;\n    color: ",";\n    background-color: rgba(255, 255, 255, 0);\n\n    &:active,\n    &:hover {\n      color: ",";\n\n      &:before {\n        background-color: rgba(255, 255, 255, 0);\n      }\n    }\n\n    &:focus {\n      color: ",";\n\n      &:before {\n        background-color: rgba(255, 255, 255, 0);\n      }\n    }\n  "])),_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_7__.D.gray.light1,_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_7__.D.gray.light1,_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_7__.D.gray.light1)),p(C,_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_6__.Q2.Dark,(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_3__.css)(N||(N=m(["\n    cursor: not-allowed;\n    color: ",";\n    background-color: rgba(255, 255, 255, 0);\n\n    &:active,\n    &:hover {\n      color: ",";\n\n      &:before {\n        background-color: rgba(255, 255, 255, 0);\n      }\n    }\n\n    &:focus {\n      color: ",";\n\n      &:before {\n        background-color: rgba(255, 255, 255, 0);\n      }\n    }\n  "])),_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_7__.D.gray.dark1,_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_7__.D.gray.dark1,_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_7__.D.gray.dark1)),C),K=(p(T={},_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_6__.Q2.Light,(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_3__.css)(M||(M=m(["\n    color: ",";\n\n    &:before {\n      background-color: ",";\n      opacity: 1;\n      transform: scale(1);\n    }\n  "])),_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_7__.D.black,_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_7__.D.gray.light2)),p(T,_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_6__.Q2.Dark,(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_3__.css)(B||(B=m(["\n    color: ",";\n\n    &:before {\n      background-color: ",";\n      opacity: 1;\n      transform: scale(1);\n    }\n  "])),_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_7__.D.gray.light3,_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_7__.D.gray.dark1)),T),Q=(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_3__.css)(X||(X=m(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),U=["size","darkMode","disabled","active","tabIndex","className","children"],V=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(r,t){var c,s,b=r.size,u=void 0===b?R.Default:b,g=r.darkMode,m=r.disabled,v=void 0!==m&&m,k=r.active,O=void 0!==k&&k,w=r.tabIndex,j=void 0===w?0:w,x=r.className,P=r.children,D=function h(n,r){if(null==n)return{};var e,o,t=function(n,r){if(null==n)return{};var e,o,t={},a=Object.keys(n);for(o=0;o<a.length;o++)e=a[o],r.indexOf(e)>=0||(t[e]=n[e]);return t}(n,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)e=a[o],r.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(t[e]=n[e])}return t}(r,U),S=(0,_leafygreen_ui_leafygreen_provider__WEBPACK_IMPORTED_MODULE_5__.vs)(g).theme,L="string"==typeof D.href;(0,_leafygreen_ui_a11y__WEBPACK_IMPORTED_MODULE_1__.Lk)(D,"IconButton");var z=react__WEBPACK_IMPORTED_MODULE_0__.Children.map(P,(function(r){if(!r)return null;if((0,_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_6__.Kf)(r,"Icon")||(0,_leafygreen_ui_icon__WEBPACK_IMPORTED_MODULE_4__.fx)(r)){var e=r.props,o=e.size,t=e.title,a={size:o||u};return"string"==typeof t&&0!==t.length||(a.title=!1),react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(r,a)}return r})),E=d(d({},D),{},(p(s={ref:t,tabIndex:j},"aria-disabled",v),p(s,"href",v?void 0:D.href),p(s,"onClick",v?void 0:D.onClick),p(s,"className",(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_3__.cx)(q,A,F[u],G[S],H[S],(p(c={},K[S],O&&!v),p(c,J[S],v),c),x)),s));return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_leafygreen_ui_box__WEBPACK_IMPORTED_MODULE_2__.Z,y({as:L?"a":"button"},E),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:Q},z))}));V.displayName="IconButton",V.propTypes={darkMode:prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool,size:prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOf(Object.values(R)),className:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_9___default().node,disabled:prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool,href:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,active:prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool},V.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{darkMode:{description:"",type:{name:"bool"},required:!1},size:{description:"",type:{name:"enum",value:[{value:'"default"',computed:!1},{value:'"large"',computed:!1},{value:'"xlarge"',computed:!1}]},required:!1},className:{description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!1},disabled:{description:"",type:{name:"bool"},required:!1},href:{description:"",type:{name:"string"},required:!1},active:{description:"",type:{name:"bool"},required:!1}}}},"./packages/icon/dist/X.js":function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__,r;function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}r=function(e,r,t){"use strict";var i=function n(e){return e&&"object"==_typeof(e)&&"default"in e?e:{default:e}}(r),a=function l(e){if(e&&e.__esModule)return e;var r=Object.create(null);return e&&Object.keys(e).forEach((function(t){if("default"!==t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function get(){return e[t]}})}})),r.default=e,Object.freeze(r)}(t);function o(e,r,t){return(r=function(e){var r=function(e,r){if("object"!=_typeof(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=_typeof(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==_typeof(r)?r:String(r)}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},u.apply(this,arguments)}function c(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}var s,b,p={small:14,default:16,large:20,xlarge:24},d=["className","size","title","aria-label","aria-labelledby","fill","role"],y=function y(r){var t,n=r.className,l=r.size,i=void 0===l?16:l,y=r.title,m=r["aria-label"],g=r["aria-labelledby"],v=r.fill,O=r.role,j=void 0===O?"img":O,h=function f(e,r){if(null==e)return{};var t,n,l=function(e,r){if(null==e)return{};var t,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}(r,d),L=e.css(s||(s=c(["\n    color: ",";\n  "])),v),w=e.css(b||(b=c(["\n    flex-shrink: 0;\n  "]))),P=function(e,r,t){var n,l,i=t["aria-label"],a=t["aria-labelledby"],u=t.title;switch(e){case"img":return i||a||u?(o(n={},"aria-labelledby",a),o(n,"aria-label",i),o(n,"title",u),n):{"aria-label":(l="X","".concat(l.replace(/([a-z])([A-Z])/g,"$1 $2")," Icon"))};case"presentation":return{"aria-hidden":!0,alt:""}}}(j,0,(o(t={title:y},"aria-label",m),o(t,"aria-labelledby",g),t));return a.createElement("svg",u({className:e.cx(o({},L,null!=v),w,n),height:"number"==typeof i?i:p[i],width:"number"==typeof i?i:p[i],role:j},P,h,{viewBox:"0 0 16 16"}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.2028 3.40381C11.8123 3.01329 11.1791 3.01329 10.7886 3.40381L8.3137 5.87869L5.83883 3.40381C5.44831 3.01329 4.81514 3.01329 4.42462 3.40381L3.71751 4.11092C3.32699 4.50144 3.32699 5.13461 3.71751 5.52513L6.19238 8.00001L3.71751 10.4749C3.32699 10.8654 3.32699 11.4986 3.71751 11.8891L4.42462 12.5962C4.81514 12.9867 5.44831 12.9867 5.83883 12.5962L8.3137 10.1213L10.7886 12.5962C11.1791 12.9867 11.8123 12.9867 12.2028 12.5962L12.9099 11.8891C13.3004 11.4986 13.3004 10.8654 12.9099 10.4749L10.435 8.00001L12.9099 5.52513C13.3004 5.13461 13.3004 4.50144 12.9099 4.11092L12.2028 3.40381Z",fill:"currentColor"}))};return y.displayName="X",y.isGlyph=!0,y.propTypes={fill:i.default.string,size:i.default.oneOfType([i.default.number,i.default.string]),className:i.default.string},y},"object"==_typeof(exports)?module.exports=r(__webpack_require__("./packages/emotion/dist/esm/index.js"),__webpack_require__("./node_modules/prop-types/index.js"),__webpack_require__("./node_modules/react/index.js")):(__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__("./packages/emotion/dist/esm/index.js"),__webpack_require__("./node_modules/prop-types/index.js"),__webpack_require__("./node_modules/react/index.js")],void 0===(__WEBPACK_AMD_DEFINE_RESULT__="function"==typeof(__WEBPACK_AMD_DEFINE_FACTORY__=r)?__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__):__WEBPACK_AMD_DEFINE_FACTORY__)||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))}}]);