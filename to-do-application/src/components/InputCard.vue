<template>
    <div class="wrapper">
    <h2>Новая задача</h2>
    <input type="text" placeholder="Введите название задачи" class="task__input" v-model="newTitle">
    <input type="text" placeholder="Введите описание задачи" class="task__input" v-model="newDescription">
    <input type="data" class="task__time" v-model="newData">
    <button class="btn__add" @click="addTask()">Добавить</button>
    </div> 
</template>

<script setup>
import {ref} from "vue";
const emit = defineEmits(['addTask']);
const newTitle = ref('');
const newDescription = ref('');
const newData = ref('');
function addTask() {
    emit('addTask', {newTitle, newDescription, newData})
}
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