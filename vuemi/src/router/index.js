import Vue from 'vue'
import Router from 'vue-router'

import Product from '../pages/product/Product'
import Shopping from '../pages/shopping/Shopping'
import Order from '../pages/order/Order'
import Address from '../pages/order/address/Address'
import Confirm from '../pages/order/confirm/Confirm'
import Success from '../pages/order/success/Success'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '商品展示页',
      component: Product
    },
    {
      path: '/shopping',
      name: '购物车页',
      component: Shopping
    },
    {
      path: '/order/',
      name: '订单页(地址选配页)',
      component: Order,
      children: [{
        path: 'address',
        name: '地址选配页',
        component: Address
      },
      {
        path: 'confirm',
        name: '确认订单页',
        component: Confirm
      },
      {
        path: 'success',
        name: '订单成功页',
        component: Success
      }]
    }
  ]
})
