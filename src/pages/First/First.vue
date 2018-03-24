<template>
  <div class="first-wrap" v-if="homepage.menus">
    <div class="first-header">

    <div class="first-ad" v-if="ishow" @click="show()">
      <img src="../../common/image/data-img/adv.jpg" alt="">
    </div>

    <div class="first-input">
      <div class="first-input-inner">
        <a href="javascript:;">
          <span>狗狗</span>
          <span>|</span>
          <span>重庆</span>
          <i></i>
        </a>
        <div class="search-test">
        <input type="text" placeholder="请搜索商品和品牌">
        <span class="icon"></span>
        </div>
        <div class="right-icon">
          <img src="../../common/image/mydope.png" alt="">
        </div>

      </div>
    </div>

    <div class="text-scroll">
      <!-- text  Swiper -->
      <div class="swiper-container-first swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" @click="showcolor(index)" v-for="(menus,index) in homepage.menus" :key="index">
            <span :class="{on:gg == index}">{{menus.menu_name}}</span>
          </div>

        </div>
        <!--&lt;!&ndash; Add Pagination &ndash;&gt;-->
        <!--<div class="swiper-pagination"></div>-->
      </div>
    </div>
    </div>
    <div class="haha">
    <div class="aaa">
    <!-- img Swiper -->
    <div class="swiperimg" :class="{on:istop}">
      <div class="swiper-container swiper-container-second">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(i,index) in homepage.dog_banner" :key="index">
          <img v-lazy=i alt="">
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
    </div>
    <!--dog-->
    <div class="first-inner-dog">
      <img v-lazy=homepage.dog_img alt="">
    </div>
    <!--列表logo-->
    <div class="first-inner-logo-list">
      <div v-for="(i,index) in homepage.menu_list" :key="index">
        <img v-lazy=i alt="">
      </div>
    </div>
    <div class="first-inner-onepage">
      <img v-lazy=homepage.miaosha alt="">
    </div>
    <!--每日疯抢-->
    <div class="first-inner-oneday">
      <div class="first-inner-oneday-left"><img src="../../common/image/data-img/images/fengqiang.png" alt=""></div>

      <div class="first-inner-oneday-flagtime">
      <div class="first-inner-oneday-flag"><span>本场结束</span></div>
      <div class="first-inner-oneday-time">
        <span>20</span>
               :
        <span>00</span>
      </div>
      </div>
      <div class="first-inner-oneday-right"><img src="../../common/image/data-img/images/more.png" alt=""></div>
    </div>
    <!--小商品轮播-->
    <div class="first-inner-shop">
      <div class="swiper-container-third swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="swiper-wrap">
              <img src="../../common/image/data-img/totalImg/2a13da7043d568175753177ca978dae7.jpg" alt="">
              <p class="p-first">￥2.99</p>
              <p class="p-second">省26.99</p>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swiper-wrap">
              <img src="../../common/image/data-img/totalImg/2cdec1bd58b2216764993c30c4fd0ec1.jpg" alt="">
              <p class="p-first">￥2.99</p>
              <p class="p-second">省26.99</p>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swiper-wrap">
              <img src="../../common/image/data-img/totalImg/6d615faef8b6a01e891d8a3012fbb3e6.jpg" alt="">
              <p class="p-first">￥2.99</p>
              <p class="p-second">省26.99</p>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swiper-wrap">
              <img src="../../common/image/data-img/totalImg/68d45608ddbec32608cddec587c342e1.jpg" alt="">
              <p class="p-first">￥2.99</p>
              <p class="p-second">省26.99</p>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swiper-wrap">
              <img src="../../common/image/data-img/totalImg/e9d557ad275060a67574834a21aecf15.jpg" alt="">
              <p class="p-first">￥2.99</p>
              <p class="p-second">省26.99</p>
            </div>
          </div>
        </div>
        <!--&lt;!&ndash; Add Pagination &ndash;&gt;-->
        <!--<div class="swiper-pagination"></div>-->
      </div>


    </div>
    <!--品牌力量-->
    <div class="first-inner-twopage">
      <img v-lazy=homepage.brand_power alt="">

    </div>
    <!--动图-->
    <div class="first-inner-dongtu">
      <img v-lazy=homepage.gif alt="">
    </div>

    <!--vip尊享-->
    <div class="first-inner-onepage">
      <img v-lazy=homepage.vip alt="">
    </div>
    <!--四张-->
    <div class="first-inner-fourimg" >
      <div class="first-inner-fourimg-left">
      <img v-lazy=homepage.vip_services[0] alt="">
      <img v-lazy=homepage.vip_services[1] alt="">
      </div>
      <div class="first-inner-fourimg-right">
        <img v-lazy=homepage.vip_services[2] alt="">
       <img v-lazy=homepage.vip_services[3] alt="">
      </div>
    </div>
    <!--带你一折团-->
    <div class="first-inner-onepage">
      <img v-lazy=homepage.dapaituan alt="">
    </div>
    <!--自动轮播-->
    <div class="first-inner-autolunbo">
      <div class="swiper-container swiper-container-fourth">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(i,index) in homepage.dapaituan_list"><img v-lazy=i alt=""></div>
        </div>
      </div>
    </div>
    <!--大牌好货-->
    <div class="first-inner-onepage">
      <img v-lazy=homepage.haohuo alt="">
    </div>

    <div class="first-wrap-body-scroll" >
      <div class="first-wrap-body-scroll-left">
        <img src="https://img2.epetbar.com/nowater/2018-03/12/18/48f18920d1f1ee4e52039bf92da2e805.jpg@!water" alt="">
        <img src="https://img2.epetbar.com/nowater/2018-03/12/18/188ceb72ed63b6ddffa093f25f517727.jpg@!water" alt="">
        <img src="https://img2.epetbar.com/nowater/2018-03/12/18/fc7b286676d1bf3fbe2d2b4b1ac633a6.jpg@!water" alt="">
        <img src="https://img2.epetbar.com/nowater/2018-03/12/18/3ea747d791b0923f775d1b23b5da9485.jpg@!water" alt="">
      </div>
      <div class="first-wrap-body-scroll-right">
        <img src="https://img2.epetbar.com/nowater/2018-03/12/18/10a5324b7c6f1763122f2ee9cd54b5b7.jpg@!water" alt="">
        <img src="https://img2.epetbar.com/nowater/2018-03/12/18/67301c12c7193d19e515c59d2bf2d15a.jpg@!water" alt="">
        <img src="https://img2.epetbar.com/nowater/2018-03/12/18/b91027e7b664ebd165c8dc690fd9b778.jpg@!water" alt="">
        <img src="https://img2.epetbar.com/nowater/2018-03/12/18/b30bab969d87ef724986ad42420432f4.jpg@!water" alt="">
      </div>
    </div>

    <div class="first-wrap-body-scroll">
      <div class="first-wrap-body-scroll-left">
        <img src="https://img2.epetbar.com/nowater/2018-03/12/18/48f18920d1f1ee4e52039bf92da2e805.jpg@!water" alt="">
        <img src="https://img2.epetbar.com/nowater/2018-03/12/18/188ceb72ed63b6ddffa093f25f517727.jpg@!water" alt="">
        <img src="https://img2.epetbar.com/nowater/2018-03/12/18/fc7b286676d1bf3fbe2d2b4b1ac633a6.jpg@!water" alt="">
        <img src="https://img2.epetbar.com/nowater/2018-03/12/18/3ea747d791b0923f775d1b23b5da9485.jpg@!water" alt="">
      </div>
      <div class="first-wrap-body-scroll-right">
        <img src="https://img2.epetbar.com/nowater/2018-03/12/18/10a5324b7c6f1763122f2ee9cd54b5b7.jpg@!water" alt="">
        <img src="https://img2.epetbar.com/nowater/2018-03/12/18/67301c12c7193d19e515c59d2bf2d15a.jpg@!water" alt="">
        <img src="https://img2.epetbar.com/nowater/2018-03/12/18/b91027e7b664ebd165c8dc690fd9b778.jpg@!water" alt="">
        <img src="https://img2.epetbar.com/nowater/2018-03/12/18/b30bab969d87ef724986ad42420432f4.jpg@!water" alt="">
      </div>

    </div>

    <div class="first-wrap-body-scroll">
      <div class="first-wrap-body-scroll-left">
        <img src="https://img2.epetbar.com/nowater/2018-03/12/18/48f18920d1f1ee4e52039bf92da2e805.jpg@!water" alt="">
        <img src="https://img2.epetbar.com/nowater/2018-03/12/18/188ceb72ed63b6ddffa093f25f517727.jpg@!water" alt="">
        <img src="https://img2.epetbar.com/nowater/2018-03/12/18/fc7b286676d1bf3fbe2d2b4b1ac633a6.jpg@!water" alt="">
        <img src="https://img2.epetbar.com/nowater/2018-03/12/18/3ea747d791b0923f775d1b23b5da9485.jpg@!water" alt="">
      </div>
      <div class="first-wrap-body-scroll-right">
        <img src="https://img2.epetbar.com/nowater/2018-03/12/18/10a5324b7c6f1763122f2ee9cd54b5b7.jpg@!water" alt="">
        <img src="https://img2.epetbar.com/nowater/2018-03/12/18/67301c12c7193d19e515c59d2bf2d15a.jpg@!water" alt="">
        <img src="https://img2.epetbar.com/nowater/2018-03/12/18/b91027e7b664ebd165c8dc690fd9b778.jpg@!water" alt="">
        <img src="https://img2.epetbar.com/nowater/2018-03/12/18/b30bab969d87ef724986ad42420432f4.jpg@!water" alt="">
      </div>

    </div>

    <div class="first-wrap-body-scroll">
      <div class="first-wrap-body-scroll-left">
        <img src="https://img2.epetbar.com/nowater/2018-03/12/18/48f18920d1f1ee4e52039bf92da2e805.jpg@!water" alt="">
        <img src="https://img2.epetbar.com/nowater/2018-03/12/18/188ceb72ed63b6ddffa093f25f517727.jpg@!water" alt="">
        <img src="https://img2.epetbar.com/nowater/2018-03/12/18/fc7b286676d1bf3fbe2d2b4b1ac633a6.jpg@!water" alt="">
        <img src="https://img2.epetbar.com/nowater/2018-03/12/18/3ea747d791b0923f775d1b23b5da9485.jpg@!water" alt="">
      </div>
      <div class="first-wrap-body-scroll-right">
        <img src="https://img2.epetbar.com/nowater/2018-03/12/18/10a5324b7c6f1763122f2ee9cd54b5b7.jpg@!water" alt="">
        <img src="https://img2.epetbar.com/nowater/2018-03/12/18/67301c12c7193d19e515c59d2bf2d15a.jpg@!water" alt="">
        <img src="https://img2.epetbar.com/nowater/2018-03/12/18/b91027e7b664ebd165c8dc690fd9b778.jpg@!water" alt="">
        <img src="https://img2.epetbar.com/nowater/2018-03/12/18/b30bab969d87ef724986ad42420432f4.jpg@!water" alt="">
      </div>

    </div>

    <div class="first-wrap-body-scroll">
      <div class="first-wrap-body-scroll-left">
        <img src="https://img2.epetbar.com/nowater/2018-03/12/18/48f18920d1f1ee4e52039bf92da2e805.jpg@!water" alt="">
        <img src="https://img2.epetbar.com/nowater/2018-03/12/18/188ceb72ed63b6ddffa093f25f517727.jpg@!water" alt="">
        <img src="https://img2.epetbar.com/nowater/2018-03/12/18/fc7b286676d1bf3fbe2d2b4b1ac633a6.jpg@!water" alt="">
        <img src="https://img2.epetbar.com/nowater/2018-03/12/18/3ea747d791b0923f775d1b23b5da9485.jpg@!water" alt="">
      </div>
      <div class="first-wrap-body-scroll-right">
        <img src="https://img2.epetbar.com/nowater/2018-03/12/18/10a5324b7c6f1763122f2ee9cd54b5b7.jpg@!water" alt="">
        <img src="https://img2.epetbar.com/nowater/2018-03/12/18/67301c12c7193d19e515c59d2bf2d15a.jpg@!water" alt="">
        <img src="https://img2.epetbar.com/nowater/2018-03/12/18/b91027e7b664ebd165c8dc690fd9b778.jpg@!water" alt="">
        <img src="https://img2.epetbar.com/nowater/2018-03/12/18/b30bab969d87ef724986ad42420432f4.jpg@!water" alt="">
      </div>

    </div>
    <!--最惨奖-->
    <div class="first-inner-onepage zuican">
      <img v-lazy=homepage.zuican alt="">
    </div>
    <!--最惨2-->
    <div class="first-inner-zuican">
      <img v-lazy=homepage.zuican_content alt="">
    </div>
    <!--特别星球-->
    <div class="first-inner-onepage tebie">
      <img v-lazy=homepage.special alt="">
    </div>

    <div class="first-inner-lastpage">
      <div  class="first-inner-lastpage-left">
        <img v-lazy=homepage.special_list[0] alt="">
      </div>
      <div  class="first-inner-lastpage-right">
        <img v-lazy=homepage.special_list[1] alt="">
        <img v-lazy=homepage.special_list[2] alt="">
      </div>
    </div>
   <!--栏目-->
    <div class="first-inner-onepage manmu">
      <img v-lazy=homepage.lanmu alt="">
    </div>
    <!--底部最後-->
    <div class="first-inner-last">
      <div class="first-inner-last-top">
        <span>触屏版</span>
        <span>手机客户端</span>
        <span>关于我们</span>
        <span>联系我们</span>
      </div>
      <div class="first-inner-last-bottom">
        <span>© wap.epet.com 版权：重庆易宠科技有限公司</span>
      </div>
    </div>

    </div>
    </div>
  </div>
</template>

<script>
  import Swiper from "swiper"
  import {mapState} from 'vuex'
  import 'swiper/dist/css/swiper.min.css'
//  import BSscroll from 'better-scroll'
  export default {
    data(){
      return {
        ishow:true,
        istop:false,
        gg:0
      }
    },
    methods:{
      display(){
        this.style.display = 'none'
      },
      show(){
        this.ishow = false
        this.istop = true
      },
      showcolor(index){
        this.gg = index
      }
    },
    mounted(){
      this.$store.dispatch('gethomepage', ()=> {
        this.$nextTick(function () {
          //text轮播
          new Swiper('.swiper-container-first', {
            slidesPerView: 5,
            spaceBetween: 0,
            freeMode: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
          });
          new Swiper('.swiper-container-second', {
            pagination: {
              el: '.swiper-pagination',
            },
          });
          //shop商品轮播
          new Swiper('.swiper-container-third', {
            slidesPerView: 3.5,
            spaceBetween: 0,
            freeMode: true,
            pagination: {
              clickable: true,
            },
          });

          new Swiper('.swiper-container-fourth', {
            pagination: {
              dynamicBullets: true,
            },
          });

        })
      })

    },
    watch:{

    },
    computed:{
      ...mapState(['homepage'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.first-wrap
  width 100%
 .first-header
   position fixed
   top 0
   z-index 10
   width 100%
   .first-ad
     position relative
     img
       width 100%
       height 60px
   .first-input
     width 100%
     height 51.6px
     padding 10px 5px
     box-sizing border-box
     background #ffffff
     margin-top -2px
     .first-input-inner
       width 100%
       height 100%
       display flex
       align-items center
       justify-content space-around
       position relative
       font-size 13px
       background #ffffff
       color #898989
       >a
         i
           display inline-block
           border-width 4px
           border-style: solid
           border-color: #898989 transparent transparent;
           position relative
           top 2px
       .search-test
         width 200px
         display inline-block
         position relative
         input
           height 25px
           width 100%
           background #e9e9e9
           border-radius 4px
           color #bcbcbc
           outline 0
           padding-left 5px
         .icon
           display inline-block
           width 11px
           height 11px
           background url(../../common/image/search.png)
           background-size 11px
           position absolute
           top 8px
           right  5px
       .right-icon
           width 30px
           height 25px
           display inline-block
           position relative
           img
             width 25px
             height 25px
             position absolute
             right 2px
             top 2px
   .text-scroll
    height 36px
    .swiper-container
       width 100%
       height 100%
      .swiper-slide
        text-align center
        font-size 18px
        background #fff
        display flex
        justify-content center
        align-items flex-end
        span
          font-size: 14px;
          color: #666
          padding-bottom 5px
          border-bottom 2px solid transparent
        .on
          display inline-block
          color #459d36;
          border-color #459d36



  .swiperimg
    width 100%
    margin-top 146px
    &.on
      margin-top 86px
    .swiper-container-second
      img
        width 100%
        height 160px
  .first-inner-dog
     width 100%
     overflow hidden
     margin-top -2px
     img
      width 100%
      height 270px

  .first-inner-logo-list
     width 100%
     height 190px
     display flex
     flex-wrap wrap
     margin-top -2px
     >div
      width 20%
      height 50%
      img
        height 100%
        width 100%

  .first-inner-onepage
    width 100%
    height 98px
    img
      width 100%
      height 100%
  .first-inner-oneday
    height 39px
    width 100%
    background #ffffff
    padding 10px 10px
    box-sizing border-box
    position relative
    .first-inner-oneday-left
      display inline-block
      width 85px
      height 19px
      img
       width 100%
    .first-inner-oneday-flagtime
      position absolute
      top 10px
      right 60px

      .first-inner-oneday-flag
        display inline-block
        font-size 13px
      .first-inner-oneday-time
        display inline-block
        font-size 13px
        span
          display inline-block
          border 1px solid #7e8c8d
          padding 2px
    .first-inner-oneday-right
      display inline-block
      width 70px
      height 29px
      overflow hidden
      position absolute
      right 0
      top 0
      img
        width 100%



  .first-inner-shop
    width 100%
    height 130px
    .swiper-container
      width 100%
      height 100%
      .swiper-slide
        text-align: center;
        font-size: 18px;
        background: #fff;
        display flex
        justify-content center
        align-items center
        .swiper-wrap
           width 100px
           height 130px
           img
            height 84px
            width 84px
           .p-first
             text-align center
             font-size 14px
             color red
             margin-top 6px
             margin-bottom 5px
           .p-second
             text-align center
             font-size 12px
             color #999


  .first-inner-twopage
     width 100%
     height 98px
     img
       width 100%
       height 100%


  .first-inner-dongtu
    width 100%
    height 183px
    img
     width 100%


  .first-inner-fourimg
     width 100%
     height 200px
     .first-inner-fourimg-left
       display inline-block
       width 50.1333%
       height 100%
       float left
       img
         width 100%
         height 50%
         margin-top -2px
     .first-inner-fourimg-right
       display inline-block
       width 49.8667%
       height 100%
       float right
       img
         width 100%
         height 50%
         margin-top -2px



  .first-inner-autolunbo
     height 125px
     width 100%
     background firebrick
     img
       width 100%
       height 100%


  .first-wrap-body-scroll
    width 100%
    height 913px
    background #000000
    .first-wrap-body-scroll-left
       width 50%
       float: left
       img
         width 100%
    .first-wrap-body-scroll-right
       width 50%
       float right
       img
         width 100%



  .zuican
    background #000000
  .first-inner-zuican
    width 100%
    height 200px
    img
      width 100%

  .tebie
    margin-top -2px
    background #000000
  .first-inner-lastpage
    width 100%
    height 340px
    .first-inner-lastpage-left
      width 50%
      height 340px
      float left
      img
        width 100%
    .first-inner-lastpage-right
      width 50%
      height 340px
      float right
      img
        width 100%
        &:nth-child(2)
          margin-top -3px
  .manmu
    background #000000
    margin-top -2px

  .first-inner-last
    height 86px
    width 100%
    background #ffffff
    display flex
    justify-content center
    flex-direction column
    align-items center
    margin-bottom 55px
    .first-inner-last-top
      margin 0 5px
      font-size 14px
      span
        margin 0 5px
      span:nth-child(1)
        color red
    .first-inner-last-bottom
       margin-top 10px
       span
         font-size 12px
         color #7e8c8d


  .swiper-pagination-bullet
    transition width  1s
  .swiper-pagination-bullet-active
     width 16px
     height 8px
     border-radius 5px
     background #ffffff
     transiton width  1s


</style>
