<template>
    <div class="header">
        <router-link tag="span" to="/"
        class="iconfont back-icon">&#xe624;</router-link>
        城市选择
    </div>
</template>
<script>
export default {
    name: 'CityHeader'
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header
        overflow: hidden
        height: $headerHeight
        line-height: $headerHeight
        text-align: center
        color: #fff
        background: $bgColor
        .back-icon
            text-align: center
            font-size: .4rem
            margin-left: .08rem
            float: left
</style>
