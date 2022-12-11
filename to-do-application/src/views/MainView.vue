<template>
    <div class="wrapper">
      <InputCard @addTask="addTask"/>
      <div class="card_box">
      <TaskCard :class="{ 'active' : done }"
      :title="task.title" 
      :description="task.description"
      :deadline="task.deadline"
      v-for="(task, index) in tasks"
      :key="index"
      @deleteTask="deleteTask(index), addDeletedTask()"
      @completeTask="completeTask(index), addCompletedTask()"
      @openEditModal="toggleEditModal(), chosenTask=task"
      @openViewModal="toggleViewModal(), chosenTask=task"
      />

      <ViewModal 
      :isVisible="viewModalVisible"
      @closeModal="toggleViewModal"
      :title="chosenTask.title" 
      :description="chosenTask.description"
      :deadline="chosenTask.deadline"
      >
      </ViewModal>

      <EditModal
      :isVisible="editModalVisible"
      @saveChanges="toggleEditModal"
      >
      <input type="text" class="edit-modal__title" v-model="chosenTask.title"/>
      <input type="text" class="edit-modal__description" v-model="chosenTask.description"/>
      <input type="date" class="edit-modal__deadline" v-model="chosenTask.deadline"/>
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

const statistics = useStatisticsStore();
const chosenTask = ref({});

function addDeletedTask() {
  statistics.addDeletedTask();
  localStorage.setItem('deletedTasks', statistics.deletedTasks)
};
function addCompletedTask() {
  statistics.addCompletedTask();
  localStorage.setItem('completedTasks', statistics.completedTasks)
};
function completeTask (index) {
   tasks.value[index].done = true;
};
function deleteTask(index) {
  tasks.value.splice(index, 1);
  localStorage.setItem('personalTasks', JSON.stringify(tasks.value));
};

onMounted( () => {
   let personalTasks = JSON.parse(localStorage.getItem('personalTasks'));
   personalTasks.forEach( task => {
      tasks.value.push(task)
   }
   )
});

const tasks = ref([]);
function addTask ({title, description, data}) {
    tasks.value.push(
      {
        title: title.value,
        description: description.value,
        deadline: data.value,
        done: false,
      }
    )
    title.value = "";
    description.value = "";
    data.value = "";
    localStorage.setItem('personalTasks', JSON.stringify(tasks.value));
};

const viewModalVisible = ref(false);
const toggleViewModal = () => {
   viewModalVisible.value = !viewModalVisible.value
};

const editModalVisible = ref(false);
const toggleEditModal = () => {
   editModalVisible.value = !editModalVisible.value
   localStorage.setItem('personalTasks', JSON.stringify(tasks.value));
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
.edit-modal__title{
  color: #084145;
  font-size: 22px;
  flex: 1;
  text-align: center;
}
.edit-modal__description{
  font-size: 22px;
  color: #0a5257;
  flex: 1;
  margin: 20px 0px;
  text-align: center;
}
.edit-modal__deadline{
  font-size: 16px;
  font-weight: bold;
  color: #f50655;
  text-align: center;
  flex: 1;
  margin-bottom: 10px;
}
</style>