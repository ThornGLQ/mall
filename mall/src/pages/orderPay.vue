<template>
  <div class="order-pay">
    <order-header title="订单支付">
      <template v-slot:tip>
        <span>请谨防钓鱼链接或诈骗电话，了解更多</span>
      </template>
    </order-header>
    <div class="warpper">
      <div class="container">
        <div class="order-wrap">
          <div class="item-order">
            <div class="icon-succ"></div>
            <div class="order-info">
              <h2>订单提交成功！去付款咯～</h2>
              <p>请在<span>30分</span>内完成支付, 超时后将取消订单<p>
              <p>收货信息：{{ address }}</p>
            </div>
            <div class="order-total">
              <p>应付总额：<span>{{ payment }}</span>元</p>
              <p>订单详情<em class="icon-down" :class="{'up':showDetail}" @click="showDetail=!showDetail"></em></p>
            </div>
          </div>
          <div class="detail" v-show="showDetail">
            <div class="item">
              <div class="detail-title fl">订单号：</div>
              <div class="detail-info">{{ orderId }}</div>
            </div>
            <div class="item">
              <div class="detail-title">收货信息：</div>
              <div class="detail-info">{{ address }}</div>
            </div>
            <div class="item">
              <div class="detail-title">商品名称：</div>
              <div class="detail-info">
                <ul v-for="(item,index) in orderDetail" :key="index">
                  <li><img :src="item.productImage" alt="">{{item.productName}}</li>
                </ul>
              </div>
            </div>
            <div class="item">
              <div class="detail-title">发票信息：</div>
              <div class="detail-info">电子发票 个人</div>
            </div>
          </div>
        </div>
        <div class="item-pay">
          <h3>选择以下支付方式付款</h3>
          <div class="pay-way">
            <p>支付平台</p>
            <div class="pay-ali" @click="checkedState=1"></div>
            <div class="pay-wechat"  @click="checkedState=2"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import OrderHeader from "@/components/OrderHeader";
export default {
  name:'order-pay',
  data(){
    return{
      orderId:this.$route.query.orderNo,
      showDetail:false,
      address:'',//收货地址
      orderDetail:[],//订单详情
      payment:0,//订单总金额
    }
  },
  mounted() {
    this.getOrderDetail();
  },
  components: {OrderHeader},
  methods:{
    getOrderDetail(){
      this.axios.get('/orders/'+this.orderId).then((res)=>{
        let shipping=res.shippingVo;
        this.address=shipping.receiverName+shipping.receiverMobile+shipping.receiverProvince+shipping.receiverCity+shipping.receiverDistrict+shipping.receiverAddress;
        this.orderDetail = res.orderItemVoList;
        this.payment = res.payment;
      })
    }
  },
}
</script>
<style lang="scss">
@import "./../assets/scss/config";
  .order-pay{
    .warpper{
      background-color: #f5f5f5;
      padding-top: 30px;
      padding-bottom: 61px;
      .order-wrap{
        font-size: 14px;
        background-color: #ffffff;
        padding: 62px 50px;
        margin-bottom: 30px;
        .item-order{
          display: flex;
          align-items: center;
          height: 90px;
          .icon-succ{
            display: inline-block;
            width: 90px;
            height: 90px;
            border-radius: 50%;
            background: url("/imgs/icon-gou.png") #80c58a no-repeat 50%;
            background-size: 60px;
            margin-right: 40px;

          }
          .order-info{
            display: inline-block;
            font-size: 14px;
            height: 90px;
            margin-right: 248px;
            h2{
              font-size: 24px;
              color: #333333;
              margin-bottom: 20px;
            }
            span{
              color: $colorA;
            }
          }
          .order-total{
            &>p:first-child{
              margin-bottom:30px;
            }
            display: block;
            height: 90px;
            align-items: center;
            font-size: 14px;
            span{
              font-size: 24px;
              color: $colorA;
            }
            p{
              .icon-down{
                margin-left: 5px;
                display: inline-block;
                width: 14px;
                height: 10px;
                background: url("/imgs/icon-down.png") no-repeat 50%;
                background-size: contain;
                transition: all .5s;
                cursor: pointer;
                &.up{
                  transform: rotate(180deg);
                }
              }

            }

          }
        }
        .detail{
          font-size: 14px;
          border-top: 1px solid #D7D7D7;
          padding-top: 50px;
          padding-left: 130px;
          margin-top: 45px;
          .item{
            margin-bottom: 20px;
            .detail-title{
              float: left;
              width: 100px;
            }
            .detail-info{
              display: inline-block;
              height: 14px;
              line-height: 14px;
              li{
                img{
                  width: 30px;
                  vertical-align: middle;
                }
              }

            }

          }
        }
      }
      .item-pay{
        background-color: #ffffff;
        padding: 26px 50px 72px;
        color: #333333;
        h3{
          font-size: 20px;
          font-weight: 200;
          color: #333;
          padding-bottom: 24px;
          border-bottom: 1px solid #d7d7d7;
          margin-bottom: 26px;
        }
        .pay-way{
          p{
            font-size: 18px;
            color: #333333;
          }
          .pay-ali{
            background: url("/imgs/pay/icon-ali.png") no-repeat 50%;
          }
          .pay-wechat{
            background: url("/imgs/pay/icon-wechat.png") no-repeat 50%;
          }
          .pay-ali,.pay-wechat{
            display: inline-block;
            width: 190px;
            height: 66px;
            border: 1px solid #d7d7d7;
            background-size: 103px 38px;
            margin-top: 19px;
            cursor: pointer;
            margin-right: 20px;

          }


        }

      }
    }
  }
</style>