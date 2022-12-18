<template>
  <div class="wrapper">
    <div class="statistics__box">
      <h1>Текущая статистика задач</h1>
      <div class="text complete">&#10004; Выполнено: {{statistics.completedTasks||0}}</div>
      <div class="text overdue">&#8987; Просрочено: {{statistics.overdueTasks||0}}</div>
      <div class="text delete">&#10006; Удалено: {{statistics.deletedTasks||0}}</div>
      <button class="reset" @click="reset()">Сбросить статистику</button>
    </div>
  </div> 
</template>

<script setup>
import {ref, onMounted} from 'vue';
import {useStatisticsStore} from "../stores/useStatisticsStore.js";

const statistics = useStatisticsStore();
onMounted( () => {
    statistics.getDeletedTasksFromStorage();
    statistics.getCompletedTasksFromStorage();
    statistics.getOverdueTasksFromStorage();
});

function reset() {
    statistics.deletedTasks = 0;
    statistics.completedTasks = 0;
    statistics.overdueTasks = 0;
    statistics.setDeletedTaskstoStorage();
    statistics.setCompletedTaskstoStorage();
    statistics.setOverdueTaskstoStorage();
};
</script>

<style scoped>
.wrapper{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
}
.statistics__box{
    height: 300px;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    border: 1px solid #084145;
    padding: 30px 80px;
    box-shadow: 2px 2px 2px 2px #084145;
}
h1{
    align-self: center;
}
.text{
    font-size: 20px;
    font-weight: bold;
    margin: 5px;
}
.complete{
    color: #0a8f17;
}
.overdue{
    color: #f1b91e
}
.delete{
    color: #a60f0f;
}
.reset{
    margin-top: 30px;
    align-self: center;
    height: 35px;
    width: 180px;
    color: white;
    font-size: 14px;
    font-weight: bold;
    border-radius: 15px;
    border: none;
    background: #084145;
    cursor: pointer;
    padding: 5px;
}
</style>