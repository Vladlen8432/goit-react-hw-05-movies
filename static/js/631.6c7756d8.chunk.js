"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[631],{631:function(t,e,n){n.r(e);var r=n(683),a=n(861),s=n(439),i=n(757),c=n.n(i),u=n(791),o=n(933),l=n(689),f=n(971),_=n(184);e.default=function(){var t=(0,l.UO)().movieId,e=(0,u.useState)([]),n=(0,s.Z)(e,2),i=n[0],p=n[1];(0,u.useEffect)((function(){var e=function(){var e=(0,a.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.IQ)(t);case 3:n=e.sent,p(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching cast data:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]);return(0,_.jsxs)("div",{className:f.Z.containerCast,children:[(0,_.jsx)("h2",{className:f.Z.castTitle,children:"Cast"}),(0,_.jsx)("ul",{className:f.Z.castList,children:i.map((function(t){return(0,_.jsxs)("li",{className:f.Z.castListItem,children:[(0,_.jsx)("img",{className:f.Z.castImg,src:"https://image.tmdb.org/t/p/w200".concat(t.profile_path),alt:t.name,onError:function(){return e=t.id,void p((function(t){return t.map((function(t){return t.id===e?(0,r.Z)((0,r.Z)({},t),{},{imageFailed:!0}):t})).sort((function(t,e){return t.imageFailed?1:-1}))}));var e}}),t.name]},t.id)}))})]})}},933:function(t,e,n){n.d(e,{IQ:function(){return f},Jh:function(){return _},TP:function(){return l},Wf:function(){return o},rj:function(){return u}});var r=n(861),a=n(757),s=n.n(a),i=n(294);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="af62c948c73d11660c8d6ea2e76a9d91",u=function(){var t=(0,r.Z)(s().mark((function t(){var e,n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("/trending/movie/day?api_key=".concat(c,"&language=en-US"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(s().mark((function t(e){var n,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("/search/movie?api_key=".concat(c,"&query=").concat(e,"&include_adult=false&language=en-US&page=1"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(s().mark((function t(e){var n,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("/movie/".concat(e,"?api_key=").concat(c,"&language=en-US"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(s().mark((function t(e){var n,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("/movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r.cast);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),_=function(){var t=(0,r.Z)(s().mark((function t(e){var n,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},971:function(t,e){e.Z={movieDetailsStyle:"styles_movieDetailsStyle__mYu7y",containerMoviesDetails:"styles_containerMoviesDetails__nRDdW",containerContent:"styles_containerContent__BE7pb",movieDetailsTitle:"styles_movieDetailsTitle__lAq5g",movieDetailsImg:"styles_movieDetailsImg__NpjLu",castReviewsList:"styles_castReviewsList__EUhsR",castLink:"styles_castLink__MVXqb",castTitle:"styles_castTitle__6CSdl",castList:"styles_castList__QBa5v",castListItem:"styles_castListItem__nvnyn",castImg:"styles_castImg__52BF+",reviewsTitle:"styles_reviewsTitle__ngsfc",reviewsList:"styles_reviewsList__LHsG9",reviewsListItem:"styles_reviewsListItem__bes5Y"}}}]);
//# sourceMappingURL=631.6c7756d8.chunk.js.map