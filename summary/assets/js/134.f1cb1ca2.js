(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{186:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"引言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引言","aria-hidden":"true"}},[t._v("#")]),t._v(" 引言")]),t._v(" "),a("p",[a("code",[t._v("html-webpack-plugin")]),t._v("是webpack的一个插件,目前用到改插件的两个作用:")]),t._v(" "),a("ul",[a("li",[t._v("为html文件中引入的外部资源文件"),a("code",[t._v("script")]),t._v(", "),a("code",[t._v("link")]),t._v("动态添加compile后的hash,放在引用缓存的外部文件问题")]),t._v(" "),a("li",[t._v("可以生成创建html入口文件,比如单页面可以生成一个html入口,配置N个"),a("code",[t._v("html-webpack-plugin")]),t._v("可以生成N个页面入口(及生成多页面);")])]),t._v(" "),a("h2",{attrs:{id:"原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理","aria-hidden":"true"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),a("p",[t._v("将webpack中的"),a("code",[t._v("entry")]),t._v("配置相关入口thunk和"),a("code",[t._v("extract-text-webpack-plugin")]),t._v("抽取css样式插入到该插件提供的 "),a("code",[t._v("template")]),t._v("或者"),a("code",[t._v("templateContent")]),t._v("配置项指定的内容基础上生成一个html文件,具体插入方式是将"),a("code",[t._v("link")]),t._v("插入到"),a("code",[t._v("head")]),t._v("元素中,"),a("code",[t._v("script")]),t._v("插入到"),a("code",[t._v("head")]),t._v("或者"),a("code",[t._v("body")]),t._v("中")]),t._v(" "),a("p",[t._v("初始化改插件时可以不配置任何参数:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" HtmlWebpackPlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'html-webpack-plugin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \nwebpackconfig "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HtmlWebpackPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("不配置任何选项的 "),a("code",[t._v("html-webpack-plugin")]),t._v("插件,他会将webpack中"),a("code",[t._v("entry")]),t._v("配置所有入口"),a("code",[t._v("thunk")]),t._v("和"),a("code",[t._v("extract-text-webpack-plugin")]),t._v("抽取的css样式都插入到文件指定的位置,例如上面生成的html文件内容如下:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DOCTYPE")]),t._v(" html"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("html"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("head"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("meta charset"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UTF-8"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Webpack App"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("link href"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index-af150e90583a89775c77.css"')]),t._v(" rel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"stylesheet"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("head"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text/javascript"')]),t._v(" src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"common-26a14e7d42a7c7bbc4c2.js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text/javascript"')]),t._v(" src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index-af150e90583a89775c77.js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("html"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h3",{attrs:{id:"html-webpack-plugin配置项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html-webpack-plugin配置项","aria-hidden":"true"}},[t._v("#")]),t._v(" html-webpack-plugin配置项")]),t._v(" "),a("p",[t._v("插件提供的配置项比较多,通过源码可以看出具体的配置项如下:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("options "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("extend")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    template"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'default_index.ejs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'index.html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    hash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    inject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    compile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    favicon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    minify"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    cache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    showErrors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    chunks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'all'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    excludeChunks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Webpack App'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    xhtml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("ul",[a("li",[t._v("title: 生成的html文档的标题.配置该项，它并不会替换指定模板文件中的title元素的内容，除非html模板文件中使用了模板引擎语法来获取该配置项值，如下ejs模板语法形式：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<title>{%= o.htmlWebpackPlugin.options.title %}</title>\n")])])]),a("ul",[a("li",[a("p",[t._v("filename: 输出文件的文件名称,默认为index.html,不配置就是该文件;此外,还可以为输出文件指定目录位置(例如'html/index.html')\n关于filename补充两点:\n1.filename配置的html文件目录是相对于webpackConfig.output.path路径而言的，不是相对于当前项目目录结构的。\n2.指定生成的html文件内容中的link和script路径是相对于生成目录下的，写路径的时候请写生成目录下的相对路径。")])]),t._v(" "),a("li",[a("p",[t._v("template: 本地模板文件的位置，支持加载器(如handlebars、ejs、undersore、html等)，如比如 handlebars!src/index.hbs；\n关于template补充几点：\n1、template配置项在html文件使用file-loader时，其所指定的位置找不到，导致生成的html文件内容不是期望的内容。\n2、为template指定的模板文件没有指定任何loader的话，默认使用ejs-loader。如template: './index.html'，若没有为.html指定任何loader就使用ejs-loader")])]),t._v(" "),a("li",[a("p",[t._v("templateContent: string|function，可以指定模板的内容，不能与template共存。配置值为function时，可以直接返回html字符串，也可以异步调用返回html字符串。")])]),t._v(" "),a("li",[a("p",[t._v("inject：向template或者templateContent中注入所有静态资源，不同的配置值注入的位置不经相同。\n1、true或者body：所有JavaScript资源插入到body元素的底部\n2、head: 所有JavaScript资源插入到head元素中\n3、false： 所有静态资源css和JavaScript都不会注入到模板文件中")])]),t._v(" "),a("li",[a("p",[t._v("favicon: 添加特定favicon路径到输出的html文档中，这个同title配置项，需要在模板中动态获取其路径值")])]),t._v(" "),a("li",[a("p",[t._v("hash：true|false，是否为所有注入的静态资源添加webpack每次编译产生的唯一hash值，添加hash形式如下所示：")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("html "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text/javascript"')]),t._v(" src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"common.js?a3e1396b501cdd9041be"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("ul",[a("li",[a("p",[t._v("chunks：允许插入到模板中的一些chunk，不配置此项默认会将entry中所有的thunk注入到模板中。在配置多个页面时，每个页面注入的thunk应该是不相同的，需要通过该配置为不同页面注入不同的chunk；如果要设置改值，则必须设置全，比如产生了 3个chunk,你只配置了两个chunk,那么 index.html中只引入两个，加入你配置了4个，但是即使生成只有3个，那么index.html中只引入3个。所以配置该项的时候一定要考虑全面。")])]),t._v(" "),a("li",[a("p",[t._v("excludeChunks: 这个与chunks配置项正好相反，用来配置不允许注入的thunk。")])]),t._v(" "),a("li",[a("p",[t._v("chunksSortMode: none | auto| function，默认auto； 允许指定的thunk在插入到html文档前进行排序。")])])]),t._v(" "),a("blockquote",[a("p",[t._v("function值可以指定具体排序规则；auto基于thunk的id进行排序； none就是不排序")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("xhtml: true|fasle, 默认false；是否渲染link为自闭合的标签，true则为自闭合标签")])]),t._v(" "),a("li",[a("p",[t._v("cache: true|fasle, 默认true； 如果为true表示在对应的thunk文件修改后就会emit文件")])]),t._v(" "),a("li",[a("p",[t._v("showErrors: true|false，默认true；是否将错误信息输出到html页面中。这个很有用，在生成html文件的过程中有错误信息，输出到页面就能看到错误相关信息便于调试。")])]),t._v(" "),a("li",[a("p",[t._v("minify: {....}|false；传递 html-minifier 选项给 minify 输出，false就是不使用html压缩。")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HtmlWebpackPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rd平台'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    template"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'entries/index.html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 源模板文件")]),t._v("\n    filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./index.html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出文件【注意：这里的根路径是module.exports.output.path】")]),t._v("\n    showErrors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    inject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'body'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    chunks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"common"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'index'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);