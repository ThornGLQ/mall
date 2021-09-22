<template>
  <div class="detail">
    <product-param :title="product.name"></product-param>
    <div class="wrapper">
      <div class="container">
        <div class="swiper">
          <swiper :options="swiperOption">
            <swiper-slide><img src="/imgs/detail/phone-1.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="/imgs/detail/phone-2.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="/imgs/detail/phone-3.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="/imgs/detail/phone-4.jpg" alt=""></swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
          </swiper>
        </div>
        <div class="content">
          <h2 class="item-title">{{ product.name }}</h2>
          <p class="item-info">
            相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS / 骁龙845处理器 / 红
            外人脸解锁 / AI变焦双摄 / 三星 AMOLED 屏
          </p>
          <div class="delivery">小米自营</div>
          <div class="item-price">{{ product.price }}<span class="del">1999元</span></div>
          <div class="line"></div>
          <div class="item-address">
            <i class="icon-los"></i>
            <div class="addr">北京 北京市 朝阳区 安定门街道</div>
            <div class="stock">有现货</div>
          </div>
          <div class="item-version">
            <h2>选择版本</h2>
            <div class="phone fl" :class="{'checked':version==1}" @click="version=1">6GB+64GB 全网通</div>
            <div class="phone fr" :class="{'checked':version==2}" @click="version=2">4GB+64GB 移动4G</div>
          </div>
          <div class="item-color">
            <h2>选择颜色</h2>
            <div class="phone checked">
              <span class="icon-color"></span>深空灰
            </div>
          </div>
          <div class="item-total">
            <div class="item-info">
              <div class="fl" >{{ product.name }} {{version==1?versionInfo1:versionInfo2}}  深灰色</div>
              <div class="fr">{{product.price}}元</div>
            </div>
            <div class="total-price">总计：{{product.price}}元</div>
          </div>
          <div class="btn-add">
            <a href="javascript:;" @click="addCart">加入购物车</a>
          </div>
        </div>
      </div>
    </div>
    <div class="price-info">
      <div class="container">
        <h2>价格说明</h2>
        <div class="desc">
          <img src="/imgs/detail/item-price.jpeg" alt="">
        </div>
      </div>
    </div>
    <service-bar></service-bar>
  </div>
</template>
<script>
  import ProductParam from './../components/ProductParam';
  import ServiceBar from "@/components/ServiceBar";
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  import 'swiper/dist/css/swiper.css'

export default {

  name:'detail',
  data(){
    return{
      product:{},//商品信息
      id:this.$route.params.id,//获取商品id
      version:1,//商品版本切换
      versionInfo1:"6GB+64GB 全网通",
      versionInfo2:"4GB+64GB 移动4G",
      swiperOption:{
        pagination: {
          el: '.swiper-pagination',
          clickable:true,
        },
      }
    }
  },
  mounted() {
    this.getProductInfo();
  },
  methods:{
    getProductInfo() {
      this.axios.get('/products/'+this.id).then((res)=>{
        this.product=res;
      })
    },
    addCart(){
      this.axios.post('/carts',{
        productId:this.id,
        selected:true
      }).then((res={})=>{
        this.$store.dispatch('saveCartCount',res.cartTotalQuantity);
        this.$router.push('/cart');
      })
    }
  },
  components:{
    ServiceBar,
    ProductParam,
    swiper,
    swiperSlide,
  }

}
</script>
<style lang="scss">
@import "./../assets/scss/config";
@import "./../assets/scss/mixin";
  .detail{
    .wrapper{
      display: flex;
      box-sizing: border-box;
      .swiper{
        width: 642px;
        height: 617px;
        float: left;
        margin-top: 5px;
        img{
          height: 100%;
          width: 100%;
        }
      }
      .content{
        float: right;
        width: 584px;
        height: 870px;
        .item-title{
          font-size: 28px;
          padding-top: 30px;
          padding-bottom: 16px;
          height: 28px;
        }
        .item-info{
          font-size: 14px;
          height: 36px;
        }
        .delivery{
          font-size: 16px;
          color: $colorA;
          margin-top: 26px;
          margin-bottom: 14px;
          height: 15px;
        }
        .item-price{
          font-size: 20px;
          color: $colorA;
          .del{
            font-size: 16px;
            color:$colorD;
            margin-left: 10px;
            text-decoration: line-through;
          }
        }
        .line{
          height: 0;
          margin-top: 25px;
          margin-bottom: 25px;
          border-top: 1px solid #E5E5E5;
        }
        .item-address{
          height: 108px;
          background-color: #fafafa;
          border:1px solid #E5E5E5;
          box-sizing:border-box;
          padding-top: 31px;
          padding-left: 64px;
          font-size: 14px;
          line-height: 14px;
          position: relative;
          .icon-los{
            position: absolute;
            top: 27px;
            left: 34px;
            @include bgImg(20px,20px,'/imgs/detail/icon-loc.png')
          }
          .addr{
            color:#666666;
          }
          .stock{
            margin-top: 15px;
            color: $colorA;
          }
        }
        .item-version,.item-color{
          margin-top: 30px;
          h2{
            font-size: 18px;
            margin-bottom: 20px;
          }
          .phone{
            width: 287px;
            height: 50px;
            border: 1px solid #E5E5E5;
            font-size: 16px;
            color:#333333;
            line-height: 50px;
            text-align: center;
            box-sizing: border-box;
            cursor: pointer;
            margin-bottom: 30px;
          }
          .icon-color{
            display: inline-block;
            margin-right: 5px;
            width: 14px;
            height: 14px;
            background-color: #666666;
          }
          .checked{
            border: 1px solid $colorA;
            color: $colorA;
          }
        }
        .item-total{
          height: 108px;
          background-color: #fafafa;
          padding: 24px 33px 29px 30px;
          margin-top: 50px;
          box-sizing: border-box;
          .item-info{
            font-size: 14px;
          }
          .total-price{
            font-size: 24px;
            color: $colorA;
          }
        }
        .btn-add{
          width: 290px;
          height: 60px;
          line-height: 60px;
          font-size: 16px;
          text-align: center;
          margin-top: 30px;
          background-color: $colorA;
          cursor: pointer;
          a{
            color: $colorG;
          }
        }
      }
    }
    .price-info{
      height: 340px;
      background-color: #f3f3f3;
      //display: inline-block;
      h2{
        font-size: 24px;
        color:#333333;
        padding-top: 38px;
        margin-bottom: 30px;
      }
    }
  }
</style>