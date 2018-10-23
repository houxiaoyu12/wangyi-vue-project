import Vue from 'vue'
import app from './app'
import router from './router'
import store from './store'
import './mock/mockServer'

import 'swiper/dist/css/swiper.min.css'

new Vue({
  el: '#app',
  render: h => h(app),
  router,
  store
})
