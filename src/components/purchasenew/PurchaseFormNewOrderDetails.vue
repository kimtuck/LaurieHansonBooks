<template>
    <div>
        <radio-button-group
            id="radio"
            v-model="itemsToPurchase"
            :options="itemsToOrderOptions"
            :horizontal="true"
            label="Number of books to purchase:"
        >
            <template #default="slotProps">
                <div class="mr-8">{{ slotProps.option.value }}</div>
            </template>
        </radio-button-group>
        <div>itemsToPurchase {{ itemsToPurchase }}</div>
        <div v-for="item in itemsToPurchase" :key="item">
            <order-detail-item
                :index="item"
                :order-detail-item="orderDetails.bookDetails[item]"
                :order-detail-item-options="orderDetailItemOptions"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OrderDetails from '@/Library/OrderDetails';
import OrderDetailItem from './OrderDetailItem.vue'
import RadioButtonGroup from '../RadioButtonGroup.vue';
import { cloneDeep } from 'lodash';

export default defineComponent({
    name: 'PurchaseFormNewOrderDetails',
    components: { RadioButtonGroup, OrderDetailItem },
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
    methods: {
        updateOrderDetails(orderDetails: OrderDetails) {
            this.$emit('input', cloneDeep(orderDetails));
        }
    }
});
</script>
