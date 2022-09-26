import { createWebHashHistory, createRouter, RouteRecordRaw } from "vue-router";

import Tarefas from "../views/Tarefas.vue";
import Projetos from "../views/Projetos.vue";
import Formulario from "../views/Projetos/Formulario.vue";

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
  {
    path: "/projetos/novo",
    name: "Novo projeto",
    component: Formulario,
  },

  {
    path: "/projetos/:id",
    name: "Novo projeto",
    component: Formulario,
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
