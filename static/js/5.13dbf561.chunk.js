(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[5],{40:function(e,t,a){e.exports={li:"MovieList_li__fXuYS",a:"MovieList_a__1sKzh"}},45:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return h}));var c=a(36),n=a(34),r=a(0),s=a(2),i=a(35),o=a(5),u=a(40),l=a.n(u),j=a(1);function b(e){var t=e.movies,a=Object(s.g)();return Object(j.jsx)(j.Fragment,{children:t&&Object(j.jsx)("ul",{children:t.map((function(e){var t=e.id,c=e.title;return Object(j.jsx)("li",{className:l.a.li,children:Object(j.jsx)(o.b,{className:l.a.a,to:{pathname:"/movie/".concat(t),state:{from:"/"===a.pathname?"/":"/movie"+a.search}},children:c})},t)}))})})}function h(){var e=Object(r.useState)(""),t=Object(n.a)(e,2),a=t[0],o=t[1],u=Object(r.useState)(null),l=Object(n.a)(u,2),h=l[0],m=l[1],f=Object(s.f)(),v=Object(s.g)(),p=new URLSearchParams(v.search).get("query");Object(r.useEffect)((function(){p&&(i.a(p).then((function(e){var t=e.results;return m(t)})),o(p))}),[p]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a.trim()?(i.a(a).then((function(e){var t=e.results;return m(t)})),f.push(Object(c.a)(Object(c.a)({},f.location),{},{search:"?query=".concat(a)}))):alert("Enter a valid movie title, please")},children:[Object(j.jsx)("input",{className:"input",name:"inputValue",value:a,onChange:function(e){var t=e.target;o(t.value.toLowerCase())},type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"}),Object(j.jsx)("button",{className:"btn",type:"submit",children:Object(j.jsx)("span",{children:"Search"})})]}),Object(j.jsx)(b,{movies:h})]})}}}]);
//# sourceMappingURL=5.13dbf561.chunk.js.map