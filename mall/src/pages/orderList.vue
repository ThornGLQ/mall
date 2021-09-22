<template>
  <div class="order-list">
    <order-header title="订单列表">
      <template v-slot:tip>
        <span>请谨防钓鱼链接或诈骗电话，了解更多></span>
      </template>
    </order-header>
    <div class="wrapper">
      <div class="container">
        <div class="order-box" v-for="(item,index) in list" :key="index">
          <div class="order-item  clearfix" >
            <div class="item-title">
              <div class="title-info">
                {{item.createTime}}
                <span>|</span>
                <span>|</span>
                订单号：{{ item.orderNo }}
                <span>|</span>
                {{ item.paymentTypeDesc }}
              </div>
              <div class="title-price">
                应付金额：<span>{{ item.payment }}</span>元
              </div>
            </div>
            <div class="item-info">
              <div class="product-box" v-for="(product,j) in item.orderItemVoList" :key="j">
                <div class="product-list" >
                  <div class="list-img">
                    <img v-lazy="product.productImage" alt="">
                  </div>
                  <div class="list-info">
                    <div class="p-name">{{ product.productName }}</div>
                    <div class="p-price">{{ product.currentUnitPrice }}X{{ product.quantity }}元</div>
                  </div>
                </div>
              </div>
              <div class="info-state">
                <a href="javascript:;" @click="goToPay(item.orderNo)">{{item.statusDesc}}</a>
              </div>
            </div>
          </div>
        </div>
        <div class="pagination">

        </div>
      </div>
    </div>
  </div>
</template>
<script>

import OrderHeader from "@/components/OrderHeader";
export default {
  name:'order-list',
  components: {OrderHeader},
  data(){
    return{
      list:[],
    }
  },
  mounted() {
    this.getOrderList();
  },
  methods:{
    getOrderList(){
      let pageSize=10,pageNum=1;
      this.axios.get('/orders',{
        pageSize,
        pageNum,
      }).then((res)=>{
        this.list=res.list;
      })
    },
    goToPay(orderNo){
      this.$router.push({
        path:'/order/pay',
        query:{
          orderNo
        }
      })
    }
  },

}
</script>
<style lang="scss">
@import "./../assets/scss/config";
  .order-list{
    .wrapper{
      background: #fafafa;
      padding-top: 33px;
      padding-bottom: 110px;
      .order-box{

        .order-item{
          background: #ffffff;
          border: 1px solid #D7D7D7;
          margin-bottom:31px;

          .item-title{
            font-size: 16px;
            color:#666666;
            background: #fffaf7;
            height: 74px;
            line-height: 74px;
            padding:0 43px;
            .title-info{
              display: inline-block;
              span{
                margin: 0 10px;
              }
            }
            .title-price{
              float: right;
              display: inline-block;
              span{
                font-size: 26px;
                color: #333333;
              }
            }
          }
          .item-info{
            padding: 0 43px;
            .product-box{
              float: left;
              width: 88%;
              .product-list{
                display: flex;
                align-items: center;
                height: 145px;
                .list-img{
                  width: 112px;
                  img{
                    width: 100%;
                  }
                }
                .list-info{
                  font-size: 20px;
                  color: $colorB;

                }

              }
            }
            .info-state{
              height: 145px;
              line-height: 145px;
              a{
                color: $colorA;
                font-size: 20px;
              }
            }
          }
        }
      }
    }
  }
</style>