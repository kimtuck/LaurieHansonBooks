import { pricing, formatPrice } from '@/Library/pricing';

const ViewingState = {
    Form: 'form',
    SuccessfulPurchase: 'successfulPurchase'
};

const orderForm: any = {
    state: {
        showSpinner: false,
        viewingState: ViewingState.Form,
        showCompleteFormMsg: false
    },
    getters: {
        showSpinner: (state: { showSpinner: any }) => state.showSpinner,
        viewingState: (state: { viewingState: any }) => state.viewingState,
        orderOptions: (getters: { discountCode: any }) => {
            return [1, 2, 3, 4, 5].map(x => {
                const pricingInfo = pricing(x, getters.discountCode);
                return {
                    value: x,
                    text: `${x} ${x === 1 ? 'copy' : 'copies'} - $${formatPrice(
                        pricingInfo.price
                    )}  - shipping $${formatPrice(pricingInfo.shipping)} - Total $${formatPrice(
                        pricingInfo.price + pricingInfo.shipping
                    )}`
                };
            });
        }
    },
    mutations: {
        viewing(state: { viewingState: any }, viewingState: any) {
            state.viewingState = viewingState;
        },
        showSpinner(state: { showSpinner: any }, show: any) {
            state.showSpinner = show;
        },
        updateQuantity(state: { quantity: any }, { quantity }: any) {
            state.quantity = quantity;
        },

        showCompleteFormMsg(state: { showCompleteFormMsg: any }, val: any) {
            state.showCompleteFormMsg = val;
        }
    },
    actions: {
        async viewingPurchaseForm({ commit }: any) {
            commit('viewing', ViewingState.Form);
        },
        async viewingSuccessfulPurchase({ commit }: any) {
            commit('viewing', ViewingState.SuccessfulPurchase);
        },
        async updateOrderForm({ commit }: any, { form }: any) {
            commit('updateOrderForm', { form });
        },
        async showSpinner({ commit }: any) {
            commit('showSpinner', true);
        },
        async hideSpinner({ commit }: any) {
            commit('showSpinner', false);
        }
    }
};

export default orderForm;
export { ViewingState };
