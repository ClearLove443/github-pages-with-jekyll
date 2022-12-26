(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{522:function(s,a,t){"use strict";t.r(a);var e=t(2),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"添加环境变量之前需要明白以下几点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加环境变量之前需要明白以下几点"}},[s._v("#")]),s._v(" 添加环境变量之前需要明白以下几点：")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("Linux的环境变量是保存在变量PATH中(window 也是保存在PATH中)，可通过命令 echo $PATH 输出查看")])]),s._v(" "),a("li",[a("p",[s._v("Linux环境变量值之间是通过冒号分隔的( : )")])])]),s._v(" "),a("p",[s._v("其格式为："),a("code",[s._v("PATH=$PATH:<PATH 1>:<PATH 2>:<PATH 3>:------:<PATH N>")])]),s._v(" "),a("h2",{attrs:{id:"临时添加环境变量path"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#临时添加环境变量path"}},[s._v("#")]),s._v(" 临时添加环境变量PATH：")]),s._v(" "),a("p",[s._v("可通过export命令，如")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v(":/usr/local/nginx/sbin/，将/usr/local/nginx/sbin/目录临时添加到环境变量中\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"当前用户永久添加环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#当前用户永久添加环境变量"}},[s._v("#")]),s._v(" 当前用户永久添加环境变量：")]),s._v(" "),a("p",[s._v("编辑.bashrc文件 "),a("code",[s._v("vim ~/.bashrc")]),s._v("    <<---- 通过这种方式，在关闭xshell后，添加的环境变量仍然生效")]),s._v(" "),a("p",[s._v("文件末尾添加："),a("code",[s._v('export PATH="$PATH:/usr/local/nginx/sbin/"')])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.bashrc\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"所有用户永久添加环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#所有用户永久添加环境变量"}},[s._v("#")]),s._v(" 所有用户永久添加环境变量：")]),s._v(" "),a("p",[s._v("编辑/etc/profile文件 vim /etc/profile    <<---- 通过这种方式，在关闭xshell后，添加的环境变量不生效")]),s._v(" "),a("p",[s._v('文件末尾添加：export PATH="$PATH:/usr/local/nginx/sbin/"')]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v("  /etc/profile\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结：")]),s._v(" "),a("p",[s._v("linux添加环境变量注意几点：")]),s._v(" "),a("ol",[a("li",[s._v("变量之前使用冒号分隔")]),s._v(" "),a("li",[s._v("使用命令export")]),s._v(" "),a("li",[s._v("export时，需要有$PATH")]),s._v(" "),a("li",[s._v("在文件的末尾添加")]),s._v(" "),a("li",[s._v("配置文件有，/etc/profile  和  ~/.bashrc")]),s._v(" "),a("li",[s._v("添加bin或者sbin目录即可")])])])}),[],!1,null,null,null);a.default=r.exports}}]);