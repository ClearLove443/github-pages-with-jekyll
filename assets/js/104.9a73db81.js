(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{677:function(s,e,a){"use strict";a.r(e);var t=a(5),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("s在 Linux 系统中，使用 sudo 命令时提示 “command not found”，首先执行以下命令看一下 /etc/sudoers.d 文件是否存在，")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" /etc/sudoers.d\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果返回 No such file or directory，就说明你的系统没有安装sudo，下面是安装命令 ：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果提示 E: Unable to locate package sudo 的错误，先执行下面的命令：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("再执行 sudo apt-get install 就可以了。")]),s._v(" "),a("p",[s._v("2、如果 /etc/sudoers.d 文件存在则说明系统已经安装了 sudo，只不过没有配置环境。")]),s._v(" "),a("p",[s._v("当你使用 sudo 去执行一个程序时，处于安全的考虑，这个程序将在一个新的、最小化的环境中执行，也就是说，诸如PATH这样的环境变量，在 sudo 命令下已经被重置成默认状态了。所以当一个刚初始化的 PATH 变量中不包含你所要运行的程序所在的目录，用 sudo 去执行，你就会得到 “command not found” 的错误提示。")]),s._v(" "),a("p",[s._v("要想改变 PATH 在 sudo 会话中的初始值，使用以下命令打开/etc/sudoers文件，")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/sudoers\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v('找到"secure_path"一行，当你执行 sudo 命令时，"secure_path"中包含的路径将被当做默认 PATH 变量使用。')]),s._v(" "),a("p",[s._v('按 “i” 键就可以进入插入模式（Insert mode），添加所需要的路径(如 /usr/local/bin）到"secure_path"下，\nDefaults secure_path = /sbin:/bin:/usr/sbin:/usr/bin:/usr/local/bin')]),s._v(" "),a("p",[s._v("编辑完成后，按 “ESC” 键切换为命令行模式，输入 “: wq” 保存并退出。")]),s._v(" "),a("p",[s._v("————————————————\n版权声明：本文为CSDN博主「ByteSaid」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。\n原文链接：https://blog.csdn.net/hello_1995/article/details/109222650")])])}),[],!1,null,null,null);e.default=n.exports}}]);