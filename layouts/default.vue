<template>
  <div>
    <nav class="nav">
      <div class="nav-main">
        <nuxt-link to="/" class="nav-brand">康哥的个人空间</nuxt-link>
        <ul class="nav-menu">
          <li v-for="(item, index) in tabs" :key="index"  @click="handleClick(index)">
            <nuxt-link :to="item.url" :class="['menu-item', index === activeIndex ? 'active': '']">{{item.text}}</nuxt-link>
          </li>
        </ul>
        <div class="menu-btn" @click="showDrop = !showDrop">
          <span></span><span></span><span></span>
        </div>
      </div>
      <transition name="expand">
        <ul class="nav-menu-drop" v-if="showDrop" @click="showDrop = !showDrop">
          <li v-for="(item, index) in tabs" :key="index"  @click="handleClick(index)">
            <nuxt-link :to="item.url" :class="['menu-item-drop', index === activeIndex ? 'active': '']">{{item.text}}</nuxt-link>
          </li>
        </ul>
      </transition>
    </nav>
    <nuxt/>
    <div class="clock" v-if="documentWidth > 1430">
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
        documentWidth: 1500,
        tabs: [{
          text: '前端',
          url: '/front-end'
        },{
          text: '游记',
          url: '/travel'
        },{
          text: '生活',
          url: '/essay'
        }],
        urlDict: {
          'front-end': 0,
          'travel': 1,
          'my-life': 2
        },
        showDrop: false
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
      this.activeIndex = this.urlDict[$nuxt.$route.path.split('/')[1]]
      this.documentWidth = document.body.clientWidth
      window.addEventListener('resize', (e) => {
         this.documentWidth = document.body.clientWidth
      })
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
  .nav{
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;

    z-index: 100;
    background-color: #fff;
    font-size: 20px;

    li{
      list-style: none;
    }
    a{
      text-decoration: none;
    }
    .nav-main{
      width: 100%;
      border-bottom: 1px solid #eee;
      display: flex;
      align-items: center;
      padding: 15px 20px;
    }
    .nav-brand{
      color: #999;
      margin-right: 20px;
      font-size: 22px;
    }
    .nav-menu{
      display: flex;
      flex-grow: 1;
      .menu-item{
        color: #444;
        font-size: 16px;
        padding: 0 20px;
        &.active{
          color: #29B4F0;
        }
      }
    }
    .nav-menu-drop{
      width: 100%;
      display: none;
      flex-direction: column;
      padding: 0 20px;
      .menu-item-drop{
        color: #444;
        font-size: 18px;
        display: block;
        height: 50px;
        line-height: 50px;
        &.active{
          color: #29B4F0;
        }
      }
    }
    .menu-btn{
      display: none;
      width: 35px;
      height: 33px;
      border-radius: 5px;
      border: 1.5px solid #ccc;
      /*display: flex;*/
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      padding: 5px 0;
      cursor: pointer;
      span{
        width: 80%;
        height: 2px;
        background-color: #ccc;
        border-radius: 5px;
      }
    }
  }
  .clock{
    position: absolute;
    right: 0px;
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
  @media screen and (max-width: 768px) {
    .nav{
      .nav-brand{
        flex-grow: 1;
      }
      .nav-menu{
        display: none;
      }
      .nav-menu-drop{
        display: flex;
      }
      .menu-btn{
        display: flex;
      }
    }
  }
  .expand-enter-active {
     transition: all 0.3s ease;
     overflow: hidden;
    height: 150px;
  }
  .expand-leave-active{
     transition: all 0.3s ease;
     height: 0px;
     overflow: hidden;
  }
  .expand-enter, .expand-leave {
     height: 0;
     opacity: 0;
  }
</style>
