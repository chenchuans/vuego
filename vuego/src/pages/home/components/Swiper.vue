<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of this.swiperList" :key="item.id">
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
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      //假轮播图数据，其实需要父组件传入

    }
  },
  computed: {
    showSwiper () {
      return this.swiperList.length
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


