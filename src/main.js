import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import app from './app'
import router from './router'
import store from './store'
import './mock/mockServer'

import 'swiper/dist/css/swiper.min.css'
import loading from './common/images/12.gif'


//声明使用懒加载
Vue.use(VueLazyload, {
  loading
})

new Vue({
  el: '#app',
  render: h => h(app),
  router,
  store,
  loading
})
