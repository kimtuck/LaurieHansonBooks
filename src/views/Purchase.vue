<template>
    <div class="flex flex-row flex-auto bg-red-600">
        <div class="flex-1 bg-green-500">
            <!-- left side -->
            <quantity v-model="quantity" :options="orderOptions" />
            <dedication :books="quantity" />
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
import Quantity from '@/components/Quantity.vue';
import Dedication from '@/components/Dedication.vue';
import { mapGetters, mapActions } from 'vuex';

export default defineComponent({
    name: 'Purchase',
    components: {
        SmallHero,
        WhatYouGet,
        OrderForm,
        MeetTheAuthorShort,
        Quantity,
        Dedication
    },
    data() {
        return {
            quantity: 1
        };
    },
    computed: {
        ...mapGetters(['orderOptions'])
    },
    created() {
        this.showPaypalButtons('#paypal-buttons');
    },
    methods: {
        ...mapActions(['showPaypalButtons'])
    }
});
</script>
