<template>
    <group label="">
        <div class="text-red-600">Coupon Code applied: {{ couponCode }}</div>
        <div>Prices reflect {{ percentSavings }}% off of the ${{ originalPrice }} regular price</div>

        <radio-button-group id="radio" v-model="quantity" :options="options">
            <template #default="slotProps">
                <div>{{ fmtOption(slotProps.option) }}</div>
            </template>
        </radio-button-group>
    </group>
</template>

<script>
import { defineComponent } from 'vue';
import RadioButtonGroup from '@/components/RadioButtonGroup.vue';
import Group from '@/components/Group.vue';
import { formatPrice } from '@/Library/pricing';

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
        },
        saleprice: {
            default: 0,
            required: true,
            type: Number
        },
        percentSavings: {
            default: 0,
            required: true,
            type: Number
        },
        originalPrice: {
            default: 12,
            required: true,
            type: Number
        },
        couponCode: {
            default: '',
            required: true,
            type: String
        }
    },
    data() {
        return {
            quantity: 0,
            regularPrice: 0
        };
    },
    watch: {
        quantity() {
            this.$emit('update:modelValue', this.quantity);
        }
    },
    created() {
        this.quantity = this.modelValue;
    },
    methods: {
        fmtOption(option) {
            return `${option.quantity} ${option.quantity === 1 ? 'copy' : 'copies'} - $${formatPrice(
                option.price
            )}  - shipping $${formatPrice(option.shipping)} - Total $${formatPrice(option.price + option.shipping)}`;
        }
    }
});
</script>
