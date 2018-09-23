<template>
    <div>
        <homer-header ></homer-header>
        <home-swiper :swiperList="swiperList"></home-swiper>
        <home-icons :iconList="iconList"></home-icons>
        <!-- <home-recommend></home-recommend> -->
        <home-recommend :recommendList="recommendList"></home-recommend>
        <home-weekend :weekendList="weekendList"></home-weekend>
    </div>
</template>

<script>
import HomerHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'

import axios from 'axios'
import { mapState } from 'vuex'
export default {
    name: 'Home',
    components: {
        HomerHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    },
    data () {
        return {
            lastCity: '',
            swiperList: [],
            iconList: [],
            recommendList: [],
            weekendList: []
        }
    },
    computed: {
        ...mapState(['city'])
    },
    methods: {
        //方法一
        // getHomeInfo () {
        //     axios.get('/static/mock/index.json')
        //         .then(this.getHomeInfoSuccess)
        // },
        // getHomeInfoSuccess (response) {
        //     console.log(response)
        // }
        //方法二
        async getHomeInfo () {
            //解构赋值出data
            let {data} = await axios.get('/static/mock/index.json?city=' + this.city)

            this.swiperList = data.data.swiperList
            this.iconList = data.data.iconList
            this.recommendList = data.data.recommendList
            this.weekendList = data.data.weekendList
        }

    },
    mounted () {
        //在此发送ajax请求
        this.lastCity = this.city
        this.getHomeInfo()
    },
    activated () {
        //当页面再次显示时，此函数被执行
        //在此判断返回是否同一个城市，不是则发ajax请求
        if (this.lastCity !== this.city) {
            this.lastCity = this.city
            this.getHomeInfo()
        }
    }
}
</script>

<style scoped>

</style>
