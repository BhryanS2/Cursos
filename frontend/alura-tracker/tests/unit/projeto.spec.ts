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
import { CADASTRAR_PROJETO } from "@/store/actionsType";

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

    const actions = {
      [CADASTRAR_PROJETO]: jest.fn(),
    };

    const routers = {
      push: jest.fn(),
    };

    const store = new Vuex.Store({
      state,
      actions,
    });

    const wrapper = mount(ProjetosForm, {
      global: {
        plugins: [store],
        mocks: {
          $router: routers,
        },
      },
    });

    const inputs = wrapper.findAll("input");
    const buttonSubmit = wrapper.find("button");
    const inputNome = inputs[0];
    inputNome?.setValue(newProjeto.nome);
    buttonSubmit.trigger("click");

    expect(actions[CADASTRAR_PROJETO]).toHaveBeenCalled();
    // expect(actions[CADASTRAR_PROJETO]).toHaveBeenCalled();
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

    const actions = {
      [CADASTRAR_PROJETO]: jest.fn(),
    };

    const store = new Vuex.Store({
      state,
      mutations,
      actions,
    });

    const wrapper = mount(ProjetosLista, {
      global: {
        plugins: [store],
      },
    });

    const wrapperForm = mount(ProjetosForm, {
      global: {
        plugins: [store],
      },
    });

    const buttonAlterar = wrapper.findAll("button")[1];
    buttonAlterar.trigger("click");

    const inputs = wrapperForm.findAll("input");
    const buttonSubmit = wrapperForm.find("button");
    const inputNome = inputs[0];
    inputNome?.setValue(projetoAlterado.nome);
    buttonSubmit.trigger("click");

    expect(mutations[ALTERA_PROJETO]).toHaveBeenCalled();
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
