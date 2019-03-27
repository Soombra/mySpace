<template>
  <div>
    <h2>随笔列表</h2>
    <div class="lists">
      <div v-for="(item, index) in articles" class="list-item" :key="index">
        <nuxt-link class="nuxt-link" :to="`/essay/articles/${item._id}`">{{item.title}}</nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
  import {essay} from '~/apis'

  export default {
    asyncData () {
      return essay.queryArticles().then(({data}) => {
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
