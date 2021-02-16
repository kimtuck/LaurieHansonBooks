<template>
    <div class="flex flex-row flex-auto bg-red-600 mx-28">
        <div class="flex-1 bg-green-500">
            <!-- left side -->
            <small-hero />
            <what-you-get />
            <meet-the-author-short />
        </div>
        <div class="flex-1 bg-blue-200">
            <!-- right side -->
            <order-form />
            <div id="paypal-buttons" class="w-1/2 m-auto" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MeetTheAuthorShort from '@/components/MeetTheAuthorShort.vue';
import OrderForm from '@/components/OrderForm.vue';
import SmallHero from '@/components/SmallHero.vue';
import WhatYouGet from '@/components/WhatYouGet.vue';
import { mapActions } from 'vuex';

export default defineComponent({
    name: 'Purchase',
    components: {
        SmallHero,
        WhatYouGet,
        OrderForm,
        MeetTheAuthorShort
    },
    created() {
        this.showPaypalButtons('#paypal-buttons');
    },
    methods: {
        ...mapActions(['showPaypalButtons'])
    }
});
</script>
