/*
 * @Author: zmx
 * @Date: 2020-11-27 14:12:32
 * @LastEditors: zmx
 * @LastEditTime: 2020-12-01 15:01:37
 * @FilePath: /vue-pro/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import router from './router/router'
import Vuex from 'vuex'
import store from './store/store'
Vue.use(Vuex)
Vue.use(Router)

Vue.config.productionTip = false
//获取原型对象上的push函数
const originalPush = Router.prototype.push
//修改原型对象中的push方法
Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
