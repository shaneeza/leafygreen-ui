_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[105],{aOmV:function(e,n,r){"use strict";r.r(n),r.d(n,"default",(function(){return ge}));var t=r("mXGw"),o=r.n(t),a=r("WM7k"),i=r("5MD+"),c=r("QmRY"),l=r("G0rA"),d=r("/zgD"),s=r("kI+E"),u=r("9va6"),b=r("6h0R"),f=r("aEE+"),p=r("jGqM");function g(){return(g=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function h(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function v(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function x(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,o,a=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(t=r.next()).done)&&(a.push(t.value),!n||a.length!==n);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}}(e,n)||function(e,n){if(e){if("string"==typeof e)return m(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}var j=new Map;function O(e){if(!e)return console.warn("useDynamicRefs: Cannot set ref without key ");if(j.get(e))return j.get(e);var n=Object(t.createRef)();return j.set(e,n),n}function w(e){return e?j.get(e):console.warn("useDynamicRefs: Cannot get ref without key")}var y,k,_,C,z,N,M,S,E,A,F,R,I,D=["children","name","size","darkMode","defaultValue","value","onChange","className","label","followFocus","aria-controls"],P=Object(c.b)("selection-indicator"),G=Object(c.b)("hover-indicator"),L=Object(i.css)(y||(y=v(["\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  z-index: 0;\n"]))),T={light:Object(i.css)(k||(k=v(["\n    color: ",";\n  "])),l.a.gray.dark1),dark:Object(i.css)(_||(_=v(["\n    color: ",";\n  "])),l.a.gray.light1)},V={small:Object(i.css)(C||(C=v(["\n    --segment-gap: 1px;\n    --frame-padding: 0px;\n    --frame-border-radius: 4px;\n    --indicator-height: 100%;\n  "]))),default:Object(i.css)(z||(z=v(["\n    --segment-gap: 5px;\n    --frame-padding: 3px;\n    --frame-border-radius: 6px;\n    --indicator-height: calc(100% - 2 * var(--frame-padding));\n  "]))),large:Object(i.css)(N||(N=v(["\n    --segment-gap: 5px;\n    --frame-padding: 3px;\n    --frame-border-radius: 6px;\n    --indicator-height: calc(100% - 2 * var(--frame-padding));\n  "])))},W={light:Object(i.css)(M||(M=v(["\n    --background-color: ",";\n    --border-color: transparent;\n    --border-width: 0px;\n    --inner-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3) inset;\n    --outer-shadow: 0px 1px 1px #e7eeec;\n    --hover-background-color: ",";\n    --indicator-background-color: ",";\n    --indicator-border-color: ",";\n  "])),l.a.gray.light3,l.a.white,l.a.gray.light2,"#869499"),dark:Object(i.css)(S||(S=v(["\n    --background-color: ",";\n    --border-color: ",";\n    --border-width: 1px;\n    --inner-shadow: unset;\n    --outer-shadow: unset;\n    --hover-background-color: ",";\n    --indicator-background-color: ",";\n    --indicator-border-color: ",";\n  "])),l.a.gray.dark3,l.a.gray.dark1,l.a.gray.dark2,l.a.gray.dark1,l.a.gray.base)},X=function(e){var n=e.mode,r=void 0===n?"light":n,t=e.size;return Object(i.cx)(V[void 0===t?"default":t],W[r],Object(i.css)(E||(E=v(["\n      position: relative;\n      display: grid;\n      grid-auto-flow: column;\n      grid-auto-columns: 1fr;\n      gap: var(--segment-gap);\n      align-items: center;\n      padding: var(--frame-padding);\n      border: var(--border-width) solid var(--border-color);\n      border-radius: var(--frame-border-radius);\n      background-color: var(--background-color);\n\n      &:focus {\n        outline: none;\n      }\n\n      // Frame shadow\n      &:after {\n        content: '';\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        border-radius: inherit;\n        box-shadow: var(--inner-shadow), var(--outer-shadow);\n        z-index: 1;\n        pointer-events: none;\n      }\n    "]))))},H=Object(i.css)(A||(A=v(["\n  position: absolute;\n  grid-column: 1/2; // position the selector in the grid until it gets positioned\n  width: 100%;\n  height: var(--indicator-height);\n  z-index: 2;\n  box-shadow: 0px 1px 2px rgba(6, 22, 33, 0.3);\n  border-radius: 4px;\n  border-width: 1px;\n  border-style: solid;\n  background-color: var(--indicator-background-color);\n  border-color: var(--indicator-border-color);\n  transition: transform 150ms ease-in-out;\n"]))),K=Object(i.css)(R||(R=v(["\n  position: absolute;\n  height: var(--indicator-height);\n  width: 100%;\n  grid-column: unset;\n  border-radius: 4px;\n  background-color: var(--hover-background-color);\n  z-index: 0;\n  opacity: 0;\n"]))),q=o.a.createContext({size:"default",mode:"light",name:"",followFocus:!0}),J=o.a.forwardRef((function(e,n){var r,l,u=e.children,f=e.name,p=e.size,m=void 0===p?"default":p,j=e.darkMode,y=void 0!==j&&j,k=e.defaultValue,_=e.value,C=e.onChange,z=e.className,N=e.label,M=e.followFocus,S=void 0===M||M,E=e["aria-controls"],A=h(e,D),R=Object(s.d)().usingKeyboard,V=x([w,O],2),W=V[0],J=V[1],B=y?"dark":"light",Q=Object(a.c)({prefix:"segmented-control",id:null!=f?f:N}),U=Object(t.useMemo)((function(){return null!=_}),[_]),Y=x(Object(t.useState)(null!=k?k:_),2),$=Y[0],Z=Y[1],ee=x(Object(t.useState)(null!=k?k:_),2),ne=ee[0],re=ee[1];r=function(){var e=o.a.Children.toArray(u)[0];!$&&Object(c.d)(e,"SegmentedControlOption")&&(Z(e.props.value),re(e.props.value))},l=Object(t.useRef)(!1),Object(t.useEffect)((function(){l.current||(l.current=!0,r())}),[r]);var te=Object(t.useCallback)((function(e){$!==e&&(Z(e),null==C||C(e))}),[$,C]),ie=Object(t.useMemo)((function(){return o.a.Children.map(u,(function(e,n){var r,t;if(!Object(c.d)(e,"SegmentedControlOption"))return oe("Error in Segmented Control: ".concat(e," is not a SegmentedControlOption")),e;E||e.props["aria-controls"]||ae("The property `aria-controls` is required on each Segmented Control option, or on the Segmented Control parent.");var a=null!==(r=e.props.id)&&void 0!==r?r:"".concat(Q,"-").concat(n),i=U?e.props.value===_||!!e.props.checked:e.props.value===$,l=e.props.value===ne;return o.a.cloneElement(e,{_id:a,_checked:i,_focused:l,_index:n,"aria-controls":null!==(t=e.props["aria-controls"])&&void 0!==t?t:E,_onClick:te,_onHover:function(e){se(e?n:null)},ref:J("".concat(Q,"-").concat(n))})}))}),[u,U,_,$,ne,Q,E,te,J]),ce=Object(t.useMemo)((function(){return ie?o.a.Children.map(ie,(function(e){var n;return null==e||null===(n=e.props)||void 0===n?void 0:n._id})).join(" "):""}),[ie]),le=x(Object(t.useState)(null),2),de=le[0],se=le[1],ue=Object(t.useMemo)((function(){return o.a.Children.toArray(ie).findIndex((function(e){return U?e.props.value===_:e.props.value===$}))}),[_,U,ie,$]),be=Object(t.useMemo)((function(){return o.a.Children.toArray(ie).findIndex((function(e){return e.props.value===ne}))}),[ie,ne]),fe=function(e){var n=o.a.Children.toArray(ie).filter((function(e){return!e.props.disabled})),r=n.length,t=n[e=e>=r?e%r:e<0?r+e:e].props.value;re(t)};Object(t.useEffect)((function(){R||re($)}),[$,R]);var pe=x(Object(t.useState)(""),2),ge=pe[0],he=pe[1];Object(t.useEffect)((function(){var e=W("".concat(Q,"-").concat(ue));if(e&&e.current){var n=e.current;if(n){var r=n.offsetWidth,t=n.offsetLeft;he(function(e,n){return Object(i.css)(F||(F=v(["\n    grid-column: unset;\n    width: ","px;\n    transform: translateX(","px);\n  "])),e,n)}(r,t))}}}),[W,Q,ue,ie]);var ve=Object(t.useMemo)((function(){return function(e){if(null!=e)return Object(i.css)(I||(I=v(["\n      opacity: 1;\n      grid-column: "," / ",";\n    "])),e+1,e+2)}(de)}),[de]);return Object(b.jsx)(q.Provider,{value:{size:m,mode:B,name:Q,followFocus:S}},Object(b.jsx)("div",g({className:Object(i.cx)(L,z)},A),N&&Object(b.jsx)(d.k,{className:T[B]},N),Object(b.jsx)("div",{role:"tablist","aria-label":Q,"aria-owns":ce,className:Object(i.cx)(X({mode:B,size:m})),ref:n,onKeyDownCapture:function(e){switch(e.stopPropagation(),e.key){case"ArrowRight":fe(be+1);break;case"ArrowLeft":fe(be-1)}}},ie,Object(b.jsx)("div",g({},P.prop,{className:Object(i.cx)(H,ge)})),Object(b.jsx)("div",g({},G.prop,{className:Object(i.cx)(K,ve)})))))}));J.displayName="SegmentedControl";var B,Q,U,Y,$,Z,ee,ne,re,te,oe=Object(u.once)(console.error),ae=Object(u.once)(console.warn),ie=["value","children","disabled","as","className","aria-controls","_id","_checked","_focused","_index","_onClick","_onHover"],ce=function(e){var n=e.mode,r=void 0===n?"light":n,t=e.size,o=void 0===t?"default":t;return Object(i.cx)(function(e){switch(e){case"light":return Object(i.css)(B||(B=v(["\n        --base-text-color: ",";\n        --base-background-color: transparent;\n        --base-shadow-color: transparent;\n        --hover-text-color: ",";\n        --hover-background-color: ",";\n        --active-text-color: ",";\n        --disabled-text-color: ",";\n      "])),l.a.gray.dark1,l.a.gray.dark3,l.a.white,l.a.gray.dark3,l.a.gray.light1);case"dark":return Object(i.css)(Q||(Q=v(["\n        --base-text-color: ",";\n        --base-background-color: transparent;\n        --base-shadow-color: transparent;\n        --hover-text-color: ",";\n        --hover-background-color: ",";\n        --active-text-color: ",";\n        --disabled-text-color: ",";\n      "])),l.a.gray.light1,l.a.gray.light2,l.a.gray.dark2,l.a.white,l.a.gray.dark1)}}(r),function(e){switch(e){case"small":return Object(i.css)(U||(U=v(["\n        --font-size: 12px;\n        --line-height: 16px;\n        --padding-block: 3px;\n        --padding-inline: 12px;\n        --text-transform: uppercase;\n        --font-weight: bold;\n        --divider-height: 12px;\n      "])));case"large":return Object(i.css)(Y||(Y=v(["\n        --font-size: 16px;\n        --line-height: 28px;\n        --padding-block: 4px;\n        --padding-inline: 12px;\n        --text-transform: none;\n        --font-weight: normal;\n        --divider-height: 20px;\n      "])));case"default":return Object(i.css)($||($=v(["\n        --font-size: 14px;\n        --line-height: 24px;\n        --padding-block: 3px;\n        --padding-inline: 12px;\n        --text-transform: none;\n        --font-weight: normal;\n        --divider-height: 18px;\n      "])))}}(o),Object(i.css)(Z||(Z=v(["\n      position: relative;\n      display: flex;\n      width: 100%;\n      align-items: center;\n      justify-content: center;\n      z-index: 3;\n\n      --divider-background-color: ",";\n\n      &:first-child,\n      &[data-lg-checked='true'],\n      &[data-lg-checked='true'] + [data-lg-checked='false'] {\n        --divider-background-color: transparent;\n      }\n\n      /* \n      * Adds the divider line to unselected segments \n      */\n      &:before {\n        --divider-width: 1px;\n        content: '';\n        position: absolute;\n        height: var(--divider-height);\n        width: var(--divider-width);\n        left: calc(0px - (var(--segment-gap) + var(--divider-width)) / 2);\n        top: calc(\n          (\n              var(--line-height) + var(--padding-block) * 2 -\n                var(--divider-height)\n            ) / 2\n        );\n        transition: background-color 100ms ease-in-out;\n        background-color: var(--divider-background-color);\n      }\n    "])),l.a.gray.light1))},le=Object(i.css)(ee||(ee=v(["\n  width: 100%;\n  z-index: 1;\n\n  /* disable the interaction ring hover state */\n  &:hover > [data-leafygreen-ui='interaction-ring'] {\n    box-shadow: none;\n  }\n"]))),de=Object(i.css)(ne||(ne=v(["\n  width: 100%;\n  text-decoration: none;\n"]))),se=Object(i.css)(re||(re=v(["\n  display: inline-flex;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  padding: var(--padding-block) var(--padding-inline);\n  background-color: var(--base-background-color);\n  border-radius: 4px;\n  text-align: center;\n  font-size: var(--font-size);\n  line-height: var(--line-height);\n  text-transform: var(--text-transform, none);\n  font-weight: var(--font-weight);\n  color: var(--base-text-color);\n  box-shadow: 0px 1px 2px var(--base-shadow-color);\n  cursor: pointer;\n  transition: all 100ms ease-in-out;\n  text-decoration: none;\n  outline: none;\n  border: none;\n\n  &:hover {\n    color: var(--hover-text-color);\n  }\n\n  &[aria-selected='true'] {\n    color: var(--active-text-color);\n  }\n\n  &:disabled {\n    color: var(--disabled-text-color);\n    cursor: not-allowed;\n  }\n"]))),ue=Object(i.css)(te||(te=v(["\n  display: inline-flex;\n  min-height: var(--line-height);\n  align-items: center;\n  gap: calc(var(--font-size) / 2);\n"]))),be=o.a.forwardRef((function(e,n){var r=e.value,o=e.children,a=e.disabled,c=void 0!==a&&a,l=e.as,d=e.className,u=e["aria-controls"],v=e._id,x=e._checked,m=e._focused,j=(e._index,e._onClick),O=e._onHover,w=h(e,ie),y=Object(t.useContext)(q),k=y.size,_=y.mode,C=y.followFocus,z=Object(s.d)().usingKeyboard,N=Object(t.useRef)(!1),M=Object(t.useRef)(null);return Object(t.useEffect)((function(){var e,n;N.current&&z&&m&&(null==M||null===(e=M.current)||void 0===e||e.focus(),C&&(null==M||null===(n=M.current)||void 0===n||n.click())),N.current=!0}),[m,C,z]),Object(b.jsx)("div",{className:Object(i.cx)(ce({mode:_,size:k}),d),ref:n,"data-lg-checked":x},Object(b.jsx)(f.a,{darkMode:"dark"===_,className:le},Object(b.jsx)(p.a,g({as:l,tabIndex:-1,className:de},w),Object(b.jsx)("button",{role:"tab",id:v,tabIndex:m?0:-1,"aria-selected":x,"aria-controls":u,disabled:c,className:se,ref:M,onClick:function(){null==j||j(r)},onMouseEnter:function(){null==O||O(!0)},onMouseLeave:function(){null==O||O(!1)}},Object(b.jsx)("span",{className:ue},o)))))}));be.displayName="SegmentedControlOption";var fe=r("hnBo"),pe={size:{type:"select",default:"default",options:["small","default","large"],label:"Size"},darkMode:{type:"boolean",default:!1,label:"Dark Mode"},label:{type:"text",default:"Fruit",label:"Label"},followFocus:{type:"boolean",default:!0,label:"Follow focus"},disabled:{type:"boolean",default:!1,label:"Disabled"}};function ge(){return Object(b.jsx)(fe.a,{knobsConfig:pe},(function(e){var n=e.darkMode,r=e.size,t=e.label,o=e.followFocus,a=e.disabled;return Object(b.jsx)(J,{label:t,name:"fruit",size:r,darkMode:n,followFocus:o,onChange:function(e){return console.log(e)},"aria-controls":""},Object(b.jsx)(be,{value:"dragonfruit"},"Dragonfruit"),Object(b.jsx)(be,{value:"eggplant"},"Eggplant"),Object(b.jsx)(be,{value:"fig"},"Fig"),Object(b.jsx)(be,{disabled:a,value:"grape"},"Grape"))}))}},jybW:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/component/segmented-control/example",function(){return r("aOmV")}])}},[["jybW",0,1,4,2,3,5,6,7,8,17]]]);