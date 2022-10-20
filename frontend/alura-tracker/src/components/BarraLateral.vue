<template>
  <header>
    <h1>
      <img src="@/assets/logo.png" alt="" />
    </h1>
    <button class="button" @click="alterarTema">{{ getTextMode }}</button>
    <nav class="panel mt-5">
      <ul>
        <li>
          <router-link to="/" class="link">
            <i class="fas fa-tasks"></i>
            Tarefas
          </router-link>
        </li>
        <li>
          <router-link to="/projetos" class="link">
            <i class="fas fa-project-diagram"></i>
            Projetos
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouteRecordRaw } from "vue-router";
import { routes as Routes } from "../router";

export default defineComponent({
  name: "BarraLateral",
  emits: ["temaAlterado"],
  data() {
    return {
      modoEscuro: false,
    };
  },
  computed: {
    getTextMode(): string {
      const light = "Ativar modo escuro";
      const dark = "Ativar modo claro";
      return this.modoEscuro ? light : dark;
    },
    getRoutes(): RouteRecordRaw[] {
      const routes = Routes;
      return routes;
    },
  },
  methods: {
    alterarTema() {
      this.modoEscuro = !this.modoEscuro;
      this.$emit("temaAlterado", this.modoEscuro as boolean);
    },
  },
});
</script>

<style scoped>
header {
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
  text-align: center;
}
.panel li {
  margin: 8px 0;
}
.link {
  color: #fff;
}
.link:hover {
  color: #faf0ca;
}
.link.router-link-active {
  color: #faf0ca;
}
@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>
