(this.webpackJsonpdimsta=this.webpackJsonpdimsta||[]).push([[0],{53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),s=a(18),r=a.n(s),o=(a(53),a(16)),i=(a(54),a(55),a(27)),l=i.a.initializeApp({apiKey:"AIzaSyDdx0y932gQAgHradtc0PdZgSHthcCxGMY",authDomain:"dimsta-a7cec.firebaseapp.com",projectId:"dimsta-a7cec",storageBucket:"dimsta-a7cec.appspot.com",messagingSenderId:"693010839702",appId:"1:693010839702:web:d2bd77092800b6b9e92ab7",measurementId:"G-LZJYG4E997"}).firestore(),u=i.a.auth(),d=i.a.storage(),j=a(94),p=a.p+"static/media/myava.92d77e0b.jpg",m=a(5),b=function(e){var t=e.postId,a=e.user,c=e.username,s=e.caption,r=e.imageURL,u=Object(n.useState)([]),d=Object(o.a)(u,2),b=d[0],h=d[1],O=Object(n.useState)(""),f=Object(o.a)(O,2),g=f[0],x=f[1];Object(n.useEffect)((function(){var e;return t&&(e=l.collection("posts").doc(t).collection("comments").orderBy("timestamp","desc").onSnapshot((function(e){h(e.docs.map((function(e){return e.data()})))}))),function(){e()}}),[t]);return Object(m.jsxs)("div",{className:"Post",children:[Object(m.jsxs)("div",{className:"Post__header",children:[Object(m.jsx)(j.a,{className:"Post__avatar",scr:p,alt:"my Avatar"}),Object(m.jsx)("h2",{children:c})]}),Object(m.jsx)("img",{className:"Post__image",src:r,alt:"Me..."}),Object(m.jsxs)("h4",{className:"Post__text",children:[Object(m.jsx)("strong",{children:c})," ",s]}),Object(m.jsx)("div",{className:"post_Comments",children:b.map((function(e){return Object(m.jsxs)("p",{children:[Object(m.jsxs)("strong",{children:[" ",e.username," "]}),e.text]})}))}),a&&Object(m.jsxs)("form",{className:"post_CommentBox",children:[Object(m.jsx)("input",{className:"post_input",type:"text",placeholder:"Add a comment...",value:g,onChange:function(e){return x(e.target.value)}}),Object(m.jsx)("button",{className:"post_button",disabled:!g,type:"submit",onClick:function(e){e.preventDefault(),l.collection("posts").doc(t).collection("comments").add({timestamp:i.a.firestore.FieldValue.serverTimestamp(),text:g,username:a.displayName}),x("")},children:"Post "})]})]})},h=a(90),O=a(91),f=a(93),g=a(92),x=a(45);a(66);var v=function(e){var t=e.username,a=Object(n.useState)(""),c=Object(o.a)(a,2),s=c[0],r=c[1],i=Object(n.useState)(null),u=Object(o.a)(i,2),j=u[0],p=u[1],b=Object(n.useState)(0),h=Object(o.a)(b,2),O=h[0],f=h[1];return Object(m.jsxs)("div",{className:"ImageUpload",children:[Object(m.jsx)("progress",{className:"ImageUpload__progress",value:O,max:"100"}),Object(m.jsx)("input",{type:"text",placeholder:"Enter a Caption",onChange:function(e){return r(e.target.value)}}),Object(m.jsx)("input",{type:"file",onChange:function(e){e.target.files[0]&&p(e.target.files[0])}}),Object(m.jsx)(g.a,{onClick:function(){d.ref("images/".concat(j.name)).put(j).on("state_changed",(function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);f(t)}),(function(e){console.log(e),alert(e.message)}),(function(){d.ref("images").child(j.name).getDownloadURL().then((function(e){l.collection("posts").add({timestamp:x.a.firestore.FieldValue.serverTimestamp(),caption:s,imageURL:e,username:t}),f(0),r(""),p(null)}))}))},variant:"contained",color:"secondry",children:"Upload"})]})};function S(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var y=Object(h.a)((function(e){return{paper:{position:"absolute",width:350,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));var C=function(){var e=y(),t=Object(n.useState)(!1),a=Object(o.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)(S),i=Object(o.a)(r,1)[0],d=Object(n.useState)([]),j=Object(o.a)(d,2),p=j[0],h=j[1],x=Object(n.useState)(!1),C=Object(o.a)(x,2),N=C[0],_=C[1],I=Object(n.useState)(""),w=Object(o.a)(I,2),A=w[0],k=w[1],P=Object(n.useState)(""),U=Object(o.a)(P,2),D=U[0],L=U[1],E=Object(n.useState)(""),T=Object(o.a)(E,2),B=T[0],M=T[1],F=Object(n.useState)(null),R=Object(o.a)(F,2),G=R[0],J=R[1];return Object(n.useEffect)((function(){var e=u.onAuthStateChanged((function(e){e?(console.log(e),J(e)):J(null)}));return function(){e()}}),[G,A]),Object(n.useEffect)((function(){l.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){h(e.docs.map((function(e){return{id:e.id,post:e.data()}})))}))}),[]),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(O.a,{open:N,onClose:function(){return _(!1)},children:Object(m.jsx)("div",{style:i,className:e.paper,children:Object(m.jsxs)("form",{className:"app__signUp",children:[Object(m.jsx)("center",{className:"app__header",children:Object(m.jsx)("h1",{children:"DIMSTA"})}),Object(m.jsx)(f.a,{type:"text",placeholder:"username",value:A,onChange:function(e){return k(e.target.value)}}),Object(m.jsx)(f.a,{type:"text",placeholder:"email",value:D,onChange:function(e){return L(e.target.value)}}),Object(m.jsx)(f.a,{type:"password",placeholder:"password",value:B,onChange:function(e){return M(e.target.value)}}),Object(m.jsx)(g.a,{onClick:function(e){e.preventDefault(),u.createUserWithEmailAndPassword(D,B).then((function(e){return e.user.updateProfile({displayName:A})})).catch((function(e){return alert(e.message)})),_(!1)},children:"Sign up"})]})})}),Object(m.jsx)(O.a,{open:c,onClose:function(){return s(!1)},children:Object(m.jsx)("div",{style:i,className:e.paper,children:Object(m.jsxs)("form",{className:"app__signUp",children:[Object(m.jsx)("center",{className:"app__header",children:Object(m.jsx)("h1",{children:"DIMSTA"})}),Object(m.jsx)(f.a,{type:"text",placeholder:"email",value:D,onChange:function(e){return L(e.target.value)}}),Object(m.jsx)(f.a,{type:"password",placeholder:"password",value:B,onChange:function(e){return M(e.target.value)}}),Object(m.jsx)(g.a,{onClick:function(e){e.preventDefault(),u.signInWithEmailAndPassword(D,B).catch((function(e){return alert(e.message)})),s(!1)},children:"Sign in"})]})})}),Object(m.jsxs)("div",{className:"app__header",children:[Object(m.jsx)("h1",{children:"DIMSTA"}),G?Object(m.jsx)(g.a,{onClick:function(){return u.signOut()},children:"Log out"}):Object(m.jsxs)("div",{className:"logIn",children:[Object(m.jsx)(g.a,{onClick:function(){return _(!0)},children:"Sign up"}),Object(m.jsx)(g.a,{onClick:function(){return s(!0)},children:"Sign in"})]})]}),Object(m.jsx)("div",{className:"App_post",children:p.map((function(e){var t=e.id,a=e.post;return Object(m.jsx)(b,{postId:t,user:G,username:a.username,caption:a.caption,imageURL:a.imageURL},t)}))}),Object(m.jsx)("div",{className:"imageupl",children:(null===G||void 0===G?void 0:G.displayName)?Object(m.jsx)(v,{username:G.displayName}):Object(m.jsx)("h3",{children:"Sorry you need to log in to upload"})})]})},N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,96)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(C,{})}),document.getElementById("root")),N()}},[[67,1,2]]]);
//# sourceMappingURL=main.fa36b7ae.chunk.js.map