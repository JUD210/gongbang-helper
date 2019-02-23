(function(t){function e(e){for(var n,r,s=e[0],l=e[1],u=e[2],c=0,m=[];c<s.length;c++)r=s[c],i[r]&&m.push(i[r][0]),i[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(m.length)m.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==i[l]&&(n=!1)}n&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},i={app:0},o=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),i=a.n(n);i.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("UniqueId"),a("SettingExam",{attrs:{parentExams:t.widgetData.exams},on:{add:t.addExam,update:t.updateExam,remove:t.removeExam}}),a("SettingFormat",{attrs:{format:t.widgetData.format},on:{update:t.updateFormat}}),a("SettingStyle",{attrs:{userStyle:t.widgetData.style},on:{update:t.updateStyle}}),a("SettingAnimation",{attrs:{animation:t.widgetData.animation},on:{update:t.updateAnimation}})],1)},o=[],r=a("75fc"),s=a("cebc"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"unique-id-loader"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.uniqueId,expression:"uniqueId"}],attrs:{type:"text"},domProps:{value:t.uniqueId},on:{input:function(e){e.target.composing||(t.uniqueId=e.target.value)}}}),a("button",{on:{click:t.createUniqueId}},[t._v("New")]),a("button",{on:{click:t.loadUniqueId}},[t._v("Load")])])},u=[],d={name:"UniqueId",data:function(){return{uniqueId:this.newUniqueId()}},methods:{newUniqueId:function(){for(var t="",e="abcdefghijklmnopqrstuvwxyz0123456789",a=0;a<10;a++)t+=e.charAt(Math.floor(Math.random()*e.length));return t},checkExisted:function(){},createUniqueId:function(){this.uniqueId=this.newUniqueId()},loadUniqueId:function(){}},computed:{}},c=d,m=a("2877"),p=Object(m["a"])(c,l,u,!1,null,null,null),v=p.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"setting-exams"}},[a("div",{staticClass:"setting-toggle"},[a("h2",{on:{click:function(e){t.isOpen=!t.isOpen}}},[t._v("Exam Dates")])]),a("div",{staticClass:"setting-list"},t._l(t.exams,function(e,n){return a("SubSettingExam",{key:n,attrs:{exam:e,index:n},on:{update:t.update,remove:t.remove}})}),1),a("button",{on:{click:t.add}},[t._v("+")])])},g=[],y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"setting-date"},[a("div",{staticClass:"setting-row"},[a("h3",[t._v("Exam "+t._s(t.index))]),a("button",{on:{click:t.remove}},[t._v("-")])]),a("div",{staticClass:"setting-row"},[a("label",[t._v("Title")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text"},domProps:{value:t.title},on:{change:t.update,input:function(e){e.target.composing||(t.title=e.target.value)}}})]),a("div",{staticClass:"setting-row"},[a("label",[t._v("Date")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],attrs:{type:"date"},domProps:{value:t.date},on:{change:t.update,input:function(e){e.target.composing||(t.date=e.target.value)}}})])])},h=[],S=(a("c5f6"),{name:"SubSettingExam",props:{index:Number,exam:{title:String,date:String}},data:function(){return{title:this.exam.title,date:this.exam.date}},methods:{update:function(){var t={title:this.title,date:this.date};this.$emit("update",this.index,t)},remove:function(){this.$emit("remove",this.index)}}}),b=S,x=Object(m["a"])(b,y,h,!1,null,null,null),_=x.exports,w={name:"SettingExam",props:{parentExams:Array},data:function(){return{exams:this.parentExams}},components:{SubSettingExam:_},methods:{add:function(){this.$emit("add")},update:function(t,e){this.$emit("update",t,e)},remove:function(t){this.$emit("remove",t)}}},O=w,D=Object(m["a"])(O,f,g,!1,null,null,null),k=D.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"setting-format"}},[a("div",{staticClass:"setting-toggle"},[a("h2",{on:{click:function(e){t.isOpen=!t.isOpen}}},[t._v("Formatting")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"setting-list"},[a("div",{staticClass:"setting-row"},[a("label",[t._v("D-day Format")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.ddayFormat,expression:"ddayFormat"}],on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.ddayFormat=e.target.multiple?a:a[0]},t.update]}},t._l(t.ddayFormats,function(e,n){return a("option",{key:n,domProps:{value:e}},[t._v("\n                    "+t._s(e)+"\n                ")])}),0)]),a("div",{staticClass:"setting-row"},[a("label",[t._v("Date Format")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.dateFormat,expression:"dateFormat"}],on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.dateFormat=e.target.multiple?a:a[0]},t.update]}},t._l(t.dateFormats,function(e,n){return a("option",{key:n,domProps:{value:e}},[t._v("\n                    "+t._s(e)+"\n                ")])}),0)])])])},C=[],E={name:"SettingFormat",props:{format:{dday:String,date:String}},data:function(){return{isOpen:!0,ddayFormats:["D-28 (D-%d)","D 28 (D %d)","D-day 28 (D-day %d)","D day 28 (D day %d)"],dateFormats:["2019.02.19 (YYYY.MM.DD)","2019-02-19 (YYYY-MM-DD)","19.02.19 (YY.MM.DD)","19-02-19 (YY-MM-DD)","190219 (YYMMDD)"],ddayFormat:this.format.dday,dateFormat:this.format.date}},methods:{update:function(){var t={dday:this.ddayFormat,date:this.dateFormat};this.$emit("update",t)}}},j=E,I=Object(m["a"])(j,F,C,!1,null,null,null),N=I.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"setting-animation"}},[a("div",{staticClass:"setting-toggle"},[a("h2",{on:{click:function(e){t.isOpen=!t.isOpen}}},[t._v("Animation")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"setting-list"},[a("div",{staticClass:"setting-row"},[a("label",[t._v("Animation Type")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.animationType,expression:"animationType"}],on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.animationType=e.target.multiple?a:a[0]},t.update]}},t._l(t.animationTypes,function(e,n){return a("option",{key:n,domProps:{value:e}},[t._v("\n                    "+t._s(e)+"\n                ")])}),0)]),a("div",{staticClass:"setting-row"},[a("label",[t._v("Animation Speed")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.animationSpeed,expression:"animationSpeed"}],attrs:{type:"number",min:"0.1",step:"0.1"},domProps:{value:t.animationSpeed},on:{change:t.update,input:function(e){e.target.composing||(t.animationSpeed=e.target.value)}}}),t._v("sec\n        ")]),a("div",{staticClass:"setting-row"},[a("label",[t._v("Animation Interval")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.animationInterval,expression:"animationInterval"}],attrs:{type:"number",min:"1"},domProps:{value:t.animationInterval},on:{change:t.update,input:function(e){e.target.composing||(t.animationInterval=e.target.value)}}}),t._v("sec\n        ")])])])},q=[],M={name:"SettingAnimation",props:{animation:Object},data:function(){return{isOpen:!0,animationTypes:["slide"],animationType:this.animation.type,animationSpeed:this.animation.speed,animationInterval:this.animation.interval}},methods:{update:function(){var t={type:this.animationType,speed:this.animationSpeed,interval:this.animationInterval};this.$emit("update",t)}}},P=M,Y=Object(m["a"])(P,$,q,!1,null,null,null),z=Y.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"setting-style"}},[a("div",{staticClass:"setting-toggle"},[a("h2",{on:{click:function(e){t.isOpen=!t.isOpen}}},[t._v("Style")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"setting-list"},[a("SubSettingStyle",{attrs:{name:"Exam Title",userStyle:t.titleStyle},on:{update:t.updateTitleStyle}}),a("SubSettingStyle",{attrs:{name:"Exam D-day",userStyle:t.ddayStyle},on:{update:t.updateDdayStyle}}),a("SubSettingStyle",{attrs:{name:"Exam Date",userStyle:t.dateStyle},on:{update:t.updateDateStyle}})],1)])},A=[],U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"setting-sub"},[a("h3",[t._v(t._s(t.name))]),a("div",{staticClass:"setting-row"},[a("label",[t._v("Font Type")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.fontFamily,expression:"fontFamily"}],on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.fontFamily=e.target.multiple?a:a[0]},t.update]}},t._l(t.fontFamilies,function(e,n){return a("option",{key:n,domProps:{value:e}},[t._v("\n                "+t._s(e)+"\n            ")])}),0)]),a("div",{staticClass:"setting-row"},[a("label",[t._v("Font Size")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.fontSize,expression:"fontSize"}],attrs:{type:"number",min:"1"},domProps:{value:t.fontSize},on:{change:t.update,input:function(e){e.target.composing||(t.fontSize=e.target.value)}}}),t._v("px\n    ")]),a("div",{staticClass:"setting-row"},[a("label",[t._v("Font Color")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.color,expression:"color"}],attrs:{type:"color",value:"#ff0000"},domProps:{value:t.color},on:{change:t.update,input:function(e){e.target.composing||(t.color=e.target.value)}}})]),a("div",{staticClass:"setting-row"},[a("label",[t._v("Background Color")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.backgroundColor,expression:"backgroundColor"}],attrs:{type:"color",value:"#ff0000"},domProps:{value:t.backgroundColor},on:{change:t.update,input:function(e){e.target.composing||(t.backgroundColor=e.target.value)}}})])])},J=[],B={name:"SubSettingStyle",props:{name:String,userStyle:{"font-family":String,"font-size":Number,color:String,"background-color":String}},data:function(){return{fontFamilies:["arial","verdana","georgia"],fontFamily:this.userStyle["font-family"],fontSize:this.userStyle["font-size"],color:this.userStyle["color"],backgroundColor:this.userStyle["background-color"]}},methods:{update:function(){var t={"font-family":this.fontFamily,"font-size":this.fontSize,color:this.color,"background-color":this.backgroundColor};this.$emit("update",t)}}},L=B,G=Object(m["a"])(L,U,J,!1,null,null,null),H=G.exports,K={name:"SettingStyle",props:{userStyle:{title:{"font-family":String,"font-size":Number,color:String,"background-color":String},dday:{"font-family":String,"font-size":Number,color:String,"background-color":String},date:{"font-family":String,"font-size":Number,color:String,"background-color":String}}},data:function(){return{isOpen:!0,titleStyle:this.userStyle.title,ddayStyle:this.userStyle.dday,dateStyle:this.userStyle.date}},methods:{updateTitleStyle:function(t){var e=Object(s["a"])({},this.style,{title:Object(s["a"])({},t)});this.$emit("update",e)},updateDdayStyle:function(t){var e=Object(s["a"])({},this.style,{dday:Object(s["a"])({},t)});this.$emit("update",e)},updateDateStyle:function(t){var e=Object(s["a"])({},this.style,{Date:Object(s["a"])({},t)});this.$emit("update",e)}},components:{SubSettingStyle:H}},Q=K,R=Object(m["a"])(Q,T,A,!1,null,null,null),V=R.exports,W={name:"app",data:function(){return{widgetData:{exams:[],format:{dday:"D-28 (D-%d)",date:"2019.02.19 (YYYY.MM.DD)"},animation:{type:"slide",speed:.1,interval:4},style:{title:{"font-family":"arial","font-size":5,color:"#ff0000","background-color":"#ff0000"},dday:{"font-family":"arial","font-size":5,color:"#ff0000","background-color":"#ff0000"},date:{"font-family":"arial","font-size":5,color:"#ff0000","background-color":"#ff0000"}}}}},methods:{updateFormat:function(t){this.widgetData.format=Object(s["a"])({},t)},updateAnimation:function(t){this.widgetData.animation=Object(s["a"])({},t)},updateStyle:function(t){this.widgetData.style=Object(s["a"])({},t)},addExam:function(){this.widgetData.exams.push({title:"",dates:""})},updateExam:function(t,e){this.widgetData.exams[t]=Object(r["a"])(e)},removeExam:function(t){this.widgetData.exams.splice(t,1)}},components:{UniqueId:v,SettingExam:k,SettingFormat:N,SettingStyle:V,SettingAnimation:z}},X=W,Z=(a("034f"),Object(m["a"])(X,i,o,!1,null,null,null)),tt=Z.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(tt)}}).$mount("#app")},"64a9":function(t,e,a){}});
//# sourceMappingURL=app.a08ab2c0.js.map