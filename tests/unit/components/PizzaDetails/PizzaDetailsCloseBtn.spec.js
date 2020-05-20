import Vue from 'vue'
import Vuetify from 'vuetify'
import { shallowMount, mount } from '@vue/test-utils'
import PizzaDetailsCloseBtn from '@/components/PizzaDetails/PizzaDetailsCloseBtn'

describe('PizzaDetailsCloseBtn.vue', () => {
    let wrapper

    beforeEach(() => {
        Vue.use(Vuetify)
        wrapper = mount(PizzaDetailsCloseBtn)
    });

    it('Renders', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('Emits "close" event when close-btn is clicked', () => {
        const button = wrapper.find('button.close-btn');
        button.trigger('click');

        expect(wrapper.emitted().close).toBeTruthy();
    });
})
