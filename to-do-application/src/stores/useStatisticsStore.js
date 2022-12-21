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
    function resetStatistics() {
      deletedTasks.value = 0;
      completedTasks.value = 0;
      overdueTasks.value = 0;
    };
    function getStatisticsFromStorage() {
      deletedTasks.value = +localStorage.getItem('deletedTasks') || 0;
      completedTasks.value = +localStorage.getItem('completedTasks') || 0;
      overdueTasks.value = +localStorage.getItem('overdueTasks') || 0;
    };
    function setStatisticsToStorage() {
      localStorage.setItem('deletedTasks', deletedTasks.value);
      localStorage.setItem('completedTasks', completedTasks.value);
      localStorage.setItem('overdueTasks', overdueTasks.value);
    };
    return { deletedTasks, addDeletedTask, completedTasks, addCompletedTask, 
             overdueTasks, resetStatistics,
             getStatisticsFromStorage, setStatisticsToStorage
          };
  });
