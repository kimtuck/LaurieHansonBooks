<template>
    <purchase-form-new
        :order-details="orderDetails"
        :order-state="orderState"
        :show-complete-form-msg="showCompleteFormMsg"
        @update:orderDetailItem="xupdateOrderDetailItem"
        @update:orderQuantity="xupdateOrderQuantity"
        @purchase="onPurchase"
    />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PurchaseFormNew from './PurchaseFormNew.vue';
import { mapGetters, mapActions } from 'vuex';
import OrderDetailItem from '@/types/OrderDetailItem';

export default defineComponent({
    name: 'PurchaseFormNewContainer',
    components: {
        PurchaseFormNew
    },
    computed: {
        ...mapGetters(['orderDetails', 'orderState', 'showCompleteFormMsg'])
    },
    destroyed() {
        this.resetPurchaseFormNew();
    },
    methods: {
        xupdateOrderQuantity(quantity: number) {
            this.updateOrderQuantity(quantity);
        },
        xupdateOrderDetailItem(orderDetailItem: OrderDetailItem) {
            this.updateOrderDetailItem(orderDetailItem);
        },
        ...mapActions([
            'resetPurchaseFormNew',
            'showPaypalButtons',
            'updateOrderQuantity',
            'updateOrderDetailItem',
            'purchaseNew'
        ]),

        onPurchase() {
            this.purchaseNew();
        }
    }
});
</script>
