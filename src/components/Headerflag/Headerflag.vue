<template>
  <div class="div">
    <div class="third-header">
      <i class="iconfont icon-fanhui" @click="$router.back()"></i>
      <span>购物车</span>
      <i class="iconfont icon-shoucang" @click="show()"></i>
    </div>
    <transition name="move">
      <div class="headerflag-wrap" v-if="ishow">
      <div>
        <i class="iconfont icon-shouye" @click="$router.push('/first')"></i>
        <span>首页</span>
      </div>
      <div>
        <i class="iconfont icon-shangpinfenlei" @click="$router.push('/second')"></i>
        <span>商品分类</span>
      </div>
      <div>
        <i class="iconfont icon-gouwuche1" @click="$router.push('/third')"></i>
        <span>购物车</span>
      </div>
      <div>
        <i class="iconfont icon-chongwu" @click="$router.push('/fourth')"></i>
        <span>我的e宠</span>
      </div>
    </div>
    </transition>
  </div>

</template>

<script>
  export default {
    data(){
      return {
        ishow:false
      }
    },
    methods:{
      show(){
        this.ishow = !this.ishow
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.div
  width 100%
  .third-header
    width 100%
    height 50px
    padding 0 10px 0 10px
    box-sizing border-box
    display flex
    justify-content space-between
    align-items center
    background #ffffff
    z-index 99px
    i
      font-size 20px
      font-weight 800
      color #7e8c8d
    span
      font-size 20px
  .headerflag-wrap
     width 100%
     height 66px
     background #ffffff
     display flex
     justify-content space-around
     overflow hidden
     transform-origin bottom
     &.move-enter-active, &.move-leave-active
        transition all .5s
     &.move-enter, &.move-leave-to
        height 0
     >div
      display flex
      flex-direction column
      justify-content center
      align-items center
      i
        font-size 22px
        font-weight 600
        color #7e8c8d
        margin-bottom 3px


</style>
