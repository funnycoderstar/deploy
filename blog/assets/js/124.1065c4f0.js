(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{448:function(t,s,a){"use strict";a.r(s);var n=a(33),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"首页的性能优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#首页的性能优化"}},[t._v("#")]),t._v(" 首页的性能优化")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("- 加载的资源更少\n    - 按需加载，减少不必要的依赖； 非首屏资源懒加载，重要资源预加载（prefetch, preload）\n    - defer和async\n- 加载的更快：gzip，cdn， HTTP2（多路复用，头部压缩），缓存\n- 用户视觉欺骗: loading, 骨架屏\n")])])]),a("p",[t._v("preload: 预加载的方式，它通过声明向浏览器声明一个需要提交加载的资源,当资源真正被使用的时候立即执行，就无需等待网络的消耗\nprefetch: 预判加载，它的作用是告诉浏览器未来可能会使用到的某个资源，浏览器就会在闲时去加载对应的资源，若能预测到用户的行为\n计算白屏时间：")]),t._v(" "),a("p",[t._v("白屏时间 = 地址栏输入网址后回车 - 浏览器出现第一个元素  firstPaint - performance.timing.navigationStart\n首屏时间 = 地址栏输入网址后回车 - 浏览器第一屏渲染完成  performance.timing.responseStart - performance.timing.navigationStart")]),t._v(" "),a("p",[t._v("Performance.timing")]),t._v(" "),a("h2",{attrs:{id:"fp、fmp和fcp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fp、fmp和fcp"}},[t._v("#")]),t._v(" FP、FMP和FCP")]),t._v(" "),a("p",[t._v("传统的 DOMContentLoaded：DOM解析完成之后, load事件（所有资源，图片，资源文件），描述的是加载行为\n首屏展示时间\nFP (First Paint) ： 浏览器从开始请求网站到屏幕渲染第一个像素的时间\nFCP（First Contentful Paint）: 从空白到第一次有内容的时间，这个内容\nFMP（First Meaningful Paint）: 从空白到第一次有意义内容的时间， 大致已经渲染完80%的DOM结构")]),t._v(" "),a("h2",{attrs:{id:"performanceobserver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#performanceobserver"}},[t._v("#")]),t._v(" PerformanceObserver")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/PerformanceObserver",target:"_blank",rel:"noopener noreferrer"}},[t._v("PerformanceObserver的MDN文档"),a("OutboundLink")],1),t._v("\nFP的计算方法:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" observerWithPromise "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// resolve作为构造函数参数，用来接收性能实体列表")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PerformanceObserver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("observe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        entryTypes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'paint'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注册paint性能事件")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("list")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEntries")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("filter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("entry")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 筛选FP")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" entry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'first-paint'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("entry")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("entry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("startTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取FP的具体事件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("FCP的计算方法：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" observerWithPromise "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// resolve作为构造函数参数，用来接收性能实体列表")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PerformanceObserver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("observe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        entryTypes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'paint'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注册paint性能事件")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("list")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEntries")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("filter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("entry")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 筛选FP")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" entry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'first-contentful-paint'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("entry")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("entry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("startTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取FCP的具体事件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"lighthouse"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lighthouse"}},[t._v("#")]),t._v(" LightHouse")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/GoogleChrome/lighthouse",target:"_blank",rel:"noopener noreferrer"}},[t._v("github地址"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"直接安装chrome的lighthouse插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#直接安装chrome的lighthouse插件"}},[t._v("#")]),t._v(" 直接安装chrome的LightHouse插件")]),t._v(" "),a("h3",{attrs:{id:"全局安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局安装"}},[t._v("#")]),t._v(" 全局安装")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("npm install "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("g lighthouse\n# or use yarn"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n# yarn global add lighthouse\n")])])]),a("p",[t._v("对当前网站进行性能评估，并且将结果以json的形式输出到 "),a("code",[t._v("./report.json")]),t._v("这个文件中，可以看到FCP以及FMP的得分")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("lighthouse https"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("airhorner"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("output"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("report"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("output json\n")])])]),a("h2",{attrs:{id:"fmp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fmp"}},[t._v("#")]),t._v(" FMP")]),t._v(" "),a("p",[t._v("FMP的计算比较复杂，并且可能还是不很准确")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("将页面中最大布局变化后的第一次渲染时间记成 FMP")])]),t._v(" "),a("li")]),t._v(" "),a("h2",{attrs:{id:"lcp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lcp"}},[t._v("#")]),t._v(" LCP")]),t._v(" "),a("p",[t._v("最大内容渲染时机")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/48521680",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用 Preload/Prefetch 优化你的应用"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://blog.fundebug.com/2019/04/11/understand-preload-and-prefetch/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Web 性能优化：Preload,Prefetch的使用及在 Chrome 中的优先级"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);