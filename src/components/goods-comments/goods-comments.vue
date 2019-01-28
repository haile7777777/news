<template>
  <div class="goods-comments-container">
    <comment :id="this.id"></comment>
  </div>
</template>

<script>
  import Comment from '../comment/comment'

  export default {
    name: "goods-comments",
    data() {
      return {
        id: this.$route.params.id
      }
    },
    components: {
      Comment
    }
  }
</script>

<style scoped>
  .goods-comments-container {
    padding: 10px;
  }
</style>