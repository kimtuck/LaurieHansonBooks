<template>
    <quantity v-model="quantityValue" :options="orderOptions" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Quantity from '@/components/Quantity.vue';
import { mapActions } from 'vuex';

export default defineComponent({
    name: 'Quantity',
    components: {
        Quantity
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
    computed: {
        // ...mapGetters(['quantity', 'orderOptions']),
        quantityValue: {
            // @ts-expect-error
            get() {
                // @ts-expect-error
                return this.modelValue;
            },
            set(value: any) {
                this.$emit('update:modelValue', value);
            }
        }
    },
    methods: {
        ...mapActions(['updateQuantity'])
    }
});
</script>
