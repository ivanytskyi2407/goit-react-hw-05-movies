"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[439],{439:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var r=t(885),c=t(635),a="HomeCard_card__QgiGn",i="HomeCard_card__link__FwBDv",o="HomeCard_card__img__7FbRG",s="HomeCard_card__information__bTQQ-",u="HomeCard_card__name__uHEmt",m=t(501),_=t(871),f=t(184);function l(n){var e=n.films,t=(0,_.TH)();return e.map((function(n){var e=n.id,r=n.title,c=n.poster_path;return(0,f.jsx)("li",{className:a,children:(0,f.jsxs)(m.rU,{to:"movies/".concat(e),state:{from:t},className:i,children:[(0,f.jsx)("img",{className:o,src:"https://image.tmdb.org/t/p/w300".concat(c),alt:r}),(0,f.jsx)("div",{className:s,children:(0,f.jsx)("h2",{className:u,children:r})})]})},e)}))}var d=t(791),h="PageHeading_title__1wPIF";function p(n){var e=n.text;return(0,f.jsx)("h1",{className:h,children:e})}var v="HomeList_filmList__mnqQJ";function x(n){var e=n.children;return(0,f.jsx)("ul",{className:v,children:e})}function k(){var n=(0,d.useState)(null),e=(0,r.Z)(n,2),t=e[0],a=e[1];return(0,d.useEffect)((function(){(0,c.Lo)().then((function(n){var e=n.results;a(e)}))}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(p,{text:"Trending today"}),t&&(0,f.jsx)(x,{children:(0,f.jsx)(l,{films:t})})]})}},635:function(n,e,t){t.d(e,{Gy:function(){return d},Lo:function(){return m},hh:function(){return l},iR:function(){return f},uN:function(){return _}});var r=t(861),c=t(757),a=t.n(c),i="https://api.themoviedb.org/3/",o="084ca305e7a4e4bb3dbbc7b67e975385";function s(){return u.apply(this,arguments)}function u(){return u=(0,r.Z)(a().mark((function n(){var e,t,r,c=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:"",t=c.length>1&&void 0!==c[1]?c[1]:{},n.next=4,fetch(e,t);case 4:if(!(r=n.sent).ok){n.next=11;break}return n.next=8,r.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Not found"));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),u.apply(this,arguments)}function m(){return s("".concat(i,"trending/movie/day?api_key=").concat(o))}function _(n){return s("".concat(i,"/movie/").concat(n,"?api_key=").concat(o))}function f(n){return s("".concat(i,"movie/").concat(n,"/credits?api_key=").concat(o))}function l(n){return s("".concat(i,"movie/").concat(n,"/reviews?api_key=").concat(o))}function d(n){return s("".concat(i,"search/movie?api_key=").concat(o,"&language=en-US&query=").concat(n))}}}]);
//# sourceMappingURL=439.c225f0c8.chunk.js.map