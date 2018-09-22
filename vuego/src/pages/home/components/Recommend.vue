<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <!-- 加上border-bottom是为了加上1px的边框 -->
            <router-link
                tag="li"
                class="item border-bottom"
                v-for="item of list"
                :key="item.id"
                :to="'/detail/' + item.id"
            >
            <img :src="item.imgUrl"  class="item-img">
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
                <button class="item-button">查看详情</button>
                </div>
            </router-link>
        </ul>
    </div>
</template>
<script>
// !!!  注意教程中的热销推荐模块现在被更改了，需要换成现有的本周热门榜单
export default {
    name: 'HomeRecommend',
    data () {
        return {
            list: [{
                id: '3322',
                title: 'lasdee',
                desc: 'sdfdgfgfdgf',
                imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_150x150_06cb3e52.jpg'
            }]
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
    .item
        overflow: hidden
        display: flex
        height: 1.9rem
        .item-img
            width: 1.7rem
            height: 1.7rem
            padding: .1rem
        .item-info
            flex: 1
            padding: .1rem
            min-width: 0
            .item-title
                line-height: .54rem
                font-size: .32rem
                ellipsis()
            .item-desc
                line-height: .4rem
                color: #ccc
                ellipsis()
            .item-button
                line-height: .44rem
                margin-top: .16rem
                background: #ff9300
                padding: 0 .2rem
                border-radius: .06rem
                color: #fff
</style>

