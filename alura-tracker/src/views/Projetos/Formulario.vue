<template>
  <form @submit.prevent="salvar">
    <div class="field">
      <label for="nomeDoProjeto" class="label"> Nome do Projeto </label>
      <input
        type="text"
        class="input"
        v-model="nomeDoProjeto"
        id="nomeDoProjet"
      />
    </div>
    <div class="field">
      <button class="button" type="submit">Salvar</button>
    </div>
  </form>
</template>

<script lang="ts">
import { useStore } from "@/store";
import {
  ALTERAR_PROJETO,
  ADICIONA_PROJETO,
  NOTIFICAR,
} from "@/store/mutationsType";
import { notificacoesType } from "@/types/notificacoes";
import { defineComponent } from "vue";

export default defineComponent({
  name: "formulario-projeto",
  props: {
    id: {
      type: String,
    },
  },

  mounted() {
    if (this.id) {
      const projeto = this.store.state.projetos.find(
        (projeto) => projeto.id === this.id
      );
      this.nomeDoProjeto = projeto?.nome || "";
    }
  },

  data() {
    return {
      nomeDoProjeto: "",
    };
  },
  methods: {
    salvar() {
      if (this.id) {
        this.store.commit(ALTERAR_PROJETO, {
          id: this.id,
          nome: this.nomeDoProjeto,
        });
      } else {
        this.store.commit(ADICIONA_PROJETO, this.nomeDoProjeto);
      }
      this.nomeDoProjeto = "";
      this.store.commit(NOTIFICAR, {
        titulo: "Novo projeto",
        texto: "Projeto salvo com sucesso",
        tipo: notificacoesType.SUCESSO,
      });
      this.$router.push("/projetos");
    },
  },
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
});
</script>
