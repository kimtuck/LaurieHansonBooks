<template>
    <div class="bg-pink-300 bg-opacity-30">
        <small-hero />
        <div class="flex flex-row flex-auto ">
            <div class="flex-1">
                <!-- left side -->
                <quantity v-model="quantityb" :options="orderOptions" />
                <dedications />
            </div>
            <div class="flex-1 ">
                <!-- right side -->
                <order-form-container />
                <group label="Payment options">
                    <div id="paypal-buttons" class="w-1/2 m-auto" />
                </group>
            </div>
        </div></div
></template>

<script lang="ts">
import { defineComponent } from 'vue';
import OrderFormContainer from '@/components/OrderFormContainer.vue';
import SmallHero from '@/components/SmallHero.vue';
import Group from '@/components/Group.vue';

import Dedications from '@/components/Dedications.vue';
import Quantity from '@/components/Quantity.vue';
import { mapGetters, mapActions } from 'vuex';

export default defineComponent({
    name: 'Purchase',
    components: {
        SmallHero,
        OrderFormContainer,
        Quantity,
        Dedications,
        Group
    },
    data() {
        return {
            quantitya: 1
        };
    },
    computed: {
        ...mapGetters(['quantity', 'orderOptions']),
        quantityb: {
            // @ts-expect-error
            get() {
                // @ts-expect-error
                return this.quantity;
            },
            set(value: any) {
                this.updateQuantity({ quantity: value });
            }
        }
    },
    created() {
        this.showPaypalButtons('#paypal-buttons');
    },
    methods: {
        ...mapActions(['updateQuantity', 'showPaypalButtons'])
    }
});
</script>
