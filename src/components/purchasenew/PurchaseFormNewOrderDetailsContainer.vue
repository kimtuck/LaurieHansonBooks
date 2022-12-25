<template>
    <div>
        <quantity
            orderDetails="orderDetails"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Quantity from '@/components/Quantity.vue';
import { mapActions, mapGetters } from 'vuex';
import OrderDetails from '@/Library/OrderDetails';
import cloneDeep from 'lodash/clonedeep';

export default defineComponent({
    name: 'QuantityContainer',
    components: {
        Quantity
    },
    props: {
        orderDetails: {
            type: OrderDetails,
            required: true
        },
    },
    computed: {
        ...mapGetters(['orderOptions', 'percentSavings', 'originalPrice', 'discount']),
    },
    methods: {
        updateOrderDetails(orderDetails: OrderDetails) {
            this.$emit('input', cloneDeep(orderDetails))
        }
    }
});
</script>
