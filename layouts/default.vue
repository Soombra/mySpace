<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand">康哥的地盘</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li v-for="(item, index) in tabs" :key="index" :class="['nav-item', index === activeIndex ? 'active': '']" @click="handleClick(index)">
            <nuxt-link class="nav-link" :to="item.url">{{item.text}}</nuxt-link>
          </li>
        </ul>
        <div class="nav-item" v-if="isLogin">你好，{{userInfo.nickname}}</div>
        <div class="btn btn-primary" @click="handleLogin" v-else>登录</div>
      </div>
    </nav>
    <div class="main">
      <nuxt/>
    </div>
    <div class="clock">
      <clock></clock>
    </div>
  </div>
</template>
<script>
  import clock from '~~/components/clock'
  import {APPID} from '~~/config'
  import { mapState } from 'vuex'
  export default {
    components: {
      clock
    },
    data () {
      return {
        activeIndex: 0,
        tabs: [{
          text: '首页',
          url: '/'
        },{
          text: '前端',
          url: '/front-end'
        },{
          text: '游记',
          url: '/travel'
        },{
          text: '生活随笔',
          url: '/my-life'
        }],
        urlDict: {
          'index': 0,
          'front-end': 1,
          'travel': 2,
          'my-life': 3
        },
      }
    },
    computed: {
      ...mapState(['isLogin', 'userInfo'])
    },
    methods: {
      handleLogin () {
        let loginUrl = `https://open.weixin.qq.com/connect/qrconnect?appid=${APPID}&redirect_uri=${encodeURI(location)}&response_type=code&scope=SCOPE&state=STATE#wechat_redirect`
        location.href = loginUrl
      },
      handleClick (index) {
        this.activeIndex = index
      }
    },
    mounted () {
      this.activeIndex = this.urlDict[$nuxt.$route.name]
    }
  }
</script>
<style lang="scss" scoped>
  html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }
  .navbar-brand{
    margin-right: 20px;
  }
  .nav-item{
    font-size: 16px;
    padding: 0 20px;
  }
  .main{
    max-width: 980px;
    padding: 20px;
    margin: 0 auto;
  }
  .clock{
    position: absolute;
    right: 10px;
    top: 40px;
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }

  .fixed-nav {
    position: fixed;
    width: 100%;
    height: 50px;
    top: 0;
    left: 0;
    border-bottom: 0.5px solid #c4c4c4;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
  }

  .button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
  }

  .button--green:hover {
    color: #fff;
    background-color: #3b8070;
  }

  .button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
  }

  .button--grey:hover {
    color: #fff;
    background-color: #35495e;
  }
</style>
