import { notificacoesProps } from "@/types/notificacoes";
import { InjectionKey } from "vue";
import { Store, createStore, useStore as VuexStore } from "vuex";
import { EstadoProjeto, projeto } from "./modulos/projeto";
import { EstadoTarefa, tarefa } from "./modulos/tarefa";
import { NOTIFICAR } from "./mutationsType";

export interface storeProps {
  projeto: EstadoProjeto;
  tarefa: EstadoTarefa;
  notificacoes: notificacoesProps[];
}

export const key: InjectionKey<Store<storeProps>> = Symbol();

export const store = createStore<storeProps>({
  state: {
    notificacoes: [],
    tarefa: {
      tarefas: [],
    },
    projeto: {
      projetos: [],
    },
  },
  mutations: {
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
  modules: {
    projeto,
    tarefa,
  },
});

export function useStore(): Store<storeProps> {
  return VuexStore(key);
}
