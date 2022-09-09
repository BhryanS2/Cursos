<template>
  <div id="app">
    <BarraDeNavegacao />
    <router-view />
  </div>
</template>

<script>
import BarraDeNavegacao from "./components/BarraDeNavegacao/index.vue";
export default {
  components: {
    BarraDeNavegacao,
  },
};
</script>

<style>
.navbar {
  background: #27ae60;
}
.navbar-bytebank a {
  color: #fff;
}
.navbar-bytebank a:hover {
  color: #000;
}
</style>
