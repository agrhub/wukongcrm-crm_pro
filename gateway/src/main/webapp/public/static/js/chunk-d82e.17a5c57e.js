(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-d82e"],{"+nK1":function(e,t,i){"use strict";var s=i("cSIG");i.n(s).a},"/1Eu":function(e,t,i){"use strict";var s=i("GXSS");i.n(s).a},"07TH":function(e,t,i){},"3ojK":function(e,t,i){"use strict";var s=i("c2Co"),a=i("4XAY"),n=i("ZoMv"),l=i("Ew9n"),o=i("raay"),c=i("eOwn"),r=i("BzA1"),d=i("w4ZA"),u=i("3gPr"),h=i("CjUg"),p=i("8OTK"),f=i("f6dm"),m={name:"LeadsDetail",components:{SlideView:l.a,CRMDetailHead:o.a,Activity:c.a,CRMEditBaseInfo:d.a,RelativeFiles:u.a,RelativeHandle:h.a,ImportInfo:r.a,CRMAllCreate:p.default},mixins:[f.a],props:{id:[String,Number],listenerIDs:{type:Array,default:function(){return["crm-main-container"]}},noListenerIDs:{type:Array,default:function(){return[]}},noListenerClass:{type:Array,default:function(){return["el-table__body"]}}},data:function(){return{loading:!1,crmType:"leads",headDetails:[{title:"姓名",value:""},{title:"线索来源",value:""},{title:"手机",value:""},{title:"负责人",value:""},{title:"创建时间",value:""}],tabCurrentName:"Activity",isCreate:!1,showImportInfo:!0,importList:[]}},computed:{activityHandle:function(){var e=[];return this.canCreateFollowRecord&&(e=[{type:"log",label:"写跟进"}]),e},tabNames:function(){return[{label:"活动",name:"Activity"},{label:"详细资料",name:"CRMEditBaseInfo"},{label:this.getTabName("附件",this.tabsNumber.fileCount),name:"RelativeFiles"},{label:"操作记录",name:"RelativeHandle"}]}},mounted:function(){},methods:{getDetial:function(){var e=this;this.loading=!0,Object(s.i)(this.id).then(function(t){e.detailData=t.data,e.headDetails[0].value=t.data.name,e.headDetails[1].value=t.data.source,e.headDetails[2].value=t.data.mobile,e.headDetails[3].value=t.data.ownerUserName,e.headDetails[4].value=t.data.createTime,e.loading=!1}).catch(function(){e.loading=!1,e.hideView()}),this.getBaseInfo()},getBaseInfo:function(){var e=this;this.loading=!0,Object(a.x)({types:n.a[this.crmType],id:this.id}).then(function(t){e.importList=t.data,e.loading=!1}).catch(function(){e.loading=!1})},hideView:function(){this.$emit("hide-view")}}},v=(i("HVdV"),i("KHd+")),y=Object(v.a)(m,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("slide-view",{directives:[{name:"empty",rawName:"v-empty",value:!e.canShowDetail,expression:"!canShowDetail"}],attrs:{"listener-ids":e.listenerIDs,"no-listener-ids":e.noListenerIDs,"no-listener-class":e.noListenerClass,"body-style":{padding:0,height:"100%"},"xs-empty-icon":"nopermission","xs-empty-text":"暂无权限"},on:{afterEnter:e.viewAfterEnter,close:e.hideView}},[i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"crmDetailMain",staticClass:"detail-main"},[e.canShowDetail&&e.detailData?i("flexbox",{staticClass:"d-container",attrs:{direction:"column",align:"stretch"}},[i("c-r-m-detail-head",{attrs:{detail:e.detailData,"head-details":e.headDetails,id:e.id,"crm-type":e.crmType},on:{handle:e.detailHeadHandle,close:e.hideView}},[i("template",{slot:"name"},[i("el-tooltip",{attrs:{content:0==e.detailData.star?"添加关注":"取消关注",effect:"dark",placement:"top"}},[i("i",{staticClass:"wk wk-focus-on focus-icon",class:{active:0!=e.detailData.star},on:{click:function(t){e.toggleStar()}}})])],1)],2),e._v(" "),i("flexbox",{staticClass:"d-container-bd",attrs:{align:"stretch"}},[i("el-tabs",{staticClass:"d-container-bd--left",attrs:{type:"border-card"},model:{value:e.tabCurrentName,callback:function(t){e.tabCurrentName=t},expression:"tabCurrentName"}},e._l(e.tabNames,function(t,s){return i("el-tab-pane",{key:s,attrs:{label:t.label,name:t.name,lazy:""}},[i(t.name,{tag:"component",attrs:{detail:e.detailData,id:e.id,handle:e.activityHandle,"crm-type":e.crmType}})],1)})),e._v(" "),i("transition",{attrs:{name:"slide-fade"}},[i("el-tabs",{directives:[{name:"show",rawName:"v-show",value:e.showImportInfo,expression:"showImportInfo"}],staticClass:"d-container-bd--right",attrs:{value:"chiefly-contacts",type:"border-card"}},[i("el-tab-pane",{attrs:{label:"重要信息",name:"chiefly-contacts",lazy:""}},[i("import-info",{staticClass:"import-info",attrs:{list:e.importList}})],1)],1)],1)],1)],1):e._e()],1),e._v(" "),i("el-button",{staticClass:"firse-button",on:{click:function(t){e.showImportInfo=!e.showImportInfo}}},[e._v("重"),i("br"),e._v("要"),i("br"),e._v("信"),i("br"),e._v("息"),i("br"),i("i",{staticClass:"el-icon-arrow-right el-icon--right",class:{"is-reverse":!e.showImportInfo}})]),e._v(" "),e.isCreate?i("c-r-m-all-create",{attrs:{action:{type:"update",id:e.id,batchId:e.detailData.batchId},"crm-type":e.crmType},on:{"save-success":e.editSaveSuccess,close:function(t){e.isCreate=!1}}}):e._e()],1)},[],!1,null,"7b593c12",null);y.options.__file="Detail.vue";t.a=y.exports},BzA1:function(e,t,i){"use strict";var s=i("a/5N"),a={name:"ImportInfo",components:{},props:{list:Array},data:function(){return{}},computed:{showList:function(){return this.list.filter(function(e){return"file"!==e.formType})}},watch:{},mounted:function(){},beforeDestroy:function(){},methods:{getValueContent:function(e){if("map_address"===e.formType)return e.value?e.value.detailAddress:"";if("structure"===e.formType||"user"===e.formType||"checkbox"===e.formType){if(Object(s.a)(e.value)){var t={structure:"name",user:"realname",checkbox:""}[e.formType];return e.value.map(function(e){return t?e[t]:e}).join("，")}return""}if("single_user"===e.formType)return Object(s.c)(e.value)&&e.value.realname?e.value.realname:"";if("customer"===e.formType||"business"===e.formType||"contract"===e.formType||"contacts"===e.formType||"category"===e.formType||"statusName"===e.formType||"typeName"===e.formType){var i={customer:"customerName",business:"businessName",contract:"contractNum",contacts:"contactsName",category:"categoryName",statusName:"statusName",typeName:"typeName"}[e.formType];return Object(s.a)(e.value)?e.value.length>0?e.value[0][i]:"":e.value?e.value[i]:""}return e.value}}},n=(i("/1Eu"),i("KHd+")),l=Object(n.a)(a,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[i("div",{staticClass:"content-title"},[e._v("基本信息")]),e._v(" "),e._l(e.showList,function(t,s){return i("p",{key:s,staticClass:"detail-cell"},[i("span",{staticClass:"detail-cell__label"},[e._v("\n      "+e._s(t.name)+"\n    ")]),i("br"),e._v(" "),i("span",{staticClass:"detail-cell__value"},[e._v("\n      "+e._s(e.getValueContent(t))+"\n    ")])])})],2)},[],!1,null,"93b29b9c",null);l.options.__file="ImportInfo.vue";t.a=l.exports},F05O:function(e,t,i){},"G+lJ":function(e,t,i){"use strict";var s=i("tuyL");i.n(s).a},GXSS:function(e,t,i){},HVdV:function(e,t,i){"use strict";var s=i("07TH");i.n(s).a},ItBn:function(e,t,i){},KPHR:function(e,t,i){"use strict";i.r(t);var s=i("QbLZ"),a=i.n(s),n=i("t8Uk"),l=i("3ojK"),o=i("5QVi"),c={name:"LeadsIndex",components:{LeadsDetail:l.a,LeadsCreate:n.a},mixins:[o.a],data:function(){return{crmType:"leads",createShow:!1}},computed:{menuItems:function(){var e=[];return this.crm&&this.crm.leads&&e.push({title:"线索管理",path:"leads",icon:i("keIY")}),e}},mounted:function(){},deactivated:function(){this.$refs.elMenu&&(this.$refs.elMenu.activeIndex=this.crmType)},methods:{menuSelect:function(e,t){this.$emit("menu-select",e,t)},cellClassName:function(e){e.row;var t=e.column;e.rowIndex,e.columnIndex;return"leadsName"===t.property?"can-visit--underline":""},createClick:function(){this.createShow=!0}}},r=(i("wslZ"),i("KHd+")),d=Object(r.a)(c,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("c-r-m-list-head",{attrs:{search:e.search,"crm-type":e.crmType,"create-fun":e.createClick,title:"线索管理",placeholder:"请输入线索名称/手机/电话","main-title":"新建线索"},on:{"update:search":function(t){e.search=t},"on-handle":e.listHeadHandle,"on-search":e.crmSearch,"on-export":e.exportInfos}},[e.menuItems.length>1?i("el-menu",{ref:"elMenu",attrs:{slot:"icon","default-active":e.crmType,mode:"horizontal","active-text-color":"#2362FB"},on:{select:e.menuSelect},slot:"icon"},e._l(e.menuItems,function(t,s){return i("el-menu-item",{key:s,attrs:{index:t.path}},[i("img",{attrs:{src:t.icon}}),e._v(" "),i("span",[e._v(e._s(t.title))])])})):e._e()],1),e._v(" "),i("div",{directives:[{name:"empty",rawName:"v-empty",value:!e.crm.leads.index,expression:"!crm.leads.index"}],staticClass:"crm-container",attrs:{"xs-empty-icon":"nopermission","xs-empty-text":"暂无权限"}},[i("c-r-m-table-head",{ref:"crmTableHead",attrs:{"crm-type":e.crmType,"sort-data":e.sortData},on:{filter:e.handleFilter,handle:e.handleHandle,scene:e.handleScene}}),e._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"n-table--border",staticStyle:{width:"100%"},attrs:{id:"crm-table","row-height":40,data:e.list,height:e.tableHeight,"cell-class-name":e.cellClassName,"row-key":e.crmType+"Id","use-virtual":"",stripe:"",border:"","highlight-current-row":""},on:{"row-click":e.handleRowClick,"sort-change":e.sortChange,"header-dragend":e.handleHeaderDragend,"selection-change":e.handleSelectionChange}},[i("el-table-column",{attrs:{"show-overflow-tooltip":"","reserve-selection":"",type:"selection",align:"center",width:"55"}}),e._v(" "),e._l(e.fieldList,function(t,s){return i("el-table-column",{key:s,attrs:{fixed:0==s,prop:t.prop,label:t.label,width:t.width,formatter:e.fieldFormatter,sortable:"custom","show-overflow-tooltip":""}})}),e._v(" "),i("el-table-column"),e._v(" "),i("el-table-column",{attrs:{label:"关注",align:"center",fixed:"right",width:"60"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-tooltip",{attrs:{content:0==t.row.star?"添加关注":"取消关注",effect:"dark",placement:"top"}},[i("i",{staticClass:"wk wk-focus-on focus-icon",class:{active:0!=t.row.star},on:{click:function(i){e.toggleStar(t.row)}}})])]}}])}),e._v(" "),i("el-table-column",{attrs:{resizable:!1,fixed:"right",width:"40"},scopedSlots:e._u([{key:"header",fn:function(t){return[i("field-set",{attrs:{"crm-type":e.crmType},on:{change:e.setSave}})]}}])}),e._v(" "),i("wk-empty",{attrs:{slot:"empty",props:{buttonTitle:"新建线索",showButton:e.saveAuth}},on:{click:e.createClick},slot:"empty"})],2),e._v(" "),i("div",{staticClass:"p-contianer"},[i("el-pagination",{staticClass:"p-bar",attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.pageSize,total:e.total,"pager-count":5,background:"",layout:"prev, pager, next, sizes, total, jumper"},on:{"update:pageSize":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1),e._v(" "),e.showDview?i("leads-detail",{staticClass:"d-view",attrs:{id:e.rowID},on:{handle:e.handleHandle,"hide-view":function(t){e.showDview=!1}}}):e._e(),e._v(" "),e.createShow?i("leads-create",{on:{close:function(t){e.createShow=!1},"save-success":e.handleHandle}}):e._e()],1)},[],!1,null,"64634e24",null);d.options.__file="index.vue";var u=d.exports,h=i("L2JU"),p={name:"LeadsAllIndex",components:{LeadsIndex:u},props:{},data:function(){return{componentName:""}},computed:a()({},Object(h.b)(["crm"])),watch:{},mounted:function(){this.crm&&this.crm.leads&&(this.componentName="LeadsIndex")},beforeDestroy:function(){},methods:{menuSelect:function(e,t){this.componentName={leads:"LeadsIndex"}[e]}}},f=(i("+nK1"),Object(r.a)(p,function(){var e=this.$createElement,t=this._self._c||e;return t("keep-alive",[t(this.componentName,{tag:"component",on:{"menu-select":this.menuSelect}})],1)},[],!1,null,"5fe65204",null));f.options.__file="AllIndex.vue";t.default=f.exports},RXH0:function(e,t,i){"use strict";var s=i("ItBn");i.n(s).a},ZX9L:function(e,t,i){"use strict";var s={name:"TimeTypeSelect",props:{defaultType:[String,Object],width:{type:Number,default:200},options:{type:Array,default:function(){return[{label:"今天",value:"today"},{label:"昨天",value:"yesterday"},{label:"本周",value:"week"},{label:"上周",value:"lastWeek"},{label:"本月",value:"month"},{label:"上月",value:"lastMonth"},{label:"本季度",value:"quarter"},{label:"上季度",value:"lastQuarter"},{label:"本年",value:"year"},{label:"去年",value:"lastYear"}]}}},data:function(){return{selectType:{label:"本年",value:"year"},showTypePopover:!1,showCustomContent:!1,sureCustomContent:!1,startTime:"",endTime:""}},computed:{typeShowValue:function(){return this.sureCustomContent?this.startTime||this.endTime?(this.startTime||"")+"-"+(this.endTime||""):"":this.selectType.label}},watch:{defaultType:function(){this.selectType.value!=this.defaultType&&(this.selectType=this.getDefaultTypeValue(this.defaultType))}},mounted:function(){void 0!==this.defaultType?"string"==typeof this.defaultType?this.selectType=this.getDefaultTypeValue(this.defaultType):this.defaultType.label?this.selectType=this.defaultType:"default"==this.defaultType.type?this.selectType=this.getDefaultTypeValue(this.defaultType.value):"custom"==this.defaultType.type&&(this.sureCustomContent=!0,this.showCustomContent=!0,this.startTime=this.defaultType.startTime,this.endTime=this.defaultType.endTime):this.$emit("change",{type:"default",value:this.selectType.value})},methods:{getDefaultTypeValue:function(e){for(var t=0;t<this.options.length;t++){var i=this.options[t];if(i.value==e)return i}return{label:"本年",value:"year"}},typeSelectClick:function(e){this.showTypePopover=!1,this.sureCustomContent=!1,this.showCustomContent=!1,this.selectType=e,this.$emit("change",{type:"default",value:this.selectType.value})},customSureClick:function(){this.startTime&&this.endTime&&(this.sureCustomContent=!0,this.showTypePopover=!1,this.$emit("change",{type:"custom",startTime:this.startTime,endTime:this.endTime}))}}},a=(i("G+lJ"),i("KHd+")),n=Object(a.a)(s,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-popover",{staticClass:"time-type-select",attrs:{width:e.width,placement:"bottom","popper-class":"no-padding-popover",trigger:"click"},model:{value:e.showTypePopover,callback:function(t){e.showTypePopover=t},expression:"showTypePopover"}},[i("div",{staticClass:"type-popper"},[i("div",{staticClass:"type-content"},[e._l(e.options,function(t,s){return i("div",{key:s,staticClass:"type-content-item",class:{selected:e.selectType.value==t.value&&!e.showCustomContent},on:{click:function(i){e.typeSelectClick(t)}}},[i("div",{staticClass:"mark"}),e._v(e._s(t.label)+"\n      ")])}),e._v(" "),i("div",{staticClass:"type-content-item",class:{selected:e.showCustomContent},on:{click:function(t){e.showCustomContent=!0}}},[i("div",{staticClass:"mark"}),e._v("自定义\n      ")])],2),e._v(" "),e.showCustomContent?i("div",{staticClass:"type-content-custom"},[i("el-date-picker",{attrs:{type:"date","value-format":"yyyy.MM.dd",placeholder:"选择日期"},model:{value:e.startTime,callback:function(t){e.startTime=t},expression:"startTime"}}),e._v(" "),i("el-date-picker",{attrs:{type:"date","value-format":"yyyy.MM.dd",placeholder:"选择日期"},model:{value:e.endTime,callback:function(t){e.endTime=t},expression:"endTime"}}),e._v(" "),i("el-button",{on:{click:e.customSureClick}},[e._v("确定")])],1):e._e()]),e._v(" "),i("el-input",{staticClass:"type-select",style:{width:e.width+"px"},attrs:{slot:"reference",readonly:!0},slot:"reference",model:{value:e.typeShowValue,callback:function(t){e.typeShowValue=t},expression:"typeShowValue"}},[i("i",{class:["el-icon-arrow-up",{"is-reverse":e.showTypePopover}],attrs:{slot:"suffix"},slot:"suffix"})])],1)},[],!1,null,"9dc9cb18",null);n.options.__file="index.vue";t.a=n.exports},cSIG:function(e,t,i){},eOwn:function(e,t,i){"use strict";var s=i("QbLZ"),a=i.n(s),n=i("7Dod"),l=i("6iAj"),o=i("4XAY"),c=i("KTTK"),r=i("mkuN"),d=i("zMq1"),u=i("ye9D"),h=i("NYF1"),p=i("YIeP"),f=i("7Qib");var m={methods:{dispatch:function(e,t,i){for(var s=this.$parent||this.$root,a=s.$options.componentName;s&&(!a||a!==e);)(s=s.$parent)&&(a=s.$options.componentName);s&&s.$emit.apply(s,[t].concat(i))},broadcast:function(e,t,i){(function e(t,i,s){this.$children.forEach(function(a){a.$options.componentName===t?a.$emit.apply(a,[i].concat(s)):e.apply(a,[t,i].concat([s]))})}).call(this,e,t,i)}}},v={name:"LogAdd",components:{CrmRelative:r.a,AddImageList:d.a,AddFileList:u.a,AddRelateList:h.a,CommonWords:p.a},mixins:[m],props:{showBusiness:{type:Boolean,default:!1},showContacts:{type:Boolean,default:!1},contacts:Array,contactsId:[String,Number],followTypes:Array,id:[String,Number],crmType:{type:String,default:""}},data:function(){return{isUnfold:!1,content:"",imgFiles:[],businessAction:{},files:[],showBusinessPopover:!1,business:[],selectContactsId:"",followType:"",nextTime:"",showRelativeType:"",batchId:Object(f.s)()}},computed:{autosize:function(){return this.isUnfold?{minRows:3,maxRows:6}:{minRows:1,maxRows:1}}},watch:{followTypes:function(){this.getDefalutFollowType()},content:function(e){var t=!!(e&&e.length>0);this.dispatch("SlideView","setEditClose",[t])},contactsId:function(){this.selectContactsId=this.contactsId||""},id:{handler:function(){this.businessAction={type:"condition",data:{moduleType:this.crmType,customerId:this.id}}},immediate:!0}},created:function(){this.selectContactsId=this.contactsId||"",this.getDefalutFollowType()},beforeDestroy:function(){},methods:{getDefalutFollowType:function(){this.followTypes&&this.followTypes.length>0?this.followType=this.followTypes[0].value:this.followType=""},resetInfo:function(){this.nextTime="",this.isUnfold=!1,this.content="",this.dispatch("SlideView","setEditClose",[!1]),this.imgFiles=[],this.files=[],this.business=[],this.selectContactsId=this.contactsId||"",this.showRelativeType="",this.batchId=Object(f.s)(),this.getDefalutFollowType()},commonWordsSelect:function(e){var t=this;this.content?this.$confirm("您选中的常用语将覆盖当前填写内容?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",customClass:"is-particulars"}).then(function(){t.content=e}).catch(function(){}):this.content=e},checkRelativeInfos:function(e){"business"==this.showRelativeType&&(this.business=e.data)},barClick:function(e){this.showRelativeType=e,"business"==e?this.showBusinessPopover=!0:"file"==e?this.$refs.fileInput.click():"img"==e&&this.$refs.imgInput.click()},uploadFile:function(e){var t=e.target.files;if(t.length){for(var i=0;i<t.length;i++){if(-1==t[i].type.indexOf("image")&&"img"==this.showRelativeType)return void this.$message.error("请上传正确的文件类型")}for(var s="image/*"==e.target.accept?"img":"file",a=0;a<t.length;a++){var n=t[a];this.uploadFileRequest(n,s)}e.target.value=""}},uploadFileRequest:function(e,t,i){var s=this;this.$wkUploadFile.upload({file:e,params:{type:t,batchId:this.batchId}}).then(function(a){var n=a.res.data||{};n.size=Object(f.h)(e.size),"img"==t?s.imgFiles.push(n):(n.icon=Object(f.o)(e),s.files.push(n)),i&&i()}).catch(function(){})},deleteImage:function(e,t){this.deleteImgOrFile("image",e,t)},deleteFile:function(e,t){this.deleteImgOrFile("file",e,t)},deleteImgOrFile:function(e,t,i){var s=this;this.$confirm("确定删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(c.c)({id:t.fileId}).then(function(t){"image"==e?s.imgFiles.splice(i,1):s.files.splice(i,1),s.$message.success("操作成功")}).catch(function(){})}).catch(function(){})},deleteAllFile:function(e){var t=this;this.batchId&&this.$confirm("确定删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(c.e)({batchId:t.batchId,type:e}).then(function(i){2==e?t.imgFiles=[]:t.files=[],t.$message.success("操作成功")}).catch(function(){})}).catch(function(){})},deleteRelate:function(e,t){this.business.splice(t,1)},inputFocus:function(){var e=this;this.isUnfold=!0,this.$nextTick(function(){e.$refs.textarea.focus(),e.$emit("focus")})},sendClick:function(){this.$emit("send",{id:this.id,content:this.content,files:this.files,images:this.imgFiles,business:this.business,contactsId:this.selectContactsId,batchId:this.batchId,followType:this.followType,nextTime:this.nextTime})},close:function(){this.isUnfold=!1,this.$emit("close")}}},y=(i("RXH0"),i("KHd+")),g=Object(y.a)(v,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:["mix-content",{unfold:!e.isUnfold}]},[e.isUnfold?i("i",{staticClass:"wk wk-close",on:{click:e.close}}):e._e(),e._v(" "),e.isUnfold?i("div",{staticClass:"mix-content-select"},[e.showContacts?i("el-select",{attrs:{clearable:"",placeholder:"选择联系人"},model:{value:e.selectContactsId,callback:function(t){e.selectContactsId=t},expression:"selectContactsId"}},e._l(e.contacts,function(e){return i("el-option",{key:e.contactsId,attrs:{label:e.name,value:e.contactsId}})})):e._e(),e._v(" "),i("el-select",{attrs:{clearable:"",placeholder:"选择跟进方式"},model:{value:e.followType,callback:function(t){e.followType=t},expression:"followType"}},e._l(e.followTypes,function(e){return i("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),i("el-date-picker",{attrs:{editable:!1,type:"datetime",placeholder:"选择下次联系时间","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:e.nextTime,callback:function(t){e.nextTime=t},expression:"nextTime"}}),e._v(" "),i("common-words",{on:{select:e.commonWordsSelect}})],1):e._e(),e._v(" "),i("div",{class:["i-cont",{unfold:!e.isUnfold}]},[e.isUnfold?e._e():i("i",{staticClass:"wk wk-write"}),e._v(" "),i("el-input",{ref:"textarea",attrs:{autosize:e.autosize,maxlength:800,type:"textarea",clearable:"",resize:"none",placeholder:"请输入内容"},on:{focus:e.inputFocus},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}})],1),e._v(" "),e.imgFiles.length>0&&e.isUnfold?i("add-image-list",{attrs:{data:e.imgFiles},on:{delete:e.deleteImage,"delete-all":function(t){e.deleteAllFile(2)},upload:e.uploadFile}}):e._e(),e._v(" "),e.files.length>0&&e.isUnfold?i("add-file-list",{attrs:{data:e.files},on:{delete:e.deleteFile,"delete-all":function(t){e.deleteAllFile(1)}}}):e._e(),e._v(" "),e.business.length>0&&e.isUnfold?i("add-relate-list",{attrs:{data:e.business,type:"business"},on:{delete:e.deleteRelate}}):e._e(),e._v(" "),e.isUnfold?i("div",{staticClass:"bar-cont"},[i("el-button",{staticClass:"handle-button",attrs:{type:"text",icon:"wk wk-picture"},on:{click:function(t){e.barClick("img")}}},[e._v("图片")]),e._v(" "),i("el-button",{staticClass:"handle-button",attrs:{type:"text",icon:"wk wk-file"},on:{click:function(t){e.barClick("file")}}},[e._v("附件")]),e._v(" "),e.showBusiness?i("el-popover",{attrs:{placement:"bottom",width:"700","popper-class":"no-padding-popover",trigger:"click"},model:{value:e.showBusinessPopover,callback:function(t){e.showBusinessPopover=t},expression:"showBusinessPopover"}},[i("crm-relative",{ref:"crmrelative",attrs:{show:e.showBusinessPopover,radio:!1,action:e.businessAction,"selected-data":{business:e.business},"crm-type":"business"},on:{close:function(t){e.showBusinessPopover=!1},changeCheckout:e.checkRelativeInfos}}),e._v(" "),i("el-button",{staticClass:"handle-button",staticStyle:{"margin-left":"10px"},attrs:{slot:"reference",type:"text",icon:"wk wk-associate"},on:{click:function(t){e.barClick("business")}},slot:"reference"},[e._v("关联商机")])],1):e._e(),e._v(" "),i("el-button",{directives:[{name:"debounce",rawName:"v-debounce",value:e.sendClick,expression:"sendClick"}],staticClass:"send-btn",attrs:{type:"primary"}},[e._v("发布")])],1):e._e(),e._v(" "),i("input",{ref:"fileInput",staticClass:"file-input",attrs:{accept:"*.*",type:"file",multiple:""},on:{change:e.uploadFile}}),e._v(" "),i("input",{ref:"imgInput",staticClass:"file-input",attrs:{accept:"image/*",type:"file",multiple:""},on:{change:e.uploadFile}})],1)},[],!1,null,"5ea91ca5",null);g.options.__file="LogAdd.vue";var b=g.exports,T=i("O8VQ"),w=i("/G0b"),C=i("8OTK"),_=i("C3Po"),k=i("ZoMv"),I=i("Z+Ht"),x=i("vvxI"),L=i("ZX9L"),D=i("FdMb"),S=i("L2JU"),A={name:"Activity",components:{LogAdd:b,LogCell:T.a,CRMAllCreate:C.default,TaskQuickAdd:_.a,TimeTypeSelect:L.a,LogEditDialog:w.a,CRMFullScreenDetail:function(){return Promise.all([i.e("chunk-3e85"),i.e("chunk-84f5"),i.e("chunk-dc06"),i.e("chunk-0d4ad")]).then(i.bind(null,"3z7q"))}},mixins:[I.a,x.a],props:{handle:{type:Array,default:function(){return[]}},id:[String,Number],contactsId:[String,Number],crmType:{type:String,default:""},isSeas:{type:Boolean,default:!1},typeList:{type:Array,default:function(){return[]}},detail:{type:Object,default:function(){return{}}}},data:function(){return{loading:!1,isSearchRequest:!1,filterValue:{},timeOptions:[{label:"全部",value:""},{label:"最近7天",value:"7"},{label:"最近30天",value:"30"},{label:"最近60天",value:"60"}],contacts:[],followTypes:[],handleType:"",activityType:{icon:"all",color:"#2362FB",command:"",label:"全部活动"},list:[],noMore:!1,page:1,isCRMCreate:!1,createActionInfo:{type:"relative",crmType:this.crmType,data:{}},createCRMType:"",isTaskCreate:!1,showFullDetail:!1,relationID:"",relationCrmType:"",scrollKey:Date.now(),logEditData:null,logEditPosition:{seciton:0,index:0},logEditDialogVisible:!1}},computed:a()({},Object(S.b)(["crm"]),{canCreateFollowRecord:function(){return this.crm&&this.crm.followRecord&&this.crm.followRecord.save},showRelate:function(){return"customer"==this.crmType},scrollDisabled:function(){return this.loading||this.noMore},taskParams:function(){var e={};return e[this.crmType+"Ids"]=this.id,e},taskProps:function(){var e={};e[this.crmType]=[this.detail];var t={};return t[this.crmType+"Ids"]=[this.id],{relatedObj:e,relatedObjIds:t}}}),watch:{id:function(){this.initInfo(),this.refreshLogList()}},created:function(){this.debouncedRefreshLogList=Object(D.a)(300,this.refreshLogList),this.initInfo()},methods:{getLogTypeList:function(){var e=this;Object(l.q)().then(function(t){e.followTypes=t.data.map(function(e){return{value:e,label:e}})}).catch(function(){})},getContactsList:function(){var e=this;Object(n.H)({customerId:this.id}).then(function(t){e.contacts=t.data.list}).catch(function(){})},sendLog:function(e){var t=this;if(e.content){var i={};i.activityType=k.a[this.crmType],i.activityTypeId=e.id,i.content=e.content,i.category=e.followType;var s=e.business.map(function(e){return e.businessId});i.batchId=e.batchId,i.businessIds=s.join(","),i.contactsIds=e.contactsId,i.nextTime=e.nextTime||"",i.isEvent=0,this.sendLoading=!0,Object(o.a)(i).then(function(e){t.sendLoading=!1,t.$message.success("发布成功"),t.$refs.logAdd&&t.$refs.logAdd.resetInfo(),t.refreshLogList()}).catch(function(){t.sendLoading=!1})}else this.$message.error("请输入跟进内容")},handleClick:function(e){var t=this;if(this.handleType==e?this.handleType="":this.handleType=e,"log"==e)this.isTaskCreate=!1,this.$nextTick(function(){t.$refs.logAdd&&(t.$refs.logAdd.isUnfold=t.handleType==e)});else if("task"==e)this.isTaskCreate=!0,this.$nextTick(function(){t.$refs.taskAdd.inputFocus()});else{this.isTaskCreate=!1;var i={type:"relative",crmType:this.crmType,data:{}};"contacts"==this.crmType?(i.data.customer=Object(f.t)(this.detail),"business"==e&&(i.relativeData={contactsId:this.detail.contactsId})):"customer"==this.crmType?i.data.customer=Object(f.t)(this.detail):"business"==this.crmType?(i.data.customer=Object(f.t)(this.detail),i.data.business=Object(f.t)(this.detail),"contacts"==e&&(i.relativeData={businessId:this.detail.businessId})):"contract"==this.crmType&&(i.data.customer=Object(f.t)(this.detail),i.data.contract=Object(f.t)(this.detail)),this.createActionInfo=i,this.createCRMType=e,this.isCRMCreate=!0}},initInfo:function(){var e=this;this.$nextTick(function(){e.$refs.logAdd&&e.$refs.logAdd.resetInfo(),e.$refs.taskAdd&&e.$refs.taskAdd.resetSendData()}),this.filterValue={search:"",timeLine:{label:"全部",value:""}},this.getLogTypeList(),this.showRelate&&this.getContactsList()},refreshLogList:function(e){this.isSearchRequest=e||!1,this.page=1,this.noMore=!1,this.list=[],this.scrollKey=Date.now()},handleSelectClick:function(e){this.activityType=e,this.refreshLogList()},timeTypeChange:function(e){this.filterValue.timeLine=e,this.refreshLogList()},getLogList:function(){var e=this;this.loading=!0;var t={page:this.page,crmType:k.a[this.crmType],activityType:this.activityType.command,activityTypeId:this.id};this.filterValue.search&&(t.search=this.filterValue.search),this.filterValue.timeLine.type&&("custom"===this.filterValue.timeLine.type?(t.startDate=this.filterValue.timeLine.startTime.replace(/\./g,"-"),t.endDate=this.filterValue.timeLine.endTime.replace(/\./g,"-")):t.intervalDay=this.filterValue.timeLine.value||""),Object(o.c)(t).then(function(t){if(e.loading=!1,!e.noMore)if(e.page++,e.list.length){var i=e.list[e.list.length-1];t.data.time&&t.data.list.length&&i.time!=t.data.time&&e.list.push(t.data)}else t.data.time&&t.data.list.length&&e.list.push(t.data);e.noMore=t.data.lastPage,e.isSearchRequest&&e.$nextTick(function(){e.$refs.activitySearchInput.focus()})}).catch(function(){e.noMore=!0,e.loading=!1})},createCRMSuccess:function(){this.handleType="",this.refreshLogList()},createCRMClose:function(){this.isCRMCreate=!1,this.handleType=""},checkCRMDetail:function(e,t){this.relationID=t,this.relationCrmType=e,this.showFullDetail=!0},getActivityIcon:function(e){return this.getXrIcon(this.getActivityType(e))},getActivityTypeColor:function(e){return this.getXrIconColor(this.getActivityType(e))},logCellDelete:function(e,t,i){this.list[i].list.splice(t,1),0==this.list[i].list.length&&this.list.splice(i,1),this.scrollKey=Date.now()},logCellEdit:function(e,t,i){this.logEditData=e,this.logEditPosition={seciton:i,index:t},this.logEditDialogVisible=!0},logEditSave:function(e){this.logEditPosition.seciton>=0&&this.logEditPosition.index>=0&&this.list[this.logEditPosition.seciton].list.splice(this.logEditPosition.index,1,e)}}},R=(i("vh6Y"),Object(y.a)(A,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:e.getLogList,expression:"getLogList"}],key:e.scrollKey,staticClass:"main",attrs:{"infinite-scroll-distance":"100","infinite-scroll-disabled":"scrollDisabled"}},[i("div",[!e.isSeas&&e.handle&&e.handle.length?i("div",{staticClass:"main-handle"},e._l(e.handle,function(t,s){return i("el-button",{key:s,class:{"is-select":e.handleType===t.type},attrs:{type:"primary",icon:"wk wk-add"},on:{click:function(i){e.handleClick(t.type)}}},[e._v("\n        "+e._s(t.label)+"\n      ")])})):e._e(),e._v(" "),!e.isSeas&&e.handle&&e.handle.length?[!e.isTaskCreate&&e.canCreateFollowRecord?i("log-add",{ref:"logAdd",staticClass:"log-add",attrs:{id:e.id,"show-business":e.showRelate,"show-contacts":e.showRelate,contacts:e.contacts,"contacts-id":e.contactsId,"follow-types":e.followTypes,"crm-type":e.crmType},on:{send:e.sendLog,focus:function(t){e.handleType="log"},close:function(t){e.handleClick(e.handleType)}}}):i("task-quick-add",{ref:"taskAdd",staticClass:"task-quick-add",attrs:{params:e.taskParams,props:e.taskProps},on:{focus:function(t){e.handleType="task"},send:e.refreshLogList}})]:e._e(),e._v(" "),i("div",{staticClass:"log",class:{"is-top":e.handle&&0==e.handle.length}},[i("flexbox",{staticClass:"log__header",attrs:{justify:"flex-end"}},[i("el-input",{ref:"activitySearchInput",attrs:{placeholder:"关键字搜索","prefix-icon":"el-icon-search"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.debouncedRefreshLogList(!0)}},model:{value:e.filterValue.search,callback:function(t){e.$set(e.filterValue,"search",t)},expression:"filterValue.search"}}),e._v(" "),i("time-type-select",{attrs:{width:190,options:e.timeOptions,"default-type":e.filterValue.timeLine},on:{change:e.timeTypeChange}}),e._v(" "),e.typeList.length>1?i("el-dropdown",{attrs:{trigger:"click"},on:{command:e.handleSelectClick}},[i("span",{staticClass:"el-dropdown-link"},[i("i",{class:["wk","dropdown-icon","wk-"+e.activityType.icon],style:{backgroundColor:e.activityType.color}}),e._v(e._s(e.activityType.label)),i("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},e._l(e.typeList,function(t,s){return i("el-dropdown-item",{key:s,attrs:{command:t}},[i("i",{class:["wk","dropdown-icon","wk-"+t.icon],style:{backgroundColor:t.color}}),e._v(e._s(t.label))])}))],1):e._e()],1),e._v(" "),e._l(e.list,function(t,s){return i("div",{key:s,staticClass:"log-section"},[i("div",{staticClass:"log-section__title"},[i("span",{staticClass:"section-title"},[i("span",{staticClass:"section-title__time"},[e._v(e._s(t.time))])])]),e._v(" "),e._l(t.list,function(a,n){return[1==a.type?i("div",{key:n,staticClass:"log-cell",class:{"only-one":1==t.list.length}},[i("log-cell",{attrs:{item:a,section:s,index:n,"can-delete":!e.isSeas},on:{"crm-detail":e.checkCRMDetail,delete:e.logCellDelete,edit:e.logCellEdit}}),e._v(" "),i("i",{staticClass:"wk wk-message log-cell__mark"})],1):i("div",{key:n,staticClass:"log-cell activity-cell",class:{"only-one":1==t.list.length}},[2==a.type?i("div",{staticClass:"activity-cell"},[i("span",{staticClass:"activity-cell__label"},[e._v(e._s(a.createTime)+" "+e._s(a.realname)+"创建了"+e._s(e.getActivityTypeName(a.activityType))+"：")]),i("span",{staticClass:"activity-cell__content",on:{click:function(t){e.checkCRMDetail(e.getActivityType(a.activityType),a.activityTypeId)}}},[e._v(e._s(a.activityTypeName||"查看详情"))])]):3==a.type?i("div",{staticClass:"activity-cell"},[i("span",{staticClass:"activity-cell__label"},[e._v(e._s(a.createTime)+" "+e._s(a.realname)+"将商机：")]),e._v(" "),i("span",{staticClass:"activity-cell__content",on:{click:function(t){e.checkCRMDetail("business",a.activityTypeId)}}},[e._v(e._s(a.activityTypeName))]),e._v(" "),i("span",[e._v(e._s(" 阶段变为 "+a.content))])]):4==a.type?i("log-cell",{attrs:{item:a,section:s,index:n,"can-delete":""},on:{"crm-detail":e.checkCRMDetail,delete:e.logCellDelete}}):e._e(),e._v(" "),i("i",{staticClass:"log-cell__mark",class:e.getActivityIcon(a.activityType),staticStyle:{"background-color":"#FB9323"},style:{backgroundColor:e.getActivityTypeColor(a.activityType)}})],1)]})],2)}),e._v(" "),e.loading?i("p",{staticClass:"scroll-bottom-tips"},[e._v("加载中...")]):e._e(),e._v(" "),e.noMore?i("p",{staticClass:"scroll-bottom-tips"},[e._v("没有更多了")]):e._e()],2)],2),e._v(" "),e.isCRMCreate?i("c-r-m-all-create",{attrs:{"crm-type":e.createCRMType,action:e.createActionInfo},on:{"save-success":e.createCRMSuccess,close:e.createCRMClose}}):e._e(),e._v(" "),i("c-r-m-full-screen-detail",{attrs:{visible:e.showFullDetail,"crm-type":e.relationCrmType,id:e.relationID},on:{"update:visible":function(t){e.showFullDetail=t}}}),e._v(" "),i("log-edit-dialog",{attrs:{visible:e.logEditDialogVisible,data:e.logEditData},on:{"update:visible":function(t){e.logEditDialogVisible=t},save:e.logEditSave}})],1)},[],!1,null,"4bf24269",null));R.options.__file="index.vue";t.a=R.exports},edT3:function(e,t,i){},tuyL:function(e,t,i){},vh6Y:function(e,t,i){"use strict";var s=i("F05O");i.n(s).a},wslZ:function(e,t,i){"use strict";var s=i("edT3");i.n(s).a}}]);