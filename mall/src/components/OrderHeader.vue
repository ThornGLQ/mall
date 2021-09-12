<template>
  <div class="order-header">
    <div class="container">
      <div class="nav-left">
        <header-logo></header-logo>
        <div class="title">
          <h2>{{ title }}<slot name="tip"></slot></h2>

        </div>
      </div>
      <div class="username">
        <a href="javascript:;">{{username}}</a>
      </div>
    </div>
  </div>

</template>
<script>
  import HeaderLogo from "../components/HeaderLogo";
  import {mapState} from 'vuex';
  export default {
    name:'order-header',
    components:{
      HeaderLogo,
    },
    props:{
      title:String,
    },
    computed:{
      ...mapState(['username'])
    }
  }
</script>
<style lang="scss">
  @import "./../assets/scss/mixin";
  @import "./../assets/scss/config";
  .order-header{
    height: 60px;
    padding: 30px 0;
    border-bottom: 2px solid $colorA;
    .header-logo{
      float: left;
    }
    .title,.username{
      display: inline-block;
      height: 55px;
      line-height: 55px;
    }
    .title{
      float: left;
      margin-left: 54px;
      h2{
        font-size: 28px;
        color:#333333;
        span{
          font-size:14px;
          margin-left:17px;
          color:#999999;
          font-weight:200;
        }
      }


    }
    .username{
      float: right;
      a{
        color:#666666;
        font-size:16px;
      }
    }

  }
</style>