import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home/Home'
import List from '../pages/List/List'
import Look from '../pages/Look/Look'
import Personal from '../pages/Personal/Personal'
import ShopCart from '../pages/ShopCart/ShopCart'
import Login from '../pages/Login/Login'

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
      component: Home,
      meta:{
        isInterlayer: true
      }
    },
    {
      path: '/shopcart',
      component: ShopCart,
      meta:{
        isInterlayer: true
      }
    },
    {
      path: '/look',
      component: Look,
      meta:{
        isInterlayer: true
      }
    },
    {
      path: '/list',
      component: List,
      meta:{
        isInterlayer: true
      }
    },
    {
      path: '/personal',
      component: Personal,
      meta:{
        isInterlayer: true
      }
    },
    {
      path: '/interlayer',
      component: Interlayer,
      meta:{
        isInterlayer: false
      }
    },
    {
      path: '/login',
      component: Login,
      meta:{
        isInterlayer: false
      }
    }

  ]
})
