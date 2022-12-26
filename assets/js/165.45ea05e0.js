(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{563:function(s,t,e){"use strict";e.r(t);var n=e(2),o=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("在 os.system 中连续执行多条语句的情况，语句如下")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("cmd1 = 'cd ' + filepath + i\ncmd2 = '.\\gradlew build'\n")])])]),t("p",[s._v("如果分为两次执行，即: os.system(cmd1) os.system(cmd2)，在执行第二条语句的时候会提示gradlew 不是内部命令，也就是没有进入到相应的路径。")]),s._v(" "),t("p",[s._v("os.system 的工作原理如下：\nExecute the command (a string) in a subshell. This is implemented by calling the Standard C function system(), and has the same limitations...")]),s._v(" "),t("p",[s._v("关于子进程的创建需要明确两点：父进程的环境变量 (environment variables) 会默认传递到子进程中(工作目录PWD就是环境变量之一)\n使用 system 函数，子进程无法影响父进程中的环境变量\n根据这两点，执行 os.system(path) 引发的工作目录变更作用范围仅限于第一个被创建的子进程，故而当前的工作目录没有变更，到执行 os.system(upd) 就会报错")]),s._v(" "),t("p",[s._v("要达到预期的效果，如果仍使用os.system，有两种方法。")]),s._v(" "),t("ul",[t("li",[s._v("确保工作目录的变更和svn都在子进程中进行，可以使用复合语句（如 os.system('cd path-to-repo && svn ci')）或多个语句（如os.system('cd path-to-repo; svn ci')）。")]),s._v(" "),t("li",[s._v("先在父进程中切换工作目录(os.chdir('path-to-repo'))，再利用1.中提到的原理，执行子进程即可(os.system('svn ci'))。")])])])}),[],!1,null,null,null);t.default=o.exports}}]);