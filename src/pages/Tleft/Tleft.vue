<template>
  <div class="second-body">
    <div class="second-body-ul-wrap">
     <ul class="lala">
      <li  :class="{on:showing === index}"  @click="show(index)"  v-for="(category,index) in categorys" :key="index">{{category.name}}</li>
    </ul>
    </div>
    <!--{{categorys[showing].cate_list}}-->
    <div class="second-body-content" v-if="categorys[showing]" >
      <div class="www">
      <div v-for="(c,index) in categorys[showing].cate_list" :key="index">
        <div class="second-body-content-top" v-if="c.type===0">
        <p>
          <span>{{c.title}}</span>
          <img src="../../common/image/cate_right_img.png" alt="">
        </p>
        <div class="second-body-top-img">
          <div v-for="(l,index) in c.list" :key="index">
            <img v-lazy=l.photo alt="">
            <span>{{l.name}}</span>
          </div>
        </div>
      </div>
        <div class="second-body-content-bottom" v-if="c.type===2">
        <p>
          <span>{{c.title}}</span>
        </p>
        <div class="second-body-top-img">
          <div v-for="(l,index) in c.list" :key="index">
            <div>
              <img v-lazy=l.logo alt="">
            </div>
            <span>{{l.name}}</span>
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
      data(){
      return{
        showing:0
      }
    },
      mounted(){
        this.$nextTick(function () {
          new BScroll('.second-body-ul-wrap',{
            scrollY: true,
            click: true
          })
//          new BScroll('.second-body-content',{
//            scrollY: true,
//            click: true
//          })
          this.$store.dispatch('getcategorys')

        })
      },
      watch:{
        showing(){
         this.$nextTick(function () {
          new BScroll('.second-body-content',{
              scrollY: true,
              click: true
           })
         })
        }
      },
      computed:{
        ...mapState(['categorys'])
    },
      methods:{
        show(index){
          this.showing = index
        }
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .second-body
    width 100%
    height 100%
    position absolute
    padding-top 41px
    .second-body-ul-wrap
      display inline-block
      width 70px
      position fixed
      left 0
      top 40px
      height calc(100% - 95px)
      overflow hidden
      ul
        width 70px
        li
          width 70px
          height 50px
          background #ffffff
          margin-top 1px
          display flex
          justify-content center
          align-items center
          font-size 13px
        .on
          background transparent
          color: #ed4044
    .second-body-content
      flex 1
      display flex
      background #ffffff
      width calc(100% - 75px)
      padding 5px
      margin-top 5px
      flex-direction column
      top 45px
      right 0
      overflow hidden
      position fixed
      right 0
      height calc(100% - 106px)
      box-sizing border-box
      .www
       .second-body-content-top
        background #ffffff
        margin-bottom 20px
        p
          display flex
          justify-content space-between
          margin 10px  0
          padding 0 10px
          img
            width 46px
            height 10px
          span
            font-size 12px
            color #7e8c8d

        .second-body-top-img
          width 100%
          display flex
          flex-wrap wrap
          justify-content flex-start
          >div
            width 33%
            padding 5px
            box-sizing border-box
            img
              width 100%
            span
              display flex
              width 100%
              height 20px
              font-size 13px
              color #333
              justify-content center
              align-items flex-end
      .second-body-content-bottom
        background #ffffff
        border-top 2px solid #f5f5f5
        p
          display flex
          justify-content flex-start
          margin 10px  0
          padding 0 10px
          img
            width 46px
            height 10px
          span
            font-size 12px
            color #7e8c8d
        .second-body-top-img
          width 100%
          display flex
          flex-wrap wrap
          justify-content flex-start
          >div
            width 50%
            padding 5px
            box-sizing border-box
            >div
              height 45px
              border 1px solid #f5f5f5
              display flex
              justify-content center
              img
                height 100%
            span
              display flex
              width 100%
              height 20px
              font-size 13px
              color #333
              justify-content center
              align-items flex-end

</style>
