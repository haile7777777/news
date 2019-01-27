<template>
  <div class="goods-info-container">
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
      <div class="mui-card-header">页眉</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
        </div>
      </div>
      <div class="mui-card-footer">页脚</div>
    </div>

    <!--图片详情 start-->
    <div class="mui-card">
      <div class="mui-card-header">页眉</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
        </div>
      </div>
      <div class="mui-card-footer">页脚</div>
    </div>
  </div>
</template>

<script>
  import Swiper from '../swiper/swiper'

  export default {
    name: "goods-info",
    data() {
      return {
        id: this.$route.params.id,
        goosImgs: []
      }
    },
    created() {
      this.getGoodsImgs()
    },
    components:{
      Swiper
    },
    methods: {
      getGoodsImgs() {
        this.axios
          .get(`/api/getthumimages/${this.id}`)
          .then(res => {
            this.goosImgs = res.data.message
          })
      }
    }
  }
</script>

<style scoped>

</style>