<template>
    <box class="m-4 p-2">
        <div>index {{ index }} -- orderDetailItem {{ orderDetailItem }} -- selected {{ selected }}</div>
        <div>Book {{ index }}</div>
        <radio-button-group :id="id" v-model="selected" :options="orderDetailItemOptions">
            <template #default="slotProps">
                <div class="mr-8">{{ slotProps.option.name }}</div>
            </template>
        </radio-button-group>
        <!-- <dedication-new :model-value="orderDetailItem.dedication" /> -->
    </box>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RadioButtonGroup from '../RadioButtonGroup.vue';
import OrderDetails from '@/Library/OrderDetails';
// import DedicationNew from './DedicationNew.vue';
import Box from '../Box.vue';
import { cloneDeep } from 'lodash';
import OrderDetailItem from '@/types/OrderDetailItem';
import BookId from '@/types/BookId';
// import OrderDetailItem from '@/types/OrderDetailItem';

export default defineComponent({
    name: 'OrderDetailItem',
    components: {
        RadioButtonGroup,
        Box
        // DedicationNew
    },
    props: {
        index: {
            type: Number,
            required: true
        },
        orderDetailItem: {
            type: Object as PropType<OrderDetailItem>,
            required: true
        },
        orderDetailItemOptions: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            selected: BookId.GoodGirlKarma
        };
    },
    computed: {
        // eslint-disable-next-line object-shorthand
        id: function(): string {
            return `book-${this.index}`;
        },
    },
    watch: {
        selected() {
            this.orderDetailItem.bookId = this.selected;
            this.updateOrderItemDetail(this.orderDetailItem)
        }
    }
    methods: {
        updateOrderItemDetail(orderDetailItem: OrderDetails) {
            this.$emit('input', { orderDetailItem: cloneDeep(orderDetailItem), index: this.index });
        }
    }
});
</script>
