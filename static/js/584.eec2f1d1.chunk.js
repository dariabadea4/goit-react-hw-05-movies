"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[584],{454:function(n,e,t){t.d(e,{Z:function(){return r}});t(791);var A=t(184),r=function(n){var e=n.data,t=n.ItemComponent,r=n.className;return(0,A.jsx)("ul",{className:r,children:e.map((function(n){return(0,A.jsx)(t,{element:n},n.id)}))})}},836:function(n,e,t){t.d(e,{Z:function(){return w}});var A,r,o,i,c=t(689),a=t(87),s=t(211),u=t(168),l=t(867),f=l.ZP.li(A||(A=(0,u.Z)(["\n  width: 200px;\n  overflow: hidden;\n"]))),p=l.ZP.img(r||(r=(0,u.Z)(["\n  height: 300px;\n  object-fit: cover;\n  object-position: center;\n  margin-bottom: 15px;\n"]))),h=l.ZP.p(o||(o=(0,u.Z)(["\n  width: 200px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-bottom: 10px;\n"]))),d=l.ZP.div(i||(i=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 5px;\n"]))),Z=t(804),m=t(184),w=function(n){var e=n.element,t=(0,c.TH)(),A=e.poster_path?"https://image.tmdb.org/t/p/w342".concat(e.poster_path):s;return(0,m.jsx)(f,{children:(0,m.jsxs)(a.rU,{to:"/movies/".concat(e.id),state:{from:t},children:[(0,m.jsx)(p,{src:A,alt:"Poster for ".concat(e.title)}),(0,m.jsx)(h,{children:e.title}),(0,m.jsxs)(d,{children:[(0,m.jsx)(Z.kum,{}),(0,m.jsx)("p",{children:e.vote_average.toFixed(1)})]})]})})}},584:function(n,e,t){t.r(e),t.d(e,{default:function(){return E}});var A,r,o,i,c=t(861),a=t(439),s=t(687),u=t.n(s),l=t(836),f=t(454),p=t(791),h=t(87),d=t(390),Z=t(168),m=t(867),w=m.ZP.form(A||(A=(0,Z.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 30px;\n"]))),S=m.ZP.input(r||(r=(0,Z.Z)(["\n  width: 400px;\n  display: inline-block;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  &::placeholder {\n    font: inherit;\n    font-size: 16px;\n  }\n"]))),g=m.ZP.button(o||(o=(0,Z.Z)(["\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  border: 0;\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-color: #6d90a8;\n  /* opacity: 0.6; */\n  /* transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1); */\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    background-color: #d4e0e9;\n  }\n"]))),U=m.ZP.span(i||(i=(0,Z.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),j=t(804),R=t(184),F=function(n){var e=n.onSetSearch,t=(0,h.lr)(),A=(0,a.Z)(t,1)[0].get("query"),r=(0,p.useState)(null),o=(0,a.Z)(r,2),i=o[0],c=o[1];(0,p.useEffect)((function(){c(A)}),[A]);return(0,R.jsxs)(w,{onSubmit:function(n){if(n.preventDefault(),""===n.currentTarget.elements.movie.value.toLowerCase().trim())return alert("Please enter a search query");i&&e({query:i})},children:[(0,R.jsx)(S,{name:"movie",type:"text",value:i||"",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",onChange:function(n){var e=n.currentTarget.value;c(""!==e?e:null)}}),(0,R.jsxs)(g,{children:[(0,R.jsx)(j.dVI,{}),(0,R.jsx)(U,{children:"Search"})]})]})},E=function(){var n=(0,p.useState)([]),e=(0,a.Z)(n,2),t=e[0],A=e[1],r=(0,p.useState)(""),o=(0,a.Z)(r,2),i=o[0],s=o[1],Z=(0,p.useState)(!1),m=(0,a.Z)(Z,2),w=m[0],S=m[1],g=(0,h.lr)(),U=(0,a.Z)(g,2),j=U[0],E=U[1],v=j.get("query");return(0,p.useEffect)((function(){if(v){i&&s(!1),S(!0);var n=function(){var n=(0,c.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,d.on)(v);case 3:if(0!==(e=n.sent).length){n.next=8;break}throw new Error("There are no movies for the request of '".concat(v,"'"));case 8:A(e);case 9:n.next=15;break;case 11:n.prev=11,n.t0=n.catch(0),s(n.t0.message),console.log(n.t0);case 15:return n.prev=15,S(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[0,11,15,18]])})));return function(){return n.apply(this,arguments)}}();n()}else A([])}),[i,v]),(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(F,{onSetSearch:E}),w?(0,R.jsx)("p",{children:"loading..."}):i?(0,R.jsx)("p",{children:i}):(0,R.jsx)(f.Z,{data:t,ItemComponent:l.Z,className:"movie-list"})]})}},390:function(n,e,t){t.d(e,{Bt:function(){return p},jC:function(){return l},on:function(){return u},wr:function(){return s},y:function(){return f}});var A=t(861),r=t(687),o=t.n(r),i=(new AbortController).signal,c="https://api.themoviedb.org/3",a="api_key=d3d5044f23d7b8347f525b76e517e169",s=function(){var n=(0,A.Z)(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(c,"/trending/movie/day?language=en-US&").concat(a),{signal:i}).then((function(n){return n.json()})).then((function(n){return n.results}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,A.Z)(o().mark((function n(e){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(c,"/search/movie?query=").concat(e,"&").concat(a),{signal:i}).then((function(n){return n.json()})).then((function(n){return n.results}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,A.Z)(o().mark((function n(e){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(c,"/movie/").concat(e,"?language=en-US&").concat(a),{signal:i}).then((function(n){return n.json()})).then((function(n){return n}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,A.Z)(o().mark((function n(e){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(c,"/movie/").concat(e,"/credits?language=en-US&").concat(a),{signal:i}).then((function(n){return n.json()})).then((function(n){return n.cast}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,A.Z)(o().mark((function n(e){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(c,"/movie/").concat(e,"/reviews?language=en-US&").concat(a),{signal:i}).then((function(n){return n.json()})).then((function(n){return n.results}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},211:function(n){n.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=584.eec2f1d1.chunk.js.map