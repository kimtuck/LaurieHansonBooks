<template>
    <div class="w-full text-indigo-400 bg-green-200">
        <good-girl-karma />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GoodGirlKarma from '@/components/GoodGirlKarma.vue';

export default defineComponent({
    name: 'GoodGirlKarmaView',
    components: {
        GoodGirlKarma
    }
});
</script>
