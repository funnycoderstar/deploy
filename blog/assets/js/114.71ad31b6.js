(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{445:function(_,v,t){"use strict";t.r(v);var r=t(33),a=Object(r.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h2",{attrs:{id:"https"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#https"}},[_._v("#")]),_._v(" https")]),_._v(" "),t("h3",{attrs:{id:"http和https的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http和https的区别"}},[_._v("#")]),_._v(" HTTP和HTTPS的区别")]),_._v(" "),t("ul",[t("li",[_._v("HTTP 使用80端口，HTTPS使用443端口")]),_._v(" "),t("li",[_._v("HTTPS需要申请证书")]),_._v(" "),t("li",[_._v("HTTP是超文本传输协议，是明文传输；HTTPS是经过SSL加密的协议，传输更加安全")]),_._v(" "),t("li",[_._v("HTTPS比HTTP慢\n"),t("ul",[t("li",[_._v("通信慢：HTTPS和HTTP相比，除去TCP连接、发送HTTP请求-响应以外，还必须进行SSL通信。")]),_._v(" "),t("li",[_._v("加密处理：加密和解密运算处理耗时")])])])]),_._v(" "),t("h3",{attrs:{id:"https握手过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#https握手过程"}},[_._v("#")]),_._v(" HTTPS握手过程")]),_._v(" "),t("ol",[t("li",[_._v("客户端使用HTTPS的URL访问Web服务器，要求与服务器建立SSL连接")]),_._v(" "),t("li",[_._v("web服务器收到客户端请求后, 会将网站的证书(包含公钥)传送一份给客户端")]),_._v(" "),t("li",[_._v("客户端收到网站证书后会检查证书的颁发机构以及过期时间, 如果没有问题就随机产生一个密钥")]),_._v(" "),t("li",[_._v("客户端利用公钥将会话密钥加密, 并传送给服务端, 服务端利用自己的私钥解密出会话密钥")]),_._v(" "),t("li",[_._v("之后服务器与客户端使用密钥加密传输")])]),_._v(" "),t("h3",{attrs:{id:"https通过什么保证是安全的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#https通过什么保证是安全的"}},[_._v("#")]),_._v(" HTTPS通过什么保证是安全的")]),_._v(" "),t("p",[_._v("HTTP + 加密 + 认证 + 完整性保护 = HTTPS")]),_._v(" "),t("p",[_._v("加密：")]),_._v(" "),t("ul",[t("li",[_._v("共享密钥加密（对称加密）：加密和解密使用同一个密钥\n"),t("ul",[t("li",[_._v("存在问题：如何安全的发送密钥？以发送密钥就有被窃听的风险，但不发送，对方就不能解密。")])])]),_._v(" "),t("li",[_._v("公开密钥加密（非对称加密）：使用一对非对称的密钥。一把叫做私有密钥，另一把叫做公开密钥加密。\n"),t("ul",[t("li",[_._v("可以解决共享密钥加密的问题：发送密文的一方使用对方的公开密钥进行加密处理，对方收到被加密的信息后，再使用自己的私有密钥进行解密。利用这种方式，不需要发送用来解密私有密钥，也不必担心密钥被攻击者窃听而盗走。")])])]),_._v(" "),t("li",[_._v("HTTPS采用混合加密机制\n"),t("ul",[t("li",[_._v("HTTPS采用 共享密钥加密 和 公开密钥加密 两者并用的混合加密机制，若密钥能够实现安全交换，那么可能会考虑仅使用非对称加密来通信。但是对称加密和非对称加密相比，其处理速度要慢。")]),_._v(" "),t("li",[_._v("所以应充分利用两者各自的优势，将多种方法组合起来用于通信。在交换密钥环节使用公开密钥加密方式，之后建立通信交换报文阶段则使用共享密钥加密方式")])])])]),_._v(" "),t("p",[_._v("认证：证明公开密钥正确性的证书")]),_._v(" "),t("p",[_._v("使用数字证书认证机构（CA）和其他相关机关颁发的公开密钥证书")]),_._v(" "),t("h3",{attrs:{id:"https的详细过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#https的详细过程"}},[_._v("#")]),_._v(" HTTPS的详细过程")]),_._v(" "),t("p",[_._v("加解密过程")]),_._v(" "),t("ul",[t("li",[_._v("浏览器发送给服务端 client_random 和一系列加密方法")]),_._v(" "),t("li",[_._v("服务端发送给浏览器 server_random 和加密方法\n现有浏览器和服务器有了三个相同的凭证：client_random、server_random和加密方法\n用加密方法把 client_random、server_random 两个随机数混合起来，生成秘钥，这个密钥就是浏览器和服务端通信的暗号。")])]),_._v(" "),t("p",[_._v("问题：第三方可以在中间获取到client_random、server_random和加密方法，由于这个加密方法同时可以解密，所以中间人可以成功对暗号进行解密，拿到数据，很容易就将这种加密方式破解了。")]),_._v(" "),t("p",[_._v("非对称加密")]),_._v(" "),t("ul",[t("li",[_._v("浏览器发送给服务端 client_random 和一系列加密方法")]),_._v(" "),t("li",[_._v("服务端发送给浏览器 server_random 和加密方法以及公钥")])]),_._v(" "),t("p",[_._v("两者拥有相同的client_random、server_random和加密方法\n然后浏览器用公钥将client_random和server_random加密，生成与服务器通信的暗号。")]),_._v(" "),t("p",[_._v("问题：服务器的数据只能用私钥进行加密(因为如果它用公钥那么浏览器也没法解密啦)，中间人一旦拿到公钥，那么就可以对服务端传来的数据进行解密了，就这样又被破解了。")]),_._v(" "),t("p",[_._v("两者结合：")]),_._v(" "),t("ul",[t("li",[_._v("浏览器向服务器发送client_random和加密方法列表。")]),_._v(" "),t("li",[_._v("服务器接收到，返回server_random、加密方法以及公钥。")]),_._v(" "),t("li",[_._v("浏览器接收，接着生成另一个随机数pre_random, 并且用公钥加密，传给服务器。(敲黑板！重点操作！)")]),_._v(" "),t("li",[_._v("服务器用私钥解密这个被加密后的pre_random。")])])])}),[],!1,null,null,null);v.default=a.exports}}]);