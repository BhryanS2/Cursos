<template>
  <main
    class="columns is-gapless is-multiline"
    :class="{ 'modo-escuro': isDark }"
  >
    <div class="column is-one-quarter">
      <BarraLateral @temaAlterado="alterarTema" />
    </div>
    <div class="column is-three-quarter conteudo">
      <FormularioTarefa @tarefaAcabada="adicionarTarefa" />
      <div class="lista" role="list" aria-label="Lista de tarefas">
        <Tarefa
          v-for="(tarefa, index) in tarefas"
          :key="index"
          :tarefa="tarefa"
        />
        <Box v-if="listaEstaVazia">
          <p>Nenhuma tarefa foi inicada 😥</p>
        </Box>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { propsTarefa } from "./types/typeTarefa";

import BarraLateral from "./components/BarraLateral.vue";
import Box from "./components/Box.vue";
import FormularioTarefa from "./components/Formulario.vue";
import Tarefa from "./components/Tarefa.vue";

export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
    FormularioTarefa,
    Tarefa,
    Box,
  },
  data() {
    return {
      tarefas: [] as propsTarefa[],
      isDark: false,
    };
  },
  computed: {
    listaEstaVazia(): boolean {
      const tarefas = this.tarefas;
      return tarefas.length === 0;
    },
  },
  methods: {
    adicionarTarefa(tarefa: propsTarefa) {
      this.tarefas.push(tarefa);
    },
    alterarTema(isDark: boolean) {
      this.isDark = isDark;
    },
  },
});
</script>

<style>
.lista {
  padding: 1.25rem;
}
main {
  --bg-primario: #fff;
  --texto-primario: #000;
}

main.modo-escuro {
  --bg-primario: #2b2d42;
  --texto-primario: rgb(107, 107, 107);
}

.conteudo {
  background-color: var(--bg-primario);
}
</style>
