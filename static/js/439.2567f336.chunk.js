"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[439],{439:function(n,e,t){t.r(e),t.d(e,{default:function(){return g}});var r=t(885),c=t(635),a="HomeCard_card__QgiGn",o="HomeCard_card__link__FwBDv",i="HomeCard_card__img__7FbRG",s="HomeCard_card__information__bTQQ-",u="HomeCard_card__name__uHEmt",l=t(501),m=t(871),_=t(184);function d(n){var e=n.films,t=(0,m.TH)();return console.log(t),e.map((function(n){var e=n.id,r=n.title,c=n.poster_path;return(0,_.jsx)("li",{className:a,children:(0,_.jsxs)(l.rU,{to:"movies/".concat(e),state:t,className:o,children:[(0,_.jsx)("img",{className:i,src:"https://image.tmdb.org/t/p/w300".concat(c),alt:r}),(0,_.jsx)("div",{className:s,children:(0,_.jsx)("h2",{className:u,children:r})})]})},e)}))}var f=t(791),h="PageHeading_title__1wPIF";function p(n){var e=n.text;return(0,_.jsx)("h1",{className:h,children:e})}var v="HomeList_filmList__mnqQJ";function x(n){var e=n.children;return(0,_.jsx)("ul",{className:v,children:e})}function g(){var n=(0,f.useState)(null),e=(0,r.Z)(n,2),t=e[0],a=e[1];return(0,f.useEffect)((function(){(0,c.Lo)().then((function(n){var e=n.results;a(e)}))}),[]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(p,{text:"Trending today"}),t&&(0,_.jsx)(x,{children:(0,_.jsx)(d,{films:t})})]})}},635:function(n,e,t){t.d(e,{Gy:function(){return f},Lo:function(){return l},hh:function(){return d},iR:function(){return _},uN:function(){return m}});var r=t(861),c=t(757),a=t.n(c),o="https://api.themoviedb.org/3/",i="084ca305e7a4e4bb3dbbc7b67e975385";function s(){return u.apply(this,arguments)}function u(){return u=(0,r.Z)(a().mark((function n(){var e,t,r,c=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:"",t=c.length>1&&void 0!==c[1]?c[1]:{},n.next=4,fetch(e,t);case 4:if(!(r=n.sent).ok){n.next=11;break}return n.next=8,r.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Not found"));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),u.apply(this,arguments)}function l(){return s("".concat(o,"trending/movie/day?api_key=").concat(i))}function m(n){return s("".concat(o,"/movie/").concat(n,"?api_key=").concat(i))}function _(n){return s("".concat(o,"movie/").concat(n,"/credits?api_key=").concat(i))}function d(n){return s("".concat(o,"movie/").concat(n,"/reviews?api_key=").concat(i))}function f(n){return s("".concat(o,"search/movie?api_key=").concat(i,"&language=en-US&query=").concat(n))}}}]);
//# sourceMappingURL=439.2567f336.chunk.js.map