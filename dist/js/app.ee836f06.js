(function(e){function t(t){for(var n,s,i=t[0],c=t[1],l=t[2],u=0,f=[];u<i.length;u++)s=i[u],o[s]&&f.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(f.length)f.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,s=1;s<a.length;s++){var c=a[s];0!==o[c]&&(n=!1)}n&&(r.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},o={app:0},r=[];function s(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"96c316d1"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a=o[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise(function(t,n){a=o[e]=[t,n]});t.push(a[2]=n);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(e),r=function(t){c.onerror=c.onload=null,clearTimeout(l);var a=o[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+n+": "+r+")");s.type=n,s.request=r,a[1](s)}o[e]=void 0}};var l=setTimeout(function(){r({type:"timeout",target:c})},12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},2523:function(e,t,a){"use strict";var n=a("ab10"),o=a.n(n);o.a},"29ea":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container-fluid",attrs:{id:"app"}},[a("div",{staticClass:"col-lg-6 col-md-8 col-sm-12",attrs:{id:"search-div"}},[a("div",{staticClass:"form-group has-search"},[a("span",{staticClass:"fa fa-search form-control-feedback"}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search"},domProps:{value:e.search},on:{keyup:e.getSearch,input:function(t){t.target.composing||(e.search=t.target.value)}}})]),1==e.loading&&0==e.datas.length?a("p",{staticClass:"no-data"},[e._v("No data Found for "+e._s(e.search))]):e._e()]),a("div",{staticClass:"row"},[a("div",{staticClass:"flex-justify-center"},[a("card-images",{attrs:{datas:e.datas,loading:e.loading}})],1)]),e.hasImage?a("div",{staticClass:"modal-overlay"}):e._e(),a("div",{staticClass:"modalx"},[a("div",{staticClass:"modalx-body-container"},[a("div",{staticClass:"modalx-body"},[a("span",{staticClass:"closex",on:{click:e.closeModal}},[e._v("×")]),a("div",{staticClass:"image-body",attrs:{id:"modal"+e.imageId}}),a("div",{staticClass:"infos"},[a("span",{staticClass:"names"},[e._v(e._s(e.name))]),a("br"),null!=e.location?a("span",{staticClass:"locate"},[e._v(e._s(e.location))]):a("span",{staticClass:"locate"},[e._v(e._s(e.notfound))])])])])])])},r=[],s=(a("7f7f"),a("386d"),a("bc3a")),i=a.n(s),c="https://api.unsplash.com/";function l(e){return"".concat(c).concat(e," ")}var u="a0140ffded49c46524e80fbb89e1c6a737f32a236a1d4dcdd5c3760532db75ae",d={photosList:function(e,t){var a=l(t);return i.a.get(a+"page="+e.page+"&query="+e.query+"&client_id="+u,{}).then(function(e){return e})},searchPhoto:function(e,t){var a=l(t);return i.a.get(a+"page="+e.page+"&query="+e.query+"&orientation="+e.orientation+"&client_id="+u,{}).then(function(e){return e})}},f=a("e330"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{},[e.loading?e._e():a("div",{staticClass:"grid"},e._l(6,function(e){return a("div",{key:e,staticClass:"card"},[a("fake-item")],1)}),0),e.loading?a("div",{staticClass:"grid"},e._l(e.datas,function(t){return a("div",{key:t.id,staticClass:"card",attrs:{id:"image"+t.id},on:{click:function(a){return e.sendImage({image:t.urls.thumb,name:t.user.name,location:t.user.location,id:t.id})}}},[a("img",{attrs:{src:t.urls.thumb,alt:"",srcset:""}}),a("div",{staticClass:"nameOverlay"}),a("span",{staticClass:"usernames"},[e._v(e._s(t.user.name))]),null!=t.user.location?a("span",{staticClass:"location"},[e._v(" "+e._s(t.user.location)+" ")]):a("span",{staticClass:"location"},[e._v(" No location ")])])}),0):e._e()])},h=[],v=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},g=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"white-widget grey-bg author-area"},[a("div",{staticClass:"animated-background"},[a("div",{staticClass:"background-masker header-top"})])])}],m=(a("d001"),a("2877")),b={},_=Object(m["a"])(b,v,g,!1,null,null,null),y=_.exports,k=new n["a"],C={props:["datas","loading"],components:{fakeItem:y},data:function(){return{}},methods:{sendImage:function(e){k.$emit("modalImage",e)}},created:function(){}},w=C,j=(a("f33f"),Object(m["a"])(w,p,h,!1,null,null,null)),x=j.exports,I={components:{ContentLoader:f["a"],cardImages:x},data:function(){return{datas:[],loading:!1,search:"",hasImage:!1,image:"",name:"",imageId:"",location:"No location",notfound:"No location"}},computed:{},mounted:function(){var e=this;d.photosList({query:"africa",page:1,per_page:10,order_by:"latest",orientation:"squarish"},"search/photos?").then(function(t){200==t.status&&(e.datas=t.data.results.slice(0,6),e.loading=!0)}).catch(function(e){})},created:function(){k.$on("modalImage",this.modalImage)},methods:{getSearch:function(){var e=this;""!=this.search.trim()&&(this.loading=!1,this.search.trim().length>=1?d.searchPhoto({query:this.search.trim(),page:1,per_page:10,order_by:"latest",orientation:"squarish"},"search/photos?").then(function(t){200==t.status&&(e.datas=t.data.results.slice(0,6),e.loading=!0)}).catch(function(e){}):d.searchPhoto({query:"africa",page:1,per_page:10,order_by:"latest",orientation:"squarish"},"search/photos?").then(function(t){200==t.status&&(e.datas=t.data.results.slice(0,6),e.loading=!0)}).catch(function(e){}))},modalImage:function(e){this.imageId=e.id,this.name=e.name,this.location=e.location,this.hasImage=!0,$("body .modalx-body .image-body").css({"background-image":"url(".concat(e.image,")"),"background-repeat":"no-repeat","background-size":"cover","background-position":"center"}),$("body .modalx").css({display:"flex","justify-content":"center",visibility:"visible",opacity:1,transition:"visibility 0s, opacity 0.5s ease-in-out"})},closeModal:function(){this.imageId="",this.name="",this.location="",this.hasImage=!1,$("body .modalx-body .image-body").css({"background-image":"url()","background-repeat":"no-repeat","background-size":"cover","background-position":"center"}),$("body .modalx").css({display:"flex",visibility:"hidden",opacity:0,transition:"visibility 0s, opacity 0.5s ease-in-out"})}}},O=I,E=(a("5c0b"),Object(m["a"])(O,o,r,!1,null,null,null)),P=E.exports,q=a("8c4f"),S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},N=[],L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("h1",[e._v(e._s(e.msg))]),e._m(0),a("h3",[e._v("Installed CLI Plugins")]),e._m(1),a("h3",[e._v("Essential Links")]),e._m(2),a("h3",[e._v("Ecosystem")]),e._m(3)])},M=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("\n    For a guide and recipes on how to configure / customize this project,"),a("br"),e._v("\n    check out the\n    "),a("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(".\n  ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa",target:"_blank",rel:"noopener"}},[e._v("pwa")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),a("li",[a("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),a("li",[a("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),a("li",[a("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],T={name:"HelloWorld",props:{msg:String}},A=T,F=(a("2523"),Object(m["a"])(A,L,M,!1,null,"a0bfc734",null)),W=F.exports,z={name:"home",components:{HelloWorld:W}},H=z,J=Object(m["a"])(H,S,N,!1,null,null,null),V=J.exports;n["a"].use(q["a"]);var B=new q["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:V},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]}),D=a("2f62");n["a"].use(D["a"]);var Y=new D["a"].Store({state:{},mutations:{},actions:{}}),G=a("9483");Object(G["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),n["a"].config.productionTip=!1,new n["a"]({router:B,store:Y,render:function(e){return e(P)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var n=a("5e27"),o=a.n(n);o.a},"5e27":function(e,t,a){},9172:function(e,t,a){},ab10:function(e,t,a){},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"},d001:function(e,t,a){"use strict";var n=a("9172"),o=a.n(n);o.a},f33f:function(e,t,a){"use strict";var n=a("29ea"),o=a.n(n);o.a}});
//# sourceMappingURL=app.ee836f06.js.map