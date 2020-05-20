import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import { mount } from '@vue/test-utils'
import LoginForm from '@/components/LoginForm'

describe('LoginForm.vue', () => {
    let wrapper
    let getters
    let store
    let loginMethod = jest.fn()

    beforeEach(() => {
        Vue.use(Vuex);
        Vue.use(Vuetify);

        getters = {
            getAuthLoadingState: () => false
        }
        store = new Vuex.Store({
            modules: {
                auth: {
                    namespaced: true,
                    getters
                }
            }
        });

        wrapper = mount(LoginForm, {
            store,
            methods: { login: loginMethod }
        });
    }); 

    it('Renders', () => {
        expect(wrapper.exists()).toBe(true);
    })

    it('Fires the "login" method when submitting a form', async () => {
        wrapper.find('form').trigger('submit.prevent');
        await wrapper.vm.$nextTick();

        expect(loginMethod).toHaveBeenCalled();
    });
})
