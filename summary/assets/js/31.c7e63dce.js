(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{210:function(t,a,r){"use strict";r.r(a);var e=r(0),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"array-prototype-map"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#array-prototype-map","aria-hidden":"true"}},[t._v("#")]),t._v(" Array.prototype.map()")]),t._v(" "),r("p",[r("strong",[t._v("参数是")])]),t._v(" "),r("ul",[r("li",[t._v("callback\n"),r("ul",[r("li",[t._v("currentValue 当前元素")]),t._v(" "),r("li",[t._v("index 当前元素的索引")]),t._v(" "),r("li",[t._v("array, 调用map方法的数组")])])]),t._v(" "),r("li",[t._v("thisArg:(可选) 执行callback函数时使用的this值")])]),t._v(" "),r("p",[r("strong",[t._v("返回值")]),t._v("\n一个新数组，每个元素都是回调函数的结果")]),t._v(" "),r("p",[t._v("不修改原数组本身")]),t._v(" "),r("h3",{attrs:{id:"补充"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#补充","aria-hidden":"true"}},[t._v("#")]),t._v(" 补充")]),t._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("parseInt"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [1, NaN, NaN]")]),t._v("\n")])])]),r("p",[t._v("Function.length,\nlength属性指明， 函数有多少个必须要传的参数，即函数的形参个数。形参的数量不包括剩余参数个数，仅包括第一个具有默认值之前的参数个数\narguments.length 是函数被调用时实际传参的个数。")]),t._v(" "),r("p",[t._v("Function.name， name属性返回一个函数声明的名称。")]),t._v(" "),r("p",[t._v("map在调用callback（此时指的是parseInt）时传入三个参数，\nparseInt第三个参数会被忽视，但是第二个参数不会，也就是说，parseInt 把传过来的索引值当做进制数来使用，从而返回了NaN；")]),t._v(" "),r("p",[t._v("parseInt(string, radix)   将一个字符串 string 转换为 radix 进制的整数， radix 为介于2-36之间的数。parseInt.length为2，\nradix参数：")]),t._v(" "),r("ul",[r("li",[t._v("可选。表示要解析的数字的基数。该值介于 2 ~ 36 之间。")]),t._v(" "),r("li",[t._v("如果省略该参数或其值为 0，则数字将以 10 为基础来解析。如果它以 “0x” 或 “0X” 开头，将以 16 为基数。")]),t._v(" "),r("li",[t._v("如果该参数小于 2 或者大于 36，则 parseInt() 将返回 NaN。")])]),t._v(" "),r("p",[t._v("Object()构建函数，为定值创建一个包装器。如果给定值是null，或 undefined， 将会创建并返回一个空对象，将返回一个与给定值对应类型的对象。\n当以非构造函数形式被调用时，Object 等同于 new Object()。")]),t._v(" "),r("h2",{attrs:{id:"array-prototype-foreach"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#array-prototype-foreach","aria-hidden":"true"}},[t._v("#")]),t._v(" Array.prototype.forEach()")]),t._v(" "),r("p",[t._v("参数同 map")]),t._v(" "),r("p",[t._v("返回值：\nundefined")]),t._v(" "),r("h2",{attrs:{id:"array-prototype-filter"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#array-prototype-filter","aria-hidden":"true"}},[t._v("#")]),t._v(" Array.prototype.filter()")]),t._v(" "),r("p",[t._v("参数同 map")]),t._v(" "),r("p",[t._v("返回值：\n一个新数组，通过测试的元素组成的数组，如果没有任何数组元素通过测试，则返回空数组。\n不会改变原数组")]),t._v(" "),r("h2",{attrs:{id:"array-prototype-reduce"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#array-prototype-reduce","aria-hidden":"true"}},[t._v("#")]),t._v(" Array.prototype.reduce()")]),t._v(" "),r("p",[t._v("参数：")]),t._v(" "),r("ul",[r("li",[t._v("callback\n"),r("ul",[r("li",[t._v("accumulator 累计器")]),t._v(" "),r("li",[t._v("currentValue 当前值")]),t._v(" "),r("li",[t._v("currentIndex 当前索引")]),t._v(" "),r("li",[t._v("array 数组")])])]),t._v(" "),r("li",[t._v("initialValue")])]),t._v(" "),r("p",[t._v("回调函数第一次执行时，accumulator和currentValue有两种情况")]),t._v(" "),r("ul",[r("li",[r("ol",[r("li",[t._v("如果提供了initialValue， accumulator为initialValue， currentValue取数组的第一个值")])])]),t._v(" "),r("li",[r("ol",{attrs:{start:"2"}},[r("li",[t._v("如果没有提供initialValue， accumulator取数组的第一个值，currentValue取数组的第二个值")])])])]),t._v(" "),r("p",[t._v("返回值\n函数累计处理的结果;")]),t._v(" "),r("h3",{attrs:{id:"举例"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#举例","aria-hidden":"true"}},[t._v("#")]),t._v(" 举例")]),t._v(" "),r("ol",[r("li",[t._v("数组里面所有值得和")]),t._v(" "),r("li",[t._v("累加对象数组里的值")]),t._v(" "),r("li",[t._v("将二维数组转为一维")]),t._v(" "),r("li",[t._v("计算数组中每个值出现的次数")]),t._v(" "),r("li",[t._v("按属性对Object分类")]),t._v(" "),r("li",[t._v("使用拓展运算符和initialValue绑定包含在对象数组中的数组")]),t._v(" "),r("li",[t._v("数组去重")])]),t._v(" "),r("blockquote",[r("p",[t._v("箭头函数的用法")])]),t._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("f")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("v")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" v"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 等同于")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("f")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("v")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" v"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),r("ol",[r("li",[t._v("没有参数或需要多个参数，就用一个圆括号代表参数部分")]),t._v(" "),r("li",[t._v("代码块部分多于一条语句，就要使用大括号将他们括起来，并且使用return 语句返回")]),t._v(" "),r("li",[t._v("如果返回一个对象，就需要使用一个圆括号把对象括起来，不然会报错，因为引擎认为大括号是代码块")])]),t._v(" "),r("h2",{attrs:{id:"object构建函数的方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#object构建函数的方法","aria-hidden":"true"}},[t._v("#")]),t._v(" Object构建函数的方法")]),t._v(" "),r("h2",{attrs:{id:"function-prototype-call"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#function-prototype-call","aria-hidden":"true"}},[t._v("#")]),t._v(" Function.prototype.call()")]),t._v(" "),r("h2",{attrs:{id:"function-prototype-bind"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#function-prototype-bind","aria-hidden":"true"}},[t._v("#")]),t._v(" Function.prototype.bind()")]),t._v(" "),r("h2",{attrs:{id:"function。prototype-apply"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#function。prototype-apply","aria-hidden":"true"}},[t._v("#")]),t._v(" Function。prototype.apply()")])])}),[],!1,null,null,null);a.default=n.exports}}]);