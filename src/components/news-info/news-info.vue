<template>
  <div class="news-info-container">
    <div class="news-header">
      <h1>{{newsInfo.title}}</h1>
      <p>
        <span class="ctime">{{newsInfo.add_time | dateFormat('YYYY-MM-DD')}}</span>
        <span class="click">点击量：{{newsInfo.click}}</span>
      </p>
    </div>
    <div class="news-content" v-html="newsInfo.content">
    </div>

    <comment :id="this.id"></comment>
  </div>
</template>

<script>
  import Comment from '../comment/comment'

  export default {
    name: "news-info",
    data() {
      return {
        id: this.$route.params.id,
        newsInfo: {}
      }
    },
    created() {
      this._getNewsInfo()
    },
    methods: {
      _getNewsInfo() {
        this.axios.get(`/api/getnew/${this.id}`).then(res => {
          if (res.status === 200) {
            this.newsInfo = res.data.message[0]
          }
        })
      }
    },
    components:{
      Comment
    }
  }
</script>

<style lang="scss" scoped>
  .news-info-container {
    padding: 10px;

    .news-header {
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
      }
    }

    .news-content {
      padding-top: 10px;
    }
  }
</style>