<template>
  <div class="index">
    <div class="index-menu">
      <nuxt-link class="index-menu-item" index- v-for="(item, index) in tabs" :to="item.url" :key="index">{{item.text}}</nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
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
      }
    },
    layout: 'home',
    asyncData () {},
    mounted () {}
  }
</script>

<style lang="scss">
  .index-menu{
    position: fixed;
    width: 300px;
    height: 300px;
    background-color: rgba(0,0,0,0.2);
    border-radius: 10px;
    z-index: 100;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    .index-menu-item{
      text-decoration: none;
      font-size: 16px;
      color: #bbb;
      width: 100%;
      background-color: rgba(255,255,255, .1);
      border-radius: 5px;
      text-align: center;
      line-height: 36px;
    }
  }
</style>
