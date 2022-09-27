import { createStore, Store, useStore as VuexStore } from "vuex";
import { InjectionKey } from "vue";
import {
  ADICIONA_PROJETO,
  ALTERAR_PROJETO,
  EXCLUIR_PROJETO,
} from "./mutationsType";

import { projectProps } from "@/types/typeProjeto";
import { notificacoesProps } from "@/types/notificacoes";
import { notificacoesType } from "@/types/notificacoes";

type storeProps = {
  projetos: projectProps[];
  notificacoes: notificacoesProps[];
};

export const key: InjectionKey<Store<storeProps>> = Symbol();

export const store = createStore<storeProps>({
  state: {
    projetos: [],
    notificacoes: [
      {
        id: 1,
        texto: "Notficacao de sucesso",
        titulo: "Sucesso",
        tipo: notificacoesType.SUCESSO,
      },
      {
        id: 2,
        texto: "Notficacao de falha",
        titulo: "Falha",
        tipo: notificacoesType.FALHA,
      },
      {
        id: 3,
        texto: "Notficacao de alerta",
        titulo: "Alerta",
        tipo: notificacoesType.ALERTA,
      },
    ],
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
  },
});

export function useStore(): Store<storeProps> {
  return VuexStore(key);
}
