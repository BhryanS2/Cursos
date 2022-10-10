import NovoLeilao from '@/views/NovoLeilao.vue'
import { mount } from '@vue/test-utils'
import flushPromises from 'flush-promises'

import { createLeilao } from '@/http'

jest.mock('@/http')

const $router = {
  push: jest.fn()
}

describe('Um novo leilão deve ser criado', () => {
  test('dado o formulario preenchudo, um leilao deve ser criado', async () => {
    createLeilao.mockResolvedValueOnce()

    const wrapper = mount(NovoLeilao, {
      mocks: {
        $router
      }
    })

    wrapper.find('.produto').setValue('Um livro da casa do código')
    wrapper.find('.descricao').setValue('Um maravilhoso livro sobre Vue')
    wrapper.find('.valor').setValue(50)

    wrapper.find('form').trigger('submit')

    await flushPromises()

    expect(createLeilao).toHaveBeenCalled()
  })
})
