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
            <input type="text" placeholder="请输入账号" v-model="username">
          </div>
          <div class="input">
            <input type="password" placeholder="请输入密码" v-model="password">
          </div>
          <div class="submit">
            <a href="javascript:;" @click="login">登录</a>
          </div>
          <span class="sms" @click="register">手机短信登录/注册</span>
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
// import Vue from 'vue';
// import VueCookie from 'vue-cookie';
import {mapActions} from "vuex";
// Vue.use(VueCookie);
export default {
  name:'login',
  data(){
    return{
      username:'',
      password:'',
      userId:'',
    }
  },
  mounted() {

  },
  methods:{
    login(){
      let { username,password } = this;
      this.axios.post('/user/login',{
        username,
        password
      }).then((res)=>{
        this.$cookie.set('userId',res.id,{expires:'1M'});
        this.$store.dispatch('saveUserName',res.username);
        // this.saveUserName(res.username);
        this.$router.push({
          name:'index',
          params:{
            from:'login'
          }
        });
      })
    },
    ...mapActions(['saveUserName']),

    // login(){
    //   let username=this.username;
    //   let password=this.password;
    //   this.axios.post('/user/login',{
    //     username:username,
    //     password:password
    //   }).then((res)=>{
    //     this.res=res;
    //     this.$router.push('/index');
    //   })
    // },
    register(){
      this.axios.post('/user/register',{
        username:'glq',
        password:'glq',
        email:'glq@163.com'
      }).then((res)=>{
        this.res=res
        alert(res);
        alert('注册成功')
      })
    }
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
      background: url("/imgs/login-bg.jpg") no-repeat 50%;
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
            box-sizing: border-box;
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