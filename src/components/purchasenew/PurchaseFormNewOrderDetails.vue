<template>
    <div>
        <box class="m-4 p-2  bg-gray-200">
            <div class="mb-4">
                <div>{{ goodGirlKarmPrice }}</div>
                <div>{{ treasuresGiftPrice }}</div>
            </div>

            <radio-button-group
                id="radio"
                v-model="itemsToPurchase"
                :options="itemsToOrderOptions"
                :horizontal="true"
                label="Number of books to purchase:"
                @update:modelValue="updateOrderQuantity"
            >
                <template #default="slotProps">
                    <div class="mr-8">{{ slotProps.option.value }}</div>
                </template>
            </radio-button-group>
            <div v-for="item in itemsToPurchase" :key="item">
                <order-detail-item
                    :order-detail-item="orderDetails.bookDetails[item - 1]"
                    :order-detail-item-options="orderDetailItemOptions"
                    @update:orderDetailItem="updateOderDetailItem"
                />
            </div>
        </box>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OrderDetails from '@/Library/OrderDetails';
import OrderDetailItem from './OrderDetailItem.vue';
import RadioButtonGroup from '../RadioButtonGroup.vue';
import Box from '../Box.vue';
import OrderDetailItemType from '../../types/OrderDetailItem';
import { newPricing } from '@/Library/pricing';
import BookId from '@/types/BookId';

export default defineComponent({
    name: 'PurchaseFormNewOrderDetails',
    components: { Box, RadioButtonGroup, OrderDetailItem },
    props: {
        orderDetails: {
            type: OrderDetails,
            required: true
        },
        itemsToOrderOptions: {
            type: Array,
            required: true
        },
        orderDetailItemOptions: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            itemsToPurchase: 1
        };
    },
    computed: {
        treasuresGiftPrice(): string {
            return newPricing.bookPrice[BookId.TreasuresGift].priceNote;
        },
        goodGirlKarmPrice(): string {
            return newPricing.bookPrice[BookId.GoodGirlKarma].priceNote;
        }
    },
    methods: {
        updateOrderQuantity(quantity: number) {
            this.$emit('update:orderQuantity', quantity);
        },
        updateOderDetailItem(orderDetailItem: OrderDetailItemType) {
            this.$emit('update:orderDetailItem', orderDetailItem);
        }
    }
});
</script>
