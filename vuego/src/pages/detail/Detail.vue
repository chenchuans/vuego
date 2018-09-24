<template>
    <div>

        <detail-banner
        :sightName="sightName"
        :bannerImg="bannerImg"
        :bannerImgs="gallaryImgs"
        ></detail-banner>
        <detail-header></detail-header>
        <div class="content">
            <detail-list :list="list"></detail-list>
        </div>
    </div>
</template>
<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'

import axios from 'axios'
export default {
    name: 'Detail',
    components: {
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data () {
        return {
            sightName: '',
            bannerImg: '',
            gallaryImgs: [],
            list: []
        }
    },
    methods: {
        async getDetailInfo () {
            let {data} = await axios.get('/static/mock/detail.json', {
                params: {
                    id: this.$route.params.id
                }
            })

            if (data.ret && data.data) {
                const da = data.data

                this.sightName = da.sightName
                this.bannerImg = da.bannerImg
                this.gallaryImgs = da.gallaryImgs
                this.list = da.categoryList
            }
        }
    },
    mounted () {
        this.getDetailInfo()
    }
}
</script>
<style lang="stylus" scoped>
.content
    height: 50rem
</style>
