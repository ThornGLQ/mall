<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item,i) in menuList" :key="i">
                  <li v-for="(sub,j) in item" :key="j">
                    <a :href="sub?'/#/product/'+sub.id:''">
                      <img :src="sub?sub.img:'/imgs/item-box-1.png'" >
                      {{sub?sub.name:'小米9'}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
              <div class="children"></div>
            </li>
          </ul>
        </div>
        <swiper v-bind:options="swiperOption">
          <swiper-slide v-for="(item,index) in slideList" v-bind:key="index">
            <a v-bind:href="'/#/product/'+item.id"><img v-bind:src="item.img"></a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </swiper>
      </div>
      <div class="ads-box"></div>
      <div class="banner"></div>
      <div class="product-box"></div>
    </div>
    <ServiceBar></ServiceBar>
  </div>
</template>
<script>
import ServiceBar from './../components/ServiceBar';
import 'swiper/swiper.scss';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
export default {
  name:'nav-index',
  components:{
    Swiper,
    SwiperSlide,
    ServiceBar
  },
  data(){
    return{
      swiperOption:{
        autoplay:true,
        loop:true,
        effect:'cube',
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6
        }
      },
      pagination:{
        el:'.swiper-pagination',
        clickable:true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slideList:[{
          id:'42',
          img:'/imgs/slider/slide-1.jpg'
        }, {
          id:'46',
          img:'/imgs/slider/slide-2.jpg'
        }, {
          id:'',
          img:'/imgs/slider/slide-3.jpg'
        }, {
          id:'',
          img:'/imgs/slider/slide-4.jpg'
        }, {
          id:'',
          img:'/imgs/slider/slide-5.jpg'
        }
      ],
      menuList:[
        [{
          id:30,
          name:'小米CC9',
          img:'/imgs/item-box-1.png'
        },{
          id:31,
          name:'小米8青春版',
          img:'/imgs/item-box-2.png'
        },{
          id:32,
          name:'Redmi K20 Rro',
          img:'/imgs/item-box-3.jpg'
        },{
          id:33,
          name:'移动4G+专区',
          img:'/imgs/item-box-4.jpg'
        }],
        [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
      ]

    }
  }
}
</script>
<style lang="scss">
  @import "./../assets/scss/mixin.scss";
  @import "./../assets/scss/config.scss";
  .index{
    .swiper-box{
      .nav-menu{
        position: absolute;
        width: 264px;
        height: 451px;
        z-index: 9;
        padding: 26px 0;
        background-color: rgba(85,88,90,.48);
        box-sizing: border-box;

        .menu-wrap{
          .menu-item{
            height: 50px;
            line-height: 50px;
            a{
              display: block;
              position: relative;
              color: #ffffff;
              font-size: 16px;
              padding-left: 30px;
              &:after{
                position: absolute;
                right: 30px;
                top:17.5px;
                content: ' ';
                @include bgImg(10px,15px,'/imgs/icon-arrow.png');
              }
            }
            &:hover{
              background-color: $colorA;
              .children{
                display: block;
              }

            }
            .children{
              display: none;
              position: absolute;
              width: 962px;
              height: 451px;
              background-color: $colorG;
              top:0;
              left: 264px;
              border: 1px solid $colorH;

              ul{
                display: flex;
                justify-content: space-between;
                height: 75px;
                li{
                  height: 75px;
                  line-height: 75px;
                  flex:1;
                  padding-left: 23px;
                }
                a{
                  color:$colorB;
                  font-size: 14px;
                }
                img{
                  width: 42px;
                  height: 35px;
                  vertical-align: middle;
                  margin-right: 15px;
                }
              }
            }
          }
        }
      }
      .swiper-container{
        height: 451px;
        .swiper-button-prev{
          position: absolute;
          left: 274px;
        }
        img{
          width: 100%;
          height: 100%;
        }
      }

    }
  }
</style>