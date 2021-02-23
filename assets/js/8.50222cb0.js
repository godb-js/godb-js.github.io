(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{375:function(t,a,e){"use strict";e.r(a);var s=e(42),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"schema"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#schema"}},[t._v("#")]),t._v(" Schema")]),t._v(" "),e("div",{staticClass:"lake-content-editor-core lake-engine lake-typography-classic",attrs:{"data-lake-element":"root","data-selection-2310303":"%7B%22path%22%3A%5B%5B26%2C0%2C79%5D%2C%5B26%2C0%2C79%5D%5D%2C%22uuid%22%3A%222310303%22%2C%22active%22%3Atrue%7D"}},[e("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"1.74","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"},attrs:{"data-lake-id":"f189fc2017c012ce7a674f52758749f7"}},[t._v("如果你希望数据库的结构更严格一点，也可以添加 "),e("code",[t._v("schema")])]),e("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"1.74","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"},attrs:{"data-lake-id":"bcb412b1bf1ab18ad633257c1e729e3d"}},[e("br")]),e("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"1.74","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"},attrs:{"data-lake-id":"90dd3d1356a82a48fde881bd12f56622"}},[e("code",[t._v("GoDB")]),t._v(" 会根据 "),e("code",[t._v("schema")]),t._v(" 建立 "),e("code",[t._v("IndexedDB")]),t._v(" 数据表，并给相应字段建立索引")]),e("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"1.74","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"},attrs:{"data-lake-id":"65419966adcb218f53e9606742458a7a"}},[e("br")]),e("div",{attrs:{"data-card-type":"block","data-lake-card":"codeblock",id:"40f66286","data-language":"javascript"}},[e("div",{},[e("div",{},[e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" GoDB "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'godb'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义数据库结构")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" schema "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// user 表：")]),t._v("\n   user"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// user 表的字段：")]),t._v("\n       name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n           type"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n           unique"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定 name 字段在表里唯一")]),t._v("\n       "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       age"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Number\n   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" testDB "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GoDB")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'testDB'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("")]),t._v(" schema "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" user "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" testDB"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("table")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'user'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" data "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'luke'")]),t._v("\n   age"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nuser"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 没问题")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(""),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("")]),t._v(" user"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'luke'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义schema后，就可以用id以外的字段获取数据")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("luke "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(""),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("")]),t._v(" user"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("luke"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 报错，name 重复了 ")]),t._v("\n")])])])])])]),e("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"1.74","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"},attrs:{"data-lake-id":"abce3d3b275a6236febed845e8e05273"}},[e("br")]),e("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"1.74","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"},attrs:{"data-lake-id":"b3576b621f2869878de539eba0db7c1f"}},[t._v("如上面的例子，指定了 "),e("code",[t._v("schema")]),t._v(" 后")]),e("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"1.74","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"},attrs:{"data-lake-id":"9afc8c18e7d4c70c170197b161ca9a76"}},[e("br")]),e("ul",{staticStyle:{"list-style-type":"disc",margin:"0px","padding-left":"23px","font-size":"14px",color:"rgb(38, 38, 38)","line-height":"1.74","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word"},attrs:{"data-lake-id":"fb7c2906390a0f47a653b10fd176f81f","lake-indent":"0"}},[e("li",{attrs:{"data-lake-id":"bc6e4eada937e8aa2c934d997eade7d4"}},[t._v("定义了 schema，因此 "),e("code",[t._v("get()")]),t._v(" 和 "),e("code",[t._v("delete()")]),t._v(" 中可以使用 "),e("code",[t._v("id")]),t._v(" 以外的字段搜索了，否则只能传入 "),e("code",[t._v("id")])]),e("li",{attrs:{"data-lake-id":"0a34506993a1bc4335c6ea824850442d"}},[t._v("指定了 "),e("code",[t._v("user.name")]),t._v(" 这一项是唯一的，因此无法添加重复的 "),e("code",[t._v("name")])])]),e("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"1.74","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"},attrs:{"data-lake-id":"e3147262705ed8c93b94c5dd3249e41d"}},[e("br")]),e("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"1.74","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"},attrs:{"data-lake-id":"9c0e7ebc3c6f4b796221849caf51d1c1"}},[t._v("当然，你也可以在 "),e("code",[t._v("table")]),t._v(" 那定义 "),e("code",[t._v("schema")]),t._v("：")]),e("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"1.74","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"},attrs:{"data-lake-id":"6233ee9e5f4ce38990c20262db9c2e47"}},[e("br")]),e("div",{attrs:{"data-card-type":"block","data-lake-card":"codeblock",id:"a0ea562c","data-language":"javascript"}},[e("div",{},[e("div",{},[e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" testDB "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GoDB")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'testDB'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" user "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" testDB"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("table")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'user'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       type"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       unique"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   age"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Number\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])])])])])]),e("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"1.74","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"},attrs:{"data-lake-id":"4745e739e606df02fae2c7818a324fb5"}},[e("br")]),e("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"1.74","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"},attrs:{"data-lake-id":"f15bbab1f9b388e9ac9cda6b895f58d5"}},[t._v("但这种方式的缺点是，如果定义 "),e("code",[t._v("table")]),t._v(" 发生在连接数据库之后，"),e("code",[t._v("GoDB")]),t._v(" 会先发起一个 "),e("code",[t._v("IDBVersionChange")]),t._v(" 的事件，导致 "),e("code",[t._v("IndexedDB")]),t._v(" 数据库版本升级，此时如果有别的 CRUD 操作正在进行，可能会导致建立 "),e("code",[t._v("table")]),t._v(" 失败")]),e("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"1.74","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"},attrs:{"data-lake-id":"ac2ab830993796650614d2dffe72878d"}},[e("br")]),e("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"1.74","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"},attrs:{"data-lake-id":"076c96199c7f3af6203593573f4d6594"}},[t._v("要避免这个问题倒是很简单，把所有获取 "),e("code",[t._v("table")]),t._v(" 的操作紧接在 "),e("code",[t._v("new GoDB()")]),t._v(" 之后（保证连接数据库，和连接数据表，是同步而非异步执行的）就可以，这样可以确保所有 "),e("code",[t._v("table")]),t._v(" 都在连接完成之前获取到（JS 的事件循环特性）"),e("strong",[e("br")])]),e("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"1.74","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"},attrs:{"data-lake-id":"a29d022e4b7edc069c8ff7f7b6081334"}},[e("br")]),e("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"1.74","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"},attrs:{"data-lake-id":"b30c66af6d69e1bd9de53eb5addd227a"}},[e("strong",[t._v("关于 schema 的设计")])]),e("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"1.74","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"},attrs:{"data-lake-id":"5300777c724af3adce5dba3a03d210e7"}},[e("br")]),e("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"1.74","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"},attrs:{"data-lake-id":"52f958fe0f786d76519f8fc247a1fb64"}},[t._v("部分同学或许会发现，上面定义 "),e("code",[t._v("schema")]),t._v(" 的方式有点眼熟，没错，正是参考了 "),e("code",[t._v("mongoose")])]),e("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"1.74","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"},attrs:{"data-lake-id":"5ec651aa6b5b963eb1eed5476cf12574"}},[e("br")]),e("ul",{staticStyle:{"list-style-type":"disc",margin:"0px","padding-left":"23px","font-size":"14px",color:"rgb(38, 38, 38)","line-height":"1.74","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word"},attrs:{"data-lake-id":"4846d9a91df4250c7914fa612c5935e2","lake-indent":"0"}},[e("li",{attrs:{"data-lake-id":"2a9fb9a212ab07009bbec56546e47f9f"}},[t._v("定义数据库的字段时，可以只指明数据类型，如上面的 "),e("code",[t._v("age: Number")])]),e("li",{attrs:{"data-lake-id":"26c6b44695247fa110f28976eb340c2a"}},[t._v("也可以使用一个对象，里面除了定义数据类型 "),e("code",[t._v("type")]),t._v("，也指明这个字段是不是唯一的（"),e("code",[t._v("unique: true")]),t._v("），之后会添加更多可选属性，如用来指定字段默认值的 "),e("code",[t._v("default")]),t._v("，和指向别的表的索引 "),e("code",[t._v("ref")])])]),e("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"1.74","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"},attrs:{"data-lake-id":"dbe0965167ebfbb91ff04a368344cae0"}},[e("br")]),e("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"1.74","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"},attrs:{"data-lake-id":"207af0efdd5a6b3ea491be92c2f70790"}},[t._v("不定义 Schema 时，"),e("code",[t._v("GoDB")]),t._v(" 使用起来就像 MongoDB 一样，可以灵活添加数据；区别是 Mongodb 中，每条数据的唯一标识符是 "),e("code",[t._v("_id")]),t._v("，而 "),e("code",[t._v("GoDB")]),t._v(" 是 "),e("code",[t._v("id")])]),e("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"1.74","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"},attrs:{"data-lake-id":"94260fb30820e971093e9b2bf60a9c2d"}},[e("br")]),e("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"1.74","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"},attrs:{"data-lake-id":"0fc7fdda7f2fb8c31162b5c774704a3c"}},[t._v("虽然这样做的问题是，IndexedDB 毕竟还是存在字段索引这个概念，用户使用不规范的话（如每次添加的数据结构都不一样），久而久之可能会使得数据库的字段比较杂，带来额外的使用成本")]),e("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"1.74","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"},attrs:{"data-lake-id":"97a373978dcbd8639c2b83d200906856"}},[e("br")]),e("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"1.74","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"},attrs:{"data-lake-id":"106d5ad7a299135663dd23e14e7580a4"}},[t._v("定义 Schema 后，"),e("code",[t._v("GoDB")]),t._v(" 使用起来就像 MySQL 这种关系型数据库一样，无法往数据表里添加不存在的字段（GoDB 不会阻止这次添加操作，但是会去掉未定义的字段后再添加，同时在浏览器报一个 warning）")]),e("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"1.74","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"},attrs:{"data-lake-id":"3a7dd6313b3ed1625dc59231e5063fa8"}},[e("br")]),e("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"1.74","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"},attrs:{"data-lake-id":"0ea8b6b67c9972fc743ffe5e1fbf8533"}},[t._v("因此推荐在项目中，首先定义好 "),e("code",[t._v("schema")]),t._v("，这样不管是维护性上，还是性能上，都要更胜一筹")]),e("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"1.74","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"},attrs:{"data-lake-id":"fed60293de6335a53afc3656459d92a3"}},[e("br")]),e("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"1.74","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"},attrs:{"data-lake-id":"358e5458205cd7f7ee052c214ac87692"}},[t._v("当然不使用 ​"),e("code",[t._v("​schema")]),t._v("​ 也是完全可行的，使用上也不会有任何问题，是否使用 ​​"),e("code",[t._v("​schema")]),t._v("​ 取决于开发者自己的取舍，如果你的应用不是很复杂，完全可以不用管 ​"),e("code",[t._v("​schema")]),t._v("​，这样使用起来更灵活")])])])}),[],!1,null,null,null);a.default=n.exports}}]);