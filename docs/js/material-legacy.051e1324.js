(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["material"],{"1d8e":function(e,t,r){"use strict";var a=r("601f"),n=r.n(a);n.a},"28a5":function(e,t,r){"use strict";var a=r("aae3"),n=r("cb7c"),i=r("ebd6"),s=r("0390"),l=r("9def"),u=r("5f1b"),c=r("520a"),o=r("79e5"),d=Math.min,m=[].push,f="split",h="length",v="lastIndex",p=4294967295,g=!o(function(){RegExp(p,"y")});r("214f")("split",2,function(e,t,r,o){var b;return b="c"=="abbc"[f](/(b)*/)[1]||4!="test"[f](/(?:)/,-1)[h]||2!="ab"[f](/(?:ab)*/)[h]||4!="."[f](/(.?)(.?)/)[h]||"."[f](/()()/)[h]>1||""[f](/.?/)[h]?function(e,t){var n=String(this);if(void 0===e&&0===t)return[];if(!a(e))return r.call(n,e,t);var i,s,l,u=[],o=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),d=0,f=void 0===t?p:t>>>0,g=new RegExp(e.source,o+"g");while(i=c.call(g,n)){if(s=g[v],s>d&&(u.push(n.slice(d,i.index)),i[h]>1&&i.index<n[h]&&m.apply(u,i.slice(1)),l=i[0][h],d=s,u[h]>=f))break;g[v]===i.index&&g[v]++}return d===n[h]?!l&&g.test("")||u.push(""):u.push(n.slice(d)),u[h]>f?u.slice(0,f):u}:"0"[f](void 0,0)[h]?function(e,t){return void 0===e&&0===t?[]:r.call(this,e,t)}:r,[function(r,a){var n=e(this),i=void 0==r?void 0:r[t];return void 0!==i?i.call(r,n,a):b.call(String(n),r,a)},function(e,t){var a=o(b,e,this,t,b!==r);if(a.done)return a.value;var c=n(e),m=String(this),f=i(c,RegExp),h=c.unicode,v=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(g?"y":"g"),y=new f(g?c:"^(?:"+c.source+")",v),_=void 0===t?p:t>>>0;if(0===_)return[];if(0===m.length)return null===u(y,m)?[m]:[];var w=0,x=0,S=[];while(x<m.length){y.lastIndex=g?x:0;var C,N=u(y,g?m:m.slice(x));if(null===N||(C=d(l(y.lastIndex+(g?0:x)),m.length))===w)x=s(m,x,h);else{if(S.push(m.slice(w,x)),S.length===_)return S;for(var k=1;k<=N.length-1;k++)if(S.push(N[k]),S.length===_)return S;x=w=C}}return S.push(m.slice(w)),S}]})},3846:function(e,t,r){r("9e1e")&&"g"!=/./g.flags&&r("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:r("0bfb")})},"3d2f":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"arkn-material"}},[e.ready?[r("div",{staticClass:"mdui-row mdui-m-t-4"},[r("div",{staticClass:"mdui-col-xs-12"},[r("table",{staticClass:"mdui-table tag-table"},[r("tbody",[r("tr",[e._m(0),r("td",[r("button",{class:"mdui-btn mdui-btn-dense mdui-ripple tag-btn "+(e.allRare?e.color.selected:e.color.notSelected),on:{click:function(t){e.selected.rare=e.l.fill(Array(e.selected.rare.length),!e.allRare)}}},[e._v("全选")]),e._l(5,function(t){return r("tag-button",{key:"rare-"+(e.rareNum+1-t),attrs:{notSelectedColor:e.color.notSelected,selectedColor:e.color[e.rareNum+1-t]},model:{value:e.selected.rare[e.rareNum-t],callback:function(r){e.$set(e.selected.rare,e.rareNum-t,r)},expression:"selected.rare[rareNum-i]"}},[e._v(" "+e._s(e.rareNum+1-t)+" ")])})],2)]),r("tr",[e._m(1),r("td",[r("button",{staticClass:"mdui-btn mdui-btn-dense mdui-color-red tag-btn mdui-m-r-2",on:{click:e.reset}},[e._v("重置")]),e._l(e.settingZh,function(t,a){return r("mdui-switch",{key:a,model:{value:e.setting[a],callback:function(t){e.$set(e.setting,a,t)},expression:"setting[en]"}},[e._v(e._s(t))])})],2)])])])])]),r("div",{staticClass:"mdui-chip mdui-m-t-2"},[e._m(2),r("span",{staticClass:"mdui-chip-title mdui-text-truncate",style:e.$root.screenWidth<350&&"font-size:12px"},[e._v("设置与输入会自动保存，点击重置按钮可重置")])]),r("div",{staticClass:"mdui-row"},e._l(e.rareNum,function(t){return r("div",{directives:[{name:"show",rawName:"v-show",value:e.selected.rare[e.rareNum-t]&&!(e.setting.hideIrrelevant&&0==e.showMaterials[e.rareNum+1-t].length),expression:"selected.rare[rareNum-i] && !(setting.hideIrrelevant && showMaterials[rareNum+1-i].length==0)"}],key:"materials-"+t,staticClass:"mdui-col-xs-12"},[r("div",{staticClass:"mdui-typo rare-title"},[r("h2",[e._v("稀有度 "+e._s(e.rareNum+1-t))])]),e._l(e.materials[e.rareNum+1-t],function(a){return r("div",{directives:[{name:"show",rawName:"v-show",value:!(e.setting.hideIrrelevant&&!e.showMaterials[e.rareNum+1-t].includes(a.name)),expression:"!(setting.hideIrrelevant && !showMaterials[rareNum+1-i].includes(material.name))"}],key:a.name,class:"mdui-card"+(e.$root.smallScreen?"":" mdui-m-r-2")+" mdui-m-b-2 material"+(e.hasInput&&!e.showMaterials[e.rareNum+1-t].includes(a.name)?" opacity-5":"")},[r("div",{class:"card-triangle "+e.color[e.rareNum+1-t]}),r("div",{staticClass:"mdui-card-header"},[r("img",{staticClass:"mdui-card-header-avatar",attrs:{src:a.img}}),r("div",{staticClass:"mdui-card-header-title"},[e._v(e._s(a.name))]),r("div",{staticClass:"mdui-m-t-1"},[r("mdui-number-input",{staticClass:"mdui-m-r-1",model:{value:e.inputs[a.name].need,callback:function(t){e.$set(e.inputs[a.name],"need",t)},expression:"inputs[material.name].need"}},[e._v("需求")]),r("mdui-number-input",{staticClass:"mdui-m-r-1",model:{value:e.inputs[a.name].have,callback:function(t){e.$set(e.inputs[a.name],"have",t)},expression:"inputs[material.name].have"}},[e._v("已有")]),r("div",{staticClass:"gap"},[r("label",{staticClass:"mdui-textfield-label"},[e._v("仍需")]),r("span",{staticClass:"gap-num"},[e._v(e._s(e.gaps[a.name]))])]),e.l.size(a.source)>0?r("ul",{staticClass:"source-list"},[e.superSmallScreen?r("li",{staticClass:"drop-point"},[e._v("掉落地点")]):e._e(),e._l(a.source,function(t,n){return r("li",{key:a.name+"-"+n},[r("span",{staticClass:"point"},[e._v(e._s(n))]),r("span",{class:"probability "+e.color[t]},[e._v(e._s(t))])])})],2):e._e()],1)])])})],2)}),0)]:r("mdui-progress")],2)},n=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("td",{attrs:{width:"1"}},[r("button",{staticClass:"mdui-btn mdui-btn-dense mdui-color-teal no-pe tag-btn"},[e._v("稀有度")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("td",{attrs:{width:"1"}},[r("button",{staticClass:"mdui-btn mdui-btn-dense mdui-color-teal no-pe tag-btn"},[e._v("设置项")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",{staticClass:"mdui-chip-icon mdui-color-blue"},[r("i",{staticClass:"mdui-icon material-icons"},[e._v("info_outline")])])}],i=(r("28a5"),r("f559"),r("96cf"),r("3b8d")),s=(r("6c7b"),r("7f7f"),r("ac4d"),r("8a81"),r("6b54"),r("456d"),r("ac6a"),r("8615"),r("a0b3")),l=r("2ef0"),u=r.n(l);function c(e){return e<0?0:e}var o={name:"arkn-material",data:function(){return{l:u.a,ready:!1,showAll:!1,materials:{},inputs:{},selected:{rare:[]},setting:{hideIrrelevant:!1},settingZh:{hideIrrelevant:"隐藏无关素材"},color:{notSelected:"mdui-color-brown-300",selected:"mdui-color-grey-800",5:"mdui-color-yellow-700",4:"mdui-color-deep-purple-300",3:"mdui-color-blue-600",2:"mdui-color-lime",1:"mdui-color-grey-700","固定":"mdui-color-grey-900","小概率":"mdui-color-grey-300","中概率":"mdui-color-grey-500","大概率":"mdui-color-grey-700","罕见":"mdui-color-red-900"}}},watch:{setting:{handler:function(e){return localStorage.setItem("material.setting",JSON.stringify(e))},deep:!0},selected:{handler:function(e){return localStorage.setItem("material.selected",JSON.stringify(e))},deep:!0},inputs:{handler:function(e){for(var t=0,r=Object.values(e);t<r.length;t++)for(var a=r[t],n=0,i=Object.keys(a);n<i.length;n++){var s=i[n],l=a[s],u=/[^0-9]/.exec(l);u&&(a[s]=(parseInt(/[0-9]*/.exec(l)[0])||0).toString())}localStorage.setItem("material.inputs",JSON.stringify(e))},deep:!0}},computed:{allRare:function(){return u.a.sum(this.selected.rare)==this.rareNum},superSmallScreen:function(){return this.$root.screenWidth<=375},rareNum:function(){return u.a.size(this.materials)},inputsInt:function(){var e={};for(var t in this.inputs)e[t]=u.a.mapValues(this.inputs[t],function(e){return parseInt(e)||0});return e},gaps:function(){var e=this.inputsInt,t=u.a.mapValues(e,function(e){return e.need});return u.a.forInRight(this.materials,function(r){var a=!0,n=!1,i=void 0;try{for(var s,l=function(){var r=s.value,a=r.name,n=r.madeof;t[a]=c(t[a]-e[a].have),u.a.forIn(n,function(e,r){t[r]+=t[a]*e})},o=r[Symbol.iterator]();!(a=(s=o.next()).done);a=!0)l()}catch(d){n=!0,i=d}finally{try{a||null==o.return||o.return()}finally{if(n)throw i}}}),t},showMaterials:function(){var e=this,t=u.a.mapValues(this.materials,function(t){var r=[],a=!0,n=!1,i=void 0;try{for(var s,l=t[Symbol.iterator]();!(a=(s=l.next()).done);a=!0){var u=s.value.name;e.inputsInt[u].need+e.inputsInt[u].have+e.gaps[u]>0&&r.push(u)}}catch(c){n=!0,i=c}finally{try{a||null==l.return||l.return()}finally{if(n)throw i}}return r});return t},hasInput:function(){for(var e=0,t=1;t<=this.rareNum;t++)e+=this.showMaterials[t].length;return e}},methods:{reset:function(){for(var e in this.selected.rare=u.a.concat([!1],u.a.fill(Array(this.rareNum-1),!0)),this.setting.hideIrrelevant=!1,this.inputs){var t=this.inputs[e];for(var r in t)t[r]=""}}},created:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,r,a,n,i,l,c,o,d,m,f,h;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s["a"].get("".concat("/","data/material.json"));case 2:for(t=e.sent,this.materials=u.a.groupBy(t,function(e){return e.rare}),r=!0,a=!1,n=void 0,e.prev=7,i=t[Symbol.iterator]();!(r=(l=i.next()).done);r=!0)c=l.value.name,this.$set(this.inputs,c,{need:"",have:""});e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](7),a=!0,n=e.t0;case 15:e.prev=15,e.prev=16,r||null==i.return||i.return();case 18:if(e.prev=18,!a){e.next=21;break}throw n;case 21:return e.finish(18);case 22:return e.finish(15);case 23:this.selected.rare=u.a.concat([!1],u.a.fill(Array(this.rareNum-1),!0)),e.t1=regeneratorRuntime.keys(localStorage);case 25:if((e.t2=e.t1()).done){e.next=33;break}if(o=e.t2.value,o.startsWith("material.")){e.next=29;break}return e.abrupt("continue",25);case 29:d=o.split(".")[1],this[d]=JSON.parse(localStorage.getItem(o)),e.next=25;break;case 33:for(m in this.inputs)for(h in f=this.inputs[m],f)0==f[h]&&(f[h]="");this.ready=!0;case 35:case"end":return e.stop()}},e,this,[[7,11,15,23],[16,,18,22]])}));function t(){return e.apply(this,arguments)}return t}()},d=o,m=(r("1d8e"),r("2877")),f=Object(m["a"])(d,a,n,!1,null,null,null);t["default"]=f.exports},"456d":function(e,t,r){var a=r("4bf8"),n=r("0d58");r("5eda")("keys",function(){return function(e){return n(a(e))}})},"504c":function(e,t,r){var a=r("9e1e"),n=r("0d58"),i=r("6821"),s=r("52a7").f;e.exports=function(e){return function(t){var r,l=i(t),u=n(l),c=u.length,o=0,d=[];while(c>o)r=u[o++],a&&!s.call(l,r)||d.push(e?[r,l[r]]:l[r]);return d}}},"5eda":function(e,t,r){var a=r("5ca1"),n=r("8378"),i=r("79e5");e.exports=function(e,t){var r=(n.Object||{})[e]||Object[e],s={};s[e]=t(r),a(a.S+a.F*i(function(){r(1)}),"Object",s)}},"601f":function(e,t,r){},"6b54":function(e,t,r){"use strict";r("3846");var a=r("cb7c"),n=r("0bfb"),i=r("9e1e"),s="toString",l=/./[s],u=function(e){r("2aba")(RegExp.prototype,s,e,!0)};r("79e5")(function(){return"/a/b"!=l.call({source:"a",flags:"b"})})?u(function(){var e=a(this);return"/".concat(e.source,"/","flags"in e?e.flags:!i&&e instanceof RegExp?n.call(e):void 0)}):l.name!=s&&u(function(){return l.call(this)})},"7f7f":function(e,t,r){var a=r("86cc").f,n=Function.prototype,i=/^\s*function ([^ (]*)/,s="name";s in n||r("9e1e")&&a(n,s,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},8615:function(e,t,r){var a=r("5ca1"),n=r("504c")(!1);a(a.S,"Object",{values:function(e){return n(e)}})},f559:function(e,t,r){"use strict";var a=r("5ca1"),n=r("9def"),i=r("d2c8"),s="startsWith",l=""[s];a(a.P+a.F*r("5147")(s),"String",{startsWith:function(e){var t=i(this,e,s),r=n(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),a=String(e);return l?l.call(t,a,r):t.slice(r,r+a.length)===a}})}}]);
//# sourceMappingURL=material-legacy.051e1324.js.map