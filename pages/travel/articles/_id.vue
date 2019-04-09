<template>
  <div>
    <h3 class="article-title">{{article.title}}</h3>
    <div class="article-content" v-html="article.content"></div>
  </div>
</template>
<script>
  import {travel} from '~/apis'

  export default {
    asyncData (ctx) {
      return travel.getArticle(ctx.route.params.id).then(({data}) => {
        return {article: data}
      })
    },
    head () {
      return {
        title: this.article.title + '-康哥的个人空间',
        meta: [
          {hid: 'keywords', name: 'keywords', content: '户外,川藏线,骑行,旅游'},
          {hid: 'description', name: 'description', content: this.article.title + ',' + this.article.abstract}
        ]
      }
    },
    data () {
      return {
        article: {}
      }
    }
  }
</script>
