(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[6],{41:function(e,t,c){e.exports={li:"MovieDetails_li__Hkbcp",a:"MovieDetails_a__1v1IF",activeLink:"MovieDetails_activeLink__2M3Or",btn:"MovieDetails_btn__3o0XU"}},45:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return u}));var a=c(2),i=c(40),s=c(34),n=c(0),r=c(5),j=c(35),l=c(41),b=c.n(l),o=c(1);function h(e){var t=e.movieId,c=Object(a.i)().url,l=Object(n.useState)(null),h=Object(s.a)(l,2),d=h[0],O=h[1],u=Object(a.g)(),v=Object(a.f)();return Object(n.useEffect)((function(){j.d(t).then(O)}),[t]),d?Object(o.jsx)("div",{children:d&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("button",{className:b.a.btn,onClick:function(){var e;(null===(e=u.state)||void 0===e?void 0:e.from)&&v.push(u.state.from)},style:{display:"block"},children:"\ud823\udf55 Go back"}),Object(o.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(d.backdrop_path),alt:d.title}),Object(o.jsx)("h2",{children:d.title}),Object(o.jsxs)("p",{children:["Release date: ",d.release_date]}),Object(o.jsxs)("p",{children:["Popularity: ",d.popularity]}),Object(o.jsxs)("p",{children:["Rating: ",d.vote_average]}),Object(o.jsxs)("div",{children:["Genres:"," ",Object(o.jsx)("ul",{children:d.genres?d.genres.map((function(e){var t=e.id,c=e.name;return Object(o.jsx)("li",{className:b.a.li,children:c},t)})):"no genres"}),Object(o.jsx)("p",{children:d.overview})]}),Object(o.jsx)("hr",{}),Object(o.jsx)("div",{children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{className:b.a.li,children:Object(o.jsx)(r.c,{className:b.a.a,activeClassName:b.a.activeLink,to:{pathname:"".concat(c,"/cast"),state:Object(i.a)(Object(i.a)({},u.state),{},{id:t})},children:"Cast"})}),Object(o.jsx)("li",{className:b.a.li,children:Object(o.jsx)(r.c,{className:b.a.a,activeClassName:b.a.activeLink,to:{pathname:"".concat(c,"/reviews"),state:Object(i.a)(Object(i.a)({},u.state),{},{id:t})},children:"Reviews"})})]})})]})}):Object(o.jsx)(o.Fragment,{})}function d(e){var t=e.movieId,c=Object(n.useState)(null),a=Object(s.a)(c,2),i=a[0],r=a[1];return Object(n.useEffect)((function(){j.c(t).then(r)}),[t]),Object(o.jsx)(o.Fragment,{children:i&&Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("ul",{children:i.cast.map((function(e){var t=e.id,c=e.character,a=e.name,i=e.profile_path;return Object(o.jsxs)("li",{children:[Object(o.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(i),alt:a,width:100}),Object(o.jsx)("p",{children:a}),Object(o.jsxs)("p",{children:["Character: ",c]})]},t)}))})})})}function O(e){var t=e.movieId,c=Object(n.useState)(null),a=Object(s.a)(c,2),i=a[0],r=a[1];return Object(n.useEffect)((function(){j.e(t).then(r)}),[t]),Object(o.jsx)(o.Fragment,{children:i&&0!==i.total_results?Object(o.jsx)("ul",{children:i.results.map((function(e){var t=e.id,c=e.author;e.content;return Object(o.jsx)("li",{children:Object(o.jsxs)("p",{children:["Author: ",c]})},t)}))}):Object(o.jsx)("p",{children:" There aren't any reviews for this movie."})})}function u(){var e=Object(a.i)().path,t=Object(a.h)().movieId;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(h,{movieId:t}),Object(o.jsxs)(a.c,{children:[Object(o.jsx)(a.a,{path:"".concat(e,"/cast"),exact:!0,children:Object(o.jsx)(d,{movieId:t})}),Object(o.jsx)(a.a,{path:"".concat(e,"/reviews"),exact:!0,children:Object(o.jsx)(O,{movieId:t})})]})]})}}}]);
//# sourceMappingURL=6.ed57693d.chunk.js.map