import {
  ADICIONA_PROJETO,
  ALTERA_PROJETO,
  DEFINI_PROJETO,
  EXCLUI_PROJETO,
} from "@/store/mutationsType";
import Vuex from "vuex";

describe("Testando store", () => {
  test("adicionando novo projeto", () => {
    const state = {
      projetos: [
        { id: "1", nome: "Projeto 1" },
        { id: "2", nome: "Projeto 2" },
      ],
    };

    const newProjeto = {
      nome: "Projeto 3",
    };

    const mutations = {
      [ADICIONA_PROJETO]: jest.fn(),
    };

    const store = new Vuex.Store({
      state,
      mutations,
    });

    store.commit(ADICIONA_PROJETO, newProjeto);

    expect(mutations[ADICIONA_PROJETO]).toHaveBeenCalled();
    expect(mutations[ADICIONA_PROJETO]).toHaveBeenCalledWith(state, newProjeto);
  });

  test("alterando projeto", () => {
    const state = {
      projetos: [
        { id: "1", nome: "Projeto 1" },
        { id: "2", nome: "Projeto 2" },
      ],
    };

    const projetoAlterado = {
      id: "2",
      nome: "Projeto 2 alterado",
    };

    const mutations = {
      [ALTERA_PROJETO]: jest.fn(),
    };

    const store = new Vuex.Store({
      state,
      mutations,
    });

    store.commit(ALTERA_PROJETO, projetoAlterado);

    expect(mutations[ALTERA_PROJETO]).toHaveBeenCalled();
    expect(mutations[ALTERA_PROJETO]).toHaveBeenCalledWith(
      state,
      projetoAlterado
    );
  });

  test("excluindo projeto", () => {
    const state = {
      projetos: [
        { id: "1", nome: "Projeto 1" },
        { id: "2", nome: "Projeto 2" },
      ],
    };

    const idProjeto = "2";

    const mutations = {
      [EXCLUI_PROJETO]: jest.fn(),
    };

    const store = new Vuex.Store({
      state,
      mutations,
    });

    store.commit(EXCLUI_PROJETO, idProjeto);

    expect(mutations[EXCLUI_PROJETO]).toHaveBeenCalled();
    expect(mutations[EXCLUI_PROJETO]).toHaveBeenCalledWith(state, idProjeto);
  });

  test("obtendo projetos", () => {
    const state = {
      projetos: [],
    };

    const projetos = [
      { id: "1", nome: "Projeto 1" },
      { id: "2", nome: "Projeto 2" },
    ];

    const mutations = {
      [DEFINI_PROJETO]: jest.fn(),
    };

    const store = new Vuex.Store({
      state,
      mutations,
    });

    store.commit(DEFINI_PROJETO, projetos);

    expect(mutations[DEFINI_PROJETO]).toHaveBeenCalled();
    expect(mutations[DEFINI_PROJETO]).toHaveBeenCalledWith(state, projetos);
  });
});
