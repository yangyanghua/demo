(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a11a8ce6"],{a86a:function(t,n,s){"use strict";s.r(n);var a=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"content-box"},[s("div",{staticClass:"top-bar"},[s("button",{staticClass:"show-moer",on:{click:function(n){t.showPopup=!0}}},[s("van-icon",{attrs:{name:"wap-nav"}})],1),s("button",{staticClass:"bar-btn",on:{click:t.toRegister}},[t._v(" 注 册 ")]),s("button",{staticClass:"bar-btn active"},[t._v(" 登 录 ")])]),s("van-popup",{attrs:{position:"left"},model:{value:t.showPopup,callback:function(n){t.showPopup=n},expression:"showPopup"}},[s("ul",{staticClass:"nav"},[s("li",{staticClass:"nav-item"},[t._v("搜索")]),s("li",{staticClass:"nav-item"},[t._v("机会")]),s("li",{staticClass:"nav-item"},[t._v("办法")]),s("li",{staticClass:"nav-item"},[t._v("猛人")])])]),s("van-popup",{attrs:{position:"right"},model:{value:t.showCountry,callback:function(n){t.showCountry=n},expression:"showCountry"}},[s("div",{staticClass:"country-list"},[s("van-index-bar",t._l(t.countryList,(function(n,a){return s("div",{key:a},[s("van-index-anchor",{attrs:{index:n.index}}),t._l(n.list,(function(n,a){return s("van-cell",{key:a,attrs:{center:!1,icon:n.flag,title:n.description2},on:{click:function(s){return t.selCountry(n)}}})}))],2)})),0)],1)]),s("div",{staticClass:"ft-SvgIcon p-AuthTemplate__logo",attrs:{icon:"feat-v2"}},[s("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 1920 900","enable-background":"new 0 0 1920 900","xml:space":"preserve"}},[s("g",[s("polygon",{attrs:{points:"1910,326.157 1910,272.375 1673.043,272.375 1673.043,326.157 1762.331,326.157 1762.331,651.432 1820.954,651.432 1820.954,326.157 "}}),s("polygon",{attrs:{points:"203.947,272.375 10,272.375 10,651.432 68.606,651.432 68.606,470.984 199.159,470.984 199.159,417.227 68.606,417.227 68.606,326.157 203.947,326.157 "}}),s("polygon",{attrs:{points:"775.647,272.375 561.343,272.375 561.343,651.432 775.647,651.432 775.647,597.664 619.922,597.664 619.922,470.984 771.112,470.984 771.112,417.227 619.922,417.227 619.922,326.157 775.647,326.157 "}}),s("path",{attrs:{d:"M1172.007,505.602l60.385-128.89l57.599,128.89H1172.007z M1354.646,651.432h64.137l-185.379-402.864l-192.181,402.864 h63.125l43.269-92.061h166.271L1354.646,651.432z"}})])])]),s("h1",{staticClass:"title"},[t._v("彰显你最拿手的好戏")]),s("div",{staticClass:"form-content"},[s("div",{staticClass:"from-item"},[s("div",{staticClass:"f-label",on:{click:function(n){t.showCountry=!0}}},[s("img",{staticClass:"flag",attrs:{src:t.country.flag,alt:""}}),t._v(" +"+t._s(t.country.calling_code)+" "),s("van-icon",{staticClass:"icon-more",attrs:{name:"play"}})],1),s("div",{staticClass:"f-value"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.username,expression:"form.username"}],staticClass:"f-input",attrs:{placeholder:"电话",type:"tel"},domProps:{value:t.form.username},on:{input:function(n){n.target.composing||t.$set(t.form,"username",n.target.value)}}})])]),s("div",{staticClass:"from-item"},[s("div",{staticClass:"f-label"},[t._v(" 密码 ")]),s("div",{staticClass:"f-value"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"f-input",attrs:{placeholder:"密码",type:"password"},domProps:{value:t.form.password},on:{input:function(n){n.target.composing||t.$set(t.form,"password",n.target.value)}}})])]),s("div",{staticStyle:{margin:"30px 0"}},[s("van-button",{attrs:{loading:t.loading,round:"",block:"",color:"#C1272D"},on:{click:t.onSubmit}},[t._v(" 提交 ")]),s("button",{staticClass:"text-btn"},[t._v("忘记密码？")])],1)])],1)},e=[],i=(s("fe59"),s("08ba"),s("c355"),s("cebf")),o=(s("7645"),s("7334")),c=(s("c2f7"),s("5e31")),r=(s("0325"),s("57e5")),l=(s("ca37"),s("e80b")),u=(s("f809"),s("ac21")),d=(s("412c"),s("80de")),p=(s("d84b"),s("a1dd")),f=(s("8fe9"),s("ca50")),v=(s("fed1"),s("d9c2")),m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v["b"].post(v["a"].login,t,{headers:{"Content-Type":"application/json"}})},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v["b"].get(v["a"].getCountryCode,{params:t},{headers:{"Content-Type":"application/json"}})},x=s("0261");x["a"].use(f["a"]),x["a"].use(p["a"]),x["a"].use(d["a"]),x["a"].use(u["a"]),x["a"].use(l["a"]),x["a"].use(r["a"]),x["a"].use(c["a"]),x["a"].use(o["a"]),x["a"].use(i["a"]);var g={components:{},data:function(){return{showCountry:!1,country:{},loading:!1,showPopup:!1,form:{username:"",password:""},countryList:[{index:"A",list:[]},{index:"B",list:[]},{index:"C",list:[]},{index:"D",list:[]},{index:"E",list:[]},{index:"F",list:[]},{index:"G",list:[]},{index:"H",list:[]},{index:"I",list:[]},{index:"J",list:[]},{index:"K",list:[]},{index:"L",list:[]},{index:"M",list:[]},{index:"N",list:[]},{index:"O",list:[]},{index:"P",list:[]},{index:"Q",list:[]},{index:"S",list:[]},{index:"T",list:[]},{index:"U",list:[]},{index:"V",list:[]},{index:"W",list:[]},{index:"X",list:[]},{index:"Y",list:[]},{index:"Z",list:[]}]}},computed:{},watch:{},methods:{selCountry:function(t){this.country=t,this.showCountry=!1},getCountryCode:function(){var t=this;h().then((function(n){var s=t;n.data.forEach((function(t){t.iso3==n.meta.default.iso3&&(s.country=t)})),t.countryList.forEach((function(t){n.data.forEach((function(n){t.index==n.label.substr(0,1)&&t.list.push(n)}))}))})).catch((function(t){Object(u["a"])(t.message)}))},toRegister:function(){this.$router.push({path:"/register"})},onSubmit:function(){var t=this;this.loading=!0;var n=Object.assign({},this.form);n.username="+"+this.country.calling_code+"-"+n.username,m(n).then((function(n){u["a"].success("登录成功");var s=JSON.stringify(n);window.localStorage.setItem("user",s),t.loading=!1})).catch((function(n){Object(u["a"])(n.message),t.loading=!1}))}},created:function(){},mounted:function(){this.getCountryCode()},beforeCreate:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},activated:function(){}},C=g,b=(s("c183"),s("4023")),w=Object(b["a"])(C,a,e,!1,null,"fbdde8de",null);n["default"]=w.exports},c183:function(t,n,s){"use strict";var a=s("e224"),e=s.n(a);e.a},e224:function(t,n,s){}}]);
//# sourceMappingURL=chunk-a11a8ce6.af57ae2c.js.map