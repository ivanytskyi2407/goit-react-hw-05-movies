"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[675],{635:function(e,n,t){t.d(n,{Gy:function(){return p},Lo:function(){return u},hh:function(){return m},iR:function(){return d},uN:function(){return h}});var c=t(861),a=t(757),r=t.n(a),i="https://api.themoviedb.org/3/",s="084ca305e7a4e4bb3dbbc7b67e975385";function o(){return l.apply(this,arguments)}function l(){return l=(0,c.Z)(r().mark((function e(){var n,t,c,a=arguments;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:"",t=a.length>1&&void 0!==a[1]?a[1]:{},e.next=4,fetch(n,t);case 4:if(!(c=e.sent).ok){e.next=11;break}return e.next=8,c.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function u(){return o("".concat(i,"trending/movie/day?api_key=").concat(s))}function h(e){return o("".concat(i,"/movie/").concat(e,"?api_key=").concat(s))}function d(e){return o("".concat(i,"movie/").concat(e,"/credits?api_key=").concat(s))}function m(e){return o("".concat(i,"movie/").concat(e,"/reviews?api_key=").concat(s))}function p(e){return o("".concat(i,"search/movie?api_key=").concat(s,"&language=en-US&query=").concat(e))}},675:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var c=t(885),a="MovieDetails_wrapper__d551-",r="MovieDetails_picture__0S5xc",i="MovieDetails_title__enS9x",s="MovieDetails_list__K70eK",o="MovieDetails_item__iG+sD",l="MovieDetails_link__P7Cgn",u="MovieDetails_btn__5BiLF",h=t(791),d=t(635),m=t(501),p=t(871),_=t(184);function f(){var e=(0,p.UO)().movieId,n=(0,h.useState)(null),t=(0,c.Z)(n,2),f=t[0],x=t[1],v=(0,p.s0)(),j=(0,p.TH)().state;return(0,h.useEffect)((function(){(0,d.uN)(e).then((function(e){x(e)}))}),[e]),(0,_.jsxs)(_.Fragment,{children:[f&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("button",{onClick:function(){if(j){var e=j.pathname,n=j.search;v("".concat(e).concat(n))}},className:u,children:"Go Back"}),(0,_.jsxs)("div",{className:a,children:[(0,_.jsx)("img",{className:r,src:"https://image.tmdb.org/t/p/original".concat(f.poster_path),alt:""}),(0,_.jsxs)("ul",{children:[(0,_.jsx)("h2",{className:i,children:"".concat(f.title)}),(0,_.jsxs)("li",{className:o,children:[(0,_.jsx)("h3",{children:"Vote / Votes"}),(0,_.jsx)("p",{children:f.vote_average})]}),(0,_.jsxs)("li",{className:o,children:[(0,_.jsx)("h3",{children:"Release date"}),(0,_.jsx)("p",{children:f.release_date})]}),(0,_.jsxs)("li",{className:o,children:[(0,_.jsx)("h3",{children:"Genre"}),(0,_.jsx)("p",{children:f.genres.map((function(e){return e.name})).join(", ")})]}),(0,_.jsxs)("li",{className:o,children:[(0,_.jsx)("h3",{children:"About"}),(0,_.jsx)("p",{children:f.overview})]})]})]})]}),(0,_.jsxs)("ul",{className:s,children:[(0,_.jsx)("li",{className:o,children:(0,_.jsx)(m.rU,{className:l,to:"cast",children:"Cast"})}),(0,_.jsx)("li",{className:o,children:(0,_.jsx)(m.rU,{className:l,to:"reviews",children:"Reviews"})})]}),(0,_.jsx)(p.j3,{})]})}}}]);
//# sourceMappingURL=675.8da8e969.chunk.js.map