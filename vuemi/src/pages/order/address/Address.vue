<template>
<div class="container">
          <div class="checkout-addr">
            <div class="page-title-normal">
              <h2 class="page-title-h2"><span>订单提交</span></h2>
            </div>
            <!-- 步骤进度条 -->
            <div class="check-step">
              <ul>
                <li class="cur"><span>确认</span> 地址</li>
                <li><span>编辑</span> 订单</li>
                <li><span>确认</span> 支付</li>
                <li><span>订单</span> 成功</li>
              </ul>
            </div>

            <!-- address list -->
            <div class="page-title-normal checkout-title">
              <h2><span>选择地址</span></h2>
            </div>
            <div class="addr-list-wrap">
              <div class="addr-list">
                <ul>
                  <li>
                    <dl>
                      <dt>用户名</dt>
                      <dd class="address">地址信息</dd>
                      <dd class="tel">电话</dd>
                    </dl>
                    <div class="addr-opration addr-del">
                      <a href="javascript:;" class="addr-del-btn" >
                        <svg class="icon icon-del"><use xlink:href="#icon-del"></use></svg>
                      </a>
                    </div>
                    <div class="addr-opration addr-set-default">
                      <a href="javascript:;" class="addr-set-default-btn" ><i>设置默认地址</i></a>
                    </div>
                    <div class="addr-opration addr-default">默认地址</div>
                  </li>
                  <li class="addr-new">
                    <div class="add-new-inner">
                      <i class="icon-add">
                        <svg class="icon icon-add"><use xlink:href="#icon-add"></use></svg>
                      </i>
                      <p>添加新的地址</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="shipping-addr-more">
                <a class="addr-more-btn up-down-btn" href="javascript:;" >
                  更多
                  <i class="i-up-down">
                    <i class="i-up-down-l"></i>
                    <i class="i-up-down-r"></i>
                  </i>
                </a>
              </div>
            </div>

            <!-- shipping method-->
            <div class="page-title-normal checkout-title">
              <h2><span>地址信息</span></h2>
            </div>
            <div class="shipping-method-wrap">
              <div class="shipping-method">
                <ul>
                  <li class="check">
                    <div class="name">Standard shipping</div>
                    <div class="price">Free</div>
                    <div class="shipping-tips">
                      <p>订单确认后一般在一个到七个工作日送达</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="next-btn-wrap">
              <router-link class="btn btn--m le"
              to="/shopping">返回购物车</router-link>
              <router-link
              to="/order/confirm"
              class="btn btn--m btn--red">编辑地址</router-link>
            </div>
          </div>
        </div>
</template>
<style>
</style>
<script>
  import axios from 'axios'
  export default{
    data(){
      return{
        limit:3,
          checkIndex:0,
          selectedAddrId:'',
          addressList:[],
          isMdShow:false,
          addressId:''
          }
      }
  }

</script>
<style scoped>
.le{
  float: left;
}

</style>
