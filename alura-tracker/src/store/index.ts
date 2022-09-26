import { projectProps } from "@/types/typeProjeto";
import { createStore, Store, useStore as VuexStore } from "vuex";
import { InjectionKey } from "vue";

type storeProps = {
  projetos: projectProps[];
};

export const key: InjectionKey<Store<storeProps>> = Symbol();

export const store = createStore<storeProps>({
  state: {
    projetos: [],
  },
  mutations: {
    ADICIONA_PROJETO(state, nomeDoPeojeto: string) {
      const novoProjeto = {
        id: new Date().toISOString(),
        nome: nomeDoPeojeto,
      } as projectProps;
      state.projetos.push(novoProjeto);
    },
  },
});

export function useStore(): Store<storeProps> {
  return VuexStore(key);
}
