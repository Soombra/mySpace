<template>
  <div>
    <h2>前端文档列表</h2>
    <div v-for="(item, index) in articles" class="" :key="index">
      <nuxt-link class="nuxt-link" :to="`/front-end/articles/${item._id}`">{{item.title}}</nuxt-link>
    </div>
  </div>
</template>
<script>
  import request from '~/request'

  export default {
    asyncData () {
      return request.get('/articles').then(({data}) => {
        if (data) {
          console.log(data)
          return {articles: data}
        }
      })
    },
    data () {
      return {
        articles: []
      }
    }
  }
</script>
