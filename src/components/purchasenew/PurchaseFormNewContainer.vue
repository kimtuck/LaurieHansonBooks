<template>
    <purchase-form-new 
    :orderDetails="orderDetails"
    :orderState="orderState"
    @input="updateOrderDetails"
    @purchase="onPurchase"
    />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PurchaseFormNew from './PurchaseFormNew.vue';
import { mapGetters, mapActions } from 'vuex';

export default defineComponent({
    name: 'PurchaseFormNewContainer',
    components: {
        PurchaseFormNew
    },
    computed: {
        ...mapGetters(['orderDetails', 'orderState']),
    },
    destroyed() {
        this.resetPurchaseFormNew();

    },
    methods: {
        ...mapActions(['resetPurchaseFormNew', 'showPaypalButtons', 'updateOrderDetails', 'purchaseNew']),

        onPurchase() {
            this.purchaseNew();
        }
    }
});
</script>
