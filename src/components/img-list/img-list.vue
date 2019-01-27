<template>

  <div class="img-list-container">
    <!--顶部滑动导航栏 start-->
    <div class="mui-content">
      <div id="slider" class="mui-slider">
        <div id="sliderSegmentedControl"
             class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
          <div class="mui-scroll">
            <a class="mui-control-item mui-active" @click="getImgList(0)">
              全部
            </a>
            <a class="mui-control-item" v-for="item in categories" :key="item.id" @click="getImgList(item.id)">
              {{item.title}}
            </a>
          </div>
        </div>
      </div>
    </div>
    <!--顶部滑动导航栏 end-->

    <!--图片列表 start-->
    <ul class="img-list">
      <li v-for="item in imgList" :key="item.id">
        <router-link :to="'/home/imginfo/'+item.id">
          <img v-lazy="item.img_url" alt="" width="100%">
          <div class="img-info">
            <p class="info-header">{{item.title}}</p>
            <p class="info-body">{{item.zhaiyao}}</p>
          </div>
        </router-link>
      </li>
    </ul>
    <!--图片列表 end-->
  </div>


</template>

<script>
  import mui from '../../../node_modules/hongde-demo/js/mui.min'

  export default {
    name: "img-list",
    data() {
      return {
        categories: [],
        imgList: []
      }
    },
    created() {
      this.getCategory()
      this.getImgList(0)
    },
    mounted() {
      mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
      });
    },
    methods: {
      getCategory() {
        this.axios
          .get('/api/getimgcategory')
          .then(res => {
            this.categories = res.data.message
          })
      },
      getImgList(id) {
        this.axios
          .get(`/api/getimages/${id}`)
          .then(res => {

            this.imgList = res.data.message
          })
      }
    }
  }
</script>

<style lang="scss" scoped>


  .img-list-container {
    .mui-content{
      touch-action: none;
      position: fixed;
      z-index: 99;
      top: 40px;
    }
    .img-list{
      padding-top: 38px;
      padding-left: 0;
      li{
        list-style: none;
        text-align: center;
        margin-bottom: 10px;
        position: relative;
        width: 100%;
        padding: 0 10px;
        a{
          display: block;
          width: 100%;
          img{
            display: block;
            vertical-align: middle;
            box-shadow: 0 0 2px 2px #ccc;
          }
          image[lazy="loading"] {
            width: 40px;
            height: 300px;
            margin: auto;
          }
          .img-info{
            position: absolute;
            bottom: 0;
            margin-right: 10px;
            text-align: left;
            height: 30%;
            background-color: rgba(0,0,0,.3);
            .info-header{
              color: #fff;
            }
            .info-body{
              color:#fff;
              font-size: 14px;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 3;
              overflow: hidden;
              margin-bottom: 5px;
            }
          }
        }

      }
    }
  }
</style>