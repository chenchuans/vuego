<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <!-- 加上border-bottom是为了加上1px的边框 -->
            <router-link
                tag="li"
                class="item border-bottom"
                v-for="item of this.weekendList"
                :key="item.id"
                :to="'/detail/' + item.id"
            >
            <div class="item-img-wrapper">
            <img :src="item.imgUrl"  class="item-img">
            </div>
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>

                </div>
            </router-link>
        </ul>
    </div>
</template>
<script>
// !!!  注意教程中的热销推荐模块现在被更改了，需要换成现有的本周热门榜单
export default {
    name: 'HomeRecommend',
    props: {
        weekendList: Array
    },
    data () {
        return {

        }
    }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .title
        margin-top: .2rem
        line-height: .8rem
        background: #eee
        text-indent: .2rem
    .item-img-wrapper
        padding-bottom: 37.09%
        overflow: hidden
        height: 0
        .item-img
            width: 100%
    .item-info
        padding: .1rem
        .item-title
            line-height: .54rem
            font-size: .32rem
            ellipsis()
        .item-desc
            line-height: .4rem
            color: #ccc
            ellipsis()
</style>

