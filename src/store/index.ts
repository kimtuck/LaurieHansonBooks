import { createStore } from 'vuex';
import { installPayPal, purchaseConfig, purchaseConfigNew } from '@/Library/paypal';
import { pricing } from '@/Library/pricing';
import {
    initFirebase,
    logOrderInformation,
    logCompletedOrderInformation,
    logCancelledOrderInformation,
    logOrderResultsInformation
} from '@/Library/firebase';
import { v4 as uuidv4 } from 'uuid';
import OrderState from '@/Library/orderState';
import discountProps from '@/Library/discountProps';
import OrderDetails from '@/Library/OrderDetails';
import OrderDetailItemOption from '@/types/OrderDetailItemOption';
import BookId from '@/types/BookId';
import OrderDetailItem from '@/types/OrderDetailItem';
import dateTimeString from '@/Library/dates';

const ViewingState = {
    Form: 'form',
    SuccessfulPurchase: 'successfulPurchase'
};

const maxBooksPerOrder = 5;

export default createStore({
    state: {
        showSpinner: false,
        viewingState: ViewingState.Form,
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
        showCompleteFormMsg: false,
        details: { purchase_units: [{ soft_descriptor: '', amount: { value: 0 }, shipping: { address: {}, name: {} } }] },
        discount: discountProps,

        // New purchase page
        orderDetails: new OrderDetails(maxBooksPerOrder),
        orderState: OrderState.BeginPurchase,
        maxBooksPerOrder
    },
    getters: {
        showSpinner: state => state.showSpinner,
        paypal: state => state.paypalInstance,
        viewingState: state => state.viewingState,
        quantity: state => state.quantity,
        orderForm: state => state.orderForm,
        orderFormValid: state => state.orderForm.name && state.orderForm.email,
        dedication: state => (index: number) => state.dedications[index],
        dedications: state => state.dedications.slice(0, state.quantity),
        showCompleteFormMsg: (state, getters) => !getters.orderFormValid && state.showCompleteFormMsg,
        hasPaypal: state => {
            return state.paypalInstance !== null;
        },
        orderInformation: (state, getters) => ({
            orderId: state.orderId,
            orderState: OrderState.BeginPurchase,
            quantity: state.quantity,
            dedications: getters.dedications,
            contact: state.orderForm
        }),
        orderOptions: state => {
            return [1, 2, 3, 4, 5].map(x => {
                const pricingInfo = pricing(x, state.discount);
                return {
                    quantity: x,
                    value: x,
                    price: pricingInfo.price,
                    shipping: pricingInfo.shipping
                };
            });
        },
        selectedOrderOption: (state, getters) => getters.orderOptions.find((x: any) => x.quantity === getters.quantity),
        percentSavings: state => state.discount.percentSavings,
        originalPrice: state => state.discount.originalPrice,
        shippingPrice: state => state.details.purchase_units[0].amount.value,
        shippingTo: state => {
            return {
                ...state.details.purchase_units[0].shipping.address,
                // @ts-expect-error
                name: state.details.purchase_units[0].shipping.name.full_name
            };
        },
        shippingBillId: state => {
            return state.details.purchase_units[0].soft_descriptor;
        },
        discount: state => state.discount,

        // New purchase page
        orderId: state => state.orderId,
        orderState: state => state.orderState,
        orderDetails: state => state.orderDetails,
        itemsToOrderOptions: state => {
            return [...Array(state.maxBooksPerOrder).keys()].map(x => ({ quantity: x + 1, value: x + 1 }));
        },
        orderDetailItemOptions: (): OrderDetailItemOption[] => [
            { value: BookId.GoodGirlKarma, name: BookId.GoodGirlKarma },
            { value: BookId.TreasuresGift, name: BookId.TreasuresGift }
        ]
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
        },
        purchaseSuccessful(state, details) {
            state.viewingState = ViewingState.SuccessfulPurchase;
            state.details = details;
        },
        viewing(state, viewingState) {
            state.viewingState = viewingState;
        },
        showSpinner(state, show) {
            state.showSpinner = show;
        },
        // new purchase
        resetPurchaseFormNew(state) {
            state.orderId = dateTimeString();
            state.orderDetails = new OrderDetails(maxBooksPerOrder);
            state.orderState = OrderState.BeginPurchase;
            state.details = {
                purchase_units: [
                    { soft_descriptor: '', amount: { value: 0 }, shipping: { address: {}, name: { full_name: '' } } }
                ]
            };
        },
        updateOrderState(state, orderState: OrderState) {
            state.orderState = orderState;
        },
        updateOrderQuantity(state, quantity: number) {
            state.orderDetails.books = quantity;
        },
        updateOrderDetailItem(state, orderDetailItem: OrderDetailItem) {
            const ind = orderDetailItem.index;
            state.orderDetails.bookDetails[ind] = orderDetailItem;
        }
    },
    actions: {
        async viewingPurchaseForm({ commit }) {
            commit('viewing', ViewingState.Form);
        },

        async viewingSuccessfulPurchase({ commit }) {
            commit('viewing', ViewingState.SuccessfulPurchase);
        },

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
            commit('updateOrderState', OrderState.BeginPurchase);
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
                    return actions.order.create(purchaseConfig(getters.orderId, getters.selectedOrderOption));
                },
                onClick: async (data: any, actions: any) => {
                    if (!getters.orderFormValid) {
                        commit('showCompleteFormMsg', true);
                        return actions.reject();
                    }

                    // Intentionally not awaited
                    commit('updateOrderState', OrderState.ShowPaypalDialog);
                    await dispatch('logOrder');
                    commit('showCompleteFormMsg', false);
                    return actions.resolve();
                },
                async onApprove(data: any, actions: any) {
                    await dispatch('showSpinner');
                    // This function captures the funds from the transaction.
                    // await dispatch('viewingSuccessfulPurchase');
                    return actions.order
                        .capture()
                        .then(async function(details: any) {
                            commit('updateOrderState', OrderState.SuccessfulPurchase);
                            await dispatch('completedPurchase', details);
                            await dispatch('hideSpinner');
                        })
                        .catch((error: any) => {
                            console.log('error occurred', error);
                        });
                },
                async onCancel() {
                    await dispatch('cancelPurchase');
                },
                // eslint-disable-next-line
                onError: () => console.log('On error')
            };
            // @ts-expect-error
            if (state.paypalInstance && state.paypalInstance.Buttons) {
                // @ts-expect-error
                state.paypalInstance.Buttons(ButtonConfig).render(id);
            }
        },
        async logOrder({ getters }) {
            await initFirebase();
            await logOrderInformation(getters.orderId, getters.orderInformation);
        },

        async completedPurchase({ commit, getters }, details) {
            commit('purchaseSuccessful', details);
            await initFirebase();
            await logCompletedOrderInformation(getters.orderId, OrderState.SuccessfulPurchase, details);
        },
        async cancelPurchase({ getters }) {
            await initFirebase();
            await logCancelledOrderInformation(getters.orderId, OrderState.CancelledPurchase);
        },
        async showSpinner({ commit }) {
            commit('showSpinner', true);
        },
        async hideSpinner({ commit }) {
            commit('showSpinner', false);
        },

        // new purchase form

        updateOrderQuantity({ commit }, quantity) {
            commit('updateOrderQuantity', quantity);
        },
        updateOrderDetailItem({ commit }, orderDetailItem) {
            commit('updateOrderDetailItem', orderDetailItem);
        },

        resetPurchaseFormNew({ commit }) {
            commit('resetPurchaseFormNew');
        },
        purchaseNew() {
            // alert('needs implementation')
        },

        async showPaypalButtonsNew({ state, commit, getters, dispatch }, id) {
            commit('updateOrderState', OrderState.BeginPurchase);
            await dispatch('logOrderNew');
            await dispatch('loadPaypal');

            const ButtonConfig = {
                style: {
                    layout: 'vertical',
                    color: 'blue',
                    shape: 'rect',
                    label: 'paypal'
                },
                createOrder(data: any, actions: any) {
                    return actions.order.create(purchaseConfigNew(getters.orderId, getters.orderDetails, getters.orderForm));
                },
                onClick: async (data: any, actions: any) => {
                    if (!getters.orderFormValid) {
                        commit('showCompleteFormMsg', true);
                        return actions.reject();
                    }

                    // Intentionally not awaited
                    commit('updateOrderState', OrderState.ShowPaypalDialog);
                    await dispatch('logOrderNew');
                    commit('showCompleteFormMsg', false);
                    return actions.resolve();
                },
                async onApprove(data: any, actions: any) {
                    await dispatch('showSpinner');
                    // This function captures the funds from the transaction.
                    // await dispatch('viewingSuccessfulPurchase');
                    return actions.order.capture().then(async function(details: any) {
                        commit('updateOrderState', OrderState.SuccessfulPurchase);
                        commit('purchaseSuccessful', details);
                        await dispatch('logOrderResultsNew', details);
                        await dispatch('hideSpinner');
                    });
                },
                async onCancel() {
                    commit('updateOrderState', OrderState.CancelledPurchase);
                    await dispatch('logOrderNew');
                },
                // eslint-disable-next-line
                onError: (e: any) => console.log('On error', e)
            };
            // @ts-expect-error
            if (state.paypalInstance && state.paypalInstance.Buttons) {
                // @ts-expect-error
                state.paypalInstance.Buttons(ButtonConfig).render(id);
            }
        },
        async logOrderNew({ getters }) {
            await initFirebase();
            await logOrderInformation(getters.orderId, {
                orderState: getters.orderState,
                contactInfo: getters.orderForm,
                ...getters.orderDetails,
                booksOrdered: getters.orderDetails.booksOrdered,
                shippingTo: getters.shippingTo
            });
        },
        async logOrderResultsNew({ getters }, details) {
            await initFirebase();
            await logOrderResultsInformation(getters.orderId, details);
        }
    }
});
export { ViewingState };
