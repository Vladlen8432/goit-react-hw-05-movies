"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[767],{368:function(n,t,e){var r=e(689),a=e(87),u=e(184);t.Z=function(n){var t=n.movies,e=(0,r.TH)();return(0,u.jsx)("ul",{children:(0,u.jsx)("li",{children:t.map((function(n){var t=n.id,r=n.title,i=n.name,c=n.original_title,s=n.poster_path;return(0,u.jsxs)(a.rU,{state:{from:e},to:"/movies/".concat(t),children:[(0,u.jsx)("img",{src:s?"https://image.tmdb.org/t/p/w300/".concat(s):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=500x250",alt:r||i||c}),(0,u.jsx)("h2",{children:r||i||c})]},t)}))})})}},978:function(n,t,e){e.d(t,{u:function(){return p},Q:function(){return o}});var r=e(861),a=e(439),u=e(757),i=e.n(u),c=e(791),s=e(933),o=function(){var n=(0,c.useState)([]),t=(0,a.Z)(n,2),e=t[0],u=t[1],o=(0,c.useState)(!1),f=(0,a.Z)(o,2),p=f[0],l=f[1],v=(0,c.useState)(null),d=(0,a.Z)(v,2),h=d[0],m=d[1];return(0,c.useEffect)((function(){l(!0);var n=function(){var n=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.rj)();case 3:t=n.sent,u(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),m(n.t0);case 10:return n.prev=10,l(!1),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[0,7,10,13]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),{movies:e,isLoading:p,error:h}},f=e(87),p=function(){var n=(0,c.useState)([]),t=(0,a.Z)(n,2),e=t[0],u=t[1],o=(0,c.useState)(!1),p=(0,a.Z)(o,2),l=p[0],v=p[1],d=(0,c.useState)(null),h=(0,a.Z)(d,2),m=h[0],g=h[1],x=(0,f.lr)(),b=(0,a.Z)(x,2),Z=b[0],w=b[1],S=Z.get("q");(0,c.useEffect)((function(){if(S){v(!0);var n=function(){var n=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.Wf)(S);case 3:t=n.sent,u(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),g(n.t0);case 10:return n.prev=10,v(!1),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[0,7,10,13]])})));return function(){return n.apply(this,arguments)}}();n()}}),[S]);return{movies:e,isLoading:l,error:m,onHandleSubmit:function(n){w({q:n})}}}},767:function(n,t,e){e.r(t),e.d(t,{default:function(){return o}});var r=e(368),a=e(439),u=e(791),i=e(184),c=function(n){var t=n.onHandleSubmit,e=(0,u.useState)(""),r=(0,a.Z)(e,2),c=r[0],s=r[1];return(0,i.jsxs)("form",{onSubmit:function(n){if(n.preventDefault(),!c.trim())return alert("Cannot be empty");t(c)},action:"",children:[(0,i.jsx)("input",{type:"text",value:c,name:"query",onChange:function(n){s(n.target.value)}}),(0,i.jsx)("button",{type:"submit",children:"Search"})]})},s=e(978),o=function(){var n=(0,s.u)(),t=n.movies,e=n.isLoading,a=n.error,u=n.onHandleSubmit;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c,{onHandleSubmit:u}),e&&(0,i.jsx)("p",{children:"Loading..."}),a&&(0,i.jsx)("p",{children:"Something went wrong"}),t.length>0&&(0,i.jsx)(r.Z,{movies:t})]})}},933:function(n,t,e){e.d(t,{TP:function(){return f},Wf:function(){return o},rj:function(){return s}});var r=e(861),a=e(757),u=e.n(a),i=e(340);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="af62c948c73d11660c8d6ea2e76a9d91",s=function(){var n=(0,r.Z)(u().mark((function n(){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/trending/movie/day?api_key=".concat(c,"&language=en-US"));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/search/movie?api_key=".concat(c,"&query=").concat(t,"&include_adult=false&language=en-US&page=1"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"?api_key=").concat(c,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=767.8bd74104.chunk.js.map