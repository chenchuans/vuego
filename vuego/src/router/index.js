import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
import Icons from '@/pages/icons/Icons'
import Hot from '@/pages/hot/Hot'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
        path: '/city',
        name: 'City',
        component: City
    },
    {
        path: '/detail/:id',
        name: 'Detail',
        component: Detail
    },
    {
        path: '/hot',
        name: 'Hot',
        component: Hot
    },
    {
        path: '/icons',
        name: 'Icons',
        component: Icons
    }
  ]
})
