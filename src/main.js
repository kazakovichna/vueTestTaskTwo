import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from "firebase";

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyBAK457KcEijLEI8s8rViiM812CAfJm5AQ",
  authDomain: "testtasktwo.firebaseapp.com",
  projectId: "testtasktwo",
  storageBucket: "testtasktwo.appspot.com",
  messagingSenderId: "578030469145",
  appId: "1:578030469145:web:b4b065bfaa402a91ceaa88"
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
