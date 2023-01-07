<template>
    <div>
        <hero />
        <treasures-gift-body />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Hero from './Hero.vue';
import TreasuresGiftBody from './TreasuresGiftBody.vue';

export default defineComponent({
    name: 'TreasuresGift',
    components: {
        Hero,
        TreasuresGiftBody
    },
    props: {}
});
</script>
