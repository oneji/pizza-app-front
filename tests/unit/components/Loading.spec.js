import { shallowMount } from '@vue/test-utils'
import Loading from '@/components/Loading'

describe('Loading.vue', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(Loading, {
            propsData: {
                show: false
            }
        });
    });

    it('Renders', () => {
        expect(wrapper.exists()).toBe(true);
    });
});