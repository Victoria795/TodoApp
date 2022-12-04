<template>
  <div>
  <div class="task__card">
    <div class="task__card_text">
      <h4 class="task__title">{{title}}</h4>
      <div class="task__description">{{description}}</div>
      <div class="task__time">Выполнить до:{{deadline}}</div>
    </div>
    <div class="task__card_buttons">
      <button class="btn btn_delete">&#10006;</button>
      <button class="btn btn_complete">&#10004;</button>
    </div>
  </div> 
  </div>
</template>

<script setup>
import MainView from "../views/MainView.vue";
  const props = defineProps({
    title: String,
    description: String,
    deadline: String,
  })
</script>

<style scoped>
.task__card{
  height: 80px;
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
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
}
.task__title{
  margin: 0;
  width: 60%;
  color: #084145;
  font-size: 18px;
}
.task__description{
   font-size: 18px;
   width: 60%;
   color: #0a5257;
}
.task__time{
   font-size: 12px;
   color: #f50655;
   width: 60%;
}
.task__card_buttons{
 display: flex;
}
.btn{
  border: none;
  background: none;
  font-size: 18px;
  padding: 20px;
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
</style>
