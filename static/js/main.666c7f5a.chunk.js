(this["webpackJsonpuser-viewer"]=this["webpackJsonpuser-viewer"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(7),i=n.n(r),o=(n(13),n(4)),s=n(5),l=(n(14),n(15),function(){return c.a.createElement("div",{className:"loader-container"},c.a.createElement("div",{className:"circle pulsing-circle",style:{animationDelay:"0s"}}),c.a.createElement("div",{className:"circle pulsing-circle",style:{animationDelay:"2s"}}),c.a.createElement("div",{className:"circle static-circle"}))}),u=(n(16),function(e){var t=e.data;return c.a.createElement("div",{className:"Card"},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{src:t.avatar,alt:"user"})),c.a.createElement("p",null,"".concat(t.first_name," ").concat(t.last_name)))}),m=(n(17),function(e){var t=e.users.map((function(e){return c.a.createElement(u,{key:e.id,data:e})}));return c.a.createElement("div",{className:"Users"},t)}),f=n(1),d=n.n(f),h=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(!1),u=Object(s.a)(i,2),f=u[0],h=u[1];return Object(a.useEffect)((function(){fetch("https://reqres.in/api/users?page=1").then((function(e){return e.json()})).then((function(e){setTimeout((function(){return r(e.data)}),3e3)})),d()(window).scroll((function(){d()(window).scrollTop()>=d()(document).height()-d()(window).height()-1&&(fetch("https://reqres.in/api/users?page=2").then((function(e){return e.json()})).then((function(e){r((function(t){return[].concat(Object(o.a)(t),Object(o.a)(e.data))}))})),d()(window).off("scroll"),h(!0))}))}),[]),c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Users"),n?c.a.createElement(m,{users:n}):c.a.createElement(l,null),f&&c.a.createElement("p",null,"No more users"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.666c7f5a.chunk.js.map