<template>
    <div>
        <homer-header></homer-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
    </div>
</template>

<script>
import HomerHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
export default {
    name: 'Home',
    components: {
        HomerHeader,
        HomeSwiper,
        HomeIcons
    }
}
</script>

<style scoped>

</style>
