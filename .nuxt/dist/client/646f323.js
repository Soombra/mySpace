(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{306:function(t,e,n){"use strict";n.d(e,"b",(function(){return h})),n.d(e,"d",(function(){return m})),n.d(e,"a",(function(){return y})),n.d(e,"c",(function(){return w}));var r=n(435),c=n.n(r),o={},l=["get","post","put","delete"],d=function(i){o[l[i]]=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return c.a[l[i]](t,e)}};for(var f in l)d(f);var v=o,h={queryArticles:function(t){return v.get("/front-end/articles",{params:t})},getArticle:function(t){return v.get("/front-end/article/".concat(t))}},m={queryArticles:function(t){return v.get("/travel/articles",{params:t})},getArticle:function(t){return v.get("/travel/article/".concat(t))}},y={queryArticles:function(t){return v.get("/essay/articles",{params:t})},getArticle:function(t){return v.get("/essay/article/".concat(t))}},w={queryFootprints:function(t){return v.get("/footprints",{params:t})}}},473:function(t,e,n){"use strict";n.r(e);var r=n(306),c={asyncData:function(t){return r.d.getArticle(t.route.params.id).then((function(t){return{article:t.data}}))},head:function(){return{title:this.article.title+"-康哥的个人空间",meta:[{hid:"keywords",name:"keywords",content:this.article.tags.join(",")},{hid:"description",name:"description",content:this.article.title+","+this.article.abstract}]}},data:function(){return{article:{}}}},o=n(14),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("h1",{staticClass:"article-title"},[t._v(t._s(t.article.title))]),t._v(" "),n("div",{staticClass:"article-content",domProps:{innerHTML:t._s(t.article.content)}})])}),[],!1,null,null,null);e.default=component.exports}}]);