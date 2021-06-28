(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{58:function(e){e.exports=JSON.parse('{"title":"Movies","navBar":{"dashboard":"Dashboard","movies":"Movies","randomMovie":"Random movie"},"dashboard":{"nowPlaying":"Now playing","upcoming":"Upcoming","popular":"Popular"}}')},59:function(e){e.exports=JSON.parse('{"title":"\u0424\u0438\u043b\u044c\u043c\u044b","navBar":{"dashboard":"\u0421\u043f\u0438\u0441\u043a\u0438","movies":"\u0424\u0438\u043b\u044c\u043c\u044b","randomMovie":"\u0421\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0439 \u0444\u0438\u043b\u044c\u043c"},"dashboard":{"nowPlaying":"\u0412 \u043f\u0440\u043e\u043a\u0430\u0442\u0435","upcoming":"\u041e\u0436\u0438\u0434\u0430\u0435\u043c\u044b\u0435","popular":"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435"}}')},84:function(e,t,n){"use strict";n.r(t);var a,r,c=n(24),o=n.n(c),i=n(0),s=n(113),u=n(114),b=n(106),l=n(107),p=n(85),d=Object(s.a)(u.a)({width:"80%",margin:"auto",background:"rgb(45, 140, 181)"}),j=Object(s.a)(b.a)({fontSize:"20px",fontWeight:"bold",color:"black"}),O=Object(s.a)(p.a)({width:"40px",fontSize:"16px",fontWeight:"bold",color:"black",background:"rgb(45, 140, 181)"}),m=Object(s.a)(l.a)({display:"flex",justifyContent:"space-between"}),h=n(108),f=n(111),g=n(44),v=n(115),x=n(15),y=n(58),w=n(59),k=n(38);!function(e){e.En="en",e.Ru="ru"}(r||(r={}));var S=(a={},Object(x.a)(a,r.En,{translation:y}),Object(x.a)(a,r.Ru,{translation:w}),a);g.a.use(k.e).init({lng:r.En,resources:S});var E,_=n(12),M=n(7),D=["navBar.dashboard","navBar.movies","navBar.randomMovie"],W=function(){var e=Object(v.a)().t,t=Object(_.f)();return Object(M.jsxs)(m,{children:[Object(M.jsx)(d,{position:"static",children:Object(M.jsx)(f.a,{"aria-label":"simple tabs example",centered:!0,variant:"fullWidth",children:D.map((function(n){return Object(M.jsx)(j,{label:e(n),onClick:function(){return t.push("/".concat(e(n,{lng:"en"}),"/"))}},String(Math.random()))}))})}),Object(M.jsx)(h.a,{variant:"contained","aria-label":"contained primary button group",children:Object.values(r).map((function(e){return Object(M.jsx)(O,{onClick:function(){return g.a.changeLanguage(e)},children:e},String(Math.random()))}))})]})},R=Object(s.a)(p.a)({width:"140px",fontSize:"14px",color:"black",background:"rgb(45, 140, 181)",margin:"8px","&:hover":{background:"white"}}),P=Object(s.a)(l.a)({width:"40%"}),B="now_playing",C="upcoming",q="popular",I=[{name:"dashboard.nowPlaying",requestWord:B},{name:"dashboard.upcoming",requestWord:C},{name:"dashboard.popular",requestWord:q}],N=function(){var e=Object(_.f)(),t=Object(v.a)().t;return Object(M.jsx)(M.Fragment,{children:Object(M.jsx)(P,{children:I.map((function(n){var a=n.name,r=n.requestWord;return Object(M.jsx)(R,{onClick:function(){return e.push(r)},children:t(a)},String(Math.random()))}))})})},A=n(37),J="ADD_MOVIES_SUCCESS",U="ADD_MOVIES_ERROR",V="ADD_MOVIES_REQUESTED",z="nowPlaying",L="upcoming",T="popular",F=n(29),X={movies:[],status:null,error:null},Q={nowPlaying:X,upcoming:X,popular:X},G=n(28),H=n.n(G),K=n(34),Y=H.a.mark(ee),Z=H.a.mark(te),$=(E={},Object(x.a)(E,z,{success:function(e){return{type:J,name:z,payload:e}},error:function(e){return{type:U,name:z,payload:e}}}),Object(x.a)(E,T,{success:function(e){return{type:J,name:T,payload:e}},error:function(e){return{type:U,name:T,payload:e}}}),Object(x.a)(E,L,{success:function(e){return{type:J,name:L,payload:e}},error:function(e){return{type:U,name:L,payload:e}}}),E);function ee(e){var t,n,a,r;return H.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,n=e.name,c.prev=1,c.next=4,fetch(t);case 4:return a=c.sent,c.next=7,a.json();case 7:return r=c.sent,c.next=10,Object(K.b)($[n].success(r.results.slice(0,5)));case 10:c.next=15;break;case 12:c.prev=12,c.t0=c.catch(1),Object(K.b)($[n].error(c.t0));case 15:case"end":return c.stop()}}),Y,null,[[1,12]])}function te(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(K.c)(V,ee);case 2:case"end":return e.stop()}}),Z)}var ne,ae=n(109),re=n(112),ce=(ne={},Object(x.a)(ne,B,{selector:function(e){return e.lists.nowPlaying.movies},action:function(e){return{type:V,name:z,payload:e}}}),Object(x.a)(ne,C,{selector:function(e){return e.lists.upcoming.movies},action:function(e){return{type:V,name:L,payload:e}}}),Object(x.a)(ne,q,{selector:function(e){return e.lists.popular.movies},action:function(e){return{type:V,name:T,payload:e}}}),ne),oe=function(){var e=Object(A.b)(),t=Object(_.g)().list,n=Object(A.c)(ce[t].selector);return Object(i.useEffect)((function(){var n=function(e,t){return"https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat("bb2b538ec7dc87a9a9ecaa9065c3baff","&language=").concat(e,"page=1")}("en",t);e(ce[t].action(n))}),[t]),Object(M.jsx)(ae.a,{children:n.map((function(e){var t=e.original_title;return Object(M.jsx)(re.a,{children:t},String(Math.random()))}))})},ie=Object(s.a)(l.a)({background:"rgba(56, 50, 50, 0.6)",color:"black",fontWeight:"bold",textAlign:"center",width:"90%",height:"800px",fontFamily:"sans-serif"}),se=n(40),ue=function(){var e=Object(v.a)().t;return Object(M.jsx)(se.a,{children:Object(M.jsxs)(ie,{maxWidth:!1,children:[Object(M.jsx)("h1",{children:e("title")}),Object(M.jsx)(W,{}),Object(M.jsx)(_.c,{children:Object(M.jsx)(_.a,{path:"/dashboard",component:N})}),Object(M.jsx)(_.c,{children:Object(M.jsx)(_.a,{path:"/dashboard/:list",exact:!0,component:oe})})]})})},be=n(27),le=n(63),pe={initialListsState:Q},de=Object(be.b)({lists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return Object(F.a)(Object(F.a)({},e),{},Object(x.a)({},t.name,{movies:[],status:"requested",error:null}));case J:return Object(F.a)(Object(F.a)({},e),{},Object(x.a)({},t.name,{movies:t.payload,status:"success",error:null}));case U:return Object(F.a)(Object(F.a)({},e),{},Object(x.a)({},t.name,{movies:[],status:"error",error:t.payload}));default:return Object(F.a)({},e)}}}),je=H.a.mark(Oe);function Oe(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(K.a)([te()]);case 2:case"end":return e.stop()}}),je)}var me=Object(le.a)(),he=Object(be.c)(Object(be.a)(me),window.__REDUX_DEVTOOLS_EXTENSION__()),fe=Object(be.d)(de,pe,he);me.run(Oe),o.a.render(Object(M.jsx)(A.a,{store:fe,children:Object(M.jsx)(ue,{})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.45b7f6dd.chunk.js.map