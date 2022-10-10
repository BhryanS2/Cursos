import Leiloeiro from '@/views/Leiloeiro.vue'
import { mount } from '@vue/test-utils'
import { getLeilao, getLances } from '@/http'

jest.mock('@/http')

const leilao = {
  produto: 'Um livro da casa do código',
  lanceInicial: 50,
  descricao: 'Um maravilhoso livro sobre Vue'
}

describe('Leiloeiro inicia um leilão que não possui lances', () => {
  test('avisa quando não existem lances', () => {
    getLeilao.mockResolvedValueOnce(leilao)
    getLances.mockResolvedValueOnce([])

    const wrapper = mount(Leiloeiro, {
      propsData: {
        id: 1
      }
    })
    const alerta = wrapper.find('.alert-dark')
    expect(alerta.exists()).toBe(true)
  })
})
