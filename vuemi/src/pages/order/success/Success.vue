<template>
    <div>
      <div class="container">
        <div class="page-title-normal">
          <h2 class="page-title-h2"><span>check out</span></h2>
        </div>
        <!-- 进度条 -->
        <div class="check-step">
          <ul>
            <li class="cur"><span>确认</span> 地址</li>
            <li class="cur"><span>编辑</span> 订单</li>
            <li class="cur"><span>确认</span> 支付</li>
            <li class="cur"><span>订单</span> 成功</li>
          </ul>
        </div>

        <div class="order-create">
          <div class="order-create-pic"><img src="../../../assets/img/ok-2.png" alt=""></div>
          <div class="order-create-main">
            <h3>恭喜！ <br>你的订单已经成功！</h3>
            <p>
              <span>订单ID：</span>
              <span>订单信息：</span>
            </p>
            <div class="order-create-btn-wrap">
              <div class="btn-l-wrap">
                <router-link class="btn btn--m" to="/order/confirm">重新编辑订单</router-link>
              </div>
              <div class="btn-r-wrap">
                <router-link class="btn btn--m" to="/">好的</router-link>
              </div>
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
                orderId:'',
                orderTotal:0
            }
        },
        components:{

        },

        mounted(){


        }
    }
</script>


