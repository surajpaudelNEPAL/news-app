(this["webpackJsonpnews-app"]=this["webpackJsonpnews-app"]||[]).push([[0],{20:function(e,t,n){},41:function(e,t,n){},60:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(0),a=n(30),i=n.n(a),r=(n(41),n(10)),o=n(11),l=n.n(o),j=n(14),b=n(12),u=(n(20),n(15)),d=n.n(u),O=n.p+"static/media/noimgfound.416160b0.jpg",p=function(e){var t=e.endpoint,n=Object(s.useState)([]),a=Object(b.a)(n,2),i=a[0],r=a[1],o=Object(s.useState)(!0),u=Object(b.a)(o,2),p=u[0],h=u[1];return Object(s.useEffect)((function(){function e(){return(e=Object(j.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://api.nytimes.com/svc/topstories/v2".concat(t));case 2:n=e.sent,console.log(n),r(n.data.results),h(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),console.log(i),Object(c.jsx)("div",{className:"headline-container",children:p?"Loading...":i.slice(0,6).map((function(e){return Object(c.jsxs)("div",{className:"headline-items",children:[Object(c.jsx)("img",{src:(null===e||void 0===e?void 0:e.multimedia[0].url)||O,alt:"randompic",className:"images"}),Object(c.jsxs)("div",{className:"item-text",children:[Object(c.jsx)("p",{children:e.title}),Object(c.jsx)("br",{}),Object(c.jsx)("a",{rel:"noopener noreferrer",href:e.url,className:"item-link",onClick:function(){window.location.assign(e.url)},children:"read full story "})]})]},e.url)}))})},h=(n(60),n(31)),m=n(32),x=n(35),f=n(34),v=n.p+"static/media/news_logo.47d9b383.png",g=n(8),y=function(e){Object(x.a)(n,e);var t=Object(f.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("header",{className:"header",children:[Object(c.jsx)("img",{src:v,alt:"logo",className:"logoimg"}),Object(c.jsx)("nav",{className:"navbar",children:Object(c.jsxs)("ul",{className:"navlist",children:[Object(c.jsx)("li",{children:Object(c.jsx)(g.b,{to:"/",children:"Home"})}),Object(c.jsx)("li",{children:Object(c.jsx)(g.b,{to:"topheadline",children:"Top-Headlines"})}),Object(c.jsx)("li",{children:Object(c.jsx)(g.b,{to:"technology",children:"technology"})}),Object(c.jsx)("li",{children:Object(c.jsx)(g.b,{to:"business",children:"business"})}),Object(c.jsxs)("li",{children:[Object(c.jsx)(g.b,{to:"business",children:"more"})," "]})]})}),Object(c.jsx)("button",{children:"login"})]})}}]),n}(s.Component),w="7cXTYDLIrpGraVSqlJa5BnXzl891EFJG",N={topHeadlines:"/world.json?api-key=".concat(w),technology:"/technology.json?api-key=".concat(w),business:"/business.json?api-key=".concat(w)},k=n(2),J=(n(66),function(){var e=Object(s.useState)([]),t=Object(b.a)(e,2),n=t[0],a=t[1],i=Object(s.useState)(!1),r=Object(b.a)(i,2),o=r[0],u=r[1];return Object(s.useEffect)((function(){function e(){return(e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://api.nytimes.com/svc/topstories/v2/world.json?api-key=7cXTYDLIrpGraVSqlJa5BnXzl891EFJG");case 2:t=e.sent,u(!1),a(t.data.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.table(n),Object(c.jsxs)("div",{className:"title",children:[Object(c.jsx)("h2",{style:{color:"white",marginLeft:"1rem"},children:"Treanding Now"}),Object(c.jsx)("div",{className:"main",children:o?"loading...":n.slice(0,3).map((function(e,t){return t++,Object(c.jsxs)("div",{className:"item-".concat(t),children:[Object(c.jsx)("img",{src:(null===e||void 0===e?void 0:e.multimedia[0].url)||O,alt:"randompic"}),Object(c.jsxs)("div",{className:"news-text",children:[Object(c.jsx)("p",{children:e.title}),Object(c.jsx)("a",{href:e.url,className:"item-link",children:"read full story "})]})]},e.url)}))})]})});var S=function(){return Object(c.jsx)(g.a,{children:Object(c.jsxs)("div",{className:"app",children:[Object(c.jsx)(y,{}),Object(c.jsxs)(k.c,{children:[Object(c.jsx)(k.a,{path:"/",exact:!0,render:function(){return Object(c.jsx)(J,{})}}),Object(c.jsx)(k.a,{path:"/topheadline",render:function(e){return Object(c.jsx)(p,Object(r.a)(Object(r.a)({},e),{},{endpoint:N.topHeadlines}))}}),Object(c.jsx)(k.a,{path:"/technology",render:function(e){return Object(c.jsx)(p,Object(r.a)(Object(r.a)({},e),{},{endpoint:N.technology}))}}),Object(c.jsx)(k.a,{path:"/business",render:function(e){return Object(c.jsx)(p,Object(r.a)(Object(r.a)({},e),{},{endpoint:N.business}))}})]})]})})};i.a.render(Object(c.jsx)(S,{}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.4785db03.chunk.js.map