<template>
  <div class="wrapper">
    <header class="header">
      <TheNavBar/>
    </header>
    <RouterView/>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import TheNavBar from "./components/TheNavBar.vue";
</script>

<style scoped>
.wrapper{
  position: absolute;
  width: 100%;
  height: 100%;
}
.header{
  width: 100%;
  height: 80px;
  background: #084145;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
