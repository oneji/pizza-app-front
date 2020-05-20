import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import { shallowMount } from '@vue/test-utils'
import Orders from '@/pages/Orders'

describe('Orders.vue', () => {
    let wrapper
    let getters
    let actions
    let store
    let getAllMethod = jest.fn()

    beforeEach(() => {
        Vue.use(Vuex)
        Vue.use(Vuetify)

        getters = {
            getOrders: () => []
        }
        actions = {
            get: jest.fn()
        }
        store = new Vuex.Store({
            modules: {
                orders: {
                    namespaced: true,
                    getters,
                    actions
                }
            }
        });
    });

    it('Renders', () => {
        const wrapper = shallowMount(Orders, {
            store,
            methods: {
                showOrderDetails: () => {}
            }
        });

        expect(wrapper.exists()).toBe(true);
    });

    it('Fired the "getAll" method when created', () => {
        const wrapper = shallowMount(Orders, {
            store,
            methods: {
                showOrderDetails: () => {},
                getAll: getAllMethod
            }
        });

        expect(getAllMethod).toHaveBeenCalled();
    });
})
