// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import iview from 'iview'
import vueLazyload from 'vue-lazyload'
import 'iview/dist/styles/iview.css'
import './assets/css/base.css'
import './assets/css/checkout.css'
Vue.use(iview)
Vue.use(vueLazyload)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
