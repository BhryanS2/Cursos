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
  },
  actions: {
    async [OBTER_TAREFAS]({ commit }) {
      const response = await http.get("tarefas");
      return commit(DEFINI_TAREFAS, response.data);
    },
    async [CADASTRAR_TAREFA]({ commit }, payload: propsTarefa) {
      const response = await http.post("/tarefas", payload);
      return commit(ADICIONA_TAREFA, response.data);
    },
    async [ALTERAR_TAREFA]({ commit }, payload: propsTarefa) {
      const response = await http.put(`/tarefas/${payload.id}`, payload);
      return commit(ALTERA_TAREFA, response.data);
    },
  },
};
