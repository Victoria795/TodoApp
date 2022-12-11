import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import StatisticsView from "../views/StatisticsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: MainView,
    },
    {
      path: "/statistics",
      name: "statistics",
      component: StatisticsView,
    },
  ],
});

export default router;
