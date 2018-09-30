<template>

<div class="accessory-result-page accessory-page">
  <div class="container">
    <div class="filter-nav">
      <span class="sortby">排序:</span>
      <a href="javascript:void(0)" class="filterby ">升序</a>
      <a href="javascript:void(0)" class="">降序</a>
    </div>
    <div class="accessory-result">
      <!-- filter -->
      <div class="filter stopPop" id="filter">
        <dl class="filter-price">
          <dt>价格区间:</dt>
          <dd><a href="javascript:void(0)">All</a></dd>
          <dd><a href="javascript:void(0)">0.00 - 100.00</a></dd>
          <dd><a href="javascript:void(0)">100.00 - 500.00</a></dd>
          <dd><a href="javascript:void(0)">500.00 - 1000.00</a></dd>
          <dd><a href="javascript:void(0)">1000.00 - 2000.00</a></dd>
        </dl>
      </div>

      <!-- search result accessories list -->
      <div class="accessory-list-wrap">
        <div class="accessory-list col-4">
          <ul>
            <li v-for="item in productList"
            :key="item.productId"
            >
              <div class="pic">
                <a href="#"><img v-lazy="'../../assets/img/'+item.productImage"  alt=""></a>
              </div>
              <div class="main">
                <div class="name">{{item.productName}}</div>
                <div class="price">￥{{item.salePrice}}.00</div>
                <div class="btn-area">
                  <a href="javascript:;"
                  @click="goShopping(item.productId)"
                  class="btn btn--m">加入购物车</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      productList: []
    }
  },
  computed: {

  },
  methods: {
    async getProductList () {
      //获取商品列表数据
      let {data} = await axios.get('/goods');
      this.productList = data.result.list[0].list;

    },
    goShopping (productId) {
      //将商品添加购物车
      let isLogin = this.$store.state.val;
      let num = 0;
      if (isLogin === '' || isLogin == 'Login') {
        alert('请先登录,否则无法加入到购物车中!');
      } else {
        //已经登录,给小购物车添加徽标,用到vuex传数据
        this.$store.commit('handleIconNum', ++num)
      }
    }
  },
  mounted () {
    this.getProductList()
  }
}
</script>
<style scoped>
  .container{
    background: #f5f7fc;
    padding: 30px;
  }
  .filter-nav{
    height: 60px;
    background: #fff;
    font: 18px/60px "黑体";
    text-indent: 1000px;
  }
  .filterby{
    color: #f28f23;
    font-weight: bold;
  }
  .filter{
    float: left;

    width: 200px;
    margin-top: 30px;
    font: 600 16px/26px "微软雅黑";
  }
   .filter a{
    display: inline-block;
    text-indent: 10px;
    margin: 18px 0;
  }
   .filter a:hover{
     color: #ee7a23;
     border-left: 2px solid #ee7a23;
   }
   .click{
     color: #ee7a23;
     border-left: 2px solid #ee7a23;
   }
  .accessory-list-wrap{
    float: right;
    width: 1010px;
    margin-top: 30px;
    margin-right: -10px;

  }
  .accessory-list-wrap li{
    float: left;
    width: 235px;
    margin-left: 15px;
    margin-bottom: 15px;
    height: 400px;
    border: 2px solid #e9e9e9;
    background: #fff;
  }
  .pic{
    height: 240px;
  }
  .name{
    font: 400 14px/40px "宋体";
    text-indent: 10px;
  }
  .price{
    color: #d1434a;
    font: 600 18px/50px "微软雅黑";
    text-indent: 10px;
  }
  .btn{
    display: inline-block;
    width: 214px;
    margin-left: 10px;
  }
</style>
