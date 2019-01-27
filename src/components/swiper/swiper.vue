<template>
  <mt-swipe :auto="4000" class="swip">
    <mt-swipe-item v-for="item in imgList" :key="item.id" class="img-box">
      <img v-if="item.img" :src="item.img" :class="{'isfull':isfull}">
      <img v-else :src="item.src">
    </mt-swipe-item>
  </mt-swipe>
</template>

<script>
  export default {
    name: "swiper",
    props: ['imgList','isfull']
  }
</script>

<style lang="scss" scoped>
  .swip {
    height: 30vh;

    .mint-swipe-item {
      text-align: center;

      img {
        height: 100%;
      }
    }

  }

  .isfull {
    width: 100%;
  }
</style>