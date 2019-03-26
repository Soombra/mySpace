<template>
  <div>
    <h3>{{article.title}}</h3>
    <div class="content" v-html="article.content"></div>
  </div>
</template>
<script>
  import {essay} from '~/apis'

  export default {
    asyncData (ctx) {
      return essay.getArticle(ctx.route.params.id).then(({data}) => {
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
