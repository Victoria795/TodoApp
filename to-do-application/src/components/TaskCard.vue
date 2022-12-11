<template>
  <div>
  <div class="task__card" :class="{ active : done }" >
    <div class="task__card_text">
      <h4 class="task__title">{{title}}</h4>
      <div class="task__description">{{description}}</div>
      <div class="task__time">Выполнить до: {{deadline}}</div>
    </div>
    <div class="task__card_buttons">
      <button class="btn btn_delete" @click="deleteTask">&#10006;</button>
      <button class="btn btn_complete" @click="completeTask">&#10004;</button>
      <button class="btn btn_edit" @click="openEditModal" >&#9998;</button>
      <button class="btn btn_view" @click="openViewModal">&#x1F441;</button>
    </div>

  </div> 
  </div>
</template>

<script setup>
  import MainView from "../views/MainView.vue";
  import {ref} from 'vue';
  const emit = defineEmits(['deleteTask','completeTask','openViewModal','openEditModal']);
  const props = defineProps({
    title: String,
    description: String,
    deadline: Date,
    done: Boolean
  });
  
  function deleteTask() {
    emit('deleteTask')
  };
  function completeTask() {
    emit('completeTask')
  };
  function openViewModal() {
    emit('openViewModal')
  };
  function openEditModal() {
    emit('openEditModal')
  };
</script>

<style scoped>
.task__card{
  height: 100px;
  width: 400px;
  margin: 10px;
  padding: 15px;
  border: none;
  box-shadow: 2px 2px 2px grey;
  border-radius: 5px;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.task__card_text{
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.task__title{
  color: #084145;
  font-size: 18px;
  overflow: hidden;
}
.task__description{
  font-size: 18px;
  color: #0a5257;
  overflow: hidden;
}
.task__time{
  font-size: 12px;
  color: #f50655;
}
.task__card_buttons{
  display: flex;
}
.btn{
  border: none;
  background: none;
  font-size: 18px;
  padding: 10px;
}
.btn:hover{
  cursor: pointer;
  transform: scale(1.2);
}
.btn_delete{
  color: #a60f0f;
}
.btn_complete{
  color: #0a8f17;
}
.btn_edit{
  color:#f50655;
}
.btn_view{
  color:#084145;
}
.active{
  background: green;
}
</style>
