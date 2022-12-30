<template>
    <box class="m-4 p-2  bg-gray-200">
        <!-- <div>orderDetailItem {{ orderDetailItem }} -- selected {{ selected }}</div> -->
        <div>Book {{ orderDetailItem.index +1 }}</div>
        <radio-button-group :id="id" v-model="selected" :options="orderDetailItemOptions">
            <template #default="slotProps">
                <div class="mr-8">{{ slotProps.option.name }}</div>
            </template>
        </radio-button-group>
        <dedication-new :index="orderDetailItem.index" :model-value="orderDetailItem.dedication" @update:modelValue="updateDedication" />
    </box>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RadioButtonGroup from '../RadioButtonGroup.vue';
import DedicationNew from './DedicationNew.vue';
import Box from '../Box.vue';
import BookId from '@/types/BookId';

export default defineComponent({
    name: 'OrderDetailItem',
    components: {
        RadioButtonGroup,
        Box,
        DedicationNew
    },
    props: {
        orderDetailItem: {
            type: Object,
            required: true
        },
        orderDetailItemOptions: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            // TODO the selected value is orderDetailItem.bookId
            selected: BookId.GoodGirlKarma
        };
    },
    computed: {
        // eslint-disable-next-line object-shorthand
        id: function(): string {
            return `book-${this.orderDetailItem.index}`;
        }
    },
    watch: {
        selected() {
            this.updateBookId();
        }
    },
    methods: {
        updateBookId() {
            this.update({ bookId: this.selected });
        },
        updateDedication(dedication: string) {
            this.update({ dedication });
        },
        update(replacement: Object) {
            this.$emit('update:orderDetailItem', { ...this.orderDetailItem, ...replacement });
        }
    }
});
</script>
