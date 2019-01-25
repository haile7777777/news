<template>
  <div id="app">
    <!-- header -->
    <mt-header title="vue-demo" fixed>
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!-- content -->
    <div class="content">
      <transition>
        <router-view></router-view>
      </transition>
    </div>
    <!-- footter tabbar -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to='/member'>
        <span class="mui-icon mui-icon-contact"> </span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to='/cart'>
        <span class="mui-icon mui-icon-contact">
          <span class="mui-badge">9</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to='/search'>
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>

</template>

<script>
  export default {
    name: "app"
  };
</script>

<style lang="scss" scoped>
  #app {
    height: 100%;
    position: relative;
    background-color: #fff;

    .content {
      position: absolute;
      top: 40px;
      bottom: 50px;
      width: 100%;
      overflow-x: hidden;
    }
  }

  .v-enter {
    transform: translateX(100%);
  }

  .v-leave-to {
    transform: translateX(-100%);
    position: absolute;
  }

  .v-enter-active,
  .v-leave-active {
    transition: all 0.5s ease;
  }
</style>

