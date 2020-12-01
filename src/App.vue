<!--
 * @Author: zmx
 * @Date: 2020-11-27 14:12:32
 * @LastEditors: zmx
 * @LastEditTime: 2020-11-30 10:45:32
 * @FilePath: /vue-pro/src/App.vue
-->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  created: () => {
    console.log('route name------1')
  },
  mounted: () => {
    console.log('route name------2')
  },
  methods: {
  }
}
</script>
