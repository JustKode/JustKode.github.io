(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{ZtrA:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return k})),a.d(e,"pageQuery",(function(){return C}));var n=a("q1tI"),o=a.n(n),i=a("vOnD"),r=a("BNza"),s=a("6Uz4"),l=a("H8eV"),c=a("eG48"),d=a("Wbzz"),m=a("ma3e"),p=i.a.div.withConfig({displayName:"postListLayout__MainContainer",componentId:"sc-1sw37ww-0"})([""]),u=i.a.div.withConfig({displayName:"postListLayout__SubContainer",componentId:"sc-1sw37ww-1"})(["width:100%;max-width:1080px;margin:auto;padding:20px;box-sizing:border-box;position:relative;"]),w=i.a.div.withConfig({displayName:"postListLayout__BottomContainer",componentId:"sc-1sw37ww-2"})(["position:absolute;bottom:0%;padding-bottom:12px;width:calc(100% - 40px);"]),g=(i.a.div.withConfig({displayName:"postListLayout__HeadContainer",componentId:"sc-1sw37ww-3"})(["width:100%;border-bottom:1px solid #bbbbbb;"]),i.a.span.withConfig({displayName:"postListLayout__CategoryContainer",componentId:"sc-1sw37ww-4"})(["padding:8px;background-color:black;"]),i.a.div.withConfig({displayName:"postListLayout__TitleContainer",componentId:"sc-1sw37ww-5"})(["font-weight:600;font-size:32px;@media (max-width:1079px){font-size:24px;}"])),b=i.a.div.withConfig({displayName:"postListLayout__LittleContainer",componentId:"sc-1sw37ww-6"})(["font-size:14px;color:#bbbbbb;"]),f=i.a.div.withConfig({displayName:"postListLayout__PostBanner",componentId:"sc-1sw37ww-7"})(["width:100%;height:300px;color:white;position:relative;overflow:hidden;"]),h=i.a.div.withConfig({displayName:"postListLayout__BackgroundContainer",componentId:"sc-1sw37ww-8"})(["width:100%;height:100%;background-image:url('/post_background.jpg');background-repeat:no-repeat;background-size:cover;background-position:center bottom;animation-name:zoomin;animation-duration:5s;animation-fill-mode:both;z-index:-1;position:absolute;@-webkit-keyframes zoomin{from{transform:scale(1);}to{transform:scale(1.3);}}@keyframes zoomin{from{transform:scale(1);}to{transform:scale(1.3);}}"]),y=i.a.div.withConfig({displayName:"postListLayout__NavContainer",componentId:"sc-1sw37ww-9"})(["padding:8px;text-align:center;font-size:24px;font-weight:bold;svg{margin-bottom:-4px;margin-left:4px;maring-right:4px;color:black;}"]),x=i.a.div.withConfig({displayName:"postListLayout__BlackContainer",componentId:"sc-1sw37ww-10"})(["width:100%;height:100%;position:absolute;background-color:black;pointer-events:none;z-index:0;opacity:0.5;"]),L=i.a.div.withConfig({displayName:"postListLayout__CircleWrapper",componentId:"sc-1sw37ww-11"})(["display:inline-block;box-sizing:border-box;width:40px;height:40px;padding-top:4px;border-radius:50%;background-color:black;color:white;text-align:center;font-family:Montserrat,Noto Sans KR,Helvetica,Arial,sans-serif;font-weight:100;"]);function k(t){var e=t.data.allMarkdownRemark.edges,a=t.pageContext;console.log(a.currentPage,a.numPages);var n=e.filter((function(t){return!!t.node.frontmatter.date})).map((function(t){return o.a.createElement(c.a,{key:t.node.id,title:t.node.frontmatter.title,date:t.node.frontmatter.date,tags:t.node.frontmatter.tags,img:t.node.frontmatter.img,summary:t.node.frontmatter.summary,path:t.node.frontmatter.path})}));return o.a.createElement(p,null,o.a.createElement(r.a,null),o.a.createElement(l.a,{title:"Recent Posts - Page "+a.currentPage,description:"전체 게시글 목록입니다."}),o.a.createElement(f,null,o.a.createElement(x,null),o.a.createElement(h,null),o.a.createElement(u,{style:{height:"100%"}},o.a.createElement(w,null,o.a.createElement(g,null,"Posts - Page ",a.currentPage),o.a.createElement(b,null,"전체 게시글 목록입니다.")))),o.a.createElement(u,{style:{padding:"20px 15px"}},n),o.a.createElement(y,null,a.currentPage>2&&o.a.createElement(d.Link,{to:"/post/"+(a.currentPage-1)},o.a.createElement(m.b,null)),2==a.currentPage&&o.a.createElement(d.Link,{to:"/post"},o.a.createElement(m.b,null)),o.a.createElement(L,null,a.currentPage),a.currentPage<a.numPages&&o.a.createElement(d.Link,{to:"/post/"+(a.currentPage+1)},o.a.createElement(m.c,null))),o.a.createElement(s.a,null))}var C="2450666190"}}]);
//# sourceMappingURL=component---src-layouts-post-list-layout-tsx-4a83ed5999370d918563.js.map