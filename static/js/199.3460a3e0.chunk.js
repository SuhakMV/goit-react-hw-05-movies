(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[199],{713:function(n,t,e){"use strict";e.d(t,{Bt:function(){return p},Tg:function(){return a},Y5:function(){return u},vw:function(){return c},y:function(){return s}});var r=e(44),o="https://api.themoviedb.org/3/movie/",i="861782ee1fc6aacf939bc06e51306075",a=function(n){return r.ZP.get("".concat("https://api.themoviedb.org/3/trending/movie/week","?api_key=").concat(i,"&language=en-US&page=").concat(n))},c=function(n,t){return r.ZP.get("".concat("https://api.themoviedb.org/3/search/movie","?api_key=").concat(i,"&language=en-US&query=").concat(n,"&page=").concat(t,"&include_adult=false"))},u=function(n){return r.ZP.get("".concat(o).concat(n,"?api_key=").concat(i,"&language=en-US"))},s=function(n){return r.ZP.get("".concat(o).concat(n,"/credits?api_key=").concat(i))},p=function(n){return r.ZP.get("".concat(o).concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"))}},634:function(n,t,e){"use strict";e.d(t,{Dx:function(){return s},Sk:function(){return p},xu:function(){return u}});var r,o,i,a=e(168),c=e(444),u=c.ZP.div(r||(r=(0,a.Z)(["\n  padding: 0 10px;\n  margin: 10px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),s=c.ZP.h1(o||(o=(0,a.Z)(["\n  font-size: 30px;\n  display: flex;\n  text-transform: uppercase;\n  margin: 20px auto;\n  align-items: center;\n  justify-content: center;\n  :before {\n    content: '\u2606'' ';\n  }\n  :after {\n    content: '\u2606'' ';\n  }\n"],["\n  font-size: 30px;\n  display: flex;\n  text-transform: uppercase;\n  margin: 20px auto;\n  align-items: center;\n  justify-content: center;\n  :before {\n    content: '\\u2606'' ';\n  }\n  :after {\n    content: '\\u2606'' ';\n  }\n"]))),p=c.ZP.div(i||(i=(0,a.Z)(["\n  padding: 0 10px;\n  margin: 10px 0;\n"])))},481:function(n,t,e){"use strict";e.d(t,{Z:function(){return Z}});var r,o,i,a,c=e(634),u=e(731),s=e(689),p=e(168),f=e(444),l=f.ZP.ul(r||(r=(0,p.Z)(["\n  list-style: none;\n  display: grid;\n  max-width: calc(100vw - 20px);\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  grid-gap: 20px;\n  font-size: 15px;\n  font-weight: 600;\n  padding: 0;\n"]))),d=f.ZP.li(o||(o=(0,p.Z)(["\n  position: relative;\n  padding-bottom: 57px;\n  width: 300px;\n  height: auto;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  display: flex;\n  flex-direction: column;\n  border-radius: 5px;\n"]))),x=f.ZP.div(i||(i=(0,p.Z)(["\n  position: absolute;\n  bottom: 0;\n"]))),m=f.ZP.p(a||(a=(0,p.Z)(["\n  padding: 20px 15px;\n  font-size: 15px;\n  margin: 0;\n"]))),h=e(7),g=e.n(h),v=e(184);function y(n){return(0,v.jsx)("button",{className:"Button",type:"button",onClick:n.onClick,children:"Load more"})}y.protoType={onClick:g().func};var b=e(446),Z=function(n){var t=n.movies,e=n.onLoadMore,r=(0,s.TH)();return(0,v.jsxs)(c.xu,{children:[(0,v.jsx)(l,{children:t.map((function(n){var t=n.id,e=n.title,o=n.poster_path,i=n.release_date;return(0,v.jsx)(d,{children:(0,v.jsxs)(u.OL,{to:"/movies/".concat(t),state:{from:r},style:{height:"100%"},children:[(0,v.jsx)("img",{src:o?"https://image.tmdb.org/t/p/w300/".concat(o):"".concat(b),alt:e,"object-fit":"cover"}),(0,v.jsx)(x,{children:(0,v.jsxs)(m,{children:[e," (",i.substr(0,4),")"]})})]})},t)}))}),(0,v.jsx)(y,{onClick:e})]})}},199:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return S}});var r,o,i,a=e(982),c=e(861),u=e(885),s=e(757),p=e.n(s),f=e(791),l=e(731),d=e(481),x=e(7),m=e.n(x),h=e(596),g=e(168),v=e(444),y=v.ZP.input(r||(r=(0,g.Z)(["\n  width: 100%;\n  font-size: 15px;\n  padding: 5px;\n  border-radius: 5px;\n"]))),b=v.ZP.button(o||(o=(0,g.Z)(["\n  font-size: 15px;\n  padding: 5px 15px 5px 15px;\n  border-radius: 5px;\n"]))),Z=v.ZP.form(i||(i=(0,g.Z)(["\n  display: flex;\n  width: 100%;\n  max-width: 500px;\n"]))),j=e(634),k=e(184),w=function(n){var t=(0,f.useState)(""),e=(0,u.Z)(t,2),r=e[0],o=e[1];return(0,k.jsx)(j.xu,{children:(0,k.jsxs)(Z,{onSubmit:function(t){t.preventDefault(),""!==r.trim()?(n.onSubmit(r),o("")):h.Am.error("Please enter text in the search bar!")},children:[(0,k.jsx)(y,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",value:r,onChange:function(n){o(n.currentTarget.value.toLowerCase())}}),(0,k.jsx)(b,{type:"submit",children:(0,k.jsx)("span",{children:"Search"})})]})})};w.protoType={onSubmit:m().func};var P=w,_=e(713),S=function(){var n=(0,f.useState)([]),t=(0,u.Z)(n,2),e=t[0],r=t[1],o=(0,f.useState)(1),i=(0,u.Z)(o,2),s=i[0],x=i[1],m=(0,l.lr)(),g=(0,u.Z)(m,2),v=g[0],y=g[1];(0,f.useEffect)((function(){var n,t=null!==(n=v.get("query"))&&void 0!==n?n:"";function e(){return(e=(0,c.Z)(p().mark((function n(){var e,o;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,_.vw)(t,s);case 3:e=n.sent,(o=e.data).total_results||h.Am.error("Nothing found!"),r(1===s?o.results:function(n){return[].concat((0,a.Z)(n),(0,a.Z)(o.results))}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),n.t0("error");case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}""!==t&&function(){e.apply(this,arguments)}()}),[v,s]);return(0,k.jsxs)("div",{children:[(0,k.jsx)(P,{onSubmit:function(n){y(""!==n?{query:n}:{})}}),e.length>0&&(0,k.jsx)(d.Z,{movies:e,onLoadMore:function(){x((function(n){return n+1}))}})]})}},888:function(n,t,e){"use strict";var r=e(47);function o(){}function i(){}i.resetWarningCache=o,n.exports=function(){function n(n,t,e,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return n}n.isRequired=n;var e={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:t,element:n,elementType:n,instanceOf:t,node:n,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return e.PropTypes=e,e}},7:function(n,t,e){n.exports=e(888)()},47:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},446:function(n,t,e){"use strict";n.exports=e.p+"static/media/index-main.38898851e4f07929c860.jpg"}}]);
//# sourceMappingURL=199.3460a3e0.chunk.js.map