exports.ids = [5];
exports.modules = {

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ frontEnd; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ travel; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ essay; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ home; });

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(35);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./request/index.js

const request = {};
const methods = ['get', 'post', 'put', 'delete'];

for (let i in methods) {
  request[methods[i]] = function (url, params = {}) {
    if (true) {
      params.baseURL = 'http://127.0.0.1:3000';
    }

    return external_axios_default.a[methods[i]](url, params);
  };
}

/* harmony default export */ var request_0 = (request);
// CONCATENATED MODULE: ./apis/index.js

const frontEnd = {
  queryArticles(params) {
    return request_0.get('/front-end/articles', {
      params
    });
  },

  getArticle(id) {
    return request_0.get(`/front-end/article/${id}`);
  }

};
const travel = {
  queryArticles(params) {
    return request_0.get('/travel/articles', {
      params
    });
  },

  getArticle(id) {
    return request_0.get(`/travel/article/${id}`);
  }

};
const essay = {
  queryArticles(params) {
    return request_0.get('/essay/articles', {
      params
    });
  },

  getArticle(id) {
    return request_0.get(`/essay/article/${id}`);
  }

};
const home = {
  queryFootprints(params) {
    return request_0.get('/footprints', {
      params
    });
  }

};
/* harmony default export */ var apis = ({
  frontEnd,
  travel,
  essay,
  home
});

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(41);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("79f65534", content, true, context)
};

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/wechat_code.bb4b30e.jpeg";

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(17);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(42);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(43);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#index-bg{width:100%;height:100.5vh;background-image:url(http://medias.wuerkang.com/bg.jpeg);background-size:cover;background-position:0 0;transition:all .4s ease-out 0s}#index-bg #c{width:100%}#index-bg.slide-up{transform:translateY(-20vh)}#index-bg .cover{width:100%;height:100%;background-color:rgba(0,0,0,.1)}#index-bg .about-me{font-size:1rem;position:absolute;top:85%;left:50%;transform:translateX(-50%);color:hsla(0,0%,100%,.8)}#index-bg .about-me .arrow{width:.25rem;height:2.5rem;background-color:#fff;border-radius:.125rem;position:relative;margin:0 auto;-webkit-animation:shinny 1.5s linear 0s infinite;animation:shinny 1.5s linear 0s infinite}#index-bg .about-me .arrow:after,#index-bg .about-me .arrow:before{content:\"\";position:absolute;width:1.25rem;height:.25rem;bottom:.125rem;background-color:#fff;border-radius:.125rem}#index-bg .about-me .arrow:before{right:-.125rem;transform:rotate(45deg)}#index-bg .about-me .arrow:after{left:-.125rem;transform:rotate(-45deg)}#index-bg .record{text-align:center;position:absolute;bottom:1.25rem;width:100%}#index-bg .record a{color:#fff;text-decoration:none}#c{position:absolute}.index-menu{position:fixed;width:18.75rem;height:18.75rem;background-color:rgba(0,0,0,.3);border-radius:.625rem;z-index:100;top:50%;left:50%;transform:translate(-50%,-50%);display:flex;flex-direction:column;justify-content:space-around;align-items:center;padding:1.25rem;color:#aaa;font-size:1.25rem}.index-menu .index-menu-item{text-decoration:none;font-size:1rem;color:#bbb;width:100%;background-color:hsla(0,0%,100%,.1);border-radius:.3125rem;line-height:2.25rem;position:relative;padding-left:1.25rem}.index-menu .index-menu-item:hover{background-color:hsla(0,0%,100%,.2)}.index-menu .index-menu-item:after{width:.625rem;height:.625rem;content:\"\";position:absolute;border-bottom:.0625rem solid #bbb;border-right:.0625rem solid #bbb;right:1.25rem;top:50%;transform:rotate(-45deg) translateY(-50%)}.index-content{width:100%;position:absolute;top:100vh;z-index:150}.index-content .content-head-cover{height:70vh;background-image:linear-gradient(180deg,hsla(0,0%,100%,0),#fff)}.index-content .content-body{padding-bottom:3.125rem;background-color:#fff;overflow:hidden}.index-content .content-body .content-main{max-width:61.25rem;margin:0 auto;padding:0 1.25rem}.index-content .content-body .content-main h2{font-size:1.875rem;font-weight:700;margin-bottom:1.25rem}.index-content .content-body .content-main .contact .contact-icons{height:5rem;max-width:31.25rem;margin:3.125rem auto;display:flex;justify-content:space-around}.index-content .content-body .content-main .contact .contact-icons div{width:3.125rem;height:3.125rem;background-position:50%;background-size:contain;background-repeat:no-repeat;cursor:pointer}.index-content .content-body .content-main .contact .contact-icons .icon-mail{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")}.index-content .content-body .content-main .contact .contact-icons .icon-wechat{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ")}.index-content .content-body .content-main .contact .contact-content{display:flex;justify-content:center;height:6.25rem}.index-content .content-body .content-main .contact .contact-content img{width:6.25rem;height:6.25rem}.index-content .footer{font-size:.875rem;height:3.125rem;background-color:#ccc;margin-bottom:0;display:flex;align-items:center;justify-content:center}@-webkit-keyframes slide-up{0%{top:100vh}to{top:10vh}}@keyframes slide-up{0%{top:100vh}to{top:10vh}}@-webkit-keyframes slide-down{0%{top:10vh}to{display:none;top:100vh}}@keyframes slide-down{0%{top:10vh}to{display:none;top:100vh}}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fade-out{0%{opacity:1}to{opacity:0}}@keyframes fade-out{0%{opacity:1}to{opacity:0}}@-webkit-keyframes shinny{0%{opacity:.2;transform:translateY(0) scale(1)}50%{opacity:.8;transform:translateY(.3125rem) scaleX(1.05)}to{opacity:.2;transform:translateY(0) scale(1)}}@keyframes shinny{0%{opacity:.2;transform:translateY(0) scale(1)}50%{opacity:.8;transform:translateY(.3125rem) scaleX(1.05)}to{opacity:.2;transform:translateY(0) scale(1)}}.slide-up{-webkit-animation:slide-up .4s ease-out 0s forwards;animation:slide-up .4s ease-out 0s forwards}.slide-down{-webkit-animation:slide-down .4s ease-out 0s forwards;animation:slide-down .4s ease-out 0s forwards}.fade-in{-webkit-animation:fade-in .4s ease-out 0s forwards;animation:fade-in .4s ease-out 0s forwards}.fade-out{-webkit-animation:fade-out .4s ease-out 0s forwards;animation:fade-out .4s ease-out 0s forwards}.my-info{display:flex;margin-bottom:3.75rem}.my-info .my-info-avatar{flex-shrink:0;width:18.75rem;height:25rem;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;border-radius:.3125rem}.my-info .my-info-text{flex-grow:1;margin-left:1.25rem;font-size:1.25rem;line-height:2rem}.my-info .my-info-text .tip{font-size:1rem}#map{width:80%;height:37.5rem;margin:0 auto}@media screen and (max-width:768px){.my-info{flex-direction:column}.my-info .my-info-avatar{width:100%;height:auto;margin-bottom:1.25rem}#map{height:18.75rem}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/mail.75a04bf.png";

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/wechat.6bdd770.png";

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=ce3abc78&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"index"},[_vm._ssrNode("<div id=\"index-bg\""+(_vm._ssrClass(null,_vm.bgSlide && 'slide-up'))+">","</div>",[_vm._ssrNode("<canvas id=\"c\"></canvas> "),_vm._ssrNode("<div"+(_vm._ssrClass(null,['index-menu', _vm.bgSlide ? 'fade-out' : 'fade-in']))+">","</div>",[_vm._ssrNode("\n      文章列表\n      "),_vm._l((_vm.tabs),function(item,index){return _c('nuxt-link',{key:index,staticClass:"index-menu-item",attrs:{"index-":"","to":item.url}},[_vm._v("\n        "+_vm._s(item.text)+"\n      ")])})],2),_vm._ssrNode(" <div"+(_vm._ssrClass(null,['about-me', _vm.bgSlide ? 'fade-out' : 'fade-in']))+"><div class=\"arrow\"></div></div> <div class=\"record\"><a target=\"_blank\" href=\"https://beian.miit.gov.cn\">京ICP备19012712号</a></div>")],2),_vm._ssrNode(" "+((_vm.showContent)?("<div id=\"content\""+(_vm._ssrClass(null,['index-content', _vm.goUp ? 'slide-up' : 'slide-down']))+"><div class=\"content-head-cover\"></div> <div class=\"content-body\"><div class=\"content-main\"><h2>关于我</h2> <div class=\"my-info\"><img src=\"http://medias.wuerkang.com/738b9d8df7258e2a37fe8145c167895.jpg\" alt class=\"my-info-avatar\"> <div class=\"my-info-text\">\n            哈喽，我是这个网站的主人，一名90后北漂。下过建筑工地，做过房地产成本，现在是一名奋进在前端路上的开发者。 <br><br>\n            我对自己的评价是一个“有冒险精神的宅男”，喜欢独处的时光，同时也偏爱户外和运动。周末会和朋友一起去京郊爬爬山，也曾经骑行走完了川藏线，环过青海湖。对我来说，人生不止一个标签，体验新鲜事物永远是我最大的爱好。\n            <br><br>\n            这里是我总结分享技术和记录生活点滴的地方，希望能通过文字认识到更多的朋友。如果想和我探讨问题，欢迎通过下列方式联系我。 <br><br> <span class=\"tip\">ps.如果你也玩守望先锋，我们可以成为朋友哦！</span></div></div> <h2>足迹</h2> <div id=\"map\"></div> <h2>联系我</h2> <div class=\"contact\"><div class=\"contact-icons\"><div class=\"icon-mail\"></div> <div class=\"icon-wechat\"></div></div> <div class=\"contact-content\">"+((_vm.contactType === 'mail')?("wu772850334@163.com"):"<!---->")+" "+((_vm.contactType === 'wechat')?("<img"+(_vm._ssrAttr("src",__webpack_require__(39)))+" alt>"):"<!---->")+"</div></div></div></div> <p class=\"footer\"><a target=\"_blank\" href=\"https://beian.miit.gov.cn\">京ICP备19012712号</a></p></div>"):"<!---->"))],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=ce3abc78&

// EXTERNAL MODULE: ./apis/index.js + 1 modules
var apis = __webpack_require__(37);

// CONCATENATED MODULE: ./static/js/snow2.js
/* harmony default export */ var snow2 = (function () {
  // Customize these...
  var n = 999,
      speed = 3,
      wind = 500,
      windVariance = 1.5; // 1 = no variance
  // ...not these

  var c = document.getElementById("c"),
      ctx = c.getContext("2d"),
      cw = c.width = window.innerWidth,
      ch = c.height = window.innerHeight,
      img = new Image(64, 64),
      particles = [],
      particleNumber = 0,
      Particle = function (index) {
    this.size = rand(5, 10); // default (90% background) size, duration, & alpha

    this.dur = (15 - this.size) / speed; //

    this.alpha = rand(0.25, 0.75); //

    if (index < n / 100) {
      // 1% in the foreground...
      this.size = rand(150, 200);
      this.dur = this.dur / 4;
      this.alpha = this.alpha / 3.3;
    } else if (index < n / 10) {
      // ...then 9% in the middleground
      this.size = rand(19, 33);
      this.dur = this.dur / 2.5;
      this.alpha = this.alpha / 1.5;
    }

    var rot = -rand(3, 5);
    if (index % 4 == 0) rot = -rot;

    this.draw = function () {
      ctx.translate(this.x, this.y);
      ctx.rotate(rot * this.progress);
      ctx.globalAlpha = this.alpha;
      ctx.drawImage(img, -this.size / 2, -this.size / 2, this.size, this.size);
      ctx.rotate(-rot * this.progress);
      ctx.translate(-this.x, -this.y);
    };
  };

  function setParticle(p) {
    particleNumber++;

    var _tl = new TimelineMax().fromTo(p, p.dur, {
      x: rand(-Math.abs(wind), cw + Math.abs(wind)),
      y: -p.size,
      progress: 0
    }, {
      x: '+=' + String(rand(wind / windVariance, wind * windVariance)),
      y: ch + p.size,
      progress: 1,
      ease: Power0.easeNone,
      onComplete: function () {
        setParticle(p);
      }
    });

    if (particleNumber < n) _tl.seek(p.dur * rand()); //fast forward on first run
  } // First run


  for (var i = 0; i < n; i++) {
    particles.push(new Particle(i));
    setParticle(particles[i]);
  }

  TweenMax.ticker.addEventListener("tick", function () {
    ctx.clearRect(0, 0, cw, ch);

    for (var i = 0; i < n; i++) {
      particles[i].draw();
    }
  });
  window.addEventListener('resize', function () {
    particleNumber = 0;
    cw = c.width = window.innerWidth;
    ch = c.height = window.innerHeight;

    for (var i = 0; i < n; i++) {
      TweenMax.killTweensOf(particles[i]);
      setParticle(particles[i]);
    }
  });

  function rand(min = 0, max = 1) {
    return min + (max - min) * Math.random();
  }

  img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAulBMVEVHcEz////+/v7////+/v79/f3////x8fH9/f3+/v7+/v7////+/v7////////////////////////////////////////////////+/v7///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+MnUWcAAAAPnRSTlMACQ4GBAoWAQMCDRMQJSIfOlQICxgdSkFyG09hXDcrKUeMLZKgsmmnPoIaL2aHWH4xbaw0d0S8wXu3m5cymMmy7QsAAAVDSURBVHgBzZd3g6JKEMQP99BbzoSYs5jFHDbq9/9ar6qb4aHLxr+uX7jYP6pqmKHn179VGa37sDLyO1/u/aW9f1C/tfAzYr4GYa+23sVLMF9h8OFhd6lkWZZt2/h/qSQMCvmEQNt/+ES0eg4qlUo5KcfxPMvib3+KwOPZz+5UNpv9GxZ+CggZnyDon+JtL4XudDpdDitNCBCwEmbxTgBID97xeHSXF41KQapSqTTKZTBSjk3E72SCAJCe5aXwdHbnc6by+UJlAR1AeEZFAgL9EOA57K8Ucrle1/cDlu/3cjkwFGFzSeTNeBsB+m3tz+d6fnA+dIqszuEc+D0gGjSS9ZAmjdz/yrwFiIEy+wN0z2a12ulUq81mxc6ZCBgBwrETfWS4BBYFNPK57hbtp361Wm028b/+qWYQDfrwiKCPWwATSC8KeH6nWOtXm67rrtdr1wWlbxANRqEiqOEWkKKAnn9gv+u22y2pdttVROAzChFhqYbMdQSOJNDbdmb9prtut5aTyW63myyXLUHMioeAPpCEEO6o4RYAB91z8VR112jf1etHVL2+A2LdrJ5mRfgAIa0EJhkH2BqBLwLay139+LTZzOfzzdNREC59HEJC1ivRxK0CRhAQsG5Ndsen+Wo1GAxWKzCIgIiIIEn+ZgoJgFpVBKB/MJQaAHGsT1prVwg5SdKhiY8Axw36X19Yr0RAhBLOXRAogSuRiS8jQ8znQgAEDIaXEWo6GhGhhCZy2NIEcyQgc/0elAshYCKAl9F0ut/vp9PRCwlw4Tb7M5pYpNVDBMhEAN8AVoPXEdrHqD0IryDsllgLlYClZIyxEO6wjgyhe5j1xcJqCAD6n5+fx2PVcKSJU/HQzf3v4Wo3Sop4kZrr5Q4WXgh4fnh4AGIPwuqpTgmzDj0o4P4a4EQhtHbH+eACAPofH4GAhldKQArigesQBzAEXcgcPTAEhDiajp/RTwJyEAni4cwQuJBXAB5pXMheIB4YwgssAIASCcPBhh6wDt1bAD2Q4PxNV3K+8YAQmEEEeAVg8iHgDhIQ41YlbFYxD2EIBpB7A5AvCyWUIwlPRkIsxbgCz7oGyLnopcxKtkMJJLA/buGcAIjtqHgKF32X0B+9CM0+VsEA9FWOr4SHU8VI4EKQAAQ2BB086asY9Pgi2SXZC/GiBLMQ3BDHDQmjKYvv8oYvUrXWCXKFchKAO6IUe59pAjviZYRiPx0wgo7PveDEt0L8aNQ9qVsKK8Fj5XK58FChgDUiQIaNhAz1ZVAPfBd0V/Ng4sk2YH892s4EwMEtQHc1Pw/YETShZ+t8hQqPxaY4YAQez0TT+OZ01uMdBDnecb4/PbE/dp6YvZjgwYOE6Hxv8wPD2u3YHwpIdhDf1QuYOHdq/Ma18JFCLVvSTwFcg6wNB8mTin5l9SMnX+l1u43mdnvNfp5nZismAbgpS3ZsUCCi6bKa8nXsBL08IqSDhAjMsWBzVCEhOBRnNc4aMmic5APNBLAGpUQBGiNnDRIwbPhnjEpm2MHAFIiBv3oWJANEg+V50by1PRw6HLg6ncPWlwFBBHwMgAtOnGUOjDLxbbfbANOaGZQcAmjhI4IOnUCAIaUD4yKacbgTk1PQsddCEBx7G2Tk0YyZlXMvB072y1ZOJpjB23IgAkbKjUajwlpczbz3H96b7nnzsGwgyDClk7stApjhBwhzfdD7gyk+nZP/Z/3GB0RQhm17nqPl2XZJp+XPAGY9yOAdSquEbrZzRPwKgCrkHkaMFrvjd5/PEfFrJJvNRfK7d1lzk9X6+ZWY19t/sP4DoePqp9agWnMAAAAASUVORK5CYII=";
});
// CONCATENATED MODULE: ./utils/index.js
function isMobile() {
  return navigator.userAgent.toLowerCase().match(/(ipod|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i) != null;
}
/* harmony default export */ var utils = ({
  isMobile
});
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(36);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




let sliding = false;
let scrollTop = 0;
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  data() {
    return {
      tabs: [{
        text: '前端',
        url: '/front-end'
      }, {
        text: '游记',
        url: '/travel' // }, {
        //   text: '生活',
        //   url: '/essay'

      }],
      showContent: false,
      goUp: false,
      bgSlide: false,
      contactType: 'wechat'
    };
  },

  head() {
    return {
      title: '康哥的生活分享',
      meta: [{
        hid: 'keywords',
        name: 'keywords',
        content: '技术分享,户外游记,生活随笔'
      }]
    };
  },

  methods: {
    handleSlide() {
      if (!this.showContent) {
        this.showContent = true;
        this.goUp = true;
        this.bgSlide = true;
        this.$nextTick(() => {
          this.mapInit();
        });
        sliding = true;
        setTimeout(() => {
          sliding = false;
        }, 400);
      } else {
        this.goUp = false;
        this.bgSlide = false;
        sliding = true;
        setTimeout(() => {
          this.showContent = false;
          sliding = false;
        }, 400); // let node = document.querySelector ('#content')
        // let callBack = () => {
        //   console.log ('触发')
        //   this.showContent = false
        //   node.removeEventListener ('webkitAnimationEnd', callBack)
        // }
        // node.addEventListener ('webkitAnimationEnd', callBack)
      }
    },

    slideInit() {
      let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
      let contentNodeHeight = document.getElementById("index-bg").offsetHeight;

      document.onscroll = e => {
        let scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;

        if (scrollHeight + windowHeight >= contentNodeHeight && !this.showContent && scrollHeight - scrollTop > 0 && !sliding) {
          this.handleSlide();
        } else if (scrollHeight + windowHeight < contentNodeHeight && this.showContent && scrollHeight - scrollTop < 0 && !sliding) {
          this.handleSlide();
        }

        scrollTop = scrollHeight;
      };
    },

    mapInit() {
      var myChart = echarts.init(document.getElementById('map'));
      apis["c" /* home */].queryFootprints().then(({
        data
      }) => {
        console.log(data);
        var option = {
          tooltip: {
            trigger: 'item',

            formatter({
              data
            }) {
              return `${data.name} <br/> ${external_moment_default()(data.date).format('YYYY.MM.DD')}`;
            }

          },
          geo: {
            map: 'china',
            label: {
              emphasis: {
                show: false
              }
            },
            roam: true,
            scaleLimit: {
              min: 1,
              max: 3
            },
            itemStyle: {
              normal: {
                areaColor: '#ccc',
                borderColor: '#888'
              },
              emphasis: {
                areaColor: '#ccc'
              }
            }
          },
          series: [{
            name: '地址',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: data,
            symbolSize: 8
          }]
        };
        console.log(option);
        myChart.setOption(option);
      }).catch(err => {
        console.log(err);
      });
    }

  },
  layout: 'home',

  asyncData() {},

  mounted() {
    if (!isMobile()) {
      snow2();
    }

    this.slideInit();
  }

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(40)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "38aa0f84"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map