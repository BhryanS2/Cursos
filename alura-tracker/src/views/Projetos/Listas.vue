<template>
  <section>
    <router-link to="/projetos/novo" class="button">
      <span class="icon is-small">
        <i class="fas fa-plus"></i>
      </span>
      <span>Novo projeto</span>
    </router-link>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="projeto in projetos" :key="projeto.id">
          <td>{{ projeto.id }}</td>
          <td>{{ projeto.nome }}</td>
          <td>
            <router-link :to="`/projetos/${projeto.id}`" class="button">
              <span class="icon is-small">
                <i class="fas fa-pencil-alt"></i>
              </span>
            </router-link>
            <button class="button ml-2 is-danger" @click="excluir(projeto.id)">
              <span class="icon is-small">
                <i class="fas fa-trash"></i>
              </span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { useNotification } from "@/hooks/useNotification";
import { useStore } from "@/store";
import { OBTER_PROJETOS } from "@/store/actionsType";
import { EXCLUIR_PROJETO } from "@/store/mutationsType";
import { notificacoesType } from "@/types/notificacoes";

import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "Lista-View",

  setup() {
    const store = useStore();
    const { notificar } = useNotification();
    store.dispatch(OBTER_PROJETOS);
    return {
      projetos: computed(() => store.state.projetos),
      store,
      notificar,
    };
  },

  methods: {
    excluir(id: string) {
      this.store.dispatch(EXCLUIR_PROJETO, id).then(() => {
        this.notificar(
          notificacoesType.SUCESSO,
          "Exelente",
          "Projeto excluido"
        );
      });
    },
  },
});
</script>
