<template>
  <div class="wrap">
    <ShiwuHeader/>
    <div class="swiper">
      <div class="swiper-container" v-if="detail.banner" >
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in detail.banner" :key="index">
            <img :src="item.picUrl">
            <div class="content">
              <div class="subTitle">{{item.subTitle}}</div>
              <div class="title">{{item.title}}</div>
              <div class="desc">{{item.desc}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <DetailScroll :scroll="detail.column"/>
    <DetailLoolk :detail="detail"/>
    <DetailFindMore :detail="detail"/>
    <goTop/>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import {mapState} from 'vuex'

  import ShiwuHeader from '../../components/ShiwuHeader/ShiwuHeader'
  import DetailScroll from '../../components/DetailScroll/DetailScroll'
  import DetailLoolk from '../../components/DetailLoolk/DetailLoolk.vue'
  import DetailFindMore from '../../components/DetailFindMore/DetailFindMore.vue'
  import goTop from '../../components/goTop/goTop.vue'
  export default {
    data() {
      return {}
    },

    computed: {
      ...mapState(['detail'])
    },

    mounted () {
      this.$store.dispatch('getDetail')
      new Swiper('.swiper-container',{
        loop: true,
        spaceBetween:30,
        slidesPerView: 1.15,
        centeredSlides: true,
        autoplay: {
          autoplay: true,
          delay: 3000
        }
      })
    },

    watch: {
      detail(val) {
        this.$nextTick(() => {
          new Swiper('.swiper-container',{
            loop: true,
            spaceBetween:30,
            slidesPerView: 1.15,
            centeredSlides: true,
            autoplay: {
              autoplay: true,
              delay: 3000
            }
          })
        })
      }
    },

    components: {
      ShiwuHeader,
      DetailScroll,
      DetailLoolk,
      DetailFindMore,
      goTop
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .wrap
    background #F4F4F4
    .swiper-container
      margin-top (90/$rem)
      padding-top (30/$rem)
      .swiper-slide
        img
          width 100%
          position relative
        .content
          position absolute
          top 0
          left 0
          bottom 0
          right 0
          margin auto
          width (466/$rem)
          height (200/$rem)
          background-color rgba(255,255,255,0.5)
          .subTitle
            font-size (22/$rem)
            height (80/$rem)
            width (466/$rem)
            //background: pink
            text-align center
            line-height (80/$rem)
          .title
            font-size (35/$rem)
            font-weight bold
            height (60/$rem)
            width (466/$rem)
            text-align center
            line-height (60/$rem)
          .desc
            font-size (25/$rem)
            height (60/$rem)
            width (466/$rem)
            text-align center
</style>
