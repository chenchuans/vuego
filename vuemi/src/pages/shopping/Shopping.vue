<template>
    <div>
      <div class="accessory-result-page accessory-page">
        <div class="container">
          <div class="filter-nav">
            <span class="sortby">Sort by:</span>
            <a href="javascript:void(0)" class="default cur">Default</a>
            <a href="javascript:void(0)" class="price" >Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
            <a href="javascript:void(0)" class="filterby stopPop" >Filter by</a>
          </div>
          <div class="accessory-result">
            <!-- filter -->
            <div class="filter stopPop" id="filter" >
              <dl class="filter-price">
                <dt>Price:</dt>
                <dd><a href="javascript:void(0)" >全部</a></dd>
                <dd >
                  <a href="javascript:void(0)" >item.startPrice - item.endPrice</a>
                </dd>
              </dl>
            </div>

            <!-- search result accessories list -->
            <div class="accessory-list-wrap">
              <div class="accessory-list col-4">
                <ul>
                  <li >
                    <div class="pic">
                      <a href="#"><img  alt=""></a>
                    </div>
                    <div class="main">
                      <div class="name">商品名称</div>
                      <div class="price">商品价格</div>
                      <div class="btn-area">
                        <a href="javascript:;" class="btn btn--m" >加入购物车</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="view-more-normal"
                   v-infinite-scroll="loadMore"
                   infinite-scroll-disabled="busy"
                   infinite-scroll-distance="20">
                <img src="../../assets/loading/loading-spinning-bubbles.svg"
                v-show="loading">
              </div>
            </div>
          </div>
        </div>
      </div>
      <modal v-bind:mdShow="mdShow" v-on:close="closeModal">
          <p slot="message">
             请先登录,否则无法加入到购物车中!
          </p>
          <div slot="btnGroup">
              <a class="btn btn--m" href="javascript:;" >关闭</a>
          </div>
      </modal>
      <modal v-bind:mdShow="mdShowCart" v-on:close="closeModal">
        <p slot="message">
          <svg class="icon-status-ok">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-status-ok"></use>
          </svg>
          <span>加入购物车成!</span>
        </p>
        <div slot="btnGroup">
          <a class="btn btn--m" href="javascript:;">继续购物</a>
          <router-link class="btn btn--m btn--red" href="javascript:;" to="/cart">查看购物车</router-link>
        </div>
      </modal>
      <div class="md-overlay" v-show="overLayFlag" ></div>
      <nav-footer></nav-footer>
    </div>
</template>
<script>

    import Modal from '../../common/Modal'
    import axios from 'axios'
    export default{
        data(){
            return {
                goodsList:[],
                sortFlag:true,
                page:1,
                pageSize:8,
                busy:true,
                loading:false,
                mdShow:false,
                mdShowCart:false,
                priceFilter:[
                  {
                      startPrice:'0.00',
                      endPrice:'100.00'
                  },
                  {
                    startPrice:'100.00',
                    endPrice:'500.00'
                  },
                  {
                    startPrice:'500.00',
                    endPrice:'1000.00'
                  },
                  {
                    startPrice:'1000.00',
                    endPrice:'5000.00'
                  }
                ],
                priceChecked:'all',
                filterBy:false,
                overLayFlag:false
            }
        },
        mounted(){
        },
        components:{
          Modal
        },
        methods:{
        }
    }
</script>
