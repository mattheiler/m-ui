import VueRouter from 'vue-router';

import { shallowMount, createLocalVue } from '@vue/test-utils';

import Card from '@/components/card/card.vue';

const localVue = createLocalVue();
const router = new VueRouter();

localVue.use(VueRouter);

describe('card.vue', () => {
  it('renders props.heading when passed', () => {
    const heading = 'new message';
    const wrapper = shallowMount(Card, {
      localVue,
      router,
      propsData: { heading, to: {} },
    });
    expect(wrapper.text()).toEqual(heading);
  });
});
