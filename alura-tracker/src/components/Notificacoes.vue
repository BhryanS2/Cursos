<template>
  <div class="notificacoes">
    <article class="message is-success">
      <div class="message-header">Atenção!</div>
      <div class="message-body">
        <p>Projeto salvo com sucesso!</p>
      </div>
    </article>
    <article class="message is-warning">
      <div class="message-header">Atenção!</div>
      <div class="message-body">
        <p>Projeto salvo com sucesso!</p>
      </div>
    </article>
    <article class="message is-danger">
      <div class="message-header">Atenção!</div>
      <div class="message-body">
        <p>Projeto salvo com sucesso!</p>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "notificações-projetos",
});
</script>

<style scoped>
.notificacoes {
  position: absolute;
  top: 0;
  right: 0;
  max-width: 300px;
  width: 100%;
  padding: 8px;
  z-index: 1;
}
</style>
