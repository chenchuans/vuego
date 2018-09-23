<template>
    <div>
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
        <city-list
        :letter="letter"
        :cities="cities"
        :hotCities="hotCities"></city-list>
        <city-alphabet
        @change="handleLetterChange"
        :cities="cities"></city-alphabet>
    </div>
</template>
<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'

import axios from 'axios'
export default {
    name: 'City',
    components: {
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    data () {
        return {
            cities: {},
            hotCities: [],
            letter: ''
        }
    },
    methods: {
        async getCityInfo () {
            let {data} = await axios.get('/static/mock/city.json')
            this.cities = data.data.cities
            this.hotCities = data.data.hotCities
            // console.log(this.cities)
            // console.log(this.hotCities)
        },
        handleLetterChange (letter) {
            this.letter = letter
            // console.log(this.letter)
        }
    },
    mounted () {
        this.getCityInfo()
    }
}
</script>
<style lang="stylus" scoped>

</style>
