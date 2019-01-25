<template>
  <div class="news-list-container">
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
        <router-link :to="'/home/newsinfo/'+item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class='mui-ellipsis'>
              <span class="add_time">{{item.add_time | dateFormat('YYYY-MM-DD')}}</span>
              <span class="click">点击量：{{item.click}}</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "news-list",
    data() {
      return {
        newsList: []
      }
    },
    created() {
      this._getNewsList()
    },
    methods: {
      _getNewsList() {
        this.axios.get('/api/getnewslist').then(res => {
          if (res.status === 200) {
            this.newsList = res.data.message
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .news-list-container {
    .mui-media-body {
      h1 {
        font-size: 14px;
        font-weight: 400;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap
      }

      .mui-ellipsis {
        display: flex;
        color: #26a2ff;
        font-size: 12px;
        justify-content: space-between;
      }
    }
  }
</style>