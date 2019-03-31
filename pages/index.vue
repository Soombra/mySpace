<template>
  <div class="index">
    <div id="index-bg" :class="bgSlide && 'slide-up'">
      <canvas id="c"  @click="handleSlide"></canvas>
      <!--<div class="cover"></div>-->
      <div :class="['index-menu', bgSlide ? 'fade-out' : 'fade-in']">
        <nuxt-link class="index-menu-item" index- v-for="(item, index) in tabs" :to="item.url" :key="index">
          {{item.text}}
        </nuxt-link>
      </div>
      <div :class="['about-me', bgSlide ? 'fade-out' : 'fade-in']">下滑了解我</div>
    </div>
    <div id="content" :class="['index-content', goUp ? 'slide-up' : 'slide-down']" v-if="showContent">
      <div class="content-head">收到粉丝带来负能量的释放你快乐的方式到了弗拉索夫理发师你弗拉索夫哪里都是你发来的释放能量收到翻了翻哪里都是了</div>
      <div class="content-tail"></div>
    </div>

  </div>
</template>

<script>
  import snow from '~/static/js/snow2'
  let sliding = false
  let scrollTop = 0

  export default {
    data () {
      return {
        tabs: [{
          text: '前端',
          url: '/front-end'
        }, {
          text: '游记',
          url: '/travel'
        }, {
          text: '生活',
          url: '/essay'
        }],
        showContent: false,
        goUp: false,
        bgSlide: false
      }
    },
    methods: {
      handleSlide () {
        if (!this.showContent) {
          this.showContent = true
          this.goUp = true
          this.bgSlide = true
          sliding = true
          setTimeout (() => {
            sliding = false
          }, 400)
        } else {

          this.goUp = false
          this.bgSlide = false
          sliding = true
          setTimeout (() => {
            this.showContent = false
            sliding = false
          }, 400)
          // let node = document.querySelector ('#content')
          // let callBack = () => {
          //   console.log ('触发')
          //   this.showContent = false
          //   node.removeEventListener ('webkitAnimationEnd', callBack)
          // }
          // node.addEventListener ('webkitAnimationEnd', callBack)
        }
      },
      slideInit () {
        let windowHeight = document.documentElement.clientHeight || document.body.clientHeight
        let contentNodeHeight = document.getElementById ("index-bg").offsetHeight
        document.onscroll = (e) => {
          let scrollHeight = document.documentElement.scrollTop || document.body.scrollTop
          if (scrollHeight + windowHeight >= contentNodeHeight && !this.showContent && scrollHeight - scrollTop > 0 && !sliding) {
            this.handleSlide ()
          } else if (scrollHeight + windowHeight < contentNodeHeight && this.showContent && scrollHeight - scrollTop < 0 && !sliding) {
            this.handleSlide ()
          }
          scrollTop = scrollHeight
        }
      }
    },
    layout: 'home',
    asyncData () {
    },
    mounted () {
      console.log(this)
      snow ()
      this.slideInit ()
    },
    beforeDestroy () {

    }
  }
</script>

<style lang="scss">
  #index-bg {
    width: 100vw;
    height: 100.1vh;
    background-image: url('../static/img/bg.jpeg');
    background-size: cover;
    background-position: center;
    transition: all 0.4s ease-out 0s;

    &.slide-up {
      transform: translateY(-20vh);
    }

    .cover {
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.1);
    }

    .about-me {
      position: absolute;
      top: 90%;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  #c {
    position: absolute;
  }

  .index-content {
    width: 100vw;
    height: 2000px;
    position: absolute;
    top: 100vh;
    z-index: 150;

    .content-head {
      height: 70vh;
      background-image: linear-gradient(to bottom, rgba(255,255,255,0), #fff);
    }

    .content-tail {
      height: 200vh;
      background-color: #fff;
    }
  }

  @keyframes slide-up {
    from {
      top: 100vh;
    }
    to {
      top: 10vh;
    }
  }

  @keyframes slide-down {
    from {
      top: 10vh;
    }
    to {
      display: none;
      top: 100vh;
    }
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  .slide-up {
    animation: slide-up 0.4s ease-out 0s forwards;
  }

  .slide-down {
    animation: slide-down 0.4s ease-out 0s forwards;
  }

  .fade-in {
    animation: fade-in 0.4s ease-out 0s forwards;
  }

  .fade-out {
    animation: fade-out 0.4s ease-out 0s forwards;
  }

  .index-menu {
    position: fixed;
    width: 300px;
    height: 300px;
    background-color: rgba(0, 0, 0, 0.3);
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

    .index-menu-item {
      text-decoration: none;
      font-size: 16px;
      color: #bbb;
      width: 100%;
      background-color: rgba(255, 255, 255, .1);
      border-radius: 5px;
      text-align: center;
      line-height: 36px;
    }
  }
</style>
