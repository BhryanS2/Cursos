<template>
  <div class="box formulario">
    <div class="columns">
      <div
        class="column is-8"
        role="form"
        aria-label="Formulário para criação de uma nova tarefa"
      >
        <input
          type="text"
          class="input"
          placeholder="Qual tarefa você deseja iniciar?"
          v-model="descricaoTarefa"
        />
      </div>
    </div>
    <div class="column">
      <Temporizador @tarefaFinalizada="finalizarTarefa" />
    </div>
  </div>
</template>
<script lang="ts">
import { propsTarefa } from "@/types/typeTarefa";
import { defineComponent } from "vue";
import Temporizador from "./Temporizador.vue";

export default defineComponent({
  name: "formulario-tarefa",
  emits: ["tarefaAcabada"],
  data() {
    return {
      descricaoTarefa: "",
    };
  },
  components: {
    Temporizador,
  },

  methods: {
    finalizarTarefa(tempoEmSegundos: number) {
      this.$emit("tarefaAcabada", {
        descricao: this.descricaoTarefa,
        durancaoEmSegundos: tempoEmSegundos,
      } as propsTarefa);
      this.descricaoTarefa = "";
    },
  },
});
</script>

<style>
.formulario {
  color: var(--texto-primario);
  background-color: var(--bg-primario);
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.5);
}
</style>
