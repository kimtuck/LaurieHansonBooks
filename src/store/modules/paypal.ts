import { installPayPal, purchaseConfig } from '@/Library/paypal';

const paypal: any = {
    state: {
        paypalInstance: null
    },
    getters: {
        paypal: (state: { paypalInstance: any }) => state.paypalInstance,
        hasPaypal: (state: { paypalInstance: null }) => {
            return state.paypalInstance !== null;
        }
    },
    mutations: {
        paypalInstance(state: { paypalInstance: any }, paypalInst: any) {
            state.paypalInstance = paypalInst;
        }
    },
    actions: {
        // @ts-expect-error
        async loadPaypal({ getters, commit }) {
            if (!getters.hasPaypal) {
                const paypalInst = await installPayPal();
                commit('paypalInstance', paypalInst);
            }
        },
        async showPaypalButtons({ state, commit, getters, dispatch }: any, id: any) {
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
                    return actions.order.create(purchaseConfig(getters.orderId, getters.quantity, getters.discount));
                },
                onClick: async (data: any, actions: any) => {
                    if (!getters.orderFormValid) {
                        commit('showCompleteFormMsg', true);
                        return actions.reject();
                    }

                    // Intentionally not awaited
                    await dispatch('logOrder');
                    commit('showCompleteFormMsg', false);
                    return actions.resolve();
                },
                async onApprove(data: any, actions: any) {
                    await dispatch('showSpinner');
                    // This function captures the funds from the transaction.
                    // await dispatch('viewingSuccessfulPurchase');
                    return actions.order.capture().then(async function(details: any) {
                        await dispatch('completedPurchase', details);
                        await dispatch('hideSpinner');
                    });
                },
                async onCancel() {
                    await dispatch('cancelPurchase');
                },
                onError: () => console.log('On error')
            };
            if (state.paypalInstance && state.paypalInstance.Buttons) {
                state.paypalInstance.Buttons(ButtonConfig).render(id);
            }
        }
    }
};

export default paypal;
