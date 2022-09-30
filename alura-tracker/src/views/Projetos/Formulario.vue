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
import { useRouter } from "vue-router";

export default defineComponent({
  name: "formulario-projeto",
  props: {
    id: {
      type: String,
    },
  },

  setup(props) {
    const router = useRouter();

    const store = useStore();
    const { notificar } = useNotification();
    const nomeDoProjeto = ref("");

    if (props.id) {
      const projeto = store.state.projeto.projetos.find(
        (projeto) => Number(projeto.id) === Number(props.id)
      );
      nomeDoProjeto.value = projeto?.nome || "";
    }

    const sucesso = (title: string) => {
      nomeDoProjeto.value = "";
      notificar(notificacoesType.SUCESSO, "Exelente", title);
      router.push("/projetos");
    };

    const salvar = () => {
      if (props.id) {
        store
          .dispatch(ALTERAR_PROJETO, {
            id: props.id,
            nome: nomeDoProjeto.value,
          })
          .then(() => sucesso("Projeto alterado"));
      } else {
        store
          .dispatch(CADASTRAR_PROJETO, nomeDoProjeto.value)
          .then(() => sucesso("Projeto cadastrado"));
      }
    };
    return {
      nomeDoProjeto,
      salvar,
    };
  },
});
</script>
