!function(e){function t(t){for(var r,a,c=t[0],i=t[1],l=t[2],p=0,f=[];p<c.length;p++)a=c[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(s&&s(t);f.length;)f.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(u.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},u=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var s=i;u.push([0,"chunk-vendors"]),n()}({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t),n("2ca0"),n("96cf");var r=n("1da1"),o=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),u={data:function(){return{}},watch:{$route:{handler:function(){},immediate:!0,deep:!0}},methods:{go:function(e){history.pushState(null,e,e)}}},a=(n("5c0b"),n("2877")),c=Object(a.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("div",{on:{click:function(t){return e.go("/vue1")}}},[e._v("Home1")]),n("div",{on:{click:function(t){return e.go("/vue2")}}},[e._v("Home2")])]),n("router-view")],1)}),[],!1,null,null,null).exports,i=n("8c4f"),l={name:"HelloWorld",props:{msg:String}},s={name:"Home",components:{HelloWorld:(n("e1d0"),Object(a.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),n("h3",[e._v("Installed CLI Plugins")])])}),[],!1,null,"4e5b5bc7",null)).exports}},p=Object(a.a)(s,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"home"},[t("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),t("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)}),[],!1,null,null,null).exports;o.a.use(i.a);var f=[{path:"/",name:"Home",component:p}],v=new i.a({base:"/",routes:f,mode:"history"}),d=n("2f62");o.a.use(d.a);var m=new d.a.Store({state:{},mutations:{},actions:{},modules:{}}),b=n("34ac9");function h(e){return function(t){return t.pathname.startsWith(e)}}o.a.config.productionTip=!1;var g=[{name:"vueapp1",entry:"./vueapp1/",container:"#sub-container",activeRule:h("/vue1")},{name:"vueapp2",entry:"./vueapp2/",container:"#sub-container",activeRule:h("/vue2")}],y=(h("/vueapp1"),h("/vueapp2"),g);function O(){return(O=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(b.b)(y),Object(b.c)(),new o.a({router:v,store:m,render:function(e){return e(c)}}).$mount("#app");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){O.apply(this,arguments)}()},"5c0b":function(e,t,n){"use strict";var r=n("9c0c");n.n(r).a},"9c0c":function(e,t,n){},b176:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},e1d0:function(e,t,n){"use strict";var r=n("b176");n.n(r).a}});