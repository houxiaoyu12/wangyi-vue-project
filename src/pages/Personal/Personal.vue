<template>
  <div>
    <ShiwuHeader/>
    <div class="loginTypesWrap">
      <div class="cont">
        <div class="logoWrap">
          <img src="../../common/images/11.png" alt="">
        </div>
        <div class="btnWrap">
          <div class="button-block" @click="goLogoin(true)">
            <i class="iconfont icon-fangkuai"></i>
            <span>手机号码登录</span>
          </div>
          <div class="button-ghostRed" @click="goLogoin(false)">
            <i class="iconfont icon-youxiang"></i>
            <span>邮箱账号登录</span>
          </div>
          <div class="btn">
            <span>手机号快捷注册</span>
            <i class="iconfont icon-jiantouyou"></i>
          </div>
        </div>
        <div class="footer">
          <div class="wx">
            <i class="iconfont icon-weixin"></i>
            <span>微信</span>
          </div>
          <div class="qq">
            <i class="iconfont icon-QQ"></i>
            <span>QQ</span>
          </div>
          <div class="wb">
            <i class="iconfont icon-weibo"></i>
            <span>微博</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import ShiwuHeader from '../../components/ShiwuHeader/ShiwuHeader'
  export default {
    data() {
      return {}
    },
    components: {
      ShiwuHeader
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  html,body
    height 100%
    overflow hidden
  .loginTypesWrap
    padding-top (88/$rem)
    .cont
      position relative
      height 100%
      background: #F2F5F4
      .logoWrap
        height (418/$rem)
        width (750/$rem)
        text-align center
        line-height (418/$rem)
        img
          width (268/$rem)
          height (90/$rem)
      .btnWrap
        height (297/$rem)
        width (750/$rem)
        .button-block
          margin-left (40/$rem)
          margin-bottom (26/$rem)
          height (93/$rem)
          width (670/$rem)
          background: #b4282d
          color #fff
          display flex
          justify-content center
          align-items center
          span
            margin-left (20/$rem)
            font-size (28/$rem)
          .iconfont
            font-size (28/$rem)
        .button-ghostRed
          margin-left (40/$rem)
          margin-bottom (26/$rem)
          height (93/$rem)
          width (670/$rem)
          background #fff
          color #b4282d
          display flex
          justify-content center
          align-items center
          border (1/$rem) solid #b4282d
          span
            font-size (28/$rem)
            margin-left (20/$rem)
          .iconfont
            font-size (35/$rem)
        .btn
          display flex
          justify-content center
          align-items center
          span
            font-size (28/$rem)
          .iconfont
            font-size (35/$rem)
      .footer
        margin-top (345/$rem)
        height (50/$rem)
        width (750/$rem)
        color #7F7F7F
        //background: pink
        .wx
          float left
          margin-left (150/$rem)
          border-right (1/$rem) solid #000
          span
            padding-right (50/$rem)
            float left
            font-size (30/$rem)
          .iconfont
            float left
            font-size (40/$rem)
        .qq
          float left
          margin-left 0
          border-right (1/$rem) solid #000
          span
            float left
            font-size (30/$rem)
            padding-right (50/$rem)
          .iconfont
            padding-left (50/$rem)
            float left
            font-size (30/$rem)
        .wb
          float left
          margin-left 0
          span
            float left
            font-size (30/$rem)
          .iconfont
            padding-left (50/$rem)
            float left
            font-size (35/$rem)
</style>
