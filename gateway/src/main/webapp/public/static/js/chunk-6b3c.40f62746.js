(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6b3c"],{"/SD7":function(e,t,a){"use strict";var s=a("hxdy");a.n(s).a},"/rcc":function(e,t,a){},"7G6Q":function(e,t,a){"use strict";var s=a("FWKZ");a.n(s).a},"7I4c":function(e,t,a){"use strict";var s=a("hdDC");a.n(s).a},"9GgJ":function(e,t,a){"use strict";var s={name:"XrHeader",components:{},props:{iconClass:[String,Array],iconColor:String,label:String,showSearch:{type:Boolean,default:!1},searchIconType:{type:String,default:"text"},placeholder:{type:String,default:"请输入内容"},ftTop:{type:String,default:"15px"},content:[String,Number],inputAttr:{type:Object,default:function(){}}},data:function(){return{search:""}},computed:{},watch:{content:{handler:function(){this.search!=this.content&&(this.search=this.content)},immediate:!0}},mounted:function(){},beforeDestroy:function(){},methods:{inputChange:function(){this.$emit("update:content",this.search)},searchClick:function(){this.$emit("search",this.search)}}},o=(a("zIzm"),a("KHd+")),n=Object(o.a)(s,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("flexbox",{staticClass:"xr-header"},[e.iconClass?a("div",{staticClass:"xr-header__icon",style:{backgroundColor:e.iconColor}},[a("i",{class:e.iconClass})]):e._e(),e._v(" "),a("div",{staticClass:"xr-header__label"},[e.$slots.label?e._t("label"):[e._v(e._s(e.label))]],2),e._v(" "),e.showSearch?a("el-input",e._b({staticClass:"xr-header__search",class:{"is-text":"text"===e.searchIconType},style:{"margin-top":e.ftTop},attrs:{placeholder:e.placeholder},on:{input:e.inputChange},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.searchClick(t):null}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}},"el-input",e.inputAttr,!1),["text"===e.searchIconType?a("el-button",{attrs:{slot:"append",type:"primary"},nativeOn:{click:function(t){return e.searchClick(t)}},slot:"append"},[e._v("搜索")]):a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},nativeOn:{click:function(t){return e.searchClick(t)}},slot:"append"})],1):e._e(),e._v(" "),a("div",{staticClass:"xr-header__ft",style:{top:e.ftTop}},[e._t("ft")],2)],1)},[],!1,null,"7bba770c",null);n.options.__file="index.vue";t.a=n.exports},CEXg:function(e,t,a){"use strict";a.r(t);var s=a("t3Un");var o={name:"LogWelcome",components:{Reminder:a("jzeO").a},data:function(){return{loading:!1,list:[]}},created:function(){this.getDetail()},methods:{getDetail:function(){var e,t=this;this.loading=!0,Object(s.a)({url:"adminConfig/getLogWelcomeSpeechList",method:"post",data:e}).then(function(e){t.loading=!1,t.list=e.data||[]}).catch(function(){t.loading=!1})},addItem:function(){this.list.push({value:""})},deleteItem:function(e,t){this.list.splice(t,1)},save:function(){for(var e,t=this,a=[],o=0;o<this.list.length;o++){var n=this.list[o];n.value&&a.push(n.value)}0!=a.length?(this.loading=!0,(e=a,Object(s.a)({url:"adminConfig/setLogWelcomeSpeech",method:"post",headers:{"Content-Type":"application/json;charset=UTF-8"},data:e})).then(function(e){t.loading=!1,t.getDetail(),t.$message.success("操作成功")}).catch(function(){t.loading=!1})):this.$message.error("请输入欢迎语")}}},n=(a("II4X"),a("KHd+")),l=Object(n.a)(o,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[a("div",{staticClass:"content-title"},[a("span",[e._v("日志欢迎语")]),e._v(" "),a("el-button",{staticClass:"rt",attrs:{type:"primary",size:"medium"},on:{click:e.save}},[e._v("保存")])],1),e._v(" "),a("div",{staticClass:"content-body"},[a("reminder",{staticClass:"reminder",attrs:{content:"以下内容为系统默认欢迎语，在日志随机展示，可自定义更改欢迎语。"}}),e._v(" "),e._l(e.list,function(t,s){return a("div",{key:s,staticClass:"input-item"},[a("el-input",{attrs:{maxlength:100},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"item.value"}}),e._v(" "),a("i",{staticClass:"el-icon-remove",on:{click:function(a){e.deleteItem(t,s)}}})],1)}),e._v(" "),a("el-button",{attrs:{type:"text"},on:{click:e.addItem}},[e._v("+添加欢迎语")])],2)])},[],!1,null,"31979697",null);l.options.__file="LogWelcome.vue";var i=l.exports,r=a("9GgJ"),c=a("Dr0m"),m={name:"CalendarType",components:{},data:function(){return{loading:!1,title:"新建日程类型",showCreate:!1,colorList:c.a.colorList,selectColor:"#53D397",form:{typeName:"",color:"#53D397",typeId:""},rule:{typeName:[{required:!0,message:"请输入类型名称",trigger:"blur"},{min:0,max:10,message:"请输入小于10个字符",trigger:"blur"}]},list:[]}},created:function(){this.getDetail()},methods:{getDetail:function(){var e,t=this;this.loading=!0,Object(s.a)({url:"oaCalendar/queryTypeList",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}}).then(function(e){t.loading=!1,t.list=e.data||[]}).catch(function(){t.loading=!1})},addItem:function(){this.title="新建日程类型",this.form={typeName:""},this.showCreate=!0},editItem:function(e){this.title="编辑日程类型",this.form=e,this.selectColor=e.color,this.showCreate=!0},deleteItem:function(e){var t=this;this.$confirm("此操作将永久删除类型, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var a;(a=e.typeId,Object(s.a)({url:"oaCalendar/delete/"+a,method:"post"})).then(function(e){t.$message({type:"success",message:"删除成功!"}),t.getDetail()}).catch(function(){})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},save:function(){var e=this;this.form.color=this.selectColor,this.$refs.form.validate(function(t){var a;t&&(a=e.form,Object(s.a)({url:"oaCalendar/addOrUpdate",method:"post",data:a,headers:{"Content-Type":"application/json;charset=UTF-8"}})).then(function(t){e.getDetail(),e.showCreate=!1,e.$message.success("操作成功")}).catch(function(){})})},changeColor:function(e){this.selectColor=e},close:function(){this.$refs.form.resetFields()}}},u=(a("7I4c"),Object(n.a)(m,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[e._m(0),e._v(" "),a("div",{staticClass:"content-body"},[e._l(e.list,function(t,s){return a("flexbox",{key:s,staticClass:"input-item"},[a("div",{staticClass:"block_box"},[a("div",{staticClass:"block",style:{backgroundColor:t.color}}),e._v(" "),a("span",[e._v(e._s(t.typeName))])]),e._v(" "),a("i",{staticClass:"wk wk-edit",on:{click:function(a){e.editItem(t)}}}),e._v(" "),a("i",{staticClass:"el-icon-delete-solid",on:{click:function(a){e.deleteItem(t)}}})])}),e._v(" "),a("el-button",{attrs:{type:"text"},on:{click:e.addItem}},[e._v("+添加日程类型")]),e._v(" "),a("el-dialog",{attrs:{title:e.title,visible:e.showCreate,"append-to-body":"",width:"580px"},on:{"update:visible":function(t){e.showCreate=t},close:e.close}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rule,"label-position":"left","label-width":"80px"}},[a("el-form-item",{attrs:{label:"类型名称",prop:"typeName"}},[a("el-input",{attrs:{placeholder:"请输入类型名称"},model:{value:e.form.typeName,callback:function(t){e.$set(e.form,"typeName",t)},expression:"form.typeName"}}),e._v(" "),a("div",{staticClass:"block_circle color_active",style:{backgroundColor:e.selectColor}})],1)],1),e._v(" "),a("flexbox",[a("label",{staticClass:"label_color"},[e._v("图标颜色")]),e._v(" "),e._l(e.colorList,function(t){return a("div",{key:t,staticClass:"block_circle",style:{backgroundColor:t},on:{click:function(a){e.changeColor(t)}}})})],2),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.showCreate=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{directives:[{name:"debounce",rawName:"v-debounce",value:e.save,expression:"save"}],attrs:{type:"primary"}},[e._v("确 定")])],1)],1)],2)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"content-title"},[t("span",[this._v("日程类型")])])}],!1,null,"7d56818c",null));u.options.__file="CalendarType.vue";var d=u.exports,v=a("QbLZ"),p=a.n(v),h=a("EP+0"),f=a("8GhS"),y={name:"LogRuleSet",components:{CreateSections:h.a,XhUserCell:f.p},data:function(){return{loading:!1,weekDaysOptions:[{label:"周一",value:"1"},{label:"周二",value:"2"},{label:"周三",value:"3"},{label:"周四",value:"4"},{label:"周五",value:"5"},{label:"周六",value:"6"},{label:"周日",value:"7"}],dayTimeOptions:[],monthTimeOptions:[],dayForm:{effectiveDay:["1","2","3","4","5"],memberUser:[]},weekForm:{memberUser:[]},monthForm:{memberUser:[]}}},created:function(){for(var e=7;e<=23;e++)this.dayTimeOptions.push(e<10?"0"+e+":00":e+":00");for(var t=1;t<=31;t++)this.monthTimeOptions.push({label:"每月"+t+"号",value:t});this.getDetail()},methods:{getDetail:function(){var e,t=this;this.loading=!0,Object(s.a)({url:"oaLog/queryOaLogRuleList",method:"post",data:e}).then(function(e){t.loading=!1;var a=e.data[0]||{};t.dayForm={type:a.type,status:a.status,ruleId:a.ruleId,memberUser:a.memberUser||[],effectiveDay:a.effectiveDay?a.effectiveDay.split(","):[],startTime:a.startTime,endTime:a.endTime};var s=e.data[1]||{};t.weekForm={type:s.type,status:s.status,ruleId:s.ruleId,memberUser:s.memberUser||[],startDay:s.startDay,endDay:s.endDay};var o=e.data[2]||{};t.monthForm={type:o.type,status:o.status,ruleId:o.ruleId,memberUser:o.memberUser||[],startDay:o.startDay,endDay:o.endDay}}).catch(function(){t.loading=!1})},dayUserChage:function(e){this.dayForm.memberUser=e.value||[],this.dayForm.memberUserId=this.dayForm.memberUser.map(function(e){return e.userId}).join(",")},weekUserChage:function(e){this.weekForm.memberUser=e.value||[],this.weekForm.memberUserId=this.weekForm.memberUser.map(function(e){return e.userId}).join(",")},monthUserChage:function(e){this.monthForm.memberUser=e.value||[],this.monthForm.memberUserId=this.monthForm.memberUser.map(function(e){return e.userId}).join(",")},save:function(){var e=this;if(1==this.dayForm.status)for(var t in this.dayForm){var a=this.dayForm[t];if("weekDaysOptions"==t&&0==a.length)return void this.$message.error("请选择需要统计的日志");if(("startTime"==t||"endTime"==t)&&!a)return void this.$message.error("请选择日报规则时间")}if(1==this.weekForm.status)for(var o in this.weekForm){var n=this.weekForm[o];if(("startDay"==o||"endDay"==o)&&!n)return void this.$message.error("请选择周报规则时间")}if(1==this.monthForm.status)for(var l in this.monthForm){var i=this.monthForm[l];if(("startDay"==l||"endDay"==l)&&!i)return void this.$message.error("请选择月报规则时间")}this.loading=!0;var r,c=p()({},this.dayForm);c.effectiveDay=c.effectiveDay.join(","),(r=[c,this.weekForm,this.monthForm],Object(s.a)({url:"oaLog/setOaLogRule",method:"post",headers:{"Content-Type":"application/json;charset=UTF-8"},data:r})).then(function(t){e.loading=!1,e.getDetail(),e.$message.success("操作成功")}).catch(function(){e.loading=!1})}}},b=(a("7G6Q"),Object(n.a)(y,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[a("div",{staticClass:"content-title"},[a("span",[e._v("日志规则设置")]),e._v(" "),a("el-tooltip",{attrs:{content:"您可以配置日志规则，在日志模块可以根据日志规则来统计日志完成情况",effect:"dark",placement:"top"}},[a("i",{staticClass:"wk wk-help wk-help-tips"})]),e._v(" "),a("el-button",{staticClass:"rt",attrs:{type:"primary",size:"medium"},on:{click:e.save}},[e._v("保存")])],1),e._v(" "),a("div",{staticClass:"content-body"},[a("create-sections",{attrs:{title:"日报规则"}},[a("div",{staticClass:"rule-set",class:{"is-inactive":0==e.dayForm.status},attrs:{slot:"header"},slot:"header"},[a("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-color":"#2362FB"},model:{value:e.dayForm.status,callback:function(t){e.$set(e.dayForm,"status",t)},expression:"dayForm.status"}}),e._v(" "),a("span",{staticClass:"label"},[e._v("已启用规则")])],1),e._v(" "),a("el-form",{ref:"dayForm",attrs:{model:e.dayForm,"label-width":"120px"}},[a("el-form-item",[a("template",{slot:"label"},[a("span",[e._v("谁需要提交")]),e._v(" "),a("el-tooltip",{attrs:{content:"默认全部员工",effect:"dark",placement:"top"}},[a("i",{staticClass:"wk wk-help wk-help-tips"})])],1),e._v(" "),a("xh-user-cell",{attrs:{value:e.dayForm.memberUser,radio:!1},on:{"value-change":e.dayUserChage}})],2),e._v(" "),a("el-form-item",{attrs:{label:"需要统计的日志"}},[a("el-checkbox-group",{model:{value:e.dayForm.effectiveDay,callback:function(t){e.$set(e.dayForm,"effectiveDay",t)},expression:"dayForm.effectiveDay"}},e._l(e.weekDaysOptions,function(t){return a("el-checkbox",{key:t.value,attrs:{label:t.value}},[e._v(e._s(t.label))])}))],1),e._v(" "),a("el-form-item",{attrs:{label:"开始提交时间"}},[a("el-select",{model:{value:e.dayForm.startTime,callback:function(t){e.$set(e.dayForm,"startTime",t)},expression:"dayForm.startTime"}},e._l(e.dayTimeOptions,function(e){return a("el-option",{key:e,attrs:{label:e,value:e}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"结束提交时间"}},[a("el-select",{model:{value:e.dayForm.endTime,callback:function(t){e.$set(e.dayForm,"endTime",t)},expression:"dayForm.endTime"}},e._l(e.dayTimeOptions,function(e){return a("el-option",{key:e,attrs:{label:e,value:e}})}))],1)],1)],1),e._v(" "),a("create-sections",{attrs:{title:"周报规则"}},[a("div",{staticClass:"rule-set",class:{"is-inactive":0==e.weekForm.status},attrs:{slot:"header"},slot:"header"},[a("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-color":"#2362FB"},model:{value:e.weekForm.status,callback:function(t){e.$set(e.weekForm,"status",t)},expression:"weekForm.status"}}),e._v(" "),a("span",{staticClass:"label"},[e._v("已启用规则")])],1),e._v(" "),a("el-form",{ref:"weekForm",attrs:{model:e.weekForm,"label-width":"120px"}},[a("el-form-item",[a("template",{slot:"label"},[a("span",[e._v("谁需要提交")]),e._v(" "),a("el-tooltip",{attrs:{content:"默认全部员工",effect:"dark",placement:"top"}},[a("i",{staticClass:"wk wk-help wk-help-tips"})])],1),e._v(" "),a("xh-user-cell",{attrs:{value:e.weekForm.memberUser,radio:!1},on:{"value-change":e.weekUserChage}})],2),e._v(" "),a("el-form-item",[a("template",{slot:"label"},[a("span",[e._v("开始提交时间")]),e._v(" "),a("el-tooltip",{attrs:{content:"开始时间为选择时间的00:00",effect:"dark",placement:"top"}},[a("i",{staticClass:"wk wk-help wk-help-tips"})])],1),e._v(" "),a("el-select",{model:{value:e.weekForm.startDay,callback:function(t){e.$set(e.weekForm,"startDay",t)},expression:"weekForm.startDay"}},e._l(e.weekDaysOptions,function(e){return a("el-option",{key:e.value,attrs:{label:"每"+e.label,value:parseInt(e.value)}})}))],2),e._v(" "),a("el-form-item",[a("template",{slot:"label"},[a("span",[e._v("结束提交时间")]),e._v(" "),a("el-tooltip",{attrs:{content:"截止时间为选择时间的24:00",effect:"dark",placement:"top"}},[a("i",{staticClass:"wk wk-help wk-help-tips"})])],1),e._v(" "),a("el-select",{model:{value:e.weekForm.endDay,callback:function(t){e.$set(e.weekForm,"endDay",t)},expression:"weekForm.endDay"}},e._l(e.weekDaysOptions,function(e){return a("el-option",{key:e.value,attrs:{label:"每"+e.label,value:parseInt(e.value)}})}))],2)],1)],1),e._v(" "),a("create-sections",{attrs:{title:"月报规则"}},[a("div",{staticClass:"rule-set",class:{"is-inactive":0==e.monthForm.status},attrs:{slot:"header"},slot:"header"},[a("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-color":"#2362FB"},model:{value:e.monthForm.status,callback:function(t){e.$set(e.monthForm,"status",t)},expression:"monthForm.status"}}),e._v(" "),a("span",{staticClass:"label"},[e._v("已启用规则")])],1),e._v(" "),a("el-form",{ref:"monthForm",attrs:{model:e.monthForm,"label-width":"120px"}},[a("el-form-item",[a("template",{slot:"label"},[a("span",[e._v("谁需要提交")]),e._v(" "),a("el-tooltip",{attrs:{content:"默认全部员工",effect:"dark",placement:"top"}},[a("i",{staticClass:"wk wk-help wk-help-tips"})])],1),e._v(" "),a("xh-user-cell",{attrs:{value:e.monthForm.memberUser,radio:!1},on:{"value-change":e.monthUserChage}})],2),e._v(" "),a("el-form-item",[a("template",{slot:"label"},[a("span",[e._v("开始提交时间")]),e._v(" "),a("el-tooltip",{attrs:{content:"开始时间为选择时间的00:00",effect:"dark",placement:"top"}},[a("i",{staticClass:"wk wk-help wk-help-tips"})])],1),e._v(" "),a("el-select",{model:{value:e.monthForm.startDay,callback:function(t){e.$set(e.monthForm,"startDay",t)},expression:"monthForm.startDay"}},e._l(e.monthTimeOptions,function(e){return a("el-option",{key:e.value,attrs:{label:""+e.label,value:e.value}})}))],2),e._v(" "),a("el-form-item",[a("template",{slot:"label"},[a("span",[e._v("结束提交时间")]),e._v(" "),a("el-tooltip",{attrs:{content:"截止时间为选择时间的24:00",effect:"dark",placement:"top"}},[a("i",{staticClass:"wk wk-help wk-help-tips"})])],1),e._v(" "),a("el-select",{model:{value:e.monthForm.endDay,callback:function(t){e.$set(e.monthForm,"endDay",t)},expression:"monthForm.endDay"}},e._l(e.monthTimeOptions,function(e){return a("el-option",{key:e.value,attrs:{label:""+e.label,value:e.value}})}))],2)],1)],1)],1)])},[],!1,null,"541564ce",null));b.options.__file="LogRuleSet.vue";var _=b.exports,k={name:"OtherSystem",components:{LogWelcome:i,CalendarType:d,XrHeader:r.a,LogRuleSet:_},data:function(){return{menuList:[{label:"日志欢迎语",key:"LogWelcome"},{label:"日志规则设置",key:"LogRuleSet"},{label:"日程类型设置",key:"CalendarType"}],menuIndex:"LogWelcome",types:""}},computed:{},methods:{menuSelect:function(e){this.menuIndex=e}}},g=(a("xPtf"),Object(n.a)(k,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"system-customer"},[a("xr-header",{attrs:{"icon-class":"wk wk-manage","icon-color":"#2EC2F9",label:"其他设置"}}),e._v(" "),a("div",{staticClass:"customer-content"},[a("div",{staticClass:"system-view-nav"},e._l(e.menuList,function(t,s){return a("div",{key:s,staticClass:"menu-item",class:{"is-select":t.key==e.menuIndex},on:{click:function(a){e.menuSelect(t.key)}}},[e._v("\n        "+e._s(t.label)+"\n      ")])})),e._v(" "),a("keep-alive",[a(e.menuIndex,{tag:"component",staticClass:"system-view-content"})],1)],1)],1)},[],!1,null,"3ab5942a",null));g.options.__file="index.vue";t.default=g.exports},Dr0m:function(e,t,a){"use strict";t.a={colorList:["#53D397","#20C1BD","#58DADA","#0FC9E7","#3498DB","#4586FF","#8983F3","#AEA1EA","#FF6699","#F24D70","#FF6F6F"]}},FWKZ:function(e,t,a){},II4X:function(e,t,a){"use strict";var s=a("/rcc");a.n(s).a},Ow7O:function(e,t,a){},hdDC:function(e,t,a){},hxdy:function(e,t,a){},ihDC:function(e,t,a){},jzeO:function(e,t,a){"use strict";var s={name:"Reminder",components:{},props:{closeShow:{type:Boolean,default:!1},content:{type:String,default:"内容"},fontSize:{type:String,default:"13"}},data:function(){return{}},computed:{},mounted:function(){},destroyed:function(){},methods:{close:function(){this.$emit("close")}}},o=(a("/SD7"),a("KHd+")),n=Object(o.a)(s,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("flexbox",{staticClass:"reminder-wrapper"},[a("flexbox",{staticClass:"reminder-body",attrs:{align:"stretch"}},[a("i",{staticClass:"wk wk-warning reminder-icon"}),e._v(" "),a("div",{staticClass:"reminder-content",style:{"font-size":e.fontSize+"px"},domProps:{innerHTML:e._s(e.content)}}),e._v(" "),e._t("default"),e._v(" "),e.closeShow?a("i",{staticClass:"el-icon-close close",on:{click:e.close}}):e._e()],2)],1)},[],!1,null,"d9a726d6",null);n.options.__file="Reminder.vue";t.a=n.exports},xPtf:function(e,t,a){"use strict";var s=a("Ow7O");a.n(s).a},zIzm:function(e,t,a){"use strict";var s=a("ihDC");a.n(s).a}}]);