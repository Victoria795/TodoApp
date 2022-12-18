<template>
    <div class="fixed-overlay"
    v-show="isVisible">
    <div class="modal__wrapper"> 
      <input type="text" class="edit-modal__title" v-model="newTitle"/>
      <input type="text" class="edit-modal__description" v-model="newDescription"/>
      <input type="date" class="edit-modal__deadline" v-model="newDeadline"/>
    <button class="btn__save" @click="saveChanges">Сохранить</button>
    </div>
    </div>
</template>

<script setup>
import {ref} from "vue";
import {useTasksStore} from "../stores/useTasksStore.js";
const store = useTasksStore();


const props = defineProps({
    isVisible: Boolean,
    title: String,
    description: String,
    deadline: String
});
const newTitle = ref('');
const newDescription = ref('');
const newDeadline = ref('');

const emit = defineEmits(['saveChanges']);
function saveChanges () {
  emit('saveChanges')
};
</script>

<style>
.fixed-overlay {
    position: fixed;
    overflow: auto;
    left: 0;
    top: 0;
    width: 100%;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
}
.modal__wrapper{
  width: 550px;
  margin: 10px;
  padding: 20px;
  border: none;
  box-shadow: 2px 2px 2px grey;
  border-radius: 5px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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
.btn__save{
  background-color: #f50655;
  color: white;
  border: none;
  height: 30px;
  width: 100px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}
</style>