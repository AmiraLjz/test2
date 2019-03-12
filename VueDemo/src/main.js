/*
入口JS
 */
import Vue from 'vue'
import App from './App.vue'
import Store from './store'

import './base.css'

// 创建vm
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  store
})
