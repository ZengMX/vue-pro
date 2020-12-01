/*
 * @Author: zmx
 * @Date: 2020-12-01 16:23:18
 * @LastEditors: zmx
 * @LastEditTime: 2020-12-01 16:23:38
 * @FilePath: /vue-pro/src/components/nav/index.js
 */
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
      console.log('+++++', this.$store)
      this.$store.dispatch('navModule/goToPage', { $router: this.$router, type })
      // this.$router.push(`/${type}`);
    }
  }
}
