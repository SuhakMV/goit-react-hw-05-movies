"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[820],{713:function(n,e,t){t.d(e,{Bt:function(){return l},Tg:function(){return c},Y5:function(){return d},vw:function(){return a},y:function(){return s}});var i=t(44),r="https://api.themoviedb.org/3/movie/",o="861782ee1fc6aacf939bc06e51306075",c=function(){return i.ZP.get("".concat("https://api.themoviedb.org/3/trending/movie/week","?api_key=").concat(o,"&language=en-US&page=").concat("1"))},a=function(n){return i.ZP.get("".concat("https://api.themoviedb.org/3/search/movie","?api_key=").concat(o,"&language=en-US&query=").concat(n,"&page=").concat("1","&include_adult=false"))},d=function(n){return i.ZP.get("".concat(r).concat(n,"?api_key=").concat(o,"&language=en-US"))},s=function(n){return i.ZP.get("".concat(r).concat(n,"/credits?api_key=").concat(o))},l=function(n){return i.ZP.get("".concat(r).concat(n,"/reviews?api_key=").concat(o,"&language=en-US&page=").concat("1"))}},634:function(n,e,t){t.d(e,{x:function(){return o}});var i,r=t(168),o=t(444).ZP.div(i||(i=(0,r.Z)(["\n  padding: 0 32px;\n"])))},820:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});var i,r,o,c,a,d,s,l,p,u=t(861),h=t(885),x=t(757),f=t.n(x),g=t(791),v=t(689),m=t(168),j=t(444),Z=t(731),b=(0,j.ZP)(Z.OL)(i||(i=(0,m.Z)(["\n  display: inline-flex;\n  font-size: 15px;\n  line-height: 1.3;\n  font-weight: 500;\n  text-decoration: none;\n\n  border: 1px solid;\n  border-radius: 5px;\n  padding: 0 10px;\n  gap: 4px;\n  \n  color: black;\n  \n  \n\n  :hover {\n    color: hotpink;\n  }\n\n  :before {\n    content: '\u2190';\n  }\n"],["\n  display: inline-flex;\n  font-size: 15px;\n  line-height: 1.3;\n  font-weight: 500;\n  text-decoration: none;\n\n  border: 1px solid;\n  border-radius: 5px;\n  padding: 0 10px;\n  gap: 4px;\n  \n  color: black;\n  \n  \n\n  :hover {\n    color: hotpink;\n  }\n\n  :before {\n    content: '\\u2190';\n  }\n"]))),w=t(184),k=function(n){var e=n.to,t=n.children;return(0,w.jsx)(b,{to:e,children:t})},P=j.ZP.div(r||(r=(0,m.Z)(["\n  border-top: 1px solid;\n  border-bottom: 1px solid;\n"]))),y=j.ZP.ul(o||(o=(0,m.Z)(["\n  padding: 0 0 0 50px;\n  list-style-type: disc;\n  font-size: 15px;\n  font-weight: 600;\n"]))),_=j.ZP.li(c||(c=(0,m.Z)(["\n  padding: 0;\n  :first-child {\n    margin-bottom: 5px;\n  }\n"]))),z=j.ZP.h2(a||(a=(0,m.Z)(["\n  font-size: 20px;\n  font-weight: 700;\n"]))),S=function(){var n,e,t=null!==(n=null===(e=(0,v.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,w.jsxs)(P,{children:[(0,w.jsx)(z,{children:"Aditchional information"}),(0,w.jsxs)(y,{children:[(0,w.jsx)(_,{children:(0,w.jsx)(Z.OL,{to:"cast",state:{from:t},children:"Cast"})}),(0,w.jsx)(_,{children:(0,w.jsx)(Z.OL,{to:"reviews",state:{from:t},children:"Reviews"})})]})]})},U=t(713),O=j.ZP.div(d||(d=(0,m.Z)(["\ndisplay: flex;\npadding: 10px 0;\n}\n"]))),L=j.ZP.div(s||(s=(0,m.Z)(["\n  padding: 15px;\n  font-size: 15px;\n  margin: 0;\n"]))),C=j.ZP.h2(l||(l=(0,m.Z)(["\n  font-size: 25px;\n  font-weight: 700;\n  margin 0;\n  margin-bottom: 10px;\n"]))),F=j.ZP.p(p||(p=(0,m.Z)(["\n  padding 0;\n  margin 0;\n  :nth-child(even) {\n    margin-bottom: 20px;\n  }\n  :nth-child(odd) {\n    font-size: 20px;\n    font-weight: 700;\n    margin-bottom: 5px;\n  }\n"]))),T=function(n){var e=n.movie,t=e.poster_path,i=e.original_title,r=e.release_date,o=e.vote_average,c=e.overview,a=e.genres,d="https://image.tmdb.org/t/p/w500".concat(t);return(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)(O,{children:[(0,w.jsx)("img",{src:d,alt:i,width:"300"}),(0,w.jsxs)(L,{children:[(0,w.jsxs)(C,{children:[i," (",new Date("".concat(r)).getFullYear(),")"]}),(0,w.jsxs)(F,{children:["User Score: ",Math.round(10*o),"%"]}),(0,w.jsx)(F,{children:"Overview"}),(0,w.jsx)(F,{children:c}),(0,w.jsx)(F,{children:"Genres"}),(0,w.jsx)(F,{children:null===a||void 0===a?void 0:a.map((function(n){return n.name})).join(", ")})]})]})})},Y=t(634),G=function(){var n,e,t=(0,v.UO)().movieId,i=(0,g.useState)({}),r=(0,h.Z)(i,2),o=r[0],c=r[1],a=null!==(n=null===(e=(0,v.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,g.useEffect)((function(){function n(){return(n=(0,u.Z)(f().mark((function n(){var e,i;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,U.Y5)(t);case 3:e=n.sent,i=e.data,c(i),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),n.t0("error");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}""!==t&&function(){n.apply(this,arguments)}()}),[t]),(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)(Y.x,{children:[(0,w.jsx)(k,{to:a,children:"Go back"}),(0,w.jsx)(T,{movie:o}),(0,w.jsx)(S,{}),(0,w.jsx)(g.Suspense,{fallback:(0,w.jsx)("div",{children:"Loading..."}),children:(0,w.jsx)(v.j3,{})})]})})}}}]);
//# sourceMappingURL=820.ad5bd238.chunk.js.map