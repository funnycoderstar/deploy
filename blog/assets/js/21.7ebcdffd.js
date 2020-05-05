(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{328:function(t,s,a){"use strict";a.r(s);var n=a(33),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"翻转二叉树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#翻转二叉树"}},[t._v("#")]),t._v(" 翻转二叉树")]),t._v(" "),a("h3",{attrs:{id:"题目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[t._v("#")]),t._v(" 题目描述")]),t._v(" "),a("p",[t._v("翻转一棵二叉树。")]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("输入：\n\n     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("   \\\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" \\   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" \\\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v("\n输出：\n\n     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("   \\\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" \\   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" \\\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),a("h3",{attrs:{id:"解题思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解题思路"}},[t._v("#")]),t._v(" 解题思路")]),t._v(" "),a("p",[t._v("递归的交换左右子树。")]),t._v(" "),a("ol",[a("li",[t._v("当节点为 null 的时候直接返回")]),t._v(" "),a("li",[t._v("如果当前结点不为null，那么先将其左右子树进行翻转，然后交换左右子树。")]),t._v(" "),a("li",[t._v("返回值为完成了翻转后的当前结点。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {TreeNode} root\n * @return {TreeNode}\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("invertTree")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("root")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当节点为 null 的时候直接返回")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果当前结点不为null，那么先将其左右子树进行翻转，然后交换左右子树")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("invertTree")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("invertTree")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回值为完成了翻转后的当前结点")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[t._v("时间复杂度：O(n)，既然树中的每个节点都只被访问一次，那么时间复杂度就是 O(n)，其中 n 是树中节点的个数。在反转之前，不论怎样我们至少都得访问每个节点至少一次，因此这个问题无法做地比 O(n) 更好了。")]),t._v(" "),a("li",[t._v("本方法使用了递归，在最坏情况下栈内需要存放 O(h) 个方法调用，其中 h 是树的高度。由于 h $\\in$ O(n)，可得出空间复杂度为 O(n)。")])])])}),[],!1,null,null,null);s.default=r.exports}}]);