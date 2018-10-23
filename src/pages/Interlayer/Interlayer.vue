<template>
  <div class="g-bd">
    <div class="g-row">
      <img src="../../common/images/2.jpg">
      <img src="../../common/images/5.jpg">
    </div>
    <div class="g-row">
      <img src="../../common/images/6.jpg">
      <div class="download-app"></div>
      <router-link to="/home" class="backWapBtn">继续使用触屏版浏览 ></router-link>
    </div>
  </div>
</template>
<script>
  export default {
    name: "Interlayer"
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .backWapBtn{
    width: 3.38667rem;
    height: .4rem;
    left: 3.34667rem;
    top: 3rem;
    position: absolute;
    display: block;
    font-size: 24px;
    line-height: 1.5;
  }
  .g-bd{
    max-width: 10rem;
    margin: 0 auto;
    background: #eee;
    line-height: 1.5;
    color: #333;
    height: 100%;

    .g-row{
      position: relative;
      width: 10rem;
      margin-right: auto;
      margin-left: auto;
      padding-top: 186px;
      &:nth-child(2){
        padding-top: 0;
      }
      img{
        vertical-align: top;
        width: 100%;
      }
      .download-app{
        width: 5.76rem;
        height: 1.30667rem;
        left: 1.92rem;
        top: 1.29333rem;
        position: absolute;
        display: block;
      }
    }
  }
</style>
