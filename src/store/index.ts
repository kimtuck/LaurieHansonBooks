import { createStore } from 'vuex';
import { installPayPal, purchaseConfig } from '@/Library/paypal';

export default createStore({
    state: {
        paypalInstance: null
    },
    getters: {
        paypal: state => state.paypalInstance,
        hasPaypal: state => {
            return state.paypalInstance !== null;
        }
    },
    mutations: {
        paypalInstance(state, paypal) {
            state.paypalInstance = paypal;
        }
    },
    actions: {
        async loadPaypal({ getters, commit }) {
            if (!getters.hasPaypal) {
                console.log('get paypal');
                const paypal = await installPayPal();
                commit('paypalInstance', paypal);
                console.log('get paypal ends');
            }
        },
        async showPaypalButtons({ state, dispatch }, id) {
            console.log('await loadPaypal');
            await dispatch('loadPaypal');

            const ButtonConfig = {
                style: {
                    layout: 'vertical',
                    color: 'blue',
                    shape: 'rect',
                    label: 'paypal'
                },
                createOrder(data: any, actions: any) {
                    console.log(purchaseConfig(19.65, 3));
                    return actions.order.create(purchaseConfig(16.95, 3));
                }
            };
            // @ts-expect-error
            if (state.paypalInstance && state.paypalInstance.Buttons) {
                console.log('show loadPaypal', id);
                // @ts-expect-error
                state.paypalInstance.Buttons(ButtonConfig).render(id);
            }
        }
    },
    modules: {}
});
