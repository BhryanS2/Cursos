<template>
  <Box>
    <div class="columns clicavel" @click="tarefaClicada">
      <div class="column is-4">
        {{ tarefa.descricao || "Sem descrição" }}
      </div>
      <div class="column is-">
        {{ tarefa.projeto?.nome || "N/D" }}
      </div>
      <div class="column">
        <Cronometro :tempoEmSegundos="tarefa.durancaoEmSegundos" />
      </div>
    </div>
  </Box>
</template>

<script lang="ts">
import { propsTarefa } from "@/types/typeTarefa";
import { defineComponent, PropType } from "vue";

import Box from "./Box.vue";
import Cronometro from "./Cronometro.vue";

export default defineComponent({
  name: "Tarefa-component",
  emits: ["tarefaClicada"],
  props: {
    tarefa: {
      type: Object as PropType<propsTarefa>,
      required: true,
      default: {
        descricao: "Sem nome",
        durancaoEmSegundos: 0,
      } as propsTarefa,
    },
  },

  methods: {
    tarefaClicada(): void {
      this.$emit("tarefaClicada", this.tarefa);
    },
  },

  components: {
    Cronometro,
    Box,
  },
});
</script>

<style scoped>
.clicavel {
  cursor: pointer;
}
</style>
