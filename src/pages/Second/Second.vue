<template>
  <div class="second-wrap">
    <div class="second-header">
      <div class="second-header-left">
        <span  :class="{on:isshow('/Second/tleft')}" @click="$router.push('/Second/tleft')" >分类</span>
      </div>
      <div class="second-header-right">
        <span  :class="{on:isshow('/Second/tright')}" @click="goto('/Second/tright')">品牌</span>
        <img src="../../common/image/search.png" alt="">
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
  export default{


     methods:{
       goto(path){
         this.$router.push(path)
       },
       isshow(path){
         return this.$route.path === path
       }
     }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">

  .second-wrap
    .second-header
       width 100%
       height 40px
       background white
       padding 0 20px
       box-sizing border-box
       position fixed
       top 0
       z-index 10
       >div
         width 50%
         height 100%
         display flex
         box-sizing border-box
         align-items center
         color #333
         font-size 13px
         span
           display flex
           align-items center
           font-weight 700
           height 100%
           border-bottom 2px solid transparent
         .on
           border-bottom 2px solid red
       .second-header-left
         float left
         justify-content flex-end
         padding-right 20px
       .second-header-right
         float right
         padding-left 20px
         display flex
         justify-content space-between
         img
           width 14px
           height 14px
</style>
