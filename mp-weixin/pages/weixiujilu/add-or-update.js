(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/weixiujilu/add-or-update"],{"09d1":function(i,e,t){"use strict";t.r(e);var n=t("635b"),r=t("c0f8");for(var u in r)"default"!==u&&function(i){t.d(e,i,(function(){return r[i]}))}(u);t("9273");var a,o=t("f0c5"),s=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"548f4250",null,!1,n["a"],a);e["default"]=s.exports},"4d1c":function(i,e,t){"use strict";(function(i){t("6cdc"),t("921b");n(t("66fd"));var e=n(t("09d1"));function n(i){return i&&i.__esModule?i:{default:i}}i(e.default)}).call(this,t("543d")["createPage"])},5440:function(i,e,t){},"635b":function(i,e,t){"use strict";var n={"xia-editor":()=>t.e("components/xia-editor/xia-editor").then(t.bind(null,"064f")),"w-picker":()=>Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"e2b1"))},r=function(){var i=this,e=i.$createElement,t=(i._self._c,i.ruleForm.tupian.split(","));i.$mp.data=Object.assign({},{$root:{g0:t}})},u=[];t.d(e,"b",(function(){return r})),t.d(e,"c",(function(){return u})),t.d(e,"a",(function(){return n}))},9273:function(i,e,t){"use strict";var n=t("5440"),r=t.n(n);r.a},c0f8:function(i,e,t){"use strict";t.r(e);var n=t("c9bc"),r=t.n(n);for(var u in n)"default"!==u&&function(i){t.d(e,i,(function(){return n[i]}))}(u);e["default"]=r.a},c9bc:function(i,e,t){"use strict";(function(i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(t("a34a"));function r(i){return i&&i.__esModule?i:{default:i}}function u(i,e,t,n,r,u,a){try{var o=i[u](a),s=o.value}catch(c){return void t(c)}o.done?e(s):Promise.resolve(s).then(n,r)}function a(i){return function(){var e=this,t=arguments;return new Promise((function(n,r){var a=i.apply(e,t);function o(i){u(a,n,r,o,s,"next",i)}function s(i){u(a,n,r,o,s,"throw",i)}o(void 0)}))}}var o=function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"e2b1"))},s=function(){return t.e("components/xia-editor/xia-editor").then(t.bind(null,"064f"))},c={data:function(){return{cross:"",ruleForm:{biaoti:"",jianjie:"",tupian:"",weixiujilu:"维修中",weixiuxiangqing:"",weixiudizhi:"",weixiushijian:"",yonghuzhanghao:"",yonghuxingming:"",weixiuzhanghao:"",weixiuxingming:""},weixiujiluOptions:[],weixiujiluIndex:0,user:{},ro:{biaoti:!1,jianjie:!1,tupian:!1,weixiujilu:!1,weixiuxiangqing:!1,weixiudizhi:!1,weixiushijian:!1,yonghuzhanghao:!1,yonghuxingming:!1,weixiuzhanghao:!1,weixiuxingming:!1}}},components:{wPicker:o,xiaEditor:s},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=a(n.default.mark((function e(t){var r,u,a,o;return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.ruleForm.weixiushijian=this.$utils.getCurDateTime(),r=i.getStorageSync("nowTable"),e.next=4,this.$api.session(r);case 4:if(u=e.sent,this.user=u.data,this.ruleForm.yonghuzhanghao=this.user.yonghuzhanghao,this.ro.yonghuzhanghao=!0,this.ruleForm.yonghuxingming=this.user.yonghuxingming,this.ro.yonghuxingming=!0,this.ruleForm.weixiuzhanghao=this.user.weixiuzhanghao,this.ro.weixiuzhanghao=!0,this.ruleForm.weixiuxingming=this.user.weixiuxingming,this.ro.weixiuxingming=!0,this.weixiujiluOptions="已维修,维修中".split(","),this.ruleForm.userid=i.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=i.getStorageSync("nickname")),!t.id){e.next=23;break}return this.ruleForm.id=t.id,e.next=21,this.$api.info("weixiujilu",this.ruleForm.id);case 21:u=e.sent,this.ruleForm=u.data;case 23:if(this.cross=t.cross,!t.cross){e.next=75;break}a=i.getStorageSync("crossObj"),e.t0=n.default.keys(a);case 27:if((e.t1=e.t0()).done){e.next=75;break}if(o=e.t1.value,"biaoti"!=o){e.next=33;break}return this.ruleForm.biaoti=a[o],this.ro.biaoti=!0,e.abrupt("continue",27);case 33:if("jianjie"!=o){e.next=37;break}return this.ruleForm.jianjie=a[o],this.ro.jianjie=!0,e.abrupt("continue",27);case 37:if("tupian"!=o){e.next=41;break}return this.ruleForm.tupian=a[o].split(",")[0],this.ro.tupian=!0,e.abrupt("continue",27);case 41:if("weixiujilu"!=o){e.next=45;break}return this.ruleForm.weixiujilu=a[o],this.ro.weixiujilu=!0,e.abrupt("continue",27);case 45:if("weixiuxiangqing"!=o){e.next=49;break}return this.ruleForm.weixiuxiangqing=a[o],this.ro.weixiuxiangqing=!0,e.abrupt("continue",27);case 49:if("weixiudizhi"!=o){e.next=53;break}return this.ruleForm.weixiudizhi=a[o],this.ro.weixiudizhi=!0,e.abrupt("continue",27);case 53:if("weixiushijian"!=o){e.next=57;break}return this.ruleForm.weixiushijian=a[o],this.ro.weixiushijian=!0,e.abrupt("continue",27);case 57:if("yonghuzhanghao"!=o){e.next=61;break}return this.ruleForm.yonghuzhanghao=a[o],this.ro.yonghuzhanghao=!0,e.abrupt("continue",27);case 61:if("yonghuxingming"!=o){e.next=65;break}return this.ruleForm.yonghuxingming=a[o],this.ro.yonghuxingming=!0,e.abrupt("continue",27);case 65:if("weixiuzhanghao"!=o){e.next=69;break}return this.ruleForm.weixiuzhanghao=a[o],this.ro.weixiuzhanghao=!0,e.abrupt("continue",27);case 69:if("weixiuxingming"!=o){e.next=73;break}return this.ruleForm.weixiuxingming=a[o],this.ro.weixiuxingming=!0,e.abrupt("continue",27);case 73:e.next=27;break;case 75:this.styleChange();case 76:case"end":return e.stop()}}),e,this)})));function t(i){return e.apply(this,arguments)}return t}(),methods:{weixiuxiangqingChange:function(i){this.ruleForm.weixiuxiangqing=i},styleChange:function(){this.$nextTick((function(){}))},weixiushijianConfirm:function(i){console.log(i),this.ruleForm.weixiushijian=i.result,this.$forceUpdate()},weixiujiluChange:function(i){this.weixiujiluIndex=i.target.value,this.ruleForm.weixiujilu=this.weixiujiluOptions[this.weixiujiluIndex]},tupianTap:function(){var i=this;this.$api.upload((function(e){i.ruleForm.tupian="upload/"+e.file,i.$forceUpdate(),i.$nextTick((function(){i.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=a(n.default.mark((function e(){var t,r,u,a,o,s,c,h,l,g;return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.weixiuxiangqing){e.next=3;break}return this.$utils.msg("维修详情不能为空"),e.abrupt("return");case 3:if(this.ruleForm.weixiudizhi){e.next=6;break}return this.$utils.msg("维修地址不能为空"),e.abrupt("return");case 6:if(!this.cross){e.next=22;break}if(o=i.getStorageSync("statusColumnName"),s=i.getStorageSync("statusColumnValue"),""==o){e.next=22;break}if(t||(t=i.getStorageSync("crossObj")),o.startsWith("[")){e.next=18;break}for(c in t)c==o&&(t[c]=s);return h=i.getStorageSync("crossTable"),e.next=16,this.$api.update("".concat(h),t);case 16:e.next=22;break;case 18:r=Number(i.getStorageSync("userid")),u=t["id"],a=i.getStorageSync("statusColumnName"),a=a.replace(/\[/,"").replace(/\]/,"");case 22:if(!u||!r){e.next=44;break}return this.ruleForm.crossuserid=r,this.ruleForm.crossrefid=u,l={page:1,limit:10,crossuserid:r,crossrefid:u},e.next=28,this.$api.list("weixiujilu",l);case 28:if(g=e.sent,!(g.data.total>=a)){e.next=34;break}return this.$utils.msg(i.getStorageSync("tips")),e.abrupt("return",!1);case 34:if(!this.ruleForm.id){e.next=39;break}return e.next=37,this.$api.update("weixiujilu",this.ruleForm);case 37:e.next=41;break;case 39:return e.next=41,this.$api.add("weixiujilu",this.ruleForm);case 41:this.$utils.msgBack("提交成功");case 42:e.next=52;break;case 44:if(!this.ruleForm.id){e.next=49;break}return e.next=47,this.$api.update("weixiujilu",this.ruleForm);case 47:e.next=51;break;case 49:return e.next=51,this.$api.add("weixiujilu",this.ruleForm);case 51:this.$utils.msgBack("提交成功");case 52:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(i){this.index=i.target.value},bindDateChange:function(i){this.date=i.target.value},getDate:function(i){var e=new Date,t=e.getFullYear(),n=e.getMonth()+1,r=e.getDate();return"start"===i?t-=60:"end"===i&&(t+=2),n=n>9?n:"0"+n,r=r>9?r:"0"+r,"".concat(t,"-").concat(n,"-").concat(r)},toggleTab:function(i){this.$refs[i].show()}}};e.default=c}).call(this,t("543d")["default"])}},[["4d1c","common/runtime","common/vendor"]]]);