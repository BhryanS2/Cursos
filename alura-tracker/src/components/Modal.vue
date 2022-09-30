<template>
  <div class="modal is-active" v-if="mostrar">
    <div class="modal-background"></div>
    <div class="modal-card">
      <slot></slot>
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
