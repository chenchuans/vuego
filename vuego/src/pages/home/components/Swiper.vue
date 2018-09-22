<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />

      </swiper-slide>
      <!-- 下面div用来显示轮播图下方的小点 -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
//   props: {
//     list: Array
//   },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      //假轮播图数据，其实需要父组件传入
      list: [{
          id: '1',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1809/9b/8f79dbd1e0941302.jpg_750x200_55829659.jpg'
      },
      {
          id: '2',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1809/9b/8f79dbd1e0941302.jpg_750x200_55829659.jpg'
      },
      {
          id: '3',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1809/9b/8f79dbd1e0941302.jpg_750x200_55829659.jpg'
      }
      ]
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  /* 当style声明scoped时，只对当前组件样式产生影响，下面>>>表示样式穿透，可以对子组件样式产生作用 */
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    /* 宽高比例始终为31.25% */
    padding-bottom: 31.25%
    background: #eee
    .swiper-img
      width: 100%
</style>


