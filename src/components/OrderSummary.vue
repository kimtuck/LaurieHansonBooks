<template>
    <div>
        <group label="Order Summary">
            <item
                label="Billing Code:"
                :value="
                    `Transaction may appear with the description ${shippingBillId} on your credit card or bank statement.`
                "
            />
            <item label="Books ordered" :value="quantity" />
            <item label="Price" :value="price" />
            <item
                v-for="(dedication, index) in dedications"
                :key="index"
                :label="`Dedication ${index + 1}`"
                :value="dedication"
            />
            <item label="Ship to:" value="" />
            <item label="Address" :value="shippingTo.address_line_1" />
            <item label="City" :value="shippingTo.admin_area_2" />
            <item label="State" :value="shippingTo.admin_area_1" />
            <item label="Zip" :value="shippingTo.postal_code" />
        </group>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Group from '@/components/Group.vue';
import Item from '@/components/Item.vue';
import { mapGetters } from 'vuex';
import { formatPrice } from '@/Library/pricing';

export default defineComponent({
    name: 'OrderSummary',
    components: {
        Group,
        Item
    },
    computed: {
        ...mapGetters(['quantity', 'dedications', 'shippingTo', 'shippingPrice', 'shippingBillId']),
        price() {
            const x = this.shippingPrice;
            console.log(x);
            const y = Number.parseFloat(x);
            return `$${formatPrice(y)}`;
        }
    }
});
</script>

<style scoped>
input[type='textarea'] {
    height: 10em;
}
</style>
