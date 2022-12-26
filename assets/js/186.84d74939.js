(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{584:function(t,e,n){"use strict";n.r(e);var s=n(2),a=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("但是当我们使用IDEA写代码的时候，经常会发现@Autowired注解下面是有小黄线的，我们把小鼠标悬停在上面，可以看到这个如下图所示的警告信息：\n"),e("code",[t._v("Field injection is not recommended")]),t._v("\n那么为什么IDEA会给出Field injection is not recommended这样的警告呢？")]),t._v(" "),e("h2",{attrs:{id:"spring中的三种依赖注入方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spring中的三种依赖注入方式"}},[t._v("#")]),t._v(" Spring中的三种依赖注入方式")]),t._v(" "),e("h3",{attrs:{id:"constructor-injection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#constructor-injection"}},[t._v("#")]),t._v(" Constructor Injection")]),t._v(" "),e("p",[t._v("在 Spring4.3.x 中增加了新的特性：如果类只提供了一个带参数的构造方法，则不需要对对其内部的属性写 @Autowired 注解，Spring 会自动为你注入属性。")]),t._v(" "),e("p",[e("code",[t._v("Constructor Injection")]),t._v("是构造器注入，是我们日常最为推荐的一种使用方式。")]),t._v(" "),e("blockquote",[e("p",[t._v("官方推荐理由\n单一职责: 当使用构造函数注入的时候，你会很容易发现参数是否过多，这个时候需要考虑你这个类的职责是否过大，考虑拆分的问题；而当使用@Autowired注入field的时候，不容易发现问题\n依赖不可变: 只有使用构造函数注入才能注入final\n依赖隐藏:使用依赖注入容器意味着类不再对依赖对象负责，获取依赖对象的职责就从类抽离出来，IOC容器会帮你自动装备。这意味着它应该使用更明确清晰的公用接口方法或者构造器，这种方式就能很清晰的知道类需要什么和到底是使用setter还是构造器\n降低容器耦合度: 依赖注入框架的核心思想之一是托管类不应依赖于所使用的DI容器。换句话说，它应该只是一个普通的POJO，只要您将其传递给所有必需的依赖项，就可以独立地实例化。这样，您可以在单元测试中实例化它，而无需启动IOC容器并单独进行测试（使用一个可以进行集成测试的容器）。如果没有容器耦合，则可以将该类用作托管或非托管类，甚至可以切换到新的DI框架。\n使用构造器的使用能避免注入的依赖是空的情况。 因为在bean的生命周期里面先执行的是bean的构造器，然后才给bean里面的属性赋值。")])]),t._v(" "),e("p",[t._v("具体形式如下：")]),t._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Controller")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserController")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserService")]),t._v(" userService"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @Autowired(可省略)")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserController")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserService")]),t._v(" userService"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userService "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" userService"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br")])]),e("p",[t._v("这种注入方式很直接，通过对象构建的时候建立关系，所以这种方式对对象创建的顺序会有要求，当然Spring会为你搞定这样的先后顺序，除非你出现循环依赖，然后就会抛出异常。")]),t._v(" "),e("h3",{attrs:{id:"field-injection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#field-injection"}},[t._v("#")]),t._v(" Field Injection")]),t._v(" "),e("p",[e("code",[t._v("@Autowired")]),t._v("注解的一大使用场景就是"),e("code",[t._v("Field Injection")]),t._v("\n具体形式如下：")]),t._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Controller")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserController")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Autowired")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserService")]),t._v(" userService"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])]),e("p",[t._v("这种注入方式通过Java的反射机制实现，所以private的成员也可以被注入具体的对象。")]),t._v(" "),e("h3",{attrs:{id:"setter-injection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setter-injection"}},[t._v("#")]),t._v(" Setter Injection")]),t._v(" "),e("p",[e("code",[t._v("Setter Injection")]),t._v("也会用到"),e("code",[t._v("@Autowired")]),t._v("注解，但使用方式与"),e("code",[t._v("Field Injection")]),t._v("有所不同，"),e("code",[t._v("Field Injection")]),t._v("是用在成员变量上，而"),e("code",[t._v("Setter Injection")]),t._v("的时候，是用在成员变量的Setter函数上。\n具体形式如下：")]),t._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Controller")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserController")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserService")]),t._v(" userService"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Autowired")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setUserService")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserService")]),t._v(" userService"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userService "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" userService"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br")])]),e("p",[t._v("这种注入方式也很好理解，就是通过调用成员变量的set方法来注入想要使用的依赖对象。")]),t._v(" "),e("h3",{attrs:{id:"三种依赖注入的对比"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三种依赖注入的对比"}},[t._v("#")]),t._v(" 三种依赖注入的对比")]),t._v(" "),e("p",[t._v("在知道了Spring提供的三种依赖注入方式之后，我们继续回到本文开头说到的问题：IDEA为什么不推荐使用Field Injection呢？\n我们可以从多个开发测试的考察角度来对比一下它们之间的优劣：")]),t._v(" "),e("h4",{attrs:{id:"可靠性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#可靠性"}},[t._v("#")]),t._v(" 可靠性")]),t._v(" "),e("p",[t._v("从对象构建过程和使用过程，看对象在各阶段的使用是否可靠来评判：")]),t._v(" "),e("ul",[e("li",[t._v("Field Injection：不可靠")]),t._v(" "),e("li",[t._v("Constructor Injection：可靠")]),t._v(" "),e("li",[t._v("Setter Injection：不可靠")])]),t._v(" "),e("p",[t._v("由于构造函数有严格的构建顺序和不可变性，一旦构建就可用，且不会被更改。")]),t._v(" "),e("h4",{attrs:{id:"可维护性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#可维护性"}},[t._v("#")]),t._v(" 可维护性")]),t._v(" "),e("p",[t._v("主要从更容易阅读、分析依赖关系的角度来评判：")]),t._v(" "),e("ul",[e("li",[t._v("Field Injection：差")]),t._v(" "),e("li",[t._v("Constructor Injection：好")]),t._v(" "),e("li",[t._v("Setter Injection：差")])]),t._v(" "),e("p",[t._v("还是由于依赖关键的明确，从构造函数中可以显现的分析出依赖关系，对于我们如何去读懂关系和维护关系更友好。")]),t._v(" "),e("h4",{attrs:{id:"可测试性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#可测试性"}},[t._v("#")]),t._v(" 可测试性")]),t._v(" "),e("p",[t._v("当在复杂依赖关系的情况下，考察程序是否更容易编写单元测试来评判")]),t._v(" "),e("ul",[e("li",[t._v("Field Injection：差")]),t._v(" "),e("li",[t._v("Constructor Injection：好")]),t._v(" "),e("li",[t._v("Setter Injection：好")])]),t._v(" "),e("p",[e("code",[t._v("Constructor Injection")]),t._v("和"),e("code",[t._v("Setter Injection")]),t._v("的方式更容易Mock和注入对象，所以更容易实现单元测试。")]),t._v(" "),e("h4",{attrs:{id:"灵活性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#灵活性"}},[t._v("#")]),t._v(" 灵活性")]),t._v(" "),e("p",[t._v("主要根据开发实现时候的编码灵活性来判断：")]),t._v(" "),e("ul",[e("li",[t._v("Field Injection：很灵活")]),t._v(" "),e("li",[t._v("Constructor Injection：不灵活")]),t._v(" "),e("li",[t._v("Setter Injection：很灵活")])]),t._v(" "),e("p",[t._v("由于"),e("code",[t._v("Constructor Injection")]),t._v("对Bean的依赖关系设计有严格的顺序要求，所以这种注入方式不太灵活。相反"),e("code",[t._v("Field Injection")]),t._v("和"),e("code",[t._v("Setter Injection")]),t._v("就非常灵活，但也因为灵活带来了局面的混乱，也是一把双刃剑。")]),t._v(" "),e("h4",{attrs:{id:"循环关系的检测"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#循环关系的检测"}},[t._v("#")]),t._v(" 循环关系的检测")]),t._v(" "),e("p",[t._v("对于Bean之间是否存在循环依赖关系的检测能力：")]),t._v(" "),e("ul",[e("li",[t._v("Field Injection：不检测")]),t._v(" "),e("li",[t._v("Constructor Injection：自动检测")]),t._v(" "),e("li",[t._v("Setter Injection：不检测")])]),t._v(" "),e("h4",{attrs:{id:"性能表现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#性能表现"}},[t._v("#")]),t._v(" 性能表现")]),t._v(" "),e("p",[t._v("不同的注入方式，对性能的影响")]),t._v(" "),e("ul",[e("li",[t._v("Field Injection：启动快")]),t._v(" "),e("li",[t._v("Constructor Injection：启动慢")]),t._v(" "),e("li",[t._v("Setter Injection：启动快")])]),t._v(" "),e("p",[t._v("主要影响就是启动时间，由于Constructor Injection有严格的顺序要求，所以会拉长启动时间。")]),t._v(" "),e("h4",{attrs:{id:"所以-综合上面各方面的比较-可以获得如下表格"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#所以-综合上面各方面的比较-可以获得如下表格"}},[t._v("#")]),t._v(" 所以，综合上面各方面的比较，可以获得如下表格：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("注入方式")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("可靠性")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("可维护性")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("可测试性")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("灵活性")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("循环关系的检测")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("性能影响")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Field Injection")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("不可靠")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("低")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("差")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("很灵活")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("不检测")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("启动快")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Constructor Injection")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("可靠")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("高")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("好")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("不灵活")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("自动检测")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("启动慢")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Setter Injection")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("不可靠")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("低")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("好")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("很灵活")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("不检测")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("启动慢")])])])]),t._v(" "),e("p",[t._v("结果一目了然，"),e("code",[t._v("Constructor Injection")]),t._v("在很多方面都是优于其他两种方式的，所以"),e("code",[t._v("Constructor Injection")]),t._v("通常都是首选方案！\n而"),e("code",[t._v("Setter Injection")]),t._v("比起"),e("code",[t._v("Field Injection")]),t._v("来说，大部分都一样，但因为可测试性更好，所以当你要用"),e("code",[t._v("@Autowired")]),t._v("的时候，推荐使用"),e("code",[t._v("Setter Injection")]),t._v("的方式，这样IDEA也不会给出警告了。同时，也侧面也反映了，可测试性的重要地位啊！")]),t._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),e("p",[t._v("最后，对于今天的问题讨论，我们给出两个结论，方便大家记忆：")]),t._v(" "),e("ol",[e("li",[t._v("依赖注入的使用上，"),e("code",[t._v("Constructor Injection")]),t._v("是首选。")]),t._v(" "),e("li",[t._v("使用"),e("code",[t._v("@Autowired")]),t._v("注解的时候，要使用"),e("code",[t._v("Setter Injection")]),t._v("方式，这样代码更容易编写单元测试。")])])])}),[],!1,null,null,null);e.default=a.exports}}]);