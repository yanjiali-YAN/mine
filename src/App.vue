<template>
  <div id="app">
  <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  created(){
    //页面刷新
    this.$router.push("/detail")
    //调用actions里面的initCars
    this.$store.dispatch("initCars")
  }
}
</script>

<style>

</style>
