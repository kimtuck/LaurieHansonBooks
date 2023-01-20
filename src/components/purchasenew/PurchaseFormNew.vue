<template>
    <div>
        <quote>
            <template #quote class="hidden sm-visible">
                I'm delighted that you've chosen to purchase a book. I expect that you will enjoy reading the book as much as
                I have enjoyed writing it.
            </template>
            <template #cite> Laurie </template>
        </quote>

        <div class="flex flex-row flex-auto text-black">
            <div class="flex-1">
                <!-- left side -->
                <pricing-new :order-details="orderDetails" />
                <purchase-form-new-order-details-container
                    :order-details="orderDetails"
                    @update:orderDetailItem="updateOrderDetailItem"
                    @update:orderQuantity="updateOrderQuantity"
                />
            </div>

            <div class="flex-1">
                <!-- right side -->
                <order-form-new-container />
                <box
                    v-if="showCompleteFormMsg"
                    class="m-4 p-2"
                    type="alert"
                    label="Contact/Shipping information is incomplete"
                >
                    <div class="text-red-500">Please fill in your contact information</div>
                </box>
                <box class="m-4 p-2 bg-red-100" label="Payment">
                    <div class="text-lg p-2">
                        Payments are secured, encrypted, and processed by PayPal. We never see your payment details.
                    </div>
                    <div class="w-1/2 m-auto">
                        <div class="bg-gray-100 p-4">
                            <div id="paypal-buttons" />
                        </div>
                    </div>
                    <div class="text-lg p-8">
                        Troubles making your purchase? Contact Laurie directly at kimtuck@comcast.net.
                    </div>
                    <amazon-purchase />
                </box>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PurchaseFormNewOrderDetailsContainer from './PurchaseFormNewOrderDetailsContainer.vue';
import Box from '@/components/Box.vue';
import Quote from '@/components/Quote.vue';
import AmazonPurchase from '@/components/AmazonPurchase.vue';
import { mapActions } from 'vuex';
import OrderDetails from '@/Library/OrderDetails';
import OrderFormNewContainer from './OrderFormNewContainer.vue';
import OrderDetailItemType from '../../types/OrderDetailItem';
import PricingNew from './PricingNew.vue';

export default defineComponent({
    name: 'Purchase',
    components: {
        Quote,
        PurchaseFormNewOrderDetailsContainer,
        Box,
        AmazonPurchase,
        OrderFormNewContainer,
        PricingNew
    },
    props: {
        orderDetails: {
            type: OrderDetails,
            required: true
        },
        orderState: {
            type: Number,
            required: true
        },
        showCompleteFormMsg: {
            type: Boolean,
            required: true
        }
    },
    created() {
        this.showPaypalButtonsNew('#paypal-buttons');
    },
    methods: {
        ...mapActions(['showPaypalButtonsNew']),
        updateOrderQuantity(quantity: number) {
            this.$emit('update:orderQuantity', quantity);
        },
        updateOrderDetailItem(orderDetailItem: OrderDetailItemType) {
            this.$emit('update:orderDetailItem', orderDetailItem);
        }
    }
});
</script>
