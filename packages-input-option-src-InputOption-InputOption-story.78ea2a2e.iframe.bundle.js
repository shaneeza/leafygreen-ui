(self.webpackChunk=self.webpackChunk||[]).push([[3665],{"./packages/input-option/src/InputOption/InputOption.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>InputOption_story});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_inputOptionThemeStyl,_templateObject5,_templateObject6,_inputOptionHoverStyl,_templateObject7,_templateObject8,_templateObject9,_inputOptionActiveSty,_templateObject10,_templateObject11,_inputOptionDisabledS,react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("./packages/icon/dist/esm/index.js"),dist_esm=__webpack_require__("./packages/lib/dist/esm/index.js"),emotion_dist_esm=__webpack_require__("./packages/emotion/dist/esm/index.js"),typography_dist_esm=__webpack_require__("./packages/typography/dist/esm/index.js"),palette_dist_esm=__webpack_require__("./packages/palette/dist/esm/index.js"),tokens_dist_esm=__webpack_require__("./packages/tokens/dist/esm/index.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var InputOptionContent_styles_templateObject,InputOptionContent_styles_templateObject2,InputOptionContent_styles_templateObject3,InputOptionContent_styles_templateObject4,InputOptionContent_styles_templateObject5,InputOptionContent_styles_templateObject6,titleClassName=(0,dist_esm.hy)("input-option-title"),descriptionClassName=(0,dist_esm.hy)("input-option-description"),inputOptionStyles=(0,emotion_dist_esm.css)(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  position: relative;\n  list-style: none;\n  outline: none;\n  border: unset;\n  margin: 0;\n  text-align: left;\n  text-decoration: none;\n  cursor: pointer;\n\n  font-size: ","px;\n  line-height: ","px;\n  font-family: ",";\n  padding: ","px ","px;\n\n  transition: background-color ","ms ease-in-out;\n\n  &:focus,\n  &:focus-visible {\n    outline: none;\n    border: unset;\n  }\n"])),tokens_dist_esm.yL.body1.fontSize,tokens_dist_esm.yL.body1.lineHeight,tokens_dist_esm.Vl.default,tokens_dist_esm.W0[2],tokens_dist_esm.W0[2]+tokens_dist_esm.W0[1],tokens_dist_esm.nV.default),titleSelectionStyles=(0,emotion_dist_esm.css)(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n  ."," {\n    font-weight: bold;\n  }\n"])),titleClassName),inputOptionThemeStyles=(_defineProperty(_inputOptionThemeStyl={},dist_esm.Q2.Light,(0,emotion_dist_esm.css)(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n    color: ",";\n  "])),palette_dist_esm.D.black)),_defineProperty(_inputOptionThemeStyl,dist_esm.Q2.Dark,(0,emotion_dist_esm.css)(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n    color: ",";\n  "])),palette_dist_esm.D.gray.light2)),_inputOptionThemeStyl),inputOptionHoverStyles=(_defineProperty(_inputOptionHoverStyl={},dist_esm.Q2.Light,(0,emotion_dist_esm.css)(_templateObject5||(_templateObject5=_taggedTemplateLiteral(["\n    &:hover {\n      outline: none;\n      background-color: ",";\n    }\n  "])),palette_dist_esm.D.gray.light2)),_defineProperty(_inputOptionHoverStyl,dist_esm.Q2.Dark,(0,emotion_dist_esm.css)(_templateObject6||(_templateObject6=_taggedTemplateLiteral(["\n    &:hover {\n      outline: none;\n      background-color: ",";\n    }\n  "])),palette_dist_esm.D.gray.dark4)),_inputOptionHoverStyl),wedgeWidth=tokens_dist_esm.W0[1],wedgePaddingY=tokens_dist_esm.W0[2],inputOptionWedge=(0,emotion_dist_esm.css)(_templateObject7||(_templateObject7=_taggedTemplateLiteral(["\n  // Left wedge\n  &:before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 50%;\n    width: ","px;\n    height: calc(100% - ","px);\n    min-height: ","px;\n    background-color: rgba(255, 255, 255, 0);\n    border-radius: 0 6px 6px 0;\n    transform: scale3d(0, 0.3, 0) translateY(-50%);\n    transform-origin: 0%; // 0% since we use translateY\n    transition: ","ms ease-in-out;\n    transition-property: transform, background-color;\n  }\n"])),wedgeWidth,2*wedgePaddingY,tokens_dist_esm.W0[3],tokens_dist_esm.nV.default),inputOptionActiveStyles=(_defineProperty(_inputOptionActiveSty={},dist_esm.Q2.Light,(0,emotion_dist_esm.css)(_templateObject8||(_templateObject8=_taggedTemplateLiteral(["\n    outline: none;\n    background-color: ",";\n    color: ",";\n\n    &:before {\n      transform: scaleY(1) translateY(-50%);\n      background-color: ",";\n    }\n  "])),palette_dist_esm.D.blue.light3,palette_dist_esm.D.blue.dark2,palette_dist_esm.D.blue.base)),_defineProperty(_inputOptionActiveSty,dist_esm.Q2.Dark,(0,emotion_dist_esm.css)(_templateObject9||(_templateObject9=_taggedTemplateLiteral(["\n    outline: none;\n    background-color: ",";\n    color: ",";\n\n    &:before {\n      transform: scaleY(1) translateY(-50%);\n      background-color: ",";\n    }\n  "])),palette_dist_esm.D.blue.dark3,palette_dist_esm.D.blue.light3,palette_dist_esm.D.blue.light1)),_inputOptionActiveSty),inputOptionDisabledStyles=(_defineProperty(_inputOptionDisabledS={},dist_esm.Q2.Light,(0,emotion_dist_esm.css)(_templateObject10||(_templateObject10=_taggedTemplateLiteral(["\n    cursor: not-allowed;\n\n    &,\n    & ."," {\n      color: ",";\n    }\n\n    &:hover {\n      background-color: inherit;\n    }\n\n    &:before {\n      content: unset;\n    }\n  "])),descriptionClassName,palette_dist_esm.D.gray.light1)),_defineProperty(_inputOptionDisabledS,dist_esm.Q2.Dark,(0,emotion_dist_esm.css)(_templateObject11||(_templateObject11=_taggedTemplateLiteral(["\n    cursor: not-allowed;\n\n    &,\n    & ."," {\n      color: ",";\n    }\n\n    &:hover {\n      background-color: inherit;\n    }\n\n    &:before {\n      content: unset;\n    }\n  "])),descriptionClassName,palette_dist_esm.D.gray.dark1)),_inputOptionDisabledS);function InputOptionContent_styles_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var leftGlyphClassName=(0,dist_esm.hy)("input-option-left-glyph"),titleBaseStyles=(0,emotion_dist_esm.css)(InputOptionContent_styles_templateObject||(InputOptionContent_styles_templateObject=InputOptionContent_styles_taggedTemplateLiteral(["\n  overflow-wrap: anywhere;\n"]))),descriptionBaseStyles=(0,emotion_dist_esm.css)(InputOptionContent_styles_templateObject2||(InputOptionContent_styles_templateObject2=InputOptionContent_styles_taggedTemplateLiteral(["\n  max-height: ","px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])),3*tokens_dist_esm.W0[3]),contentWrapper=(0,emotion_dist_esm.css)(InputOptionContent_styles_templateObject3||(InputOptionContent_styles_templateObject3=InputOptionContent_styles_taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: ","px 1fr;\n  gap: ","px;\n  align-items: center;\n  width: 100%;\n"])),tokens_dist_esm.W0[3],tokens_dist_esm.W0[2]),textWrapper=(0,emotion_dist_esm.css)(InputOptionContent_styles_templateObject4||(InputOptionContent_styles_templateObject4=InputOptionContent_styles_taggedTemplateLiteral(["\n  grid-column: 2;\n"]))),glyphContainer=(0,emotion_dist_esm.css)(InputOptionContent_styles_templateObject5||(InputOptionContent_styles_templateObject5=InputOptionContent_styles_taggedTemplateLiteral(["\n  display: flex;\n  height: 20px;\n  align-items: center;\n"]))),glyphRightStyles=(0,emotion_dist_esm.css)(InputOptionContent_styles_templateObject6||(InputOptionContent_styles_templateObject6=InputOptionContent_styles_taggedTemplateLiteral(["\n  width: ","px;\n  grid-column: 3;\n  grid-row: 1;\n"])),tokens_dist_esm.W0[3]),InputOptionContent=function InputOptionContent(_ref){var children=_ref.children,description=_ref.description,leftGlyph=_ref.leftGlyph,rightGlyph=_ref.rightGlyph;return react.createElement("div",{className:contentWrapper},leftGlyph&&react.createElement("div",{className:(0,emotion_dist_esm.cx)(leftGlyphClassName,glyphContainer)},leftGlyph),react.createElement("div",{className:textWrapper},react.createElement("div",{className:(0,emotion_dist_esm.cx)(titleClassName,titleBaseStyles)},children),description&&react.createElement(typography_dist_esm.dk,{className:(0,emotion_dist_esm.cx)(descriptionClassName,descriptionBaseStyles)},description)),rightGlyph&&react.createElement("div",{className:(0,emotion_dist_esm.cx)(glyphContainer,glyphRightStyles)},rightGlyph))};InputOptionContent.displayName="InputOptionContent",InputOptionContent.displayName="InputOptionContent";try{InputOptionContent.displayName="InputOptionContent",InputOptionContent.__docgenInfo={description:"",displayName:"InputOptionContent",props:{children:{defaultValue:null,description:"Content to appear inside of option",name:"children",required:!0,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Optional description text",name:"description",required:!1,type:{name:"ReactNode"}},leftGlyph:{defaultValue:null,description:"Glyph to be displayed to the left of content",name:"leftGlyph",required:!1,type:{name:"ReactNode"}},rightGlyph:{defaultValue:null,description:"Glyph to be displayed to the right of content",name:"rightGlyph",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/input-option/src/InputOptionContent/InputOptionContent.tsx#InputOptionContent"]={docgenInfo:InputOptionContent.__docgenInfo,name:"InputOptionContent",path:"packages/input-option/src/InputOptionContent/InputOptionContent.tsx#InputOptionContent"})}catch(__react_docgen_typescript_loader_error){}var leafygreen_provider_dist_esm=__webpack_require__("./packages/leafygreen-provider/dist/esm/index.js"),polymorphic_dist_esm=__webpack_require__("./packages/polymorphic/dist/esm/index.js");function InputOption_typeof(obj){return InputOption_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},InputOption_typeof(obj)}var _excluded=["as","children","disabled","highlighted","selected","darkMode","showWedge","isInteractive","className"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function InputOption_defineProperty(obj,key,value){return(key=function InputOption_toPropertyKey(arg){var key=function InputOption_toPrimitive(input,hint){if("object"!==InputOption_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==InputOption_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===InputOption_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var _Basic$parameters,_Basic$parameters2,_Basic$parameters2$do,InputOption=(0,polymorphic_dist_esm.HX)((function(_ref,ref){var _cx,_ref$as=_ref.as,as=void 0===_ref$as?"li":_ref$as,children=_ref.children,disabled=_ref.disabled,highlighted=_ref.highlighted,selected=_ref.selected,darkModeProp=_ref.darkMode,_ref$showWedge=_ref.showWedge,showWedge=void 0===_ref$showWedge||_ref$showWedge,_ref$isInteractive=_ref.isInteractive,isInteractive=void 0===_ref$isInteractive||_ref$isInteractive,className=_ref.className,rest=_objectWithoutProperties(_ref,_excluded),Component=(0,polymorphic_dist_esm.lS)(as).Component,theme=(0,leafygreen_provider_dist_esm.vs)(darkModeProp).theme;return react.createElement(Component,_extends({ref,role:"option","aria-selected":highlighted,tabIndex:-1,className:(0,emotion_dist_esm.cx)(inputOptionStyles,inputOptionThemeStyles[theme],(_cx={},InputOption_defineProperty(_cx,inputOptionWedge,showWedge),InputOption_defineProperty(_cx,inputOptionHoverStyles[theme],isInteractive),InputOption_defineProperty(_cx,inputOptionActiveStyles[theme],isInteractive&&(selected||highlighted)),InputOption_defineProperty(_cx,inputOptionDisabledStyles[theme],disabled),InputOption_defineProperty(_cx,titleSelectionStyles,selected),_cx),className)},rest),children)}));InputOption.displayName="InputOption";try{InputOption.displayName="InputOption",InputOption.__docgenInfo={description:"",displayName:"InputOption",props:{"aria-label":{defaultValue:null,description:"Screen reader label text\n\nOptional if `label` or `aria-labelledby` is provided",name:"aria-label",required:!1,type:{name:"string | undefined"}},"aria-labelledby":{defaultValue:null,description:"Screen-reader label element.\n\nOptional if `label` or `aria-label` is provided",name:"aria-labelledby",required:!1,type:{name:"string | undefined"}},darkMode:{defaultValue:{value:"false"},description:"Renders the component with dark mode styles.",name:"darkMode",required:!1,type:{name:"boolean | undefined"}},disabled:{defaultValue:{value:"false"},description:"Prevents the option from being selectable.",name:"disabled",required:!1,type:{name:"boolean | undefined"}},highlighted:{defaultValue:{value:"false"},description:"Defines the currently highlighted option element for keyboard navigation.\nNot to be confused with `selected`, which identifies the currently selected option",name:"highlighted",required:!1,type:{name:"boolean | undefined"}},selected:{defaultValue:null,description:"Whether the component is selected, regardless of keyboard navigation",name:"selected",required:!1,type:{name:"boolean | undefined"}},showWedge:{defaultValue:{value:"true"},description:"Whether a wedge displays on the left side of the item\nwhen the element is highlighted or selected",name:"showWedge",required:!1,type:{name:"boolean | undefined"}},isInteractive:{defaultValue:{value:"true"},description:"Determines whether to show hover, highlight and selected styles",name:"isInteractive",required:!1,type:{name:"boolean | undefined"}},as:{defaultValue:null,description:"The component or element to render as",name:"as",required:!1,type:{name:"PolymorphicAs | undefined"}},ref:{defaultValue:null,description:"The ref object returned by `React.useRef`",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/input-option/src/InputOption/InputOption.tsx#InputOption"]={docgenInfo:InputOption.__docgenInfo,name:"InputOption",path:"packages/input-option/src/InputOption/InputOption.tsx#InputOption"})}catch(__react_docgen_typescript_loader_error){}function InputOption_story_typeof(obj){return InputOption_story_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},InputOption_story_typeof(obj)}var InputOption_story_excluded=["leftGlyph","rightGlyph","description"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){InputOption_story_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function InputOption_story_defineProperty(obj,key,value){return(key=function InputOption_story_toPropertyKey(arg){var key=function InputOption_story_toPrimitive(input,hint){if("object"!==InputOption_story_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==InputOption_story_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===InputOption_story_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function InputOption_story_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function InputOption_story_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const InputOption_story={title:"Components/InputOption",component:InputOption,parameters:{default:"Basic",controls:{exclude:[].concat(function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(dist_esm.xZ),["setError","filteredOptions","initialValue","value","children"])}},argTypes:{disabled:{control:"boolean"},highlighted:{control:"boolean"},selected:{control:"boolean"},showWedge:{control:"boolean"},leftGlyph:{options:Object.keys(esm.pE),control:{type:"select"}},rightGlyph:{options:Object.keys(esm.pE),control:{type:"select"}},description:{control:{type:"text"}},as:dist_esm.bN.as}};var Template=function Template(props){var leftGlyph=props.leftGlyph,rightGlyph=props.rightGlyph,description=props.description,rest=InputOption_story_objectWithoutProperties(props,InputOption_story_excluded);return react.createElement(InputOption,rest,react.createElement(InputOptionContent,{leftGlyph:leftGlyph?react.createElement(esm.ZP,{glyph:leftGlyph}):void 0,rightGlyph:rightGlyph?react.createElement(esm.ZP,{glyph:rightGlyph}):void 0,description},"Some text"))};Template.displayName="Template";var Basic=Template.bind({});Basic.parameters=_objectSpread(_objectSpread({},Basic.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Basic$parameters=Basic.parameters)||void 0===_Basic$parameters?void 0:_Basic$parameters.docs),{},{source:_objectSpread({originalSource:"(props: InputOptionProps & InputOptionContentProps) => {\n  const {\n    leftGlyph,\n    rightGlyph,\n    description,\n    ...rest\n  } = props;\n  return <InputOption {...rest}>\n      <InputOptionContent leftGlyph={leftGlyph ? <Icon glyph={(leftGlyph as string)} /> : undefined} rightGlyph={rightGlyph ? <Icon glyph={(rightGlyph as string)} /> : undefined} description={description}>\n        Some text\n      </InputOptionContent>\n    </InputOption>;\n}"},null===(_Basic$parameters2=Basic.parameters)||void 0===_Basic$parameters2||null===(_Basic$parameters2$do=_Basic$parameters2.docs)||void 0===_Basic$parameters2$do?void 0:_Basic$parameters2$do.source)})});var __namedExportsOrder=["Basic"]},"./node_modules/lodash/_arrayReduce.js":module=>{module.exports=function arrayReduce(array,iteratee,accumulator,initAccum){var index=-1,length=null==array?0:array.length;for(initAccum&&length&&(accumulator=array[++index]);++index<length;)accumulator=iteratee(accumulator,array[index],index,array);return accumulator}},"./node_modules/lodash/_asciiWords.js":module=>{var reAsciiWord=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;module.exports=function asciiWords(string){return string.match(reAsciiWord)||[]}},"./node_modules/lodash/_basePropertyOf.js":module=>{module.exports=function basePropertyOf(object){return function(key){return null==object?void 0:object[key]}}},"./node_modules/lodash/_createCompounder.js":(module,__unused_webpack_exports,__webpack_require__)=>{var arrayReduce=__webpack_require__("./node_modules/lodash/_arrayReduce.js"),deburr=__webpack_require__("./node_modules/lodash/deburr.js"),words=__webpack_require__("./node_modules/lodash/words.js"),reApos=RegExp("['’]","g");module.exports=function createCompounder(callback){return function(string){return arrayReduce(words(deburr(string).replace(reApos,"")),callback,"")}}},"./node_modules/lodash/_deburrLetter.js":(module,__unused_webpack_exports,__webpack_require__)=>{var deburrLetter=__webpack_require__("./node_modules/lodash/_basePropertyOf.js")({À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"});module.exports=deburrLetter},"./node_modules/lodash/_hasUnicodeWord.js":module=>{var reHasUnicodeWord=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;module.exports=function hasUnicodeWord(string){return reHasUnicodeWord.test(string)}},"./node_modules/lodash/_unicodeWords.js":module=>{var rsBreakRange="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",rsBreak="["+rsBreakRange+"]",rsDigits="\\d+",rsDingbat="[\\u2700-\\u27bf]",rsLower="[a-z\\xdf-\\xf6\\xf8-\\xff]",rsMisc="[^\\ud800-\\udfff"+rsBreakRange+rsDigits+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",rsRegional="(?:\\ud83c[\\udde6-\\uddff]){2}",rsSurrPair="[\\ud800-\\udbff][\\udc00-\\udfff]",rsUpper="[A-Z\\xc0-\\xd6\\xd8-\\xde]",rsMiscLower="(?:"+rsLower+"|"+rsMisc+")",rsMiscUpper="(?:"+rsUpper+"|"+rsMisc+")",reOptMod="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",rsSeq="[\\ufe0e\\ufe0f]?"+reOptMod+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",rsRegional,rsSurrPair].join("|")+")[\\ufe0e\\ufe0f]?"+reOptMod+")*"),rsEmoji="(?:"+[rsDingbat,rsRegional,rsSurrPair].join("|")+")"+rsSeq,reUnicodeWord=RegExp([rsUpper+"?"+rsLower+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[rsBreak,rsUpper,"$"].join("|")+")",rsMiscUpper+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[rsBreak,rsUpper+rsMiscLower,"$"].join("|")+")",rsUpper+"?"+rsMiscLower+"+(?:['’](?:d|ll|m|re|s|t|ve))?",rsUpper+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",rsDigits,rsEmoji].join("|"),"g");module.exports=function unicodeWords(string){return string.match(reUnicodeWord)||[]}},"./node_modules/lodash/deburr.js":(module,__unused_webpack_exports,__webpack_require__)=>{var deburrLetter=__webpack_require__("./node_modules/lodash/_deburrLetter.js"),toString=__webpack_require__("./node_modules/lodash/toString.js"),reLatin=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,reComboMark=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");module.exports=function deburr(string){return(string=toString(string))&&string.replace(reLatin,deburrLetter).replace(reComboMark,"")}},"./node_modules/lodash/kebabCase.js":(module,__unused_webpack_exports,__webpack_require__)=>{var kebabCase=__webpack_require__("./node_modules/lodash/_createCompounder.js")((function(result,word,index){return result+(index?"-":"")+word.toLowerCase()}));module.exports=kebabCase},"./node_modules/lodash/words.js":(module,__unused_webpack_exports,__webpack_require__)=>{var asciiWords=__webpack_require__("./node_modules/lodash/_asciiWords.js"),hasUnicodeWord=__webpack_require__("./node_modules/lodash/_hasUnicodeWord.js"),toString=__webpack_require__("./node_modules/lodash/toString.js"),unicodeWords=__webpack_require__("./node_modules/lodash/_unicodeWords.js");module.exports=function words(string,pattern,guard){return string=toString(string),void 0===(pattern=guard?void 0:pattern)?hasUnicodeWord(string)?unicodeWords(string):asciiWords(string):string.match(pattern)||[]}}}]);