<template>
  <div class="box">
    <div class="columns">
      <div
        class="column is-8"
        role="form"
        aria-label="Formulário para criação de uma nova tarefa"
      >
        <input
          type="text"
          class="input"
          placeholder="Qual tarefa você deseja iniciar?"
        />
      </div>
    </div>
    <div class="column">
      <div
        class="is-flex is-align-items-center is-justify-content-space-between"
      >
        <section>
          <strong>{{ tempoDecorrido }}</strong>
        </section>
        <button class="button">
          <span class="icon">
            <i class="fas fa-play"></i>
          </span>
          <span @click="iniciarTarefa">play</span>
        </button>
        <button class="button">
          <span class="icon">
            <i class="fas fa-stop"></i>
          </span>
          <span @click="finalizarTarefa">stop</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "formulario-tarefa",
  data() {
    return {
      tarefa: {
        titulo: "",
        tempoEmSegundos: 0,
        status: "iniciada",
      },
      cronometro: 0,
    };
  },

  computed: {
    tempoDecorrido(): string {
      const dateIso = new Date(
        this.tarefa.tempoEmSegundos * 1000
      ).toISOString();
      return dateIso.substring(11, 19);
    },
  },

  methods: {
    iniciarTarefa() {
      this.cronometro = setInterval(() => {
        this.tarefa.tempoEmSegundos++;
      }, 1000);
    },
    finalizarTarefa() {
      clearInterval(this.cronometro);
      this.tarefa.status = "finalizada";
      this.tarefa.tempoEmSegundos = 0;
      this.$emit("tarefa-finalizada", this.tarefa);
    },
  },
});
</script>

<style scoped></style>
