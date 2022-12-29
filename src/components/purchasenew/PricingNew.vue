<template>
    <box>
        <div>Book Cost: {{ totalBookPrice }}</div>
        <div>Shipping: {{ totalShipping }}</div>
        <div>Total: {{ total }}</div>
    </box>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Box from '@/components/Box.vue';
import { newPricing } from '@/Library/pricing';
import OrderDetails from '@/Library/OrderDetails';

export default defineComponent({
    name: 'PricingNew',
    components: {
        Box
    },
    props: {
        orderDetails: {
            type: OrderDetails,
            required: true
        }
    },
    computed: {
        totalBookPrice(): number {
            return newPricing.totalBookPrice(this.orderDetails);
        },
        totalShipping(): number {
            return newPricing.totalShipping(this.orderDetails);
        },
        total(): number {
            return newPricing.total(this.orderDetails);
        }
    }
});
</script>
