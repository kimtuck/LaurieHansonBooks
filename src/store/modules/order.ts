import { v4 as uuidv4 } from 'uuid';
import {
    initFirebase,
    logOrderInformation,
    logCompletedOrderInformation,
    logCancelledOrderInformation
} from '@/Library/firebase';
import orderState from '@/Library/orderState';

const order: any = {
    state: {
        orderId: uuidv4(),
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
        details: {}
    },
    getters: {
        quantity: (state: { quantity: any }) => state.quantity,
        orderForm: (state: { orderForm: any }) => state.orderForm,
        orderFormValid: (state: { orderForm: { name: any; email: any; address: any; city: any; state: any; zip: any } }) =>
            state.orderForm.name &&
            state.orderForm.email &&
            state.orderForm.address &&
            state.orderForm.city &&
            state.orderForm.state &&
            state.orderForm.zip,
        dedication: (state: { dedications: any[] }) => (index: number) => state.dedications[index],
        dedications: (state: { dedications: string | any[]; quantity: any }) => state.dedications.slice(0, state.quantity),
        showCompleteFormMsg: (state: { showCompleteFormMsg: any }, getters: { orderFormValid: any }) =>
            !getters.orderFormValid && state.showCompleteFormMsg,
        orderInformation: (state: { orderId: any; quantity: any; orderForm: any }, getters: { dedications: any }) => ({
            orderId: state.orderId,
            orderState: orderState.BeginPurchase,
            quantity: state.quantity,
            dedications: getters.dedications,
            contact: state.orderForm
        }),
        shippingPrice: (state: { details: { purchase_units: { amount: { value: any } }[] } }) =>
            state.details.purchase_units[0].amount.value,
        shippingTo: (state: { details: { purchase_units: { shipping: { address: any } }[] } }) => {
            return state.details.purchase_units[0].shipping.address;
        },
        shippingBillId: (state: { details: { purchase_units: { soft_descriptor: any }[] } }) => {
            return state.details.purchase_units[0].soft_descriptor;
        }
    },
    mutations: {
        updatededication(state: { dedications: { [x: string]: any } }, { dedication, index }: any) {
            state.dedications[index] = dedication;
        },

        updateOrderForm(state: { orderForm: any }, { orderForm }: any) {
            state.orderForm = orderForm;
        },
        purchaseSuccessful(state: { viewingState: any; details: any }, details: any) {
            state.details = details;
            console.log(JSON.stringify(details));
        }
    },
    actions: {
        async updateQuantity({ commit }: any, { quantity }: any) {
            commit('updateQuantity', { quantity });
        },
        async updateDedication({ commit }: any, { dedication, index }: any) {
            commit('updatededication', { dedication, index });
        },
        async logOrder({ getters }: any) {
            await initFirebase();
            await logOrderInformation(getters.orderInformation);
        },

        async completedPurchase({ dispatch, commit, getters }: any, details: any) {
            await dispatch('viewingSuccessfulPurchase');
            commit('purchaseSuccessful', details);
            await initFirebase();
            await logCompletedOrderInformation(getters.orderInformation.orderId, orderState.SuccessfulPurchase, details);
        },
        async cancelPurchase({ getters }: any) {
            await initFirebase();
            await logCancelledOrderInformation(getters.orderInformation.orderId, orderState.CancelledPurchase);
        }
    }
};

export default order;
