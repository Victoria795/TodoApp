<template>
  <header class="header">
    <nav class="nav">
    <RouterLink to="/" class="nav_link" active-class="active">Задачи</RouterLink>
    <RouterLink to="/statistics" class="nav_link" active-class="active">Статистика</RouterLink>
    </nav>
  </header>
</template>

<script setup>

</script>

<style scoped>
.header{
  width: 100%;
  height: 80px;
  background: #084145;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
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