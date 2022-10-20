<template>
  <ul class="navbar-nav mr-auto">
    <li class="nav-item">
      <router-link class="nav-link" to="/">Home</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/gerentes" class="nav-link">
        Gerentes
      </router-link>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link" @click="efetuarLogout">Logout</a>
    </li>
  </ul>
</template>

<script>
import { logoutMixin } from "@/minixins";
export default {
  mixins: [logoutMixin],
};
</script>
