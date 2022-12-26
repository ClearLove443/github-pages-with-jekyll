(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{519:function(s,a,t){"use strict";t.r(a);var e=t(2),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"linux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[s._v("#")]),s._v(" linux")]),s._v(" "),a("p",[s._v("Linux 查看端口占用情况可以使用 "),a("code",[s._v("lsof")]),s._v(" 和 "),a("code",[s._v("netstat")]),s._v(" 命令。")]),s._v(" "),a("h2",{attrs:{id:"lsof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lsof"}},[s._v("#")]),s._v(" lsof")]),s._v(" "),a("p",[s._v("lsof(list open files)是一个列出当前系统打开文件的工具。")]),s._v(" "),a("h3",{attrs:{id:"常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),a("ul",[a("li",[s._v("查看端口占用：")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("lsof")]),s._v(" -i:端口号\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("查看端口占用PID：")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("lsof")]),s._v(" -i:端口号 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"netstat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#netstat"}},[s._v("#")]),s._v(" netstat")]),s._v(" "),a("p",[s._v("netstat -tunlp 用于显示 tcp，udp 的端口和进程等相关情况。")]),s._v(" "),a("p",[s._v("netstat 查看端口占用语法格式：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-tunlp")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" 端口号\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("-t (tcp) 仅显示tcp相关选项")]),s._v(" "),a("li",[s._v("-u (udp)仅显示udp相关选项")]),s._v(" "),a("li",[s._v("-n 拒绝显示别名，能显示数字的全部转化为数字")]),s._v(" "),a("li",[s._v("-l 仅列出在Listen(监听)的服务状态")]),s._v(" "),a("li",[s._v("-p 显示建立相关链接的程序名")])]),s._v(" "),a("p",[s._v("更多命令：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ntlp")]),s._v("   //查看当前所有tcp端口\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ntulp")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("   //查看所有80端口使用情况\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ntulp")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("   //查看所有3306端口使用情况\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-anp")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v("    // 查看进程占用的端口\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"ps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ps"}},[s._v("#")]),s._v(" ps")]),s._v(" "),a("p",[s._v("Linux ps （英文全拼：process status）命令用于显示当前进程的状态，类似于 windows 的任务管理器。")]),s._v(" "),a("p",[s._v("语法")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("--help"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("ps 的参数非常多, 在此仅列出几个常用的参数并大略介绍含义")]),s._v(" "),a("ul",[a("li",[s._v("-A 列出所有的进程")]),s._v(" "),a("li",[s._v("-w 显示加宽可以显示较多的资讯")]),s._v(" "),a("li",[s._v("-au 显示较详细的资讯")]),s._v(" "),a("li",[s._v("-aux 显示所有包含其他使用者的行程")]),s._v(" "),a("li",[s._v("au(x) 输出格式")])]),s._v(" "),a("p",[s._v("查找指定进程格式：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-aux")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" 进程关键字"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("可以是端口号"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"kill"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kill"}},[s._v("#")]),s._v(" kill")]),s._v(" "),a("p",[s._v("在查到端口占用的进程后，如果你要杀掉对应的进程可以使用 kill 命令：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-9")]),s._v(" PID\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("杀死占用某端口的所有进程")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-9")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("lsof")]),s._v(" -i:端口号 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h1",{attrs:{id:"windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[s._v("#")]),s._v(" windows")]),s._v(" "),a("h2",{attrs:{id:"查找所有运行的端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查找所有运行的端口"}},[s._v("#")]),s._v(" 查找所有运行的端口")]),s._v(" "),a("p",[s._v("输入命令：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ano")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"查看被占用端口对应的-pid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看被占用端口对应的-pid"}},[s._v("#")]),s._v(" 查看被占用端口对应的 PID")]),s._v(" "),a("p",[s._v("输入命令：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -aon"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("findstr "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8081"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"查看指定-pid-的进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看指定-pid-的进程"}},[s._v("#")]),s._v(" 查看指定 PID 的进程")]),s._v(" "),a("p",[s._v("继续输入命令：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("tasklist"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("findstr "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"9088"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"结束进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结束进程"}},[s._v("#")]),s._v(" 结束进程")]),s._v(" "),a("p",[s._v("强制（/F参数）杀死 pid 为 9088 的所有进程包括子进程（/T参数）：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("taskkill /T /F /PID "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9088")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);