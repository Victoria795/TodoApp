<template>
    <div class="fixed-overlay"
    v-show="isVisible">
    <div class="modal__wrapper"> 
      <h4 class="view-modal__title">{{title}}</h4>
      <div class="view-modal__description">{{description}}</div>
      <div class="view-modal__deadline">Выполнить до: {{deadline}}</div>
    <button class="btn__close" @click="closeModal">Закрыть</button>
    </div>
    </div>
</template>

<script setup>

const props = defineProps({
    isVisible: Boolean,
    title: String,
    description: String,
    deadline: Date,
    completed: {type: Boolean,
                default: false
               } 
});
const emit = defineEmits(['closeModal']);
function closeModal () {
  emit('closeModal')
};
</script>

<style>
.fixed-overlay {
    position: fixed;
    overflow: auto;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
}
.modal__wrapper{
  min-height: 200px;
  width: 550px;
  margin: 10px;
  padding: 15px;
  border: none;
  box-shadow: 2px 2px 2px grey;
  border-radius: 5px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.view-modal__title{
  color: #084145;
  font-size: 22px;
  flex: 1;
  text-align: center;
}
.view-modal__description{
  font-size: 22px;
  color: #0a5257;
  flex: 1;
  margin: 20px 0px;
  text-align: center;
}
.view-modal__deadline{
  font-size: 16px;
  font-weight: bold;
  color: #f50655;
  flex: 1;
  margin-bottom: 10px;
}
.btn__close{
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