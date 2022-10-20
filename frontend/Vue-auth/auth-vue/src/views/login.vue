<template>
  <div class="container">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">E-mail</label>
        <input type="email" class="form-control" v-model="usuario.email" />
      </div>
      <div class="form-group">
        <label for="senha">Senha</label>
        <input type="password" class="form-control" v-model="usuario.senha" />
      </div>
      <p class="alert alert-danger" v-if="errorMessage">{{ errorMessage }}</p>
      <button type="submit" class="btn btn-primary brn-block">Logar</button>
      <router-link :to="{ name: 'novo.usuario' }">
        Não possui um cadastro, cadastre-se aqui!
      </router-link>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuario: {},
      errorMessage: "",
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("loginUser", this.usuario)
        .then(() => {
          this.errorMessage = "";
          this.$router.push({ name: "gerentes" });
        })
        .catch((error) => {
          if (error.request.status === 401) {
            this.errorMessage = "Usuário ou senha inválidos!";
          } else {
            this.errorMessage = "Erro ao efetuar login!";
          }
        });
    },
  },
};
</script>
