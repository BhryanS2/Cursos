import Lance from '@/components/Lance'
import { mount } from '@vue/test-utils'

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
