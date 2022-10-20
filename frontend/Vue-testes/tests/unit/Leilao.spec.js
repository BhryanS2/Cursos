import Leilao from '@/components/Leilao.vue'
import { mount } from '@vue/test-utils'

const leilao = {
  produto: 'Um livro da casa do código',
  lanceInicial: 50,
  descricao: 'Um maravilhoso livro sobre Vue'
}

describe('Um leilão exibe os dados do prodotudo', () => {
  test('Exibe os dados do leilão no card', () => {
    const wrapper = mount(Leilao, {
      propsData: {
        leilao
      }
    })
    const header = wrapper.find('.card-header').element
    const title = wrapper.find('.card-title').element
    const description = wrapper.find('.card-text').element

    expect(header.textContent).toContain(
      `Estamos leiloando um(a): ${leilao.produto}`
    )
    expect(title.textContent).toContain(
      `Lance inicial: R$ ${leilao.lanceInicial}`
    )
    expect(description.textContent).toContain(leilao.descricao)
  })
})
