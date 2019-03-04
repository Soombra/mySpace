<template>
  <div>
    <h3>{{article.title}}</h3>
    <div class="content" v-html="article.content"></div>
  </div>
</template>
<script>
  import request from '~~/request'

  export default {
    asyncData (ctx) {
      return request.get(`/article/${ctx.route.params.id}`).then(({data}) => {
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
