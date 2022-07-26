import Vuex from "vuex";
import Vue from "vue";
import http from "@/http";

Vue.use(Vuex);

const state = {
  token: null,
  user: {},
};

const mutations = {
  LOGIN_USER(state, { access_token, user }) {
    state.token = access_token;
    state.user = user;
  },
  LOGOUT_USER(state) {
    state.token = null;
    state.user = {};
  },
};

const actions = {
  loginUser({ commit }, usuario) {
    const newPromise = new Promise((resolve, reject) => {
      http
        .post("auth/login", usuario)
        .then((response) => {
          commit("LOGIN_USER", response.data);
          resolve(response);
        })
        .catch((erro) => {
          reject(erro);
        });
    });
    return newPromise;
  },
};

const getters = {
  isLogged: (state) => {
    return Boolean(state.token);
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
