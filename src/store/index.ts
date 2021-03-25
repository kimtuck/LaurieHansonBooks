import { createStore } from 'vuex';
import orderForm from './modules/orderForm';
import paypal from './modules/paypal';
import order from './modules/order';
import discount from './modules/discount';

export default createStore({
    modules: {
        order,
        orderForm,
        paypal,
        discount
    }
});
