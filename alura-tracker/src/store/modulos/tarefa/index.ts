import { Module } from "vuex";

import { storeProps } from "@/store";
import { propsTarefa } from "@/types/typeTarefa";
import http from "@/http";
import {
  OBTER_TAREFAS,
  CADASTRAR_TAREFA,
  ALTERAR_TAREFA,
} from "@/store/actionsType";

import {
  DEFINI_TAREFAS,
  ADICIONA_TAREFA,
  ALTERA_TAREFA,
} from "@/store/mutationsType";

export interface EstadoTarefa {
  tarefas: propsTarefa[];
}

export const tarefa: Module<EstadoTarefa, storeProps> = {
  mutations: {
    [DEFINI_TAREFAS](state, payload: propsTarefa[]) {
      state.tarefas = payload;
    },
    [ADICIONA_TAREFA](state, payload: propsTarefa) {
      state.tarefas.push(payload);
    },
    [ALTERA_TAREFA](state, payload: propsTarefa) {
      const index = state.tarefas.findIndex(
        (tarefa) => tarefa.id === payload.id
      );
      state.tarefas[index] = payload;
    },
  },
  actions: {
    [OBTER_TAREFAS]({ commit }, filtro: string | null) {
      let url = "tarefas";
      if (filtro) {
        url += `?descricao=${filtro}`;
      }

      http.get(url).then((response) => commit(DEFINI_TAREFAS, response.data));
    },
    [CADASTRAR_TAREFA]({ commit }, payload: propsTarefa) {
      http
        .post("/tarefas", payload)
        .then((response) => commit(ADICIONA_TAREFA, response.data));
    },
    [ALTERAR_TAREFA]({ commit }, payload: propsTarefa) {
      http
        .put(`/tarefas/${payload.id}`, payload)
        .then((response) => commit(ALTERA_TAREFA, response.data));
    },
  },
};
