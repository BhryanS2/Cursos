<template>
  <FormularioTarefa @tarefaAcabada="adicionarTarefa" />
  <div class="lista" role="list" aria-label="Lista de tarefas">
    <Box v-if="listaEstaVazia">
      <p>Nenhuma tarefa foi inicada 😥</p>
    </Box>
    <Tarefa
      v-for="(tarefa, index) in tarefas"
      :key="index"
      :tarefa="tarefa"
      @tarefa-clicada="selectionarTarefa"
    />
    <div class="modal is-active" v-if="tarefaSelecionada">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Editando tarefa</p>
          <button
            class="delete"
            aria-label="close"
            @click="fecharModal"
          ></button>
        </header>
        <section class="modal-card-body">
          <div class="field">
            <label for="descricaoTarefa" class="label"> Descrição </label>
            <input
              type="text"
              class="input"
              id="descricaoTarefa"
              v-model="tarefaSelecionada.descricao"
            />
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="alterarTarefa">
            Salvar alterações
          </button>
          <button class="button" @click="fecharModal">Cancelar</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { propsTarefa } from "@/types/typeTarefa";

import Box from "@/components/Box.vue";
import FormularioTarefa from "@/components/Formulario.vue";
import Tarefa from "@/components/Tarefa.vue";
import { useStore } from "@/store";
import {
  ALTERAR_TAREFA,
  CADASTRAR_TAREFA,
  OBTER_TAREFAS,
} from "@/store/actionsType";
import { computed } from "@vue/reactivity";

export default defineComponent({
  name: "App",
  components: {
    FormularioTarefa,
    Tarefa,
    Box,
  },
  data() {
    return {
      tarefaSelecionada: null as propsTarefa | null,
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
      // this.tarefas.push(tarefa);
      this.store.dispatch(CADASTRAR_TAREFA, tarefa);
    },
    selectionarTarefa(tarefa: propsTarefa) {
      this.tarefaSelecionada = tarefa;
    },
    fecharModal() {
      this.tarefaSelecionada = null;
    },
    alterarTarefa() {
      this.store
        .dispatch(ALTERAR_TAREFA, this.tarefaSelecionada)
        .then(() => this.fecharModal());
    },
  },
  setup() {
    const store = useStore();
    store.dispatch(OBTER_TAREFAS);
    return {
      tarefas: computed(() => store.state.tarefas),
      store,
    };
  },
});
</script>

<style>
.lista {
  padding: 1.25rem;
}
</style>
