import {
  ALTERAR_PROJETO,
  CADASTRAR_PROJETO,
  EXCLUIR_PROJETO,
  OBTER_PROJETOS,
} from "@/store/actionsType";
import Vuex from "vuex";
import http from "@/http";
import { store } from "@/store";

describe("Testando store actions", () => {
  test("adicionando novo projeto", () => {
    const newProjeto = {
      nome: "Projeto 3",
    };

    const actions = {
      [CADASTRAR_PROJETO]: jest.fn(),
    };

    const store = new Vuex.Store({
      actions,
    });

    store.dispatch(CADASTRAR_PROJETO, newProjeto);

    expect(actions[CADASTRAR_PROJETO]).toHaveBeenCalled();
    expect(actions[CADASTRAR_PROJETO]).toHaveBeenCalledWith(
      expect.any(Object),
      newProjeto
    );
  });
});
