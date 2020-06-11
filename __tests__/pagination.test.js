/* eslint-disable */

import { mount } from '@vue/test-utils'
import Pagination from '../src/components/Pagination.vue'

describe('Pagination', () => {

  const wrapper = mount(Pagination, {
    propsData: { // 使用 Vue 在内置 propsData 选项向组件传入 prop
      initialPage: 10,
    }
  })

  it('has a mounted hook', () => {
    expect(typeof Pagination.mounted).toBe('function')
  })

  it('set the currentPage success', () => {
    expect(wrapper.find('.active').text()).toBe('10')
  })

  it('can click to next page', async () => {
    const nextButton = wrapper.findAll('.page:last-child')
    nextButton.trigger('click')
    await wrapper.vm.$nextTick(() => {
      expect(wrapper.find('.active').text()).toBe('11')
    })
  })

  it('can click to prev page', async() => {
    const prevButton = wrapper.findAll('.page:first-child')
    prevButton.trigger('click')
    await wrapper.vm.$nextTick(() => {
      expect(wrapper.find('.active').text()).toBe('10')
    })
  })

})
