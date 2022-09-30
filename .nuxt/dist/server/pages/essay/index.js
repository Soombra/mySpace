exports.ids = [2];
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

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/essay/index.vue?vue&type=template&id=577dceea&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"lists"},[_vm._ssrNode("<div class=\"main\">","</div>",[_vm._l((_vm.articles),function(item,index){return _vm._ssrNode("<div class=\"list-item\">","</div>",[_vm._ssrNode("<div class=\"list-item-left\">","</div>",[_c('nuxt-link',{staticClass:"list-item-title",attrs:{"to":("/essay/articles/" + (item._id))}},[_vm._v(_vm._s(item.title))]),_vm._ssrNode(" <div class=\"list-item-info\">"+_vm._ssrEscape("作者：康哥  日期："+_vm._s(_vm.moment(item.date_published).format('YYYY-MM-DD HH:MM')))+"</div> <div class=\"list-item-abstract\">"+_vm._ssrEscape(_vm._s(item.abstract))+"</div>")],2),_vm._ssrNode(" "+((item.image)?("<div class=\"list-item-right\"><img"+(_vm._ssrAttr("src",item.image))+" alt></div>"):"<!---->"))],2)}),_vm._ssrNode(" "),(_vm.totalCount > 10)?_vm._ssrNode("<div class=\"pagination-container\">","</div>",[_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","page-size":10,"total":_vm.totalCount},on:{"current-change":_vm.pageChange}})],1):_vm._e()],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/essay/index.vue?vue&type=template&id=577dceea&

// EXTERNAL MODULE: ./apis/index.js + 1 modules
var apis = __webpack_require__(37);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(36);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/essay/index.vue?vue&type=script&lang=js&
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


/* harmony default export */ var essayvue_type_script_lang_js_ = ({
  asyncData() {
    return apis["a" /* essay */].queryArticles().then(({
      data
    }) => {
      if (data) {
        return {
          articles: data
        };
      }
    });
  },

  head() {
    return {
      title: '生活随笔-康哥的个人空间',
      meta: [{
        hid: 'keywords',
        name: 'keywords',
        content: '生活随笔,读书'
      }]
    };
  },

  data() {
    return {
      articles: [],
      moment: external_moment_default.a,
      page: 1,
      totalCount: 0
    };
  },

  methods: {
    pageChange(page) {
      this.page = page;
      this.queryArticles();
    },

    queryArticles() {
      apis["a" /* essay */].queryArticles({
        page: this.page
      }).then(({
        data,
        headers
      }) => {
        this.articles = data;
        this.totalCount = +headers['x-total-count'];
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/essay/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_essayvue_type_script_lang_js_ = (essayvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/essay/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_essayvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5ad29e2c"
  
)

/* harmony default export */ var essay = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map