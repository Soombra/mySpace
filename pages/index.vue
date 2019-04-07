<template>
  <div class="index">
    <div id="index-bg" :class="bgSlide && 'slide-up'">
      <canvas id="c"  @click="handleSlide"></canvas>
      <!--<div class="cover"></div>-->
      <div :class="['index-menu', bgSlide ? 'fade-out' : 'fade-in']">
        文章列表
        <nuxt-link class="index-menu-item" index- v-for="(item, index) in tabs" :to="item.url" :key="index">
          {{item.text}}
        </nuxt-link>
      </div>
      <div :class="['about-me', bgSlide ? 'fade-out' : 'fade-in']">
        <p>下滑了解我</p>
        <div class="arrow"></div>
      </div>
    </div>
    <div id="content" :class="['index-content', goUp ? 'slide-up' : 'slide-down']" v-if="showContent">
      <div class="content-head-cover"></div>
      <div class="content-body">
        <div class="content-main">
          从加强和改善党对全面深化改革统筹领导到抓好中央和地方机构改革；从激发制度活力激活基层经验激励干部作为到加强领导科学统筹狠抓落实；从把新时代改革开放继续推向前进到对标重要领域、关键环节推进落实重大改革举措。习近平总书记的重要讲话既有纵横捭阖的全局谋划，又有明确而具体的抓手和落点，引领全面深化改革进入到了一个新的阶段。
          从加强和改善党对全面深化改革统筹领导到抓好中央和地方机构改革；从激发制度活力激活基层经验激励干部作为到加强领导科学统筹狠抓落实；从把新时代改革开放继续推向前进到对标重要领域、关键环节推进落实重大改革举措。习近平总书记的重要讲话既有纵横捭阖的全局谋划，又有明确而具体的抓手和落点，引领全面深化改革进入到了一个新的阶段。
          从加强和改善党对全面深化改革统筹领导到抓好中央和地方机构改革；从激发制度活力激活基层经验激励干部作为到加强领导科学统筹狠抓落实；从把新时代改革开放继续推向前进到对标重要领域、关键环节推进落实重大改革举措。习近平总书记的重要讲话既有纵横捭阖的全局谋划，又有明确而具体的抓手和落点，引领全面深化改革进入到了一个新的阶段。
          从加强和改善党对全面深化改革统筹领导到抓好中央和地方机构改革；从激发制度活力激活基层经验激励干部作为到加强领导科学统筹狠抓落实；从把新时代改革开放继续推向前进到对标重要领域、关键环节推进落实重大改革举措。习近平总书记的重要讲话既有纵横捭阖的全局谋划，又有明确而具体的抓手和落点，引领全面深化改革进入到了一个新的阶段。
        </div>
      </div>
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
      font-size: 16px;
      position: absolute;
      top: 85%;
      left: 50%;
      transform: translateX(-50%);
      color: rgba(255,255,255,0.8);
      .arrow{
        width: 4px;
        height: 40px;
        background-color: #fff;
        border-radius: 2px;
        position: relative;
        margin: 0 auto;
        animation: shinny 1.5s linear 0s infinite;
        &::before, &::after{
          content: '';
          position: absolute;
          width: 20px;
          height: 4px;
          bottom: 2px;
          background-color: #fff;
          border-radius: 2px;
        }
        &::before{
          right: -2px;
          transform: rotate(45deg);
        }
        &::after{
          left: -2px;
          transform: rotate(-45deg);
        }
      }
    }
  }
  #c {
    position: absolute;
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
    color: #aaa;
    font-size: 20px;

    .index-menu-item {
      text-decoration: none;
      font-size: 16px;
      color: #bbb;
      width: 100%;
      background-color: rgba(255, 255, 255, .1);
      border-radius: 5px;
      /*text-align: center;*/
      line-height: 36px;
      position: relative;
      padding-left: 20px;
      &::after{
        width: 10px;
        height: 10px;
        content: '';
        position: absolute;
        border-bottom: 1px solid #bbb;
        border-right: 1px solid #bbb;
        right: 20px;
        top: 50%;
        transform: rotate(-45deg) translateY(-50%);
      }
    }
  }
  .index-content {
    width: 100vw;
    height: 2000px;
    position: absolute;
    top: 100vh;
    z-index: 150;
    .content-head-cover {
      height: 70vh;
      background-image: linear-gradient(to bottom, rgba(255,255,255,0), #fff);
    }
    .content-body {
      background-color: #fff;
      .content-main{
        font-size: 20px;
        line-height: 32px;
        max-width: 980px;
        margin: 0 auto;
      }
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
  @keyframes shinny {
    0%{
      opacity: 0.2;
      transform: translateY(0) scale(1);
    }
    50%{
      opacity: 0.8;
      transform: translateY(5px) scaleX(1.05);
    }
    100%{
      opacity: 0.2;
      transform: translateY(0) scale(1);
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
</style>
