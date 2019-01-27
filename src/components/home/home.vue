<template>
  <div class="home-container">
    <!-- 轮播图 start -->
    <swiper :imgList="swipList" :isfull="true"></swiper>
    <!-- 轮播图 end -->

    <!-- 导航 start -->
    <div class="nav">
      <div class="row">
        <router-link class="row-item" to='/home/newslist'>
          <img src="../../assets/images/menu1.png" alt="">
          <p>新闻资讯</p>
        </router-link>
        <router-link class="row-item" to='/home/imglist'>
          <img src="../../assets/images/menu2.png" alt="">
          <p>新闻资讯</p>
        </router-link>
        <router-link class="row-item" to='/home/goodslist'>
          <img src="../../assets/images/menu3.png" alt="">
          <p>新闻资讯</p>
        </router-link>
        <router-link class="row-item" to=''>
          <img src="../../assets/images/menu2.png" alt="">
          <p>新闻资讯</p>
        </router-link>
        <router-link class="row-item" to=''>
          <img src="../../assets/images/menu3.png" alt="">
          <p>新闻资讯</p>
        </router-link>
      </div>
      <div class="row">
        <router-link class="row-item" to=''>
          <img src="../../assets/images/menu4.png" alt="">
          <p>新闻资讯</p>
        </router-link>
        <router-link class="row-item" to=''>
          <img src="../../assets/images/menu5.png" alt="">
          <p>新闻资讯</p>
        </router-link>
        <router-link class="row-item" to=''>
          <img src="../../assets/images/menu6.png" alt="">
          <p>新闻资讯</p>
        </router-link>
        <router-link class="row-item" to=''>
          <img src="../../assets/images/menu5.png" alt="">
          <p>新闻资讯</p>
        </router-link>
        <router-link class="row-item" to=''>
          <img src="../../assets/images/menu6.png" alt="">
          <p>新闻资讯</p>
        </router-link>
      </div>

    </div>
    <!-- 导航 end -->
  </div>
</template>

<script>
  import {Toast} from 'mint-ui'
  import Swiper from '../swiper/swiper'

  export default {
    data() {
      return {
        swipList: []
      };
    },
    created() {
      this._getSwip();
    },
    components:{
      Swiper
    },
    methods: {
      _getSwip() {
        this.axios
          .get("/api/getlunbo")
          .then(res => {
            if (res.status === 200) {
              this.swipList = res.data.message;
            }
          }).catch(err => {
          if (err) {
            Toast(err)
          }
        })
      }
    }
  };
</script>

<style lang="scss" scoped>
  .home-container {
    .nav {
      border: 1px solid #eee;
      border-radius: 10px;
      margin: 10px 5px;
      overflow: hidden;

      .row {
        display: flex;

        .row-item {
          flex: 1;
          padding-top: 10px;
          border-bottom: 1px solid #eee;
          border-right: 1px solid #eee;
          text-align: center;

          img {
            width: 40px;
            height: 40px;
          }

          p {
            font-size: 10px;
          }
        }
      }
    }
  }
</style>
