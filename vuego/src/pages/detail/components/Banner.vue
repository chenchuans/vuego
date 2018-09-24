<template>
<div>
    <div class="banner" >
        <img class="banner-img"
        @click="handleBannerClick"
        :src="bannerImg" />
        <router-link
        tag="span"
        to="/"
        v-show="false"
        class="iconfont back-icon"
        >&#xe624;</router-link>
        <div class="banner-info">
            <div class="banner-title">
                {{this.sightName}}
            </div>
            <div class="banner-number">
                <span class="iconfont icon-tupian">&#xe692;</span>
                {{this.bannerImgs.length}}
                </div>
        </div>
    </div>
    <fade-animation>
    <common-gallary
    :imgs="bannerImgs"
    v-show="showGallary"
    @close="handleBannerClose"
    ></common-gallary>
    </fade-animation>
    <!-- common-gallary组件作为插槽加入fade-animation，
    相当于其中的slot元素，实现点击图片缓慢动画效果 -->
</div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'

export default {
    name: 'DetailBanner',
    components: {
        CommonGallary,
        FadeAnimation
    },
    props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
    },
    data () {
        return {
            showGallary: false
        }
    },
    methods: {
        handleBannerClick () {
            this.showGallary = true

        },
        handleBannerClose () {
            this.showGallary = false
        }
    }
}
</script>
<style lang="stylus" scoped>
    .banner
        position: relative
        overflow: hidden
        height: 0
        padding-bottom: 55%
        .banner-img
            width: 100%
        .back-icon
            position: absolute
            left: .3rem
            top: .3rem
            width: .6rem
            height: .6rem
            color: #ffffff
            border-radius: 50%
            background: rgba(0, 0, 0, .6)
            text-align: center
            line-height: .6rem
            font-size: .4rem
        .banner-info
            display: flex
            position: absolute
            left: 0
            right: 0
            bottom: 0
            line-height: .6rem
            color: #fff
            background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
            .banner-title
                flex: 1
                font-size: .32rem
                padding: 0 .2rem
            .banner-number
                height: .32rem
                margin-top: .14rem
                padding: 0 .32rem
                line-height: .32rem
                border-radius: .2rem
                background: rgba(0, 0, 0, .8)
                font-size: .24rem
                .banner-icon
                    font-size: .24rem
</style>
