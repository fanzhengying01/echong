<template>
  <div class="third-wrap">

    <Headerflag></Headerflag>
    <div class="third-body">
       <div class="third-shop">
         <i class="iconfont icon-gouwuche"></i>
       </div>
       <p>购物车是空的</p>
       <div class="shop-two">
         <div>去逛逛</div>
         <div>我的收藏</div>
       </div>
    </div>
    <!--{{brand}}-->

  </div>
</template>

<script>
  import Headerflag from '../../components/Headerflag/Headerflag.vue'
  import {mapState} from 'vuex'
  export default {
    components:{
      Headerflag
    },
    computed:{
      ...mapState(['brand'])
    },
    mounted(){
      this.$store.dispatch('getbrand')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .third-wrap
    .third-body
       width 100%
       height 295px
       background #ffffff
       margin-top 2px
       .third-shop
         width 100%
         height 170px
         background #ffffff
         display flex
         justify-content center
         align-items center
         i
           font-size 100px
           color #dbdbdb
       p
         display flex
         justify-content center
         color #dbdbdb

       .shop-two
         display flex
         justify-content center
         margin-top 25px
         >div
           display flex
           width 100px
           height 40px
           background #ffffff
           border-radius 5px
           border 1px solid #999
           justify-content center
           align-items center
           margin 5px
           color #7e8c8d
</style>
