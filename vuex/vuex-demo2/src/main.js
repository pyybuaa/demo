import Vue from 'vue'
import App from './App.vue'

import store from './store/index.js'

new Vue({
  store,///////////////一定不要忘了配置，否则拿不到信息//////////！！！！
  el: '#app',
  render: h => h(App)
})
