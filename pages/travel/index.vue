<template>
  <div>
    <h2>游记列表</h2>
    <div class="lists">
      <div v-for="(item, index) in articles" class="list-item" :key="index">
        <nuxt-link class="nuxt-link" :to="`/travel/articles/${item._id}`">{{item.title}}</nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
  import {travel} from '~/apis'

  export default {
    asyncData () {
      return travel.queryArticles().then(({data}) => {
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
