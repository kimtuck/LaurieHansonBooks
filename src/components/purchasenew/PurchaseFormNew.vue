<template>
    <div>
        <div>Order Details: {{ orderDetails }}</div>
        <quote>
            <template #quote class="hidden sm-visible">
                I'm delighted that you've chosen to purchase a book. I expect that you will enjoy reading the book as much as
                I have enjoyed writing it.
            </template>
            <template #cite> Laurie </template>
        </quote>

        <div class="flex flex-row flex-auto">
            <div class="flex-1">
                <!-- left side -->
                <order-form-new-container />
                <purchase-form-new-order-details-container
                    :orderDetails="orderDetails"
                    @update:orderDetailItem="updateOrderDetailItem"
                    @update:orderQuantity="updateOrderQuantity"
                />
            </div>

            <div class="flex-1">
                <!-- right side -->
                <pricing-new :order-details="orderDetails" />
                <box
                    class="m-4 p-2"
                    v-if="showCompleteFormMsg"
                    type="alert"
                    label="Contact/Shipping information is incomplete"
                >
                    <div>Please complete the above form</div>
                </box>
                <box class="m-4 p-2 bg-red-100" label="Payment">
                    <div class="text-lg">
                        Payments are secured, encrypted, and processed by PayPal. We never see your payment details.
                    </div>
                    <div class="w-1/2 m-auto">
                        <div class="bg-gray-100 p-4">
                            <div id="paypal-buttons" />
                        </div>
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
        this.showPaypalButtons('#paypal-buttons');
    },
    methods: {
        ...mapActions(['showPaypalButtons']),
        updateOrderQuantity(quantity: number) {
            this.$emit('update:orderQuantity', quantity);
        },
        updateOrderDetailItem(orderDetailItem: OrderDetailItemType) {
            this.$emit('update:orderDetailItem', orderDetailItem);
        }
    }
});
</script>
