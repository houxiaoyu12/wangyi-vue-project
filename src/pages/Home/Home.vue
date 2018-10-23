<template>
  <div id="scrollWrap">
    <div class="homeContainer">
      <div class="headerWrap">
        <div class="homeHd">
          <span>网易严选</span>
          <div class="search">
            <i class="iconfont icon-gouwuchekong"></i>
            <span>搜索商品, 共9771款好物</span>
          </div>
        </div>
        <div class="hdScorllX" >
          <div class="hdScorllItem" ref="hdScorllItem">
            <span :class="{active:index === activeIndex }" v-for="(item,index) in data" :key="index" ref="hdScorll" @click="active(index)">{{item.name}}</span>
          </div>
        </div>
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../../common/images/1.jpg" alt="1">
          </div>
          <div class="swiper-slide">
            <img src="../../common/images/3.jpg" alt="1">
          </div>
          <div class="swiper-slide">
            <img src="../../common/images/4.jpg" alt="1">
          </div>
        </div>
      </div>
      <div class="g-grow">
        <div class="item">
          <i class="iconfont icon-gouwuchekong"></i>
          <span>网易自营品牌</span>
        </div>
        <div class="item">
          <i class="iconfont icon-gouwuchekong"></i>
          <span>30天无忧退货</span>
        </div>
        <div class="item">
          <i class="iconfont icon-gouwuchekong"></i>
          <span>48小时快速退款</span>
        </div>
      </div>
      <div class="m-indexFloor">
        <div class="hd">
          <span>品牌制造商直供</span>
          <i class="iconfont icon-jiantouyou"></i>
        </div>
        <div class="hd-itemWrap">
          <div class="hd-item">
            <h4>CK制造商</h4>
            <div class="title">
              25元起
            </div>
          </div>
          <div class="hd-item">
            <h4>CK制造商</h4>
            <div class="title">
              25元起
            </div>
          </div>
          <div class="hd-item">
            <h4>CK制造商</h4>
            <div class="title">
              25元起
            </div>
          </div>
          <div class="hd-item">
            <h4>CK制造商</h4>
            <div class="title">
              25元起
            </div>
          </div>
        </div>
      </div>
    </div>
    Home
  </div>

</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'





  export default {

    data() {
      return {
        activeIndex: 0
      }
    },
    mounted() {

      this.$store.dispatch('getData',()=>{

      })
      //导航条滚动
      new BScroll('.hdScorllX', {
        click: true,
        scrollX: true
      })
      //轮播图
      new Swiper('.swiper-container',{
        loop: true,
        autoplay: {
          autoplay: true,
          delay: 3000
        }
      })
    },
    computed:{
      ...mapState(['data'])
    },

    methods: {
      active(indexActive){
        this.activeIndex = indexActive
      },
      _initScroll(){

      }
    }


  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  #scrollWrap
    width: 100%;
    overflow: hidden;
  .homeContainer
    background: #F4F4F4;
    overflow: hidden;
    .headerWrap
      background: #F4F4F4;
      overflow: hidden;
      position: fixed;
      z-index: 100;
      top: 0;
      width: 100%;
    .homeHd
      background #fff
      padding (16/$rem)
      display flex
      justify-content space-between
      align-items center
      span
        font-size (35/$rem)
        font-weight bold
        width 24%
      .search
        justify-content center
        display flex
        align-items center
        width 70%
        height (60/$rem)
        background-color #ededed
        font-size (15/$rem)
        position relative
        .iconfont
          font-size 30px
        span
          color #666666
          font-size (25/$rem)
          width 60%
    .hdScorllX
      width 100%
      overflow hidden
      background #ffffff
      padding (12/$rem)
      .hdScorllItem
        width (1450/$rem)
        display flex
        justify-content space-between
        align-items center
        span
          width (70/$rem)
          text-align center
          font-size (27/$rem)
          flex-shrink 0
          flex-wrap nowrap
          font-size (27/$rem)
          margin 0 0.2rem
          &.active
            padding 0 0 12px 0
            border-bottom 3px solid #b4282d
            color #b4282d
    .swiper-container
      margin-top (152/$rem)
      .swiper-wrapper
        .swiper-slide
          img
            width 100%
    .g-grow
      width 100%
      height (65/$rem)
      display flex
      justify-content space-between
      align-items center
      .item
        display flex
        font-size (25/$rem)
        margin-left (15/$rem)
        .iconfont
          font-size (20/$rem)
        span
          font-size (25/$rem)
          margin-left (15/$rem)
    .m-indexFloor
      height 100%
      .hd
        height (110/$rem)
        display flex
        justify-content center
        align-items center
        span
          font-size (30/$rem)
        .iconfont
          font-size (30/$rem)
      .hd-itemWrap
        .hd-item
          display inline-block;
          margin-bottom (.10667*75/$rem)
          width 42%;
          height (3.14667*75/$rem)
          overflow: hidden;
          background-color: #f4f4f4;
          padding: (18/$rem)
          border: 1px solid #999;
          font-size (20/$rem)
          &:nth-child(1),&:nth-child(3)
            margin-left: (8/$rem)
          &:nth-child(1)
            background: url("//yanxuan.nosdn.127.net/bcca932aeb9d818dcf6d3a4804f7311b.png");
            background-size: 100%;
          &:nth-child(2)
            background: url("//yanxuan.nosdn.127.net/dd604acce92e61616a0fa2498cf0fd35.png");
            background-size: 100%;
          &:nth-child(3)
            background: url("//yanxuan.nosdn.127.net/f57d460dde6e737f2bacd9f67cb73a41.png");
            background-size: 100%;
          &:nth-child(4)
            background: url("//yanxuan.nosdn.127.net/52aa744559c6fc951e63f98229f36367.png");
            background-size: 100%;
          h4
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            color: #333;
            font-size (.37333*75/$rem)
            line-height (.45333*75/$rem)
            margin-bottom (.08*75/$rem)
</style>
