(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{629:function(t,s,e){"use strict";e.r(s);var a=e(5),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),e("p",[t._v("通过自己编写的docker-compose.yml管理项目。\n但是生成的容器却立刻退出")]),t._v(" "),e("h2",{attrs:{id:"解决"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决"}},[t._v("#")]),t._v(" 解决")]),t._v(" "),e("p",[t._v("Docker镜像的缺省命令是bash，如果不加 -it,bash命令执行了自动会退出，加-it后docker命令会为容器分配一个伪终端，并接管其stdin/stdout支持交互操作，这时候bash命令不会自动退出\n像不使用docker-compose,我们会执行类似如下的命令\ndocker run -it --name node node\n但docker-compose需要额外配置下\n需要在docker-compose.yml中包含以下行:")]),t._v(" "),e("div",{staticClass:"language-yaml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("stdin_open")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tty")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("第一个对应于docker run中的 -i ,第二个对应于 -t .")])])}),[],!1,null,null,null);s.default=n.exports}}]);