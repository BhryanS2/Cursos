<template>
  <nav class="navbar navbar-expand-lg navbar-bytebank">
    <a class="navbar-brand" href="#">ByteBank</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <BarraLogado v-if="usuarioestaLogado" />
      <BarraDeslogado v-else />
    </div>
  </nav>
</template>

<script>
import BarraLogado from "./logado.vue";
import BarraDeslogado from "./deslogado.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    BarraLogado,
    BarraDeslogado,
  },

  computed: {
    ...mapGetters(["isLogged"]),
  },
};
</script>
