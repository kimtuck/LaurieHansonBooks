<template>
    <box class="m-4 p-2 bg-gray-100  text-black">
        <div>Order Amount: ${{ totalBookPrice }}</div>
        <div>Shipping: ${{ totalShipping }}</div>
        <div>Total: ${{ total }}</div>
    </box>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Box from '@/components/Box.vue';
import { newPricing, formatPrice } from '@/Library/pricing';
import OrderDetails from '@/Library/OrderDetails';
import BookId from '@/types/BookId';

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
        treasuresGiftPrice(): string {
            return newPricing.bookPrice[BookId.TreasuresGift].priceNote;
        },
        goodGirlKarmPrice(): string {
            return newPricing.bookPrice[BookId.GoodGirlKarma].priceNote;
        },
        totalBookPrice(): string {
            return formatPrice(newPricing.totalBookPrice(this.orderDetails));
        },
        totalShipping(): string {
            return formatPrice(newPricing.totalShipping(this.orderDetails));
        },
        total(): string {
            return formatPrice(newPricing.total(this.orderDetails));
        }
    }
});
</script>
