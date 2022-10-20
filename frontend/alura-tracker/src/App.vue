<template>
  <main
    class="columns is-gapless is-multiline"
    :class="{ 'modo-escuro': isDark }"
  >
    <div class="column is-one-quarter">
      <BarraLateral @temaAlterado="alterarTema" />
    </div>
    <div class="column is-three-quarter conteudo">
      <Notificacoes />
      <router-view />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BarraLateral from "./components/BarraLateral.vue";
import Notificacoes from "./components/Notificacoes.vue";

export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
    Notificacoes,
  },
  data() {
    return {
      isDark: false,
    };
  },
  methods: {
    alterarTema(isDark: boolean) {
      this.isDark = isDark;
    },
  },
});
</script>

<style>
main {
  --bg-primario: #fff;
  --texto-primario: #000;
}

main.modo-escuro {
  --bg-primario: #2b2d42;
  --texto-primario: rgb(107, 107, 107);
}

.conteudo {
  background-color: var(--bg-primario);
}
</style>
