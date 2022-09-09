import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const state = {
  token: null,
  user: {},
};

const mutations = {
  login_user(state, { token, user }) {
    state.token = token;
    state.user = user;
  },
};

export default new Vuex.Store({
  state,
  mutations,
});
