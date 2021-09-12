<template>
  <div class="header-logo">
    <a href="/#/index"></a>
  </div>
</template>
<script>
  export default {
   name:'header-logo',
  }
</script>
<style lang="scss">
@import "./../assets/scss/mixin";
  .header-logo{
    display: inline-block;
    width: 55px;
    height: 55px;
    background-color: #FF6600;
    a{
      display: inline-block;
      width: 110px;
      height: 55px;
      &:before{
        content: " ";
        @include bgImg(55px,55px,"/imgs/mi-logo.png",55px);
        transition: margin .2s;
      }
      &:after{
        content: " ";
        @include bgImg(55px,55px,"/imgs/mi-home.png",55px);
      }
      &:hover:before{
        margin-left: -55px;
        transition: margin .2s;
      }
    }
  }
</style>