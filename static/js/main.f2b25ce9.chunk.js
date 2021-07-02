(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{111:function(e,t,a){"use strict";a.r(t);var n,r,c=a(14),o=a.n(c),s=a(0),i=a(168),u=a(148),l=a(150),b=a(151),p=a(112),j=Object(i.a)(u.a)({width:"80%",margin:"auto",background:"rgb(45, 140, 181)"}),d=Object(i.a)(l.a)({fontSize:"20px",fontWeight:"bold",color:"black"}),O=Object(i.a)(p.a)({width:"40px",fontSize:"16px",fontWeight:"bold",color:"black",background:"rgb(45, 140, 181)"}),f=Object(i.a)(b.a)({display:"flex",justifyContent:"space-between"}),h=a(152),g=a(163),v=a(33),m=a(166),x=a(23),E=a(80),y=a(81),_=a(59);!function(e){e.En="en",e.Ru="ru"}(r||(r={}));var S=(n={},Object(x.a)(n,r.En,{translation:E}),Object(x.a)(n,r.Ru,{translation:y}),n);v.a.use(_.e).init({lng:r.En,resources:S});var w,T=a(17),R=a(5),P=["navBar.dashboard","navBar.movies","navBar.randomMovie"],k=function(){var e=Object(m.a)().t,t=Object(T.f)();return Object(R.jsxs)(f,{children:[Object(R.jsx)(j,{position:"static",children:Object(R.jsx)(g.a,{"aria-label":"simple tabs example",centered:!0,variant:"fullWidth",children:P.map((function(a){return Object(R.jsx)(d,{label:e(a),onClick:function(){return t.push("/".concat(e(a,{lng:"en"}),"/"))}},String(Math.random()))}))})}),Object(R.jsx)(h.a,{variant:"contained","aria-label":"contained primary button group",children:Object.values(r).map((function(e){return Object(R.jsx)(O,{onClick:function(){return v.a.changeLanguage(e)},children:e},String(Math.random()))}))})]})},M=a(153),A=Object(i.a)(p.a)({width:"140px",fontSize:"14px",color:"black",background:"rgb(45, 140, 181)",margin:"8px","&:hover":{background:"white"}}),I=Object(i.a)(b.a)({width:"40%",display:"flex",flexWrap:"nowrap"}),C=Object(i.a)(M.a)({display:"flex",flexDirection:"row",justifyContent:"space-around",flexWrap:"wrap",alignItems:"center"}),G="https://api.themoviedb.org/3/";!function(e){e.NOW_PLAYING_REQUEST_PATH="now_playing",e.UPCOMING_REQUEST_PATH="upcoming",e.POPULAR_REQUEST_PATH="popular"}(w||(w={}));var U,D=function(e,t,a,n,r){return"".concat(G,"discover/movie?api_key=").concat("bb2b538ec7dc87a9a9ecaa9065c3baff","&language=").concat(e,"&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=").concat(t,"&primary_release_date.gte=").concat(a,"&primary_release_date.lte=").concat(n,"&page=").concat(r,"&with_watch_monetization_types=flatrate")},L=[{name:"dashboard.nowPlaying",redirectPath:w.NOW_PLAYING_REQUEST_PATH},{name:"dashboard.upcoming",redirectPath:w.UPCOMING_REQUEST_PATH},{name:"dashboard.popular",redirectPath:w.POPULAR_REQUEST_PATH}],N=function(){var e=Object(T.f)(),t=Object(m.a)().t;return Object(R.jsx)(R.Fragment,{children:Object(R.jsx)(I,{children:L.map((function(a){var n=a.name,r=a.redirectPath;return Object(R.jsx)(A,{onClick:function(){return e.push(r)},children:t(n)},n)}))})})},Q=a(21),W="GET_MOVIES_SUCCESS",V="GET_MOVIES_ERROR",q="GET_MOVIES_REQUESTED",H="SET_INITIAL_MOVIES_STATE",z="nowPlaying",B="upcoming",F="popular",J=a(11),Y={movies:[],status:null,error:null},X={nowPlaying:Y,upcoming:Y,popular:Y};!function(e){e.Requested="requested",e.Success="success",e.Error="error"}(U||(U={}));var K,Z=a(18),$=a.n(Z),ee=a(20),te=$.a.mark(re),ae=$.a.mark(ce),ne=(K={},Object(x.a)(K,z,{success:function(e){return{type:W,name:z,payload:e}},error:function(e){return{type:V,name:z,payload:e}}}),Object(x.a)(K,F,{success:function(e){return{type:W,name:F,payload:e}},error:function(e){return{type:V,name:F,payload:e}}}),Object(x.a)(K,B,{success:function(e){return{type:W,name:B,payload:e}},error:function(e){return{type:V,name:B,payload:e}}}),K);function re(e){var t,a,n,r;return $.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,a=e.name,c.prev=1,c.next=4,fetch(t);case 4:return n=c.sent,c.next=7,n.json();case 7:return r=c.sent,c.next=10,Object(ee.b)(ne[a].success(r.results.slice(0,5)));case 10:c.next=15;break;case 12:c.prev=12,c.t0=c.catch(1),Object(ee.b)(ne[a].error(c.t0));case 15:case"end":return c.stop()}}),te,null,[[1,12]])}function ce(){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.c)(q,re);case 2:case"end":return e.stop()}}),ae)}var oe,se,ie=a(155),ue=a(156),le=a(157),be=a(154),pe=Object(i.a)(be.a)({width:"200px",maxHeight:"380px",margin:" 20px 40px","& :hover":{backgroundColor:"grey",color:"white"},"& img":{height:"300px"}}),je=function(e){var t=e.title,a=e.id,n=e.poster_path,r="https://image.tmdb.org/t/p/w500/".concat(n),c=Object(T.f)();return Object(R.jsx)(pe,{onClick:function(){return c.push("/movie-details/".concat(a))},children:Object(R.jsxs)(ie.a,{children:[Object(R.jsx)(ue.a,{component:"img",alt:"Poster",image:r}),Object(R.jsx)(le.a,{children:Object(R.jsx)("h4",{children:t})})]})})},de=(oe={},Object(x.a)(oe,w.NOW_PLAYING_REQUEST_PATH,{selector:function(e){return e.lists.nowPlaying.movies},action:function(e){return{type:q,name:z,payload:e}}}),Object(x.a)(oe,w.UPCOMING_REQUEST_PATH,{selector:function(e){return e.lists.upcoming.movies},action:function(e){return{type:q,name:B,payload:e}}}),Object(x.a)(oe,w.POPULAR_REQUEST_PATH,{selector:function(e){return e.lists.popular.movies},action:function(e){return{type:q,name:F,payload:e}}}),oe),Oe=function(){var e=Object(Q.b)(),t=Object(T.g)().list,a=Object(Q.c)(de[t].selector),n=v.a.language,r=function(e,t){return"".concat(G,"movie/").concat(t,"?api_key=").concat("bb2b538ec7dc87a9a9ecaa9065c3baff","&language=").concat(e,"&page=1")}(n,t);return Object(s.useEffect)((function(){0===a.length&&e(de[t].action(r))}),[t,e,a.length,r]),Object(s.useEffect)((function(){e({type:H})}),[n,e]),Object(R.jsx)(C,{children:a.map((function(e){var t=e.title,a=e.id,n=e.poster_path;return Object(R.jsx)(je,{title:t,id:a,poster_path:n},a)}))})},fe=a(29),he=a(160),ge=a(170),ve=a(165),me=a(169),xe=a(162),Ee=Object(i.a)(xe.a)({width:"140px",fontSize:"14px",color:"black",margin:"8px"}),ye=Object(i.a)(b.a)({width:"75%",display:"flex",justifyContent:"space-around",marginTop:"8px"}),_e="GET_GENRES_SUCCESS",Se="GET_GENRES_ERROR",we="GET_GENRES_REQUESTED",Te="GET_FILTERED_MOVIES_SUCCESS",Re="GET_FILTERED_MOVIES_ERROR",Pe="GET_FILTERED_MOVIES_REQUESTED",ke="GET_TOTAL_PAGES",Me=function(e){return{type:_e,payload:e}},Ae={genres:{genresList:[],status:null,error:null},filteredMovies:{movies:[],status:null,error:null,totalPages:0},totalPages:0};!function(e){e.Requested="requested",e.Success="success",e.Error="error"}(se||(se={}));var Ie=$.a.mark(De),Ce=$.a.mark(Le),Ge=$.a.mark(Ne),Ue=$.a.mark(Qe);function De(e){var t,a,n;return $.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.prev=1,r.next=4,fetch(t);case 4:return a=r.sent,r.next=7,a.json();case 7:return n=r.sent,r.next=10,Object(ee.b)(Me(n.genres));case 10:r.next=15;break;case 12:r.prev=12,r.t0=r.catch(1),Object(ee.b)((c=r.t0,{type:Se,payload:c}));case 15:case"end":return r.stop()}var c}),Ie,null,[[1,12]])}function Le(){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.c)(we,De);case 2:case"end":return e.stop()}}),Ce)}function Ne(e){var t,a,n;return $.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.prev=1,r.next=4,fetch(t);case 4:return a=r.sent,r.next=7,a.json();case 7:return n=r.sent,r.next=10,Object(ee.b)((s=n.results,{type:Te,payload:s}));case 10:return r.next=12,Object(ee.b)((o=n.total_pages,{type:ke,payload:o}));case 12:r.next=17;break;case 14:r.prev=14,r.t0=r.catch(1),Object(ee.b)((c=r.t0,{type:Re,payload:c}));case 17:case"end":return r.stop()}var c,o,s}),Ge,null,[[1,14]])}function Qe(){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.c)(Pe,Ne);case 2:case"end":return e.stop()}}),Ue)}var We,Ve=function(e){return e.movies.genres.genresList},qe=function(e){return e.movies.filteredMovies.movies},He=function(e){return e.movies.totalPages},ze=function(e){var t=e.onAplied,a=function(e){return"".concat(G,"genre/movie/list?api_key=").concat("bb2b538ec7dc87a9a9ecaa9065c3baff","&language=").concat(e)}(v.a.language),n=Object(Q.b)(),r=Object(m.a)().t,c=Object(Q.c)(Ve),o=Object(s.useState)(""),i=Object(fe.a)(o,2),u=i[0],l=i[1],b=Object(s.useState)(""),p=Object(fe.a)(b,2),j=p[0],d=p[1],O=Object(s.useState)(""),f=Object(fe.a)(O,2),h=f[0],g=f[1];return Object(s.useEffect)((function(){n({type:we,payload:a})}),[n,a]),Object(R.jsxs)(ye,{children:[Object(R.jsxs)(he.a,{children:[Object(R.jsx)(ge.a,{id:"demo-simple-select-label",children:r("filters.genre")}),Object(R.jsx)(Ee,{labelId:"demo-simple-select-label",value:u,onChange:function(e){return function(e){var t=e.target;l(t.value)}(e)},children:c.map((function(e){var t=e.name,a=e.id;return Object(R.jsx)(ve.a,{value:a,children:t},a)}))})]}),Object(R.jsx)(me.a,{label:r("filters.startDate"),type:"date",InputLabelProps:{shrink:!0},onChange:function(e){d(e.target.value)},value:j}),Object(R.jsx)(me.a,{label:r("filters.endDate"),type:"date",InputLabelProps:{shrink:!0},onChange:function(e){g(e.target.value)},value:h}),Object(R.jsx)(A,{onClick:function(){return t(u,j,h)},children:r("filters.apply")})]})},Be=Object(i.a)(M.a)({display:"flex",flexDirection:"row",justifyContent:"space-around",flexWrap:"wrap",alignItems:"center"}),Fe=function(){var e=Object(Q.c)(qe);return Object(R.jsx)(Be,{children:e.map((function(e){var t=e.title,a=e.id,n=e.poster_path;return Object(R.jsx)(je,{title:t,id:a,poster_path:n},a)}))})},Je=a(164),Ye=Object(i.a)(Je.a)({"& button":{background:"rgb(45, 140, 181)","&:hover":{background:"white"}},"& .Mui-selected":{border:"2px solid black",fontWeight:"bold",background:"rgb(45, 140, 181)"}}),Xe=Object(i.a)(b.a)({display:"flex",justifyContent:"space-around",marginTop:"8px"}),Ke=function(e){var t=e.changePage,a=e.page,n=Object(Q.c)(He);return Object(R.jsx)(Xe,{children:Object(R.jsx)(Ye,{count:n,size:"large",shape:"rounded",onChange:function(e,a){return t(a)},page:a})})},Ze=function(){var e=v.a.language,t=Object(s.useState)(1),a=Object(fe.a)(t,2),n=a[0],r=a[1],c=Object(Q.b)(),o=Object(s.useState)(""),i=Object(fe.a)(o,2),u=i[0],l=i[1],b=Object(s.useState)(""),p=Object(fe.a)(b,2),j=p[0],d=p[1],O=Object(s.useState)(""),f=Object(fe.a)(O,2),h=f[0],g=f[1],m=D(e,u,j,h,n);return Object(s.useEffect)((function(){c({type:Pe,payload:m})}),[c,m]),Object(R.jsxs)("div",{children:[Object(R.jsx)(ze,{onAplied:function(e,t,a){l(e),d(t),g(a),r(1)}}),Object(R.jsx)(Ke,{changePage:function(e){return r(e)},page:n}),Object(R.jsx)(Fe,{})]})},$e="GET_RANDOM_MOVIE_SUCCESS",et="GET_RANDOM_MOVIE_ERROR",tt="GET_RANDOM_MOVIE_REQUESTED",at="GET_TOTAL_PAGES",nt=function(e){return{type:$e,payload:e}},rt={randomMovie:{movie:{},status:null,error:null},totalPages:0};!function(e){e.Requested="requested",e.Success="success",e.Error="error"}(We||(We={}));var ct=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},ot=$.a.mark(it),st=$.a.mark(ut);function it(e){var t,a,n,r;return $.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,c.prev=1,c.next=4,fetch(t);case 4:return a=c.sent,c.next=7,a.json();case 7:return n=c.sent,c.next=10,(i=n.results).length?i[ct(0,i.length-1)]:i;case 10:return r=c.sent,c.next=13,Object(ee.b)(nt(r));case 13:return c.next=15,Object(ee.b)((s=n.total_pages,{type:at,payload:s}));case 15:c.next=20;break;case 17:c.prev=17,c.t0=c.catch(1),Object(ee.b)((o=c.t0,{type:et,payload:o}));case 20:case"end":return c.stop()}var o,s,i}),ot,null,[[1,17]])}function ut(){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.c)(tt,it);case 2:case"end":return e.stop()}}),st)}var lt=function(e){return e.random.randomMovie.movie},bt=function(e){return e.random.totalPages},pt=function(){var e=v.a.language,t=Object(s.useState)(1),a=Object(fe.a)(t,2),n=a[0],r=a[1],c=Object(Q.b)(),o=Object(Q.c)(bt),i=Object(Q.c)(lt),u=Object(s.useState)(""),l=Object(fe.a)(u,2),b=l[0],p=l[1],j=Object(s.useState)(""),d=Object(fe.a)(j,2),O=d[0],f=d[1],h=Object(s.useState)(""),g=Object(fe.a)(h,2),m=g[0],x=g[1],E=D(e,b,O,m,n);return Object(s.useEffect)((function(){c({type:tt,payload:E})}),[c,E]),Object(R.jsxs)("div",{children:[Object(R.jsx)(ze,{onAplied:function(e,t,a){p(e),f(t),x(a),r(function(e){return ct(1,e)}(o))}}),Object(R.jsx)("p",{children:i.title})]})},jt=Object(i.a)(b.a)({background:"rgba(56, 50, 50, 0.6)",color:"black",fontWeight:"bold",textAlign:"center",width:"90%",height:"800px",fontFamily:"sans-serif",minWidth:"1000px"}),dt=a(57),Ot=function(){var e=Object(m.a)().t;return Object(R.jsx)(dt.a,{children:Object(R.jsxs)(jt,{maxWidth:!1,children:[Object(R.jsx)("h1",{children:e("title")}),Object(R.jsx)(T.c,{children:Object(R.jsx)(T.a,{path:"/",component:k})}),Object(R.jsxs)(T.c,{children:[Object(R.jsx)(T.a,{path:"/dashboard",component:N}),Object(R.jsx)(T.a,{path:"/movies",component:Ze}),Object(R.jsx)(T.a,{path:"/random movie/",component:pt})]}),Object(R.jsx)(T.c,{children:Object(R.jsx)(T.a,{path:"/dashboard/:list",exact:!0,component:Oe})})]})})},ft=a(45),ht=a(86),gt={initialListsState:X,initialMoviesState:Ae,initialRandomMovieState:rt},vt=Object(ft.b)({lists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return Object(J.a)(Object(J.a)({},e),{},Object(x.a)({},t.name,{movies:[],status:U.Requested,error:null}));case W:return Object(J.a)(Object(J.a)({},e),{},Object(x.a)({},t.name,{movies:t.payload,status:U.Success,error:null}));case V:return Object(J.a)(Object(J.a)({},e),{},Object(x.a)({},t.name,{movies:[],status:U.Error,error:t.payload}));case H:return Object(J.a)({},X);default:return Object(J.a)({},e)}},movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case we:return Object(J.a)(Object(J.a)({},e),{},{genres:{genresList:[],status:se.Requested,error:null}});case _e:return Object(J.a)(Object(J.a)({},e),{},{genres:{genresList:t.payload,status:se.Success,error:null}});case Se:return Object(J.a)(Object(J.a)({},e),{},{genres:{genresList:[],status:se.Error,error:t.payload}});case Pe:return Object(J.a)(Object(J.a)({},e),{},{filteredMovies:{movies:[],status:se.Requested,error:null}});case Te:return Object(J.a)(Object(J.a)({},e),{},{filteredMovies:{movies:t.payload,status:se.Success,error:null}});case Re:return Object(J.a)(Object(J.a)({},e),{},{filteredMovies:{movies:[],status:se.Error,error:t.payload}});case ke:return Object(J.a)(Object(J.a)({},e),{},{totalPages:t.payload});default:return Object(J.a)({},e)}},random:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case tt:return Object(J.a)(Object(J.a)({},e),{},{randomMovie:{movie:{},status:We.Requested,error:null}});case $e:return Object(J.a)(Object(J.a)({},e),{},{randomMovie:{movie:t.payload,status:We.Success,error:null}});case et:return Object(J.a)(Object(J.a)({},e),{},{randomMovie:{movie:{},status:We.Error,error:t.payload}});case at:return Object(J.a)(Object(J.a)({},e),{},{totalPages:t.payload});default:return Object(J.a)({},e)}}}),mt=$.a.mark(xt);function xt(){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.a)([ce(),Le(),Qe(),ut()]);case 2:case"end":return e.stop()}}),mt)}var Et=Object(ht.a)(),yt=Object(ft.c)(Object(ft.a)(Et),window.__REDUX_DEVTOOLS_EXTENSION__()),_t=Object(ft.d)(vt,gt,yt);Et.run(xt),o.a.render(Object(R.jsx)(Q.a,{store:_t,children:Object(R.jsx)(Ot,{})}),document.getElementById("root"))},80:function(e){e.exports=JSON.parse('{"title":"Movies","navBar":{"dashboard":"Dashboard","movies":"Movies","randomMovie":"Random movie"},"dashboard":{"nowPlaying":"Now playing","upcoming":"Upcoming","popular":"Popular"},"filters":{"genre":"Genre","startDate":"Start Date","endDate":"End Date","apply":"Apply"}}')},81:function(e){e.exports=JSON.parse('{"title":"\u0424\u0438\u043b\u044c\u043c\u044b","navBar":{"dashboard":"\u0421\u043f\u0438\u0441\u043a\u0438","movies":"\u0424\u0438\u043b\u044c\u043c\u044b","randomMovie":"\u0421\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0439 \u0444\u0438\u043b\u044c\u043c"},"dashboard":{"nowPlaying":"\u0412 \u043f\u0440\u043e\u043a\u0430\u0442\u0435","upcoming":"\u041e\u0436\u0438\u0434\u0430\u0435\u043c\u044b\u0435","popular":"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435"},"filters":{"genre":"\u0416\u0430\u043d\u0440","startDate":"\u041e\u0442","endDate":"\u0414\u043e","apply":"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c"}}')}},[[111,1,2]]]);
//# sourceMappingURL=main.f2b25ce9.chunk.js.map