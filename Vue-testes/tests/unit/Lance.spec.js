import Lance from '@/components/Lance'
import { mount } from '@vue/test-utils'

describe('Lance', () => {
  test('Não aceita valor menor que zero', () => {
    const wrapper = mount(Lance)
    const input = wrapper.find('input')
    input.setValue(-100)
    wrapper.trigger('submit')
    const lancesEmitidos = wrapper.emitted('novo-lance')
    expect(lancesEmitidos).toBeUndefined()
  })

  test('Emite um lance quando o valor é maior que zero', () => {
    const wrapper = mount(Lance)
    const input = wrapper.find('input')
    input.setValue(100)
    wrapper.trigger('submit')
    const lancesEmitidos = wrapper.emitted('novo-lance')
    expect(lancesEmitidos).toHaveLength(1)
  })

  test('Emite o valor esperado de um lance válido', () => {
    const wrraper = mount(Lance)
    const input = wrraper.find('input')
    input.setValue(100)
    wrraper.trigger('submit')
    const lancesEmitidos = wrraper.emitted('novo-lance')
    /*
    [
      [100]
    ]
    */
    const lance = parseInt(lancesEmitidos[0][0])
    expect(lance).toBe(100)
  })
})
