<template>
    <div>
        <homer-header :hotCities="hotCities" :city="city"
        :cities="cities"></homer-header>
        <home-swiper :swiperList="swiperList"></home-swiper>
        <home-icons :iconList="iconList"></home-icons>
        <!-- <home-recommend></home-recommend> -->
        <home-list :recommendList="recommendList"></home-list>
        <home-weekend :weekendList="weekendList"></home-weekend>
    </div>
</template>

<script>
import HomerHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
// import HomeRecommend from './components/Recommend'
import HomeList from './components/List'
import HomeWeekend from './components/Weekend'

import axios from 'axios'
import Axios from 'axios';
export default {
    name: 'Home',
    components: {
        HomerHeader,
        HomeSwiper,
        HomeIcons,
        HomeList,
        HomeWeekend
    },
    data () {
        return {
            city: '',
            hotCities: [],
            cities: {},
            swiperList: [],
            iconList: [],
            recommendList: [],
            weekendList: []
        }
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
            let {data} = await axios.get('/static/mock/index.json')

            this.swiperList = data.data.swiperList
            this.iconList = data.data.iconList
            this.recommendList = data.data.recommendList
            this.weekendList = data.data.weekendList
        },
        async getCityInfo () {
            let {data} = await axios.get('/static/mock/city.json')
            this.cities = data.data.cities
            this.hotCities = data.data.hotCities
            this.city = this.hotCities[0].name

        }
    },
    mounted () {
        //在此发送ajax请求
        this.getHomeInfo()
        this.getCityInfo()

    }
}
</script>

<style scoped>

</style>
