import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//component中的函数为异步组件形式，按需加载节省性能
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/home/Home')
    },
    {
        path: '/city',
        name: 'City',
        component: () => import('@/pages/home/City')
    },
    {
        path: '/detail/:id',
        name: 'Detail',
        component: () => import('@/pages/home/Detail')
    },
    {
        path: '/hot',
        name: 'Hot',
        component: () => import('@/pages/home/Hot')
    },
    {
        path: '/icons',
        name: 'Icons',
        component: () => import('@/pages/home/Icons')
    }
  ]
})
