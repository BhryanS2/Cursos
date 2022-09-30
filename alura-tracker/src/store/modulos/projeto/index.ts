import { Module } from "vuex";

import http from "@/http";
import { storeProps } from "@/store";
import {
  ALTERAR_PROJETO,
  CADASTRAR_PROJETO,
  EXCLUIR_PROJETO,
  OBTER_PROJETOS,
} from "@/store/actionsType";
import {
  ADICIONA_PROJETO,
  ALTERA_PROJETO,
  DEFINI_PROJETO,
  EXCLUI_PROJETO,
} from "@/store/mutationsType";

import { notificacoesType } from "@/types/notificacoes";
import { projectProps } from "@/types/typeProjeto";
import { NOTIFICAR } from "@/store/mutationsType";

export interface EstadoProjeto {
  projetos: projectProps[];
}

export const projeto: Module<EstadoProjeto, storeProps> = {
  mutations: {
    [ADICIONA_PROJETO](state, nomeDoPeojeto: string) {
      const novoProjeto = {
        id: new Date().toISOString(),
        nome: nomeDoPeojeto,
      } as projectProps;
      state.projetos.push(novoProjeto);
    },
    [ALTERA_PROJETO](state, payload: projectProps) {
      const index = state.projetos.findIndex(
        (projeto) => projeto.id === payload.id
      );
      state.projetos[index] = payload;
    },
    [EXCLUI_PROJETO](state, id: string) {
      const index = state.projetos.findIndex((projeto) => projeto.id === id);
      state.projetos.splice(index, 1);
    },
    [DEFINI_PROJETO](state, payload: projectProps[]) {
      state.projetos = payload;
    },
  },
  actions: {
    [OBTER_PROJETOS]({ commit }) {
      http
        .get("projetos")
        .then((response) => {
          commit(DEFINI_PROJETO, response.data);
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
    [CADASTRAR_PROJETO](contexto, payload: string) {
      return http.post("projetos", { nome: payload });
    },
    [ALTERAR_PROJETO](contexto, projeto: projectProps) {
      return http.put(`/projetos/${projeto.id}`, projeto);
    },
    async [EXCLUIR_PROJETO]({ commit }, id: string) {
      await http.delete(`/projetos/${id}`);
      commit(EXCLUI_PROJETO, id);
    },
  },
};
