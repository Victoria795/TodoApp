<template>
    <div class="wrapper">
    <h2>Новая задача</h2>
    <input type="text" placeholder="Введите название задачи" class="task__input" v-model="title">
    <input type="text" placeholder="Введите описание задачи" class="task__input" v-model="description">
    <input type="date" class="task__time" v-model="deadline">
    <button class="btn__add" @click="addTask">Добавить</button>
    <div class="error-warning" v-show="error">Заполните все поля!</div>
    </div> 
</template>

<script setup>
  import {useTasksStore} from "../stores/useTasksStore.js";
  import {ref} from "vue";

  const store = useTasksStore();
    
  const title = ref('');
  const description = ref('');
  const deadline = ref('');
  const done = ref(false);
  const error = ref(false);

  function addTask() {
    if(title.value===''||description.value===''||deadline.value===''){
    error.value = true;
    return
    };
    store.addTask(title.value, description.value, deadline.value, done.value);
    error.value = false;
    title.value = "";
    description.value = "";
    deadline.value = "";
    store.setTasksToStorage();
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
  min-height: 40px;
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
.error-warning{
  color: red;
  font-size: 18px;
  font-weight: bold;
}
</style>