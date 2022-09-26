import { createWebHashHistory, createRouter, RouteRecordRaw } from "vue-router";

import Tarefas from "../views/Tarefas.vue";
import Projetos from "../views/Projetos.vue";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: Tarefas,
  },
  {
    path: "/projetos",
    name: "projetos",
    component: Projetos,
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
