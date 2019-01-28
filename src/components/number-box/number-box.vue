<template>
  <div class="mui-numbox" data-numbox-step='1' data-numbox-min='1' data-numbox-max='9'>
    <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
    <input class="mui-numbox-input" type="number" value="1" @change="changCount" ref="numbox"/>
    <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
  </div>
</template>

<script>
  import mui from 'hongde-demo/js/mui.min'

  export default {
    name: "number-box",
    mounted() {
      mui('.mui-numbox').numbox()
    },
    methods: {
      changCount() {
        this.$emit('postCount', parseInt(this.$refs.numbox.value))
      }
    },
    watch: {
      'maxCount': function (newVal) {
        mui(".mui-numbox")
          .numbox()
          .setOption("max", newVal);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>