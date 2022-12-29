<template>
    <div>
        <purchase-form-new-order-details
            :order-details="orderDetails"
            :items-to-order-options="itemsToOrderOptions"
            :order-detail-item-options="orderDetailItemOptions"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OrderDetails from '@/Library/OrderDetails';
import { cloneDeep } from 'lodash';
import PurchaseFormNewOrderDetails from './PurchaseFormNewOrderDetails.vue';
import { mapGetters } from 'vuex';

export default defineComponent({
    name: 'QuantityContainer',
    components: {
        PurchaseFormNewOrderDetails
    },
    props: {
        orderDetails: {
            type: OrderDetails,
            required: true
        }
    },
    computed: {
        ...mapGetters(['itemsToOrderOptions', 'orderDetailItemOptions'])
    },
    methods: {
        updateOrderDetails(orderDetails: OrderDetails) {
            this.$emit('input', cloneDeep(orderDetails));
        }
    }
});
</script>
