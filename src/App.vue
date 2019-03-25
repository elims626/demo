<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
@import './assets/css/img/icon_style.less';
@import './assets/css/img/img_style.less';
@import './assets/css/public/font_style.less';
@import './assets/css/public/input_style.less';
@import './assets/css/public/public_style.less';
@import './assets/css/public/border_style.less';
#app {
  width: 100%;
  height: 100%;
}
</style>
