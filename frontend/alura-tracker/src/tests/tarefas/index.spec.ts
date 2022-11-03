import jest from 'jest';
// adicionarTarefa(tarefa: propsTarefa) {
//   this.store.dispatch(CADASTRAR_TAREFA, tarefa);
// },
// selectionarTarefa(tarefa: propsTarefa) {
//   this.tarefaSelecionada = tarefa;
// },
// fecharModal() {
//   this.tarefaSelecionada = null;
// },
// alterarTarefa() {
//   this.store
//     .dispatch(ALTERAR_TAREFA, this.tarefaSelecionada)
//     .then(() => this.fecharModal());
// },

import { mount, RouterLinkStub } from '@vue/test-utils'
import http from '@/http'
import flushPromises from 'flush-promises'
import Tarefas from '@/views/Tarefas.vue'
import { CADASTRAR_TAREFA, ALTERAR_TAREFA } from '@/store/mutations-types'


describe("Test Tarefas", () => {
  test("add tarefa", async () => {
    const wrapper = mount(Tarefas, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    })

    const tarefa = {
      id: 1,
      nome: "Tarefa 1",
      concluida: false
    }

    const mock = jest.spyOn(http, "post").mockResolvedValue({ data: tarefa })

    wrapper.find("input").setValue(tarefa.nome)
    wrapper.find("form").trigger("submit.prevent")

    await flushPromises()

    expect(mock).toBeCalledWith("/tarefas", tarefa)
    expect(wrapper.vm.tarefas).toEqual([tarefa])
  }

})