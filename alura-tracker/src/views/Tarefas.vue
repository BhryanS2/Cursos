<template>
  <FormularioTarefa @tarefaAcabada="adicionarTarefa" />
  <div class="lista" role="list" aria-label="Lista de tarefas">
    <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
    <Box v-if="listaEstaVazia">
      <p>Nenhuma tarefa foi inicada 😥</p>
    </Box>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { propsTarefa } from "@/types/typeTarefa";

import Box from "@/components/Box.vue";
import FormularioTarefa from "@/components/Formulario.vue";
import Tarefa from "@/components/Tarefa.vue";

export default defineComponent({
  name: "App",
  components: {
    FormularioTarefa,
    Tarefa,
    Box,
  },
  data() {
    return {
      tarefas: [] as propsTarefa[],
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
  },
});
</script>

<style>
.lista {
  padding: 1.25rem;
}
</style>
