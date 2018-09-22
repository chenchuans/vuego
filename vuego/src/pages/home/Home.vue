<template>
    <div>
        <homer-header></homer-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <!-- <home-recommend></home-recommend> -->
        <home-list></home-list>
        <home-weekend></home-weekend>
    </div>
</template>

<script>
import HomerHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
// import HomeRecommend from './components/Recommend'
import HomeList from './components/List'
import HomeWeekend from './components/Weekend'
export default {
    name: 'Home',
    components: {
        HomerHeader,
        HomeSwiper,
        HomeIcons,
        HomeList,
        HomeWeekend
    }
}
</script>

<style scoped>

</style>
