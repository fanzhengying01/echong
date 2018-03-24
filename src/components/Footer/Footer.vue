<template>
  <div class="footer-wrap">
    <div class="logo-first "  @click="goto('/first')"  :class="{on:isCurrent('/first')}">
    </div>
    <div  class="logo-second " @click="goto('/second')" :class="{on:isCurrent('/Second')}">
    </div>
    <div  class="logo-third" @click="goto('/third')" :class="{on:isCurrent('/third')}">
    </div>
    <div class="logo-fourth" @click="goto('/fourth')" :class="{on:isCurrent('/fourth')}">
    </div>
  </div>
</template>

<script>
  export default {
    methods:{
      goto(path){
        this.$router.push(path)
      },
      isCurrent (path){
        return this.$route.path.search(path) === 0
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footer-wrap
    width 100%
    height 55px
    z-index 99
    background #ffffff
    position fixed
    bottom 0
    display flex
    justify-content space-between
    align-items center
    >div
      display flex
      justify-content center
      align-items center
      background url(../../common/image/img.png) no-repeat
      background-size 234px 163px
      margin 0 auto
      height 40px
      width 42px
      margin-top 2px
    .logo-first
        background-position: -85px 0;
        &.on
          background-position 0 0
    .logo-second
        background-position: -85px -41px;
        &.on
          background-position 0 -41px
    .logo-third
        background-position: -85px -81px;
        &.on
          background-position 0 -81px
    .logo-fourth
        background-position: -85px -122px;
        &.on
          background-position 0 -122px



</style>
