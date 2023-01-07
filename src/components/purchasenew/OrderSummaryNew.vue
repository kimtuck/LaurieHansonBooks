<template>
    <div>
        <group label="Order Summary">
            <item
                label="Billing Code:"
                :value="
                    `Transaction may appear with the description ${shippingBillId} on your credit card or bank statement.`
                "
            />
            <item label="Books ordered" :value="orderDetails.books" />
            <item label="Price" :value="price" />
        </group>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Group from '@/components/Group.vue';
import Item from '@/components/Item.vue';
import { mapGetters } from 'vuex';
import { formatPrice, newPricing } from '@/Library/pricing';

export default defineComponent({
    name: 'OrderSummaryNew',
    components: {
        Group,
        Item
    },
    computed: {
        ...mapGetters(['orderDetails', 'shippingBillId']),
        price() {
            // @ts-expect-error
            return formatPrice(newPricing.total(this.orderDetails));
        }
    }
});
</script>

<style scoped>
input[type='textarea'] {
    height: 10em;
}
</style>
