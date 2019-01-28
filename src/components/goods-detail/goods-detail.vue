<template>
  <div class="goods-detaile-container">
    <p class="title">{{goodsDetail.title}}</p>
    <div v-html="goodsDetail.content"></div>
  </div>
</template>

<script>
  export default {
    name: "goods-detail",
    data(){
      return {
        id:this.$route.params.id,
        goodsDetail:{}
      }
    },
    created(){
      this.getDetail()
    },
    methods:{
      getDetail(){
        this.axios
          .get(`/api/goods/getdesc/${this.id}`)
          .then(res=>{
            this.goodsDetail = res.data.message[0]
          })
      }
    }
  }
</script>

<style lang="scss">
.goods-detaile-container{
  padding: 10px;
  .title{
    font-size: 16px;
    font-weight: 700;
    color: #333;
  }
  img{
    width: 100%;
  }
}
</style>