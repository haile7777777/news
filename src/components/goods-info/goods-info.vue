<template>
  <div class="goods-info-container">
    <!--添加购物车动画-->
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter">
      <div class="ball" v-show="isShow" ref="ball"></div>
    </transition>
    <!--轮播图 start-->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :imgList="goosImgs" :isfull="false"></swiper>
        </div>
      </div>
    </div>

    <!--商品信息 start-->
    <div class="mui-card">
      <div class="mui-card-header">{{goodsInfo.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            <span class="market_price">市场价：￥{{goodsInfo.market_price}}</span>
            <span class="sell_price">销售价：￥{{goodsInfo.sell_price}}</span>
          </p>
          <div class="count">
            <span>购买数量：</span>
            <number-box @postCount="receiveCount" :maxCount="goodsInfo.stock_quantity"></number-box>
          </div>
          <p class="opt">
            <mt-button type="primary" class="buy">立即购买</mt-button>
            <mt-button type="danger" @click="addToCart">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>

    <!--图片详情 start-->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>货号：{{goodsInfo.goods_no}}</p>
          <p>库存：{{goodsInfo.stock_quantity}}</p>
          <p>上架时间：{{goodsInfo.add_time | dateFormat('YYYY-MM-DD')}}</p>
        </div>
      </div>
      <div class="mui-card-footer footer">
        <mt-button type="primary" size="large" plain class="detail" @click="getDetail(id)">图文详情</mt-button>
        <mt-button type="danger" size="large" plain @click="getComments(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from '../swiper/swiper'
  import NumberBox from '../number-box/number-box'

  export default {
    name: "goods-info",
    data() {
      return {
        isShow: false,
        id: this.$route.params.id,
        goosImgs: [],
        goodsInfo: {},
        selectedCount: 1
      }
    },
    created() {
      this.getGoodsImgs()
      this.getGoodsInfo()
    },
    components: {
      Swiper,
      NumberBox
    },
    methods: {
      getGoodsImgs() {
        this.axios
          .get(`/api/getthumimages/${this.id}`)
          .then(res => {
            this.goosImgs = res.data.message
          })
      },
      getGoodsInfo() {
        this.axios
          .get(`/api/goods/getinfo/${this.id}`)
          .then(res => {
            this.goodsInfo = res.data.message[0]
          })
      },
      getDetail(id) {
        this.$router.push({name: 'goosdetail', params: {id: id}})
      },
      getComments(id) {
        this.$router.push({name: 'goodscomment', params: {id: id}})
      },
      addToCart() {
        this.isShow = !this.isShow
      },
      beforeEnter(el) {
        el.style.transform = "translate(0,0)"
      },
      enter(el, done) {
        el.offsetWidth;

        let ballPosition = this.$refs.ball.getBoundingClientRect()

        let badgePosition = document.querySelector('.mui-badge').getBoundingClientRect()
        let disX = badgePosition.left - ballPosition.left
        let disY = badgePosition.top - ballPosition.top

        el.style.transform = `translate(${disX}px, ${disY}px)`;
        el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68)";
        done();

      },
      afterEnter(el) {
        this.isShow = !this.isShow
      },
      receiveCount(count) {
        this.selectedCount = count
      }
    }
  }
</script>

<style lang="scss" scoped>
  .goods-info-container {
    .price {
      .market_price {
        margin-right: 10px;
      }
    }

    .opt {
      margin-top: 10px;

      .buy {
        margin-right: 10px;
      }
    }

    .footer {
      display: block;

      .detail {
        margin-bottom: 10px;
      }
    }

    .ball {
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: #cf2d28;
      position: absolute;
      top: 320px;
      left: 148px;
      z-index: 99;
    }
  }
</style>