<template>
  <form @submit.prevent="salvar">
    <div class="field">
      <label :for="nomeDoProjeto" class="label"> Nome do Projeto </label>
      <input
        type="text"
        class="input"
        v-model="nomeDoProjeto"
        :id="nomeDoProjeto"
      />
    </div>
    <div class="field">
      <button class="button" type="submit">Salvar</button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "@/store";
import { ALTERAR_PROJETO, CADASTRAR_PROJETO } from "@/store/actionsType";

import { useNotification } from "@/hooks/useNotification";

import { notificacoesType } from "@/types/notificacoes";

export default defineComponent({
  name: "formulario-projeto",
  props: {
    id: {
      type: String,
    },
  },

  methods: {
    sucesso(title: string) {
      this.nomeDoProjeto = "";
      this.notificar(notificacoesType.SUCESSO, "Exelente", title);
      this.$router.push("/projetos");
    },
    salvar() {
      if (this.id) {
        this.store
          .dispatch(ALTERAR_PROJETO, {
            id: this.id,
            nome: this.nomeDoProjeto,
          })
          .then(() => this.sucesso("Projeto alterado"));
      } else {
        this.store
          .dispatch(CADASTRAR_PROJETO, this.nomeDoProjeto)
          .then(() => this.sucesso("Projeto cadastrado"));
      }
    },
  },
  setup(props) {
    const store = useStore();
    const { notificar } = useNotification();
    const nomeDoProjeto = ref("");

    if (props.id) {
      const projeto = store.state.projeto.projetos.find(
        (projeto) => Number(projeto.id) === Number(props.id)
      );
      nomeDoProjeto.value = projeto?.nome || "";
    }
    return {
      store,
      notificar,
      nomeDoProjeto,
    };
  },
});
</script>
