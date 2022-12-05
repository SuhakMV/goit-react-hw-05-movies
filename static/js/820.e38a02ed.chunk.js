"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[820],{713:function(n,e,t){t.d(e,{Bt:function(){return l},Tg:function(){return a},Y5:function(){return s},vw:function(){return c},y:function(){return d}});var i=t(44),r="https://api.themoviedb.org/3/movie/",o="861782ee1fc6aacf939bc06e51306075",a=function(){return i.ZP.get("".concat("https://api.themoviedb.org/3/trending/movie/week","?api_key=").concat(o,"&language=en-US&page=").concat("1"))},c=function(n){return i.ZP.get("".concat("https://api.themoviedb.org/3/search/movie","?api_key=").concat(o,"&language=en-US&query=").concat(n,"&page=").concat("1","&include_adult=false"))},s=function(n){return i.ZP.get("".concat(r).concat(n,"?api_key=").concat(o,"&language=en-US"))},d=function(n){return i.ZP.get("".concat(r).concat(n,"/credits?api_key=").concat(o))},l=function(n){return i.ZP.get("".concat(r).concat(n,"/reviews?api_key=").concat(o,"&language=en-US&page=").concat("1"))}},634:function(n,e,t){t.d(e,{D:function(){return s},x:function(){return c}});var i,r,o=t(168),a=t(444),c=a.ZP.div(i||(i=(0,o.Z)(["\n  padding: 0 10px;\n  margin: 10px 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),s=a.ZP.h1(r||(r=(0,o.Z)(["\n  display: flex;\n  text-transform: uppercase;\n  margin: 20px auto;\n  align-items: center;\n  justify-content: center;\n  :before {\n    content: '\u2606'\" \";\n  }\n  :after {\n    content: '\u2606'\" \";\n  }\n"],["\n  display: flex;\n  text-transform: uppercase;\n  margin: 20px auto;\n  align-items: center;\n  justify-content: center;\n  :before {\n    content: '\\u2606'\" \";\n  }\n  :after {\n    content: '\\u2606'\" \";\n  }\n"])))},820:function(n,e,t){t.r(e),t.d(e,{default:function(){return D}});var i,r,o,a,c,s,d,l,p,u=t(861),f=t(885),x=t(757),h=t.n(x),g=t(791),m=t(689),v=t(168),j=t(444),Z=t(731),b=(0,j.ZP)(Z.OL)(i||(i=(0,v.Z)(["\n  display: inline-flex;\n  font-size: 15px;\n  line-height: 1.3;\n  font-weight: 500;\n  text-decoration: none;\n\n  border: 1px solid;\n  border-radius: 5px;\n  padding: 0 10px;\n  gap: 4px;\n  \n  color: black;\n  \n  \n\n  :hover {\n    color: hotpink;\n  }\n\n  :before {\n    content: '\u2190';\n  }\n"],["\n  display: inline-flex;\n  font-size: 15px;\n  line-height: 1.3;\n  font-weight: 500;\n  text-decoration: none;\n\n  border: 1px solid;\n  border-radius: 5px;\n  padding: 0 10px;\n  gap: 4px;\n  \n  color: black;\n  \n  \n\n  :hover {\n    color: hotpink;\n  }\n\n  :before {\n    content: '\\u2190';\n  }\n"]))),w=t(184),k=function(n){var e=n.to,t=n.children;return(0,w.jsx)(b,{to:e,children:t})},y=j.ZP.div(r||(r=(0,v.Z)(["\n  border-top: 1px solid;\n  border-bottom: 1px solid;\n"]))),P=j.ZP.ul(o||(o=(0,v.Z)(["\n  padding: 0 0 0 50px;\n  list-style-type: disc;\n  font-size: 15px;\n  font-weight: 600;\n"]))),_=j.ZP.li(a||(a=(0,v.Z)(["\n  padding: 0;\n  :first-child {\n    margin-bottom: 5px;\n  }\n"]))),z=j.ZP.h2(c||(c=(0,v.Z)(["\n  font-size: 20px;\n  font-weight: 700;\n"]))),S=function(){var n,e,t=null!==(n=null===(e=(0,m.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,w.jsxs)(y,{children:[(0,w.jsx)(z,{children:"Aditchional information"}),(0,w.jsxs)(P,{children:[(0,w.jsx)(_,{children:(0,w.jsx)(Z.OL,{to:"cast",state:{from:t},children:"Cast"})}),(0,w.jsx)(_,{children:(0,w.jsx)(Z.OL,{to:"reviews",state:{from:t},children:"Reviews"})})]})]})},U=t(713),O=j.ZP.div(s||(s=(0,v.Z)(["\ndisplay: flex;\npadding: 10px 0;\n}\n"]))),L=j.ZP.div(d||(d=(0,v.Z)(["\n  padding: 15px;\n  font-size: 15px;\n  margin: 0;\n"]))),C=j.ZP.h2(l||(l=(0,v.Z)(["\n  font-size: 25px;\n  font-weight: 700;\n  margin 0;\n  margin-bottom: 10px;\n"]))),F=j.ZP.p(p||(p=(0,v.Z)(["\n  padding 0;\n  margin 0;\n  :nth-child(even) {\n    margin-bottom: 20px;\n  }\n  :nth-child(odd) {\n    font-size: 20px;\n    font-weight: 700;\n    margin-bottom: 5px;\n  }\n"]))),T=function(n){var e=n.movie,t=e.poster_path,i=e.original_title,r=e.release_date,o=e.vote_average,a=e.overview,c=e.genres,s="https://image.tmdb.org/t/p/w500".concat(t);return(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)(O,{children:[(0,w.jsx)("img",{src:t&&s,alt:i,width:"300"}),(0,w.jsxs)(L,{children:[(0,w.jsxs)(C,{children:[i," (",new Date("".concat(r)).getFullYear(),")"]}),(0,w.jsxs)(F,{children:["User Score: ",Math.round(10*o),"%"]}),(0,w.jsx)(F,{children:"Overview"}),(0,w.jsx)(F,{children:a}),(0,w.jsx)(F,{children:"Genres"}),(0,w.jsx)(F,{children:null===c||void 0===c?void 0:c.map((function(n){return n.name})).join(", ")})]})]})})},Y=t(634),D=function(){var n,e,t=(0,m.UO)().movieId,i=(0,g.useState)({}),r=(0,f.Z)(i,2),o=r[0],a=r[1],c=null!==(n=null===(e=(0,m.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,g.useEffect)((function(){function n(){return(n=(0,u.Z)(h().mark((function n(){var e,i;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,U.Y5)(t);case 3:e=n.sent,i=e.data,a(i),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),n.t0("error");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}""!==t&&function(){n.apply(this,arguments)}()}),[t]),(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)(Y.x,{children:[(0,w.jsx)(k,{to:c,children:"Go back"}),(0,w.jsx)(T,{movie:o}),(0,w.jsx)(S,{}),(0,w.jsx)(g.Suspense,{fallback:(0,w.jsx)("div",{children:"Loading..."}),children:(0,w.jsx)(m.j3,{})})]})})}}}]);
//# sourceMappingURL=820.e38a02ed.chunk.js.map