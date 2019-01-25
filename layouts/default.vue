<template>
  <div class="body">
    <ul class="nav nav-tabs fixed-nav">
      <li role="presentation"><nuxt-link to="/">home</nuxt-link></li>
      <li role="presentation"><nuxt-link to="/page1">page1</nuxt-link></li>
      <li role="presentation"><nuxt-link to="/page2">page2</nuxt-link></li>
      <li role="presentation"><nuxt-link to="/page3">page3</nuxt-link></li>
    </ul>
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.body{
  padding-top: 50px;
}
.fixed-nav{
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
