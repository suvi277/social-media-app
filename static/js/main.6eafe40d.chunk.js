(this["webpackJsonpsocial-media-app"]=this["webpackJsonpsocial-media-app"]||[]).push([[0],{35:function(e,a,t){e.exports=t.p+"static/media/profile.a8b203f3.png"},38:function(e,a,t){e.exports=t(61)},53:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){},61:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(20),c=t.n(i),l=t(2),s=t(17),u=t(14),o=t(31),m=t(36),d=t(4),p={signedIn:!1,activeUser:{}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SIGN-IN":var t=a.payload,n=t.email,r=t.password,i=t.users,c=E(n,r,i);return c?Object(d.a)({},e,{signedIn:!0,activeUser:c}):Object(d.a)({},e,{signedIn:!1});case"SIGN-OUT":return Object(d.a)({},e,{signedIn:!1});default:return e}},E=function(e,a,t){return t.find((function(t){return t.email===e&&t.password===a}))},b=t(19),g={users:[{id:1,email:"suvi@example.com",firstName:"Suvarna",lastName:"Mondal",password:"suvi@123"},{id:2,email:"mark@gmail.com",firstName:"Mark",lastName:"Zeal",password:"password5"},{id:3,email:"ajay@yahoo.com",firstName:"Ajay",lastName:"Devgan",password:"password9"},{id:4,email:"will@yahoo.com",firstName:"William",lastName:"Andrews",password:"password3"},{id:5,email:"abraham@yahoo.com",firstName:"Abin",lastName:"Abraham",password:"password3"}],isSignedUp:!1,isEditing:!1},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"UPDATE-PROFILE":var t=a.payload.user,n=Object(b.a)(e.users),r=n.findIndex((function(e){return e.id===t.id}));return n[r]=Object(d.a)({},n[r],{},t),Object(d.a)({},e,{isEditing:!1,users:n});case"EDIT-USER":return Object(d.a)({},e,{isEditing:!0});case"CANCEL-EDIT-USER":return Object(d.a)({},e,{isEditing:!1});case"SIGN_UP":var i=a.payload.signedUpUser,c=Object(d.a)({},i,{id:N(e.users)});return Object(d.a)({},e,{isSignedUp:!0,users:[].concat(Object(b.a)(e.users),[c])});default:return e}},N=function(e){return Math.max.apply(Math,e.map((function(e){return e.id})))+1},h=function(e){return Object(u.c)({userAccount:f,userProfiles:v,router:Object(s.b)(e)})},y=m.a(),O=[Object(o.a)(y)],j=u.d.apply(void 0,[u.a.apply(void 0,O)].concat([])),w=Object(u.e)(h(y),{},j),U=t(7),S=t(9),I=t(37),C=Object(S.g)(Object(l.c)((function(e){return{isSignedIn:e.userAccount.signedIn}}))((function(e){var a=e.component,t=e.isSignedIn,n=Object(I.a)(e,["component","isSignedIn"]);return r.a.createElement(S.b,Object.assign({},n,{render:function(e){return!0===t?r.a.createElement(a,e):r.a.createElement(S.a,{to:{pathname:"/sign-in",state:{from:e.location}}})}}))}))),k=t(13),A=t(11);t(53);var P=function(e){var a=e.name,t=e.type,n=e.placeholder,i=e.onChange,c=e.className,l=e.value,s=e.label;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:a},s),r.a.createElement("input",{id:a,name:a,type:t,placeholder:n,onChange:i,value:l,className:"form-control ".concat(c)}))},x=function(e){var a=e.type,t=void 0===a?"button":a,n=e.className,i=void 0===n?"":n,c=e.buttonClicked,l=e.label,s=void 0===l?"":l;return r.a.createElement("button",{type:t,className:"btn rounded ".concat(i),onClick:c},s)},L=(t(54),function(e){var a=e.title,t=e.children;return r.a.createElement("div",{className:"auth-wrapper"},r.a.createElement("h2",null,a),t)}),D=Object(l.c)((function(e){var a=e.userAccount,t=e.userProfiles;return{isSignedIn:a.signedIn,isSignedUp:t.isSignedUp,users:t.users}}),(function(e){return{signInUser:function(a,t,n){return e(function(e,a,t){return y.push("/"),{type:"SIGN-IN",payload:{email:e,password:a,users:t}}}(a,t,n))}}}))((function(e){var a=e.isSignedIn,t=e.isSignedUp,i=e.signInUser,c=e.users,l={email:"",password:""},s=Object(n.useState)(l),u=Object(A.a)(s,2),o=u[0],m=u[1],p=o.email,f=o.password,E=function(e){var a=e.target,t=a.name,n=a.value;m((function(e){return Object(d.a)({},e,Object(k.a)({},t,n))}))};return r.a.createElement("div",{className:"center-form"},a?r.a.createElement("p",null,"Already Signed In"):r.a.createElement(L,{title:t?"Now Sign In":"Fresh-Sign In"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),p&&f&&(i(p,f,c),m(l))}},r.a.createElement(P,{label:"Email",name:"email",type:"email",value:p,onChange:E,placeholder:"Enter email...",required:!0,className:"input"}),r.a.createElement(P,{label:"Password",name:"password",type:"password",value:f,onChange:E,placeholder:"Enter password...",required:!0,className:"input"}),r.a.createElement("div",{className:"pt-3"},r.a.createElement(x,{type:"submit",label:"Sign In",className:"btn-primary mr-3"}),r.a.createElement(U.b,{to:"sign-up",className:"btn rounded btn-outline-primary"},"Sign Up")))))})),F=Object(l.c)(null,(function(e){return{signUpUser:function(a){return e((t=a,y.push("/sign-in"),{type:"SIGN_UP",payload:{signedUpUser:t}}));var t}}}))((function(e){var a=e.signUpUser,t={firstName:"",lastName:"",email:"",password:""},i=Object(n.useState)(t),c=Object(A.a)(i,2),l=c[0],s=c[1],u=function(e){var a=e.target,t=a.name,n=a.value;s((function(e){return Object(d.a)({},e,Object(k.a)({},t,n))}))};return r.a.createElement("div",{className:"col-12"},r.a.createElement(L,{title:"Sign Up"},r.a.createElement("form",{name:"form",onSubmit:function(e){e.preventDefault(),l.firstName&&l.lastName&&l.email&&l.password&&(a(l),s(t))}},r.a.createElement(P,{label:"First Name",name:"firstName",type:"text",value:l.firstName,onChange:u,placeholder:"Enter First Name",required:!0,className:"input"}),r.a.createElement(P,{label:"Last Name",name:"lastName",type:"text",value:l.lastName,onChange:u,placeholder:"Enter Last Name",required:!0,className:"input"}),r.a.createElement(P,{label:"Email",name:"email",type:"email",value:l.email,onChange:u,placeholder:"Enter email...",required:!0,className:"input"}),r.a.createElement(P,{label:"Password",name:"password",type:"password",value:l.password,onChange:u,placeholder:"Enter password...",required:!0,className:"input"}),r.a.createElement(x,{type:"submit",label:"Sign Up",className:"btn-primary mr-3"}),r.a.createElement(U.b,{to:"sign-in"},r.a.createElement(x,{type:"button",label:"Cancel",className:"btn-secondary"})))))})),T=(t(55),function(e){var a=e.user,t=a.email,n=a.firstName,i=a.lastName,c=a.id;return r.a.createElement("div",{className:"user-list-row"},r.a.createElement(U.b,{to:"/profile/".concat(c)},r.a.createElement("h5",null,"".concat(n," ").concat(i))),r.a.createElement("span",{className:"small"},t))}),q=Object(l.c)((function(e){var a=e.userProfiles,t=e.userAccount;return{users:a.users,activeUser:t.activeUser}}))((function(e){var a=e.users,t=e.activeUser,i=Object(n.useState)(""),c=Object(A.a)(i,2),l=c[0],s=c[1],u=Object(n.useState)([]),o=Object(A.a)(u,2),m=o[0],d=o[1];Object(n.useEffect)((function(){d(a),s("")}),[a]);var p=function(e,a){return Object(b.a)(e).filter((function(e){var t=e.firstName,n=e.email,r=e.lastName;return t.toLowerCase().includes(a)||r.toLowerCase().includes(a)||n.toLowerCase().includes(a)}))};return r.a.createElement("div",null,r.a.createElement(P,{label:"Search",name:"search",type:"text",value:l,onChange:function(e){s(e.target.value),d(p(a,e.target.value.toLowerCase()))},placeholder:"Search by Name or Email",className:"input"}),r.a.createElement("div",{className:"user-lists"},m.map((function(e){return e.id!==t.id&&r.a.createElement(T,{key:e.id,user:e})}))))})),G=t(35),R=t.n(G),M=function(e){var a=e.user,t=a.email,n=a.firstName,i=a.lastName,c=a.id;return r.a.createElement("div",{className:"pb-3 d-flex"},r.a.createElement("img",{width:100,height:100,src:R.a,alt:"profile",title:"profile image"}),r.a.createElement("div",{className:"px-3 py-2"},r.a.createElement(U.b,{to:"/profile/".concat(c)},r.a.createElement("div",{className:"title"},"".concat(n," ").concat(i))),r.a.createElement("span",{className:"email-id font-weight-lighter"},t)))},J=Object(l.c)((function(e){return{user:e.userAccount.activeUser}}))((function(e){var a=e.user;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-4"},r.a.createElement(M,{user:a})),r.a.createElement("div",{className:"col-12 col-md-8"},r.a.createElement("h2",null,"All Users List"),r.a.createElement(q,null)))})),K=function(e){var a=e.user,t=e.updateProfile,i=e.cancelEditing,c=Object(n.useState)(a),l=Object(A.a)(c,2),s=l[0],u=l[1],o=function(e){var a=e.target,t=a.name,n=a.value;u((function(e){return Object(d.a)({},e,Object(k.a)({},t,n))}))};return r.a.createElement("div",{className:"w-50"},r.a.createElement(P,{label:"First Name",name:"firstName",type:"text",onChange:o,value:s.firstName,className:"input"}),r.a.createElement(P,{label:"Last Name",name:"lastName",onChange:o,type:"text",value:s.lastName,className:"input"}),r.a.createElement(P,{label:"Email",onChange:o,name:"email",type:"email",value:s.email,className:"input"}),r.a.createElement(x,{type:"button",label:"Update",className:"btn-primary mr-3",buttonClicked:function(e){t(s)}}),r.a.createElement(x,{type:"button",label:"Cancel",className:"btn-outline-primary",buttonClicked:i}))},_=(t(56),function(e){var a=e.user,t=e.children,n=a.firstName,i=a.lastName,c=a.email;return r.a.createElement("div",{className:"profile-info"},r.a.createElement("h5",null,"".concat(n," ").concat(i)),r.a.createElement("p",null,c),t)}),B=[{path:"/",key:"home",label:"Home",exact:!0,isAuth:!0,component:J},{path:"/sign-in",key:"sign-in",label:"Sign In",component:D},{path:"/sign-up",key:"sign-up",component:F},{path:"/sign-out",key:"sign-out",label:"Sign Out",isAuth:!0,component:function(){return r.a.createElement(S.a,{to:"/"})}},{path:"/profile/:id",key:"profile",component:Object(l.c)((function(e,a){var t=e.userProfiles,n=e.userAccount,r=a.match.params.id;return{users:t.users,isEditing:t.isEditing,activeUser:n.activeUser,currentUserId:Number(r)}}),(function(e){return{editUser:function(){return e({type:"EDIT-USER"})},cancelEditing:function(){return e({type:"CANCEL-EDIT-USER"})},updateProfile:function(a){return e(function(e){return{type:"UPDATE-PROFILE",payload:{user:e}}}(a))}}}))((function(e){var a=e.users,t=e.currentUserId,i=e.activeUser,c=e.isEditing,l=e.updateProfile,s=e.cancelEditing,u=e.editUser,o=Object(n.useState)({}),m=Object(A.a)(o,2),d=m[0],p=m[1];return Object(n.useEffect)((function(){p(a.find((function(e){return e.id===t})))}),[a,t]),r.a.createElement(n.Fragment,null,r.a.createElement("h2",null,"Profile Details"),c?r.a.createElement(K,{user:d,updateProfile:l,cancelEditing:s}):r.a.createElement(_,{user:d},i.id===d.id&&r.a.createElement(x,{type:"button",label:"Edit Profile",className:"btn-primary",buttonClicked:u})))}))}],H=Object(S.g)((function(){return r.a.createElement(U.a,null,r.a.createElement(S.d,null,B.map((function(e){return e.component&&(e.isAuth?r.a.createElement(C,e):r.a.createElement(S.b,e))}))))})),W=(t(57),function(){return r.a.createElement("footer",{className:"py-4"},r.a.createElement("div",{className:"container"},r.a.createElement("p",null,"\xa9copyright Kalido FE Test")))}),Z=(t(58),function(){return r.a.createElement(U.b,{to:"/",className:"navbar-brand"},r.a.createElement("img",{src:"https://www.kalido.me/wp-content/themes/kalido-theme/img/logo.svg",alt:"Kalido",width:"150"}))}),z=(t(59),function(e){var a=e.isAuthenticated,t=e.signOutUser;return r.a.createElement("ul",{className:"nav justify-content-end"},B.map((function(e,n){return function(e){var n="",i=a?e.isAuth:!e.isAuth;return e.label&&(n=i&&r.a.createElement("li",{key:e.key,className:"nav-item ".concat(e.key),onClick:a&&"sign-out"===e.key?t:null},r.a.createElement(U.c,{className:"nav-link p-3",to:e.path,exact:e.exact},e.label))),n}(e)})))}),Q=function(e){return r.a.createElement("header",{className:"sticky-top navbar bg-dark p-0"},r.a.createElement("div",{className:"container"},r.a.createElement(Z,null),r.a.createElement(z,e)))},V=Object(l.c)((function(e){return{isSignedIn:e.userAccount.signedIn}}),(function(e){return{signOutUser:function(){return e({type:"SIGN-OUT"})}}}))((function(e){var a=e.isSignedIn,t=e.signOutUser;return r.a.createElement(n.Fragment,null,r.a.createElement(Q,{isAuthenticated:a,signOutUser:t}),r.a.createElement("main",{className:"container"},r.a.createElement(H,null)),r.a.createElement(W,null))}));t(60);c.a.render(r.a.createElement(l.a,{store:w},r.a.createElement(s.a,{history:y},r.a.createElement(V,null))),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.6eafe40d.chunk.js.map