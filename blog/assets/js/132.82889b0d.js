(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{462:function(t,e,a){"use strict";a.r(e);var n=a(33),c=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"react合成事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react合成事件"}},[t._v("#")]),t._v(" React合成事件")]),t._v(" "),a("p",[t._v("特点：\nReact自己实现了一套高效的事件注册，存储，分发和重用逻辑，在DOM事件体系上做了很大的改进，减少了内存消耗，简化了事件逻辑，并最大化的解决了IE等浏览器的不兼容问题，和DOM事件体系相比，它有如下特点")]),t._v(" "),a("ol",[a("li",[t._v("React组件上声明的事件最终绑定到了 document这个 DOM节点上，而不是React组件对应的DOM节点。故只有document这个节点才绑定了 DOM原生事件，其他节点没有绑定事件。这样简化了DOM原生事件，减小了内存开销")]),t._v(" "),a("li",[t._v("React是以队列的方式，从触发事件的组件向父组件回溯，调用它们在JSX中声明的callback。也就是 React自身实现了一套事件冒泡机制。我们没办法用 event.stopPropagation来停止事件传播，应该使用 event.preventDefault()")]),t._v(" "),a("li",[t._v("React有一套自己的合成事件  SyntheticEvent，不同类型的事件会构造不同的 SyntheticEvent。想要使用浏览器的底层事件时，只需要使用 nativeEvent属性来获取即可")]),t._v(" "),a("li",[t._v("React使用对象池来管理合成事件对象的创建和销毁，这样减少了垃圾的生成和新对象内存的分配，大大提高了性能")])])])}),[],!1,null,null,null);e.default=c.exports}}]);