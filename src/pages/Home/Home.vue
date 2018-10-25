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
      <div class="swiper-container" v-if="banner.length>0">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in banner" :key="index">
            <img :src="item.picUrl">
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
      <div class="m-newItems">
        <header class="newItemsWrap">
          <span>新品首发</span>
          <div class="all">查看全部</div>
        </header>
        <div class="m-goodGrid">
          <div class="list">
            <div class="goodGrid-item" v-for="(item,index) in home.newItemList" :key="index">
              <div class="wraper">
                <img :src="item.primaryPicUrl" alt="">
              </div>
              <div class="title">
                新品
              </div>
              <div class="name">{{item.name}}</div>
              <div class="newItemDesc">{{item.simpleDesc}}</div>
              <div class="price">{{item.retailPrice}}￥</div>
            </div>
          </div>
        </div>
      </div>
      <div class="m-sale">
        <img src="../../common/images/7.jpg" alt="">
      </div>
      <div class="m-indexFloor2">
        <div class="hd2">
          <div class="hd-Wrap2">
            <span>专题精选</span>
            <i class="iconfont icon-jiantouyou"></i>
          </div>
        </div>
      </div>
    </div>
    <goTop/>
  </div>

</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'

  import goTop from '../../components/goTop/goTop.vue'





  export default {

    data() {
      return {
        activeIndex: 0
      }
    },
    mounted() {
      // 获取导航栏数据
      this.$store.dispatch('getData',()=>{
        this.$nextTick(()=>{
          this._initScroll()
        })
      })
      //获取轮播图数据
      this.$store.dispatch('getBanner',()=>{

      })

      /*//导航条滚动
      new BScroll('.hdScorllX', {
        click: true,
        scrollX: true
      })*/
      //轮播图
      new Swiper('.swiper-container',{
        loop: true,
        autoplay: {
          autoplay: true,
          delay: 3000
        }
      })
      this.$store.dispatch('getHome')
    },
    computed:{
      ...mapState(['data','banner','home'])
    },

    methods: {
      active(indexActive){
        this.activeIndex = indexActive
      },
      _initScroll(){
        //搜索框下面导航条滚动
        new BScroll('.hdScorllX', {
          click: true,
          scrollX: true
        })
        new BScroll('.m-goodGrid', {
          click: true,
          scrollX: true
        })
      }
    },
    watch: {
      banner(val) {
        this.$nextTick(()=>{
          //轮播图
          new Swiper('.swiper-container',{
            loop: true,
            autoplay: {
              autoplay: true,
              delay: 3000
            }
          })
        })
      }
    },
    components: {
      goTop
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
      display flex
      .hdScorllItem
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
          margin 0 0.53rem
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
      background #fff
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
      background #fff
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
        background #fff
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
    .m-newItems
      margin-top (8/$rem)
      background-color #fff
      .newItemsWrap
        background #EEF5FC
        height (260/$rem)
        position relative
        color #8BA0B6
        span
          position absolute
          top 0.7rem
          left 4.2rem
          font-size (36/$rem)
        .all
          position absolute
          left 50%
          top 50%
          transform translate(-50%,-50%)
          font-size (25/$rem)
      .m-goodGrid
        margin-top (20/$rem)
        height  (500/$rem)
        width 100%
        background: #fff
        display flex
        .list
          display flex
          .goodGrid-item
            margin-left (30/$rem)
            width (300/$rem)
            height  (500/$rem)
            .wraper
              height (300/$rem)
              width (300/$rem)
              img
                height (300/$rem)
                width (300/$rem)
                background: #F4F4F4
            .title
              margin 0.2rem 0 0 0.2rem
              font-size (25/$rem)
              height (40/$rem)
              width (72/$rem)
              background: #F48F18
              color white
              text-align center
              line-height (40/$rem)
            .name
              font-size (30/$rem)
              margin 0.2rem 0 0 0.2rem
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
            .newItemDesc
              font-size (22/$rem)
              margin 0.2rem 0 0 0.2rem
              color #7F7F7F
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
            .price
              margin 0.2rem 0 0 0.2rem
              font-size (30/$rem)
              color darkred
    .m-sale
      margin-top (20/$rem)
    .m-indexFloor2
      .hd2
        height (100/$rem)
        .hd-Wrap2
          background: #fff;
          height (110/$rem)
          display flex
          justify-content center
          align-items center
          span
            font-size (30/$rem)
          .iconfont
            font-size (30/$rem)



</style>
