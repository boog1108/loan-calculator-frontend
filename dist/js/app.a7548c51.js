(function(t){function n(n){for(var a,u,l=n[0],c=n[1],i=n[2],p=0,f=[];p<l.length;p++)u=l[p],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);s&&s(n);while(f.length)f.shift()();return r.push.apply(r,i||[]),e()}function e(){for(var t,n=0;n<r.length;n++){for(var e=r[n],a=!0,l=1;l<e.length;l++){var c=e[l];0!==o[c]&&(a=!1)}a&&(r.splice(n--,1),t=u(u.s=e[0]))}return t}var a={},o={app:0},r=[];function u(n){if(a[n])return a[n].exports;var e=a[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,u),e.l=!0,e.exports}u.m=t,u.c=a,u.d=function(t,n,e){u.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,n){if(1&n&&(t=u(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(u.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)u.d(e,a,function(n){return t[n]}.bind(null,a));return e},u.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(n,"a",n),n},u.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},u.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=n,l=l.slice();for(var i=0;i<l.length;i++)n(l[i]);var s=c;r.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var a=e("85ec"),o=e.n(a);o.a},1203:function(t,n,e){"use strict";var a=e("5cdd"),o=e.n(a);o.a},"39c0":function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n),e.d(n,"host",(function(){return P})),e.d(n,"bus",(function(){return $}));e("e260"),e("e6cf"),e("cca6"),e("a79d");var a=e("2b0e"),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("h1",[t._v("LOAN CALCULATOR")]),e("Input"),e("LoanQuote")],1)},r=[],u=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"input"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.loanAmount,expression:"loanAmount"}],staticClass:"box",attrs:{placeholder:"Insert loan amount"},domProps:{value:t.loanAmount},on:{input:function(n){n.target.composing||(t.loanAmount=n.target.value)}}}),e("button",{staticClass:"get",on:{click:t.insert}},[t._v("GET")])])},l=[],c=e("bc3a"),i=e.n(c),s="Invalid loan amount, must be any 100 increment between 1000-15000 inclusive: ",p="Insufficient offers from lenders to satisfy the loan. Try a smaller loan amount.",f={name:"Input",data:function(){return{loanAmount:""}},methods:{insert:function(){var t=this;i.a.get(P+"calculator/loan_quote?loanAmount=".concat(this.loanAmount)).then((function(t){var n=t.data;$.$emit("calculate",n,"")})).catch((function(n){400===n.response.status?$.$emit("calculate",null,s+t.loanAmount):404===n.response.status?$.$emit("calculate",null,p):console.log(n)}))}}},m=f,d=(e("d869"),e("2877")),v=Object(d["a"])(m,u,l,!1,null,"54719a65",null),y=v.exports,h=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"loanQuote"}},[e("div",{attrs:{id:"message"}},[t._v(t._s(t.message))]),e("ul",{attrs:{id:"list"}},[e("li",[t._v("Rate: "+t._s(t.rate))]),e("li",[t._v("Monthly Repayment: "+t._s(t.monthlyRepayment))]),e("li",[t._v("Total Repayment: "+t._s(t.totalRepayment))])])])},b=[],_={name:"LoanQuote",data:function(){return{rate:"",monthlyRepayment:"",totalRepayment:"",message:""}},created:function(){var t=this;$.$on("calculate",(function(n,e){null!=n?(t.rate=n.rate,t.monthlyRepayment=n.monthlyRepayment,t.totalRepayment=n.totalRepayment):(t.rate="",t.monthlyRepayment="",t.totalRepayment=""),t.message=e}))}},g=_,O=(e("1203"),Object(d["a"])(g,h,b,!1,null,"21eeafa6",null)),w=O.exports,R={name:"App",components:{LoanQuote:w,Input:y}},j=R,A=(e("034f"),Object(d["a"])(j,o,r,!1,null,null,null)),x=A.exports;a["a"].config.productionTip=!1;var P="https://loan-calculator-api.herokuapp.com/",$=new a["a"]({});new a["a"]({render:function(t){return t(x)}}).$mount("#app")},"5cdd":function(t,n,e){},"85ec":function(t,n,e){},d869:function(t,n,e){"use strict";var a=e("39c0"),o=e.n(a);o.a}});
//# sourceMappingURL=app.a7548c51.js.map