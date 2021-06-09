import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/loggin",
    name: "log in",
    component: () => import("../views/loggin.vue"),
  },
  {
    path: "/singup",
    name: "singup",
    component: () => import("../views/singup.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
