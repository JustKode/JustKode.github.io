(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"7evw":function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=t.CommentEmbed=t.CommentCount=void 0;var o=n("UZsz"),i=n("Bp/N"),r=n("HhXV");t.CommentCount=o.CommentCount,t.CommentEmbed=i.CommentEmbed,t.DiscussionEmbed=r.DiscussionEmbed;var a={CommentCount:o.CommentCount,CommentEmbed:i.CommentEmbed,DiscussionEmbed:r.DiscussionEmbed};t.default=a},"Bp/N":function(e,t,n){"use strict";n("xfY5"),n("a1Th"),n("h7Nl"),n("Btvt"),n("/SS/"),n("hHhE"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var o,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n("q1tI"),a=(o=r)&&o.__esModule?o:{default:o};function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(t.CommentEmbed=function(e){function t(){return s(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"getSrc",value:function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")}},{key:"render",value:function(){return a.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}]),t}(a.default.Component)).defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320}},HhXV:function(e,t,n){"use strict";n("/SS/"),n("hHhE"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var o,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n("q1tI"),a=(o=r)&&o.__esModule?o:{default:o},s=n("ZMnY");function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}t.DiscussionEmbed=function(e){function t(){return c(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentWillMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance()}},{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,s.shallowComparison)(this.props,e)}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,s.insertScript)("https://"+this.props.shortname+".disqus.com/embed.js","dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,s.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.callbacks.onNewComment=[e.onNewComment]}}},{key:"render",value:function(){return a.default.createElement("div",{id:"disqus_thread"})}}]),t}(a.default.Component)},USZL:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return C})),n.d(t,"pageQuery",(function(){return I}));n("pIFo");var o=n("q1tI"),i=n.n(o),r=n("vOnD"),a=n("BNza"),s=n("6Uz4"),c=n("H8eV"),u=n("Wbzz"),l=n("ma3e"),d=n("7evw"),p=r.a.div.withConfig({displayName:"postLayout__MainContainer",componentId:"sc-15sv84-0"})([""]),m=r.a.div.withConfig({displayName:"postLayout__SubContainer",componentId:"sc-15sv84-1"})(["width:100%;max-width:1080px;margin:auto;padding:20px;box-sizing:border-box;position:relative;"]),f=r.a.div.withConfig({displayName:"postLayout__BottomContainer",componentId:"sc-15sv84-2"})(["position:absolute;bottom:0%;padding-bottom:12px;width:calc(100% - 40px);"]),h=(r.a.div.withConfig({displayName:"postLayout__HeadContainer",componentId:"sc-15sv84-3"})(["width:100%;border-bottom:1px solid #bbbbbb;"]),r.a.span.withConfig({displayName:"postLayout__CategoryContainer",componentId:"sc-15sv84-4"})(["padding:8px;background-color:black;margin-right:4px;a{color:white;text-decoration:none;}@media (max-width:1079px){padding:6px;font-size:14px;}"])),y=r.a.div.withConfig({displayName:"postLayout__TitleContainer",componentId:"sc-15sv84-5"})(["font-weight:600;font-size:32px;@media (max-width:1079px){font-size:18px;}"]),b=r.a.span.withConfig({displayName:"postLayout__SummaryContainer",componentId:"sc-15sv84-6"})(["font-size:12px;color:white;margin-right:10px;"]),w=r.a.span.withConfig({displayName:"postLayout__LittleContainer",componentId:"sc-15sv84-7"})(["font-size:14px;color:#bbbbbb;"]),v=r.a.div.withConfig({displayName:"postLayout__PostBanner",componentId:"sc-15sv84-8"})(["width:100%;height:300px;color:white;position:relative;overflow:hidden;"]),g=r.a.div.withConfig({displayName:"postLayout__BlackContainer",componentId:"sc-15sv84-9"})(["width:100%;height:100%;background-color:black;position:absolute;z-index:-1;opacity:0.5;"]),_=r.a.div.withConfig({displayName:"postLayout__BackgroundContainer",componentId:"sc-15sv84-10"})(["width:100%;height:100%;background-image:url('","');background-repeat:no-repeat;background-size:cover;background-position:center;animation-name:zoomin;animation-duration:5s;animation-fill-mode:both;z-index:-2;position:absolute;@-webkit-keyframes zoomin{from{transform:scale(1);}to{transform:scale(1.3);}}@keyframes zoomin{from{transform:scale(1);}to{transform:scale(1.3);}}"],(function(e){return e.src})),E=r.a.div.withConfig({displayName:"postLayout__Air",componentId:"sc-15sv84-11"})(["width:100%;height:100px;"]);function C(e){var t=e.data,n=(e.pageContext,t.markdownRemark),o=n.frontmatter,r=n.html,C=n.id,I=r.replace(/<[^>]*>?/gm,"").substr(0,150),S=o.tags.map((function(e){return i.a.createElement(h,{key:e},i.a.createElement(u.Link,{to:"/"+e.toLowerCase()},e))})),k={shortname:"justkode",config:{identifier:o.title,id:C}};return i.a.createElement(p,null,i.a.createElement(a.a,null),i.a.createElement(c.a,{title:o.title,description:I,img:o.img,keyword:o.keyword}),i.a.createElement(v,null,i.a.createElement(g,null),i.a.createElement(_,{src:o.img||"/banner.jpg"}),i.a.createElement(m,{style:{height:"100%"}},i.a.createElement(f,null,i.a.createElement("div",{style:{marginBottom:"8px"}},S),i.a.createElement(y,null,o.title),i.a.createElement(b,null,o.summary),i.a.createElement(w,null,i.a.createElement(l.g,null)," ",o.date)))),i.a.createElement(m,null,i.a.createElement("div",{className:"markdown-body",dangerouslySetInnerHTML:{__html:r}}),i.a.createElement(E,null),i.a.createElement("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML",async:!0}),i.a.createElement(d.DiscussionEmbed,k)),i.a.createElement(s.a,null))}var I="823389803"},UZsz:function(e,t,n){"use strict";n("/SS/"),n("hHhE"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var o,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n("q1tI"),a=(o=r)&&o.__esModule?o:{default:o},s=n("ZMnY");function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var l=(0,s.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1);t.CommentCount=function(e){function t(){return c(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,s.shallowComparison)(this.props,e)}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?l():(0,s.insertScript)("https://"+this.props.shortname+".disqus.com/count.js","dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,s.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return a.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}]),t}(a.default.Component)},ZMnY:function(e,t,n){"use strict";n("rE2o"),n("ioFf"),n("RW0V"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("T39b"),n("dZ+Y"),n("LK8F"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var o=window.document.createElement("script");return o.async=!0,o.src=e,o.id=t,n.appendChild(o),o},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var o=void 0;return function(){var i=this,r=arguments,a=function(){o=null,n||e.apply(i,r)},s=n&&!o;window.clearTimeout(o),o=setTimeout(a,t),s&&e.apply(i,r)}},t.isReactElement=a,t.shallowComparison=function(e,t){var n=new Set(Object.keys(e),Object.keys(t)),o=!0,i=!1,r=void 0;try{for(var s,c=n[Symbol.iterator]();!(o=(s=c.next()).done);o=!0){var u=s.value;if(e[u]!==t[u]&&!a(e[u]))return!0}}catch(l){i=!0,r=l}finally{try{!o&&c.return&&c.return()}finally{if(i)throw r}}return!1};var o,i=n("q1tI"),r=(o=i)&&o.__esModule?o:{default:o};function a(e){return!!r.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return r.default.isValidElement(e)}))}},xfY5:function(e,t,n){"use strict";var o=n("dyZX"),i=n("aagx"),r=n("LZWt"),a=n("Xbzi"),s=n("apmT"),c=n("eeVq"),u=n("kJMx").f,l=n("EemH").f,d=n("hswa").f,p=n("qncB").trim,m=o.Number,f=m,h=m.prototype,y="Number"==r(n("Kuth")(h)),b="trim"in String.prototype,w=function(e){var t=s(e,!1);if("string"==typeof t&&t.length>2){var n,o,i,r=(t=b?t.trim():p(t,3)).charCodeAt(0);if(43===r||45===r){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===r){switch(t.charCodeAt(1)){case 66:case 98:o=2,i=49;break;case 79:case 111:o=8,i=55;break;default:return+t}for(var a,c=t.slice(2),u=0,l=c.length;u<l;u++)if((a=c.charCodeAt(u))<48||a>i)return NaN;return parseInt(c,o)}}return+t};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof m&&(y?c((function(){h.valueOf.call(n)})):"Number"!=r(n))?a(new f(w(t)),n,m):w(t)};for(var v,g=n("nh4g")?u(f):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;g.length>_;_++)i(f,v=g[_])&&!i(m,v)&&d(m,v,l(f,v));m.prototype=h,h.constructor=m,n("KroJ")(o,"Number",m)}}}]);
//# sourceMappingURL=component---src-layouts-post-layout-tsx-e44e9d70d08bc1fefc48.js.map