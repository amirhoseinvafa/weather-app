(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{31:function(e,t,c){},32:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c(0),r=c.n(a),i=c(11),s=c.n(i),o=(c(30),c(31),c(32),c(3)),d=c.n(o),u=c(6),j=c(5),l=c(47),m=c(48),p=c(24),h=c(18),b=c(46),f=c(50),x={transition:"opacity ".concat(300,"ms ease-in-out"),opacity:0},O={entering:{opacity:1},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}},y={city:void 0,country:void 0,temp:void 0,temp_max:void 0,temp_min:void 0,description:void 0,cod:void 0,icon:void 0},v=function(e){var t=e.data,c=e.isLoading,r=e.formData,i=e.inProp,s=Object(a.useState)(),o=Object(j.a)(s,2),d=o[0],u=o[1];return Object(a.useEffect)((function(){u(function(e){var t="wi-thunderstorm",c="wi-sleet",n="wi-storm-showers",a="wi-snow",r="wi-fog",i="wi-day-sunny",s="wi-day-fog";switch(!0){case e>=200&&e<=232:return t;case e>=300&&e<=231:return c;case e>=500&&e<=531:return n;case e>=600&&e<=622:return a;case e>=701&&e<=781:return r;case 800===e:return i;case e>=801&&e<=804:default:return s}}(t.icon))}),[t.icon]),Object(n.jsx)(n.Fragment,{children:c?Object(n.jsx)("div",{className:"d-flex justify-content-center  pt-3",children:Object(n.jsx)(b.a,{style:{width:"1.5rem",height:"1.5rem"},color:"light"})}):Object(n.jsx)(f.a,{in:i,timeout:300,children:function(e){return Object(n.jsx)("div",{style:Object(h.a)(Object(h.a)({},x),O[e]),children:Object(n.jsx)("div",{className:"d-flex justify-content-center ",children:Object(n.jsxs)("div",{className:"p-4 box ",children:[Object(n.jsxs)("h1",{className:"text-white text-center",children:[""!==r.city&&"".concat(t.city," ,")," ",t.country]}),Object(n.jsx)("h5",{className:"py-4 text-white text-center",children:Object(n.jsx)("i",{className:"wi ".concat(d," display-2")})}),Object(n.jsxs)("h1",{className:"text-center text-white font-weight-bold",children:[t.temp,"\xb0"]}),Object(n.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(n.jsxs)("h4",{className:"text-center  font-weight-bold max-temp",children:[t.temp_max,"\xb0"]}),Object(n.jsxs)("h4",{className:"text-center  font-weight-bold min-temp",children:[t.temp_min,"\xb0"]})]}),Object(n.jsx)("h3",{className:"text-white text-center pt-3",children:t.description})]})})})}})})},w=function(){var e=Object(u.a)(d.a.mark((function e(t,c){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://api.openweathermap.org","/data/2.5/weather?q=").concat(t,",").concat(c,"&appid=").concat("1d6f5b6bf565fee9388b514ea5ffae55"));case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,c){return e.apply(this,arguments)}}(),g=c(49),N=function(e){var t=e.content,c=e.color,r=void 0===c?"primary":c,i=e.className,s=void 0===i?"fixed-bottom":i,o=Object(a.useState)(!0),d=Object(j.a)(o,2),u=d[0],l=d[1];return Object(n.jsx)("div",{className:s,children:Object(n.jsx)(g.a,{isOpen:u,toggle:function(){return l(!1)},color:r,children:t})})},S=function(){var e=Object(p.a)(),t=e.register,c=e.errors,r=e.handleSubmit,i=e.reset,s=Object(a.useState)({city:"",country:""}),o=Object(j.a)(s,2),h=o[0],b=o[1],f=Object(a.useState)(!1),x=Object(j.a)(f,2),O=x[0],g=x[1],S=Object(a.useState)(y),_=Object(j.a)(S,2),C=_[0],k=_[1],F=Object(a.useState)(!1),L=Object(j.a)(F,2),M=L[0],P=L[1];Object(a.useEffect)((function(){q()}),[h]);var q=function(){var e=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.prev=1,e.next=4,w(h.city,h.country);case 4:t=e.sent,k({city:t.name,country:t.sys.country,temp:Math.floor(t.main.temp-273),temp_max:Math.floor(t.main.temp_max-273),temp_min:Math.floor(t.main.temp_min-273),description:t.weather[0].description,cod:t.cod,icon:t.weather[0].id}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0.message);case 11:g(!1);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)(l.a,{onSubmit:r((function(e){b({city:e.city,country:e.country}),i()})),className:" d-md-flex justify-content-md-center flex-wrap",children:[Object(n.jsx)("div",{className:"d-flex justify-content-center",children:Object(n.jsx)("input",{ref:t,type:"text",name:"city",placeholder:"London",className:"inputs",autoComplete:"off"})}),Object(n.jsx)("div",{className:"d-flex justify-content-center my-md-0 mx-md-3 my-2",children:Object(n.jsx)("input",{ref:t({required:!0}),type:"text",name:"country",placeholder:"GB",className:"inputs",autoComplete:"off"})}),Object(n.jsx)("div",{className:"d-flex justify-content-center pt-3",children:Object(n.jsx)(m.a,{color:"info",size:"sm",type:"submit",disabled:!!O,onClick:function(){return P(!0)},children:"Get Weather"})})]})}),Object(n.jsx)("div",{className:"py-4 mb-4",children:200===C.cod&&Object(n.jsx)(v,{data:C,isLoading:O,inProp:M,formData:h})}),Object(n.jsx)("div",{children:c.country&&Object(n.jsx)(N,{content:"Country is required !"})})]})};var _=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(S,{})})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,51)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(_,{})}),document.getElementById("root")),C()}},[[43,1,2]]]);
//# sourceMappingURL=main.a5a70b3c.chunk.js.map