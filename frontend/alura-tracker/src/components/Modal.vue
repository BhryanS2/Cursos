<template>
  <div class="modal is-active" v-if="mostrar">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <slot name="cabecalho"></slot>
      </header>
      <section class="modal-card-body">
        <slot name="conteudo"></slot>
      </section>
      <footer class="modal-card-foot">
        <slot name="rodape"></slot>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "modal-tarefas",
  props: {
    mostrar: {
      type: Boolean,
      required: true,
    },
  },

  setup(props) {
    return {
      props,
    };
  },
});
</script>
