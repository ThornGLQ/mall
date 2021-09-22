<template>
  <div class="order-confrim">
    <order-header title="订单确认">
      <template v-slot:tip>
        <span>请认真填写收货地址</span>
      </template>
    </order-header>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; width: 0px; height: 0px; overflow: hidden;">
      <defs>
        <symbol id="icon-add" viewBox="0 0 31 32">
          <title>add</title>
          <path d="M30.745 15.152h-14.382v-14.596c0-0.308-0.243-0.557-0.543-0.557s-0.543 0.249-0.543 0.557v14.596h-14.665c-0.3 0-0.543 0.249-0.543 0.557s0.243 0.557 0.543 0.557h14.665v15.177c0 0.307 0.243 0.557 0.543 0.557s0.543-0.249 0.543-0.557v-15.177h14.382c0.3 0 0.543-0.249 0.543-0.557s-0.243-0.557-0.543-0.557z" class="path1"></path>
        </symbol>
        <symbol id="icon-edit" viewBox="0 0 32 32">
          <title>edit</title>
          <path d="M28.287 8.51l-4.805-4.806 0.831-0.831c0.472-0.472 1.086-0.777 1.564-0.777 0.248 0 0.452 0.082 0.622 0.253l3.143 3.144c0.539 0.54 0.133 1.529-0.524 2.186l-0.831 0.831zM26.805 9.992l-1.138 1.138-4.805-4.806 1.138-1.138 4.805 4.806zM24.186 12.612l-14.758 14.762-4.805-4.806 14.758-14.762 4.805 4.806zM7.379 28.288l-4.892 1.224 1.223-4.894 3.669 3.67zM31.123 4.011l-3.143-3.144c-0.567-0.567-1.294-0.867-2.103-0.867-1.036 0-2.174 0.52-3.045 1.391l-20.429 20.436c-0.135 0.134-0.23 0.302-0.276 0.487l-2.095 8.385c-0.089 0.355 0.017 0.736 0.276 0.995 0.198 0.198 0.461 0.307 0.741 0.307 0.085 0 0.171-0.010 0.254-0.031l8.381-2.096c0.185-0.047 0.354-0.142 0.487-0.276l20.43-20.436c1.409-1.41 2.042-3.632 0.524-5.15v0z" class="path1"></path>
        </symbol>
        <symbol id="icon-del" viewBox="0 0 32 32">
          <title>delete</title>
          <path d="M11.355 4.129v-2.065h9.29v2.065h-9.29zM6.194 29.935v-23.742h19.613v23.742h-19.613zM30.968 4.129h-8.258v-3.097c0-0.569-0.463-1.032-1.032-1.032h-11.355c-0.569 0-1.032 0.463-1.032 1.032v3.097h-8.258c-0.569 0-1.032 0.463-1.032 1.032s0.463 1.032 1.032 1.032h3.097v24.774c0 0.569 0.463 1.032 1.032 1.032h21.677c0.569 0 1.032-0.463 1.032-1.032v-24.774h3.097c0.569 0 1.032-0.463 1.032-1.032s-0.463-1.032-1.032-1.032v0z" class="path1"></path>
          <path d="M10.323 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z" class="path2"></path>
          <path d="M16 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z" class="path3"></path>
          <path d="M21.677 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z" class="path4"></path>
        </symbol>
      </defs>
    </svg>
    <div class="wrapper">
      <div class="container">
        <div class="order-box">
          <div class="item-address">
            <h2 class="addr-titile">收货地址</h2>
            <div class="addr-list" >
              <div class="addr-info" :class="{'checked':checkIndex==index}" @click="checkIndex=index" v-for="(item,index) in list.slice(0,3)" :key="index">
                <h2>{{ item.receiverName }}</h2>
                <div class="phone">{{ item.receiverMobile }}</div>
                <div class="address">{{ item.receiverCity+' '+item.receiverDistrict+' '+item.receiverAddress }}</div>
                <div class="action">
                  <a href="javascript:;" class="fl" @click="delAddress(item)">
                    <svg class="icon icon-del">
                      <use xlink:href="#icon-del"></use>
                    </svg>
                  </a>
                  <a href="javascript:;" class="fr" @click="editAddress(item)">
                    <svg class="icon icon-edit">
                      <use xlink:href="#icon-edit"></use>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="addr-add" @click="openAddressModal">
                <div class="icon-add"></div>
                <span>添加新地址</span>
              </div>
            </div>
          </div>
          <div class="item-product">
            <h2>商品</h2>
            <ul v-for="(item,index) in productList" :key="index">
              <li>
                <div class="product-name">
                  <img :src="item.productMainImage" alt="">
                  {{ item.productName+item.productSubtitle }}
                </div>
                <div class="product-price">{{ item.productPrice }}元x{{item.quantity}}</div>
                <div class="product-total">{{ item.productTotalPrice }}</div>
              </li>

            </ul>
          </div>
          <div class="item-shipping">
            <h2>配送方式</h2>
            <span>包邮</span>
          </div>
          <div class="item-invoice">
            <h2>发票</h2>
            <a href="javascript:;">电子发票</a>
            <a href="javascript:;">个人</a>
          </div>
          <div class="detail">
            <div class="item">
              <div class="item-name">商品件数：</div>
              <div class="item-val">{{productSum}}件</div>
            </div>
            <div class="item">
              <div class="item-name">商品总价：</div>
              <div class="item-val">{{cartTotalPrice}}元</div>
            </div>
            <div class="item">
              <div class="item-name">优惠活动：</div>
              <div class="item-val">0元</div>
            </div>
            <div class="item">
              <div class="item-name">运费：</div>
              <div class="item-val">0元</div>
            </div>
            <div class="item">
              <div class="item-name">应付总额：</div>
              <div class="item-val total-price">{{cartTotalPrice}}元</div>
            </div>
          </div>
          <div class="btn-group">
            <a href="/#/cart" class="btn btn-large btn-default">返回购物车</a>
            <a href="javascript:;" class="btn btn-large" @click="orderSubmit">去结算</a>
          </div>
        </div>
      </div>
    </div>
    <modal title="新增确认"
           btn-type="1"
           :show-modal="showEditModal"
           @cancel="showEditModal=false"
           @submit="submitAddress"
    >
      <template v-slot:body>
        <div class="edit-wrap">
          <div class="item">
            <input type="text" class="input" placeholder="姓名" v-model="checkedItem.receiverName">
            <input type="text" class="input" placeholder="手机号" v-model="checkedItem.receiverMobile">
          </div>
          <div class="item">
            <select name="province" v-model="checkedItem.receiverProvince">
              <option value="北京">北京</option>
              <option value="天津">天津</option>
              <option value="河北">河北</option>
            </select>
            <select name="city" v-model="checkedItem.receiverCity">
              <option value="北京">北京</option>
              <option value="天津">天津</option>
              <option value="河北">石家庄</option>
            </select>
            <select name="district" v-model="checkedItem.receiverDistrict">
              <option value="北京">昌平区</option>
              <option value="天津">海淀区</option>
              <option value="河北">东城区</option>
              <option value="天津">西城区</option>
              <option value="河北">顺义区</option>
              <option value="天津">房山区</option>
            </select>
          </div>
          <div class="item">
            <textarea name="street" v-model="checkedItem.receiverAddress"></textarea>
          </div>
          <div class="item">
            <input type="text" class="input" placeholder="邮编" v-model="checkedItem.receiverZip">
          </div>
        </div>
      </template>
    </modal>
    <modal title="删除确认"
           btn-type="1"
           :show-modal="showDelModal"
           @cancel=closeModal
           @submit="submitAddress"

    >
      <template v-slot:body>
        <p>您确认要删除此地址吗？</p>
      </template>
    </modal>
  </div>
</template>
<script>
import OrderHeader from '../components/OrderHeader'
import Modal from "@/components/Modal";


export default {
  name:'order-confirm',
  data(){
    return{
      checkIndex:0,
      list:[],//收货地址列表
      productList:[],//商品列表
      productSum:0,//所有商品数量总和
      cartList:[],//购物车中需要结算的商品列表
      cartTotalPrice:0,//商品总金额
      count:0,//商品结算数量
      checkedItem:{},//选中地址对象
      userAction:'',//用户行为 0：新增 1：编辑 2：删除
      showDelModal:false,//是否显示删除弹框
      showEditModal:false,//是否显示新增或者编辑弹框

    }
  },
  mounted() {
    this.getAddressList();
    this.getProductList();
    this.getProductSum();
  },
  methods:{
    getProductList(){
      this.axios.get('/carts').then((res)=>{
        this.productList=res.cartProductVoList;
        this.cartTotalPrice=res.cartTotalPrice;
      })
    },
    getProductSum(){
      this.axios.get('/carts/products/sum').then((res)=>{
        this.productSum=res;
      })
    },
    getAddressList(){
      this.axios.get('/shippings').then((res)=>{
        this.list=res.list;
      })
    },
    openAddressModal(){
      this.userAction = 0;
      this.checkedItem = {};
      this.showEditModal = true;
    },
    delAddress(item){
      this.userAction=2;
      this.checkedItem=item;
      this.showDelModal=true;
    },
    editAddress(item){
      this.userAction=1;
      this.checkedItem=item;
      this.showEditModal=true;
    },
    submitAddress(){
      let {userAction,checkedItem} = this;
      let method,url,params={};
      if(userAction==0){
        method='post',url='shippings/';
      }
      if(userAction==1){
        method='put',url='shippings/'+checkedItem.id;
      }
      if(userAction==2){
        method='delete',url='shippings/'+checkedItem.id;
      }
      if(userAction==0||userAction==1){
        let errMessage='';
        let {receiverName,
          receiverMobile,
          receiverProvince,
          receiverCity,
          receiverDistrict,
          receiverAddress,
          receiverZip,}=checkedItem;

        if(!receiverName){
          errMessage = '请输入收货人名称';
        }else if(!receiverMobile||!/\d{11}/.test(receiverMobile)){
          errMessage = '请输入正确格式的手机号';
        }else if(!receiverProvince){
          errMessage = '请选择省份';
        }else if(!receiverCity){
          errMessage = '请选择对应的城市';
        }else if(!receiverDistrict){
          errMessage = '请选择对应的区';
        }else if(!receiverAddress){
          errMessage = '请输入收货地址';
        }else if(!/\d{6}/.test(receiverZip)){
          errMessage = '请输入六位邮编';
        }
        if(errMessage){
          alert(errMessage);
          return;
        }
        params={
          receiverName,
          receiverMobile,
          receiverProvince,
          receiverCity,
          receiverDistrict,
          receiverAddress,
          receiverZip,
        }
      }
      this.axios[method](url,params).then(()=>{
        this.getAddressList();
        this.closeModal();
        alert('操作成功');
      })
    },
    closeModal(){
      this.checkedItem = {};
      this.userAction = '';
      this.showDelModal = false;
      this.showEditModal = false;
    },
    orderSubmit(){
      let item=this.list[this.checkIndex];
      if(!item){
        alert('请选择一个收货地址');
        return;
      }
      this.axios.post('/orders',{
        shippingId:item.id
      }).then((res)=>{
        this.$router.push({
          path:'/order/pay',
          query:{
            orderNo:res.orderNo,
          }
        })
      })
    },

  },
  components:{
    Modal,
    OrderHeader,

  }
}
</script>
<style lang="scss">
@import "src/assets/scss/config";
@import "src/assets/scss/mixin";
.order-confrim{
  .wrapper{
    padding-top: 30px;
    padding-bottom: 84px;
    background-color: #f5f5f5;
    .order-box{
      padding-left: 40px;
      padding-bottom: 40px;
      background-color: #ffffff;
      .item-address{
        height: 230px;
        padding-top: 38px;
        .addr-titile{
          font-size: 20px;
          color: #333333;
          font-weight: 200;
          margin-bottom: 20px;
        }
        .addr-list{
          .addr-info,.addr-add{
            box-sizing: border-box;
            float: left;
            font-size: 14px;
            color: #757575;
            display: inline-block;
            width: 270px;
            height: 180px;
            margin-right: 15px;
            padding: 15px 24px;
            border: 1px solid #e5e5e5;
            cursor: pointer;
            h2{
              height: 27px;
              font-size: 18px;
              font-weight: 200;
              color: #333333;
              margin-bottom: 10px;
            }
            .phone{
              margin: 0;
              padding: 0;
              outline: none;
            }
          }
          .addr-info{
            a{
              .icon{
                display: inline-block;
                width: 20px;
                height: 20px;
                fill: #666666;
                vertical-align: middle;
                margin-top: 15px;
                &:hover{
                  fill:$colorA;
                }
              }
            }
            .address{
              height: 50px;
            }
          }
          .addr-add{
            .icon-add{
              width: 30px;
              height: 30px;
              border-radius: 50%;
              background: url(/imgs/icon-add.png) #e0e0e0 no-repeat 50%;
              background-size: 14px;
              margin: 45px auto 10px auto;
            }
            span{
              margin-left: 76px;
            }
          }
          .checked{
            border: 1px solid $colorA;

          }

        }
      }
      .item-product{
        font-size: 16px;
        border-bottom: 1px solid #E5E5E5;
        padding-bottom: 12px;
        margin-top: 34px;

        h2{
          font-size: 20px;
          height: 32px;
          border-bottom: 1px solid #e5e5e5;
        }
        li{
          display: flex;
          align-items: center;
          height: 40px;
          line-height: 40px;
          margin-top: 10px;
          color: #333333;
          .product-name{
            flex: 5;
            img{
              height: 30px;
              width: 30px;
              vertical-align: middle;
              
            }
          }
          .product-price{
            flex: 2;
          }
          .product-total{
            padding-right: 44px;
            color: $colorA;
          }
        }
      }
      .item-shipping{
        margin-top: 30px;
        line-height: 20px;
        h2{
          display: inline-block;
          font-size: 20px;
          width: 80px;
          margin-right: 70px;
        }
        span{
          font-size: 16px;
          color: $colorA;
        }
      }
      .item-invoice{
        margin-top: 30px;
        line-height: 20px;
        h2{
          display: inline-block;
          font-size: 20px;
          width: 80px;
          margin-right: 70px;
        }
        a{
          font-size: 16px;
          color: $colorA;
          margin-right: 22px;
        }
      }
      .detail{
        font-size: 16px;
        font-weight: 500 ;
        color: #666666;
        padding: 50px 44px 33px 0;
        border-bottom: 1px solid #f5f5f5;
        text-align: right;
        .item{
          margin-bottom: 5px;
          .item-name{
            display: inline-block;
            font-size: 16px;
            line-height: 16px;
            margin-right: 10px;
          }
          .item-val{
            color: $colorA;
            width: 100px;
            display: inline-block;
          }
          .total-price{
            font-size: 28px;
          }
        }
      }
      .btn-group{
        margin-top: 37px;
        text-align: right;
        .btn-large{
          width: 200px;
          height: 50px;
          line-height: 50px;
          font-size: 18px;
          margin-left: 20px;
        }
        .btn-default{
          background-color: #b0b0b0;
          color: #ffffff;
        }
      }
    }
  }
  .edit-wrap{
    font-size: 14px;
    .item{
      .input{
        box-sizing: border-box;
        display: inline-block;
        width: 283px;
        height: 40px;
        line-height: 40px;
        border: 1px solid #e5e5e5;
        padding-left: 15px;
        margin-top: 15px;
        &+.input{
          margin-left: 14px;
        }
      }
      select{
        width: auto;
        height: 40px;
        line-height: 40px;
        margin-top: 15px;
        margin-right: 10px;
        border: 1px solid #e5e5e5;
      }
      textarea{
        width: 520px;
        height: 62px;
        margin-top: 15px;
        padding: 10px;
        border: 1px solid #e5e5e5;
      }


    }
  }
}
</style>