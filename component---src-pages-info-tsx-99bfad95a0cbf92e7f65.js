(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{NGwb:function(e,t,i){"use strict";i("91GP"),i("2Spj"),i("/SS/"),i("hHhE"),i("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}();function o(e){return e&&e.__esModule?e:{default:e}}var a=i("q1tI"),r=o(a),l=o(i("hKI/")),s=o(i("17x9")),c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t,i){for(var n=!0;n;){var o=e,a=t,r=i;n=!1,null===o&&(o=Function.prototype);var l=Object.getOwnPropertyDescriptor(o,a);if(void 0!==l){if("value"in l)return l.value;var s=l.get;if(void 0===s)return;return s.call(r)}var c=Object.getPrototypeOf(o);if(null===c)return;e=c,t=a,i=r,n=!0,l=c=void 0}}(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.serverSide="undefined"==typeof window,this.listener=(0,l.default)(this.handleScroll.bind(this),50),this.visibility={onScreen:!1,inViewport:!1},this.state={classes:"animated",style:{animationDuration:this.props.duration+"s",opacity:this.props.initiallyVisible?1:0}}}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"getElementTop",value:function(e){for(var t=0;e&&void 0!==e.offsetTop&&void 0!==e.clientTop;)t+=e.offsetTop+e.clientTop,e=e.offsetParent;return t}},{key:"getScrollPos",value:function(){return void 0!==this.scrollableParent.pageYOffset?this.scrollableParent.pageYOffset:this.scrollableParent.scrollTop}},{key:"getScrollableParentHeight",value:function(){return void 0!==this.scrollableParent.innerHeight?this.scrollableParent.innerHeight:this.scrollableParent.clientHeight}},{key:"getViewportTop",value:function(){return this.getScrollPos()+this.props.offset}},{key:"getViewportBottom",value:function(){return this.getScrollPos()+this.getScrollableParentHeight()-this.props.offset}},{key:"isInViewport",value:function(e){return e>=this.getViewportTop()&&e<=this.getViewportBottom()}},{key:"isAboveViewport",value:function(e){return e<this.getViewportTop()}},{key:"isBelowViewport",value:function(e){return e>this.getViewportBottom()}},{key:"inViewport",value:function(e,t){return this.isInViewport(e)||this.isInViewport(t)||this.isAboveViewport(e)&&this.isBelowViewport(t)}},{key:"onScreen",value:function(e,t){return!this.isAboveScreen(t)&&!this.isBelowScreen(e)}},{key:"isAboveScreen",value:function(e){return e<this.getScrollPos()}},{key:"isBelowScreen",value:function(e){return e>this.getScrollPos()+this.getScrollableParentHeight()}},{key:"getVisibility",value:function(){var e=this.getElementTop(this.node)-this.getElementTop(this.scrollableParent),t=e+this.node.clientHeight;return{inViewport:this.inViewport(e,t),onScreen:this.onScreen(e,t)}}},{key:"componentDidMount",value:function(){if(!this.serverSide){var e=this.props.scrollableParentSelector;this.scrollableParent=e?document.querySelector(e):window,this.scrollableParent&&this.scrollableParent.addEventListener?this.scrollableParent.addEventListener("scroll",this.listener):console.warn("Cannot find element by locator: "+this.props.scrollableParentSelector),this.props.animatePreScroll&&this.handleScroll()}}},{key:"componentWillUnmount",value:function(){clearTimeout(this.delayedAnimationTimeout),clearTimeout(this.callbackTimeout),window&&window.removeEventListener&&window.removeEventListener("scroll",this.listener)}},{key:"visibilityHasChanged",value:function(e,t){return e.inViewport!==t.inViewport||e.onScreen!==t.onScreen}},{key:"animate",value:function(e,t){var i=this;this.delayedAnimationTimeout=setTimeout((function(){i.animating=!0,i.setState({classes:"animated "+e,style:{animationDuration:i.props.duration+"s"}}),i.callbackTimeout=setTimeout(t,1e3*i.props.duration)}),this.props.delay)}},{key:"animateIn",value:function(e){var t=this;this.animate(this.props.animateIn,(function(){t.props.animateOnce||(t.setState({style:{animationDuration:t.props.duration+"s",opacity:1}}),t.animating=!1);var i=t.getVisibility();e&&e(i)}))}},{key:"animateOut",value:function(e){var t=this;this.animate(this.props.animateOut,(function(){t.setState({classes:"animated",style:{animationDuration:t.props.duration+"s",opacity:0}});var i=t.getVisibility();i.inViewport&&t.props.animateIn?t.animateIn(t.props.afterAnimatedIn):t.animating=!1,e&&e(i)}))}},{key:"handleScroll",value:function(){if(!this.animating){var e=this.getVisibility();this.visibilityHasChanged(this.visibility,e)&&(clearTimeout(this.delayedAnimationTimeout),e.onScreen?e.inViewport&&this.props.animateIn?this.animateIn(this.props.afterAnimatedIn):e.onScreen&&this.visibility.inViewport&&this.props.animateOut&&1===this.state.style.opacity&&this.animateOut(this.props.afterAnimatedOut):this.setState({classes:"animated",style:{animationDuration:this.props.duration+"s",opacity:this.props.initiallyVisible?1:0}}),this.visibility=e)}}},{key:"render",value:function(){var e=this,t=this.props.className?this.props.className+" "+this.state.classes:this.state.classes;return r.default.createElement("div",{ref:function(t){e.node=t},className:t,style:Object.assign({},this.state.style,this.props.style)},this.props.children)}}]),t}(a.Component);t.default=c,c.defaultProps={offset:150,duration:1,initiallyVisible:!1,delay:0,animateOnce:!1,animatePreScroll:!0},c.propTypes={animateIn:s.default.string,animateOut:s.default.string,offset:s.default.number,duration:s.default.number,delay:s.default.number,initiallyVisible:s.default.bool,animateOnce:s.default.bool,style:s.default.object,scrollableParentSelector:s.default.string,className:s.default.string,animatePreScroll:s.default.bool},e.exports=t.default},alhl:function(e,t,i){"use strict";i.r(t);var n=i("q1tI"),o=i.n(n),a=i("vOnD"),r=i("BNza"),l=i("6Uz4"),s=i("H8eV"),c=i("NGwb"),u=i.n(c),p=a.a.div.withConfig({displayName:"info__MainContainer",componentId:"sc-1y84hv4-0"})(["background:linear-gradient(220deg,#0f2027,#203a43,#2c5364);background-size:300% 300%;-webkit-animation:Gradient 7s ease infinite;-moz-animation:Gradient 7s ease infinite;animation:Gradient 7s ease infinite;@-webkit-keyframes Gradient{0%{background-position:92% 0%}50%{background-position:9% 100%}100%{background-position:92% 0%}}@-moz-keyframes Gradient{0%{background-position:92% 0%}50%{background-position:9% 100%}100%{background-position:92% 0%}}@keyframes Gradient{0%{background-position:92% 0%}50%{background-position:9% 100%}100%{background-position:92% 0%}}"]),f=a.a.div.withConfig({displayName:"info__SubContainer",componentId:"sc-1y84hv4-1"})(["width:100%;height:100vh;position:relative;color:white;box-sizing:border-box;"]),d=a.a.div.withConfig({displayName:"info__CenterContainer",componentId:"sc-1y84hv4-2"})(["position:absolute;top:50%;transform:translate(0%,-50%);width:100%;"]),m=a.a.div.withConfig({displayName:"info__LeftContainer",componentId:"sc-1y84hv4-3"})(["display:inline-block;width:50%;box-sizing:border-box;@media (max-width:1080px){width:100%;display:block;text-align:center;margin-bott}"]),h=a.a.div.withConfig({displayName:"info__RightContainer",componentId:"sc-1y84hv4-4"})(["display:inline-block;width:50%;box-sizing:border-box;padding:20px;position:absolute;top:50%;transform:translate(0%,-50%);@media (max-width:1080px){width:100%;text-align:center;position:relative;transform:none;display:block;}"]),v=a.a.div.withConfig({displayName:"info__CircleImageContainer",componentId:"sc-1y84hv4-5"})(["width:160px;height:160px;border-radius:50%;margin-right:80px;background-image:url('/profile.jpg');background-repeat:no-repeat;background-size:cover;background-position:center center;float:right;display:inline-block;@media (max-width:1080px){float:none;margin:0;}"]),y=a.a.div.withConfig({displayName:"info__SubTitleContainer",componentId:"sc-1y84hv4-6"})(["font-size:32px;font-family:Montserrat,Noto Sans KR,Helvetica,Arial,sans-serif;font-weight:600;"]),b=a.a.div.withConfig({displayName:"info__SubContentContainer",componentId:"sc-1y84hv4-7"})(["font-family:Noto Sans KR,Helvetica,Arial,sans-serif;"]),g=a.a.div.withConfig({displayName:"info__LiContainer",componentId:"sc-1y84hv4-8"})(["font-family:Montserrat,Noto Sans KR,Helvetica,Arial,sans-serif;"]),w=a.a.div.withConfig({displayName:"info__RelativeContainer",componentId:"sc-1y84hv4-9"})(["position:relative;width:100%;"]);a.a.div.withConfig({displayName:"info__HorizonalCenterContainer",componentId:"sc-1y84hv4-10"})(["text-align:center;"]),a.a.div.withConfig({displayName:"info__IconContainer",componentId:"sc-1y84hv4-11"})([""]);t.default=function(){return o.a.createElement("div",null,o.a.createElement(r.a,null),o.a.createElement(p,null,o.a.createElement(s.a,{title:"I'm JustKode!",description:"98년생 학생 개발자."}),o.a.createElement(f,null,o.a.createElement(d,null,o.a.createElement(w,null,o.a.createElement(m,null,o.a.createElement(u.a,{animateIn:"fadeIn",delay:500},o.a.createElement(v,null))),o.a.createElement(h,null,o.a.createElement(u.a,{animateIn:"fadeIn",delay:1e3},o.a.createElement(y,null,"I'm justkode!"),o.a.createElement(b,null,"안녕하세요, 경희대학교 컴퓨터공학과에 재학 중인 ",o.a.createElement("strong",null,"박민재"),"라고 합니다.",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(g,null,"- Born: 1998.07.15"),o.a.createElement(g,null,"- Favorite Language: ",o.a.createElement("strong",null,"Python"),", C++, Javascript"),o.a.createElement(g,null,"- Interasted in: ",o.a.createElement("strong",null,"Deep Learning"),", Big Data, Cloud Computing"),o.a.createElement(g,null,"- Email: justkode@kakao.com")))))))),o.a.createElement(l.a,null))}},"hKI/":function(e,t,i){(function(t){i("pIFo"),i("a1Th"),i("h7Nl"),i("Btvt");var n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,r=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,u=s||c||Function("return this")(),p=Object.prototype.toString,f=Math.max,d=Math.min,m=function(){return u.Date.now()};function h(e,t,i){var n,o,a,r,l,s,c=0,u=!1,p=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var i=n,a=o;return n=o=void 0,c=t,r=e.apply(a,i)}function g(e){return c=e,l=setTimeout(k,t),u?b(e):r}function w(e){var i=e-s;return void 0===s||i>=t||i<0||p&&e-c>=a}function k(){var e=m();if(w(e))return S(e);l=setTimeout(k,function(e){var i=t-(e-s);return p?d(i,a-(e-c)):i}(e))}function S(e){return l=void 0,h&&n?b(e):(n=o=void 0,r)}function E(){var e=m(),i=w(e);if(n=arguments,o=this,s=e,i){if(void 0===l)return g(s);if(p)return l=setTimeout(k,t),b(s)}return void 0===l&&(l=setTimeout(k,t)),r}return t=y(t)||0,v(i)&&(u=!!i.leading,a=(p="maxWait"in i)?f(y(i.maxWait)||0,t):a,h="trailing"in i?!!i.trailing:h),E.cancel=function(){void 0!==l&&clearTimeout(l),c=0,n=s=o=l=void 0},E.flush=function(){return void 0===l?r:S(m())},E}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==p.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var i=a.test(e);return i||r.test(e)?l(e.slice(2),i?2:8):o.test(e)?NaN:+e}e.exports=function(e,t,i){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(i)&&(n="leading"in i?!!i.leading:n,o="trailing"in i?!!i.trailing:o),h(e,t,{leading:n,maxWait:t,trailing:o})}}).call(this,i("yLpj"))}}]);
//# sourceMappingURL=component---src-pages-info-tsx-99bfad95a0cbf92e7f65.js.map