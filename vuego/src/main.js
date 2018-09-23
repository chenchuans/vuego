

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
//vue中的轮播图第三方插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import fastClick from 'fastclick'

import 'swiper/dist/css/swiper.css'
import 'styles/border.css'
import 'styles/reset.css'
import 'styles/iconfont.css'

//添加全局默认参数
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  fastClick,
  components: { App },
  template: '<App/>'
})
