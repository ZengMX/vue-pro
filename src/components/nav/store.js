/*
 * @Author: zmx
 * @Date: 2020-12-01 14:32:45
 * @LastEditors: zmx
 * @LastEditTime: 2020-12-01 15:12:13
 * @FilePath: /vue-pro/src/components/nav/store.js
 */
const state = {
  count: 0
}
const mutations = {
  increment (state) {
    state.count++
  },
  decrement (state) {
    state.count--
  },
  resetNum (state) {
    state.count = 100
  }
}
const actions = {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
  incrementIfOdd ({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit('increment')
    }
  },
  incrementAsync ({ commit }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 1000)
    })
  },
  goToPage ({ commit }, { $router, type }) {
    $router.push(`/${type}`)
    return commit('resetNum')
  }
}
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? '偶数' : '奇数'
}
const navModule = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

export default navModule
