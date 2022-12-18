<template>
  <div class="wrapper">
      <TheNavBar/>
      <RouterView/>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import TheNavBar from "./components/TheNavBar.vue";
</script>

<style scoped>
.wrapper{
  width: 100%;
  height: 100%;
}
</style>
  