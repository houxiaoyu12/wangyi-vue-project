<template>
  <div>
    <div class="m-topBar">
      <div class="bg">
        <div class="row">
          <span class="shouye" @click="$router.replace('/home')"></span>
          <span class="logo" ></span>
          <span class="search" @click="$router.replace('/home')"></span>
          <span class="cart" @click="$router.replace('/Shopcart')"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .m-topBar
    border-bottom (1/$rem) solid #ccc
    width (750/$rem)
    position fixed
    top 0
    z-index 99
    .bg
      height (88/$rem)
      width (750/$rem)
      background-color #fff
      position relative
      .row
        height (88/$rem)
        width (750/$rem)
        background: #fff
        .shouye
          display inline-block
          width (50/$rem)
          height (50/$rem)
          background-image: url(../../common/images/8.png)
          background-repeat no-repeat
          background-position (1/$rem) (-71/$rem)
          position absolute
          top (20/$rem)
          left (25/$rem)
        .logo
          display inline-block
          width (180/$rem)
          height (60/$rem)
          background-image: url(../../common/images/8.png)
          background-repeat no-repeat
          background-position (-5/$rem) (-122/$rem)
          position absolute
          top (15/$rem)
          left (300/$rem)
        .search
          display inline-block
          width (50/$rem)
          height (50/$rem)
          background-image: url(../../common/images/8.png)
          background-repeat no-repeat
          background-position (-8/$rem) (-311/$rem)
          position absolute
          top (20/$rem)
          left (600/$rem)
        .cart
          display inline-block
          width (50/$rem)
          height (50/$rem)
          background-image: url(../../common/images/8.png)
          background-repeat no-repeat
          background-position (-5/$rem) (-9/$rem)
          position absolute
          top (24/$rem)
          left (675/$rem)


</style>
