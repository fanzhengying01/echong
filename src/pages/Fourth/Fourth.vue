<template>
  <div class="fourth-wrap">
    <div class="fourth-header">
      <div class="third-header-infour">
        <i class="iconfont icon-fanhui" @click="$router.back(-1)"></i>
        <span>注册</span>
      </div>
      <div class="third-header-logo">
        <img src="../../common/image/ech/logo.png" alt="">
      </div>
      <div class="third-header-enter">

        <div class="third-header-enter-left" @click="showa()">
              普通登陆
        </div>
        <div class="third-header-enter-right" @click="showb()">
               手机密码登陆
        </div>
        <i class="iconfont icon-sanjiaotop" v-show="ishowa"></i>
        <i class="iconfont icon-sanjiaotop" v-show="ishowb"></i>

      </div>
    </div>
    <div class="fourth-body-wrap">

      <!--<form @submit.prevent="login">-->
       <div class="fourth-body-input" v-if="ishowa">
      <div class="third-body-input-top" >
        <i class="iconfont icon-denglu"></i>
        <input type="text" placeholder="请输入用户名" maxlength="8" v-model="name">
      </div>
      <div class="third-body-input-bottom">
        <i class="iconfont icon-14"></i>
        <input type="text" placeholder="请输入密码" maxlength="10" v-model="password">
      </div>
    </div>

       <div class="fourth-body-input2"v-if="ishowb">
        <div class="third-body-input-top">
          <i class="iconfont icon-shouji"></i>
          <input type="text" placeholder="请输入手机号"  maxlength="11" v-model="phone">
        </div>
        <div class="third-body-input-top">
          <i class="iconfont icon-14"></i>
          <input type="text" placeholder="请输入密码" maxlength="10" v-model="password">
        </div>

        <!--1-->
        <div class="third-body-input-bottom" v-if="!computeTime" >
          <i class="iconfont icon-14"></i>
          <input type="text" placeholder="请输入验证码"  maxlength="4">
          <a href="javascript:;" @click.prevent="getCode" :class="{on:rightphone}">获取动态验证码</a>
        </div>
        <!--2-->
        <div class="third-body-input-bottom" v-if="computeTime">
          <i class="iconfont icon-14"></i>
          <input type="text" placeholder="请输入验证码" maxlength="4" v-model="code">
          <a href="javascript:;" class="on">剩余{{computeTime}}s</a>
        </div>
      </div>



       <div class="fourth-body-text">
        忘记密码？
      </div>
       <div class="fourth-body-denglu" @click="login">
        <!--<div>登&nbsp&nbsp&nbsp&nbsp&nbsp录</div>-->
         <mt-button class="b">登&nbsp&nbsp&nbsp&nbsp&nbsp录</mt-button>
      </div>
      <!--</form>-->
      <div class="fourth-body-hezuo">
        合作网站登录
      </div>
      <div class="tubiao">
        <i class="iconfont icon-unie652"></i>
        <i class="iconfont icon-zhifubao"></i>
        <i class="iconfont icon-weixin"></i>
      </div>


    </div>
  </div>
</template>

<script>
  import { MessageBox } from 'mint-ui';
  export default {
    data(){
      return {
        ishowa:true,
        ishowb:false,

        name:'',   //姓名
        password:'',    //密码

        phone:'',   //号码初始
        code:'',  //验证码初始
        computeTime: 0, //计时时间

        alertText: '', // 提示框文本
        alertShow: false, //是否显示提示框
      }
    },
    computed:{
       //      计算属性
      rightphone(){
        return /^1\d{10}$/.test(this.phone)
      },
      rightcode(){
        return /^\w{4}$/.test(this.code)
      },
      rightname(){
        return /^[a-zA-Z]{4,8}$/.test(this.name)
      },
      rightpassword(){
        return /^\d{6,10}$/.test(this.password)
      }
    },
    methods:{
      showa(){
        this.ishowa = true
        this.ishowb = false
      },
      showb(){
        this.ishowa = false
        this.ishowb = true
      },

     //  获取验证码 样式改变
      getCode () {
        if (this.rightphone) {
          this.computeTime = 10
          // 启动循环定时器, 每隔1s减少1
          const intervalId = setInterval(() => {
            this.computeTime--
            //如果到时, 停止计时
            if (this.computeTime === 0) {
              clearInterval(intervalId)
            }
          }, 1000)
        }

  },

     //     登陆前台判断
      login(){
        if(this.ishowb){
          const {rightphone, phone,rightcode,rightpassword} = this
          if(!rightphone) { // 手机号
            MessageBox.confirm("请输入正确的手机号")
            return
          }else if(!rightcode){
            MessageBox.confirm("请输入正确的验证码")
            return
          }else if(!rightpassword) {
            MessageBox.confirm("请输入正确的密码")
            return
          }
        } else if(this.ishowa)  {
          const {rightname,rightpassword} = this
          if(!rightname){
            MessageBox.confirm("请输入正确的用户名")
            return
          } else if(!rightpassword){
            MessageBox.confirm("请输入正确的密码")
            return
          }
        }


        this.$router.push('/first')
      }
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .fourth-wrap
     .fourth-header
        width 100%
        height 170px
        background url("../../common/image/ech/bg.png") no-repeat
        background-size 100%
        .third-header-infour
           width 100%
           height 50px
           padding 0 10px 0 10px
           box-sizing border-box
           display flex
           justify-content space-between
           align-items center
           background transparent
           color #ffffff
           i
             font-size 15px
             font-weight 800
           span
             font-size 15px


        .third-header-logo
            width 100%
            height 50px
            display flex
            justify-content center
            margin-top 10px
            img
               height 100%
        .third-header-enter
            width 100%
            height 44px
            position relative
            >div
               width 50%
               height 100%
               background transparent
               display flex
               float left
               margin-top 16px
               justify-content center
               align-items center
               color #ffffff
            i
               position absolute
               width 24px
               font-size 25px
               color #ffffff
               &:nth-child(3)
                 bottom -24px
                 left 80px
               &:nth-child(4)
                 bottom -24px
                 right 80px


     .fourth-body-wrap
       width 100%
       background #ffffff
       padding-bottom 20px
       .fourth-body-input
          width 100%
          height 94px
          background #ffffff
          padding 0 20px
          box-sizing border-box
          .third-body-input-top
            height 50%
            width 100%
            background #ffffff
            display flex
            align-items center
            border-bottom 1px solid #f5f5f5
            i
              font-size 25px
              flex 1
              color #7e8c8d
            input
              flex 8
              outline none
          .third-body-input-bottom
            height 50%
            width 100%
            background #ffffff
            display flex
            align-items center
            border-bottom 1px solid #f5f5f5
            i
              font-size 25px
              flex 1
              color #7e8c8d
            input
              flex 8
              outline none
       .fourth-body-input2
         width 100%
         height 141px
         background #ffffff
         padding 0 20px
         box-sizing border-box
         .third-body-input-top
           height 33%
           width 100%
           background #ffffff
           display flex
           align-items center
           border-bottom 1px solid #f5f5f5
           i
             font-size 25px
             flex 1
             color #7e8c8d
           input
             flex 8
             outline none
         .third-body-input-bottom
           height 33%
           width 100%
           background #ffffff
           display flex
           align-items center
           border-bottom 1px solid #f5f5f5
           i
             font-size 25px
             flex 1
             color #7e8c8d
           input
             flex 8
             outline none
         .third-body-input-bottom
           height 33%
           width 100%
           background #ffffff
           display flex
           align-items center
           border-bottom 1px solid #f5f5f5
           position relative
           i
             font-size 25px
             flex 1
             color #7e8c8d
           input
             flex 8
             outline none
           a
             width 100px
             height 30px
             background #ffffff
             border-radius 5px
             color: #7e8c8d
             border: 1px solid #7e8c8d
             font-size 10px
             display flex
             justify-content center
             align-items center
             position absolute
             right 0
           .on
               border: 1px solid #eb4c33;
               color #ff4259;
       .fourth-body-text
         font-size 14px
         color #7e8c8d
         background #ffffff
         margin-top 2px
         padding 10px 10px
         display flex
         justify-content flex-end
       .fourth-body-denglu
         width 100%
         height 38px
         padding:0 10px
         box-sizing border-box
         .b
            background #2ec975
            width 100%
            height 100%
            border-radius 5px
            display: flex
            justify-content center
            align-items center
            color  #ffffff
       .fourth-body-hezuo
         margin-top 100px
         display flex
         justify-content center
         color #d7d7d7
         font-size 16px

       .tubiao
          width 100%
          height 60px
          font-size 60px
          display flex
          align-items center
          justify-content space-around
          margin-top 20px
          i
            font-size 60px
            &:nth-child(1)
              color pink
            &:nth-child(2)
              color red
            &:nth-child(3)
              color gold
</style>
