<template>
    <div class="wrapper">
      <InputCard/>
      <div class="card_box">
      <TaskCard
      :title="task.title" 
      :description="task.description"
      :deadline="new Date(task.deadline).toLocaleDateString()"
      :done="task.done"
      v-for="(task, index) in tasks"
      :key="index"
      @delete-task="deleteTask(index), addDeletedTask()"
      @complete-task="completeTask(index), addCompletedTask()"
      @open-edit-modal="toggleEditModal(), chosenTask=task"
      @open-view-modal="toggleViewModal(), chosenTask=task"
      />
      <ViewModal 
      v-if="viewModalVisible"
      @close-modal="toggleViewModal"
      :title="chosenTask.title" 
      :description="chosenTask.description"
      :deadline="new Date(chosenTask.deadline).toLocaleDateString()"
      >
      </ViewModal>

      <EditModal
      v-if="editModalVisible"
      @save-changes="saveChanges($event, chosenTask.id)"
      :title="chosenTask.title"
      :description="chosenTask.description"
      :deadline="chosenTask.deadline"
      >
      </EditModal>
      </div>
    </div> 
</template>

<script setup>
import TaskCard from "../components/TaskCard.vue";
import InputCard from "../components/InputCard.vue";
import ViewModal from "../components/ViewModal.vue";
import EditModal from "../components/EditModal.vue";
import {useStatisticsStore} from "../stores/useStatisticsStore.js";
import {ref, onMounted} from 'vue';
import {useTasksStore} from "../stores/useTasksStore.js";
import { storeToRefs } from "pinia";
  
const statistics = useStatisticsStore();
const store = useTasksStore();
const {tasks} = storeToRefs(store);

onMounted( () => {
  store.getTasksFromStorage();
  let overdueTasks = 0;
        tasks.value.forEach(task => {
        const isOverdue = (new Date(task.deadline)).getTime() < Date.now();
        return overdueTasks += isOverdue;
        });
        localStorage.setItem('overdueTasks', overdueTasks);
});

function saveChanges({newTitle, newDescription, newDeadline}, id){
store.editTask(newTitle, newDescription, newDeadline, id);
editModalVisible.value = !editModalVisible.value;
};

const chosenTask = ref({});
function deleteTask(index) {
  store.deleteTask(index);
  store.setTasksToStorage();
};
function completeTask (index) {
   store.completeTask(index);
   store.setTasksToStorage();
};

function addDeletedTask() {
  statistics.addDeletedTask();
  localStorage.setItem('deletedTasks', statistics.deletedTasks);
};
function addCompletedTask() {
  statistics.addCompletedTask();
  localStorage.setItem('completedTasks', statistics.completedTasks);
};

const viewModalVisible = ref(false);
const toggleViewModal = () => {
   viewModalVisible.value = !viewModalVisible.value
};

const editModalVisible = ref(false);
const toggleEditModal = () => {
   editModalVisible.value = !editModalVisible.value
};
</script>

<style scoped>
.active{
  background: #0a5257;
}
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