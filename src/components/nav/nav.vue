<!--
 * @Author: zmx
 * @Date: 2020-11-30 10:45:01
 * @LastEditors: zmx
 * @LastEditTime: 2020-12-01 16:24:08
 * @FilePath: /vue-pro/src/components/nav/nav.vue
-->
<template>
  <div id="nav-page">
    <!-- <li @click="goToPage" data-type="home">首页</li>
    <li @click="goToPage" data-type="login">登录</li> -->
    <li>
      <router-link to="/home">首页</router-link>
    </li>
    <li>
      <router-link to="/login">登录</router-link>
    </li>
    <div>
      Clicked: {{ $store.state.navModule.count }} times, count is {{ evenOrOdd }}.
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="incrementIfOdd">Increment if odd</button>
      <button @click="incrementAsync">Increment async</button>
    </div>
  </div>
</template>

<script>
import nav from './index'
export default nav
</script>