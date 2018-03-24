<template>
  <div class="wrap">
    <div>
     <div class="second-right" v-for="(b,index) in brand" :key="index">
       <div class="second-right-content">
          <div class="second-right-content-top">
            —— {{b.title}} ——
          </div>
         <div class="second-right-content-bottom">
           <div v-for="(list,index) in b.list"  :key="index">
             <div class="img-wrap">
               <img v-lazy='list.logo' alt="">
             </div>
             <p>{{list.name}}</p>
             <p>{{list.address}}</p>
           </div>
         </div>
       </div>
     </div>

    </div>

    <div class="circle" @click="$router.replace('/trlist')">全部</div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    computed:{
      ...mapState(['brand'])
    },
    mounted(){
      this.$store.dispatch('getbrand')
      new BScroll('.wrap',{
        scrollY: true,
        click: true
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.wrap
  width 100%
  position absolute
  top 41px
  bottom 55px
  overflow hidden
  .second-right
    width 100%
    background transparent
    box-sizing border-box
    .second-right-content
     margin-bottom 20px
     background #ffffff
     .second-right-content-top
      padding-top 20px
      font-size 12px
      color #999
      display flex
      justify-content center

    .second-right-content-bottom
       width 100%
       display flex
       justify-content flex-start
       flex-wrap wrap
       >div
         height 107px
         width 33%
         margin-top 20px
         padding 0 5px
         box-sizing border-box
         .img-wrap
            width 100%
            height 62px
            border 1px solid #7e8c8d
            display flex
            justify-content center
            align-items center
            img
              width 70%
       p
         display flex
         justify-content center
         margin-top 8px
       p:nth-child(2)
         font-size 13px
       p:nth-child(3)
         font-size 12px
         color #999


  .circle
    width 40px
    height 40px
    border-radius 50%
    background red
    display flex
    justify-content center
    align-items center
    font-size 12px
    color #ffffff
    position fixed
    bottom 100px
    right 10px
    background rgba(0,0,0,.4);
</style>
