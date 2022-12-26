(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{427:function(a,t,s){"use strict";s.r(t);var n=s(2),r=Object(n.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"一、angular默认路由-h5路由"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、angular默认路由-h5路由"}},[a._v("#")]),a._v(" 一、angular默认路由 h5路由")]),a._v(" "),t("p",[a._v("将angular项目的  index.html 的标签修改为 "),t("code",[a._v('<base href="/myangular/">')]),a._v(" 重新编译部署\n修改ngnix服务器的配置文件nginx.conf")]),a._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[a._v("location /myangular "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            alias  /html/myangular;#angular项目所在目录\n            index  index.html index.htm;\n            try_files $uri $uri/ /index.html ="),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("404")]),a._v(";\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("h1",{attrs:{id:"二、angular-hash路由-不需要修改服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、angular-hash路由-不需要修改服务器"}},[a._v("#")]),a._v(" 二、angular  hash路由 #（不需要修改服务器）")]),a._v(" "),t("p",[a._v("直接在angular项目的app.module.ts文件中添加相关配置")]),a._v(" "),t("h2",{attrs:{id:"方法1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法1"}},[a._v("#")]),a._v(" 方法1：")]),a._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token literal-property property"}},[a._v("imports")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n   RouterModule"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("forRoot")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("routers"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[a._v("useHash")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("h2",{attrs:{id:"方法2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法2"}},[a._v("#")]),a._v(" 方法2：")]),a._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//导入hash模块")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" LocationStrategy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" HashLocationStrategy "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'@angular/common'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n@"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("NgModule")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//进行配置")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[a._v("providers")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[a._v("provide")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" LocationStrategy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[a._v("useClass")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" HashLocationStrategy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("， \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);