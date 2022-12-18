import { ref} from "vue";
import { defineStore } from "pinia";

export const useTasksStore = defineStore('tasks', () => {
    
  const tasks = ref([]);
    
  function addTask (title, description, deadline, done) {
      tasks.value.push(
      { title, description, deadline: new Date(deadline).toLocaleDateString(), done }
  )
  };

  function setTasksToStorage() {
        localStorage.setItem('personalTasks', JSON.stringify(tasks.value));
  };
  function getTasksFromStorage(){
        let personalTasks = JSON.parse(localStorage.getItem('personalTasks'));
        tasks.value = personalTasks;
  };

  function deleteTask(index) {
    tasks.value.splice(index, 1);
  };
  function completeTask(index) {
    tasks.value[index].done = true;
  };
  
  return {tasks, addTask, setTasksToStorage, getTasksFromStorage, deleteTask, completeTask};
  });