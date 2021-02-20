<template>
    <div>
        <group label="Order Quantity">
            <radio-button-group id="radio" v-model="quantity" :options="options" />
        </group>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import RadioButtonGroup from '@/components/RadioButtonGroup.vue';
import Group from '@/components/Group.vue';

export default defineComponent({
    name: 'Quantity',
    components: {
        Group,
        RadioButtonGroup
    },
    props: {
        modelValue: {
            required: true,
            type: Number
        },
        // eslint-disable-next-line
        options: {
            default: [],
            required: true
        }
    },
    data() {
        return {
            quantity: 0
        };
    },
    watch: {
        quantity() {
            this.$emit('update:modelValue', this.quantity);
        }
    },
    created() {
        this.quantity = this.modelValue;
    }
});
</script>
