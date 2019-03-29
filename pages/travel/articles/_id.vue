<template>
  <div>
    <h3>{{article.title}}</h3>
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
    data () {
      return {
        article: {}
      }
    }
  }
</script>
