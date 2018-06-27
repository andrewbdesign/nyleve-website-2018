import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import { store } from './store'
import normalize from 'normalize.css'
import bulma from 'bulma'
import firebase from 'firebase'

import Nav from '@/components/shared/Nav'
Vue.component('app-nav', Nav)
Vue.use(Vuex)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  normalize,
  bulma,
  router,
  store,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyBq-FuhtF7Kaq-JExoRBssmvMTtI1Nd6hU",
      authDomain: "nyleve-music-56656.firebaseapp.com",
      databaseURL: "https://nyleve-music-56656.firebaseio.com",
      projectId: "nyleve-music-56656",
      storageBucket: "gs://nyleve-music-56656.appspot.com",
      messagingSenderId: "48969799072"
    })
    this.$store.dispatch('loadPosts')
    this.$store.dispatch('loadVideos')
    this.$store.dispatch('loadSongs')
    this.$store.dispatch('loadBio')
    this.$store.dispatch('loadEpk')
    this.$store.dispatch('loadTours')
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // this.$store.dispatch('autoSignin', user)
        // this.$store.dispatch('loadUserInfo')
        // redirect to home page
      }
    })
  }
})
