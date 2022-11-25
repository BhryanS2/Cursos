// import {
//   CADASTRAR_PROJETO,
//   EXCLUIR_PROJETO,
//   OBTER_PROJETOS,
// } from "@/store/actionsType";
// import Vuex from "vuex";
// import http from "@/http";
// import { mount, createLocalVue } from "@vue/test-utils";

// const localVue = createLocalVue();
// localVue.use(Vuex);

// const store = new Vuex.Store({
//   state: () => ({}),
//   mutations: {},
//   actions: {},
//   getters: {},
//   modules: {},
// });

// const wrapper = mount(Component, { localVue, mocks: { $store: store } });

// describe("Testando store actions", () => {
//   test("adicionando novo projeto", () => {
//     const newProjeto = {
//       nome: "Projeto 3",
//     };

//     const mutations = {
//       [CADASTRA_PROJETO]: jest.fn(),
//     };

//     const actions = {
//       [CADASTRAR_PROJETO]: jest.fn(),
//     };

//     const store = new Vuex.Store({
//       actions,
//     });

//     store.dispatch(CADASTRAR_PROJETO, newProjeto);

//     expect(actions[CADASTRAR_PROJETO]).toHaveBeenCalled();
//     expect(actions[CADASTRAR_PROJETO]).toHaveBeenCalledWith(
//       expect.any(Object),
//       newProjeto
//     );
//   });
// });
