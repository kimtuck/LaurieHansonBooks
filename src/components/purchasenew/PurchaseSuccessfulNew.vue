<template>
    <div class="flex flex-col lg:flex-row">
        <group label="Thank you  for your purchase!">
            <span
                >I'll mail out your {{ orderDetails.books === 1 ? 'book' : 'books' }} soon.</span
            >
        </group>
        <order-summary-new />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Group from '@/components/Group.vue';
import OrderSummaryNew from '@/components/purchasenew/OrderSummaryNew.vue';

import { mapGetters, mapActions } from 'vuex';

export default defineComponent({
    name: 'Purchase',
    components: {
        Group,
        OrderSummaryNew
    },
    computed: {
        ...mapGetters(['orderDetails'])
    },
    methods: {
        ...mapActions([])
    }
});
</script>
