import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import { mount } from '@vue/test-utils'
import Categories from '@/components/Pizzas/Categories'

describe('Categories.vue', () => {
    let wrapper
    let getters
    let store

    beforeEach(() => {
        Vue.use(Vuex);
        Vue.use(Vuetify);

        getters = {
            getCategories: () => []
        }
        store = new Vuex.Store({
            modules: {
                pizzas: {
                    namespaced: true,
                    getters
                }
            }
        });

        wrapper = mount(Categories, {
            store
        });
    }); 

    it('Renders', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('Emits the "change" event when a category item is clicked', () => {
        const categoryItem = wrapper.find('span.v-chip');
        categoryItem.trigger('click');

        expect(wrapper.emitted().change).toBeTruthy();
    });
})
