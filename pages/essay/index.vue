<template>
  <div class="lists">
    <div class="main">
      <div v-for="(item, index) in articles" class="list-item" :key="index">
        <div class="list-item-left">
          <nuxt-link class="list-item-title" :to="`/essay/articles/${item._id}`">{{item.title}}</nuxt-link>
          <div class="list-item-info">作者：康哥&ensp;&ensp;日期：{{moment(item.date_published).format('YYYY-MM-DD HH:MM')}}</div>
          <div class="list-item-abstract">{{item.abstract}}</div>
        </div>
        <div class="list-item-right" v-if="item.image">
          <img :src="item.image" alt="">
        </div>
      </div>
      <div class="pagination-container" v-if="totalCount > 10">
        <el-pagination
            background
            layout="prev, pager, next"
            :page-size="10"
            @current-change = 'pageChange'
            :total="totalCount">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
  import {essay} from '~/apis'
  import moment from 'moment'

  export default {
    asyncData () {
      return essay.queryArticles ().then (({data}) => {
        if (data) {
          return {articles: data}
        }
      })
    },
    head () {
      return {
        title: '生活随笔-康哥的个人空间',
        meta: [
          {hid: 'keywords', name: 'keywords', content: '生活随笔,读书'}
        ]
      }
    },
    data () {
      return {
        articles: [],
        moment,
        page: 1,
        totalCount: 0
      }
    },
    methods: {
      pageChange (page) {
        this.page = page
        this.queryArticles()
      },
      queryArticles () {
        essay.queryArticles({page: this.page}).then (({data, headers}) => {
          this.articles = data
          this.totalCount = +headers['x-total-count']
        })
      }
    }
  }
</script>
