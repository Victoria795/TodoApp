import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import EditView from "../views/EditView.vue";
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
      path: "/edit",
      name: "edit",
      component: EditView,
    },
    {
      path: "/statistics",
      name: "statistics",
      component: StatisticsView,
    },
  ],
});

export default router;
