"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{713:function(n,t,e){e.d(t,{Bt:function(){return s},Tg:function(){return c},Y5:function(){return p},vw:function(){return o},y:function(){return u}});var a=e(44),r="https://api.themoviedb.org/3/movie/",i="861782ee1fc6aacf939bc06e51306075",c=function(n){return a.ZP.get("".concat("https://api.themoviedb.org/3/trending/movie/week","?api_key=").concat(i,"&language=en-US&page=").concat(n))},o=function(n,t){return a.ZP.get("".concat("https://api.themoviedb.org/3/search/movie","?api_key=").concat(i,"&language=en-US&query=").concat(n,"&page=").concat(t,"&include_adult=false"))},p=function(n){return a.ZP.get("".concat(r).concat(n,"?api_key=").concat(i,"&language=en-US"))},u=function(n){return a.ZP.get("".concat(r).concat(n,"/credits?api_key=").concat(i))},s=function(n){return a.ZP.get("".concat(r).concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"))}},634:function(n,t,e){e.d(t,{Dx:function(){return u},Sk:function(){return s},xu:function(){return p}});var a,r,i,c=e(168),o=e(444),p=o.ZP.div(a||(a=(0,c.Z)(["\n  padding: 0 10px;\n  margin: 10px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),u=o.ZP.h1(r||(r=(0,c.Z)(["\n  font-size: 30px;\n  display: flex;\n  text-transform: uppercase;\n  margin: 20px auto;\n  align-items: center;\n  justify-content: center;\n  :before {\n    content: '\u2606'' ';\n  }\n  :after {\n    content: '\u2606'' ';\n  }\n"],["\n  font-size: 30px;\n  display: flex;\n  text-transform: uppercase;\n  margin: 20px auto;\n  align-items: center;\n  justify-content: center;\n  :before {\n    content: '\\u2606'' ';\n  }\n  :after {\n    content: '\\u2606'' ';\n  }\n"]))),s=o.ZP.div(i||(i=(0,c.Z)(["\n  padding: 0 10px;\n  margin: 10px 0;\n"])))},387:function(n,t,e){e.r(t),e.d(t,{default:function(){return b}});var a,r,i,c,o=e(861),p=e(885),u=e(757),s=e.n(u),l=e(791),d=e(689),f=e(713),g=e(168),x=e(444),h=x.ZP.ul(a||(a=(0,g.Z)(["\n  list-style: none;\n  text-align: center;\n  display: grid;\n  max-width: calc(100vw - 20px);\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  grid-gap: 20px;\n  padding: 30px 20px;\n  margin: 0 auto;\n"]))),m=x.ZP.li(r||(r=(0,g.Z)(["\n  width: 200px;\n  height: auto;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  display: flex;\n  flex-direction: column;\n  border-radius: 5px;\n  display: inline-block;\n"]))),v=x.ZP.p(i||(i=(0,g.Z)(["\n  padding: 10px;\n  font-size: 15px;\n  margin: 0;\n  :first-child {\n    font-weight: 700;\n    padding-bottom: 0;\n  }\n"]))),y=x.ZP.p(c||(c=(0,g.Z)(["\n  margin: 0;\n  overflow-wrap: break-word;\n  line-height: 1.4;\n  \n  :first-child {\n    font-size: 20px;\n    font-weight: 700;\n    padding-bottom: 5px;\n}\n"]))),Z=e(634),w=e(184),b=function(){var n=(0,d.UO)().movieId,t=(0,l.useState)([]),e=(0,p.Z)(t,2),a=e[0],r=e[1];return(0,l.useEffect)((function(){function t(){return(t=(0,o.Z)(s().mark((function t(){var e,a;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,f.y)(n);case 3:e=t.sent,a=e.data,r(a.cast),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),t.t0("error");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}""!==n&&function(){t.apply(this,arguments)}()}),[n]),(0,w.jsx)(Z.xu,{children:(0,w.jsx)(h,{children:0===a.length?(0,w.jsx)(y,{children:"We don't have any Cast for this movie."}):a.map((function(n){var t=n.id,e=n.profile_path,a=n.name,r=n.character,i=n.original_title;return(0,w.jsxs)(m,{children:[(0,w.jsx)("img",{src:e?"https://image.tmdb.org/t/p/w200/".concat(e):"https://thesource.sa.ua.edu/wp-content/uploads/sites/57/2019/08/no-person-200x300.png",alt:i}),(0,w.jsxs)("div",{children:[(0,w.jsx)(v,{children:a}),(0,w.jsxs)(v,{children:["Character: ",(0,w.jsx)("span",{children:r})]})]})]},t)}))})})}}}]);
//# sourceMappingURL=387.e5a3d5d5.chunk.js.map