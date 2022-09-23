<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <Cronometro :tempoEmSegundos="tempoEmSegundos" />
    <ButtonIcon
      @clicado="iniciarTarefa"
      icone="fas fa-play"
      texto="play"
      :desabilitado="cronometroRodando"
    />
    <ButtonIcon
      @clicado="finalizarTarefa"
      icone="fas fa-stop"
      texto="stop"
      :desabilitado="!cronometroRodando"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ButtonIcon from "./Button.vue";
import Cronometro from "./Cronometro.vue";

export default defineComponent({
  name: "Temporizador-tarefa",
  emits: ["tarefaFinalizada"],
  components: {
    ButtonIcon,
    Cronometro,
  },

  data() {
    return {
      tempoEmSegundos: 0,
      cronometroRef: 0,
      cronometroRodando: false,
    };
  },

  computed: {
    tempoDecorrido(): string {
      const dateIso = new Date(this.tempoEmSegundos * 1000).toISOString();
      return dateIso.substring(11, 19);
    },
  },

  methods: {
    iniciarTarefa() {
      if (this.cronometroRodando) return;
      this.cronometroRodando = true;
      this.cronometroRef = setInterval(() => {
        this.tempoEmSegundos++;
      }, 1000);
    },
    finalizarTarefa() {
      this.cronometroRodando = false;
      clearInterval(this.cronometroRef);
      this.$emit("tarefaFinalizada", this.tempoEmSegundos);
      this.tempoEmSegundos = 0;
    },
  },
});
</script>
