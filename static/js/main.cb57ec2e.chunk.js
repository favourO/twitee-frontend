(this.webpackJsonpTwitee=this.webpackJsonpTwitee||[]).push([[0],{259:function(e,t,a){},261:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(22),c=a.n(n),r=a(44),i=a(116),j=a(71),l=a(138),b=a(23),o=a(265),d=(a(109),a(267)),u=a(268),m=a(269),O=a(271),h=a(148),x=a(6),p=function(e){e.simplified;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(d.a.Text,{children:"Login"}),Object(x.jsxs)(u.a,{name:"basic",labelCol:{span:4},wrapperCol:{span:8},initialValues:{remember:!0},children:[Object(x.jsx)(u.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your Username!"}],children:Object(x.jsx)(m.a,{})}),Object(x.jsx)(u.a.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Please input your email!"}],children:Object(x.jsx)(m.a,{})}),Object(x.jsx)(u.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(x.jsx)(m.a.Password,{})}),Object(x.jsx)(u.a.Item,{name:"remember",valuePropName:"checked",wrapperCol:{offset:8,span:16},children:Object(x.jsx)(O.a,{children:"Remember me"})}),Object(x.jsx)(u.a.Item,{wrapperCol:{offset:8,span:16},children:Object(x.jsx)(h.a,{type:"primary",htmlType:"submit",children:"Submit"})})]})]})},f=a(47),w=a(74),v=a.n(w),g=a(270),y=(a(264),d.a.Text),I=(g.a.Panel,function(e){var t=function(e){var t=Object(s.useState)(e),a=Object(f.a)(t,2),n=a[0],c=a[1];return{value:n,onChange:function(e){c(e.target.value)}}},a=Object(s.useState)(!1),n=Object(f.a)(a,2),c=n[0],r=n[1],i=t(""),j=t(""),l=Object(s.useState)(null),b=Object(f.a)(l,2),o=(b[0],b[1]);return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(y,{children:"Login"}),Object(x.jsxs)(u.a,{name:"basic",labelCol:{span:4},wrapperCol:{span:8},initialValues:{remember:!0},children:[Object(x.jsx)(u.a.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Please input your email!"}],children:Object(x.jsx)(m.a,{})}),Object(x.jsx)(u.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(x.jsx)(m.a.Password,{})}),Object(x.jsx)(u.a.Item,{name:"remember",valuePropName:"checked",wrapperCol:{offset:8,span:16},children:Object(x.jsx)(O.a,{children:"Remember me"})}),Object(x.jsx)(u.a.Item,{wrapperCol:{offset:8,span:16},children:Object(x.jsx)(h.a,{type:"primary",onClick:function(){o(null),r(!0),v.a.post("http://localhost:4000//api/twitee/auth",{username:i.value,password:j.value}).then((function(t){var a,s;r(!1),a=t.data.token,s=t.data.user,sessionStorage.setItem("token",a),sessionStorage.setItem("user",JSON.stringify(s)),e.history.push("/home")})).catch((function(e){r(!1),401===e.response.status?o(e.response.data.message):o("Something went wrong. Please try again later.")}))},disabled:c,htmlType:"submit",children:"Submit"})})]})]})}),T=a(86),C=a.n(T),S=a(145),k=a(273),N=a(266),P=a(146),E=a.n(P);function L(e){return Object(x.jsx)(x.Fragment,{children:function(e){var t=e.twits;return t.length>0?t.map((function(e,t){return console.log(e),Object(x.jsx)(k.b,{direction:"vertical",children:Object(x.jsxs)(N.a,{style:{width:300},children:[Object(x.jsx)("p",{children:e.title}),Object(x.jsx)("p",{children:E()(e.createdAt).fromNow()}),Object(x.jsx)(h.a,{children:"Comment"}),Object(x.jsxs)(h.a,{children:[e.likes," likes"]})]})})})):Object(x.jsx)("h3",{children:"No Twits yet"})}(e)})}d.a.Title;var q=function(){var e=Object(s.useState)(""),t=Object(f.a)(e,2),a=t[0],n=t[1];Object(s.useEffect)((function(){c()}),[]);var c=function(){var e=Object(S.a)(C.a.mark((function e(){var t,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("http://159.223.107.251/api/twitee/twits");case 3:t=e.sent,a=t.data.data,n(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(u.a,{children:[Object(x.jsx)(d.a.Text,{children:"Write Something"}),Object(x.jsx)(u.a.Item,{label:"Twit",children:Object(x.jsx)(m.a.TextArea,{})}),Object(x.jsx)(u.a.Item,{children:Object(x.jsx)(h.a,{type:"primary",htmlType:"submit",children:"Submit"})})]}),Object(x.jsx)(L,{twits:a})]})},F=a(272),A=a(274),R=a(275),J=a(276),z=a(277),H=function(){var e=Object(s.useState)(!0),t=Object(f.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)(null),i=Object(f.a)(c,2),j=i[0],l=i[1];return Object(s.useEffect)((function(){var e=function(){return l(window.innerWidth)};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),Object(s.useEffect)((function(){n(!(j<760))}),[j]),Object(x.jsxs)("div",{className:"nav-container",children:[Object(x.jsxs)("div",{className:"logo-container",children:[Object(x.jsx)(d.a.Title,{level:2,className:"logo",children:Object(x.jsx)(r.b,{to:"/",children:"Twitee"})}),Object(x.jsx)(h.a,{className:"menu-control-container",onClick:function(){return n(!a)},children:Object(x.jsx)(A.a,{})})]}),a&&Object(x.jsxs)(F.a,{theme:"dark",children:[Object(x.jsx)(F.a.Item,{icon:Object(x.jsx)(R.a,{}),children:Object(x.jsx)(r.b,{to:"/",children:"Home"})}),Object(x.jsx)(F.a.Item,{icon:Object(x.jsx)(J.a,{}),children:Object(x.jsx)(r.b,{to:"/login",children:"Login"})}),Object(x.jsx)(F.a.Item,{icon:Object(x.jsx)(z.a,{}),children:Object(x.jsx)(r.b,{to:"/register",children:"Register"})})]})]})},U=(a(259),function(){return Object(x.jsxs)("div",{className:"app",children:[Object(x.jsx)("div",{className:"navbar",children:Object(x.jsx)(H,{})}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{className:"main",children:Object(x.jsx)(o.a,{children:Object(x.jsx)("div",{className:"routes",children:Object(x.jsxs)(b.c,{children:[Object(x.jsx)(b.a,{exact:!0,path:"/",children:Object(x.jsx)(q,{})}),Object(x.jsx)(b.a,{exact:!0,path:"/login",children:Object(x.jsx)(I,{})}),Object(x.jsx)(b.a,{exact:!0,path:"/register",children:Object(x.jsx)(p,{})})]})})})})]})}),V=a(149),W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ALL":return t.payload;case"CREATE":return[].concat(Object(V.a)(e),[t.payload]);default:return e}},B=Object(j.b)({twits:W}),_=(a(260),Object(j.d)(B,Object(j.c)(Object(j.a)(l.a))));c.a.render(Object(x.jsx)(r.a,{children:Object(x.jsx)(i.a,{store:_,children:Object(x.jsx)(U,{})})}),document.getElementById("root"))}},[[261,1,2]]]);
//# sourceMappingURL=main.cb57ec2e.chunk.js.map