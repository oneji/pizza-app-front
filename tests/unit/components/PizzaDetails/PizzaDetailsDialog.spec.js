import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import { shallowMount, mount } from '@vue/test-utils'
import PizzaDetailsDialog from '@/components/PizzaDetails/PizzaDetailsDialog'

describe('PizzaDetailsDialog', () => {
    let wrapper
    let pizzasGetters
    let cartGetters
    let store
    let addToCartMethod = jest.fn()

    beforeEach(() => {
        Vue.use(Vuex)
        Vue.use(Vuetify)

        pizzasGetters = {
            getSizes: () => []
        }
        cartGetters = {
            getCurrency: () => ''
        }
        store = new Vuex.Store({
            modules: {
                pizzas: {
                    namespaced: true,
                    getters: pizzasGetters
                },
                cart: {
                    namespaced: true,
                    getters: cartGetters
                }
            }
        })

        wrapper = mount(PizzaDetailsDialog, {
            store,
            methods: {
                addToCart: addToCartMethod,
                handleSizeChange: jest.fn()
            }
        });
    });

    it('Renders', () => {
        expect(wrapper.exists()).toBe(true);
    });
});
