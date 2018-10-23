<template>
  <footer class="footer_guide border-1px">
    <div class="guide_item" @click="goto('/home')" :class="{on: isCurrent('/home')}">
      <span class="item_icon">
        <i class="iconfont icon-shouye2"></i>
      </span>
      <span>首页</span>
    </div>
    <div class="guide_item" @click="goto('/look')" :class="{on: isCurrent('/look')}">
      <span class="item_icon">
        <i class="iconfont icon-fangkuai"></i>
      </span>
      <span>识物</span>
    </div>
    <div class="guide_item" @click="goto('/list')" :class="{on: isCurrent('/list')}">
      <span class="item_icon">
        <i class="iconfont icon-fenlei"></i>
      </span>
      <span>分类</span>
    </div>
    <div class="guide_item" @click="goto('/shopcart')" :class="{on: isCurrent('/shopcart')}">
      <span class="item_icon">
        <i class="iconfont icon-gouwuchekong"></i>
      </span>
      <span>购物车</span>
    </div>
    <div class="guide_item" @click="goto('/personal')" :class="{on: isCurrent('/personal')}">
      <span class="item_icon">
        <i class="iconfont icon-icon-"></i>
      </span>
      <span>个人</span>
    </div>
  </footer>
</template>

<script>
  export default {
    methods: {
      goto (path) {
        this.$router.replace(path)
      },
      isCurrent (path) {
        return this.$route.path === path
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide
    top-border-1px(#CCCCCC)
    position fixed
    z-index 100
    left 0
    bottom 0
    background-color #fff
    width 100%
    height (98/$rem)
    display flex
    border-top 1px solid #999;
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin (15/$rem)
      color #999999
      &.on
        color #B4282D
      span
        font-size (23/$rem)
        margin-top (2/$rem)
        margin-bottom (2/$rem)
        .iconfont
          font-size (40/$rem)
</style>
