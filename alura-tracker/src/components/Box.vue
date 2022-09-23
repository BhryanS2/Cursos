<template>
  <div class="box has-text-weight-bold" :style="style">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "box-tarefa",
  data() {
    return {
      style: {
        backgroundColor: "#faf0ca",
      },
    };
  },
});
</script>
