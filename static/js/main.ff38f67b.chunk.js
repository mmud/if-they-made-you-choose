(this.webpackJsonpmytemp=this.webpackJsonpmytemp||[]).push([[0],{45:function(t,e,c){},46:function(t,e,c){},49:function(t,e,c){},61:function(t,e,c){},62:function(t,e,c){"use strict";c.r(e);var n=c(9),r=c.n(n),o=c(37),a=c.n(o),s=(c(45),c(46),c(39)),u=c(12),i=c(0),b=c.n(i),d=c(23),j=c(2),l=c(10),h=c(38),f=c(15),O=c(40),m=Object(h.a)({apiKey:"AIzaSyB2PhDe6IKwjqNuBz3CIRx0LkocaTVwxts",authDomain:"lw-khearok.firebaseapp.com",projectId:"lw-khearok",storageBucket:"lw-khearok.appspot.com",messagingSenderId:"744636530333",appId:"1:744636530333:web:df59cf5f362b632964de74"}),p=Object(f.e)(m),x=(Object(O.a)(m),c(49),c(5),c(11));function _(){var t="",e=Object(n.useState)(""),c=Object(l.a)(e,2),r=c[0],o=c[1],a=Object(n.useState)(""),s=Object(l.a)(a,2),u=s[0],i=s[1],h=Object(n.useState)(null),O=Object(l.a)(h,2),m=O[0],_=O[1],v=null,N=Object(n.useState)(!0),w=Object(l.a)(N,2),k=w[0],g=w[1],y=function(){var e=Object(j.a)(b.a.mark((function e(){var c,n,r,a,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,e=Math.random()*t;return e=Math.floor(e)},g(!0),o(null),n=Object(f.b)(p,"count"),e.next=6,Object(f.d)(n);case 6:return r=e.sent,i(r.docs.map((function(t){return Object(d.a)(Object(d.a)({},t.data()),{},{id:t.id})}))),a=c(u&&u[0].count),console.log(a),e.next=12,Object(f.d)(Object(f.g)(Object(f.b)(p,"data"),Object(f.f)(1),Object(f.i)("id","==","".concat(a))));case 12:s=e.sent,t=s&&s.docs.map((function(t){return Object(d.a)(Object(d.a)({},t.data()),{},{id:t.id})})),o(t),console.log(t),v=t&&t[0].id,console.log(v),_(v);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var t=Object(j.a)(b.a.mark((function t(){var e,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(f.c)(p,"data",m),c={first_count:Number(r[0].first_count)+1},o([{first_count:Number(r[0].first_count)+1,scond_count:r[0].scond_count,first_choose:r[0].first_choose,scond_choose:r[0].scond_choose}]),I(),t.next=6,Object(f.h)(e,c);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),C=function(){var t=Object(j.a)(b.a.mark((function t(){var e,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(f.c)(p,"data",m),c={scond_count:Number(r[0].scond_count)+1},o([{first_count:r[0].first_count,scond_count:Number(r[0].scond_count)+1,first_choose:r[0].first_choose,scond_choose:r[0].scond_choose}]),I(),t.next=6,Object(f.h)(e,c);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),I=function(){g(!1)};return""==r?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"whead",children:"\u0644\u0648 \u062e\u064a\u0631\u0648\u0643"}),Object(x.jsx)("button",{onClick:y,className:"startbutton",children:"\u0627\u0636\u063a\u0637 \u0644\u0644\u0628\u062f\u0621"})]}):null==r?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"whead",children:"\u0644\u0648 \u062e\u064a\u0631\u0648\u0643"}),Object(x.jsx)("div",{className:"loading",children:"Loading..."})]}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"whead",children:"\u0644\u0648 \u062e\u064a\u0631\u0648\u0643"}),Object(x.jsxs)("div",{className:"cont",children:[k?Object(x.jsx)("div",{className:"left box",onClick:S,children:r[0].first_choose}):Object(x.jsxs)("div",{className:"left box",style:{width:"".concat(Math.round(Number(r[0].first_count)/(Number(r[0].first_count)+Number(r[0].scond_count))*100),"%")},children:[Math.round(Number(r[0].first_count)/(Number(r[0].first_count)+Number(r[0].scond_count))*100),"%"]}),k?Object(x.jsx)("div",{className:"right box",onClick:C,children:r[0].scond_choose}):Object(x.jsxs)("div",{className:"right box",style:{width:"".concat(Math.round(Number(r[0].scond_count)/(Number(r[0].first_count)+Number(r[0].scond_count))*100),"%")},children:[Math.round(Number(r[0].scond_count)/(Number(r[0].first_count)+Number(r[0].scond_count))*100),"%"]})]}),Object(x.jsx)("button",{onClick:y,className:"nextbutton",children:"\u0627\u0644\u062a\u0627\u0644\u064a"})]})}var v=c(32),N=c.n(v);c(61);function w(){var t=Object(n.useState)(""),e=Object(l.a)(t,2),c=e[0],r=e[1],o=Object(n.useState)(""),a=Object(l.a)(o,2),s=a[0],u=a[1],i=0,h=Object(n.useRef)(null),O=Object(n.useRef)(null),m=function(){var t=Object(j.a)(b.a.mark((function t(){var e,n,o,a,j;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""==h.current.value.trim()||""==O.current.value.trim()){t.next=20;break}return e=Object(f.b)(p,"count"),t.next=4,Object(f.d)(e);case 4:return n=t.sent,i=n.docs.map((function(t){return Object(d.a)(Object(d.a)({},t.data()),{},{id:t.id})})),o=Object(f.b)(p,"data"),t.next=9,Object(f.a)(o,{first_choose:c,scond_choose:s,id:"".concat(i[0].count),first_count:1,scond_count:1});case 9:return a=Object(f.c)(p,"count","count"),j={count:i[0].count+1},t.next=13,Object(f.h)(a,j);case 13:h.current.value="",O.current.value="",r(""),u(""),N.a.fire({title:"Done",icon:"success",confirmButtonText:"okey"}),t.next=21;break;case 20:N.a.fire({title:"the input is empty",icon:"error",confirmButtonText:"okey"});case 21:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"whead",children:"add"}),Object(x.jsx)("input",{className:"winput",type:"text",ref:h,placeholder:"name1",onChange:function(t){r(t.target.value)}}),Object(x.jsx)("input",{className:"winput",type:"text",ref:O,placeholder:"name2",onChange:function(t){u(t.target.value)}}),Object(x.jsx)("button",{className:"wbutton",onClick:m,children:"create"})]})}var k=function(){return Object(x.jsx)(s.a,{children:Object(x.jsxs)(u.c,{children:[Object(x.jsx)(u.a,{path:"if-they-made-you-choose/",element:Object(x.jsx)(_,{})}),Object(x.jsx)(u.a,{path:"if-they-made-you-choose/add",element:Object(x.jsx)(w,{})})]})})};a.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(k,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.ff38f67b.chunk.js.map