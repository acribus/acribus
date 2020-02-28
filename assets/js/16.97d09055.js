(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{192:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),e("p",[t._v("主题组件受到同样的 "),e("router-link",{attrs:{to:"./using-vue.html#browser-api-access-restrictions"}},[t._v("浏览器的 API 访问限制")]),t._v("。")],1)]),t._m(1),t._m(2),e("p",[t._v("从这里开始，就和开发一个平时的 Vue 应用一样了，如何组织你的主题完全取决于你。")]),t._m(3),t._m(4),t._m(5),t._m(6),e("p",[e("code",[t._v("title")]),t._v(", "),e("code",[t._v("description")]),t._v(" 和 "),e("code",[t._v("base")]),t._v(" 会从 "),e("code",[t._v(".vuepress/config.js")]),t._v(" 中对应的的字段复制过来，而 "),e("code",[t._v("pages")]),t._v(" 是一个包含了每个页面元数据对象的数据，包括它的路径、页面标题（明确地通过 "),e("router-link",{attrs:{to:"./markdown.html#yaml-front-matter"}},[t._v("YAML front matter")]),t._v(" 指定，或者通过该页面的第一个标题取到），以及所有源文件中的 "),e("code",[t._v("YAML front matter")]),t._v(" 的数据。")],1),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),t._m(18)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"自定义主题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义主题","aria-hidden":"true"}},[this._v("#")]),this._v(" 自定义主题")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("VuePress 使用单文件组件来构建自定义主题。想要开发一个自定义主题，首先在你的文档根目录新建一个 "),s("code",[this._v(".vuepress/theme")]),this._v(" 文件夹，然后再创建一个 "),s("code",[this._v("Layout.vue")]),this._v(" 文件：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v(".\n└─ .vuepress\n   └─ theme\n      └─ Layout.vue\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"网站和页面的元数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网站和页面的元数据","aria-hidden":"true"}},[this._v("#")]),this._v(" 网站和页面的元数据")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[e("code",[t._v("Layout")]),t._v(" 组件将会对每一个文档目录下的 "),e("code",[t._v(".md")]),t._v(" 执行一次，同时，整个网站以及特定页面的元数据将分别暴露为 "),e("code",[t._v("this.$site")]),t._v(" 和 "),e("code",[t._v("this.$page")]),t._v(" 属性，它们将会被注入到每一个当前应用的组件中。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这是你现在看到的这个网站的 "),s("code",[this._v("$site")]),this._v(" 的值：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VuePress"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Vue 驱动的静态网站生成器"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"base"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pages"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VuePress"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"frontmatter"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ...\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("下面的这个对象是你正在看的这个页面的 "),s("code",[this._v("$page")]),this._v(" 的值：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/custom-themes.html"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"自定义主题"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"headers"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("/* ... */"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"frontmatter"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("如果用户在 "),e("code",[t._v(".vuepress/config.js")]),t._v(" 配置了 "),e("code",[t._v("themeConfig")]),t._v("，你将可以通过 "),e("code",[t._v("$site.themeConfig")]),t._v(" 访问到它。如此一来，你可以通过它来对用户开放一些自定义主题的配置 —— 比如指定目录或者页面的顺序，你也可以结合 "),e("code",[t._v("$site.pages")]),t._v(" 来动态地构建导航链接。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("最后，别忘了，作为 Vue Router API 的一部分，"),s("code",[this._v("this.$route")]),this._v(" 和 "),s("code",[this._v("this.$router")]),this._v(" 同样可以使用。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"获取渲染内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取渲染内容","aria-hidden":"true"}},[this._v("#")]),this._v(" 获取渲染内容")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("当前的 "),s("code",[this._v(".md")]),this._v(" 文件渲染的内容，可以作为一个独特的全局组件 "),s("code",[this._v("<Content/>")]),this._v(" 来使用，你可能想要它显示在页面中的某个地方。一个最简单的主题，可以是一个唯一的 "),s("code",[this._v("Layout.vue")]),this._v(" 组件，并包含以下内容：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("theme-container"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Content")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"使用来自-npm-的主题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用来自-npm-的主题","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用来自 npm 的主题")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("主题可以以 Vue 单文件组件的格式，并以 "),s("code",[this._v("vuepress-theme-xxx")]),this._v(" 的名称发布到 npm 上。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果想使用一个来自 npm 的主题，你需要在 "),s("code",[this._v(".vuepress/config.js")]),this._v(" 补充 "),s("code",[this._v("theme")]),this._v(" 选项：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  theme"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'awesome'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("VuePress 将会尝试去加载并使用位于 "),s("code",[this._v("node_modules/vuepress-theme-awesome/Layout.vue")]),this._v(" 的主题组件。")])}],!1,null,null,null);s.default=n.exports}}]);