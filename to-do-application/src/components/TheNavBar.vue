<template>
    <div>
<nav class="nav">
    <RouterLink to="/" class="nav_link" active-class="active">Задачи</RouterLink>
    <RouterLink to="/statistics" class="nav_link" active-class="active">Статистика</RouterLink>
</nav>
    </div> 
</template>

<script setup>

</script>

<style scoped>
.nav{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin: 0;
}
.nav_link{
  text-decoration: none;
  color: white;
  padding: 20px;
}
.active{
  color: rgb(163, 240, 233);
  box-shadow: inset -0.5px -0.5px 2px 2px rgb(163, 240, 233);
}
</style>