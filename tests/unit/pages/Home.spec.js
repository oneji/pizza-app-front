import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import { shallowMount } from '@vue/test-utils'
import Home from '@/pages/Home'

describe('Home.vue', () => {
    let getters
    let actions
    let store

    let getPizzasMethod = jest.fn()

    beforeEach(() => {
        Vue.use(Vuex)
        Vue.use(Vuetify)
        getters = {
            getPizzas: () => []
        },
        actions = {
            getAllPizzas: jest.fn(),
            addToCart: jest.fn(),
            getByCategory: jest.fn(),
            getById: jest.fn()
        },
        store = new Vuex.Store({
            modules: {
                pizzas: {
                    namespaced: true,
                    getters,
                    actions
                }
            }
        })
    });

    it('Renders', () => {
        const wrapper = shallowMount(Home, {
            store,
            methods: {
                getAllPizzas: getPizzasMethod
            }
        });

        expect(wrapper.exists()).toBe(true);
    });
})
