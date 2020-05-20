import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Cart from '@/pages/Cart';


describe('Cart.vue', () => {
    let getters
    let store
    let wrapper
    const getInfoMethod = jest.fn()

    beforeEach(() => {
        Vue.use(Vuex)
        Vue.use(Vuetify)
        getters = {
            getItems: () => [],
            totalPrice: () => '',
            getCurrency: () => ''
        }
        store = new Vuex.Store({
            modules: {
                cart: {
                    namespaced: true,
                    getters
                }
            }
        });

        wrapper = shallowMount(Cart, {
            methods: {
                getInfo: getInfoMethod
            },
            store
        });
    });

    it('Renders', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('Renders "store.getters.totalPrice" to h2 tag', () => {
        const h2 = wrapper.find('h2');
        expect(typeof h2.text()).toBe('string');
    });

    it('Fires the "getInfo" method when mounted', () => {
        expect(getInfoMethod).toHaveBeenCalled();
    });
})
