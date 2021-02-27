import { createStore } from 'vuex';
import { installPayPal, purchaseConfig } from '@/Library/paypal';
import { pricing, formatPrice } from '@/Library/pricing';

export default createStore({
    state: {
        paypalInstance: null,
        quantity: 1,
        dedications: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
    },
    getters: {
        paypal: state => state.paypalInstance,
        quantity: state => state.quantity,
        dedication: state => (index: number) => state.dedications[index],
        dedications: state => state.dedications.slice(0, state.quantity),

        hasPaypal: state => {
            return state.paypalInstance !== null;
        },
        orderOptions: () => {
            return [1, 2, 3, 4].map(x => {
                const pricingInfo = pricing(x);
                return {
                    value: x,
                    text: `${x} copies - $${formatPrice(pricingInfo.price)}  - shipping $${formatPrice(
                        pricingInfo.shipping
                    )} - Total $${formatPrice(pricingInfo.price + pricingInfo.shipping)}`
                };
            });
        }
    },
    mutations: {
        paypalInstance(state, paypal) {
            state.paypalInstance = paypal;
        },
        updateQuantity(state, { quantity }) {
            state.quantity = quantity;
        },

        updatededication(state, { dedication, index }) {
            state.dedications[index] = dedication;
        }
    },
    actions: {
        async updateQuantity({ commit }, { quantity }) {
            commit('updateQuantity', { quantity });
        },
        async updateDedication({ commit }, { dedication, index }) {
            commit('updatededication', { dedication, index });
        },

        async loadPaypal({ getters, commit }) {
            if (!getters.hasPaypal) {
                const paypal = await installPayPal();
                commit('paypalInstance', paypal);
            }
        },
        async showPaypalButtons({ state, dispatch }, id) {
            await dispatch('loadPaypal');

            const ButtonConfig = {
                style: {
                    layout: 'vertical',
                    color: 'blue',
                    shape: 'rect',
                    label: 'paypal'
                },
                createOrder(data: any, actions: any) {
                    return actions.order.create(purchaseConfig(16.95, 3));
                }
            };
            // @ts-expect-error
            if (state.paypalInstance && state.paypalInstance.Buttons) {
                // @ts-expect-error
                state.paypalInstance.Buttons(ButtonConfig).render(id);
            }
        }
    },
    modules: {}
});
