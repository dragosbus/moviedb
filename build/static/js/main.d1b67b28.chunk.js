(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{63:function(e,t,n){e.exports=n.p+"static/media/play-button.cfccda6e.svg"},64:function(e,t,n){e.exports=n.p+"static/media/logo.02a9430b.svg"},69:function(e,t,n){e.exports=n(97)},85:function(e,t,n){},87:function(e,t,n){},89:function(e,t,n){},91:function(e,t,n){},93:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(26),i=n.n(o),c=n(107),l=n(110),s=n(108),u=n(12),m=n(34),p=n.n(m),d=n(37),f=function(){var e="cd8616dd1859d5e422a87d51ad82a0b9",t="https://api.themoviedb.org/3",n=function(e){return fetch(e)};return{fetchMovieCast:function(){var a=Object(d.a)(p.a.mark(function a(r){var o;return p.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n("".concat(t,"/movie/").concat(r,"/credits?api_key=").concat(e));case 2:return o=a.sent,a.abrupt("return",o.json());case 4:case"end":return a.stop()}},a,this)}));return function(e){return a.apply(this,arguments)}}(),fetchMovieSearched:function(){var a=Object(d.a)(p.a.mark(function a(r){var o;return p.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n("".concat(t,"/search/movie?api_key=").concat(e,"&query=").concat(r));case 2:return o=a.sent,a.abrupt("return",o.json());case 4:case"end":return a.stop()}},a,this)}));return function(e){return a.apply(this,arguments)}}(),fetchWeekTrending:function(){var a=Object(d.a)(p.a.mark(function a(){var r;return p.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n("".concat(t,"/trending/movie/week?api_key=").concat(e));case 2:return r=a.sent,a.abrupt("return",r.json());case 4:case"end":return a.stop()}},a,this)}));return function(){return a.apply(this,arguments)}}(),fetchMovieDetails:function(){var a=Object(d.a)(p.a.mark(function a(r){var o;return p.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n("".concat(t,"/movie/").concat(r,"?api_key=").concat(e,"&language=en-US"));case 2:return o=a.sent,a.abrupt("return",o.json());case 4:case"end":return a.stop()}},a,this)}));return function(e){return a.apply(this,arguments)}}(),fetchTrailer:function(){var a=Object(d.a)(p.a.mark(function a(r){var o;return p.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n("".concat(t,"/movie/").concat(r,"/videos?api_key=").concat(e,"&language=en-US"));case 2:return o=a.sent,a.abrupt("return",o.json());case 4:case"end":return a.stop()}},a,this)}));return function(e){return a.apply(this,arguments)}}()}}(),v=function(e){return{type:"SET_SEARCH_TERM",payload:e}},h=function(){return{type:"HIDE_MOVIE_DETAILS"}},g=function(e){return{type:"SET_AUTO_COMPLETION",payload:e}},b=function(){return{type:"EMPTY_AUTO_COMPLETION"}},E=function(e){return function(t){f.fetchMovieSearched(e).then(function(e){return t({type:"ADD_API_DATA",payload:e.results})}).catch(function(e){return console.log(e)})}},y=n(15),O=n(60),w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SEARCH_TERM":return t.payload;default:return e}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_API_DATA":return t.payload.map(function(e){return Object.assign({},e,{favorite:!1})});default:return e}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TRAILER":return t.payload;default:return e}},_=n(67),k=n(66),D=Object(y.c)({searchTerm:w,data:j,trailer:T,weekTrending:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_WEEK_TRENDING":return t.payload;default:return e}},movieDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{on:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_MOVIE_DATAILS":return Object.assign({},{on:!0},Object(_.a)({},t.payload));case"HIDE_MOVIE_DETAILS":return Object.assign({},{on:!1});default:return e}},autoCompletion:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_AUTO_COMPLETION":return t.payload;case"EMPTY_AUTO_COMPLETION":return[];default:return e}},favorites:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_FAVORITE":return Object(k.a)(e.map(function(e){return e.id===t.payload.id?null:e}).filter(function(e){return null!==e})).concat([t.payload]);default:return e}}}),M=Object(y.d)(D,Object(y.a)(O.a)),C=n(5),S=n(6),N=n(8),A=n(7),I=n(9),x=n(25),R=n(54),L=function(e){var t=10*e.rating>=75?"rgb(61, 199, 61)":10*e.rating>=50?"rgb(236, 132, 13)":"rgb(243, 30, 58)",n={backgroundImage:"linear-gradient(180deg, rgba(2,2,2,0.55) 65%, rgba(255,255,255,0.45)), url("+"https://image.tmdb.org/t/p/w500".concat(e.cover)+")"},a=e.favorite?"favorite favorite-true":"favorite";return r.a.createElement("li",{className:"movie"},r.a.createElement("div",{className:"img",style:n}),r.a.createElement(R.b,{className:a,onClick:e.addToFavorite}),r.a.createElement("div",{className:"infos"},r.a.createElement("div",{className:"main-infos"},r.a.createElement("div",{className:"rating"},r.a.createElement("span",{style:{borderColor:t},className:"score"},10*e.rating,"%")),r.a.createElement("h3",{className:"title",onClick:e.showDetails},e.title),r.a.createElement("h4",{className:"release"},e.date)),r.a.createElement("p",{className:"overview"},e.overview.slice(0,120),"...")))},F=function(e){function t(){return Object(C.a)(this,t),Object(N.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("ul",{className:"movie-list"},this.props.movies.map(function(t,n){return r.a.createElement(L,{key:n,cover:t.poster_path,title:t.original_title,rating:t.vote_average,date:t.release_date,overview:t.overview,favorite:t.favorite,showDetails:function(){return e.props.showDetails(n)},addToFavorite:function(){return e.props.addToFavorite(t)}})}))}}]),t}(a.Component),W=function(e){return r.a.createElement("div",{className:e.movieDetailOn?"movie-detail-on":"movie-detail"},r.a.createElement("div",null,r.a.createElement("h2",null,e.title),r.a.createElement("div",{className:"video-container"},r.a.createElement("button",{className:"close-modal",onClick:e.closeModal},"X"),r.a.createElement("iframe",{src:e.trailer,allow:"autoplay; encrypted-media",webkitallowfullscreen:"true",mozallowfullscreen:"true",allowFullScreen:!0,frameBorder:"0",modestbranding:"1"}))))},P=n(20),U=n(21);function G(){var e=Object(P.a)(["\n  max-width: 100%;\n  border-radius: 1.5rem;\n"]);return G=function(){return e},e}function Q(){var e=Object(P.a)(["\n  position: absolute;\n  width: 10rem;\n  box-shadow: 0.5rem 0.25rem 1rem rgba(0, 0, 0, 0.25);\n  border-radius: 1.5rem;\n  transition: all 0.35s ease-in;\n  cursor: pointer;\n  background: transparent;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  animation: "," 0.5s ease-in;\n"]);return Q=function(){return e},e}function H(){var e=Object(P.a)(["\n  overflow-y: hidden;\n  width: 100%;\n  list-style: none;\n  height: 21rem;\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  background: transparent;\n\n  ::-webkit-scrollbar {\n    display: none;\n    width: 0;\n    background: transparent;\n  }\n\n  @media(min-width:960px) {\n    margin: 0 auto;\n    width: 60%;\n  }\n"]);return H=function(){return e},e}function V(){var e=Object(P.a)(["\n  0%{\n    opacity: 0;\n    transform: translate3d(-30px, 0, 0);\n  }\n  100%{\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n"]);return V=function(){return e},e}var B=Object(U.b)(V()),q=U.a.ul(H()),z=U.a.li(Q(),B),J=U.a.img(G()),K=function(e){return r.a.createElement(q,null,e.data.slice(0,10).map(function(t,n){return r.a.createElement(z,{className:"movie-trending",key:n,style:{left:"".concat(120*n,"px")},onClick:function(){return e.toggleMovieDetails(t.id)}},r.a.createElement(J,{src:"https://image.tmdb.org/t/p/w600_and_h900_bestv2".concat(t.poster_path),alt:t.original_title}))}))},X=n(101);function Y(){var e=Object(P.a)(["\n  font-size: 1.5rem;\n  text-decoration: none;\n  padding: 0 2rem;\n"]);return Y=function(){return e},e}function $(){var e=Object(P.a)(["\n  font-size: 1.75rem;\n  padding: 1rem;\n\n  @media (min-width: 960px) {\n    width: 50%;\n  }\n"]);return $=function(){return e},e}function Z(){var e=Object(P.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  height: 25rem;\n  padding: 0;\n"]);return Z=function(){return e},e}var ee=U.a.section(Z()),te=U.a.h3($()),ne=Object(U.a)(X.a)(Y()),ae=function(e){function t(){return Object(C.a)(this,t),Object(N.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.path,a=e.toggleMovieDetails,o=e.data;return this.props.data.length>0?r.a.createElement(ee,null,r.a.createElement(te,null,t),r.a.createElement(ne,{to:n},"More"),r.a.createElement(K,{data:o,toggleMovieDetails:a})):""}}]),t}(r.a.Component),re=function(e){function t(){return Object(C.a)(this,t),Object(N.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){return r.a.createElement(ae,{title:"Week Trending",path:"/week-trending",data:this.props.weekTrending,toggleMovieDetails:this.props.toggleMovieDetails})}}]),t}(r.a.Component),oe=Object(u.b)(function(e){return{weekTrending:e.weekTrending}},null)(re),ie=function(e){function t(){return Object(C.a)(this,t),Object(N.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){return r.a.createElement(ae,{title:"Favorites Movies",path:"/favorites",data:this.props.favorites,toggleMovieDetails:this.props.toggleMovieDetails})}}]),t}(r.a.Component),ce=Object(u.b)(function(e){return{favorites:e.favorites}},null)(ie),le=(n(85),n(63)),se=n.n(le),ue=function(){return r.a.createElement("svg",{className:"icon",enableBackground:"new 0 0 48 48",version:"1.1",viewBox:"0 0 48 48"},r.a.createElement("g",{className:"heart-st0",id:"Padding__x26__Artboard"}),r.a.createElement("g",{id:"Icons"},r.a.createElement("g",null,r.a.createElement("path",{className:"heart-st1",d:"M12.27063,25.74658l11.30768,11.30769c0.23524,0.23524,0.61667,0.23517,0.85183-0.00016l11.29923-11.30753    l0.83566-0.82704c1.61101-1.61101,2.41221-3.74754,2.41221-5.86684c0-2.12791-0.8012-4.25583-2.41221-5.86684    c-3.22202-3.22202-8.50304-3.22202-11.73368,0l-0.82704,0.83566l-0.83566-0.83566c-3.22202-3.22202-8.50304-3.22202-11.72506,0    c-1.61963,1.61101-2.42082,3.73892-2.42082,5.86684c0,2.1193,0.8012,4.25583,2.42082,5.86684L12.27063,25.74658l11.30768,11.30769    c0.23524,0.23524,0.61667,0.23517,0.85183-0.00016l11.29923-11.30753"}),r.a.createElement("path",{className:"heart-st1",d:"M11.45598,19.85644c0,0.43682,0.04064,0.8745,0.12213,1.30629"}),r.a.createElement("path",{className:"heart-st1",d:"M17.06505,13.0453c-1.3151,0.25299-2.56957,0.88547-3.58154,1.89743    c-0.74809,0.74411-1.2877,1.61988-1.62126,2.55471"}))))},me=function(e){return r.a.createElement("ul",{className:"cast-list"},e.cast&&e.cast.slice(0,e.castLength).map(function(e,t){return r.a.createElement("li",{key:e.credit_id,style:{left:"".concat(120*t,"px")}},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w600_and_h900_bestv2".concat(e.profile_path)}),r.a.createElement("p",null,e.name))}))},pe=function(e){function t(){var e,n;Object(C.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(N.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(r)))).state={length:8,castToggled:!1},n.noScroll=function(){window.scrollTo(0,0)},n.calcRuntime=function(e){var t=parseInt(e,10),n=parseInt(t/60,10),a=t-60*n;return"".concat(n," h ").concat(a," min")},n}return Object(I.a)(t,e),Object(S.a)(t,[{key:"componentDidUpdate",value:function(e){e.movie.on?window.removeEventListener("scroll",this.noScroll):window.addEventListener("scroll",this.noScroll)}},{key:"render",value:function(){var e=this.props,t=e.movie,n=e.hideMovieDetails,a=t?t.poster_path:"",o={backgroundImage:"linear-gradient(rgba(0,0,0,0.2) 20%, rgba(0,0,0,0.94) 45%), url(https://image.tmdb.org/t/p/w600_and_h900_bestv2".concat(a,")")};return t.on?r.a.createElement("div",{className:"movie-details",style:o},r.a.createElement("button",{className:"movie-details--hide",onClick:n},"X"),r.a.createElement(ue,null),r.a.createElement("button",{className:"play-trailer"},r.a.createElement("img",{src:se.a,alt:"play trailer"})),r.a.createElement("div",{className:"details"},r.a.createElement("p",null,r.a.createElement("span",null,t.release_date),r.a.createElement("span",null,t.genres?t.genres[0].name:"")),r.a.createElement("h4",null,t.original_title),r.a.createElement("p",null,this.calcRuntime(t.runtime)),r.a.createElement("p",{className:"movie-details--overview"},t.overview),r.a.createElement("p",null,t.vote_count," rating"),r.a.createElement("div",{className:"cast"},r.a.createElement("h4",null,"Stars"),r.a.createElement(me,{cast:this.props.movie.cast,castLength:this.state.length}),r.a.createElement("button",{className:"see-more-cast"},"See More")))):""}}]),t}(r.a.Component),de=Object(u.b)(function(e){return{movie:e.movieDetails}},function(e){return Object(y.b)({hideMovieDetails:h},e)})(pe),fe=(n(87),function(e){return r.a.createElement("div",{className:"filter-menu"},r.a.createElement("ul",null,["Popular","Top Rated","Upcoming","My List","Categories"].map(function(e,t){return r.a.createElement("li",{style:{left:"".concat(120*t,"px")},key:t},e)})))}),ve=(n(89),function(e){function t(e){var n;return Object(C.a)(this,t),(n=Object(N.a)(this,Object(A.a)(t).call(this,e))).state={movieDetailOn:!1},n.showDetails=n.showDetails.bind(Object(x.a)(Object(x.a)(n))),n.closeModal=n.closeModal.bind(Object(x.a)(Object(x.a)(n))),n}return Object(I.a)(t,e),Object(S.a)(t,[{key:"componentDidMount",value:function(){this.props.getWeekTrending()}},{key:"showDetails",value:function(e){this.props.getTrailer(this.props.movies[e].id),this.setState({movieDetailOn:!this.state.movieDetailOn})}},{key:"closeModal",value:function(){this.setState({movieDetailOn:!this.state.movieDetailOn})}},{key:"render",value:function(){var e=this.props,t=e.movies,n=e.trailer,a=e.addToFavorite;return r.a.createElement("div",{className:"App"},r.a.createElement(fe,null),r.a.createElement(oe,{toggleMovieDetails:this.props.toggleMovieDetails}),r.a.createElement(ce,{toggleMovieDetails:this.props.toggleMovieDetails}),r.a.createElement(F,{movies:t,showDetails:this.showDetails,addToFavorite:a}),r.a.createElement(W,{movieDetailOn:this.state.movieDetailOn,trailer:this.state.movieDetailOn?"https://www.youtube.com/embed/".concat(n,"?autoplay=1&controls=0&loop=1&showinfo=0"):"",closeModal:this.closeModal}),r.a.createElement(de,null))}}]),t}(a.Component)),he=Object(u.b)(function(e){return{searchTerm:e.searchTerm,movies:e.data,weekTrending:e.weekTrending,trailer:e.trailer,movieDetails:e.movieDetails,autoCompletion:e.autoCompletion}},function(e){return{setSearchTerm:function(t){e(v(t))},fetchMovieSearched:function(t){e(E(t))},getTrailer:function(t){e(function(e){return function(t){f.fetchTrailer(e).then(function(e){var n=e.trailers.results[0].key;t(function(e){return{type:"GET_TRAILER",payload:e}}(n))}).catch(function(e){return console.log(e)})}}(t))},addToFavorite:function(t){e(function(e){return{type:"ADD_TO_FAVORITE",payload:e}}(t))},getWeekTrending:function(){e(function(e){f.fetchWeekTrending().then(function(t){e({type:"GET_WEEK_TRENDING",payload:t.results})}).catch(function(e){console.log(e)})})},toggleMovieDetails:function(t){var n;e((n=t,function(e){f.fetchMovieDetails(n).then(function(t){f.fetchMovieCast(n).then(function(n){var a=n.cast;e({type:"GET_MOVIE_DATAILS",payload:Object.assign({},t,{cast:a})})})}).catch(function(e){console.log(e)})}))},hideMovieDetails:function(){e({type:"HIDE_MOVIE_DETAILS"})}}})(ve),ge=function(e){function t(){return Object(C.a)(this,t),Object(N.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){var e=this.props.movies.filter(function(e){return e.favorite});return r.a.createElement("div",{className:"favorites-movies"},r.a.createElement("ul",{className:"favorites-list"},e.map(function(e,t){return r.a.createElement(L,{key:t,cover:e.poster_path,title:e.original_title,rating:e.vote_average,date:e.release_date,overview:e.overview,favorite:e.favorite})})))}}]),t}(a.Component),be=Object(u.b)(function(e){return{movies:e.data}})(ge),Ee=r.a.forwardRef(function(e,t){return r.a.createElement("input",{type:e.type,placeholder:e.placeholder,value:e.value,onChange:e.onChangeHandler,style:e.style,ref:t})}),ye=n(102),Oe=n(98),we=n(103),je=n(109),Te=n(104),_e=n(105),ke=n(33),De=n(106),Me=function(e,t){return Object(ye.a)(e,t).pipe(Object(we.a)(500),Object(je.a)(1e3),Object(Te.a)(),Object(_e.a)(function(e){return e.target.value}),Object(ke.a)(function(e){return e.target.value}),Object(De.a)(function(e){return Object(Oe.a)(f.fetchMovieSearched(e)).pipe(Object(ke.a)(function(e){return e.results}))}))},Ce=function(e){function t(){var e,n;Object(C.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(N.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(o)))).state={query:"",inputQueryShowed:!1},n.inpRef=r.a.createRef(),n.autoCompletionSubscription=function(e){return Me(e,"input").subscribe(function(e){n.props.emptyAutoCompletion(),n.props.autoCompletion(e)})},n.onChangeQuery=function(e){n.autoCompletionSubscription(e.target),n.props.setSearchTerm(e.target.value),n.setState({query:e.target.value})},n.toggleInput=function(){n.setState({inputQueryShowed:!n.state.inputQueryShowed})},n.submitForm=function(e){e.preventDefault(),n.state.inputQueryShowed?(n.props.fetchMovieSearched(n.props.searchTerm),n.autoCompletionSubscription(n.inpRef.current).unsubscribe()):n.toggleInput()},n}return Object(I.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{id:"movie-search",onSubmit:this.submitForm},r.a.createElement(Ee,{type:"search",placeholder:"Search movie",value:this.props.searchTerm,onChangeHandler:this.onChangeQuery,style:{display:this.state.inputQueryShowed?"block":"none"},ref:this.inpRef}),r.a.createElement("button",{type:"submit"},r.a.createElement(R.a,null)))}}]),t}(a.Component),Se=Object(u.b)(function(e){return{searchTerm:e.searchTerm}},function(e){return Object(y.b)({autoCompletion:g,emptyAutoCompletion:b,setSearchTerm:v,fetchMovieSearched:E},e)})(Ce),Ne=(n(91),Object(u.b)(function(e){return{autoCompletionMovies:e.autoCompletion}},function(e){return Object(y.b)({setSearchTerm:v,emptyAutoCompletion:b},e)})(function(e){var t=e.setSearchTerm,n=e.autoCompletionMovies,a=e.emptyAutoCompletion;return r.a.createElement("ul",{className:"auto-completion"},n.slice(0,5).map(function(e){return r.a.createElement("li",{onClick:function(){t(e.title),a()},key:e.id},e.title)}))})),Ae=n(64),Ie=n.n(Ae),xe=function(e){function t(){return Object(C.a)(this,t),Object(N.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"main-header"},r.a.createElement(X.a,{to:"/"},r.a.createElement("img",{src:Ie.a,alt:"Logo"})),r.a.createElement(Se,null),r.a.createElement(Ne,null))}}]),t}(a.Component),Re=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Le(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}n(93);M.dispatch(E("avengers")),i.a.render(r.a.createElement(u.a,{store:M},r.a.createElement(c.a,{basename:"/moviedb/build"},r.a.createElement("div",null,r.a.createElement(xe,null),r.a.createElement(l.a,null,r.a.createElement(s.a,{exact:!0,path:"/",component:he}),r.a.createElement(s.a,{path:"/favorites",component:be}))))),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/moviedb/build",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/moviedb/build","/service-worker.js");Re?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Le(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):Le(e)})}}()}},[[69,2,1]]]);
//# sourceMappingURL=main.d1b67b28.chunk.js.map