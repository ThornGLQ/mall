<template>
  <div class="login">
    <div class="container">
      <a href=""><img src="/imgs/login-logo.png" alt=""></a>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="login-form">
          <div class="login-checked">
            <span class="checked">帐号登录</span>
            <span class="sep-line">|</span>
            <span>扫码登录</span>
          </div>
          <div class="input">
            <input type="text" placeholder="请输入账号">
          </div>
          <div class="input">
            <input type="password" placeholder="请输入密码">
          </div>
          <div class="submit">
            <a href="javascript:;">登录</a>
          </div>
          <span class="sms">手机短信登录/注册</span>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="foot-link">
        <a href="https://www.mi.com/index.html" target="_blank">小米商城</a><span>|</span>
        <a href="https://home.miui.com/" target="_blank">MIUI</a><span>|</span>
        <a href="https://home.mi.com/index.html" target="_blank">米家</a><span>|</span>
        <a href="https://b.mi.com/?client_id=180100031058&masid=17409.0358#/" target="_blank">政企服务</a><span>|</span>
        <a href="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f516fe9e2c01.html" target="_blank">小米公司儿童信息保护规则</a><span>|</span>
        <a href="https://xiaomi.tmall.com/" target="_blank">小米天猫店</a>
      </div>
      <p>Copyright ©2021 mi.futurefe.com All Rights Reserved</p>

    </div>
  </div>
</template>
<script>

export default {
  name:'nav-login',
  components:{

  }
}
</script>
<style lang="scss">
@import './../assets/scss/config.scss';
  .login{
    a{
      width: 230px;
      height: 113px;
      img{
        width: 230px;
        height: 113px;
      }
    }
    .wrapper{
      height: 576px;
      background: url(/imgs/login-bg.jpg) no-repeat 50%;
      .login-form{
        box-sizing: border-box;
        text-align: center;
        width: 410px;
        height: 510px;
        background-color: $colorG;
        position: absolute;
        right: 0;
        top: 33px;
        .login-checked{
          font-size: 24px;
          font-weight: bolder;
          margin: 40px auto 49px;
          .checked{
            color: $colorA;
          }
          .sep-line{
            margin:0 32px ;
          }
        }
        .input{
          width: 348px;
          height: 50px;
          border: 1px solid $colorH;
          margin-left: 31px;
          margin-bottom: 20px;
          input{
            padding-left: 18px;
            width: 330px;
          }
        }
        .submit{
          width: 348px;
          height: 50px;
          background-color: $colorA;
          margin-top: 30px;
          margin-left: 31px;
          font-size: 16px;
          a{
            display: block;
            width: 100%;
            height: 50px;
            line-height: 50px;
            color: $colorG;

          }
        }
        .sms{
          font-size: 14px;
          position: absolute;
          left: 31px;
          top:340px;
          color: $colorA;
          cursor: pointer;
        }
      }

    }
    .footer{
      height: 100px;
      padding-top: 60px;
      text-align: center;
      background-color: $colorG;
      border: none;
      .foot-link{
        a{
          color: #999999;
          font-size: 16px;
        }
        span{
          margin: 0 12px;
        }
      }
      p{
        display: block;
        color: #999999;
        margin-top: 13px;
      }
    }

  }
</style>