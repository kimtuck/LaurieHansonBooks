<template>
    <div class="mx-28 flex flex-row flex-auto bg-red-600">
        <div class="bg-green-500 flex-1">
            <!-- left side -->
            <small-hero />
            <what-you-get />
            <meet-the-author />
        </div>
        <div class="bg-blue-200 flex-1">
            <!-- right side -->
            <order-form />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MeetTheAuthor from '@/components/MeetTheAuthor.vue';
import OrderForm from '@/components/OrderForm.vue';
import SmallHero from '@/components/SmallHero.vue';
import WhatYouGet from '@/components/WhatYouGet.vue';

export default defineComponent({
    name: 'Purchase',
    components: {
        SmallHero,
        WhatYouGet,
        OrderForm,
        MeetTheAuthor
    }
});
</script>
