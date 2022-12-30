<template>
    <div>
        <quantity
            v-model="quantityValue"
            :options="orderOptions"
            :percent-savings="percentSavings"
            :original-price="originalPrice"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Quantity from '@/components/Quantity.vue';
import { mapActions, mapGetters } from 'vuex';

export default defineComponent({
    name: 'QuantityContainer',
    components: {
        Quantity
    },
    props: {
        modelValue: {
            required: true,
            type: Number
        }
    },
    computed: {
        ...mapGetters(['orderOptions', 'percentSavings', 'originalPrice']),
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
