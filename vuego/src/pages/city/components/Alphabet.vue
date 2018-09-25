<template>
  <ul class="list">
    <li
      class="item"
      v-for="(item,index) of letters"
      :key="index"
      :ref="item"
      @click="handleLetterClick"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
      cities: Object
  },
  data () {
      return {
          touchStatus: false,
          startY: 0,
          timer: null
      }
  },
  updated () {
      //在updated中更新startY,节省性能,因为是定值，没必要每次touch时获取
      this.startY = this.$refs['A'][0].offsetTop
      //console.log(this.$refs['A'][0])获取A字母的元素
      //e.touches[0]表示手指触碰的信息，第0个表示当前
      //startY表示A字母元素到达父级的高度
  },
  computed: {
      letters () {
          //将传过来的对象的key值赋给新数组
          const letters = []
          for (const i in this.cities) {
             letters.push(i)
          }
          return letters
      }
  },
  methods: {
      handleLetterClick (e) {
        //   console.log(e.target.innerText)
          //发布事件，父组件City监听
          this.$emit('change',e.target.innerText)
      },
      handleTouchStart () {
          this.touchStatus = true
      },
      handleTouchMove (e) {
          if (this.touchStatus) {
              if (this.timer) {
                  clearTimeout(this.timer)
              }
              //利用定时器进行节流，16ms不会影响用户体验，但优化了函数执行频率
              this.timer = setTimeout(() => {
                  const touchY = e.touches[0].clientY - 79
                  //touchY表示当前触摸元素距离父级的高度,20是每个字母高度
                  const index = Math.floor((touchY - this.startY) / 20)
                  //index表示当前手指滑动字母元素的下标
                  if (index >= 0 && index < this.letters.length) {
                      this.$emit('change', this.letters[index])
                  }
                    //当拖动右边字母时，左边也跟着上下滑动
              }, 16)

          }
      },
      handleTouchEnd () {
          this.touchStatus = false
      }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>
