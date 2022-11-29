import { ADICIONA_TAREFA, ALTERA_TAREFA } from "@/store/mutationsType";
import { projectProps } from "@/types/typeProjeto";
import { propsTarefa } from "@/types/typeTarefa";
import Vuex from "vuex";

const projeto: projectProps = {
  id: "1",
  nome: "Projeto 1",
};

describe("Testando Tarefa", () => {
  test("adicionando nova tarefa", () => {
    const state = {
      tarefas: [
        {
          durancaoEmSegundos: 100,
          descricao: "Tarefa 1",
          projeto: projeto,
        },
      ] as propsTarefa[],
    };

    const newTarefa = {
      nome: "Tarefa 3",
    };

    const mutations = {
      [ADICIONA_TAREFA]: jest.fn(),
    };

    const store = new Vuex.Store({
      state,
      mutations,
    });

    store.commit(ADICIONA_TAREFA, newTarefa);

    expect(mutations[ADICIONA_TAREFA]).toHaveBeenCalled();
    expect(mutations[ADICIONA_TAREFA]).toHaveBeenCalledWith(state, newTarefa);
  });

  test("alterando tarefa", () => {
    const state = {
      tarefas: [
        {
          durancaoEmSegundos: 100,
          descricao: "Tarefa 1",
          projeto: projeto,
        },
      ] as propsTarefa[],
    };

    const tarefaAlterada = {
      durancaoEmSegundos: 100,
      descricao: "Tarefa 1 alterada",
      projeto: projeto,
    };

    const mutations = {
      [ALTERA_TAREFA]: jest.fn(),
    };

    const store = new Vuex.Store({
      state,
      mutations,
    });

    store.commit(ALTERA_TAREFA, tarefaAlterada);

    expect(mutations[ALTERA_TAREFA]).toHaveBeenCalled();
    expect(mutations[ALTERA_TAREFA]).toHaveBeenCalledWith(
      state,
      tarefaAlterada
    );
  });
});
