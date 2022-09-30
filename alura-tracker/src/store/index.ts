import { createStore, Store, useStore as VuexStore } from "vuex";
import { InjectionKey } from "vue";

import {
  ADICIONAR_TAREFA,
  ADICIONA_PROJETO,
  ALTERAR_PROJETO,
  ALTERA_TAREFA,
  DEFINIR_PROJETO,
  DEFINIR_TAREFAS,
  EXCLUIR_PROJETO,
  NOTIFICAR,
} from "./mutationsType";

import {
  ALTERAR_PROJETO_ACTION,
  ALTERAR_TAREFA,
  CADASTRAR_TAREFA,
  CADASTRA_PROJETO,
  EXCLUIR_PROJETO_ACTION,
  OBTER_PROJETOS,
  OBTER_TAREFAS,
} from "./actionsType";

import { projectProps } from "@/types/typeProjeto";
import { propsTarefa } from "@/types/typeTarefa";
import { notificacoesProps, notificacoesType } from "@/types/notificacoes";
import http from "@/http";

type storeProps = {
  projetos: projectProps[];
  notificacoes: notificacoesProps[];
  tarefas: propsTarefa[];
};

export const key: InjectionKey<Store<storeProps>> = Symbol();

export const store = createStore<storeProps>({
  state: {
    projetos: [],
    notificacoes: [],
    tarefas: [],
  },
  mutations: {
    [ADICIONA_PROJETO](state, nomeDoPeojeto: string) {
      const novoProjeto = {
        id: new Date().toISOString(),
        nome: nomeDoPeojeto,
      } as projectProps;
      state.projetos.push(novoProjeto);
    },
    [ALTERAR_PROJETO](state, payload: projectProps) {
      const index = state.projetos.findIndex(
        (projeto) => projeto.id === payload.id
      );
      state.projetos[index] = payload;
    },
    [EXCLUIR_PROJETO](state, id: string) {
      const index = state.projetos.findIndex((projeto) => projeto.id === id);
      state.projetos.splice(index, 1);
    },
    [NOTIFICAR](state, payload: notificacoesProps) {
      payload.id = new Date().getTime();
      state.notificacoes.push(payload);
      setTimeout(() => {
        state.notificacoes = state.notificacoes.filter(
          (notificacao) => notificacao.id !== payload.id
        );
      }, 3000);
    },
    [DEFINIR_PROJETO](state, payload: projectProps[]) {
      state.projetos = payload;
    },
    [DEFINIR_TAREFAS](state, payload: propsTarefa[]) {
      state.tarefas = payload;
    },
    [ADICIONAR_TAREFA](state, payload: propsTarefa) {
      state.tarefas.push(payload);
    },
  },
  actions: {
    [OBTER_PROJETOS]({ commit }) {
      http
        .get("projetos")
        .then((response) => {
          commit(DEFINIR_PROJETO, response.data);
        })
        .catch(() => {
          commit(NOTIFICAR, {
            titulo: "Erro",
            texto: "Não foi possível obter os projetos",
            tipo: notificacoesType.FALHA,
            id: new Date().getTime(),
          });
        });
    },
    [CADASTRA_PROJETO](contexto, payload: string) {
      return http.post("projetos", { nome: payload });
    },
    [ALTERAR_PROJETO_ACTION](contexto, projeto: projectProps) {
      return http.put(`/projetos/${projeto.id}`, projeto);
    },
    async [EXCLUIR_PROJETO_ACTION]({ commit }, id: string) {
      await http.delete(`/projetos/${id}`);
      commit(EXCLUIR_PROJETO, id);
    },
    async [OBTER_TAREFAS]({ commit }) {
      const response = await http.get("tarefas");
      return commit(DEFINIR_TAREFAS, response.data);
    },
    async [CADASTRAR_TAREFA]({ commit }, payload: propsTarefa) {
      const response = await http.post("/tarefas", payload);
      return commit(ADICIONAR_TAREFA, response.data);
    },
    async [ALTERAR_TAREFA]({ commit }, payload: propsTarefa) {
      const response = await http.put(`/tarefas/${payload.id}`, payload);
      return commit(ALTERA_TAREFA, response.data);
    },
  },
});

export function useStore(): Store<storeProps> {
  return VuexStore(key);
}
