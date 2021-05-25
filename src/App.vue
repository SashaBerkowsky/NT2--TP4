<template>
  <div id="app" class="jumbotron">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./componentes/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
}
</style>
