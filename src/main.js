import Vue from 'vue'
import App from './App'
import router from './router'
import Nav from '@/components/shared/Nav'
import VueFire from 'vuefire'

Vue.config.productionTip = false

Vue.use(VueFire)

Vue.component('app-nav', Nav)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
