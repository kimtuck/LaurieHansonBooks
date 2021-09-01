<template>
    <div>
        <quote>
            <template #quote class="hidden sm-visible">
                I'm delighted that you've chosen to purchase Treasure's Gift. I expect that you will enjoy reading the book
                as much as I have enjoyed writing it.
            </template>
            <template #cite>
                Laurie
            </template>
        </quote>
        <div class="flex flex-row flex-auto ">
            <div class="flex-1">
                <!-- left side -->
                <quantity-container v-model="quantityb" />
                <dedications />
            </div>
            <div class="flex-1 ">
                <!-- right side -->
                <order-form-container />
                <group v-if="showCompleteFormMsg" type="alert" label="Contact/Shipping information is incomplete">
                    <div>Please complete the above form</div>
                </group>
                <group label="Payment">
                    <div class="text-lg">
                        Payments are secured, encrypted, and processed by PalPal. We never see your payment details.
                    </div>
                    <div id="paypal-buttons" class="w-1/2 m-auto" />
                    <amazon-purchase />
                </group>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OrderFormContainer from '@/components/OrderFormContainer.vue';
import Group from '@/components/Group.vue';
import Quote from '@/components/Quote.vue';

import Dedications from '@/components/Dedications.vue';
import QuantityContainer from '@/components/QuantityContainer.vue';
import AmazonPurchase from '@/components/AmazonPurchase.vue';
import { mapGetters, mapActions } from 'vuex';

export default defineComponent({
    name: 'Purchase',
    components: {
        Quote,
        OrderFormContainer,
        QuantityContainer,
        Dedications,
        Group,
        AmazonPurchase
    },
    computed: {
        ...mapGetters(['viewingState', 'quantity', 'showCompleteFormMsg']),
        quantityb: {
            // @ts-expect-error
            get() {
                // @ts-expect-error
                return this.quantity;
            },
            set(value: any) {
                this.updateQuantity({ quantity: value });
            }
        }
    },
    created() {
        this.showPaypalButtons('#paypal-buttons');
    },
    methods: {
        ...mapActions(['updateQuantity', 'showPaypalButtons'])
    }
});
</script>
