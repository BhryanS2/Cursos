<template>
  <div class="box formulario">
    <div class="columns">
      <div
        class="column is-5"
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
      <div class="column is-3">
        <div class="select">
          <select v-model="idProjeto">
            <option value="">Selecione o projeto</option>
            <option
              v-for="projeto in projetos"
              :value="projeto.id"
              :key="projeto.id"
            >
              {{ projeto.nome }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div class="column">
      <Temporizador @tarefaFinalizada="finalizarTarefa" />
    </div>
  </div>
</template>
<script lang="ts">
import { key } from "@/store";
import { propsTarefa } from "@/types/typeTarefa";

import { computed, defineComponent } from "vue";

import { useStore } from "vuex";

import Temporizador from "./Temporizador.vue";

export default defineComponent({
  name: "formulario-tarefa",
  emits: ["tarefaAcabada"],
  data() {
    return {
      descricaoTarefa: "",
      idProjeto: "",
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
        projeto: this.projetos.find((proj) => proj.id == this.idProjeto),
      } as propsTarefa);
      this.descricaoTarefa = "";
    },
  },

  setup() {
    const store = useStore(key);
    return {
      projetos: computed(() => store.state.projetos),
    };
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
