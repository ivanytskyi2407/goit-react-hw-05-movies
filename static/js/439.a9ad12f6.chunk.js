"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[439],{439:function(n,e,t){t.r(e),t.d(e,{default:function(){return x}});var r=t(885),c=t(635),a="HomeCard_card__QgiGn",i="HomeCard_card__link__FwBDv",o="HomeCard_card__img__7FbRG",u="HomeCard_card__information__bTQQ-",s="HomeCard_card__name__uHEmt",m=t(501),_=t(184);function l(n){return n.films.map((function(n){var e=n.id,t=n.title,r=n.poster_path;return(0,_.jsx)("li",{className:a,children:(0,_.jsxs)(m.rU,{to:"movies/".concat(e),className:i,children:[(0,_.jsx)("img",{className:o,src:"https://image.tmdb.org/t/p/w300".concat(r),alt:t}),(0,_.jsx)("div",{className:u,children:(0,_.jsx)("h2",{className:s,children:t})})]})},e)}))}var d=t(791),f="PageHeading_title__1wPIF";function h(n){var e=n.text;return(0,_.jsx)("h1",{className:f,children:e})}var p="HomeList_filmList__mnqQJ";function v(n){var e=n.children;return(0,_.jsx)("ul",{className:p,children:e})}function x(){var n=(0,d.useState)(null),e=(0,r.Z)(n,2),t=e[0],a=e[1];return(0,d.useEffect)((function(){(0,c.Lo)().then((function(n){var e=n.results;a(e)}))}),[]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(h,{text:"Trending today"}),t&&(0,_.jsx)(v,{children:(0,_.jsx)(l,{films:t})})]})}},635:function(n,e,t){t.d(e,{Gy:function(){return f},Lo:function(){return m},hh:function(){return d},iR:function(){return l},uN:function(){return _}});var r=t(861),c=t(757),a=t.n(c),i="https://api.themoviedb.org/3/",o="084ca305e7a4e4bb3dbbc7b67e975385";function u(){return s.apply(this,arguments)}function s(){return s=(0,r.Z)(a().mark((function n(){var e,t,r,c=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:"",t=c.length>1&&void 0!==c[1]?c[1]:{},n.next=4,fetch(e,t);case 4:if(!(r=n.sent).ok){n.next=11;break}return n.next=8,r.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Not found"));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),s.apply(this,arguments)}function m(){return u("".concat(i,"trending/movie/day?api_key=").concat(o))}function _(n){return u("".concat(i,"/movie/").concat(n,"?api_key=").concat(o))}function l(n){return u("".concat(i,"movie/").concat(n,"/credits?api_key=").concat(o))}function d(n){return u("".concat(i,"movie/").concat(n,"/reviews?api_key=").concat(o))}function f(n){return u("".concat(i,"search/movie?api_key=").concat(o,"&language=en-US&query=").concat(n))}}}]);
//# sourceMappingURL=439.a9ad12f6.chunk.js.map