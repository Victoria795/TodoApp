<template>
    <div class="fixed-overlay"
    v-show="isVisible">
    <div class="modal__wrapper"> 
      <slot />
    <button class="btn__save" @click="saveChanges">Сохранить</button>
    </div>
    </div>
</template>

<script setup>
import {ref} from "vue";

const props = defineProps({
    isVisible: Boolean,
});

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