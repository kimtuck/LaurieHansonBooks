<template>
    <purchase-form-new
        :orderDetails="orderDetails"
        :orderState="orderState"
        @update:orderDetailItem="xupdateOrderDetailItem"
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
        ...mapGetters(['orderDetails', 'orderState'])
    },
    destroyed() {
        this.resetPurchaseFormNew();
    },
    methods: {
        xupdateOrderDetailItem(orderDetailItem: OrderDetailItem) {
            this.updateOrderDetailItem(orderDetailItem);
        },
        ...mapActions(['resetPurchaseFormNew', 'showPaypalButtons', 'updateOrderDetailItem', 'purchaseNew']),

        onPurchase() {
            this.purchaseNew();
        }
    }
});
</script>
