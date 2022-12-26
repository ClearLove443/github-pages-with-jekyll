(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{471:function(a,t,e){"use strict";e.r(t);var s=e(2),n=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"refresh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#refresh"}},[a._v("#")]),a._v(" refresh")]),a._v(" "),t("p",[a._v("对于通过hive加载，插入，改变的数据操作，或者通过hdfs对数据进行改变的操作，impala都无法自动识别数据的变化，可以使用"),t("code",[a._v("refresh table_name")]),a._v("，该语句可以让impala识别到数据的变化，可以对某张表更新元数据，也可以对某张表的某分区更新元数据。")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("refresh "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("table"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("                           -- 刷新表table的元数据\nrefresh "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("table"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" partition "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("partition"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("     -- 刷新表table的partition分区元数据\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("h2",{attrs:{id:"invalidate-metadata"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#invalidate-metadata"}},[a._v("#")]),a._v(" invalidate metadata")]),a._v(" "),t("p",[a._v("对于通过Hive创建，删除或者修改表等操作，Impala无法自动感知到Hive元数据的变化，想让Impala识别到这个变化需要在impala shell中输入"),t("code",[a._v("invalidate metadata")]),a._v("，该语句会使得impala原元数据失效并且重新从元数据库同步元数据信息。可以对所有表执行，也可以指定某张表")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("invalidate metadata"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("           -- tongbu所有表的元数据\ninvalidate metadata "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("table"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("   -- 废除表table的元数据\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("h2",{attrs:{id:"更新元数据的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新元数据的使用"}},[a._v("#")]),a._v(" 更新元数据的使用")]),a._v(" "),t("ul",[t("li",[a._v("invalidate metadata 会加载相关表的所有元数据信息，这个操作对于有很多分区的大表成本非常高，refresh加载元数据更快，因为它只要加载新增的数据文件块的位置数据")]),a._v(" "),t("li",[a._v("如果数仓中发生了增删表或改变表结构的行为，如create table、drop table、alter table add column等，就使用invalidate metadata [table]语句。")]),a._v(" "),t("li",[a._v("如果数仓中某表加入了新数据，或者有分区的改动，如load data、alter table add partition等，就使用refresh [table] (partition [partition])语句。")]),a._v(" "),t("li",[a._v("invalidate metadata比起refresh而言要重量级得多，并且它造成impalad之间查询不一致也会更严重。因此，也几乎禁止使用 不带表名的invalidate metadata语句。")]),a._v(" "),t("li",[a._v("如果数仓中涉及到非常大批量的元数据更改，那么建议直接重启catalogd和statestored，这总比使用不带表名的invalidate metadata来得高效一些。")])])])}),[],!1,null,null,null);t.default=n.exports}}]);