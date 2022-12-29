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
                <purchase-form-new-order-details-container
                    :orderDetails="orderDetails"
                    @update:orderDetailItem="updateOrderDetailItem"
                />
            </div>

            <div class="flex-1">
                <!-- right side -->
                <order-form-new-container />
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
import PurchaseFormNewOrderDetailsContainer from './PurchaseFormNewOrderDetailsContainer.vue';
import Group from '@/components/Group.vue';
import Quote from '@/components/Quote.vue';
import AmazonPurchase from '@/components/AmazonPurchase.vue';
import { mapActions } from 'vuex';
import OrderDetails from '@/Library/OrderDetails';
import OrderFormNewContainer from './OrderFormNewContainer.vue';
import OrderDetailItemType from '../../types/OrderDetailItem';

export default defineComponent({
    name: 'Purchase',
    components: {
        Quote,
        PurchaseFormNewOrderDetailsContainer,
        Group,
        AmazonPurchase,
        OrderFormNewContainer
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
        updateOrderDetailItem(orderDetailItem: OrderDetailItemType) {
            this.$emit('update:orderDetailItem', orderDetailItem);
        }
    }
});
</script>
