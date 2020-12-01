<!--
 * @Author: zmx
 * @Date: 2020-11-30 10:45:01
 * @LastEditors: zmx
 * @LastEditTime: 2020-12-01 15:13:02
 * @FilePath: /vue-pro/src/components/nav/nav.vue
-->
<template>
  <div id="nav-page">
    <li @click="goToPage" data-type="home">首页</li>
    <li @click="goToPage" data-type="login">登录</li>
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
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'nav-page',
  computed: mapGetters('navModule', [ // 添加了命名空间
    'evenOrOdd'
  ]),
  methods: {
    ...mapActions('navModule', [ // 添加了命名空间
      'increment',
      'decrement',
      'incrementIfOdd',
      'incrementAsync'
    ]),
    goToPage(e) {
      const type = e.target.getAttribute('data-type');
      this.$store.dispatch('goToPage', { $router: this.$router, type })
      // this.$router.push(`/${type}`);
    }
  }
}
</script>