import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home/Home'
import List from '../pages/List/List'
import Look from '../pages/Look/Look'
import Personal from '../pages/Personal/Personal'
import ShopCart from '../pages/ShopCart/ShopCart'

import Interlayer from '../pages/Interlayer/Interlayer'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/interlayer'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/shopcart',
      component: ShopCart
    },
    {
      path: '/look',
      component: Look
    },
    {
      path: '/list',
      component: List
    },
    {
      path: '/personal',
      component: Personal
    },
    {
      path: '/interlayer',
      component: Interlayer
    }

  ]
})
