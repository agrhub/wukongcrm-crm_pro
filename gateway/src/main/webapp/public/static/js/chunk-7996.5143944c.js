(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7996"],{"+iuc":function(e,t,i){i("wgeU"),i("FlQf"),i("bBy9"),i("B9jh"),i("dL40"),i("xvv9"),i("V+O7"),e.exports=i("WEpk").Set},"/SD7":function(e,t,i){"use strict";var n=i("hxdy");i.n(n).a},"2PMN":function(e,t,i){"use strict";var n=i("EbbS");i.n(n).a},"5kh+":function(e,t,i){},"8iia":function(e,t,i){var n=i("QMMT"),o=i("RRc/");e.exports=function(e){return function(){if(n(this)!=e)throw TypeError(e+"#toJSON isn't generic");return o(this)}}},B9jh:function(e,t,i){"use strict";var n=i("Wu5q"),o=i("n3ko");e.exports=i("raTm")("Set",function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{add:function(e){return n.def(o(this,"Set"),e=0===e?0:e,e)}},n)},C2SN:function(e,t,i){var n=i("93I4"),o=i("kAMH"),l=i("UWiX")("species");e.exports=function(e){var t;return o(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!o(t.prototype)||(t=void 0),n(t)&&null===(t=t[l])&&(t=void 0)),void 0===t?Array:t}},EbbS:function(e,t,i){},Gn4j:function(e,t,i){"use strict";var n=i("5kh+");i.n(n).a},JGnD:function(e,t,i){"use strict";var n=i("alR5");i.n(n).a},M1nL:function(e,t,i){"use strict";i.r(t);var n=i("KTTK"),o=i("jVVe"),l={name:"RelateEmpoyee",components:{XhUserCell:i("8GhS").p},mixins:[],props:{visible:{type:Boolean,required:!0,default:!1},roleId:[Number,String]},data:function(){return{loading:!0,selectUsers:[]}},computed:{},watch:{visible:function(e){e&&(this.selectUsers=[])}},mounted:function(){},methods:{handleCancel:function(){this.$emit("update:visible",!1)},changeCheckout:function(e){this.selectUsers=e.value},handleConfirm:function(){var e=this;0==this.selectUsers.length?this.$message.error("请选择员工"):Object(o.c)({userIds:this.selectUsers.map(function(e){return e.userId}),roleIds:[this.roleId]}).then(function(t){e.$message.success("操作成功"),e.$emit("save")}).catch(function(){})}}},s=(i("n00Q"),i("KHd+")),r=Object(s.a)(l,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{visible:e.visible,"append-to-body":!0,"close-on-click-modal":!1,title:"关联员工",width:"600px"},on:{close:e.handleCancel}},[i("div",{staticClass:"handle-box"},[i("flexbox",{staticClass:"handle-item",attrs:{align:"stretch"}},[i("div",{staticClass:"handle-item-name",staticStyle:{"margin-top":"8px"}},[e._v("选择员工：")]),e._v(" "),i("xh-user-cell",{staticClass:"handle-item-content",attrs:{radio:!1,value:e.selectUsers},on:{"value-change":e.changeCheckout}})],1)],1),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{nativeOn:{click:function(t){return e.handleCancel(t)}}},[e._v("取消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},nativeOn:{click:function(t){return e.handleConfirm(t)}}},[e._v("保存")])],1)])},[],!1,null,"485f1cad",null);r.options.__file="RelateEmpoyee.vue";var a=r.exports,c=i("ZoMv"),u={name:"FieldSetDialog",components:{},mixins:[],props:{label:[String,Number],roleId:[String,Number],visible:{type:Boolean,required:!0,default:!1}},data:function(){return{loading:!1,list:[]}},computed:{title:function(){return c.a.convertTypeToName(this.label)+"字段授权"}},watch:{visible:{handler:function(){this.visible&&this.getFieldList()},immediate:!0}},mounted:function(){},methods:{getFieldList:function(){var e=this;this.list=[],this.loading=!0,Object(o.i)({label:this.label,roleId:this.roleId}).then(function(t){e.loading=!1,(t.data||[]).forEach(function(e){e.canCheck=2==e.authLevel||3==e.authLevel,e.canEdit=3==e.authLevel}),e.list=t.data||[]}).catch(function(){e.loading=!1})},handleCancel:function(){this.$emit("update:visible",!1)},getCanOpreateRead:function(e){return 1==e||2==e},getCanOpreateEdit:function(e){return 1==e||3==e},handleConfirm:function(){var e=this;this.loading=!0,this.list.forEach(function(e){var t=3;t=e.canCheck&&e.canEdit?3:e.canCheck?2:1,e.authLevel=t}),Object(o.j)(this.list).then(function(t){e.loading=!1,e.$message.success("操作成功"),e.handleCancel()}).catch(function(){e.loading=!1})},editCheckboxChange:function(e){e.canEdit&&this.$set(e,"canCheck",!0)},checkCheckboxChange:function(e){!e.canCheck&&e.canEdit&&this.$set(e,"canEdit",!1)}}},d=(i("2PMN"),Object(s.a)(u,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{attrs:{visible:e.visible,"append-to-body":!0,"close-on-click-modal":!1,title:e.title,width:"700px"},on:{close:e.handleCancel}},[i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"field-set-dialog"},[i("el-table",{staticStyle:{width:"100%"},attrs:{data:e.list,height:"50vh",border:""}},[i("el-table-column",{attrs:{label:"字段名称",prop:"name"}}),e._v(" "),i("el-table-column",{attrs:{label:"初步权限"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-checkbox",{attrs:{disabled:!e.getCanOpreateRead(t.row.operateType)},on:{change:function(i){e.checkCheckboxChange(t.row)}},model:{value:t.row.canCheck,callback:function(i){e.$set(t.row,"canCheck",i)},expression:"scope.row.canCheck"}},[e._v("可以查看")]),e._v(" "),i("el-checkbox",{attrs:{disabled:!e.getCanOpreateEdit(t.row.operateType)},on:{change:function(i){e.editCheckboxChange(t.row)}},model:{value:t.row.canEdit,callback:function(i){e.$set(t.row,"canEdit",i)},expression:"scope.row.canEdit"}},[e._v("可以修改")])]}}])})],1)],1),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{staticStyle:{float:"left"},attrs:{type:"text"},on:{click:e.getFieldList}},[e._v("重置")]),e._v(" "),i("el-button",{on:{click:e.handleCancel}},[e._v("取消")]),e._v(" "),i("el-button",{directives:[{name:"debounce",rawName:"v-debounce",value:e.handleConfirm,expression:"handleConfirm"}],attrs:{type:"primary"}},[e._v("保存")])],1)])},[],!1,null,"62e73cab",null));d.options.__file="FieldSetDialog.vue";var h=d.exports,f=i("jzeO"),v=i("9GgJ"),p=i("Tdi9"),m={components:{RelateEmpoyee:a,FieldSetDialog:h,Reminder:f.a,XrHeader:v.a,EditRoleDialog:p.a},data:function(){return{pid:"",title:"",searchInput:"",tableData:[],tableHeight:document.documentElement.clientHeight-305,treeHeight:document.documentElement.clientHeight-230,currentPage:1,pageSize:15,pageSizes:[15,30,45,60],total:0,tableList:[{label:"姓名",field:"realname"},{label:"部门",field:"deptName"},{label:"职位",field:"post"},{label:"角色",field:"roleName"}],newRoleVisible:!1,role:{},roleList:[],mainMenuIndex:"user",ruleMenuIndex:"data",ruleMenuList:[],defaultProps:{children:"childMenu",label:"menuName"},relateEmpoyeeShow:!1,roleActive:null,dropdownHandleRole:null,roleTitle:"",roleMenuLoading:!1,ruleLoading:!1,userLoading:!1,setFieldLabel:"",setFieldShow:!1,selectionList:[],editRoleType:"",editRoleDialogShow:!1}},computed:{roleId:function(){return this.roleActive?this.roleActive.roleId:""},showRuleSet:function(){return!!this.roleActive&&("admin"!=this.roleActive.remark&&"project"!=this.roleActive.remark)},showReminder:function(){return!!this.roleActive&&"project"==this.roleActive.remark}},watch:{},mounted:function(){var e=this;window.onresize=function(){e.tableHeight=document.documentElement.clientHeight-305,e.treeHeight=document.documentElement.clientHeight-230},this.pid=this.$route.params.pid,this.title=this.$route.params.title,this.getRulesList(),this.getRoleList()},beforeRouteUpdate:function(e,t,i){this.pid=e.params.pid,this.title=e.params.title,this.roleActive=null,this.roleList=[],this.mainMenuIndex="user",this.currentPage=1,this.total=0,this.tableData=[],this.$refs.xrHeader&&(this.$refs.xrHeader.search="",this.searchInput=""),this.getRulesList(),this.getRoleList(),i()},methods:{getRulesList:function(){var e=this;Object(o.k)(this.pid).then(function(t){t.data.data?(e.ruleMenuList=[{label:"模块功能",index:"data",type:"tree",value:[],data:[t.data.data]}],t.data.bi&&e.ruleMenuList.push({label:"数据分析",index:"bi",type:"tree",value:[],data:[t.data.bi]})):e.ruleMenuList=[],e.getRoleRulesInfo()})},getRoleList:function(){var e=this;this.roleMenuLoading=!0,Object(o.h)(this.pid).then(function(t){e.roleList=t.data;var i=!1;if(e.roleActive)for(var n=0;n<e.roleList.length;n++){var o=e.roleList[n];if(o.roleId==e.roleActive.roleId){e.roleActive=o,e.getRoleRulesInfo(),i=!0;break}}!i&&e.roleList.length&&(e.roleActive=e.roleList[0],e.getRoleRulesInfo()),e.refreshUserList(),e.roleMenuLoading=!1}).catch(function(){e.roleMenuLoading=!1})},addEmployees:function(){this.relateEmpoyeeShow=!0},employeesSave:function(e){this.relateEmpoyeeShow=!1,this.getUserList()},employeeHandleClick:function(e,t){var i=this;"delete"===e?this.$confirm("此操作将永久删除是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){i.userLoading=!0,Object(o.l)({userId:t.userId,roleId:i.roleActive.roleId}).then(function(e){i.userLoading=!1,i.getUserList(),i.$message.success("删除成功")}).catch(function(){i.userLoading=!1})}).catch(function(){i.$message({type:"info",message:"已取消删除"})}):"editRole"!==e&&"copyRole"!==e||(this.selectionList=[t],this.editRoleType=e,this.editRoleDialogShow=!0)},newRoleClose:function(){this.newRoleVisible=!1},newRoleBtn:function(){this.roleTitle="新建角色",this.newRoleVisible=!0,this.role={}},roleDropdownClick:function(e){this.dropdownHandleRole=e},roleHandleClick:function(e){"edit"==e?this.roleEditBtn(this.dropdownHandleRole):"copy"==e?this.ticketsBtn(this.dropdownHandleRole):"delete"==e&&this.roleDelect(this.dropdownHandleRole)},getReminderContent:function(){return this.roleActive&&"project"==this.roleActive.remark?"项目管理员拥有“项目管理”模块所有权限，能看到并维护所有项目信息":""},roleEditBtn:function(e){this.roleTitle="编辑角色",this.role={title:e.roleName,pid:e.roleType,id:e.roleId},this.newRoleVisible=!0},ticketsBtn:function(e){var t=this;this.$confirm("确定此操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(o.e)({roleId:e.roleId}).then(function(e){t.$message.success("复制成功"),t.getRoleList()})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},roleDelect:function(e){var t=this;this.$confirm("此操作将永久删除是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(o.f)({roleId:e.roleId}).then(function(e){t.roleList.length&&(t.roleActive=t.roleList[0],t.getRoleRulesInfo()),t.getRoleList(),t.$message.success("删除成功")})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},newRoleSubmit:function(){var e=this;this.role.title?"新建角色"==this.roleTitle?Object(o.d)({roleName:this.role.title,roleType:this.pid}).then(function(t){e.getRoleList(),e.$message.success("添加成功"),e.newRoleClose()}):Object(o.g)({roleName:this.role.title,roleType:this.role.pid,roleId:this.role.id}).then(function(t){e.getRoleList(),e.$message.success("编辑成功"),e.newRoleClose()}):this.$message.error("角色名称不能为空")},roleMenuSelect:function(e){this.roleActive=e,"rule"!=this.mainMenuIndex||this.showRuleSet||(this.mainMenuIndex="user"),this.getRoleRulesInfo(),this.refreshUserList()},getRoleRulesInfo:function(){var e=this;if(this.roleActive&&this.ruleMenuList.length){if(2==this.pid||10==this.pid)"data"!=this.ruleMenuList[this.ruleMenuList.length-1].type&&this.ruleMenuList.push({label:"数据权限",index:"info",type:"data",value:this.roleActive.dataType});for(var t=function(t){var i=e.ruleMenuList[t];"tree"==i.type?(i.rules=e.getRoleRules(e.roleActive.rules[i.index],i.data[0]),e.$nextTick(function(){var t=e.$refs["tree"+i.index];t&&("[object Array]"==Object.prototype.toString.call(t)?t.length&&t[0].setCheckedKeys(i.rules):t.setCheckedKeys(i.rules))})):i.value=e.roleActive.dataType},i=0;i<this.ruleMenuList.length;i++)t(i)}},getRoleRules:function(e,t){e||(e=[]);for(var i=!1,n=this.copyItem(e),o=0;o<t.childMenu.length;o++){var l=t.childMenu[o];if(!l.hasOwnProperty("children"))return l.length+1!=n.length&&this.removeItem(n,t.id),n;for(var s=0;s<e.length;s++){for(var r=e[s],a=[],c=0;c<l.childMenu.length;c++){var u=l.childMenu[c];u.id==r&&a.push(u)}a.length!=l.childMenu.length&&(i=!0,this.removeItem(n,l.id))}}i&&this.removeItem(n,t.id);for(var d=[],h=0;h<n.length;h++){var f=n[h];f&&d.push(parseInt(f))}return d},copyItem:function(e){for(var t=[],i=0;i<e.length;i++)t.push(e[i]);return t},removeItem:function(e,t){for(var i=-1,n=0;n<e.length;n++)if(t==e[n]){i=n;break}i>0&&e.splice(i,1)},containItem:function(e,t){for(var i=0;i<e.length;i++)if(t==e[i])return!0;return!1},headerSearch:function(e){this.searchInput=e,this.refreshUserList()},refreshUserList:function(){this.currentPage=1,this.getUserList()},getUserList:function(){var e=this;if(!this.roleActive)return this.tableData=[],void(this.total=0);this.userLoading=!0,Object(n.t)({page:this.currentPage,limit:this.pageSize,roleId:this.roleActive.roleId,realname:this.searchInput}).then(function(t){e.tableData=t.data.list,e.total=t.data.totalRow,e.userLoading=!1}).catch(function(){e.userLoading=!1})},handleSizeChange:function(e){this.pageSize=e,this.refreshUserList()},handleCurrentChange:function(e){this.currentPage=e,this.getUserList()},ruleSubmit:function(){var e=this;this.ruleLoading=!0;for(var t=[],i="",n=0;n<this.ruleMenuList.length;n++){var l=this.ruleMenuList[n];if("tree"==l.type){var s=this.$refs["tree"+l.index];s&&(t="[object Array]"==Object.prototype.toString.call(s)?t.concat(s[0].getCheckedKeys()):t.concat(s.getCheckedKeys()))}else i=l.value}Object(o.m)({menuIds:t,dataType:i,roleId:this.roleActive.roleId,roleName:this.roleActive.roleName}).then(function(t){e.getRoleList(),e.$message.success("编辑成功"),e.ruleLoading=!1}).catch(function(){e.ruleLoading=!1})},canSetField:function(e){return 10!=this.pid&&(["leads","customer","contacts","business","contract","receivables","product","visit"].includes(e)&&"data"===this.ruleMenuIndex)},fieldSetClick:function(e){this.setFieldLabel=c.a[e.data.realm],this.setFieldShow=!0}}},g=(i("JGnD"),Object(s.a)(m,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"role-authorization"},[i("xr-header",{ref:"xrHeader",attrs:{"show-search":"",label:"角色权限控制","icon-class":"wk wk-user","icon-color":"#19B5F6"},on:{search:e.headerSearch}}),e._v(" "),i("div",{staticClass:"role-box"},[i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.roleMenuLoading,expression:"roleMenuLoading"}],staticClass:"nav"},[i("div",{staticClass:"nav__hd"},[e._v("\n        "+e._s(e.title)+"\n        "),i("el-button",{staticClass:"add-btn",attrs:{type:"text",icon:"el-icon-circle-plus"},on:{click:e.newRoleBtn}},[e._v("创建角色")])],1),e._v(" "),i("div",{staticClass:"role-nav-box"},e._l(e.roleList,function(t,n){return i("div",{key:n,staticClass:"menu-item",class:{"is-select":t.roleId==e.roleActive.roleId},on:{click:function(i){e.roleMenuSelect(t)}}},[e._v("\n          "+e._s(t.roleName)+"\n          "),"admin"!=t.remark&&"project"!=t.remark?i("div",{staticClass:"icon-close"},[i("el-dropdown",{attrs:{trigger:"click"},on:{command:e.roleHandleClick}},[i("i",{staticClass:"el-icon-arrow-down",on:{click:function(i){e.roleDropdownClick(t)}}}),e._v(" "),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-dropdown-item",{attrs:{command:"copy"}},[e._v("复制")]),e._v(" "),i("el-dropdown-item",{attrs:{command:"edit"}},[e._v("编辑")]),e._v(" "),i("el-dropdown-item",{attrs:{command:"delete"}},[e._v("删除")])],1)],1)],1):e._e()])}))]),e._v(" "),i("el-dialog",{attrs:{title:e.roleTitle,visible:e.newRoleVisible,"before-close":e.newRoleClose,"close-on-click-modal":!1,width:"30%"},on:{"update:visible":function(t){e.newRoleVisible=t}}},[i("label",{staticClass:"label-title"},[e._v("角色名称")]),e._v(" "),i("el-input",{staticClass:"input-role",attrs:{maxlength:100},model:{value:e.role.title,callback:function(t){e.$set(e.role,"title",t)},expression:"role.title"}}),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:e.newRoleSubmit}},[e._v("确 定")]),e._v(" "),i("el-button",{on:{click:e.newRoleClose}},[e._v("取 消")])],1)],1),e._v(" "),i("div",{staticClass:"content-box"},[i("el-tabs",{model:{value:e.mainMenuIndex,callback:function(t){e.mainMenuIndex=t},expression:"mainMenuIndex"}},[i("el-tab-pane",{attrs:{label:"角色员工",name:"user"}},[i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.userLoading,expression:"userLoading"}],staticClass:"content-table"},[i("flexbox",{staticClass:"content-table-header"},[i("div",{staticClass:"content-table-header-reminder"},[e.showReminder?i("reminder",{attrs:{content:e.getReminderContent()}}):e._e()],1),e._v(" "),i("el-button",{staticClass:"xr-btn--orange",attrs:{disabled:0===e.roleList.length,size:"medium",type:"primary"},on:{click:e.addEmployees}},[e._v(" 关联员工 ")])],1),e._v(" "),i("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,height:e.tableHeight}},[e._l(e.tableList,function(e,t){return i("el-table-column",{key:t,attrs:{prop:e.field,label:e.label,"show-overflow-tooltip":""}})}),e._v(" "),i("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("i",{staticClass:"wk wk-edit content-table-span",attrs:{title:"编辑角色"},on:{click:function(i){e.employeeHandleClick("editRole",t.row)}}}),e._v(" "),i("i",{staticClass:"wk wk-icon-double-note content-table-span",attrs:{title:"复制角色"},on:{click:function(i){e.employeeHandleClick("copyRole",t.row)}}}),e._v(" "),i("i",{staticClass:"wk wk-delete content-table-span",attrs:{title:"删除"},on:{click:function(i){e.employeeHandleClick("delete",t.row)}}})]}}])})],2),e._v(" "),i("div",{staticClass:"p-contianer"},[i("el-pagination",{staticClass:"p-bar",attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.pageSize,total:e.total,background:"",layout:"prev, pager, next, sizes, total, jumper"},on:{"update:pageSize":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)]),e._v(" "),e.roleActive&&e.showRuleSet?i("el-tab-pane",{attrs:{label:"角色权限",name:"rule"}},[i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.ruleLoading,expression:"ruleLoading"}],staticClass:"jurisdiction-box"},[e.roleActive?i("el-button",{staticClass:"jurisdiction-edit",attrs:{disabled:0===e.roleList.length,size:"medium",type:"primary"},on:{click:e.ruleSubmit}},[e._v(" 保存 ")]):e._e(),e._v(" "),i("el-tabs",{model:{value:e.ruleMenuIndex,callback:function(t){e.ruleMenuIndex=t},expression:"ruleMenuIndex"}},e._l(e.ruleMenuList,function(t,n){return i("el-tab-pane",{key:n,attrs:{label:t.label,name:t.index}},["tree"==t.type?i("div",{staticClass:"jurisdiction-content",style:{height:e.treeHeight+"px"}},[i("div",{staticClass:"jurisdiction-content-checkbox"},[i("el-tree",{ref:"tree"+t.index,refInFor:!0,staticStyle:{height:"0"},attrs:{data:t.data,indent:0,"expand-on-click-node":!1,props:e.defaultProps,"show-checkbox":"","node-key":"menuId","empty-text":"","default-expand-all":""},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.node;return i("span",{class:{"node-label":1==n.level||2==n.level}},[e._v(e._s(n.label)),2==n.level&&e.canSetField(n.data.realm)?i("el-button",{attrs:{icon:"wk wk-manage",type:"text"},on:{click:function(t){e.fieldSetClick(n)}}},[e._v("字段授权")]):e._e()],1)}}])})],1)]):i("div",{staticClass:"jurisdiction-content"},[i("div",{staticClass:"data-radio"},[i("el-radio-group",{model:{value:t.value,callback:function(i){e.$set(t,"value",i)},expression:"item.value"}},[i("el-radio",{attrs:{label:1}},[e._v("本人")]),e._v(" "),i("el-radio",{attrs:{label:2}},[e._v("本人及下属")]),e._v(" "),i("el-radio",{attrs:{label:3}},[e._v("本部门")]),e._v(" "),i("el-radio",{attrs:{label:4}},[e._v("本部门及下属部门")]),e._v(" "),i("el-radio",{attrs:{label:5}},[e._v("全部")])],1)],1)])])}))],1)]):e._e()],1)],1)],1),e._v(" "),i("relate-empoyee",{attrs:{visible:e.relateEmpoyeeShow,"role-id":e.roleId},on:{"update:visible":function(t){e.relateEmpoyeeShow=t},save:e.employeesSave}}),e._v(" "),i("field-set-dialog",{attrs:{visible:e.setFieldShow,"role-id":e.roleId,label:e.setFieldLabel},on:{"update:visible":function(t){e.setFieldShow=t}}}),e._v(" "),e.editRoleDialogShow?i("edit-role-dialog",{attrs:{"user-show":"copyRole"===e.editRoleType,"selection-list":e.selectionList,visible:e.editRoleDialogShow},on:{"update:visible":function(t){e.editRoleDialogShow=t},change:e.getUserList}}):e._e()],1)},[],!1,null,"29baea50",null));g.options.__file="index.vue";t.default=g.exports},OImj:function(e,t,i){},"RRc/":function(e,t,i){var n=i("oioR");e.exports=function(e,t){var i=[];return n(e,!1,i.push,i,t),i}},Tdi9:function(e,t,i){"use strict";var n=i("jWXv"),o=i.n(n),l=i("rfXi"),s=i.n(l),r=i("jVVe"),a=i("lNRB"),c=i("jPAu"),u=i("nboU"),d={name:"EditRoleDialog",components:{RoleEmployeeSelect:a.a,WkUserDepSelect:c.a},mixins:[u.a],props:{selectionList:Array,userShow:{type:Boolean,default:!0},visible:{type:Boolean,required:!0,default:!1}},data:function(){return{loading:!1,roleValue:[],ruleForm:{roleList:[],userIds:[],deptIds:[]}}},computed:{title:function(){return this.userShow?"复制角色":"编辑角色"},rules:function(){var e=this,t={roleList:[{required:!0,message:"请选择",trigger:"change"}]};return this.userShow&&(t.userIds=[{validator:function(t,i,n){e.ruleForm.userIds&&e.ruleForm.userIds.length>0||e.ruleForm.deptIds&&e.ruleForm.deptIds.length>0?n():n(new Error("请选择"))},trigger:""}]),t}},watch:{},created:function(){if(this.userShow&&this.selectionList.length>0||!this.userShow&&1===this.selectionList.length){var e=this.selectionList[0];this.ruleForm.roleList=e.roleId?this.selectionList[0].roleId.split(",").map(function(e){return parseFloat(e)}):[]}},methods:{close:function(){this.$emit("update:visible",!1)},sureClick:function(){var e=this;this.$refs.editRoleForm.validate(function(t){if(!t)return!1;var i=[],n=[];e.ruleForm.roleList.forEach(function(e){if("string"==typeof e){if(e.includes("@")){var t=e.split("@");if(t.length>1){var o=t[1].split(",").map(function(e){return parseFloat(e)});n=n.concat(o)}}}else i.push(e)});var l={roleIds:s()(new o.a(i.concat(n)))};e.userShow?(l.userIds=e.ruleForm.userIds,l.deptIds=e.ruleForm.deptIds):l.userIds=e.selectionList.map(function(e){return e.userId}),Object(r.b)(l).then(function(t){e.$message.success("操作成功"),e.$emit("change"),e.close()}).catch(function(){})})}}},h=(i("Gn4j"),i("KHd+")),f=Object(h.a)(d,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{ref:"wkDialog",attrs:{visible:e.visible,"append-to-body":!0,"close-on-click-modal":!1,width:"500px"},on:{close:e.close}},[i("div",{staticClass:"el-dialog__title",attrs:{slot:"title"},slot:"title"},[e._v("\n    "+e._s(e.title)),e.userShow?i("el-tooltip",{attrs:{effect:"dark",placement:"top"}},[i("div",{attrs:{slot:"content"},slot:"content"},[e._v("1、可以将员工角色复制给其他员工。"),i("br"),e._v("\n        2、若选择的员工已有角色，原角色会被覆盖。"),i("br"),e._v("\n        3、若选择部门，该部门所有员工的角色将相同，"),i("br"),e._v("\n             可保存后再对员工独立调整。\n      ")]),e._v(" "),i("i",{staticClass:"wk wk-help wk-help-tips",staticStyle:{"margin-left":"3px"}})]):e._e()],1),e._v(" "),i("el-form",{ref:"editRoleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px","label-position":"top"}},[e.userShow?i("el-form-item",{attrs:{label:"选择员工和部门",prop:"userIds"}},[i("wk-user-dep-select",{staticStyle:{width:"100%"},attrs:{"user-value":e.ruleForm.userIds,"dep-value":e.ruleForm.deptIds},on:{"update:userValue":function(t){e.$set(e.ruleForm,"userIds",t)},"update:depValue":function(t){e.$set(e.ruleForm,"deptIds",t)}}})],1):e._e(),e._v(" "),i("el-form-item",{attrs:{label:"设置角色",prop:"roleList"}},[i("role-employee-select",{staticStyle:{width:"100%"},attrs:{multiple:""},model:{value:e.ruleForm.roleList,callback:function(t){e.$set(e.ruleForm,"roleList",t)},expression:"ruleForm.roleList"}})],1)],1),e._v(" "),i("div",{}),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:e.close}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.sureClick}},[e._v("确 定")])],1)],1)},[],!1,null,"5a229fc7",null);f.options.__file="EditRoleDialog.vue";t.a=f.exports},"V+O7":function(e,t,i){i("aPfg")("Set")},V7Et:function(e,t,i){var n=i("2GTP"),o=i("M1xp"),l=i("JB68"),s=i("tEej"),r=i("v6xn");e.exports=function(e,t){var i=1==e,a=2==e,c=3==e,u=4==e,d=6==e,h=5==e||d,f=t||r;return function(t,r,v){for(var p,m,g=l(t),b=o(g),_=n(r,v,3),w=s(b.length),y=0,k=i?f(t,w):a?f(t,0):void 0;w>y;y++)if((h||y in b)&&(m=_(p=b[y],y,g),e))if(i)k[y]=m;else if(m)switch(e){case 3:return!0;case 5:return p;case 6:return y;case 2:k.push(p)}else if(u)return!1;return d?-1:c||u?u:k}}},Wu5q:function(e,t,i){"use strict";var n=i("2faE").f,o=i("oVml"),l=i("XJU/"),s=i("2GTP"),r=i("EXMj"),a=i("oioR"),c=i("MPFp"),u=i("UO39"),d=i("TJWN"),h=i("jmDH"),f=i("6/1s").fastKey,v=i("n3ko"),p=h?"_s":"size",m=function(e,t){var i,n=f(t);if("F"!==n)return e._i[n];for(i=e._f;i;i=i.n)if(i.k==t)return i};e.exports={getConstructor:function(e,t,i,c){var u=e(function(e,n){r(e,u,t,"_i"),e._t=t,e._i=o(null),e._f=void 0,e._l=void 0,e[p]=0,void 0!=n&&a(n,i,e[c],e)});return l(u.prototype,{clear:function(){for(var e=v(this,t),i=e._i,n=e._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete i[n.i];e._f=e._l=void 0,e[p]=0},delete:function(e){var i=v(this,t),n=m(i,e);if(n){var o=n.n,l=n.p;delete i._i[n.i],n.r=!0,l&&(l.n=o),o&&(o.p=l),i._f==n&&(i._f=o),i._l==n&&(i._l=l),i[p]--}return!!n},forEach:function(e){v(this,t);for(var i,n=s(e,arguments.length>1?arguments[1]:void 0,3);i=i?i.n:this._f;)for(n(i.v,i.k,this);i&&i.r;)i=i.p},has:function(e){return!!m(v(this,t),e)}}),h&&n(u.prototype,"size",{get:function(){return v(this,t)[p]}}),u},def:function(e,t,i){var n,o,l=m(e,t);return l?l.v=i:(e._l=l={i:o=f(t,!0),k:t,v:i,p:n=e._l,n:void 0,r:!1},e._f||(e._f=l),n&&(n.n=l),e[p]++,"F"!==o&&(e._i[o]=l)),e},getEntry:m,setStrong:function(e,t,i){c(e,t,function(e,i){this._t=v(e,t),this._k=i,this._l=void 0},function(){for(var e=this._k,t=this._l;t&&t.r;)t=t.p;return this._t&&(this._l=t=t?t.n:this._t._f)?u(0,"keys"==e?t.k:"values"==e?t.v:[t.k,t.v]):(this._t=void 0,u(1))},i?"entries":"values",!i,!0),d(t)}}},aPfg:function(e,t,i){"use strict";var n=i("Y7ZC"),o=i("eaoh"),l=i("2GTP"),s=i("oioR");e.exports=function(e){n(n.S,e,{from:function(e){var t,i,n,r,a=arguments[1];return o(this),(t=void 0!==a)&&o(a),void 0==e?new this:(i=[],t?(n=0,r=l(a,arguments[2],2),s(e,!1,function(e){i.push(r(e,n++))})):s(e,!1,i.push,i),new this(i))}})}},alR5:function(e,t,i){},cHUd:function(e,t,i){"use strict";var n=i("Y7ZC");e.exports=function(e){n(n.S,e,{of:function(){for(var e=arguments.length,t=new Array(e);e--;)t[e]=arguments[e];return new this(t)}})}},dL40:function(e,t,i){var n=i("Y7ZC");n(n.P+n.R,"Set",{toJSON:i("8iia")("Set")})},hxdy:function(e,t,i){},jWXv:function(e,t,i){e.exports={default:i("+iuc"),__esModule:!0}},jzeO:function(e,t,i){"use strict";var n={name:"Reminder",components:{},props:{closeShow:{type:Boolean,default:!1},content:{type:String,default:"内容"},fontSize:{type:String,default:"13"}},data:function(){return{}},computed:{},mounted:function(){},destroyed:function(){},methods:{close:function(){this.$emit("close")}}},o=(i("/SD7"),i("KHd+")),l=Object(o.a)(n,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("flexbox",{staticClass:"reminder-wrapper"},[i("flexbox",{staticClass:"reminder-body",attrs:{align:"stretch"}},[i("i",{staticClass:"wk wk-warning reminder-icon"}),e._v(" "),i("div",{staticClass:"reminder-content",style:{"font-size":e.fontSize+"px"},domProps:{innerHTML:e._s(e.content)}}),e._v(" "),e._t("default"),e._v(" "),e.closeShow?i("i",{staticClass:"el-icon-close close",on:{click:e.close}}):e._e()],2)],1)},[],!1,null,"d9a726d6",null);l.options.__file="Reminder.vue";t.a=l.exports},n00Q:function(e,t,i){"use strict";var n=i("OImj");i.n(n).a},n3ko:function(e,t,i){var n=i("93I4");e.exports=function(e,t){if(!n(e)||e._t!==t)throw TypeError("Incompatible receiver, "+t+" required!");return e}},nboU:function(e,t,i){"use strict";t.a={watch:{loading:function(e){if(e){var t=this.$refs.wkDialog.$refs.dialog;this.loadingInstance=this.$loading({target:t})}else this.loadingInstance&&this.loadingInstance.close()}}}},raTm:function(e,t,i){"use strict";var n=i("5T2Y"),o=i("Y7ZC"),l=i("6/1s"),s=i("KUxP"),r=i("NegM"),a=i("XJU/"),c=i("oioR"),u=i("EXMj"),d=i("93I4"),h=i("RfKB"),f=i("2faE").f,v=i("V7Et")(0),p=i("jmDH");e.exports=function(e,t,i,m,g,b){var _=n[e],w=_,y=g?"set":"add",k=w&&w.prototype,C={};return p&&"function"==typeof w&&(b||k.forEach&&!s(function(){(new w).entries().next()}))?(w=t(function(t,i){u(t,w,e,"_c"),t._c=new _,void 0!=i&&c(i,g,t[y],t)}),v("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),function(e){var t="add"==e||"set"==e;e in k&&(!b||"clear"!=e)&&r(w.prototype,e,function(i,n){if(u(this,w,e),!t&&b&&!d(i))return"get"==e&&void 0;var o=this._c[e](0===i?0:i,n);return t?this:o})}),b||f(w.prototype,"size",{get:function(){return this._c.size}})):(w=m.getConstructor(t,e,g,y),a(w.prototype,i),l.NEED=!0),h(w,e),C[e]=w,o(o.G+o.W+o.F,C),b||m.setStrong(w,e,g),w}},v6xn:function(e,t,i){var n=i("C2SN");e.exports=function(e,t){return new(n(e))(t)}},xvv9:function(e,t,i){i("cHUd")("Set")}}]);