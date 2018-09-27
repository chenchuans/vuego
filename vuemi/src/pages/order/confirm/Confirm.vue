<template>
  <div>
    <div class="container">
      <div class="checkout-order">
        <!-- process step -->
        <div class="check-step">
        <ul>
          <li class="cur"><span>确认</span> 地址</li>
          <li class="cur"><span>编辑</span> 订单</li>
          <li><span>确认</span> 支付</li>
          <li><span>订单</span> 成功</li>
        </ul>
        </div>

        <!-- order list -->
        <div class="page-title-normal checkout-title">
          <h2><span>Order content</span></h2>
        </div>
        <div class="item-list-wrap confirm-item-list-wrap">
          <div class="cart-item order-item">
            <div class="cart-item-head">
              <ul>
                <li>订单内容</li>
                <li>价格</li>
                <li>Quantity</li>
                <li>Subtotal</li>
              </ul>
            </div>
            <ul class="cart-item-list">
              <li>
                <div class="cart-tab-1">
                  <div class="cart-item-pic">
                    <img >
                  </div>
                  <div class="cart-item-title">
                    <div class="item-name">商品名称</div>

                  </div>
                </div>
                <div class="cart-tab-2">
                  <div class="item-price">商品价格</div>
                </div>
                <div class="cart-tab-3">
                  <div class="item-quantity">
                    <div class="select-self">
                      <div class="select-self-area">
                        <span class="select-ipt">×商品个数</span>
                      </div>
                    </div>
                    <div class="item-stock item-stock-no">In Stock</div>
                  </div>
                </div>
                <div class="cart-tab-4">
                  <div class="item-price-total">选中总价</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!-- Price count -->
        <div class="price-count-wrap">
          <div class="price-count">
            <ul>
              <li>
                <span>Item subtotal:</span>
                <span>1</span>
              </li>
              <li>
                <span>Shipping:</span>
                <span>2</span>
              </li>
              <li>
                <span>Discount:</span>
                <span>3</span>
              </li>
              <li>
                <span>Tax:</span>
                <span>4</span>
              </li>
              <li class="order-total-price">
                <span>Order total:</span>
                <span>5</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="order-foot-wrap">
          <div class="prev-btn-wrap">
            <router-link class="btn btn--m" to="/order/address">重新选择地址</router-link>
          </div>
          <div class="next-btn-wrap">
            <router-link
            tag="button"
            class="btn btn--m btn--red"
            to="/order/success"
            >去支付</router-link>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import axios from 'axios'
  export default{
      data(){
          return{
              shipping:100,
              discount:200,
              tax:400,
              subTotal:0,
              orderTotal:0,
              cartList:[]
          }
      },
      mounted(){

      },
      components:{
      },
      methods:{
      }
  }
</script>
