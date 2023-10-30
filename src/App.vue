<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {

  },
  mounted() {
    //App的根组件挂载完毕,发一次请求即可.
    this.$store.dispatch("getCategory");
  },
}
</script>

<style>

</style>
