<template>
  <div class="cart">
    <order-header title="我的购物车">
      <template v-slot:tip>
        <span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span>
      </template>
    </order-header>
    <div class="wrapper">
      <div class="container">
        <div class="cart-box">
          <ul class="item-head">
            <li class="col-1">
              <span class="checkbox" :class="{'checked':allChecked}" @click="toggleAll"></span>
              全选
            </li>
            <li class="col-3">商品名称</li>
            <li class="col-1">单价</li>
            <li class="col-2">数量</li>
            <li class="col-1">小计</li>
            <li class="col-1">操作</li>
          </ul>
          <ul class="item-list" v-for="(item,index) in list" :key="index">
            <li class="cart-item">
              <div class="item-check">
                <span class="checkbox" :class="{'checked':item.productSelected}" @click="updateCart(item)"></span>
              </div>
              <div class="item-name">
                <img v-lazy="item.productMainImage" alt="">
                <span>{{ item.productName +','+item.productSubtitle}}</span>
              </div>
              <div class="item-price">{{item.productPrice}}</div>
              <div class="item-num">
                <div class="num-box">
                  <a href="javascript:;" @click="updateCart(item,'-')">-</a>
                  <span>{{item.quantity}}</span>
                  <a href="javascript:;"  @click="updateCart(item,'+')">+</a>
                </div>
              </div>
              <div class="item-total">{{ item.productTotalPrice }}</div>
              <div class="item-del" @click="delProduct(item)"></div>
            </li>
          </ul>
        </div>
        <div class="order-wrap">
          <div class="cart-tip fl">
            <a href="/#/index">继续购物</a>
            共<span>{{list.length}}</span>件商品，已选择<span>{{checkedNum}}</span>件
          </div>
          <div class="total fr">
            合计：<span>{{cartTotalPrice}}</span>元
            <a href="javascript:;" class="btn" @click="goToConfirm">去结算</a>
          </div>
        </div>
      </div>
    </div>

    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import OrderHeader from '../components/OrderHeader'
import ServiceBar from "@/components/ServiceBar";
import NavFooter from '../components/NavFooter'


export default {
  name:'cart',
  components:{
    ServiceBar,
    OrderHeader,
    NavFooter,

  },
  data(){
    return{
      allChecked:false,//是否全选
      list:[],//商品列表
      cartTotalPrice: 0,//商品总金额
      checkedNum:0//选择商品数量
    }
  },
  mounted() {
    this.getCartList();
  },
  methods:{

    getCartList(){
      this.axios.get('/carts').then((res)=>{
        this.list = res.cartProductVoList || [];
        this.allChecked = res.selectedAll;
        this.cartTotalPrice = res.cartTotalPrice;
      })
    },
    updateCart(item,type){
      let quantity=item.quantity,
          selected=item.productSelected;
      if(type=='-'){
        if(quantity==1){
          alert('商品至少保留一件');
          return;
        }
        quantity-=1;
      }else if(type=='+'){
        if(quantity>item.productStock){
          alert("购买数量不能超过库存数量");
          return;
        }
        quantity+=1;
      }else {
        selected = !item.productSelected;
      }
      this.axios.put('/carts/'+item.productId,{
        quantity,
        selected
      }).then((res)=>{
        this.renderData(res);
      })

    },
    delProduct(item){
      this.axios.delete('/carts/'+item.productId).then((res)=>{
        alert("删除成功");
        this.renderData(res);
      })
    },
    toggleAll(){
      let url = this.allChecked?'/carts/unSelectAll':'/carts/selectAll';
      this.axios.put(url).then((res)=>{
        this.renderData(res);
      })
    },
    goToConfirm(){
      this.getCartList();
      this.$router.push('/order/confirm');
    },
    renderData(res){
      this.list = res.cartProductVoList || [];
      this.allChecked = res.selectedAll;
      this.cartTotalPrice = res.cartTotalPrice;
      this.checkedNum = this.list.filter(item=>item.productSelected).length;
    },
  }
}
</script>
<style lang="scss">
  @import './../assets/scss/config';
  @import './../assets/scss/mixin';
  .cart{
    .wrapper{
      background-color: $colorJ;
      padding-top: 30px;
      padding-bottom: 114px;
      .cart-box{
        background-color: $colorG;
        font-size: 14px;
        color: $colorD;
        text-align: center;
        .checkbox{
          display: inline-block;
          width: 22px;
          height: 22px;
          border: 1px solid #e5e5e5;
          vertical-align: middle;
          margin-right: 17px;
          cursor:pointer;
        }
        .checked{
          background: url("/imgs/icon-gou.png")$colorA no-repeat center;
          background-size: 16px 12px;
          border:none;
        }
        .item-head{
          display: flex;
          height: 79px;
          line-height: 79px;
          .col-1{
            flex: 1;
          }
          .col-2{
            flex: 2;
          }
          .col-3{
            flex: 3;
          }
        }
        .item-list{
          .cart-item{
            display: flex;
            align-items: center;
            height: 125px;
            border-top: 1px solid #e5e5e5;
            font-size: 16px;
            color: #333333;
            .item-check{
              flex: 1;
            }
            .item-name{
              flex: 3;
              font-size: 18px;
              display: flex;
              align-items: center;
              //justify-content: space-between;
              img{
                width: 80px;
                height: 80px;
                vertical-align:middle;
              }
              span{
                margin-left: 30px;
              }
            }
            .item-price{
              flex: 1;
            }
            .item-num{
              flex: 2;
              .num-box{
                display: inline-block;
                width: 150px;
                height: 40px;
                line-height: 40px;
                border: 1px solid #e5e5e5;
                font-size:14px;
                a{
                  display: inline-block;
                  width: 50px;
                  color:#333333;
                }
                span{
                  display: inline-block;
                  width: 50px;
                  color: #333333;
                }
              }
            }
            .item-total{
              flex: 1;
              color: $colorA;
            }
            .item-del{
              @include bgImg(12px,12px,'/imgs/icon-close.png');
              flex: 1;
              cursor: pointer;
              &:hover{
                transform: scale(1.2);

              }
            }
          }

        }
      }
      .order-wrap{
        font-size: 16px;
        height: 50px;
        line-height: 50px;
        color: #666666;
        margin-top: 20px;
        .cart-tip{
          margin-left: 30px;
          a{
            margin-right: 40px;
          }
          span{
            color: $colorA;
            margin: 0 5px;
          }
        }
        .total{
          font-size: 14px;
          color: $colorA;
          span{
            font-size: 24px;
          }
          a{
            width: 200px;
            height: 50px;
            line-height: 50px;
            margin-left: 38px;
            font-size: 18px;
            color: #ffffff;
          }
        }
      }
    }

  }
</style>