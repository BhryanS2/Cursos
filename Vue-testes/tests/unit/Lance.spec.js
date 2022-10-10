import Lance from '@/components/Lance'
import { mount } from '@vue/test-utils'

describe('Um lance sem valor minimo', () => {
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

describe('Lance com valor mínimo', () => {
  test('Todos os laces devem possuir um valor maior do que o minimo informado', () => {
    const wrraper = mount(Lance, {
      propsData: {
        lanceMinimo: 300
      }
    })
    const input = wrraper.find('input')
    input.setValue(400)
    wrraper.trigger('submit')
    const lancesEmitidos = wrraper.emitted('novo-lance')
    expect(lancesEmitidos).toHaveLength(1)
  })
  test('Emita o valor esperado de um lance válido', () => {
    const wrapper = mount(Lance, {
      propsData: {
        lanceMinimo: 300
      }
    })
    const input = wrapper.find('input')
    input.setValue(400)
    wrapper.trigger('submit')
    const lancesEmitidos = wrapper.emitted('novo-lance')
    const lance = parseInt(lancesEmitidos[0][0])
    expect(lance).toBe(400)
  })
})
