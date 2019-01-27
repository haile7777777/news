<template>
  <div class="goods-list-container">
    <div class="goods-item" v-for="item in goodsList" :key="item.id" @click="goodsinfo(item.id)">
        <img :src="item.img_url" alt="">
        <p class="title">{{item.title}}</p>
        <p class="price">
          <span class="new-price">￥{{item.sell_price}}</span>
          <span class="oldPrice">￥{{item.market_price}}</span>
        </p>
        <p class="sell">
          <span class="hot">热卖中</span>
          <span class="rest">剩余：{{item.stock_quantity}}件</span>
        </p>
    </div>
    <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
  export default {
    name: "goods-list",
    data() {
      return {
        pageIndex: 1,
        goodsList: []
      }
    },
    created() {
      this.getGoodsList()
    },
    methods: {
      getGoodsList() {
        this.axios
          .get(`/api/getgoods?pageindex=${this.pageIndex}`)
          .then(res => {
            this.goodsList = this.goodsList.concat(res.data.message)
          })
      },
      getMore(){
        this.pageIndex++
        this.getGoodsList()
      },
      goodsinfo(id){
        this.$router.push({name:'goodsinfo',params:{id:id}})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .goods-list-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 7px;

    .goods-item {
      width: 49%;
      border: 1px solid #ccc;
      margin: 4px 0;
      padding: 5px 5px 0;
      display: flex;
      flex-direction: column;
      min-height: 293px;
      position: relative;

      img {
        width: 100%;
      }

      .title{
        font-size: 14px;
        color:#000;
        font-weight: 700;
      }
      .price{
        position: absolute;
        bottom: 25px;
        .new-price{
          font-size: 16px;
          font-weight: 700;
          color: #cf2d28;
          margin-right: 10px;
        }
        .oldPrice{
          text-decoration: line-through;
          font-size: 12px;
        }
      }
      .sell{
        position: absolute;
        bottom: 0px;
        display: flex;
        justify-content: space-between;
        .rest{
          margin-left: 10px;
        }

      }
    }
  }
</style>