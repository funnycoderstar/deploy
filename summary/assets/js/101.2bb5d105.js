(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{275:function(t,s,a){"use strict";a.r(s);var n=a(0),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/renjing/p/6394725.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("nginx反向代理-解决跨域问题"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://segmentfault.com/q/1010000010360640",target:"_blank",rel:"noopener noreferrer"}},[t._v("nginx到底是干啥的"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://www.cnblogs.com/DY9412/p/7873847.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用webpack配置vue项目代理 （超简单）"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("跨域是浏览器的限制;")]),t._v(" "),a("p",[t._v("网站A: http://localhost:8081\n网站B: http://localhost:8082")]),t._v(" "),a("p",[t._v("网站A的页面去访问网站B的信息")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("h2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Index"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("h2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"show"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text/javascript"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:82/api/values"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("result")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#show"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("浏览器会报跨域的问题")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.cnblogs.com/renjing/p/6126284.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("nginx快速搭建"),a("OutboundLink")],1),t._v("\nnginx.conf")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        listen       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" #监听"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("端口，可以改成其他端口\n        server_name  localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" # 当前服务的域名\n\n        #charset koi8"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        #access_log  logs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("access"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log  main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        location "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            proxy_pass http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("81")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            proxy_redirect "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t\tlocation "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("apis "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" #添加访问目录为"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("apis的代理配置\n\t\t\trewrite  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("apis"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("$ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\tproxy_pass   http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("82")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n#以下配置省略\n")])])]),a("p",[t._v("配置详解\n1.nginx监听localhost的80端口,网站A和网站B的访问都是经过localhost的80端口进行访问;\n2.我们特殊配置了一个"),a("code",[t._v("/apis")]),t._v("的目录访问,并且对url执行了重写,最后使以"),a("code",[t._v("/apis")]),t._v("开头的地址都转到"),a("code",[t._v("http://localhost:82")]),t._v("进行处理.\n3.rewrite ^/apis/(.*)$ /$1 break;\n代表重写拦截进来的请求,并且只能对域名后面以"),a("code",[t._v("/apis")]),t._v("开头的起作用,")]),t._v(" "),a("h2",{attrs:{id:"访问地址修改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问地址修改","aria-hidden":"true"}},[t._v("#")]),t._v(" 访问地址修改")]),t._v(" "),a("p",[t._v("既然配置了nginx,那么所有的访问都要走nginx,而不是走网站原本的地址(A网站localhost:81,B网站localhost:82);所以要修改A网站中的ajax访问地址,吧访问地址由"),a("code",[t._v("http://localhost:82/api/values")]),t._v("改成"),a("code",[t._v("/apis/api/values")]),t._v("。如下代码：")])])}),[],!1,null,null,null);s.default=r.exports}}]);