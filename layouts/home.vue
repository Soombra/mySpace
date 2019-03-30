<template>
  <div class="bg">
    <canvas id="c"></canvas>
    <div class="cover">
      <nuxt/>
    </div>
  </div>
</template>
<script>
  import snow from '~/static/js/snow2'
  export default {
    data () {
      return {}
    },
    head(){
      return {
        script: [
          {src: '/js/snow1.js'}
        ]
      }
    },
    methods: {},
    mounted () {
      snow()
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
  #c{
    position: absolute;
  }
  .bg{
    width: 100vw;
    height: 100vh;
    background-image: url('../static/img/bg.jpeg');
    background-size: cover;
    background-position: center;
    .cover{
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.1);
    }
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }
</style>
