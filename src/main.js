/* 这是一个入口文件 */
import Vue from 'vue'

import store from './store/store.js' //全局中引入vuex

import App from './App.vue'


new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
