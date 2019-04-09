<template>
  <div class="lists">
    <div v-for="(item, index) in articles" class="list-item" :key="index">
      <div class="list-item-left">
        <nuxt-link class="list-item-title" :to="`/front-end/articles/${item._id}`">{{item.title}}</nuxt-link>
        <div class="list-item-info">作者：康哥&ensp;&ensp;日期：{{moment(item.date_published).format('YYYY-MM-DD HH:MM')}}</div>
        <div class="list-item-abstract">{{item.abstract}}</div>
      </div>
      <div class="list-item-right" v-if="item.image">
        <img :src="item.image" alt="">
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
    head () {
      return {
        title: '前端技术分享-康哥的个人空间',
        meta: [
          {hid: 'keywords', name: 'keywords', content: '前端,编程,技术分享'}
        ]
      }
    },
    data () {
      return {
        articles: [],
        moment,
      }
    }
  }
</script>
