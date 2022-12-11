<template>
    <div class="wrapper">
    <h2>Новая задача</h2>
    <input type="text" placeholder="Введите название задачи" class="task__input" v-model="title">
    <input type="text" placeholder="Введите описание задачи" class="task__input" v-model="description">
    <input type="date" class="task__time" v-model="data">
    <button class="btn__add" @click="addTask">Добавить</button>
    </div> 
</template>

<script setup>
  import {ref} from "vue";
    
  const emit = defineEmits(['addTask']);
  const title = ref('');
  const description = ref('');
  const data = ref(Date);
  const completed = ref(false);
  
  function addTask() {
    emit('addTask', {title, description, data, completed})
  };
</script>

<style scoped>
.wrapper{
  height: 300px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
}
h2{
  color: #f50655;
}
.task__input{
  height: 40px;
  width: 300px;
  border: none;
  outline-color:rgb(124, 185, 185);
}
.task__time{
  height: 30px;
  width: 250px;
  border:none;
  outline-color:rgb(124, 185, 185);
}
.btn__add{
  background-color: #f50655;
  color: white;
  border: none;
  height: 40px;
  width: 90px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}
</style>