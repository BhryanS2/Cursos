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
          v-model="descricao"
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

import { computed, defineComponent, ref } from "vue";

import { useStore } from "vuex";

import Temporizador from "./Temporizador.vue";

export default defineComponent({
  name: "formulario-tarefa",
  emits: ["tarefaAcabada"],
  components: {
    Temporizador,
  },

  setup(props, { emit }) {
    const store = useStore(key);

    const projetos = computed(() => store.state.projeto.projetos);

    const descricao = ref("");
    const idProjeto = ref("");

    const finalizarTarefa = (tempoEmSegundos: number) => {
      emit("tarefaAcabada", {
        descricao: descricao.value,
        durancaoEmSegundos: tempoEmSegundos,
        projeto: projetos.value.find((proj) => proj.id == idProjeto.value),
      } as propsTarefa);
      descricao.value = "";
    };

    return {
      projetos,
      descricao,
      idProjeto,
      finalizarTarefa,
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
