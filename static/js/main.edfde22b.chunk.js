(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(9),r=a.n(o),s=(a(69),a(7)),i=(a(70),a(129)),l=a(132),j=(a(71),a(18)),d=a.n(j),u=a(2);var b=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],o=a[1],r=Object(n.useState)(""),j=Object(s.a)(r,2),b=j[0],h=j[1],O=Object(n.useState)(""),p=Object(s.a)(O,2),g=p[0],m=p[1],x=Object(n.useState)(!0),v=Object(s.a)(x,2),f=v[0],N=v[1],C=Object(n.useState)(!1),S=Object(s.a)(C,2),k=S[0],y=S[1],w=Object(n.useState)(),I=Object(s.a)(w,2),T=I[0],U=I[1],M=function(){var t={email:b,password:g};d.a.post("https://xpressnotes.herokuapp.com/api/auth/login",t).then((function(e){var t;(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.token)&&(localStorage.setItem("token",e.data.token),localStorage.setItem("email",b),console.log(e.data))})).then((function(){return e.handlePage()})).catch((function(e){return U("Incorrect Username or Password")}))},E=function(){N(!f),y(!k),U()};return Object(u.jsx)(i.a,{className:"loginSignUpCard",children:Object(u.jsxs)(l.a,{className:"loginSignUpCardContent",children:[Object(u.jsxs)("div",{className:"loginSignUpCardImg",children:[Object(u.jsx)("div",{className:"loginSignUpCardImgOne"}),Object(u.jsx)("div",{className:"loginSignUpCardImgTwo"}),Object(u.jsx)("div",{className:"loginSignUpCardImgTwo"}),Object(u.jsx)("div",{className:"loginSignUpCardImgTwo"}),Object(u.jsx)("div",{className:"loginSignUpCardImgThree"})]}),T?Object(u.jsx)("span",{className:"loginSignUpInvalidCred",children:T}):null,Object(u.jsxs)("form",{className:"loginSignUpForm",children:[k?Object(u.jsx)("input",{type:"text",placeholder:"Name",onChange:function(e){return" "===e.target.value?null:o(e.target.value)},value:c}):null,Object(u.jsx)("input",{type:"text",placeholder:"Email",onChange:function(e){return" "===e.target.value?null:h(e.target.value)},value:b}),Object(u.jsx)("input",{type:"password",placeholder:"Password",onChange:function(e){return" "===e.target.value?null:m(e.target.value)},value:g}),f?Object(u.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),M()},children:"Login"}):null,k?Object(u.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),function(){var e={name:c,email:b,password:g};d.a.post("https://xpressnotes.herokuapp.com/api/auth/register",e,{headers:{"Content-type":"application/json"}}).then((function(e){return M()})).catch((function(e){return U("Invalid data")}))}()},children:"SignUp"}):null,f?Object(u.jsx)("div",{onClick:E,children:"New Here ? Sign Up."}):null,k?Object(u.jsx)("div",{onClick:E,children:"Already have an account ? Login"}):null]})]})})},h=a(11),O=a(133),p=a(4),g=a(135),m=a(144),x=a(136),v=a(56),f=a.n(v),N=(a(31),a(145)),C=a(137),S=a(134),k=a(38),y=a(39),w=Object(O.a)((function(e){return{expand:{transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:function(e){return"note"===e.category?S.a[700]:"important"===e.category?k.a[500]:"todo"===e.category?y.a[500]:void 0}}}}));function I(e){var t=e.each,a=w(t),n=c.a.useState(!1),o=Object(s.a)(n,2),r=o[0],j=o[1];return Object(u.jsx)("div",{children:Object(u.jsx)("div",{children:Object(u.jsxs)(i.a,{elevation:1,style:{backgroundColor:"important"===e.each.category?"#fbadad":"note"===e.each.category?"#fff096":"todo"===e.each.category?"#b4f5ae":void 0},children:[Object(u.jsx)(g.a,{avatar:Object(u.jsx)(N.a,{className:a.avatar,children:t.category[0].toUpperCase()}),action:Object(u.jsx)(x.a,{onClick:function(){return t.id,void d.a.delete("https://xpressnotes.herokuapp.com/api/notes/"+e.each._id,{headers:{Authorization:"Bearer "+e.jwtToken}}).then((function(t){e.getNotes()}))},children:Object(u.jsx)(C.a,{})}),title:t.title,subheader:t.category}),Object(u.jsxs)(l.a,{children:[r?null:Object(u.jsxs)(l.a,{children:[e.each.content.slice(0,80)," ",e.each.content.length>80?Object(u.jsx)("span",{children:"..."}):null]}),Object(u.jsx)(m.a,{in:r,timeout:"auto",unmountOnExit:!0,children:Object(u.jsx)(l.a,{children:e.each.content})}),e.each.content.length>80?Object(u.jsx)(x.a,{className:Object(p.a)(a.expand,Object(h.a)({},a.expandOpen,r)),onClick:function(){j(!r)},"aria-expanded":r,"aria-label":"show more",children:Object(u.jsx)(f.a,{})}):null]})]})})})}a(99);var T=a(142),U=a(138),M=a(139),E=a(40),P=Object(O.a)((function(e){return{root:{display:"flex"},date:{flexGrow:1},toolbar:e.mixins.toolbar,avatar:{marginLeft:e.spacing(2)}}}));var B=function(e){var t=P(),a=localStorage.getItem("email"),n=a.substr(0,a.indexOf("@"));return Object(u.jsx)("div",{className:"navWrapper",children:Object(u.jsx)(U.a,{position:"fixed",className:t.appBar,elevation:0,color:"primary",children:Object(u.jsxs)(M.a,{children:[Object(u.jsxs)("div",{className:"navbarText",children:["Hi\xa0",Object(u.jsx)("b",{children:n[0].toUpperCase()+n.slice(1)}),",\u2002 Today is the ",Object(T.a)(new Date,"do MMMM Y")]}),Object(u.jsx)(E.a,{className:t.date}),Object(u.jsxs)("div",{className:"navbar",children:[Object(u.jsx)("div",{onClick:e.handleModal,className:"navbarNavItem",children:"Create Note"}),Object(u.jsx)("div",{onClick:function(){localStorage.removeItem("email"),localStorage.removeItem("token"),e.handlePage()},className:"navbarNavItem",children:"Sign Out"})]})]})})})},L=a(141),F=a(143),A=a(140);a(100);var D=function(e){var t=Object(n.useState)(),a=Object(s.a)(t,2),c=a[0],o=a[1],r=Object(n.useState)(),i=Object(s.a)(r,2),l=i[0],j=i[1],b=Object(n.useState)("note"),h=Object(s.a)(b,2),O=h[0],p=h[1],g=Object(n.useState)(!1),m=Object(s.a)(g,2),x=m[0],v=m[1];return Object(u.jsx)("div",{className:"modalStyles",children:Object(u.jsxs)("form",{className:"createEditForm",children:[x?Object(u.jsx)("span",{style:{color:"white"},children:"Make sure that all fields are filled"}):null,Object(u.jsx)("input",{type:"text",className:"createEditTitle",placeholder:"Title",onChange:function(e){return" "===e.target.value?null:o(e.target.value)},value:c}),Object(u.jsx)("textarea",{className:"createEditContent",placeholder:"Take a note",onChange:function(e){return" "===e.target.value?null:j(e.target.value)},value:l}),Object(u.jsxs)("div",{className:"createEditBottomRow",children:[Object(u.jsxs)("div",{className:"createEditRadio",children:[Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"radio",value:"note",checked:"note"===O,onChange:function(){return p("note")}}),"Note"]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"radio",value:"todo",checked:"todo"===O,onChange:function(){return p("todo")}}),"Todo"]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"radio",value:"important",checked:"important"===O,onChange:function(){return p("important")}}),"Important"]})]}),Object(u.jsx)(A.a,{variant:"contained",color:"secondary",onClick:function(){var t={title:c,content:l,category:O};d.a.post("https://xpressnotes.herokuapp.com/api/notes",t,{headers:{Authorization:"Bearer "+e.jwtToken,"Content-Type":"application/json"}}).then((function(){e.handleModal(),e.getNotes()})).catch((function(){return v(!0)}))},children:"Create"})]})]})})};var z=function(e){return Object(u.jsxs)("div",{className:"noNotes",onClick:e.handleModal,children:[Object(u.jsx)("div",{className:"noNotesOne"}),Object(u.jsx)("div",{className:"noNOtesText",children:"Looks like you don't have any notes. Click to get started."})]})};var H=function(){return Object(u.jsxs)("div",{className:"notesLoad",children:[Object(u.jsx)("div",{className:"loader"}),Object(u.jsx)("div",{style:{marginTop:"2%"},children:"Half a mo... Wait while we fetch your notes."})]})},J=a(57),R=Object(O.a)((function(e){return{toolbar:e.mixins.toolbar}}));var W=function(e){var t=R(),a=Object(n.useState)(localStorage.getItem("token")),c=Object(s.a)(a,2),o=c[0],r=(c[1],Object(n.useState)()),i=Object(s.a)(r,2),l=i[0],j=i[1],b=Object(n.useState)(),h=Object(s.a)(b,2),O=h[0],p=h[1],g=Object(n.useState)(!1),m=Object(s.a)(g,2),x=m[0],v=m[1],f=function(){v(!x)},N=function(){d.a.get("https://xpressnotes.herokuapp.com/api/notes",{headers:{Authorization:"Bearer "+o}}).then((function(e){return j(e.data)})),console.log(l)};return Object(n.useEffect)((function(){N()}),[]),Object(n.useEffect)((function(){p(null===l||void 0===l?void 0:l.map((function(e){return Object(u.jsx)(I,{each:e,jwtToken:o,getNotes:N})})))}),[l]),Object(u.jsxs)("div",{style:{width:"100%",height:"100%"},children:[Object(u.jsx)(B,{handlePage:e.handlePage,handleModal:f}),Object(u.jsx)("div",{className:t.toolbar}),Object(u.jsx)("div",{className:"notes",children:l?0===(null===l||void 0===l?void 0:l.length)?Object(u.jsx)(z,{handleModal:f}):Object(u.jsx)(L.a,{children:Object(u.jsx)(J.a,{breakpointCols:{default:3,1100:2,700:1},className:"my-masonry-grid",columnClassName:"my-masonry-grid_column",children:O})}):Object(u.jsx)(H,{})}),Object(u.jsx)(F.a,{open:x,onClose:function(){v(!1)},children:Object(u.jsx)(D,{jwtToken:o,getNotes:N,handleModal:f})})]})};var _=function(){var e=Object(n.useState)(),t=Object(s.a)(e,2),a=t[0],c=t[1],o=function e(){localStorage.getItem("token")?c(Object(u.jsx)(W,{handlePage:e})):c(Object(u.jsx)(b,{handlePage:e}))};return Object(n.useEffect)((function(){o()}),[]),Object(u.jsx)("div",{className:"App",children:a})},G=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,147)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),o(e),r(e)}))};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(_,{})}),document.getElementById("root")),G()},31:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},99:function(e,t,a){}},[[101,1,2]]]);
//# sourceMappingURL=main.edfde22b.chunk.js.map