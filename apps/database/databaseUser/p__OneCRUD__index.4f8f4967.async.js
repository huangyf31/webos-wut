"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[812],{25671:function(re,g,n){n.r(g);var b=n(44463),x=n.n(b),B=n(35290),P=n.n(B),R=n(411),I=n.n(R),U=n(30279),r=n.n(U),A=n(46686),D=n.n(A),W=n(80366),L=n(16498),h=n(19085),c=n(6042),t=n(95201),p=n(53049),Z=n(82947),M=n(81656),C=n(93236),F=n(93438),K=n.n(F),S=n(63169),e=n(62086),J=["key","name"],oe=c.Z.Option,V=[{label:"Mysql\u6570\u636E\u5E93",value:"mysql"},{label:"Sqlite\u6570\u636E\u5E93",value:"sqlite"},{label:"MongoDB\u6570\u636E\u5E93",value:"mongodb"}],q=[{label:"\u67E5\u627E",value:"find"}],Q=[{label:"\u5DE5\u5382\u6A21\u578B",value:"Factory"},{label:"\u8BBE\u5907\u6A21\u578B",value:"Device"}],$={msg:"\u6210\u529F",code:200,data:{}};g.default=function(){var k=t.Z.useForm(),z=D()(k,1),T=z[0],G=(0,C.useState)("mysql"),v=D()(G,2),y=v[0],H=v[1],N=(0,C.useState)(""),O=D()(N,2),X=O[0],Y=O[1],w=(0,C.useState)($),f=D()(w,2),ee=f[0],_e=f[1],ne=function(_){if(_.databaseType==="mysql"||_.databaseType==="sqlite")j(r()(r()({},_),{},{data:{sql:_.sql}}));else if(_.databaseType==="mongodb"){var o=_.model,m=_.operate,l={},s={};if(l.model=o,l.operate=m,l.databaseType=_.databaseType,_.modelData)if(_.modelData.length===1&&_.operate==="update"){var i={};_.modelData.forEach(function(a){i.prevProperty=a.property,i.prevValue=a.value,i.newValue=a.newValue,i.newProperty=a.newProperty}),l.updateParams=i}else if(_.modelData.length===1&&_.operate==="find"){var u={};_.modelData.forEach(function(a){u.property=a.property,u.value=a.value}),l.findParams=u}else if(_.modelData.length===1&&_.operate==="delete"){var d={};_.modelData.forEach(function(a){d.property=a.property,d.value=a.value}),l.findParams=d}else _.modelData.length>1&&(_.modelData.forEach(function(a){console.log(a);var se=a.property,le=a.value;s[se]=le}),l["".concat(o.toLowerCase())]=s);console.log(l),j(l)}},ae=function(_){console.log(_),H(_),T.setFieldsValue({sights:[]})},te=function(_){Y(_)},j=function(){var E=I()(P()().mark(function _(o){var m;return P()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return console.log(o),s.next=3,(0,S.request)("http://111.4.83.67:59000/request",{method:"post",data:o,requestType:"json"});case 3:m=s.sent,_e(m);case 5:case"end":return s.stop()}},_)}));return function(o){return E.apply(this,arguments)}}();return(0,e.jsx)("div",{style:{background:"#F5F7FA"},children:(0,e.jsxs)(h._zJ,{header:{title:"\u6570\u636E\u5E93\u5C01\u88C5",ghost:!0},children:[(0,e.jsx)(h.QWM,{direction:"column",ghost:!0,gutter:[0,16],children:(0,e.jsx)(h.QWM,{colSpan:24,bordered:!0,title:"\u6570\u636E\u5E93\u8BF7\u6C42\u53C2\u6570",children:(0,e.jsxs)(t.Z,{form:T,name:"dynamic_form_nest_item",onFinish:ne,style:{width:"50%"},size:"middle",autoComplete:"off",children:[(0,e.jsx)(t.Z.Item,{name:"databaseType",label:"\u6570\u636E\u5E93\u7C7B\u578B",children:(0,e.jsx)(c.Z,{options:V,onChange:ae})}),(0,e.jsx)(t.Z.Item,{name:"operate",label:"\u64CD\u4F5C",children:(0,e.jsx)(c.Z,{options:q,onChange:te})}),y==="mysql"||y==="sqlite"?(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(t.Z.Item,{name:"sql",label:"Sql\u8BED\u53E5",children:(0,e.jsx)(p.Z,{})})}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(t.Z.Item,{name:"model",label:"\u6A21\u578B\u9009\u62E9",children:(0,e.jsx)(c.Z,{options:Q})}),(0,e.jsx)(t.Z.List,{name:"modelData",children:function(_,o){var m=o.add,l=o.remove;return(0,e.jsxs)(e.Fragment,{children:[_.map(function(s){var i=s.key,u=s.name,d=x()(s,J);return(0,e.jsxs)(Z.Z,{align:"baseline",style:{display:"flex",marginBottom:8},children:[(0,e.jsx)(t.Z.Item,r()(r()({},d),{},{name:[u,"property"],rules:[{required:!0,message:"Missing first name"}],children:(0,e.jsx)(p.Z,{placeholder:"\u8F93\u5165\u6A21\u578B\u7684\u5C5E\u6027\u540D"})})),(0,e.jsx)(t.Z.Item,r()(r()({},d),{},{name:[u,"value"],rules:[{required:!0,message:"Missing last name"}],children:(0,e.jsx)(p.Z,{placeholder:"\u8F93\u5165\u6A21\u578B\u7684\u5C5E\u6027\u503C"})})),X==="update"?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(t.Z.Item,r()(r()({},d),{},{name:[u,"newProperty"],rules:[{required:!0,message:"Missing last name"}],children:(0,e.jsx)(p.Z,{placeholder:"\u9700\u8981\u66F4\u65B0\u7684\u5C5E\u6027\u540D"})})),(0,e.jsx)(t.Z.Item,r()(r()({},d),{},{name:[u,"newValue"],rules:[{required:!0,message:"Missing last name"}],children:(0,e.jsx)(p.Z,{placeholder:"\u9700\u8981\u66F4\u65B0\u7684\u5C5E\u6027\u503C"})}))]}):null,(0,e.jsx)(W.Z,{onClick:function(){return l(u)}})]},i)}),(0,e.jsx)(t.Z.Item,{children:(0,e.jsx)(M.Z,{type:"dashed",onClick:function(){return m()},block:!0,icon:(0,e.jsx)(L.Z,{}),children:"\u5C5E\u6027\u503C"})})]})}})]}),(0,e.jsx)(t.Z.Item,{children:(0,e.jsx)(M.Z,{type:"primary",htmlType:"submit",children:"\u63D0\u4EA4"})})]})})}),(0,e.jsx)(h.QWM,{colSpan:24,bordered:!0,gutter:[16,0],style:{marginTop:20},title:"\u63A5\u53E3\u8FD4\u56DE\u6570\u636E\u5C55\u793A",children:(0,e.jsx)(K(),{src:JSON.parse(JSON.stringify(ee))})})]})})}}}]);
