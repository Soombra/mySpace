<template>
  <div class="index">
    <div id="index-bg" :class="bgSlide && 'slide-up'">
      <canvas id="c"></canvas>
      <!--<div class="cover"></div>-->
      <div :class="['index-menu', bgSlide ? 'fade-out' : 'fade-in']">
        文章列表
        <nuxt-link class="index-menu-item" index- v-for="(item, index) in tabs" :to="item.url" :key="index">
          {{item.text}}
        </nuxt-link>
      </div>
      <div :class="['about-me', bgSlide ? 'fade-out' : 'fade-in']">
        <!--<p>下滑了解我</p>-->
        <div class="arrow"></div>
      </div>
    </div>
    <div id="content" :class="['index-content', goUp ? 'slide-up' : 'slide-down']" v-if="showContent">
      <div class="content-head-cover"></div>
      <div class="content-body">
        <div class="content-main">
          <h2>关于我</h2>
          <div class="my-info">
            <img class="my-info-avatar" src="http://medias.wuerkang.com/738b9d8df7258e2a37fe8145c167895.jpg" alt="">
            <div class="my-info-text">
              哈喽，我是这个网站的主人，一名90后北漂。下过建筑工地，做过房地产成本，现在是一名奋进在前端路上的开发者。 <br/><br/>
              我对自己的评价是一个“有冒险精神的宅男”，喜欢独处的时光，同时也偏爱户外和运动。周末会和朋友一起去京郊爬爬山，也曾经骑行走完了川藏线，环过青海湖。对我来说，人生不止一个标签，体验新鲜事物永远是我最大的爱好。
              <br/><br/>
              这里是我总结分享技术和记录生活点滴的地方，希望能通过文字认识到更多的朋友。如果想和我探讨问题，欢迎通过下列方式联系我。 <br/><br/>
              <span class="tip">ps.如果你也玩守望先锋，我们可以成为朋友哦！</span>
            </div>
          </div>
          <h2>足迹</h2>
          <div id="map"></div>
          <h2>联系我</h2>
          <div class="contact">
            <div class="contact-icons">
              <div class="icon-mail" @click="contactType = 'mail'"></div>
              <div class="icon-wechat" @click="contactType = 'wechat'"></div>
            </div>
            <div class="contact-content">
              <template v-if="contactType === 'mail'">wu772850334@163.com</template>
              <template v-if="contactType === 'wechat'">
                <img src="~/static/img/wechat_code.jpeg" alt="">
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {home} from '~/apis'
  import snow from '~/static/js/snow2'
  import {isMobile} from "~/utils"
  import moment from 'moment'

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
          // }, {
          //   text: '生活',
          //   url: '/essay'
        }],
        showContent: false,
        goUp: false,
        bgSlide: false,
        contactType: 'wechat'
      }
    },
    head () {
      return {
        title: '康哥的个人空间',
        meta: [
          {hid: 'keywords', name: 'keywords', content: '技术分享,户外游记,生活随笔'}
        ]
      }
    },
    methods: {
      handleSlide () {
        if (!this.showContent) {
          this.showContent = true
          this.goUp = true
          this.bgSlide = true
          this.$nextTick(() => {
            this.mapInit()
          })
          sliding = true
          setTimeout(() => {
            sliding = false
          }, 400)
        } else {

          this.goUp = false
          this.bgSlide = false
          sliding = true
          setTimeout(() => {
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
        let contentNodeHeight = document.getElementById("index-bg").offsetHeight
        document.onscroll = (e) => {
          let scrollHeight = document.documentElement.scrollTop || document.body.scrollTop
          if (scrollHeight + windowHeight >= contentNodeHeight && !this.showContent && scrollHeight - scrollTop > 0 && !sliding) {
            this.handleSlide()
          } else if (scrollHeight + windowHeight < contentNodeHeight && this.showContent && scrollHeight - scrollTop < 0 && !sliding) {
            this.handleSlide()
          }
          scrollTop = scrollHeight
        }
      },
      mapInit () {
        var myChart = echarts.init(document.getElementById('map'));
        home.queryFootprints().then(({data}) => {
          var option = {
            tooltip: {
              trigger: 'item',
              formatter (data) {
                return `${data.name} <br/> ${moment(data.date).format('YYYY.MM.DD')}`
              },
            },
            geo: {
              map: 'china',
              label: {
                emphasis: {
                  show: false
                }
              },
              roam: true,
              scaleLimit: {
                min: 1,
                max: 3
              },
              itemStyle: {
                normal: {
                  areaColor: '#ccc',
                  borderColor: '#888'
                },
                emphasis: {
                  areaColor: '#ccc'
                }
              }
            },
            series: [{
              name: '地址',
              type: 'scatter',
              coordinateSystem: 'geo',
              data: data,
              symbolSize: 8,
            }]
          }
          myChart.setOption(option)
        }).catch(err => {console.log(err)})
      }
    },
    layout: 'home',
    asyncData () {
    },
    mounted () {
      if (!isMobile()) {
        snow()
      }
      this.slideInit()
    }
  }
</script>

<style lang="scss">
  #index-bg {
    width: 100%;
    height: 100.5vh;
    background-image: url('http://medias.wuerkang.com/bg.jpeg');
    background-size: cover;
    background-position: 0 0;
    transition: all 0.4s ease-out 0s;

    #c {
      width: 100%;
    }

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
      color: rgba(255, 255, 255, 0.8);

      .arrow {
        width: 4px;
        height: 40px;
        background-color: #fff;
        border-radius: 2px;
        position: relative;
        margin: 0 auto;
        animation: shinny 1.5s linear 0s infinite;

        &::before, &::after {
          content: '';
          position: absolute;
          width: 20px;
          height: 4px;
          bottom: 2px;
          background-color: #fff;
          border-radius: 2px;
        }

        &::before {
          right: -2px;
          transform: rotate(45deg);
        }

        &::after {
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

      &:hover {
        background-color: rgba(255, 255, 255, 0.2);
      }

      &::after {
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
    width: 100%;
    position: absolute;
    top: 100vh;
    z-index: 150;

    .content-head-cover {
      height: 70vh;
      background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #fff);
    }

    .content-body {
      padding-bottom: 50px;
      background-color: #fff;
      overflow: hidden;

      .content-main {
        max-width: 980px;
        margin: 0 auto;
        padding: 0 20px;

        h2 {
          font-size: 30px;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .contact {
          .contact-icons {
            height: 80px;
            max-width: 500px;
            margin: 50px auto;
            display: flex;
            justify-content: space-around;

            div {
              width: 50px;
              height: 50px;
              background-position: center;
              background-size: contain;
              background-repeat: no-repeat;
              cursor: pointer;
            }

            .icon-mail {
              background-image: url("../static/img/mail.png");
            }

            .icon-wechat {
              background-image: url("../static/img/wechat.png");
            }
          }

          .contact-content {
            display: flex;
            justify-content: center;
            height: 100px;

            img {
              width: 100px;
              height: 100px;
            }
          }
        }
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
    0% {
      opacity: 0.2;
      transform: translateY(0) scale(1);
    }
    50% {
      opacity: 0.8;
      transform: translateY(5px) scaleX(1.05);
    }
    100% {
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

  .my-info {
    display: flex;
    margin-bottom: 60px;

    .my-info-avatar {
      flex-shrink: 0;
      width: 300px;
      height: 400px;
      object-fit: cover;
      object-position: center;
      border-radius: 5px;
    }

    .my-info-text {
      flex-grow: 1;
      margin-left: 20px;
      font-size: 20px;
      line-height: 32px;

      .tip {
        font-size: 16px;
      }
    }
  }

  #map {
    width: 80%;
    height: 600px;
    margin: 0 auto;
  }

  @media screen and (max-width: 768px) {
    .my-info {
      flex-direction: column;

      .my-info-avatar {
        width: 100%;
        height: auto;
        margin-bottom: 20px;
      }
    }
    #map {
      height: 300px;
    }
  }
</style>
