/*
 * @Author: zmx
 * @Date: 2020-12-01 14:26:28
 * @LastEditors: zmx
 * @LastEditTime: 2020-12-01 15:01:25
 * @FilePath: /vue-pro/src/store/store.js
 */
import Vuex from 'vuex'
import Vue from 'vue'
import navModule from '../components/nav/store'
Vue.use(Vuex)
const state = {}
const modules = {
  navModule
}
const store = new Vuex.Store({
  strict: true,
  state,
  modules: {
    ...modules
  }
})
export default store
