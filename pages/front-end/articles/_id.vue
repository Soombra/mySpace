<template>
  <div class="main">
    <h1 class="article-title">{{article.title}}</h1>
    <div class="article-content" v-html="article.content"></div>
  </div>
</template>
<script>
  import {frontEnd} from '~/apis'

  export default {
    asyncData (ctx) {
      return frontEnd.getArticle(ctx.route.params.id).then(({data}) => {
        return {article: data}
      })
    },
    head () {
      return {
        title: this.article.title + '-康哥的个人空间',
        meta: [
          {hid: 'keywords', name: 'keywords', content: this.article.tags.join(',')},
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
