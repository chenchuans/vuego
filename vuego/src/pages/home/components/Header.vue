<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont back-icon">&#xe624;</span>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题</div>
            <router-link to="/city">
                <div class="header-right">
                    <!-- 城市 -->
                    {{ this.city }}
                    <span class="iconfont arrow-icon">&#xe64a;</span>
                </div>
            </router-link>
    </div>
</template>

<script>
export default {
    name: 'HomeHeader',
    props: {
        city: {
            type: String,
            default: '北京'
        },
        hotCities:{
            type: Array,
            default: function () {
                return [{
                id: 1,
                name: "北京",
                spell: "beijing",
            }]
            }
        },
        cities: Object
    }
}
</script>

<style lang="stylus" scoped>
// 1rem = html font-size = 50px
    @import '~styles/varibles.styl'
    .header
        display: flex
        line-height: $headerHeight
        background: $bgColor
        color: #fff
        .header-left
            width: .64rem
            float: left
            .back-icon
                text-align: center
                font-size: .4rem
                margin-left: .08rem
        .header-input
            flex: 1
            height: .64rem
            line-height: .64rem
            margin-top: .12rem
            margin-left: .2rem
            padding-left: .2rem
            background: #fff
            border-radius: .1rem
            color: #ccc
        .header-right
            width: 1.04rem
            padding: 0 .1rem
            float: right
            text-align: center
            color: #fff
            .arrow-icon
                margin-left: -.04rem
                font-size: .24rem
</style>
