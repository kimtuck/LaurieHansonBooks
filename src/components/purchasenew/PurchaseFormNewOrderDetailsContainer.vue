<template>
    <div>
        <purchase-form-new-order-details
            :order-details="orderDetails"
            :items-to-order-options="itemsToOrderOptions"
            :order-detail-item-options="orderDetailItemOptions"
            @update:orderDetailItem="updateOrderDetailItem"
            @update:orderQuantity="updateOrderQuantity"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OrderDetails from '@/Library/OrderDetails';
import PurchaseFormNewOrderDetails from './PurchaseFormNewOrderDetails.vue';
import { mapGetters } from 'vuex';
import OrderDetailItemType from '../../types/OrderDetailItem';

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
        updateOrderQuantity(quantity: number) {
            this.$emit('update:orderQuantity', quantity)
        },
        updateOrderDetailItem(orderDetailItem: OrderDetailItemType) {
            this.$emit('update:orderDetailItem', orderDetailItem);
        }
    }
});
</script>
