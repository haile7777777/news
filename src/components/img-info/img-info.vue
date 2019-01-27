<template>
  <div class="img-info-container">
    <div class="info-header">
      <h1>{{imgInfo.title}}</h1>
      <p>
        <span class="ctime">{{imgInfo.add_time | dateFormat('YYYY-MM-DD')}}</span>
        <span class="click">点击量：{{imgInfo.click}}</span>
      </p>
    </div>

    <vue-preview :slides="previewImgs" @close="handleClose"></vue-preview>

    <div class="news-content" v-html="imgInfo.content"></div>
  </div>
</template>

<script>
  export default {
    name: "img-info",
    data() {
      return {
        imgInfo: {},
        previewImgs: []
      }
    },
    created() {
      this.getArtical()
      this.getPreview()
    },
    methods: {
      handleClose() {
        // console.log('close event')
      },
      getArtical() {
        this.axios
          .get(`/api/getimageInfo/${this.$route.params.imgid}`)
          .then(res => {
            this.imgInfo = res.data.message[0]
          })
      },
      getPreview() {
        this.axios
          .get(`/api/getthumimages/${this.$route.params.imgid}`)
          .then(res => {
            res.data.message.forEach(item => {
              item.msrc = item.src
              item.w = 600;
              item.h = 400;
            })
            this.previewImgs = res.data.message
          })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .img-info-container {

    .info-header {
      border-bottom: 1px solid #ccc;

      h1 {
        padding: 10px 10px 0;
        font-weight: 500;
        font-size: 16px;
        height: 40px;
        line-height: 16px;
        text-align: center;
        margin-bottom: 10px;
      }

      p {
        display: flex;
        justify-content: space-between;
        color: #26a2ff;
        padding: 0 10px;
      }

    }

    .my-gallery {
      display: flex;
      flex-wrap: wrap;

      figure {
        width: 33.3%;
      }
    }

    .news-content {
      padding: 10px;
    }

  }
</style>