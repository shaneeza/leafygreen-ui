_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[32],{BAaP:function(e,n,t){"use strict";t.d(n,"a",(function(){return P}));var a,r,i=t("mXGw"),o=t.n(i),c=t("HV2J"),s=t.n(c),l=t("Ipgj"),u=t.n(l),b=t("4Ki5"),p=t.n(b),d=t("vFco"),f=t.n(d),m=t("hTs6"),h=t.n(m),g=t("5MD+"),x=t("G0rA");function O(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function j(){return(j=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function y(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function v(){var e=y(["\n          margin-top: 1px;\n        "]);return v=function(){return e},e}function w(){var e=y(["\n    align-self: center;\n    flex-grow: 1;\n    margin-left: ",";\n    margin-right: ",";\n  "]);return w=function(){return e},e}function T(){var e=y(["\n    color: ",";\n    border-color: ",";\n    border-left-color: ",";\n    background-color: ",";\n\n    &:before {\n      background-color: ",";\n    }\n\n    &:after {\n      border-color: ",";\n      background-color: ",";\n    }\n  "]);return T=function(){return e},e}function E(){var e=y(["\n    color: ",";\n    border-color: ",";\n    border-left-color: ",";\n    background-color: ",";\n\n    &:before {\n      background-color: ",";\n    }\n\n    &:after {\n      border-color: ",";\n      background-color: ",";\n    }\n  "]);return E=function(){return e},e}function k(){var e=y(["\n    color: ",";\n    border-color: ",";\n    border-left-color: ",";\n    background-color: ",";\n\n    &:before {\n      background-color: ",";\n    }\n\n    &:after {\n      border-color: ",";\n      background-color: ",";\n    }\n  "]);return k=function(){return e},e}function N(){var e=y(["\n    color: ",";\n    border-color: ",";\n    border-left-color: ",";\n    background-color: ",";\n\n    &:before {\n      background-color: ",";\n    }\n\n    &:after {\n      border-color: ",";\n      background-color: ",";\n    }\n  "]);return N=function(){return e},e}function C(){var e=y(["\n  // this margin is set to control text alignment with the base of the renderedImage\n  margin-top: 3px;\n  margin-bottom: 3px;\n\n  width: 32px;\n  height: 32px;\n  flex-shrink: 0;\n"]);return C=function(){return e},e}function B(){var e=y(["\n  cursor: pointer;\n"]);return B=function(){return e},e}function S(){var e=y(["\n  flex-shrink: 0;\n"]);return S=function(){return e},e}function I(){var e=y(["\n  position: relative;\n  display: flex;\n  min-height: 40px;\n  padding: 9px 12px 9px 20px;\n  border-width: 1px 1px 1px 0px;\n  border-style: solid;\n  border-radius: 6px;\n  font-size: 14px;\n  line-height: 20px;\n\n  &:before {\n    content: '';\n    position: absolute;\n    width: 6px;\n    top: -1px;\n    bottom: -1px;\n    left: 0px;\n    border-radius: 6px 0px 0px 6px;\n  }\n\n  &:after {\n    content: '';\n    position: absolute;\n    left: 4px;\n    top: -1px;\n    bottom: -1px;\n    width: 2px;\n    border-top: 1px solid;\n    border-bottom: 1px solid;\n    border-radius: 0.5px 0px 0px 0.5px;\n  }\n"]);return I=function(){return e},e}var P={Info:"info",Warning:"warning",Danger:"danger",Success:"success"},L=Object(g.css)(I()),D=Object(g.css)(S()),M=Object(g.css)(B()),z=Object(g.css)(C()),R=(O(a={},P.Info,Object(g.css)(N(),x.a.blue.dark2,x.a.blue.light2,x.a.blue.base,x.a.blue.light3,x.a.blue.base,x.a.blue.light2,x.a.blue.light3)),O(a,P.Warning,Object(g.css)(k(),x.a.yellow.dark2,x.a.yellow.light2,x.a.yellow.base,x.a.yellow.light3,x.a.yellow.base,x.a.yellow.light2,x.a.yellow.light3)),O(a,P.Danger,Object(g.css)(E(),x.a.red.dark2,x.a.red.light2,x.a.red.base,x.a.red.light3,x.a.red.base,x.a.red.light2,x.a.red.light3)),O(a,P.Success,Object(g.css)(T(),x.a.green.dark2,x.a.green.light2,x.a.green.base,x.a.green.light3,x.a.green.base,x.a.green.light2,x.a.green.light3)),a),X=(O(r={},P.Info,{color:x.a.blue.base,icon:u.a}),O(r,P.Warning,{color:x.a.yellow.dark2,icon:s.a}),O(r,P.Danger,{color:x.a.red.base,icon:p.a}),O(r,P.Success,{color:x.a.green.base,icon:f.a}),r),_=function(e,n){var t={marginLeft:void 0,marginRight:void 0};return e?(t.marginLeft="15px",t.marginRight="4px",n&&(t.marginRight="".concat(28,"px"))):(t.marginLeft="".concat(15,"px"),t.marginRight="10px",n&&(t.marginRight="".concat(32,"px"))),Object(g.css)(w(),t.marginLeft,t.marginRight)};n.b=function(e){var n=e.variant,t=void 0===n?P.Info:n,a=e.dismissible,r=void 0!==a&&a,i=e.onClose,c=void 0===i?function(){}:i,s=e.image,l=e.children,u=e.className,b=function(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}(e,["variant","dismissible","onClose","image","children","className"]),p=X[t],d=p.icon,f=p.color,m=s?o.a.cloneElement(s,{className:z}):o.a.createElement(d,{fill:f,className:Object(g.cx)(D,Object(g.css)(v()))});return o.a.createElement("div",j({role:"alert",className:Object(g.cx)(L,R[t],u)},b),m,o.a.createElement("div",{className:_(null!=s,r)},l),r&&o.a.createElement(h.a,{fill:f,onClick:c,className:Object(g.cx)(D,M)}))}},HQh0:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/component/banner/guidelines",function(){return t("xxoq")}])},h4VS:function(e,n,t){"use strict";function a(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}t.d(n,"a",(function(){return a}))},hTs6:function(e,n,t){e.exports=function(e,n,t){"use strict";function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=a(n);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function s(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var l={small:14,default:16,large:20,xlarge:24};function u(){var e=s(["\n    flex-shrink: 0;\n  "]);return u=function(){return e},e}function b(){var e=s(["\n    color: ",";\n  "]);return b=function(){return e},e}var p=function(n){var a,r=n.className,s=n.size,p=void 0===s?16:s,d=n.title,f=n["aria-label"],m=n["aria-labelledby"],h=n.fill,g=n.role,x=void 0===g?"img":g,O=c(n,["className","size","title","aria-label","aria-labelledby","fill","role"]),j=t.css(b(),h),y=t.css(u()),v=function(e,n,t){var a,r,o=t["aria-label"],c=t["aria-labelledby"],s=t.title;switch(e){case"img":return o||c||s?(i(a={},"aria-labelledby",c),i(a,"aria-label",o),i(a,"title",s),a):{"aria-label":(r=n,"".concat(r.replace(/([a-z])([A-Z])/g,"$1 $2")," Icon"))};case"presentation":return{"aria-hidden":!0,alt:""}}}(x,"X",(i(a={title:d},"aria-label",f),i(a,"aria-labelledby",m),a));return e.createElement("svg",o({className:t.cx(i({},j,null!=h),y,r),height:"number"==typeof p?p:l[p],width:"number"==typeof p?p:l[p],role:x},v,O,{viewBox:"0 0 16 16"}),e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.2028 3.40381C11.8123 3.01329 11.1791 3.01329 10.7886 3.40381L8.3137 5.87869L5.83883 3.40381C5.44831 3.01329 4.81514 3.01329 4.42462 3.40381L3.71751 4.11092C3.32699 4.50144 3.32699 5.13461 3.71751 5.52513L6.19238 8.00001L3.71751 10.4749C3.32699 10.8654 3.32699 11.4986 3.71751 11.8891L4.42462 12.5962C4.81514 12.9867 5.44831 12.9867 5.83883 12.5962L8.3137 10.1213L10.7886 12.5962C11.1791 12.9867 11.8123 12.9867 12.2028 12.5962L12.9099 11.8891C13.3004 11.4986 13.3004 10.8654 12.9099 10.4749L10.435 8.00001L12.9099 5.52513C13.3004 5.13461 13.3004 4.50144 12.9099 4.11092L12.2028 3.40381Z",fill:"currentColor"}))};return p.displayName="X",p.isGlyph=!0,p.propTypes={fill:r.default.string,size:r.default.oneOfType([r.default.number,r.default.string]),className:r.default.string},p}(t("mXGw"),t("W0B4"),t("5MD+"))},m3N6:function(e,n,t){"use strict";t("W0B4");var a=t("mXGw"),r=t.n(a),i=t("xARA"),o=t.n(i),c=!1,s=r.a.createContext(null),l="unmounted",u="exited",b="entering",p="entered",d="exiting",f=function(e){var n,t;function a(n,t){var a;a=e.call(this,n,t)||this;var r,i=t&&!t.isMounting?n.enter:n.appear;return a.appearStatus=null,n.in?i?(r=u,a.appearStatus=b):r=p:r=n.unmountOnExit||n.mountOnEnter?l:u,a.state={status:r},a.nextCallback=null,a}t=e,(n=a).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t,a.getDerivedStateFromProps=function(e,n){return e.in&&n.status===l?{status:u}:null};var i=a.prototype;return i.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},i.componentDidUpdate=function(e){var n=null;if(e!==this.props){var t=this.state.status;this.props.in?t!==b&&t!==p&&(n=b):t!==b&&t!==p||(n=d)}this.updateStatus(!1,n)},i.componentWillUnmount=function(){this.cancelNextCallback()},i.getTimeouts=function(){var e,n,t,a=this.props.timeout;return e=n=t=a,null!=a&&"number"!==typeof a&&(e=a.exit,n=a.enter,t=void 0!==a.appear?a.appear:n),{exit:e,enter:n,appear:t}},i.updateStatus=function(e,n){void 0===e&&(e=!1),null!==n?(this.cancelNextCallback(),n===b?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===u&&this.setState({status:l})},i.performEnter=function(e){var n=this,t=this.props.enter,a=this.context?this.context.isMounting:e,r=this.props.nodeRef?[a]:[o.a.findDOMNode(this),a],i=r[0],s=r[1],l=this.getTimeouts(),u=a?l.appear:l.enter;!e&&!t||c?this.safeSetState({status:p},(function(){n.props.onEntered(i)})):(this.props.onEnter(i,s),this.safeSetState({status:b},(function(){n.props.onEntering(i,s),n.onTransitionEnd(u,(function(){n.safeSetState({status:p},(function(){n.props.onEntered(i,s)}))}))})))},i.performExit=function(){var e=this,n=this.props.exit,t=this.getTimeouts(),a=this.props.nodeRef?void 0:o.a.findDOMNode(this);n&&!c?(this.props.onExit(a),this.safeSetState({status:d},(function(){e.props.onExiting(a),e.onTransitionEnd(t.exit,(function(){e.safeSetState({status:u},(function(){e.props.onExited(a)}))}))}))):this.safeSetState({status:u},(function(){e.props.onExited(a)}))},i.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},i.safeSetState=function(e,n){n=this.setNextCallback(n),this.setState(e,n)},i.setNextCallback=function(e){var n=this,t=!0;return this.nextCallback=function(a){t&&(t=!1,n.nextCallback=null,e(a))},this.nextCallback.cancel=function(){t=!1},this.nextCallback},i.onTransitionEnd=function(e,n){this.setNextCallback(n);var t=this.props.nodeRef?this.props.nodeRef.current:o.a.findDOMNode(this),a=null==e&&!this.props.addEndListener;if(t&&!a){if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[t,this.nextCallback],i=r[0],c=r[1];this.props.addEndListener(i,c)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},i.render=function(){var e=this.state.status;if(e===l)return null;var n=this.props,t=n.children,a=(n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef,function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return r.a.createElement(s.Provider,{value:null},"function"===typeof t?t(e,a):r.a.cloneElement(r.a.Children.only(t),a))},a}(r.a.Component);function m(){}f.contextType=s,f.propTypes={},f.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:m,onEntering:m,onEntered:m,onExit:m,onExiting:m,onExited:m},f.UNMOUNTED=l,f.EXITED=u,f.ENTERING=b,f.ENTERED=p,f.EXITING=d;n.a=f},xxoq:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return J}));var a=t("rePB"),r=t("h4VS"),i=t("Ff2n"),o=(t("mXGw"),t("/FXl")),c=t("Hn8F"),s=t("BAaP"),l=t("l6ru"),u=t("x9F3"),b=t.n(u),p=t("M4ZN"),d=t("vFco"),f=t.n(d),m=t("mO+E"),h=t.n(m),g=t("G0rA"),x=t("olMD"),O=t("eHoq");function j(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?j(Object(t),!0).forEach((function(n){Object(a.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function v(){var e=Object(r.a)(["\n      display: flex;\n      flex-direction: column;\n      align-items: flex-end;\n    "]);return v=function(){return e},e}function w(){var e=Object(r.a)(["\n      margin-top: 10px;\n    "]);return w=function(){return e},e}function T(){var e=Object(r.a)(["\n      width: 700px;\n    "]);return T=function(){return e},e}function E(){var e=Object(r.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  "]);return E=function(){return e},e}function k(){var e=Object(r.a)(["margin-top: 10px"]);return k=function(){return e},e}function N(){var e=Object(r.a)(["\n        margin-left: 10px;\n        text-align: center;\n      "]);return N=function(){return e},e}function C(){var e=Object(r.a)(["display: flex; flex-direction: column; align-items: center"]);return C=function(){return e},e}function B(){var e=Object(r.a)(["margin-top: 10px"]);return B=function(){return e},e}function S(){var e=Object(r.a)(["\n        margin-right: 10px;\n      "]);return S=function(){return e},e}function I(){var e=Object(r.a)(["display: flex; flex-direction: column; align-items: center"]);return I=function(){return e},e}function P(){var e=Object(r.a)(["\n    display: flex;\n  "]);return P=function(){return e},e}function L(){var e=Object(r.a)(["margin-top: 10px"]);return L=function(){return e},e}function D(){var e=Object(r.a)(["\n          margin-right: 4px;\n        "]);return D=function(){return e},e}function M(){var e=Object(r.a)(["\n        margin-left: 10px;\n      "]);return M=function(){return e},e}function z(){var e=Object(r.a)(["display: flex; flex-direction: column; align-items: center"]);return z=function(){return e},e}function R(){var e=Object(r.a)(["margin-top: 10px"]);return R=function(){return e},e}function X(){var e=Object(r.a)(["\n        margin-right: 10px;\n      "]);return X=function(){return e},e}function _(){var e=Object(r.a)(["display: flex; flex-direction: column; align-items: center"]);return _=function(){return e},e}function A(){var e=Object(r.a)(["\n    display: flex;\n  "]);return A=function(){return e},e}function W(){var e=Object(r.a)(["\n    display: inline-flex;\n    align-items: center;\n  "]);return W=function(){return e},e}function H(){var e=Object(r.a)(["\n            padding: 16px 0 16px 10px;\n          "]);return H=function(){return e},e}function G(){var e=Object(r.a)(["\n            padding: 16px 0 16px 10px;\n          "]);return G=function(){return e},e}function F(){var e=Object(r.a)(["\n            padding: 16px 0 16px 10px;\n          "]);return F=function(){return e},e}function U(){var e=Object(r.a)(["\n          border-bottom: 1px solid ",";\n        "]);return U=function(){return e},e}function q(){var e=Object(r.a)(["\n    padding: 32px;\n  "]);return q=function(){return e},e}var Y={};function J(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.a)("wrapper",y(y(y({},Y),t),{},{components:n,mdxType:"MDXLayout"}),Object(o.a)("p",null,"Banners look similar to Call-Outs but serve a different use case. They are usually contextual to the product or task. If you are looking for a way to communicate a global message, like \u201cyou are offline\u201d consider using a Toast."),Object(o.a)("p",null,"Below is handy table to help you choose when to pick which pattern."),Object(o.a)("br",null),Object(o.a)(p.a,{className:Object(c.a)(q()),mdxType:"Card"},Object(o.a)(x.d,{data:[{component:"Toast",priority:"Low priority",userAction:"Optional: Toasts disappear automatically"},{component:"Banner",priority:"Medium priority",userAction:"Optional: Banners remain until dismissed by the user, or if the state that caused the banner is resolved"},{component:"Modal",priority:"Highest priority",userAction:"Required: Modals block usage until the user takes a modal action or exits the modal (if available)"}],columns:[Object(o.a)(x.e,{key:"component",label:"Component",mdxType:"TableHeader"}),Object(o.a)(x.e,{key:"priority",label:"Priority",mdxType:"TableHeader"}),Object(o.a)(x.e,{key:"userAction",label:"User Action",mdxType:"TableHeader"})],mdxType:"Table"},(function(e){var n=e.datum;return Object(o.a)("tr",{key:n.component,className:Object(c.a)(U(),g.a.gray.light2)},Object(o.a)(x.a,{className:Object(c.a)(F()),mdxType:"Cell"},n.component),Object(o.a)(x.a,{className:Object(c.a)(G()),mdxType:"Cell"},n.priority),Object(o.a)(x.a,{className:Object(c.a)(H()),mdxType:"Cell"},n.userAction))}))),Object(o.a)("br",null),Object(o.a)("p",null,"Don\u2019t use colors to signify the intensity of a communication. Instead use banners to signify type of information being communicated."),Object(o.a)("p",null,"Try to limit banner usage so that there\u2019s only 1 banner being displayed at a time on screen."),Object(o.a)("p",null,"The blue note banners mean \u201cthis is something that may be nice to know\u201d. Banners can be dismiss-able (X on the top right), or they may be persistent (no X on the top right). Consider your use case and whether or not it warrants a dismiss-able banner."),Object(o.a)(s.b,{variant:"info",dismissible:!0,mdxType:"Banner"},"This is an example of a note banner. It spans a single line."),Object(o.a)("br",null),Object(o.a)(s.b,{variant:"info",mdxType:"Banner"},"This is an example of a note banner. It spans a single line."),Object(o.a)("p",null,"The yellow warning banner means \u201cthis might be important so pay attention\u201d."),Object(o.a)(s.b,{variant:"warning",dismissible:!0,mdxType:"Banner"},"This is an example of a warning banner. It spans a single line."),Object(o.a)("p",null,"The danger red banner mean \u201csomething is broken, or actively going wrong\u201d."),Object(o.a)(s.b,{variant:"danger",dismissible:!0,mdxType:"Banner"},"We have detected a potential problem while deploying."),Object(o.a)("p",null,"The success green banner should be used sparingly and are used to indicate success, or confirmation. When using a green banner, consider using toasts instead."),Object(o.a)(s.b,{variant:"success",dismissible:!0,mdxType:"Banner"},"Your cluster has finished provisioning!"),Object(o.a)("br",null),Object(o.a)("p",null,"This is what a multiline banner looks like."),Object(o.a)("div",{className:Object(c.a)(W())},Object(o.a)("img",{src:"".concat(O.a,"/images/guidelines/banner-example.png"),alt:"Example of a multiline banner",width:"100%"})),Object(o.a)("br",null),Object(o.a)("br",null),Object(o.a)("p",null,"Links are underlined and set to medium weight to ensure legibility on colored backgrounds."),Object(o.a)("p",null,"We recommend not including CTAs within banners. However, if your specific use-case\ncalls for it we suggest using the default color button in the extra-small size and\nnot having any other buttons in the banner."),Object(o.a)("div",{className:Object(c.a)(A())},Object(o.a)("div",{className:Object(c.a)(_())},Object(o.a)(s.b,{className:Object(c.a)(X()),mdxType:"Banner"},"This is an example of a banner it only spans a single line."," ",Object(o.a)(l.c,{size:"xsmall",mdxType:"Button"},"Learn How")),Object(o.a)(f.a,{size:"xlarge",fill:g.a.green.base,className:Object(c.a)(R()),mdxType:"CheckmarkWithCircleIcon"})),Object(o.a)("div",{className:Object(c.a)(z())},Object(o.a)(s.b,{className:Object(c.a)(M()),mdxType:"Banner"},"This is an example of a banner it only spans a single line"," ",Object(o.a)(l.c,{size:"xsmall",className:Object(c.a)(D()),mdxType:"Button"},"Cancel"),Object(o.a)(l.c,{size:"xsmall",variant:"primary",mdxType:"Button"},"Learn How")),Object(o.a)(h.a,{size:"xlarge",fill:g.a.red.base,className:Object(c.a)(L()),mdxType:"XWithCircleIcon"}))),Object(o.a)("p",null,"Never center content within the banner."),Object(o.a)("div",{className:Object(c.a)(P())},Object(o.a)("div",{className:Object(c.a)(I())},Object(o.a)(s.b,{variant:"warning",className:Object(c.a)(S()),mdxType:"Banner"},"You do not have sufficient priviledges to activate MongoDB Charts for this project. Contact the owner for access."),Object(o.a)(f.a,{size:"xlarge",fill:g.a.green.base,className:Object(c.a)(B()),mdxType:"CheckmarkWithCircleIcon"})),Object(o.a)("div",{className:Object(c.a)(C())},Object(o.a)(s.b,{variant:"warning",className:Object(c.a)(N()),mdxType:"Banner"},"You do not have sufficient priviledges to activate MongoDB Charts for this project. Contact the owner for access."),Object(o.a)(h.a,{size:"xlarge",fill:g.a.red.base,className:Object(c.a)(k()),mdxType:"XWithCircleIcon"}))),Object(o.a)("br",null),Object(o.a)("p",null,"Try to restrict the banner max-width to 700px. (It\u2019s okay if this pushes some content below the fold.)"),Object(o.a)("div",{className:Object(c.a)(E())},Object(o.a)(s.b,{dismissible:!0,variant:"warning",className:Object(c.a)(T()),mdxType:"Banner"},"You do not have sufficient priviledges to activate MongoDB Charts for this project. Contact the owner for access."),Object(o.a)(f.a,{size:"xlarge",fill:g.a.green.base,className:Object(c.a)(w()),mdxType:"CheckmarkWithCircleIcon"})),Object(o.a)("p",null,"If you want, you can customize your banner and add a 32px by 32px feature icon. Make sure the feature icons ties well with the content it\u2019s supporting."),Object(o.a)(s.b,{variant:"info",image:Object(o.a)(b.a,{mdxType:"BulbIcon"}),dismissible:!0,mdxType:"Banner"},"This is an example of a note banner. It spans a single line."),Object(o.a)("br",null),Object(o.a)(s.b,{variant:"info",image:Object(o.a)(b.a,{mdxType:"BulbIcon"}),dismissible:!0,mdxType:"Banner"},"To avoid disrupting majority writes, new members are now added to replica sets as priority=0, votes=0 until they reach secondary state, after which Cloud Manager automatically updates the configuration to match the priority and votes value specified in the deployment."),Object(o.a)("br",null),Object(o.a)(s.b,{variant:"info",image:Object(o.a)(b.a,{mdxType:"BulbIcon"}),dismissible:!0,mdxType:"Banner"},Object(o.a)("div",{className:Object(c.a)(v())},"To avoid disrupting majority writes, new members are now added to replica sets as priority=0, votes=0 until they reach secondary state, after which Cloud Manager automatically updates the configuration to match the priority and votes value specified in the deployment.",Object(o.a)(l.c,{size:"xsmall",mdxType:"Button"},"Learn How"))))}J.isMDXComponent=!0}},[["HQh0",0,1,2,3,4,6,7,11,22]]]);