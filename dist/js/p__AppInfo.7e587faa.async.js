(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4,6],{"+J+N":function(e,t,a){},"0lfv":function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return c}));var n=()=>JSON.parse(localStorage.getItem("dataSource")||"{}"),r=e=>{var t=n(),a=[];return Object.keys(t).forEach((e=>a.push(...t[e].apps))),a.find((t=>t.name===e))},c=e=>localStorage.setItem("dataSource",JSON.stringify(e))},Idy6:function(e,t,a){"use strict";a.r(t);a("QE6f");var n=a("Xo8F"),r=(a("tLCQ"),a("XYLF")),c=a("VTBJ"),l=(a("ywh3"),a("+J+N"),a("QbLZ")),o=a.n(l),i=a("iCc5"),s=a.n(i),m=a("V7oC"),u=a.n(m),p=a("FYw3"),d=a.n(p),f=a("mRg0"),g=a.n(f),_=a("TSYQ"),h=a.n(_),E=a("q1tI"),b=a.n(E),v=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&(a[n[r]]=e[n[r]])}return a},y=function(e){function t(){return s()(this,t),d()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return g()(t,e),u()(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,a=e.className,n=e.children,r=e.mode,c=e.icon,l=e.onLeftClick,i=e.leftContent,s=e.rightContent,m=v(e,["prefixCls","className","children","mode","icon","onLeftClick","leftContent","rightContent"]);return E["createElement"]("div",o()({},m,{className:h()(a,t,t+"-"+r)}),E["createElement"]("div",{className:t+"-left",role:"button",onClick:l},c?E["createElement"]("span",{className:t+"-left-icon","aria-hidden":"true"},c):null,i),E["createElement"]("div",{className:t+"-title"},n),E["createElement"]("div",{className:t+"-right"},s))}}]),t}(E["Component"]),O=y;y.defaultProps={prefixCls:"am-navbar",mode:"dark",onLeftClick:function(){}};a("D2jH");var w=a("2ROE"),j=a("9kvl"),k=a("i7U8"),x=a("0lfv"),N=a("bIAK"),C=a("La0L"),I=a.n(C),L=a("I5X1"),S=e=>{var t=e.match,a=t.params,l=a.appId,o=Object(x["b"])(l),i=Object(L["a"])("initialiseModel",(e=>e)),s=i.isScriptable;return b.a.createElement(b.a.Fragment,null,b.a.createElement(O,{mode:"light",icon:b.a.createElement(w["a"],{type:"left"}),onLeftClick:()=>j["a"].goBack()}),o?b.a.createElement("div",{className:I.a.container},b.a.createElement(r["a"],{full:!0},b.a.createElement(r["a"].Header,{title:"\u7ec4\u4ef6\u4fe1\u606f",extra:s?b.a.createElement(k["CustomerIcon"],{icon:"https://img.icons8.com/clouds/344/download-2.png",onClick:()=>{var e=new CustomEvent("catalog-event",{detail:Object(c["a"])(Object(c["a"])({},o),{},{key:"downloadButtonClicked"})});window.dispatchEvent(e),console.log("\u89e6\u53d1\u4e0b\u8f7d\u529f\u80fd")}}):b.a.createElement("a",{href:o.scriptURL,download:"".concat(o.name,".js")},b.a.createElement(k["CustomerIcon"],{icon:"https://img.icons8.com/clouds/344/download-2.png"}))}),b.a.createElement(r["a"].Body,{className:I.a.container_body},b.a.createElement(n["a"],{align:"start",justify:"start"},b.a.createElement("img",{className:I.a.appImg,src:o.thumb,alt:o.name}),b.a.createElement(n["a"].Item,null,b.a.createElement(n["a"],{direction:"column",align:"start"},b.a.createElement(n["a"],null,b.a.createElement("h3",{className:I.a.appTitle},o.title)),b.a.createElement(n["a"].Item,null,b.a.createElement("div",{className:I.a.appDesc},o.description))))))),o.html&&b.a.createElement("div",{dangerouslySetInnerHTML:{__html:o.html}}),o.images&&b.a.createElement("div",{className:I.a.photos},b.a.createElement(r["a"],{full:!0},b.a.createElement(r["a"].Header,{title:"\u7ec4\u4ef6\u76f8\u518c"}),b.a.createElement(r["a"].Body,null,o.images.map(((e,t)=>b.a.createElement("img",{key:"img".concat(t),src:e,alt:""}))))))):b.a.createElement(N["a"],null,"\u6ca1\u6709\u627e\u5230\u8be5\u7ec4\u4ef6"))};t["default"]=S},La0L:function(e,t,a){e.exports={container:"container___2dK_3",container_body:"container_body___1k27R",appImg:"appImg___1MXfc",appTitle:"appTitle___2Vrw4",appDesc:"appDesc___qLGi7",photos:"photos___2UKHY"}},R0pf:function(e,t,a){e.exports={container:"container___3WbTd",widgetTitle:"widgetTitle___1Ojl9",subList:"subList___1NVQZ",avatar:"avatar___2yRWX",user_info:"user_info___1pF6R",user_title:"user_title___3VZaa",user_text:"user_text___2-KJa",extra:"extra___1Pjch",icon:"icon___38pp4"}},i7U8:function(e,t,a){"use strict";a.r(t),a.d(t,"CustomerIcon",(function(){return N}));a("mw1O");var n=a("nJCp"),r=a("VTBJ"),c=(a("tLCQ"),a("XYLF")),l=a("o0o1"),o=a.n(l),i=a("HaE+"),s=(a("RFiq"),a("ZyfH")),m=a("ODXe"),u=(a("pYJI"),a("EIQY")),p=(a("B8GA"),a("8dL9")),d=(a("QE6f"),a("Xo8F")),f=a("wx14"),g=a("Ff2n"),_=(a("puyI"),a("xZH1")),h=a("q1tI"),E=a.n(h),b=a("R0pf"),v=a.n(b),y=a("0lfv"),O=(a("HVTF"),a("OT5E")),w=a("9kvl"),j=function(){var e=Object(i["a"])(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(w["c"])(t,{method:"get"});case 2:a=e.sent;try{a.scriptable?(n=JSON.parse(localStorage.getItem("dataSource")||"{}"),n[t]=a,localStorage.setItem("dataSource",JSON.stringify(n))):O["a"].fail("\u8ba2\u9605\u5730\u5740\u9519\u8bef")}catch(r){O["a"].fail(JSON.stringify(r))}case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=a("bIAK"),x=_["a"].prompt,N=Object(h["forwardRef"])(((e,t)=>{var a=e.icon,n=Object(g["a"])(e,["icon"]);return E.a.createElement("img",Object(f["a"])({ref:t,className:v.a.icon,alt:"",src:a},n))})),C=e=>{var t=e.dataSource,a=e.update,n=e.setLoading;return E.a.createElement(u["a"],{className:v.a.subList,autoClose:!0,right:[{text:"\u66f4\u65b0",onPress:()=>(n(!0),j(t.url).then((()=>{var e=Object(y["a"])();a(e)})).finally((()=>{n(!1)}))),style:{backgroundColor:"#77cad1",color:"white"}},{text:"\u5220\u9664",onPress:()=>{var e=Object(y["a"])();delete e[t.url],Object(y["c"])(e),a(e)},style:{backgroundColor:"red",color:"white"}}],style:{marginBottom:10,padding:"10px 0"}},E.a.createElement(d["a"],null,E.a.createElement("img",{className:v.a.avatar,src:t.icon,alt:""}),E.a.createElement("div",null,E.a.createElement(d["a"],{className:v.a.user_info,direction:"column",justify:"start"},E.a.createElement("div",{className:v.a.user_title},t.author," \u7ec4\u4ef6"),E.a.createElement("div",null,t.repo),E.a.createElement("div",{className:v.a.user_text},"@",t.author))),E.a.createElement(p["a"],{text:t.counts,size:"small"}),E.a.createElement("div",{style:{marginLeft:"auto"}},E.a.createElement("a",{href:t.repo,target:"_blank"},E.a.createElement(N,{icon:"https://img.icons8.com/clouds/344/github.png",style:{width:"3rem",height:"3rem"}})))))};t["default"]=()=>{var e=Object(y["a"])(),t=E.a.useState(e),a=Object(m["a"])(t,2),l=a[0],u=a[1],p=E.a.useState(!1),d=Object(m["a"])(p,2),f=d[0],g=d[1];return E.a.createElement(n["a"],{className:v.a.container},E.a.createElement(s["a"],{toast:!0,animating:f}),E.a.createElement(c["a"],null,E.a.createElement(c["a"].Header,{className:v.a.widgetTitle,title:"\u7ec4\u4ef6\u8ba2\u9605(".concat(Object.keys(l).length,")"),extra:E.a.createElement("div",{className:v.a.extra},E.a.createElement(N,{icon:"https://img.icons8.com/clouds/344/cloud-refresh.png",onClick:Object(i["a"])(o.a.mark((function e(){var t,a,n,r;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=Object.keys(l),g(!0),a=0,n=t;case 3:if(!(a<n.length)){e.next=10;break}return r=n[a],e.next=7,j(r);case 7:a++,e.next=3;break;case 10:u(Object(y["a"])()),g(!1);case 12:case"end":return e.stop()}}),e)})))}),E.a.createElement(N,{icon:"https://img.icons8.com/clouds/344/add.png",onClick:()=>x("\u8f93\u5165\u7ec4\u4ef6\u8ba2\u9605\u5730\u5740","",[{text:"\u53d6\u6d88"},{text:"\u786e\u5b9a",onPress:function(){var e=Object(i["a"])(o.a.mark((function e(t){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return g(!0),e.next=3,j(t);case 3:u(Object(y["a"])()),g(!1);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}])}))}),E.a.createElement(c["a"].Body,{style:{minHeight:100}},Object.keys(l).length?Object.keys(l).map((e=>{var t=l[e],a=Object(r["a"])(Object(r["a"])({},t),{},{counts:t.apps.length,url:e});return E.a.createElement(C,{key:e,dataSource:a,update:u,setLoading:g})})):E.a.createElement(k["a"],{style:{height:"5rem"}},"\u6682\u672a\u6dfb\u52a0\u76f8\u5173\u8ba2\u9605"))))}}}]);