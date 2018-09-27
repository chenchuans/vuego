<template>
<div class="container">
          <div class="checkout-addr">
            <div class="page-title-normal">
              <h2 class="page-title-h2"><span>check out</span></h2>
            </div>
            <!-- process step -->
            <div class="check-step">
              <ul>
                <li class="cur"><span>Confirm</span> address</li>
                <li><span>View your</span> order</li>
                <li><span>Make</span> payment</li>
                <li><span>Order</span> confirmation</li>
              </ul>
            </div>

            <!-- address list -->
            <div class="page-title-normal checkout-title">
              <h2><span>Shipping address</span></h2>
            </div>
            <div class="addr-list-wrap">
              <div class="addr-list">
                <ul>
                  <li>
                    <dl>
                      <dt>item.userName</dt>
                      <dd class="address">item.streetName</dd>
                      <dd class="tel">item.tel</dd>
                    </dl>
                    <div class="addr-opration addr-del">
                      <a href="javascript:;" class="addr-del-btn" @click="delAddressConfirm(item.addressId)">
                        <svg class="icon icon-del"><use xlink:href="#icon-del"></use></svg>
                      </a>
                    </div>
                    <div class="addr-opration addr-set-default">
                      <a href="javascript:;" class="addr-set-default-btn" v-if="!item.isDefault" @click="setDefault(item.addressId)"><i>Set default</i></a>
                    </div>
                    <div class="addr-opration addr-default" v-if="item.isDefault">Default address</div>
                  </li>
                  <li class="addr-new">
                    <div class="add-new-inner">
                      <i class="icon-add">
                        <svg class="icon icon-add"><use xlink:href="#icon-add"></use></svg>
                      </i>
                      <p>Add new address</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="shipping-addr-more">
                <a class="addr-more-btn up-down-btn" href="javascript:;" @click="expand" v-bind:class="{'open':limit>3}">
                  more
                  <i class="i-up-down">
                    <i class="i-up-down-l"></i>
                    <i class="i-up-down-r"></i>
                  </i>
                </a>
              </div>
            </div>

            <!-- shipping method-->
            <div class="page-title-normal checkout-title">
              <h2><span>Shipping method</span></h2>
            </div>
            <div class="shipping-method-wrap">
              <div class="shipping-method">
                <ul>
                  <li class="check">
                    <div class="name">Standard shipping</div>
                    <div class="price">Free</div>
                    <div class="shipping-tips">
                      <p>Once shipped，Order should arrive in the destination in 1-7 business days</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="next-btn-wrap">
              <router-link class="btn btn--m btn--red" v-bind:to="{path:'orderConfirm',query:{'addressId':selectedAddrId}}">Next</router-link>
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
