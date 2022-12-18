import { ref} from "vue";
import { defineStore } from "pinia";

export const useStatisticsStore = defineStore('statistics', () => {
    const deletedTasks = ref(0);
    function addDeletedTask() {
      deletedTasks.value++;
    };

    const completedTasks =ref(0);
    function addCompletedTask(){
      completedTasks.value++;
    };
 
    const overdueTasks = ref(0);
    function addOverdueTask(deadline){
      if(Date.now >= Date.parse(deadline)){
        overdueTasks.value++;
      }
    };

    function getDeletedTasksFromStorage() {
      deletedTasks.value = localStorage.getItem('deletedTasks');
    };
    function getCompletedTasksFromStorage() {
      completedTasks.value = localStorage.getItem('completedTasks');
    };
    function getOverdueTasksFromStorage() {
      overdueTasks.value = localStorage.getItem('overdueTasks');
    };
    function setDeletedTaskstoStorage() {
      localStorage.setItem('deletedTasks', deletedTasks.value);
    };
    function setCompletedTaskstoStorage() {
      localStorage.setItem('completedTasks', completedTasks.value);
    };
    function setOverdueTaskstoStorage() {
      localStorage.setItem('overdueTasks', overdueTasks.value);
    };
    return { deletedTasks, addDeletedTask, completedTasks, addCompletedTask, 
             overdueTasks, addOverdueTask, getOverdueTasksFromStorage, setOverdueTaskstoStorage,
            getDeletedTasksFromStorage, getCompletedTasksFromStorage, 
            setDeletedTaskstoStorage, setCompletedTaskstoStorage,
           
          };
  });
