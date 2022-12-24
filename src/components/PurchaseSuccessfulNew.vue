<template>
    <div class="flex flex-col lg:flex-row">
        <group label="Thank you  for your purchase!">
            <span
                >I'll mail out your {{ quantity === 1 ? 'book' : 'books' }} in the next couple of days. It will take about a
                week to arrive.</span
            >

            <img class="mt-4 mb-4 ml-auto mr-auto" src="@assets/Treasure-ball.png" />
        </group>
        <order-summary />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Group from '@/components/Group.vue';
import OrderSummary from '@/components/OrderSummary.vue';

import { mapGetters, mapActions } from 'vuex';

export default defineComponent({
    name: 'Purchase',
    components: {
        Group,
        OrderSummary
    },
    computed: {
        ...mapGetters(['viewingState', 'quantity', 'orderOptions', 'showCompleteFormMsg'])
    },
    methods: {
        ...mapActions([])
    }
});
</script>
