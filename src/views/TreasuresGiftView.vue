<template>
    <div class="w-full text-indigo-400 bg-pink-200">
        <treasures-gift />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TreasuresGift from '@/components/TreasuresGift.vue';

export default defineComponent({
    name: 'TreasuresGiftView',
    components: {
        TreasuresGift
    }
});
</script>

TreasuresGiftBody
