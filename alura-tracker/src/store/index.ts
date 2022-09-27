import { createStore, Store, useStore as VuexStore } from "vuex";
import { InjectionKey } from "vue";
import {
  ADICIONA_PROJETO,
  ALTERAR_PROJETO,
  EXCLUIR_PROJETO,
  NOTIFICAR,
} from "./mutationsType";

import { projectProps } from "@/types/typeProjeto";
import { notificacoesProps } from "@/types/notificacoes";

type storeProps = {
  projetos: projectProps[];
  notificacoes: notificacoesProps[];
};

export const key: InjectionKey<Store<storeProps>> = Symbol();

export const store = createStore<storeProps>({
  state: {
    projetos: [],
    notificacoes: [],
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
  },
});

export function useStore(): Store<storeProps> {
  return VuexStore(key);
}
