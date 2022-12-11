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

    return { deletedTasks, addDeletedTask, completedTasks, addCompletedTask };
  });
