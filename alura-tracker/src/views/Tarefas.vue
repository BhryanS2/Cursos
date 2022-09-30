<template>
  <FormularioTarefa @tarefaAcabada="adicionarTarefa" />
  <div class="lista" role="list" aria-label="Lista de tarefas">
    <Box v-if="listaEstaVazia">
      <p>Nenhuma tarefa foi inicada 😥</p>
    </Box>
    <div class="field">
      <p class="control has-icons-left has-icons-right">
        <input
          class="input"
          type="text"
          placeholder="Digite para filtrar"
          v-model="filtro"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-search"></i>
        </span>
      </p>
    </div>
    <Tarefa
      v-for="(tarefa, index) in tarefas"
      :key="index"
      :tarefa="tarefa"
      @tarefa-clicada="selectionarTarefa"
    />
    <Modal :mostrar="tarefaSelecionada !== null" v-if="tarefaSelecionada">
      <header class="modal-card-head">
        <p class="modal-card-title">Editando tarefa</p>
        <button class="delete" aria-label="close" @click="fecharModal"></button>
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
    </Modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, watchEffect } from "vue";

import { propsTarefa } from "@/types/typeTarefa";

import Box from "@/components/Box.vue";
import FormularioTarefa from "@/components/Formulario.vue";
import Tarefa from "@/components/Tarefa.vue";
import Modal from "@/components/Modal.vue";

import { useStore } from "@/store";
import {
  ALTERAR_TAREFA,
  CADASTRAR_TAREFA,
  OBTER_PROJETOS,
  OBTER_TAREFAS,
} from "@/store/actionsType";

import { computed, ref } from "@vue/reactivity";

export default defineComponent({
  name: "App",
  components: {
    FormularioTarefa,
    Tarefa,
    Box,
    Modal,
  },
  data() {
    return {
      tarefaSelecionada: null as propsTarefa | null,
    };
  },
  computed: {
    listaEstaVazia(): boolean {
      if (!this.tarefas) return true;
      return this.tarefas.length === 0;
    },
  },
  methods: {
    adicionarTarefa(tarefa: propsTarefa) {
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
    store.dispatch(OBTER_PROJETOS);

    const filtro = ref("");

    watchEffect(() => {
      store.dispatch(OBTER_TAREFAS, filtro.value);
    });

    return {
      tarefas: computed(() => store.state.tarefa.tarefas),
      store,
      filtro,
    };
  },
});
</script>

<style>
.lista {
  padding: 1.25rem;
}
</style>
