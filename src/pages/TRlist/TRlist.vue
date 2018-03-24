<template>
  <div class="wrap" >
   <div class="hh">
    <Headerflag></Headerflag>
    <div class="content-ul" v-for="(b,index) in allbrands.brand" :key="index">
      <p>{{b.order}}</p>
      <div class="content-li" v-for="(list,index) in b.list">
        <div>
          <div>
            <img v-lazy='list.logo' alt="">
          </div>
        </div>
        <p>{{list.name}}</p>
        <p>{{list.address}}</p>
      </div>
    </div>

   </div>
    <div class="list">
      <ul ref="ul">
        <li v-for="(b,index) in allbrands.brand" :class="{on:index===currentIndex}"
            :key="index" @click="select(index)">{{b.order}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Headerflag from '../../components/Headerflag/Headerflag.vue'
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data(){
      return {
        scrollY: 0, //右侧Y轴滑动的坐标
        tops: [], // 包含右侧所有分类小列表的top值
      }
    },
    components:{
      Headerflag
    },
    computed:{
      ...mapState(['allbrands']),
      // 当前分类的下标
      currentIndex () { // findIndex(): 返回值是第个返回true所对应的index
        const {scrollY, tops} = this
        // scrollY要>=当前的top && 小于下一个top
        return tops.findIndex((top, index) => scrollY>=top && scrollY<tops[index+1])
      }
    },

    mounted(){
      this.$store.dispatch('getallbrands',() => {
        this.$nextTick(() => {
          this._scrollinit()
          this._initTops()
        })
      })

    },
    methods:{
      _scrollinit(){
          this.foodsScroll = new BScroll('.wrap',{
            probeType: 2, // 手指滑动(惯性滑动和编码滑动不监视)
            click: true //响应点击
          })
          // 监视滑动过程
          this.foodsScroll.on('scroll', (pos) => {
            console.log(pos.y)
            // 保存y
            this.scrollY = Math.abs(pos.y)
          })
          // 监视滑动结束
          this.foodsScroll.on('scrollEnd',(pos) => {
            console.log('滑动结束', pos.y)
            this.scrollY = Math.abs(pos.y)  // 解决惯性滑动更新
          })
        },
      _initTops () {
        const tops = []
        let top = 0
        // 计算各个 top, 并保存到tops
        tops.push(top)
        const lis = document.getElementsByClassName('content-ul')
        Array.prototype.slice.call(lis).forEach((li, index) => {
          top += li.clientHeight
          tops.push(top)
        })
        // 保存tops
        this.tops = tops
        console.log(this.tops)
      },
      select(index){
        const top = this.tops[index]
        this.scrollY = top
        this.foodsScroll.scrollTo(0, -top, 300)
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.wrap
   width 100%
   position absolute
   top 0
   bottom 0
   overflow hidden
   .hh
     margin-right 0
     overflow hidden
     .content-ul
       p
         width 100%
         height 24px
         background transparent
         font-size  12px
         color #999
         display flex
         align-items center
         padding-left 20px
       .content-li
         width 100%
         height 73px
         background #ffffff
         padding-right 20px
         box-sizing border-box
         position relative
         >div
           width 100%
           background-color #ffffff
           padding 10px
           box-sizing border-box
           border-bottom 1px solid #f5f5f5
           >div
             width 90px
             box-sizing border-box
             padding 5px
             background #ffffff
             border 1px solid #f5f5f5

             img
               width 100%
         p:nth-child(2)
           width 50%
           position absolute
           top 7px
           left 90px
           font-size 16px
           color #000000
         p:nth-child(3)
           width 50%
           position absolute
           top 28px
           left 94px
   .list
        position fixed
        right 0
        top 50%
        transform translateY(-50%)
        li
           font-size 12px
           color  #666
           font-weight 600
           &.on
             color red


</style>
