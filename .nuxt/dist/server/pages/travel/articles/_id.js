exports.ids = [6];
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

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/travel/articles/_id.vue?vue&type=template&id=22dc9b91&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main"},[_vm._ssrNode("<h1 class=\"article-title\">"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> <div class=\"article-content\">"+(_vm._s(_vm.article.content))+"</div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/travel/articles/_id.vue?vue&type=template&id=22dc9b91&

// EXTERNAL MODULE: ./apis/index.js + 1 modules
var apis = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/travel/articles/_id.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  asyncData(ctx) {
    return apis["d" /* travel */].getArticle(ctx.route.params.id).then(({
      data
    }) => {
      return {
        article: data
      };
    });
  },

  head() {
    return {
      title: this.article.title + '-康哥的个人空间',
      meta: [{
        hid: 'keywords',
        name: 'keywords',
        content: this.article.tags.join(',')
      }, {
        hid: 'description',
        name: 'description',
        content: this.article.title + ',' + this.article.abstract
      }]
    };
  },

  data() {
    return {
      article: {}
    };
  }

});
// CONCATENATED MODULE: ./pages/travel/articles/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var articles_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/travel/articles/_id.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  articles_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "526a66a9"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map