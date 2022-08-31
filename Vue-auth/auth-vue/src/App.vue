<template>
  <div id="app">
    <BarradeNavegacao />
    <router-view />
  </div>
</template>

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
<script>
import BarradeNavegacao from "@/components/BarraDeNavegacao";
export default {
  components: {
    BarradeNavegacao,
  },
};
</script>
