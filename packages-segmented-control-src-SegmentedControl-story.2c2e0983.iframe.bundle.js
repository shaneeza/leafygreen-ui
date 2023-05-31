(self.webpackChunk=self.webpackChunk||[]).push([[4876],{"./packages/segmented-control/src/SegmentedControl.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Controlled:()=>Controlled,IconsOnly:()=>IconsOnly,Uncontrolled:()=>Uncontrolled,WithIcons:()=>WithIcons,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SegmentedControl_story});var react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("./packages/icon/dist/esm/index.js"),dist_esm=__webpack_require__("./packages/lib/dist/esm/index.js"),isNull=__webpack_require__("./node_modules/lodash/isNull.js"),isNull_default=__webpack_require__.n(isNull),once=__webpack_require__("./node_modules/lodash/once.js"),once_default=__webpack_require__.n(once),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),emotion_dist_esm=__webpack_require__("./packages/emotion/dist/esm/index.js"),hooks_dist_esm=__webpack_require__("./packages/hooks/dist/esm/index.js"),leafygreen_provider_dist_esm=__webpack_require__("./packages/leafygreen-provider/dist/esm/index.js"),typography_dist_esm=__webpack_require__("./packages/typography/dist/esm/index.js"),polished_esm=__webpack_require__("./node_modules/polished/dist/polished.esm.js"),palette_dist_esm=__webpack_require__("./packages/palette/dist/esm/index.js"),tokens_dist_esm=__webpack_require__("./packages/tokens/dist/esm/index.js"),box_dist_esm=__webpack_require__("./packages/box/dist/esm/index.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function N(n,e,r){return(e=function(n){var e=function(n,e){if("object"!=_typeof(n)||null===n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var o=r.call(n,"string");if("object"!=_typeof(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==_typeof(e)?e:String(e)}(e))in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function _(){return _=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])}return n},_.apply(this,arguments)}function D(n,e){if(null==n)return{};var r,o,t=function(n,e){if(null==n)return{};var r,o,t={},a=Object.keys(n);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||(t[r]=n[r]);return t}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function A(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function I(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var o,t,a,i,l=[],c=!0,d=!1;try{if(a=(r=r.call(n)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(o=a.call(r)).done)&&(l.push(o.value),l.length!==e);c=!0);}catch(n){d=!0,t=n}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(d)throw t}}return l}}(n,e)||function(n,e){if(n){if("string"==typeof n)return L(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?L(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,o=new Array(e);r<e;r++)o[r]=n[r];return o}var P,F,M,H,T,X,q,K,V,G,R,U,$,B,J,Z,nn,W={XSmall:"xsmall",Default:"default",Large:"large"},Y=react.createContext({size:W.Default,theme:dist_esm.Q2.Light,name:"",followFocus:!0}),en=(0,emotion_dist_esm.css)(P||(P=A(["\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  z-index: 0;\n  font-family: ",";\n"])),tokens_dist_esm.Vl.default),rn=(0,emotion_dist_esm.css)(F||(F=A(["\n  white-space: nowrap;\n"]))),on=(N(T={},dist_esm.Q2.Light,(0,emotion_dist_esm.css)(M||(M=A(["\n    color: ",";\n  "])),palette_dist_esm.D.gray.dark1)),N(T,dist_esm.Q2.Dark,(0,emotion_dist_esm.css)(H||(H=A(["\n    color: ",";\n  "])),palette_dist_esm.D.gray.light1)),T),tn=(N(V={},W.XSmall,(0,emotion_dist_esm.css)(X||(X=A(["\n    --segment-gap: 1px; // space between segments\n    --wrapper-padding: 0px;\n    --indicator-height: 100%;\n    --outer-radius: 6px;\n    --indicator-radius: 6px;\n  "])))),N(V,W.Default,(0,emotion_dist_esm.css)(q||(q=A(["\n    --segment-gap: 5px; // space between segments\n    --indicator-height: calc(100% - 2 * var(--wrapper-padding));\n    --wrapper-padding: 3px;\n    --outer-radius: 8px;\n    --indicator-radius: 6px;\n  "])))),N(V,W.Large,(0,emotion_dist_esm.css)(K||(K=A(["\n    --segment-gap: 5px; // space between segments\n    --indicator-height: calc(100% - 2 * var(--wrapper-padding));\n    --outer-radius: 8px;\n    --wrapper-padding: 3px;\n    --indicator-radius: 6px;\n  "])))),V),an=(N(U={},dist_esm.Q2.Light,(0,emotion_dist_esm.css)(G||(G=A(["\n    --background-color: ",";\n    --inner-shadow: 0px 1px 2px "," inset;\n    --outer-shadow: 0px 1px 1px ",";\n    --hover-background-color: ",";\n    --indicator-background-color: ",";\n    --indicator-border-color: ",";\n  "])),palette_dist_esm.D.gray.light3,(0,polished_esm.DZ)(.7,palette_dist_esm.D.black),palette_dist_esm.D.gray.light2,palette_dist_esm.D.white,palette_dist_esm.D.black,palette_dist_esm.D.black)),N(U,dist_esm.Q2.Dark,(0,emotion_dist_esm.css)(R||(R=A(["\n    --background-color: ",";\n    --border-color: rgba(255, 255, 255, 0);\n    --inner-shadow: 0px 0px 0px 1px "," inset;\n    --outer-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 0);\n    --hover-background-color: ",";\n    --indicator-background-color: ",";\n    --indicator-border-color: ",";\n  "])),palette_dist_esm.D.gray.dark4,palette_dist_esm.D.gray.dark1,palette_dist_esm.D.gray.dark3,palette_dist_esm.D.gray.light2,palette_dist_esm.D.gray.light2)),U),ln=function ln(n){var e=n.theme,r=n.size;return(0,emotion_dist_esm.cx)(tn[void 0===r?"default":r],an[e],(0,emotion_dist_esm.css)($||($=A(["\n      position: relative;\n      display: grid;\n      grid-auto-flow: column;\n      grid-auto-columns: minmax(\n        0,\n        1fr\n      ); // allows the grid tracks to be as small as 0 but as large as 1fr, creating columns that will stay equal\n      gap: var(--segment-gap);\n      align-items: center;\n      padding: var(--wrapper-padding);\n      border-radius: var(--outer-radius);\n      background-color: var(--background-color);\n\n      &:focus {\n        outline: none;\n      }\n\n      // Frame shadow\n      &:after {\n        content: '';\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        border-radius: inherit;\n        box-shadow: var(--inner-shadow), var(--outer-shadow);\n        z-index: 1;\n        pointer-events: none;\n      }\n    "]))))},cn=(0,emotion_dist_esm.css)(B||(B=A(["\n  position: absolute;\n  width: 100%;\n  height: var(--indicator-height);\n  z-index: 2;\n  border-radius: var(--indicator-radius);\n  background-color: var(--indicator-background-color);\n  transition: transform ","ms ease-in-out;\n"])),tokens_dist_esm.nV.default),dn=(0,emotion_dist_esm.css)(J||(J=A(["\n  position: absolute;\n  height: var(--indicator-height);\n  width: 100%;\n  border-radius: var(--indicator-radius);\n  background-color: var(--hover-background-color);\n  z-index: 0;\n  opacity: 0;\n  transition: opacity 100ms ease-in-out;\n"]))),sn=["children","name","size","darkMode","defaultValue","value","onChange","className","label","followFocus","aria-controls"],un=(0,react.forwardRef)((function(o,l){var d,s,m=o.children,b=o.name,w=o.size,k=void 0===w?W.Default:w,C=o.darkMode,z=o.defaultValue,O=o.value,S=o.onChange,j=o.className,E=o.label,N=o.followFocus,L=void 0===N||N,P=o["aria-controls"],F=D(o,sn),M=(0,leafygreen_provider_dist_esm.LB)().usingKeyboard,H=(0,react.useRef)(null),T=I((0,react.useState)(!1),2),X=T[0],q=T[1],K=(0,leafygreen_provider_dist_esm.vs)(C).theme,V=(0,hooks_dist_esm.DK)({prefix:"option"}),G=(0,hooks_dist_esm.ue)({prefix:"segmented-control",id:null!=b?b:E}),R=(0,react.useMemo)((function(){return null!=O}),[O]),U=I((0,react.useState)(null!=z?z:O),2),$=U[0],B=U[1],J=I((0,react.useState)(null!=z?z:O),2),tn=J[0],an=J[1];d=function d(){var e=react.Children.toArray(m)[0];!$&&(0,dist_esm.Kf)(e,"SegmentedControlOption")&&(B(e.props.value),an(e.props.value))},s=(0,react.useRef)(!1),(0,react.useEffect)((function(){s.current||(s.current=!0,d())}),[d]);var un=(0,react.useCallback)((function(){var n;null!==(n=H.current)&&void 0!==n&&n.contains(document.activeElement)?q(!0):q(!1)}),[]);(0,react.useEffect)((function(){return document.addEventListener("focusin",un),function(){document.removeEventListener("focusin",un)}}),[un]),(0,react.useEffect)((function(){R&&B(O)}),[O,R]);var pn=(0,react.useCallback)((function(n){$!==n&&(B(n),null==S||S(n))}),[$,S]),fn=(0,react.useMemo)((function(){return react.Children.map(m,(function(e,r){var o,t;if(null==e)return e;if(!(0,dist_esm.Kf)(e,"SegmentedControlOption"))return Nn("Error in Segmented Control: ".concat(e," is not a SegmentedControlOption")),e;P||e.props["aria-controls"]||_n("The property `aria-controls` is required on each Segmented Control option, or on the Segmented Control parent.");var a=null!==(o=e.props.id)&&void 0!==o?o:"".concat(G,"-").concat(r),i=R?e.props.value===O||!!e.props.checked:e.props.value===$,l=e.props.value===tn;return react.cloneElement(e,{_id:a,_checked:i,_focused:l,_index:r,"aria-controls":null!==(t=e.props["aria-controls"])&&void 0!==t?t:P,_onClick:pn,_onHover:function _onHover(n){mn(n?r:null)},ref:V("".concat(r)),isfocusInComponent:X})}))}),[m,R,O,$,tn,G,P,pn,V,X]),gn=(0,react.useMemo)((function(){return fn?react.Children.map(fn,(function(n){var e;return null==n||null===(e=n.props)||void 0===e?void 0:e._id})).join(" "):""}),[fn]),hn=I((0,react.useState)(null),2),vn=hn[0],mn=hn[1],bn=(0,react.useMemo)((function(){return react.Children.toArray(fn).findIndex((function(n){return R?n.props.value===O:n.props.value===$}))}),[O,R,fn,$]),xn=(0,react.useMemo)((function(){return react.Children.toArray(fn).findIndex((function(n){return n.props.value===tn}))}),[fn,tn]),yn=function yn(e){var r=react.Children.toArray(fn).filter((function(n){return!n.props.disabled})),o=r.length,t=r[e=e>=o?e%o:e<0?o+e:e].props.value;an(t)};(0,react.useEffect)((function(){M||an($)}),[$,M]);var wn=(0,react.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(isNull_default()(e))return(0,emotion_dist_esm.css)(Z||(Z=A(["\n          width: 0;\n        "])));var o=1/react.Children.count(fn)*100,t=100*e;return(0,emotion_dist_esm.css)(nn||(nn=A(["\n        opacity: 1;\n        width: calc(","% - 2 * var(--wrapper-padding));\n        transform: translateX(\n          calc(","% + "," * var(--wrapper-padding))\n        );\n      "])),o,t,2*e+1)}),[fn]),kn="small"===k?W.XSmall:k;return react.createElement(Y.Provider,{value:{size:kn,theme:K,name:G,followFocus:L}},react.createElement("div",_({ref:H,className:(0,emotion_dist_esm.cx)(en,j)},F),E&&react.createElement(typography_dist_esm.Lh,{className:(0,emotion_dist_esm.cx)(rn,on[K])},E),react.createElement("div",{role:"tablist","aria-label":G,"aria-owns":gn,className:(0,emotion_dist_esm.cx)(ln({theme:K,size:kn})),ref:l,onKeyDownCapture:function onKeyDownCapture(n){switch(n.stopPropagation(),n.key){case"ArrowRight":yn(xn+1);break;case"ArrowLeft":yn(xn-1)}}},fn,react.createElement("div",{className:(0,emotion_dist_esm.cx)(cn,wn(bn))}),react.createElement("div",{className:(0,emotion_dist_esm.cx)(dn,wn(vn))}))))}));un.displayName="SegmentedControl";var pn,fn,gn,hn,vn,mn,bn,xn,yn,wn,kn,Cn,zn,On,Sn,jn,En,Nn=once_default()(console.error),_n=once_default()(console.warn);un.propTypes={darkMode:prop_types_default().bool,size:prop_types_default().oneOf(Object.values(W)),onChange:prop_types_default().func,defaultValue:prop_types_default().string,value:prop_types_default().string,label:prop_types_default().string,name:prop_types_default().string,followFocus:prop_types_default().bool,className:prop_types_default().string};var Dn=(N(gn={},dist_esm.Q2.Light,(0,emotion_dist_esm.css)(pn||(pn=A(["\n    --base-text-color: ",";\n    --base-background-color: rgba(255, 255, 255, 0);\n    --base-shadow-color: rgba(255, 255, 255, 0);\n    // Hover\n    --hover-text-color: ",";\n    // Selected\n    --active-text-color: ",";\n    // Disabled\n    --disabled-text-color: ",";\n    // Divider\n    --divider-background-color: ",";\n  "])),palette_dist_esm.D.gray.dark1,palette_dist_esm.D.gray.dark3,palette_dist_esm.D.white,palette_dist_esm.D.gray.light1,palette_dist_esm.D.gray.light1)),N(gn,dist_esm.Q2.Dark,(0,emotion_dist_esm.css)(fn||(fn=A(["\n    --base-text-color: ",";\n    --base-background-color: rgba(255, 255, 255, 0);\n    --base-shadow-color: rgba(255, 255, 255, 0);\n    // Hover\n    --hover-text-color: ",";\n    // Selected\n    --active-text-color: ",";\n    // Disabled\n    --disabled-text-color: ",";\n    // Divider\n    --divider-background-color: ",";\n  "])),palette_dist_esm.D.gray.light1,palette_dist_esm.D.gray.light2,palette_dist_esm.D.black,palette_dist_esm.D.gray.dark2,palette_dist_esm.D.gray.dark2)),gn),An=(N(bn={},W.XSmall,(0,emotion_dist_esm.css)(hn||(hn=A(["\n    --font-size: 12px;\n    --line-height: 16px;\n    --padding-inline: 12px;\n    --text-transform: uppercase;\n    --font-weight: ",";\n    --divider-height: 12px;\n    --padding-block: 3px;\n  "])),tokens_dist_esm.vC.bold)),N(bn,W.Default,(0,emotion_dist_esm.css)(vn||(vn=A(["\n    --font-size: 13px;\n    --line-height: 24px;\n    --padding-inline: 12px; // left/right\n    --text-transform: none;\n    --font-weight: ",";\n    --divider-height: 18px;\n    --padding-block: 3px;\n  "])),tokens_dist_esm.vC.medium)),N(bn,W.Large,(0,emotion_dist_esm.css)(mn||(mn=A(["\n    --font-size: 16px;\n    --line-height: 28px;\n    --padding-inline: 12px;\n    --text-transform: none;\n    --font-weight: ",";\n    --divider-height: 20px;\n    --padding-block: 4px;\n  "])),tokens_dist_esm.vC.medium)),bn),In=function In(n){var e=n.theme,r=n.size,o=void 0===r?"default":r,t=n.baseFontSize,a=void 0===t?14:t;return(0,emotion_dist_esm.cx)(Dn[e],An[o],(0,emotion_dist_esm.css)(xn||(xn=A(["\n      position: relative;\n      display: flex;\n      width: 100%;\n      align-items: center;\n      justify-content: center;\n      z-index: 3;\n\n      &:first-child,\n      &[data-lg-checked='true'],\n      &[data-lg-checked='true'] + [data-lg-checked='false'],\n      &:focus-within + :not(:focus-within) {\n        --divider-background-color: transparent;\n      }\n\n      /* \n      * Adds the divider line to unselected segments \n      */\n      &:before {\n        --divider-width: 1px;\n        content: '';\n        position: absolute;\n        height: var(--divider-height);\n        width: var(--divider-width);\n        left: calc(0px - (var(--segment-gap) + var(--divider-width)) / 2);\n        top: calc(\n          (\n              var(--line-height) + var(--padding-block) * 2 -\n                var(--divider-height)\n            ) / 2\n        );\n        transition: background-color ","ms ease-in-out;\n        background-color: var(--divider-background-color);\n      }\n    "])),tokens_dist_esm.nV.default),N({},(0,emotion_dist_esm.css)(yn||(yn=A(["\n        --font-size: 16px;\n      "]))),"default"===o&&16===a))},Ln=(0,emotion_dist_esm.css)(wn||(wn=A(["\n  width: 100%;\n  height: 100%;\n  text-decoration: none;\n"]))),Pn=(0,emotion_dist_esm.css)(kn||(kn=A(["\n  font-family: ",";\n  display: flex;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  padding: var(--padding-block) var(--padding-inline);\n  background-color: var(--base-background-color);\n  border-radius: var(--indicator-radius);\n  text-align: center;\n  font-size: var(--font-size);\n  line-height: var(--line-height);\n  text-transform: var(--text-transform, none);\n  font-weight: var(--font-weight);\n  color: var(--base-text-color);\n  box-shadow: 0px 1px 2px var(--base-shadow-color);\n  cursor: pointer;\n  transition: ","ms ease-in-out;\n  transition-property: color, box-shadow;\n  text-decoration: none;\n  outline: none;\n  border: none;\n\n  svg {\n    transition: color ","ms ease-in-out;\n  }\n\n  &:hover {\n    color: var(--hover-text-color);\n  }\n\n  &[aria-selected='true'] {\n    color: var(--active-text-color);\n  }\n\n  &:disabled {\n    color: var(--disabled-text-color);\n    cursor: not-allowed;\n  }\n\n  &[aria-selected='false']:not(:disabled):not(:hover) {\n    svg {\n      color: ",";\n    }\n  }\n"])),tokens_dist_esm.Vl.default,tokens_dist_esm.nV.default,tokens_dist_esm.nV.default,palette_dist_esm.D.gray.base),Fn=(0,emotion_dist_esm.css)(Cn||(Cn=A(["\n  &[aria-selected='false']:not(:disabled):not(:hover) {\n    svg {\n      color: var(--base-text-color);\n    }\n  }\n"]))),Mn=(N(Sn={},dist_esm.Q2.Light,(0,emotion_dist_esm.css)(zn||(zn=A(["\n    &:focus {\n      box-shadow: ",";\n    }\n  "])),tokens_dist_esm.kN.light.default)),N(Sn,dist_esm.Q2.Dark,(0,emotion_dist_esm.css)(On||(On=A(["\n    &:focus {\n      box-shadow: ",";\n    }\n  "])),tokens_dist_esm.kN.dark.default)),Sn),Hn=(0,emotion_dist_esm.css)(jn||(jn=A(["\n  min-height: var(--line-height);\n  gap: calc(var(--font-size) / 2);\n  display: flex;\n  align-items: center;\n  min-width: 0;\n\n  svg {\n    flex-shrink: 0;\n  }\n"]))),Tn=(0,emotion_dist_esm.css)(En||(En=A(["\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n"]))),Xn=["value","children","disabled","as","className","aria-controls","_id","_checked","_focused","_index","_onClick","_onHover","isfocusInComponent","glyph"],qn=(0,react.forwardRef)((function(o,t){var a,i,c=o.value,d=o.children,s=o.disabled,u=void 0!==s&&s,f=o.as,g=o.className,v=o["aria-controls"],b=o._id,x=o._checked,y=o._focused;o._index;var w=o._onClick,k=o._onHover,C=o.isfocusInComponent,z=o.glyph,O=D(o,Xn),S=(0,react.useContext)(Y),A=S.size,I=S.theme,L=S.followFocus,P=(0,leafygreen_provider_dist_esm.LB)().usingKeyboard,F=(0,leafygreen_provider_dist_esm.Zn)(),M=(0,react.useRef)(!1),H=(0,react.useRef)(null);(0,react.useEffect)((function(){var n,e;M.current&&P&&y&&C&&(null==H||null===(n=H.current)||void 0===n||n.focus(),L&&(null==H||null===(e=H.current)||void 0===e||e.click())),M.current=!0}),[y,L,P,C]),(0,react.useEffect)((function(){z&&!(0,esm.fx)(z)&&console.warn("Please provide a LeafyGreen UI Icon or Glyph component.")}),[z]);var T=null!==(a=z&&!d)&&void 0!==a&&a;return react.createElement("div",{className:(0,emotion_dist_esm.cx)(In({theme:I,size:A,baseFontSize:F}),g),ref:t,"data-lg-checked":x},react.createElement(box_dist_esm.Z,_({as:f,tabIndex:-1,className:Ln},O),react.createElement("button",{role:"tab",id:b,tabIndex:y?0:-1,"aria-selected":x,"aria-controls":v,disabled:u,className:(0,emotion_dist_esm.cx)(Pn,(i={},N(i,Mn[I],P),N(i,Fn,T),i)),ref:H,onClick:function onClick(){null==w||w(c)},onMouseEnter:function onMouseEnter(){null==k||k(!0)},onMouseLeave:function onMouseLeave(){null==k||k(!1)},type:"button"},react.createElement("div",{className:Hn},z&&(0,esm.fx)(z)&&z,!T&&react.createElement("span",{className:Tn},d)))))}));qn.displayName="SegmentedControlOption",qn.propTypes={value:prop_types_default().string.isRequired,className:prop_types_default().string,disabled:prop_types_default().bool,glyph:prop_types_default().element},un.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{darkMode:{description:"",type:{name:"bool"},required:!1},size:{description:"",type:{name:"enum",value:[{value:'"default"',computed:!1},{value:'"large"',computed:!1},{value:'"xsmall"',computed:!1}]},required:!1},onChange:{description:"",type:{name:"func"},required:!1},defaultValue:{description:"",type:{name:"string"},required:!1},value:{description:"",type:{name:"string"},required:!1},label:{description:"",type:{name:"string"},required:!1},name:{description:"",type:{name:"string"},required:!1},followFocus:{description:"",type:{name:"bool"},required:!1},className:{description:"",type:{name:"string"},required:!1}}},qn.__docgenInfo={description:"",methods:[],displayName:"SegmentedControlOption",props:{value:{description:"",type:{name:"string"},required:!0},className:{description:"",type:{name:"string"},required:!1},disabled:{description:"",type:{name:"bool"},required:!1},glyph:{description:"",type:{name:"element"},required:!1}}};var _Uncontrolled$paramet,_Uncontrolled$paramet2,_Uncontrolled$paramet3,_Controlled$parameter,_Controlled$parameter2,_Controlled$parameter3,_WithIcons$parameters,_WithIcons$parameters2,_WithIcons$parameters3,_IconsOnly$parameters,_IconsOnly$parameters2,_IconsOnly$parameters3;function SegmentedControl_story_typeof(obj){return SegmentedControl_story_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},SegmentedControl_story_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==SegmentedControl_story_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==SegmentedControl_story_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===SegmentedControl_story_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||_unsupportedIterableToArray(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const SegmentedControl_story={title:"Components/SegmentedControl",component:un,argTypes:{children:{control:!1},label:{control:"text"},name:{control:"text"},defaultValue:{control:"text"},value:{control:"text"},followFocus:{control:"boolean"},"aria-controls":{control:"text"},size:{control:{type:"radio",options:_toConsumableArray(Object.values({XSmall:"xsmall",Default:"default",Large:"large"}))}},darkMode:dist_esm.bN.darkMode,baseFontSize:dist_esm.bN.updatedBaseFontSize},parameters:{default:"Uncontrolled",controls:{exclude:[].concat(_toConsumableArray(dist_esm.xZ),["children","value","defaultValue"])}}};var Uncontrolled=function Uncontrolled(args){return react.createElement(un,args)};Uncontrolled.displayName="Uncontrolled",Uncontrolled.args={label:"Fruit",name:"fruit",children:[react.createElement(qn,{key:"dragonfruit",value:"dragonfruit"},"Dragonfruit"),react.createElement(qn,{key:"eggplant",value:"eggplant"},"Eggplant"),react.createElement(qn,{key:"fig",value:"fig"},"Fig"),react.createElement(qn,{disabled:!0,key:"grape",value:"grape"},"Grape")]};var Controlled=function Controlled(args){var _useState2=_slicedToArray((0,react.useState)("eggplant"),2),selectedFruit=_useState2[0],setSelectedFruit=_useState2[1];return react.createElement(Uncontrolled,_extends({},args,{key:"selectedFruit",value:selectedFruit,onChange:setSelectedFruit}))};Controlled.displayName="Controlled",Controlled.args={label:"Fruit overwhelmed",name:"fruit",children:[react.createElement(qn,{key:"dragonfruit",value:"dragonfruit"},"Dragonfruit fruit"),react.createElement(qn,{key:"eggplant",value:"eggplant"},"Eggplant bananana"),react.createElement(qn,{key:"fig",value:"fig"},"Fig"),react.createElement(qn,{key:"grape",value:"grape"},"Grape")]};var WithIcons=Uncontrolled.bind({});WithIcons.args={label:"View as",name:"language",children:[react.createElement(qn,{key:"json",value:"json",glyph:react.createElement(esm.ZP,{glyph:"CurlyBraces"})},"JSONNNNN and more"),react.createElement(qn,{key:"xml",value:"xml",glyph:react.createElement(esm.ZP,{glyph:"Code"})},"XML"),react.createElement(qn,{disabled:!0,key:"shell",value:"shell",glyph:react.createElement(esm.ZP,{glyph:"Shell"})},"Shell")]};var IconsOnly=Uncontrolled.bind({});IconsOnly.args={label:"Location",name:"location",children:[react.createElement(qn,{key:"cloud",value:"cloud",glyph:react.createElement(esm.ZP,{glyph:"Cloud"})}),react.createElement(qn,{key:"globe",value:"globe",glyph:react.createElement(esm.ZP,{glyph:"GlobeAmericas"})}),react.createElement(qn,{disabled:!0,key:"government",value:"government",glyph:react.createElement(esm.ZP,{glyph:"GovernmentBuilding"})})]},Uncontrolled.parameters=_objectSpread(_objectSpread({},Uncontrolled.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Uncontrolled$paramet=Uncontrolled.parameters)||void 0===_Uncontrolled$paramet?void 0:_Uncontrolled$paramet.docs),{},{source:_objectSpread({originalSource:"(args: SegmentedControlProps) => <SegmentedControl {...args} />"},null===(_Uncontrolled$paramet2=Uncontrolled.parameters)||void 0===_Uncontrolled$paramet2||null===(_Uncontrolled$paramet3=_Uncontrolled$paramet2.docs)||void 0===_Uncontrolled$paramet3?void 0:_Uncontrolled$paramet3.source)})}),Controlled.parameters=_objectSpread(_objectSpread({},Controlled.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Controlled$parameter=Controlled.parameters)||void 0===_Controlled$parameter?void 0:_Controlled$parameter.docs),{},{source:_objectSpread({originalSource:"(args: SegmentedControlProps) => {\n  const [selectedFruit, setSelectedFruit] = useState('eggplant');\n  return <Uncontrolled {...args} key=\"selectedFruit\" value={selectedFruit} onChange={setSelectedFruit} />;\n}"},null===(_Controlled$parameter2=Controlled.parameters)||void 0===_Controlled$parameter2||null===(_Controlled$parameter3=_Controlled$parameter2.docs)||void 0===_Controlled$parameter3?void 0:_Controlled$parameter3.source)})}),WithIcons.parameters=_objectSpread(_objectSpread({},WithIcons.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithIcons$parameters=WithIcons.parameters)||void 0===_WithIcons$parameters?void 0:_WithIcons$parameters.docs),{},{source:_objectSpread({originalSource:"(args: SegmentedControlProps) => <SegmentedControl {...args} />"},null===(_WithIcons$parameters2=WithIcons.parameters)||void 0===_WithIcons$parameters2||null===(_WithIcons$parameters3=_WithIcons$parameters2.docs)||void 0===_WithIcons$parameters3?void 0:_WithIcons$parameters3.source)})}),IconsOnly.parameters=_objectSpread(_objectSpread({},IconsOnly.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_IconsOnly$parameters=IconsOnly.parameters)||void 0===_IconsOnly$parameters?void 0:_IconsOnly$parameters.docs),{},{source:_objectSpread({originalSource:"(args: SegmentedControlProps) => <SegmentedControl {...args} />"},null===(_IconsOnly$parameters2=IconsOnly.parameters)||void 0===_IconsOnly$parameters2||null===(_IconsOnly$parameters3=_IconsOnly$parameters2.docs)||void 0===_IconsOnly$parameters3?void 0:_IconsOnly$parameters3.source)})});var __namedExportsOrder=["Uncontrolled","Controlled","WithIcons","IconsOnly"]},"./packages/box/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>l});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);function t(){return t=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},t.apply(this,arguments)}var a=["as"];function o(r,o){if(null!=r.as){var l=r.as,f=function n(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}(r,a);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(l,t({},f,{ref:o}))}return null!=r.href?react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",t({},r,{ref:o})):react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",t({},r,{ref:o}))}o.displayName="InlineBox";var l=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(o);l.displayName="Box",l.propTypes={as:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().elementType,prop_types__WEBPACK_IMPORTED_MODULE_1___default().element,prop_types__WEBPACK_IMPORTED_MODULE_1___default().func]),href:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string},l.__docgenInfo={description:"",methods:[],displayName:"Box",props:{as:{description:"",type:{name:"union",value:[{name:"elementType"},{name:"element"},{name:"func"}]},required:!1},href:{description:"",type:{name:"string"},required:!1}}}},"./node_modules/lodash/_arrayReduce.js":module=>{module.exports=function arrayReduce(array,iteratee,accumulator,initAccum){var index=-1,length=null==array?0:array.length;for(initAccum&&length&&(accumulator=array[++index]);++index<length;)accumulator=iteratee(accumulator,array[index],index,array);return accumulator}},"./node_modules/lodash/_asciiWords.js":module=>{var reAsciiWord=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;module.exports=function asciiWords(string){return string.match(reAsciiWord)||[]}},"./node_modules/lodash/_basePropertyOf.js":module=>{module.exports=function basePropertyOf(object){return function(key){return null==object?void 0:object[key]}}},"./node_modules/lodash/_createCompounder.js":(module,__unused_webpack_exports,__webpack_require__)=>{var arrayReduce=__webpack_require__("./node_modules/lodash/_arrayReduce.js"),deburr=__webpack_require__("./node_modules/lodash/deburr.js"),words=__webpack_require__("./node_modules/lodash/words.js"),reApos=RegExp("['’]","g");module.exports=function createCompounder(callback){return function(string){return arrayReduce(words(deburr(string).replace(reApos,"")),callback,"")}}},"./node_modules/lodash/_deburrLetter.js":(module,__unused_webpack_exports,__webpack_require__)=>{var deburrLetter=__webpack_require__("./node_modules/lodash/_basePropertyOf.js")({À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"});module.exports=deburrLetter},"./node_modules/lodash/_hasUnicodeWord.js":module=>{var reHasUnicodeWord=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;module.exports=function hasUnicodeWord(string){return reHasUnicodeWord.test(string)}},"./node_modules/lodash/_unicodeWords.js":module=>{var rsBreakRange="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",rsBreak="["+rsBreakRange+"]",rsDigits="\\d+",rsDingbat="[\\u2700-\\u27bf]",rsLower="[a-z\\xdf-\\xf6\\xf8-\\xff]",rsMisc="[^\\ud800-\\udfff"+rsBreakRange+rsDigits+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",rsRegional="(?:\\ud83c[\\udde6-\\uddff]){2}",rsSurrPair="[\\ud800-\\udbff][\\udc00-\\udfff]",rsUpper="[A-Z\\xc0-\\xd6\\xd8-\\xde]",rsMiscLower="(?:"+rsLower+"|"+rsMisc+")",rsMiscUpper="(?:"+rsUpper+"|"+rsMisc+")",reOptMod="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",rsSeq="[\\ufe0e\\ufe0f]?"+reOptMod+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",rsRegional,rsSurrPair].join("|")+")[\\ufe0e\\ufe0f]?"+reOptMod+")*"),rsEmoji="(?:"+[rsDingbat,rsRegional,rsSurrPair].join("|")+")"+rsSeq,reUnicodeWord=RegExp([rsUpper+"?"+rsLower+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[rsBreak,rsUpper,"$"].join("|")+")",rsMiscUpper+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[rsBreak,rsUpper+rsMiscLower,"$"].join("|")+")",rsUpper+"?"+rsMiscLower+"+(?:['’](?:d|ll|m|re|s|t|ve))?",rsUpper+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",rsDigits,rsEmoji].join("|"),"g");module.exports=function unicodeWords(string){return string.match(reUnicodeWord)||[]}},"./node_modules/lodash/deburr.js":(module,__unused_webpack_exports,__webpack_require__)=>{var deburrLetter=__webpack_require__("./node_modules/lodash/_deburrLetter.js"),toString=__webpack_require__("./node_modules/lodash/toString.js"),reLatin=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,reComboMark=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");module.exports=function deburr(string){return(string=toString(string))&&string.replace(reLatin,deburrLetter).replace(reComboMark,"")}},"./node_modules/lodash/isNull.js":module=>{module.exports=function isNull(value){return null===value}},"./node_modules/lodash/kebabCase.js":(module,__unused_webpack_exports,__webpack_require__)=>{var kebabCase=__webpack_require__("./node_modules/lodash/_createCompounder.js")((function(result,word,index){return result+(index?"-":"")+word.toLowerCase()}));module.exports=kebabCase},"./node_modules/lodash/words.js":(module,__unused_webpack_exports,__webpack_require__)=>{var asciiWords=__webpack_require__("./node_modules/lodash/_asciiWords.js"),hasUnicodeWord=__webpack_require__("./node_modules/lodash/_hasUnicodeWord.js"),toString=__webpack_require__("./node_modules/lodash/toString.js"),unicodeWords=__webpack_require__("./node_modules/lodash/_unicodeWords.js");module.exports=function words(string,pattern,guard){return string=toString(string),void 0===(pattern=guard?void 0:pattern)?hasUnicodeWord(string)?unicodeWords(string):asciiWords(string):string.match(pattern)||[]}}}]);