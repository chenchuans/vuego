<template>

<div class="accessory-result-page accessory-page">
  <div class="container">
    <div class="filter-nav">
      <span class="sortby">排序:</span>
      <a href="javascript:void(0)"
      v-for="(item,index) in sortItem"
      :key="index"
      @click="handleSort(index)"
      :class="{filterby: item.itemStatus}">
      {{item.itemName}}</a>
    </div>
    <div class="accessory-result">
      <!-- filter -->
      <div class="filter stopPop" id="filter">
        <dl class="filter-price">
          <dt>价格区间:</dt>
          <dd
          v-for="(item, index) in priceFilter"
          :key="index"
          @click="handlePrice(item, index)"
          ><a href="javascript:void(0)"
          :class="{active: item.itemStatus}"
          >
          {{item.startPrice}} - {{item.endPrice}}</a></dd>

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
                <a href="#"><img v-lazy="'../../../static/img/'+item.productImage"></a>
              </div>
              <div class="main">
                <div class="name">{{item.productName}}</div>
                <div class="price">￥{{item.salePrice}}.00</div>
                <div class="btn-area">
                  <a href="javascript:;"
                  @click="addCart(item.productId)"
                  class="btn btn--m">加入购物车</a>
                </div>
              </div>
            </li>

          </ul>
        </div>
        <div class="pages">
          <Page
          :page-size="pageSize"
          @on-change="handlePage"
          :total="productList.length"/></div>

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
      productList: [],
      page: 1,//当前展示的页数
      pageSize: 8,
      sortFlag:true,
      busy:true,
      loading:false,
      mdShow:false,
      mdShowCart:false,
      sortItem: [{
        itemName: '升序',
        itemStatus: true
      }, {
        itemName: '降序',
        itemStatus: false
      }],
      priceFilter:[
        {
            startPrice:'all',
            endPrice:'',
            itemStatus: true
        },
        {
            startPrice:'0.00',
            endPrice:'100.00',
            itemStatus: false
        },
        {
          startPrice:'100.00',
          endPrice:'500.00',
          itemStatus: false
        },
        {
          startPrice:'500.00',
          endPrice:'1000.00',
          itemStatus: false
        },
        {
          startPrice:'1000.00',
          endPrice:'5000.00',
          itemStatus: false
        }
      ],
      priceChecked:'all',
    }
  },
  mounted () {
    this.getProductList()
  },
  computed: {

  },
  methods: {
    async getProductList () {
      //向后端发送请求,获取商品列表数据
      let param = {
        page: this.page,
        pageSize: this.pageSize,
        sort: this.sortFlag?1:-1,
        priceLevel: this.priceChecked
      };
      console.log(data)
      let {data} = await axios.get('/goods/list');
      // this.productList = data.result.list[0].list;
      console.log(data)
    },
    getCart (productId) {
      //let {data} = await
      console.log(productId)
      axios.get("/goods/addCart",{productId:productId
      }).then((res) => {
        if(res.status == 0){//插入成功
          console.log(res)
        }else{
          console.log(res.msg)
        }
      });

      console.log(1+data)

    },
    addCart (productId) {
      //将商品添加购物车
      let isLogin = this.$store.state.val;
      let num = 0;
      if (isLogin === '' || isLogin == 'Login') {
        alert('请先登录,否则无法加入到购物车中!');
      } else {
        //已经登录,给小购物车添加徽标,用到vuex传数据
        this.$store.commit('handleIconNum', ++num);
        //发送post请求，向后端传递添加后的商品id
        this.getCart(productId);
      }
    },

    handleSort (index) {//处理排序问题
    if (!this.sortItem[index].itemStatus) {//如果和上次点击同一个，不处理
      this.sortItem.forEach((item) => {
        item.itemStatus = false;
      })
      this.sortItem[index].itemStatus = true;
      this.sort = index === 0 ? 1 : -1 ;
      //1为升序,0为降序
      this.getProductList()//向后端发请求
    }
    },
    handlePage (pages) {
      //这里的函数是iview的分页组件提供的，不用判断和上次点击施法相同
      //改变页数时重新获取数据
      this.page = pages;
      this.getProductList();
    },
    handlePrice (priceLevel, index) {
      //根据价格区间重新发请求
      //和上次点击同一个，不执行操作
      if (!this.priceFilter[index].itemStatus) {
        this.priceFilter.forEach((item) => {
        item.itemStatus = false;
      })
      this.priceFilter[index].itemStatus = true;
      let level = priceLevel.startPrice;

      switch (level) {
        case '0.00':
          this.priceChecked = '1'
          break;
        case '100.00':
          this.priceChecked = '2'
          break;
        case '500.00':
          this.priceChecked = '3'
          break;
        case '1000.00':
          this.priceChecked = '4'
          break;
        default:
          this.priceChecked = 'All'
          break;
      }
      this.getProductList()
      }
    }
  },

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
    .filter .active{
     color: #ee7a23;
     border-left: 2px solid #ee7a23;
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
    position: relative;
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
  .pic img{
    width: 230px;
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
  .pages{

    margin: 30px 0;
  }
</style>
