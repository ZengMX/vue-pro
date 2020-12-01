/*
 * @Author: zmx
 * @Date: 2020-11-27 17:15:16
 * @LastEditors: zmx
 * @LastEditTime: 2020-12-01 14:13:32
 * @FilePath: /vue-pro/src/router/router.js
 */
import Router from 'vue-router'
import Home from '../components/home/home'
import Login from '../components/login/login'
import Nav from '../components/nav/nav'
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Nav,
    },
    {
      path : '/home', 
      name : 'home',
      component :  Home
    },
    {
      path : '/login',
      name : 'login',
      component :  Login 
    }
  ]
})
