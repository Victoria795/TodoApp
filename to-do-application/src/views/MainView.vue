<template>
    <div class="wrapper">
      <InputCard @addTask="addTaskHere({newTitle, newDescription, newData})"/>
      <div class="card_box">
      <TaskCard 
      :title="task.title" 
      :description="task.description"
      :deadline="task.deadline"
      v-for="task in tasks"
      :key="task.id"/>
      </div>
    </div> 
</template>

<script setup>
import TaskCard from "../components/TaskCard.vue";
import InputCard from "../components/InputCard.vue";
import {ref} from 'vue';
  const tasks = ref([
      {
        id: 1,
        title:"This will never end",
        description: "Definitely",
        deadline: "date"
      },
      {
        id: 2,
        title:"Sample task two",
        description: "Sample description",
        deadline: "date"
      },
    ])
  function addTaskHere({newTitle, newDescription, newData}){
    tasks.value.push(
      {
        id: new Date(),
        title: newTitle,
        description: newDescription,
        deadline: newData
      }
    )
  }
</script>

<style scoped>
.wrapper{
  display: flex;
  justify-content: space-around;
}
.card_box{
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
}
</style>