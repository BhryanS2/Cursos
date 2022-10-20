<template>
  <section>
    <strong class="display">
      {{ tempoDecorrido }}
    </strong>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Cronometro-component",
  props: {
    tempoEmSegundos: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    tempoDecorrido(): string {
      const dateIso = new Date(this.tempoEmSegundos * 1000).toISOString();
      return dateIso.substring(11, 19);
    },
  },
});
</script>

<style>
.display {
  color: var(--texto-primario);
}
</style>
