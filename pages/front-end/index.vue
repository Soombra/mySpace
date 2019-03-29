<template>
  <div class="lists">
    <div v-for="(item, index) in articles" class="list-item" :key="index">
      <div class="list-item-left">
        <nuxt-link class="list-item-title" :to="`/front-end/articles/${item._id}`">{{item.title}}</nuxt-link>
        <div class="list-item-info">作者：康哥&ensp;&ensp;日期：{{moment(item.date_published).format('YYYY-MM-DD HH:MM')}}</div>
        <div class="list-item-abstract">{{item.abstract}}</div>
      </div>
      <div class="list-item-right" v-if="!item.image">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553864296405&di=5dcd1f9d0112dfb29aeafaceffad274d&imgtype=0&src=http%3A%2F%2Fimg.golue.com%2Fpic%2F1612%2F142533.gif" alt="">
      </div>
    </div>
  </div>
</template>
<script>
  import {frontEnd} from '~/apis'
  import moment from 'moment'

  export default {
    asyncData () {
      return frontEnd.queryArticles ().then (({data}) => {
        if (data) {
          return {articles: data}
        }
      })
    },
    data () {
      return {
        articles: [],
        moment,
      }
    }
  }
</script>
