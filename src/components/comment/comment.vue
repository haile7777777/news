<template>
  <div class="comment-container">
    <h1>发表评论</h1>
    <textarea placeholder="请输入评论内容" maxlength="120" v-model="content"></textarea>
    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
    <div class="comment" v-for="item in commentList" :key="item.id">
      <div class="comment-header">
        <span class="username">{{item.user_name}}</span>
        <span class="ctime">发表于：{{item.add_time | dateFormat('YYYY-MM-DD')}}</span>
      </div>
      <div class="comment-body">
        {{item.content == '' ? '这位用户没有添加评论内容' : item.content}}
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
  export default {
    name: "comment",
    props: ['id'],
    data() {
      return {
        content: '',
        pageIndex: 1,
        commentList: []
      }
    },
    created() {
      this._getComment()
    },
    methods: {
      _getComment() {
        this.axios
          .get(`/api/getcomments/${this.id}?pageindex=${this.pageIndex}`)
          .then(res => {
            if (res.status === 200) {
              this.commentList = this.commentList.concat(res.data.message)
            }
          })
      },
      getMore() {
        this.pageIndex++
        this._getComment()
      },
      postComment() {
        this.axios
          .post(`/api/postcomment/${this.id}`, {
            content: this.content
          })
          .then((res) => {
            if(res.status === 200){
              let comment = {
                add_time : new Date(),
                content:this.content,
                user_name:'匿名用户'
              }
              this.commentList.unshift(comment)
            }
          })
      }
    },
  }
</script>

<style lang="scss" scoped>
  .comment-container {
    margin-top: 20px;

    h1 {
      text-align: center;
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 10px;
    }

    mt-button {
      height: 20px;
    }

    .comment {
      margin-top: 10px;

      .comment-header {
        height: 16px;
        line-height: 16px;
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        background-color: #eee;
        color: #333;
      }

      .comment-body {
        border-bottom: 1px dotted #ccc;
        font-size: 14px;
        padding: 10px 0;
      }
    }
  }
</style>