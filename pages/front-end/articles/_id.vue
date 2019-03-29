<template>
  <div>
    <h3 class="article-title">{{article.title}}</h3>
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
    data () {
      return {
        article: {}
      }
    }
  }
</script>
