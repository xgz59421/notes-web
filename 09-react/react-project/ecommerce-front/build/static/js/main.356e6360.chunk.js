(this["webpackJsonpecommerce-front"]=this["webpackJsonpecommerce-front"]||[]).push([[0],{427:function(e,t,c){},428:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(102),r=c(0),s=c.n(r),i=c(32),l=c.n(i),j=c(33),o=c(41),d=c(43),u=c(437),b=c(112),O=c(76),h=c(434),p=c(46),x=c(171),m=c(439);function f(){var e=localStorage.getItem("jwt");return!!e&&JSON.parse(e)}var g=c(11),y=function(){return"undefined"!==typeof window&&localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")).length:0},v=s.a.createContext([0,function(){return null}]),I=function(e){var t=e.children,c=Object(r.useState)(y()),n=Object(p.a)(c,2),s=n[0],i=n[1];return Object(a.jsx)(v.Provider,{value:[s,i],children:t})};function S(e,t){return e===t?"ant-menu-item-selected":""}var w,N=function(){var e=Object(j.e)((function(e){return e.router})).location.pathname,t=S(e,"/"),c=S(e,"/shop"),n=S(e,"/signin"),s=S(e,"/signup"),i=S(e,"/cart"),l=S(e,h()),d=Object(r.useContext)(v),u=Object(p.a)(d,2),b=u[0],O=u[1];function h(){var e="/user/dashboard";f()&&(1===f().user.role&&(e="/admin/dashboard"));return e}return Object(r.useEffect)((function(){O(y())})),Object(a.jsxs)(x.a,{mode:"horizontal",selectable:!1,children:[Object(a.jsx)(x.a.Item,{className:t,children:Object(a.jsx)(o.b,{to:"/",children:"\u9996\u9875"})}),Object(a.jsx)(x.a.Item,{className:c,children:Object(a.jsx)(o.b,{to:"/shop",children:"\u5546\u57ce"})}),Object(a.jsx)(x.a.Item,{className:i,children:Object(a.jsxs)(o.b,{to:"/cart",children:["\u8d2d\u7269\u8f66",Object(a.jsx)(m.a,{count:b,offset:[5,-10]})]})}),!f()&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(x.a.Item,{className:n,children:Object(a.jsx)(o.b,{to:"/signin",children:"\u767b\u5f55"})}),Object(a.jsx)(x.a.Item,{className:s,children:Object(a.jsx)(o.b,{to:"/signup",children:"\u6ce8\u518c"})})]}),f()&&Object(a.jsx)(x.a.Item,{className:l,children:Object(a.jsx)(o.b,{to:h(),children:"dashboard"})})]})},_=function(e){var t=e.children,c=e.title,n=e.subTitle;return Object(a.jsxs)("div",{children:[Object(a.jsx)(N,{}),Object(a.jsx)(h.a,{className:"jumbotron",title:c,subTitle:n}),Object(a.jsx)("div",{style:{width:"85%",margin:"0 auto"},children:t})]})},T=c(85),C=c(432),E=c(435),k=c(144),F=c.n(k);w="http://ecommerce.fed.lagou.com/api";var A=c(55),P=u.a.Title,D=u.a.Paragraph,U=function(e){var t=e.product,c=e.showViewProduct,n=void 0===c||c,r=e.showCartBtn,s=void 0===r||r,i=Object(j.d)(),l=function(){!function(e,t){var c=[];"undefined"!==typeof window&&(localStorage.getItem("cart")&&(c=JSON.parse(localStorage.getItem("cart"))),c.push(Object(g.a)(Object(g.a)({},e),{},{count:1}))),c=Array.from(new Set(c.map((function(e){return e._id})))).map((function(e){return c.find((function(t){return t._id===e}))})),localStorage.setItem("cart",JSON.stringify(c)),t()}(t,(function(){i(Object(A.d)("/cart"))}))};return Object(a.jsxs)(C.a,{cover:Object(a.jsx)(E.a,{src:"".concat(w,"/product/photo/").concat(t._id),alt:t.name}),actions:function(){var e=[];return n&&e.push(Object(a.jsx)(T.a,{type:"link",children:Object(a.jsx)(o.b,{to:"/product/".concat(t._id),children:"\u67e5\u770b\u8be6\u60c5"})})),s&&e.push(Object(a.jsx)(T.a,{type:"link",onClick:l,children:"\u52a0\u5165\u8d2d\u7269\u8f66"})),e}(),children:[Object(a.jsx)(P,{level:5,children:t.name}),Object(a.jsx)(D,{ellipsis:{rows:2},children:t.description}),Object(a.jsxs)(b.a,{children:[Object(a.jsxs)(O.a,{span:"12",children:["\u9500\u91cf: ",t.sold]}),Object(a.jsxs)(O.a,{span:"12",style:{textAlign:"right"},children:["\u4ef7\u683c: ",t.price]})]}),Object(a.jsxs)(b.a,{children:[Object(a.jsxs)(O.a,{span:"12",children:["\u4e0a\u67b6\u65f6\u95f4: ",F()(t.createdAt).format("YYYY-MM-DD")]}),Object(a.jsxs)(O.a,{span:"12",style:{textAlign:"right"},children:["\u6240\u5c5e\u5206\u7c7b: ",t.category.name]})]})]})},G=c(433),B=c(440),R=c(125),z=c(430),J="GET_CATEGORY",Y="GET_CATEGORY_SUCCESS",M=function(){return{type:J}},V="GET_PRODUCT",L="GET_PRODUCT_SUCCESS",q=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"desc",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;return{type:V,sortBy:e,order:t,limit:c}},H=function(e,t){return{type:L,payload:e,sortBy:t}},W="SEARCH_PRODUCT",$="SEARCH_PRODUCT_SUCCESS",K="FILTER_PRODUCT",Q="FILTER_PRODUCT_SUCCESS",X="GET_PRODUCT_BY_ID",Z="GET_PRODUCT_BY_ID_SUCCESS",ee=function(e){return{type:Z,payload:e}},te=function(){var e=Object(j.d)(),t=Object(j.e)((function(e){return e.category})).category,c=Object(j.e)((function(e){return e.product})).search;Object(r.useEffect)((function(){e(M())}),[]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(G.a,{onFinish:function(t){var c;e((c={category:t.category,search:t.search},{type:W,payload:c}))},layout:"inline",initialValues:{category:"All"},children:Object(a.jsxs)(B.a.Group,{compact:!0,children:[Object(a.jsx)(G.a.Item,{name:"category",children:Object(a.jsxs)(R.a,{children:[Object(a.jsx)(R.a.Option,{value:"All",children:"\u6240\u6709\u5206\u7c7b"}),t.result.map((function(e){return Object(a.jsx)(R.a.Option,{value:e._id,children:e.name},e._id)}))]})}),Object(a.jsx)(G.a.Item,{name:"search",children:Object(a.jsx)(B.a,{placeholder:"\u8bf7\u8f93\u5165\u641c\u7d22\u5173\u952e\u5b57"})}),Object(a.jsx)(G.a.Item,{children:Object(a.jsx)(T.a,{htmlType:"submit",children:"\u641c\u7d22"})})]})}),Object(a.jsx)(z.a,{}),Object(a.jsx)(b.a,{gutter:[16,16],children:c.map((function(e){return Object(a.jsx)(O.a,{span:"6",children:Object(a.jsx)(U,{product:e})})}))})]})},ce=u.a.Title,ae=function(){var e=Object(j.d)(),t=Object(j.e)((function(e){return e.product})),c=t.createdAt,n=t.sold;return Object(r.useEffect)((function(){e(q("createdAt")),e(q("sold"))}),[]),Object(a.jsxs)(_,{title:"\u62c9\u52fe\u7535\u5546",subTitle:"\u6b22\u8fce\u6765\u5230\u62c9\u52fe\u7535\u5546, \u5c3d\u60c5\u4eab\u53d7\u5427",children:[Object(a.jsx)(te,{}),Object(a.jsx)(ce,{level:5,children:"\u6700\u65b0\u4e0a\u67b6"}),Object(a.jsx)(b.a,{gutter:[16,16],children:c.products.map((function(e){return Object(a.jsx)(O.a,{span:"6",children:Object(a.jsx)(U,{product:e})},e._id)}))}),Object(a.jsx)(ce,{level:5,children:"\u6700\u53d7\u6b22\u8fce"}),Object(a.jsx)(b.a,{gutter:[16,16],children:n.products.map((function(e){return Object(a.jsx)(O.a,{span:"6",children:Object(a.jsx)(U,{product:e})},e._id)}))})]})},ne=c(444),re=c(113),se=c(443),ie=u.a.Title,le=function(e){var t=e.handleFilter,c=Object(j.d)(),n=Object(j.e)((function(e){return e.category}));Object(r.useEffect)((function(){c(M())}),[]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(ie,{level:4,children:"\u6309\u7167\u5206\u7c7b\u7b5b\u9009"}),Object(a.jsx)(se.a.Group,{className:"checkBoxFilter",options:n.category.result.map((function(e){return{label:e.name,value:e._id}})),onChange:function(e){t(e)}})]})},je=c(438),oe=c(436),de=[{id:0,name:"\u4e0d\u9650\u5236\u4ef7\u683c",array:[]},{id:1,name:"1 - 50",array:[1,50]},{id:2,name:"51 - 100",array:[51,100]},{id:3,name:"101 - 150",array:[101,150]},{id:4,name:"151 - 200",array:[151,200]},{id:5,name:"201 - 500",array:[201,500]}],ue=u.a.Title,be=function(e){var t=e.handleFilter,c=function(e){t(e.target.value)};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(ue,{level:4,children:"\u6309\u7167\u4ef7\u683c\u7b5b\u9009"}),Object(a.jsx)(je.a.Group,{children:Object(a.jsx)(oe.b,{dataSource:de,renderItem:function(e){return Object(a.jsx)(oe.b.Item,{children:Object(a.jsx)(je.a,{onChange:c,value:e.array,children:e.name})})}})})]})},Oe=function(){var e=Object(j.d)(),t=Object(r.useState)(0),c=Object(p.a)(t,2),n=c[0],s=c[1],i=Object(j.e)((function(e){return e.product})),l=Object(r.useState)({category:[],price:[]}),o=Object(p.a)(l,2),d=o[0],u=o[1];Object(r.useEffect)((function(){s(0)}),[d]),Object(r.useEffect)((function(){e({type:K,payload:{filters:d,skip:n}})}),[d,n]);var h=function(){s(n+4)};return Object(a.jsx)(_,{title:"\u62c9\u52fe\u5546\u57ce",subTitle:"\u6311\u9009\u4f60\u559c\u6b22\u7684\u5546\u54c1\u5427",children:Object(a.jsxs)(b.a,{children:[Object(a.jsx)(O.a,{span:"4",children:Object(a.jsxs)(ne.b,{size:"middle",direction:"vertical",children:[Object(a.jsx)(le,{handleFilter:function(e){u(Object(g.a)(Object(g.a)({},d),{},{category:e}))}}),Object(a.jsx)(be,{handleFilter:function(e){u(Object(g.a)(Object(g.a)({},d),{},{price:e}))}})]})}),Object(a.jsxs)(O.a,{span:"20",children:[Object(a.jsx)(b.a,{gutter:[16,16],children:i.filter.result.data.map((function(e){return Object(a.jsx)(O.a,{span:"6",children:Object(a.jsx)(U,{product:e})},e._id)}))})," ",Object(a.jsx)(b.a,{children:i.filter.result.size>=4&&Object(a.jsx)(T.a,{onClick:h,children:"\u52a0\u8f7d\u66f4\u591a"})})," ",Object(a.jsx)(b.a,{children:0===i.filter.result.size&&Object(a.jsx)(re.a,{})})]})]})})},he=c(441),pe="SIGNUP",xe="SIGNUP_SUCCESS",me="SIGNUP_FAIL",fe="RESET_SIGNUP",ge=function(e){return{type:me,message:e}},ye="SIGNIN",ve="SIGNIN_SUCCESS",Ie="SIGNIN_FAIL",Se=function(e){return{type:Ie,message:e}},we=function(){var e=Object(j.d)(),t=function(t){e({type:ye,payload:t})},c=Object(j.e)((function(e){return e.auth}));return Object(a.jsxs)(_,{title:"\u767b\u5f55",subTitle:"\u563f, \u5c0f\u4f19\u4f34, \u7acb\u5373\u767b\u5f55\u5230\u62c9\u94a9\u7535\u5546\u7cfb\u7edf\u5427",children:[function(){if(c.signin.loaded&&!c.signin.success)return Object(a.jsx)(he.a,{status:"warning",title:"\u767b\u5f55\u5931\u8d25",subTitle:c.signin.message})}(),function(){var e=f();if(e)return 0===e.user.role?Object(a.jsx)(d.a,{to:"/user/dashboard"}):Object(a.jsx)(d.a,{to:"/admin/dashboard"})}(),Object(a.jsxs)(G.a,{onFinish:t,children:[Object(a.jsx)(G.a.Item,{name:"email",label:"\u90ae\u7bb1",children:Object(a.jsx)(B.a,{})}),Object(a.jsx)(G.a.Item,{name:"password",label:"\u5bc6\u7801",children:Object(a.jsx)(B.a.Password,{})}),Object(a.jsx)(G.a.Item,{children:Object(a.jsx)(T.a,{type:"primary",htmlType:"submit",children:"\u767b\u5f55"})})]})]})},Ne=function(){var e=Object(j.d)(),t=Object(j.e)((function(e){return e.auth})),c=G.a.useForm(),n=Object(p.a)(c,1)[0],s=function(t){e({type:pe,payload:t})};Object(r.useEffect)((function(){t.signup.loaded&&t.signup.success&&n.resetFields()}),[t]);Object(r.useEffect)((function(){return function(){e({type:fe})}}),[]);return Object(a.jsxs)(_,{title:"\u6ce8\u518c",subTitle:"\u8fd8\u6ca1\u6709\u8d26\u53f7? \u6ce8\u518c\u4e00\u4e2a\u5427.",children:[function(){if(t.signup.loaded&&t.signup.success)return Object(a.jsx)(he.a,{status:"success",title:"\u6ce8\u518c\u6210\u529f",extra:[Object(a.jsx)(T.a,{type:"primary",children:Object(a.jsx)(o.b,{to:"/signin",children:"\u767b\u5f55"})})]})}(),function(){if(t.signup.loaded&&!t.signup.success)return Object(a.jsx)(he.a,{status:"warning",title:"\u6ce8\u518c\u5931\u8d25",subTitle:t.signup.message})}(),Object(a.jsxs)(G.a,{form:n,onFinish:s,children:[Object(a.jsx)(G.a.Item,{name:"name",label:"\u6635\u79f0",children:Object(a.jsx)(B.a,{})}),Object(a.jsx)(G.a.Item,{name:"password",label:"\u5bc6\u7801",children:Object(a.jsx)(B.a.Password,{})}),Object(a.jsx)(G.a.Item,{name:"email",label:"\u90ae\u7bb1",children:Object(a.jsx)(B.a,{})}),Object(a.jsx)(G.a.Item,{name:"email",children:Object(a.jsx)(T.a,{type:"primary",htmlType:"submit",children:"\u6ce8\u518c"})})]})]})},_e=function(){return Object(a.jsx)(_,{title:"\u7528\u6237 Dashboard",subTitle:"",children:"Dashboard"})},Te=c(154),Ce=function(e){var t=e.component,c=Object(Te.a)(e,["component"]);return Object(a.jsx)(d.b,Object(g.a)(Object(g.a)({},c),{},{render:function(e){return f()?Object(a.jsx)(t,Object(g.a)({},e)):Object(a.jsx)(d.a,{to:"/signin"})}}))},Ee=c(445),ke=c(446),Fe=c(447),Ae=c(442),Pe=u.a.Title,De=function(){var e=f().user,t=e.name,c=e.email;return Object(a.jsx)(_,{title:"\u7ba1\u7406\u5458 Dashboard",subTitle:"",children:Object(a.jsxs)(b.a,{children:[Object(a.jsx)(O.a,{span:"4",children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(Pe,{level:5,children:"\u7ba1\u7406\u5458\u94fe\u63a5"}),Object(a.jsxs)(x.a,{children:[Object(a.jsxs)(x.a.Item,{children:[Object(a.jsx)(Ee.a,{}),Object(a.jsx)(o.b,{to:"/create/category",children:"\u6dfb\u52a0\u5206\u7c7b"})]}),Object(a.jsxs)(x.a.Item,{children:[Object(a.jsx)(ke.a,{}),Object(a.jsx)(o.b,{to:"/create/product",children:"\u6dfb\u52a0\u4ea7\u54c1"})]}),Object(a.jsxs)(x.a.Item,{children:[Object(a.jsx)(Fe.a,{}),Object(a.jsx)(o.b,{to:"/admin/orders",children:"\u8ba2\u5355\u5217\u8868"})]})]})]})}),Object(a.jsx)(O.a,{span:"20",children:Object(a.jsxs)(Ae.a,{title:"\u7ba1\u7406\u5458\u4fe1\u606f",bordered:!0,children:[Object(a.jsx)(Ae.a.Item,{label:"\u6635\u79f0",children:t}),Object(a.jsx)(Ae.a.Item,{label:"\u90ae\u4ef6",children:c}),Object(a.jsx)(Ae.a.Item,{label:"\u89d2\u8272",children:"\u7ba1\u7406\u5458"})]})})]})})},Ue=function(e){var t=e.component,c=Object(Te.a)(e,["component"]);return Object(a.jsx)(d.b,Object(g.a)(Object(g.a)({},c),{},{render:function(e){var c=f();if(c&&1===c.user.role)return Object(a.jsx)(t,Object(g.a)({},e));return Object(a.jsx)(d.a,{to:"/signin"})}}))},Ge=c(38),Be=c.n(Ge),Re=c(152),ze=c(238),Je=c(51),Ye=c.n(Je),Me=function(){var e=Object(r.useState)(""),t=Object(p.a)(e,2),c=t[0],n=t[1],s=f(),i=s.user,l=s.token;Object(r.useEffect)((function(){function e(){return(e=Object(Re.a)(Be.a.mark((function e(){var t;return Be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ye.a.post("".concat(w,"/category/create/").concat(i._id),{name:c},{headers:{Authorization:"Bearer ".concat(l)}});case 3:t=e.sent,ze.b.success("[".concat(t.data.name,"] \u5206\u7c7b\u6dfb\u52a0\u6210\u529f")),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),ze.b.error(e.t0.response.data.error);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}c&&function(){e.apply(this,arguments)}()}),[c]);return Object(a.jsxs)(_,{title:"\u6dfb\u52a0\u5206\u7c7b",subTitle:"",children:[Object(a.jsxs)(G.a,{onFinish:function(e){console.log(e),n(e.name)},children:[Object(a.jsx)(G.a.Item,{name:"name",label:"\u5206\u7c7b\u540d\u79f0",children:Object(a.jsx)(B.a,{})}),Object(a.jsx)(G.a.Item,{children:Object(a.jsx)(T.a,{type:"primary",htmlType:"submit",children:"\u6dfb\u52a0\u5206\u7c7b"})})]}),Object(a.jsx)(T.a,{children:Object(a.jsx)(o.b,{to:"/admin/dashboard",children:"\u8fd4\u56de Dashboard"})})]})},Ve=c(431),Le=c(448),qe=function(){var e=Object(j.d)(),t=Object(r.useState)(),c=Object(p.a)(t,2),n=c[0],s=c[1],i=Object(j.e)((function(e){return e.category}));Object(r.useEffect)((function(){e(M())}),[]);var l=f(),o=l.user,d=l.token,u=function(e){var t=new FormData;for(var c in e)t.set(c,e[c]);"undefined"!==typeof n&&t.set("photo",n),Ye.a.post("".concat(w,"/product/create/").concat(o._id),t,{headers:{Authorization:"Bearer ".concat(d)}}).then((function(){ze.b.success("\u5546\u54c1\u6dfb\u52a0\u6210\u529f")}),(function(){ze.b.error("\u5546\u54c1\u6dfb\u52a0\u5931\u8d25")}))};return Object(a.jsx)(_,{title:"\u6dfb\u52a0\u5546\u54c1",subTitle:"",children:function(){var e={accept:"image/*",beforeUpload:function(e){return console.log("file :>> ",e),s(e),!1}};return Object(a.jsxs)(G.a,{onFinish:u,initialValues:{category:""},children:[Object(a.jsx)(G.a.Item,{children:Object(a.jsx)(Ve.a,Object(g.a)(Object(g.a)({},e),{},{children:Object(a.jsx)(T.a,{icon:Object(a.jsx)(Le.a,{}),children:"\u4e0a\u4f20\u5546\u54c1\u5c01\u9762"})}))}),Object(a.jsx)(G.a.Item,{name:"name",label:"\u5546\u54c1\u540d\u79f0",children:Object(a.jsx)(B.a,{})}),Object(a.jsx)(G.a.Item,{name:"description",label:"\u5546\u54c1\u63cf\u8ff0",children:Object(a.jsx)(B.a,{})}),Object(a.jsx)(G.a.Item,{name:"price",label:"\u5546\u54c1\u4ef7\u683c",children:Object(a.jsx)(B.a,{})}),Object(a.jsx)(G.a.Item,{name:"category",label:"\u6240\u5c5e\u5206\u7c7b",children:Object(a.jsxs)(R.a,{children:[Object(a.jsx)(R.a.Option,{value:"",children:"\u8bf7\u9009\u62e9\u5206\u7c7b"}),i.category.result.map((function(e){return Object(a.jsx)(R.a.Option,{value:e._id,children:e.name},e._id)}))]})}),Object(a.jsx)(G.a.Item,{name:"quantity",label:"\u5546\u54c1\u6570\u91cf",children:Object(a.jsx)(B.a,{})}),Object(a.jsx)(G.a.Item,{name:"shipping",label:"\u662f\u5426\u9700\u8981\u8fd0\u8f93",children:Object(a.jsxs)(R.a,{children:[Object(a.jsx)(R.a.Option,{value:"1",children:"\u662f"}),Object(a.jsx)(R.a.Option,{value:"0",children:"\u5426"})]})}),Object(a.jsx)(G.a.Item,{children:Object(a.jsx)(T.a,{type:"primary",htmlType:"submit",children:"\u6dfb\u52a0\u5546\u54c1"})})]})}()})},He=function(){var e=Object(j.d)(),t=Object(j.e)((function(e){return e.product})).product,c=Object(d.g)().productId;return Object(r.useEffect)((function(){e({type:X,payload:{productId:c}})}),[]),Object(a.jsx)(_,{title:"\u5546\u54c1\u540d\u79f0",subTitle:"\u5546\u54c1\u63cf\u8ff0",children:Object(a.jsxs)(b.a,{gutter:36,children:[Object(a.jsx)(O.a,{span:"18",children:Object(a.jsx)(U,{showViewProduct:!1,product:t.result})}),Object(a.jsx)(O.a,{span:"6",children:"right"})]})})},We=function(e){var t=e.product,c=e.setCart,n=Object(r.useState)(t.count),s=Object(p.a)(n,2),i=s[0],l=s[1];return Object(a.jsxs)("tr",{className:"ant-table-row",children:[Object(a.jsx)("td",{className:"ant-table-cell",children:Object(a.jsx)(E.a,{width:120,src:"".concat(w,"/product/photo/").concat(t._id)})}),Object(a.jsx)("td",{className:"ant-table-cell",children:t.name}),Object(a.jsx)("td",{className:"ant-table-cell",children:t.price}),Object(a.jsx)("td",{className:"ant-table-cell",children:t.category.name}),Object(a.jsx)("td",{className:"ant-table-cell",children:Object(a.jsx)(B.a,{type:"number",value:i,onChange:function(e){var a=parseInt(e.target.value);c(function(e,t){var c=[];return"undefined"!==typeof window&&(localStorage.getItem("cart")&&(c=JSON.parse(localStorage.getItem("cart"))),c.forEach((function(a,n){a._id===e&&(c[n].count=t)})),localStorage.setItem("cart",JSON.stringify(c))),c}(t._id,a)),l(a)}})}),Object(a.jsx)("td",{className:"ant-table-cell",children:Object(a.jsx)(T.a,{onClick:function(){return c(function(e){var t=[];return"undefined"!==typeof window&&(localStorage.getItem("cart")&&(t=JSON.parse(localStorage.getItem("cart"))),t.forEach((function(c,a){c._id===e&&t.splice(a,1)})),localStorage.setItem("cart",JSON.stringify(t))),t}(t._id))},danger:!0,type:"primary",children:"\u5220\u9664"})})]})},$e=u.a.Title,Ke=function(e){var t=e.cart,c=e.setTotalPrice,n=function(){return console.log(t),t.reduce((function(e,t){return e+t.price*t.count}),0).toFixed(2)};return Object(r.useEffect)((function(){c(parseFloat(n()))}),[t]),Object(a.jsxs)($e,{level:5,children:["\u5546\u54c1\u603b\u4ef7: ",n()]})},Qe=function(e){var t=e.totalPrice,c=e.address,n=e.cart,r=function(){Ye.a.post("".concat(w,"/alipay"),{totalAmount:t,subject:"\u6d4b\u8bd5\u8ba2\u5355\u6807\u9898",body:"\u6d4b\u8bd5\u8ba2\u5355\u63cf\u8ff0",products:n.map((function(e){return{count:e.count,product:e._id}})),address:c,userId:f().user._id}).then((function(e){window.location.href=e.data.result}))};return Object(a.jsx)(a.Fragment,{children:f()?Object(a.jsx)(T.a,{onClick:r,children:"\u63d0\u4ea4\u8ba2\u5355"}):Object(a.jsx)(T.a,{children:Object(a.jsx)(o.b,{to:"/signin",children:"\u767b\u5f55"})})})},Xe=function(){var e=Object(r.useState)([]),t=Object(p.a)(e,2),c=t[0],n=t[1],s=Object(r.useState)(""),i=Object(p.a)(s,2),l=i[0],j=i[1],o=Object(r.useState)((function(){return 0})),d=Object(p.a)(o,2),u=d[0],h=d[1];Object(r.useEffect)((function(){n("undefined"!==typeof window&&localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[])}),[]);return Object(a.jsx)(_,{title:"\u8d2d\u7269\u8f66",subTitle:"\u4ed8\u6b3e\u5427, \u6211\u5c31\u662f\u4f60\u7684\u4e86",children:Object(a.jsxs)(b.a,{gutter:16,children:[Object(a.jsx)(O.a,{span:"16",children:Object(a.jsxs)("table",{style:{width:"100%"},children:[Object(a.jsx)("thead",{className:"ant-table-thead",children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{className:"ant-table-cell",children:"\u5546\u54c1\u5c01\u9762"}),Object(a.jsx)("th",{className:"ant-table-cell",children:"\u5546\u54c1\u540d\u79f0"}),Object(a.jsx)("th",{className:"ant-table-cell",children:"\u5546\u54c1\u4ef7\u683c"}),Object(a.jsx)("th",{className:"ant-table-cell",children:"\u5546\u54c1\u5206\u7c7b"}),Object(a.jsx)("th",{className:"ant-table-cell",children:"\u5546\u54c1\u6570\u91cf"}),Object(a.jsx)("th",{className:"ant-table-cell",children:"\u64cd\u4f5c"})]})}),Object(a.jsx)("tbody",{className:"ant-table-tbody",children:c.map((function(e){return Object(a.jsx)(We,{setCart:n,product:e},e._id)}))})]})}),Object(a.jsxs)(O.a,{span:"8",children:[Object(a.jsx)(b.a,{children:Object(a.jsx)(B.a,{value:l,onChange:function(e){return j(e.target.value)},placeholder:"\u8bf7\u8f93\u5165\u6536\u8d27\u5730\u5740"})}),Object(a.jsx)(z.a,{}),Object(a.jsx)(b.a,{children:Object(a.jsx)(Ke,{cart:c,setTotalPrice:h})}),Object(a.jsx)(b.a,{children:Object(a.jsx)(Qe,{totalPrice:u,cart:c,address:l})})]})]})})},Ze=function(){return Object(a.jsx)(_,{title:"\u652f\u4ed8\u5b8c\u6210",subTitle:"",children:Object(a.jsx)(T.a,{children:Object(a.jsx)(o.b,{to:"/",children:"\u7ee7\u7eed\u8d2d\u7269"})})})},et=u.a.Title,tt=function(){var e=f(),t=e.token,c=e.user,n=Object(r.useState)([]),s=Object(p.a)(n,2),i=s[0],l=s[1];function j(){return o.apply(this,arguments)}function o(){return(o=Object(Re.a)(Be.a.mark((function e(){var a;return Be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ye.a.get("".concat(w,"/order/list/").concat(c._id),{headers:{Authorization:"Bearer ".concat(t)}});case 2:a=e.sent,l(a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(r.useEffect)((function(){j()}),[]);var d=function(e){switch(e){case"Unpaid":return"\u672a\u4ed8\u6b3e";case"Paid":return"\u5df2\u4ed8\u6b3e";case"Shipped":return"\u8fd0\u8f93\u4e2d";case"Completed":return"\u5df2\u5b8c\u6210";case"Cancelled":return"\u5df2\u53d6\u6d88"}};return Object(a.jsx)(_,{title:"\u8ba2\u5355",subTitle:i.length>0?"\u5f53\u524d\u8ba2\u5355\u7684\u6570\u91cf\u662f ".concat(i.length):"\u8fd8\u6ca1\u6709\u8ba2\u5355",children:i.map((function(e){return Object(a.jsxs)("div",{children:[Object(a.jsxs)(et,{level:4,children:["\u8ba2\u5355ID: $",e._id]}),Object(a.jsxs)("table",{style:{width:"100%"},children:[Object(a.jsx)("thead",{className:"ant-table-thead",children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{className:"ant-table-cell",children:"\u8ba2\u5355\u72b6\u6001"}),Object(a.jsx)("th",{className:"ant-table-cell",children:"\u8ba2\u5355\u53f7"}),Object(a.jsx)("th",{className:"ant-table-cell",children:"\u603b\u4ef7"}),Object(a.jsx)("th",{className:"ant-table-cell",children:"\u521b\u5efa\u65f6\u95f4"}),Object(a.jsx)("th",{className:"ant-table-cell",children:"\u90ae\u5bc4\u5730\u5740"}),Object(a.jsx)("th",{className:"ant-table-cell",children:"\u5ba2\u6237\u59d3\u540d"})]})}),Object(a.jsx)("tbody",{className:"ant-table-tbody",children:Object(a.jsxs)("tr",{className:"ant-table-row",children:[Object(a.jsxs)("td",{className:"ant-table-cell",children:[d(e.status)," ",Object(a.jsxs)(R.a,{onChange:(n=e._id,function(e){Ye.a.put("".concat(w,"/order/status/").concat(c._id),{orderId:n,status:e},{headers:{Authorization:"Bearer ".concat(t)}}).then((function(){j()}))}),defaultValue:e.status,children:[Object(a.jsx)(R.a.Option,{value:"Unpaid",children:"\u672a\u4ed8\u6b3e"}),Object(a.jsx)(R.a.Option,{value:"Paid",children:"\u5df2\u4ed8\u6b3e"}),Object(a.jsx)(R.a.Option,{value:"Shipped",children:"\u8fd0\u8f93\u4e2d"}),Object(a.jsx)(R.a.Option,{value:"Completed",children:"\u5df2\u5b8c\u6210"}),Object(a.jsx)(R.a.Option,{value:"Cancelled",children:"\u5df2\u53d6\u6d88"})]})]}),Object(a.jsx)("td",{className:"ant-table-cell",children:e.trade_no}),Object(a.jsx)("td",{className:"ant-table-cell",children:e.amount}),Object(a.jsx)("td",{className:"ant-table-cell",children:F()(e.createdAt).format("YYYY-MM-DD")}),Object(a.jsx)("td",{className:"ant-table-cell",children:e.address}),Object(a.jsx)("td",{className:"ant-table-cell",children:e.user.name})]})})]}),Object(a.jsxs)("table",{style:{width:"100%"},children:[Object(a.jsx)("thead",{className:"ant-table-thead",children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{className:"ant-table-cell",children:"\u5546\u54c1\u540d\u79f0"}),Object(a.jsx)("th",{className:"ant-table-cell",children:"\u5546\u54c1\u4ef7\u683c"}),Object(a.jsx)("th",{className:"ant-table-cell",children:"\u5546\u54c1\u6570\u91cf"}),Object(a.jsx)("th",{className:"ant-table-cell",children:"\u5546\u54c1ID"})]})}),Object(a.jsx)("tbody",{className:"ant-table-tbody",children:e.products.map((function(e){return Object(a.jsxs)("tr",{className:"ant-table-row",children:[Object(a.jsx)("td",{className:"ant-table-cell",children:e.product.name}),Object(a.jsx)("td",{className:"ant-table-cell",children:e.product.price}),Object(a.jsx)("td",{className:"ant-table-cell",children:e.count}),Object(a.jsx)("td",{className:"ant-table-cell",children:e.product._id})]},e._id)}))})]}),Object(a.jsx)(z.a,{})]},e._id);var n}))})},ct=function(){return Object(a.jsx)(o.a,{children:Object(a.jsxs)(d.d,{children:[Object(a.jsx)(d.b,{path:"/",component:ae,exact:!0}),Object(a.jsx)(d.b,{path:"/shop",component:Oe}),Object(a.jsx)(d.b,{path:"/signin",component:we}),Object(a.jsx)(d.b,{path:"/signup",component:Ne}),Object(a.jsx)(d.b,{path:"/cart",component:Xe}),Object(a.jsx)(d.b,{path:"/paysuccess",component:Ze}),Object(a.jsx)(Ce,{path:"/user/dashboard",component:_e}),Object(a.jsx)(Ue,{path:"/admin/dashboard",component:De}),Object(a.jsx)(Ue,{path:"/create/category",component:Me}),Object(a.jsx)(Ue,{path:"/create/product",component:qe}),Object(a.jsx)(Ue,{path:"/admin/orders",component:tt}),Object(a.jsx)(d.b,{path:"/product/:productId",component:He})]})})},at=c(78),nt={signup:{loaded:!1,success:!1,message:""},signin:{loaded:!1,success:!1,message:""}};function rt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case pe:return Object(g.a)(Object(g.a)({},e),{},{signup:{loaded:!1,success:!1}});case xe:return Object(g.a)(Object(g.a)({},e),{},{signup:{loaded:!0,success:!0}});case me:return Object(g.a)(Object(g.a)({},e),{},{signup:{loaded:!0,success:!1,message:t.message}});case fe:return Object(g.a)(Object(g.a)({},e),{},{signup:{loaded:!1,success:!1,message:""}});case ye:return Object(g.a)(Object(g.a)({},e),{},{signin:{loaded:!1,success:!1,message:""}});case ve:return Object(g.a)(Object(g.a)({},e),{},{signin:{loaded:!0,success:!0,message:""}});case Ie:return Object(g.a)(Object(g.a)({},e),{},{signin:{loaded:!0,success:!1,message:t.message}});default:return e}}var st={category:{loaded:!1,success:!1,result:[]}};function it(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:st,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J:return Object(g.a)(Object(g.a)({},e),{},{category:{loaded:!1,success:!1,result:[]}});case Y:return Object(g.a)(Object(g.a)({},e),{},{category:{loaded:!0,success:!0,result:t.payload}});default:return e}}var lt=c(172),jt=c(118),ot={createdAt:{loaded:!1,success:!1,products:[]},sold:{loaded:!1,success:!1,products:[]},search:[],filter:{success:!1,loaded:!1,result:{size:0,data:[]}},product:{loaded:!1,success:!1,result:{_id:"",name:"",price:0,description:"",category:{_id:"",name:""},quantity:0,sold:0,photo:new FormData,shipping:!1,createdAt:""}}};function dt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return Object(g.a)(Object(g.a)({},e),{},Object(jt.a)({},t.sortBy,Object(g.a)(Object(g.a)({},e["createdAt"===t.sortBy?"createdAt":"sold"]),{},{loaded:!1,success:!1})));case L:return Object(g.a)(Object(g.a)({},e),{},Object(jt.a)({},t.sortBy,{loaded:!0,success:!0,products:t.payload}));case $:return Object(g.a)(Object(g.a)({},e),{},{search:t.products});case K:return Object(g.a)(Object(g.a)({},e),{},{filter:{loaded:!1,success:!1,result:{size:0,data:e.filter.result.data}}});case Q:var c=0===t.skip?t.payload.data:[].concat(Object(lt.a)(e.filter.result.data),Object(lt.a)(t.payload.data));return Object(g.a)(Object(g.a)({},e),{},{filter:{loaded:!0,success:!0,result:{size:t.payload.size,data:c}}});case X:return Object(g.a)(Object(g.a)({},e),{},{product:Object(g.a)(Object(g.a)({},e.product),{},{loaded:!1,success:!1})});case Z:return Object(g.a)(Object(g.a)({},e),{},{product:{loaded:!0,success:!0,result:t.payload}});default:return e}}var ut=function(e){return Object(at.combineReducers)({router:Object(n.b)(e),auth:rt,category:it,product:dt})},bt=c(61),Ot=c(196),ht=c(234),pt=c(47),xt=Be.a.mark(gt),mt=Be.a.mark(yt),ft=Be.a.mark(vt);function gt(e){return Be.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Ye.a.post("".concat(w,"/signup"),e.payload);case 3:return t.next=5,Object(pt.b)({type:xe});case 5:t.next=11;break;case 7:return t.prev=7,t.t0=t.catch(0),t.next=11,Object(pt.b)(ge(t.t0.response.data.error));case 11:case"end":return t.stop()}}),xt,null,[[0,7]])}function yt(e){var t;return Be.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Ye.a.post("".concat(w,"/signin"),e.payload);case 3:return t=c.sent,localStorage.setItem("jwt",JSON.stringify(t.data)),c.next=7,Object(pt.b)({type:ve});case 7:c.next=13;break;case 9:return c.prev=9,c.t0=c.catch(0),c.next=13,Object(pt.b)(Se(c.t0.response.data.error));case 13:case"end":return c.stop()}}),mt,null,[[0,9]])}function vt(){return Be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(pt.c)(pe,gt);case 2:return e.next=4,Object(pt.c)(ye,yt);case 4:case"end":return e.stop()}}),ft)}var It=Be.a.mark(wt),St=Be.a.mark(Nt);function wt(){var e;return Be.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ye.a.get("".concat(w,"/categories"));case 2:return e=t.sent,t.next=5,Object(pt.b)((c=e.data,{type:Y,payload:c}));case 5:case"end":return t.stop()}var c}),It)}function Nt(){return Be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(pt.c)(J,wt);case 2:case"end":return e.stop()}}),St)}var _t=Be.a.mark(Ft),Tt=Be.a.mark(At),Ct=Be.a.mark(Pt),Et=Be.a.mark(Dt),kt=Be.a.mark(Ut);function Ft(e){var t,c,a,n;return Be.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.sortBy,c=e.order,a=e.limit,r.next=3,Ye.a.get("".concat(w,"/products"),{params:{sortBy:t,order:c,limit:a}});case 3:return n=r.sent,r.next=6,Object(pt.b)(H(n.data,t));case 6:case"end":return r.stop()}}),_t)}function At(e){var t,c,a,n;return Be.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,c=t.search,a=t.category,r.next=3,Ye.a.get("".concat(w,"/products/search"),{params:{search:c,category:a}});case 3:return n=r.sent,r.next=6,Object(pt.b)((s=n.data,{type:$,products:s}));case 6:case"end":return r.stop()}var s}),Tt)}function Pt(e){var t;return Be.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Ye.a.post("".concat(w,"/products/filter"),e.payload);case 2:return t=c.sent,c.next=5,Object(pt.b)((a=t.data,n=e.payload.skip,{type:Q,payload:a,skip:n}));case 5:case"end":return c.stop()}var a,n}),Ct)}function Dt(e){var t,c;return Be.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,a.next=3,Ye.a.get("".concat(w,"/product/").concat(t.productId));case 3:return c=a.sent,a.next=6,Object(pt.b)(ee(c.data));case 6:case"end":return a.stop()}}),Et)}function Ut(){return Be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(pt.c)(V,Ft);case 2:return e.next=4,Object(pt.c)(W,At);case 4:return e.next=6,Object(pt.c)(K,Pt);case 6:return e.next=8,Object(pt.c)(X,Dt);case 8:case"end":return e.stop()}}),kt)}var Gt=Be.a.mark(Bt);function Bt(){return Be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(pt.a)([vt(),Nt(),Ut()]);case 2:case"end":return e.stop()}}),Gt)}var Rt=c(231),zt=Object(bt.b)(),Jt=Object(ht.a)(),Yt=Object(at.createStore)(ut(zt),Object(Rt.composeWithDevTools)(Object(at.applyMiddleware)(Object(Ot.a)(zt),Jt)));Jt.run(Bt);var Mt=Yt;c(427);console.log(w),console.log("production"),l.a.render(Object(a.jsx)(j.a,{store:Mt,children:Object(a.jsx)(n.a,{history:zt,children:Object(a.jsx)(I,{children:Object(a.jsx)(ct,{})})})}),document.getElementById("root"))}},[[428,1,2]]]);
//# sourceMappingURL=main.356e6360.chunk.js.map