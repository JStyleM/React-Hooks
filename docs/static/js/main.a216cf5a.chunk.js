(this["webpackJsonphook-app"]=this["webpackJsonphook-app"]||[]).push([[0],{24:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(14),s=n.n(a),r=n(17),i=n(7),j=n(2),b=Object(c.createContext)(null),l=n(1),o=function(){var e=Object(c.useContext)(b),t=e.user,n=e.setUser;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"AboutScreen"}),Object(l.jsx)("hr",{}),Object(l.jsx)("pre",{children:JSON.stringify(t,null,3)}),Object(l.jsx)("button",{className:"btn btn-warning",onClick:function(){n({})},children:"Logout"})]})},d=(n(24),function(){var e=Object(c.useContext)(b).user;return console.log(e),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"HomeScreen"}),Object(l.jsx)("hr",{}),Object(l.jsx)("pre",{children:JSON.stringify(e,null,3)})]})}),x=n(18),O=function(){var e=Object(c.useContext)(b),t=e.user,n=e.setUser,a={id:1213,name:"Fabio"};return console.log(t),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"LoginScreen"}),Object(l.jsx)("hr",{}),Object(l.jsx)("pre",{children:JSON.stringify(t,null,3)}),Object(l.jsx)("button",{className:"btn btn-primary",onClick:function(){return n(Object(x.a)({},a))},children:"Login"})]})},u=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)(i.b,{to:"./",className:"navbar-brand",children:"Navbar"}),Object(l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(l.jsxs)("div",{className:"navbar-nav",children:[Object(l.jsx)(i.b,{exact:!0,activeClassName:"active",to:"./",className:"nav-link",children:"Home"}),Object(l.jsx)(i.b,{exact:!0,activeClassName:"active",to:"./login",className:"nav-link",children:"login"}),Object(l.jsx)(i.b,{exact:!0,activeClassName:"active",to:"./about",className:"nav-link",children:"About"})]})})]})})})},h=function(){return Object(l.jsx)(i.a,{children:Object(l.jsxs)("div",{children:[Object(l.jsx)(u,{}),Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)(j.d,{children:[Object(l.jsx)(j.b,{exact:!0,path:"/",component:d}),Object(l.jsx)(j.b,{exact:!0,path:"/login",component:O}),Object(l.jsx)(j.b,{exact:!0,path:"/about",component:o}),Object(l.jsx)(j.a,{to:"./"})]})})]})})},v=function(){var e=Object(c.useState)({id:1234,name:"Jhonatan"}),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(l.jsx)(b.Provider,{value:{user:n,setUser:a},children:Object(l.jsx)(h,{})})};n(30);s.a.render(Object(l.jsx)(v,{}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.a216cf5a.chunk.js.map