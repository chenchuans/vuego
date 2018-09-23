<template>
<div>
    <div class="search">
        <input type="text"
        v-model="keyword"
        placeholder="输入城市名或者拼音"
        class="search-input"/>
    </div>
    <div class="search-content"
    ref="search"
    v-show="keyword"
    >
        <ul>
            <li
            class="search-item border-bottom"
            v-for="item of list"
            :key="item.id"
            @click="getCityName(item.name)"

            >
            {{item.name}}</li>
            <li class="search-item border-bottom" v-show="hasNoData">
            没有找到匹配数据
            </li>
        </ul>
    </div>
</div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
    name: 'CitySearch',
    props: {
        cities: Object
    },
    data () {
        return {
            keyword: '',
            list: [],
            timer: null
        }
    },
    computed: {
        hasNoData () {
            return !this.list.length
        }
    },
    watch: {
        keyword () {
            if (this.timer) {
                clearTimeout(this.timer)
            }
            this.timer = setTimeout(() => {
                const result = []
                for (const i in this.cities) {
                    this.cities[i].forEach((element) => {
                        //如果输入的汉字或字母能够被找到
                        if (element.spell.indexOf(this.keyword) > -1 ||
                        element.name.indexOf(this.keyword) > -1
                        ) {
                            result.push(element)
                        }
                    });
                }
                this.list = result
            }, 100)
        }
    },
    methods: {
        getCityName (city) {
            this.$store.commit('changeCity', city)
            this.$router.push('/')
        },
    },
    mounted () {
        this.scroll = new Bscroll(this.$refs.search,
        { mouseWheel: true, click: true, tap: true })
    }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .search
        height: .72rem
        padding: 0 .1rem
        background: $bgColor
        .search-input
            box-sizing: border-box
            height: .62rem
            line-height: .62rem
            width: 100%
            padding: 0 .1rem
            text-align: center
            border-radius: .06rem
            color: #666666
    .search-content
        z-index: 1
        overflow: hidden
        position: absolute
        top: 1.58rem
        left: 0
        right: 0
        bottom: 0
        background: #eeeeee
        .search-item
            line-height: .62rem
            paddind-left: .2rem
            background: #fff
            color: #666
</style>
