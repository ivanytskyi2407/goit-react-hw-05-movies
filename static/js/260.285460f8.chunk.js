"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[260],{635:function(e,n,t){t.d(n,{Gy:function(){return f},Lo:function(){return u},hh:function(){return m},iR:function(){return d},uN:function(){return h}});var c=t(861),r=t(757),a=t.n(r),s="https://api.themoviedb.org/3/",i="084ca305e7a4e4bb3dbbc7b67e975385";function o(){return l.apply(this,arguments)}function l(){return l=(0,c.Z)(a().mark((function e(){var n,t,c,r=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>0&&void 0!==r[0]?r[0]:"",t=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,fetch(n,t);case 4:if(!(c=e.sent).ok){e.next=11;break}return e.next=8,c.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function u(){return o("".concat(s,"trending/movie/day?api_key=").concat(i))}function h(e){return o("".concat(s,"/movie/").concat(e,"?api_key=").concat(i))}function d(e){return o("".concat(s,"movie/").concat(e,"/credits?api_key=").concat(i))}function m(e){return o("".concat(s,"movie/").concat(e,"/reviews?api_key=").concat(i))}function f(e){return o("".concat(s,"search/movie?api_key=").concat(i,"&language=en-US&query=").concat(e))}},260:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var c=t(885),r="MovieDetails_wrapper__5AnKJ",a="MovieDetails_picture__-s1vA",s="MovieDetails_title__Dftm4",i="MovieDetails_list__N-4No",o="MovieDetails_item__ddctr",l="MovieDetails_link__-Bf+A",u=t(791),h=t(635),d=t(501),m=t(871),f=t(184);function p(){var e=(0,m.UO)().movieId,n=(0,u.useState)(null),t=(0,c.Z)(n,2),p=t[0],x=t[1],_=(0,m.s0)(),j=(0,m.TH)().state,v=j.pathname,k=j.search;return(0,u.useEffect)((function(){(0,h.uN)(e).then((function(e){x(e)}))}),[e]),(0,f.jsxs)(f.Fragment,{children:[p&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("button",{onClick:function(){_("".concat(v).concat(k))},children:"GoBack"}),(0,f.jsxs)("div",{className:r,children:[(0,f.jsx)("img",{className:a,src:"https://image.tmdb.org/t/p/original".concat(p.poster_path),alt:""}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("h2",{className:s,children:"".concat(p.title)}),(0,f.jsxs)("li",{className:o,children:[(0,f.jsx)("h3",{children:"Vote / Votes"}),(0,f.jsx)("p",{children:p.vote_average})]}),(0,f.jsxs)("li",{className:o,children:[(0,f.jsx)("h3",{children:"Release date"}),(0,f.jsx)("p",{children:p.release_date})]}),(0,f.jsxs)("li",{className:o,children:[(0,f.jsx)("h3",{children:"Genre"}),(0,f.jsx)("p",{children:p.genres.map((function(e){return e.name})).join(", ")})]}),(0,f.jsxs)("li",{className:o,children:[(0,f.jsx)("h3",{children:"About"}),(0,f.jsx)("p",{children:p.overview})]})]})]})]}),(0,f.jsxs)("ul",{className:i,children:[(0,f.jsx)("li",{className:o,children:(0,f.jsx)(d.rU,{className:l,to:"cast",children:"Cast"})}),(0,f.jsx)("li",{className:o,children:(0,f.jsx)(d.rU,{className:l,to:"reviews",children:"Reviews"})})]}),(0,f.jsx)(m.j3,{})]})}}}]);
//# sourceMappingURL=260.285460f8.chunk.js.map