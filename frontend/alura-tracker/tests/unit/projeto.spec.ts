import {
  ADICIONA_PROJETO,
  ALTERA_PROJETO,
  EXCLUI_PROJETO,
} from "@/store/mutationsType";

import Vuex from "vuex";
import { mount } from "@vue/test-utils";

import { projectProps } from "@/types/typeProjeto";

import Projetos from "@/views/Projetos.vue";
import ProjetosForm from "@/views/Projetos/Formulario.vue";
import ProjetosLista from "@/views/Projetos/Listas.vue";

describe("Testando Projeto", () => {
  test("adicionando novo projeto", () => {
    const state = {
      projetos: [
        { id: "1", nome: "Projeto 1" },
        { id: "2", nome: "Projeto 2" },
      ] as projectProps[],
    };

    const newProjeto = {
      nome: "Projeto 3",
    } as projectProps;

    const mutations = {
      [ADICIONA_PROJETO]: jest.fn(),
    };

    const store = new Vuex.Store({
      state,
      mutations,
    });

    const wrapper = mount(ProjetosForm, { global: { plugins: [store] } });
    const inputs = wrapper.findAll("input");
    const buttonSubmit = wrapper.find("button");
    const inputNome = inputs.at(0);
    console.log(inputs[0].element.value);
    inputNome?.setValue(newProjeto.nome);
    buttonSubmit.trigger("click");
    expect(mutations[ADICIONA_PROJETO]).toHaveBeenCalled();
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

    const projetoExcluido = {
      id: "2",
      nome: "Projeto 2",
    };

    const mutations = {
      [EXCLUI_PROJETO]: jest.fn(),
    };

    const store = new Vuex.Store({
      state,
      mutations,
    });

    store.commit(EXCLUI_PROJETO, projetoExcluido);

    expect(mutations[EXCLUI_PROJETO]).toHaveBeenCalled();
    expect(mutations[EXCLUI_PROJETO]).toHaveBeenCalledWith(
      state,
      projetoExcluido
    );
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
});
