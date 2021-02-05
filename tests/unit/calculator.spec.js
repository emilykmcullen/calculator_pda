import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('enterNum changes running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9)
  })

  it('can add', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 1
    wrapper.vm.add('4')
    expect(wrapper.vm.runningTotal).to.equal(5)
  
  })

  it('can subtract', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 7
    wrapper.vm.subtract('4')
    expect(wrapper.vm.runningTotal).to.equal(3)
  })

  it('can multiply', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 3
    wrapper.vm.multiply('5')
    expect(wrapper.vm.runningTotal).to.equal(15)
  })

  it('can divide', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 21
    wrapper.vm.divide('7')
    expect(wrapper.vm.runningTotal).to.equal(3)
  })

  it('can concatenate multiple number button clicks', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.numberClick(1)
    wrapper.vm.numberClick(2)
    wrapper.vm.numberClick(3)
    expect(wrapper.vm.runningTotal).to.equal(123)
  });

  it('can concatenate multiple button clicks', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.numberClick(1)
    wrapper.vm.operatorClick('+')
    wrapper.vm.numberClick(2)
    wrapper.vm.operatorClick('/')
    wrapper.vm.numberClick(3)
    wrapper.vm.operatorClick('*')
    wrapper.vm.numberClick(4)
    wrapper.vm.operatorClick('-')
    wrapper.vm.numberClick(5)
    wrapper.vm.operatorClick('=');
    expect(wrapper.vm.runningTotal).to.equal(-1)
  })

  it('can clear the running total without affecting the calculation', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.numberClick(1)
    wrapper.vm.operatorClick('+')
    wrapper.vm.numberClick(2)
    wrapper.vm.operatorClick('/')
    wrapper.vm.numberClick(3)
    wrapper.vm.operatorClick('*')
    wrapper.vm.numberClick(4)
    wrapper.vm.operatorClick('-')
    wrapper.vm.numberClick(5)
    wrapper.vm.operatorClick('=')
    wrapper.vm.clearClick();
    expect(wrapper.vm.runningTotal).to.equal(0)
    expect(wrapper.vm.previousTotal).to.equal(-1)
  });
  

})


