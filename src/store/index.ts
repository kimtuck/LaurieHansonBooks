import { createStore } from 'vuex';
import { installPayPal, purchaseConfig } from '@/Library/paypal';
import { pricing, formatPrice } from '@/Library/pricing';
import { initFirebase, logOrderInformation } from '@/Library/firebase';
import { v4 as uuidv4 } from 'uuid';
import orderState from '@/Library/orderState';

export default createStore({
    state: {
        orderId: uuidv4(),
        paypalInstance: null,
        quantity: 1,
        dedications: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        orderForm: {
            name: '',
            email: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        },
        showCompleteFormMsg: false
    },
    getters: {
        paypal: state => state.paypalInstance,
        quantity: state => state.quantity,
        orderForm: state => state.orderForm,
        orderFormValid: state =>
            state.orderForm.name &&
            state.orderForm.email &&
            state.orderForm.address &&
            state.orderForm.city &&
            state.orderForm.state &&
            state.orderForm.zip,
        dedication: state => (index: number) => state.dedications[index],
        dedications: state => state.dedications.slice(0, state.quantity),
        showCompleteFormMsg: (state, getters) => !getters.orderFormValid && state.showCompleteFormMsg,
        hasPaypal: state => {
            return state.paypalInstance !== null;
        },
        orderInformation: (state, getters) => ({
            orderId: state.orderId,
            state: orderState.BeginPurchase,
            quantity: state.quantity,
            dedications: getters.dedications,
            contact: state.orderForm
        }),
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
        },

        updateOrderForm(state, { orderForm }) {
            state.orderForm = orderForm;
        },
        showCompleteFormMsg(state, val) {
            state.showCompleteFormMsg = val;
        }
    },
    actions: {
        async updateQuantity({ commit }, { quantity }) {
            commit('updateQuantity', { quantity });
        },
        async updateDedication({ commit }, { dedication, index }) {
            commit('updatededication', { dedication, index });
        },
        async updateOrderForm({ commit }, { orderForm }) {
            commit('updateOrderForm', { orderForm });
        },

        async loadPaypal({ getters, commit }) {
            if (!getters.hasPaypal) {
                const paypal = await installPayPal();
                commit('paypalInstance', paypal);
            }
        },
        async showPaypalButtons({ state, commit, getters, dispatch }, id) {
            await dispatch('logOrder');
            await dispatch('loadPaypal');

            const ButtonConfig = {
                style: {
                    layout: 'vertical',
                    color: 'blue',
                    shape: 'rect',
                    label: 'paypal'
                },
                createOrder(data: any, actions: any) {
                    return actions.order.create(purchaseConfig(getters.quantity));
                },
                onApprove(data: any, actions: any) {
                    // This function captures the funds from the transaction.
                    return actions.order.capture().then(function(details: any) {
                        // This function shows a transaction success message to your buyer.
                        // alert(`Transaction completed by ${details.payer.name.given_name}`);
                        console.log(details);
                    });
                },
                onCancel: () => console.log('On cancel'),
                onError: () => console.log('On error'),
                // @ts-expect-error
                onClick: async (data, actions: any) => {
                    if (!getters.orderFormValid) {
                        commit('showCompleteFormMsg', true);
                        return actions.reject();
                    }

                    // Intentionally not awaited
                    await dispatch('logOrder');
                    commit('showCompleteFormMsg', false);
                    return actions.resolve();
                }
            };
            // @ts-expect-error
            if (state.paypalInstance && state.paypalInstance.Buttons) {
                // @ts-expect-error
                state.paypalInstance.Buttons(ButtonConfig).render(id);
            }
        },
        async logOrder({ getters }) {
            await initFirebase();
            await logOrderInformation(getters.orderInformation);
        }
    }
});
