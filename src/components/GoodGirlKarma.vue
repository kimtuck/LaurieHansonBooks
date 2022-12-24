<template>
    <div>
        <hero />
        <good-girl-karma-body />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Hero from './Hero.vue';
import GoodGirlKarmaBody from './GoodGirlKarmaBody.vue';

export default defineComponent({
    name: 'TreasuresGift',
    components: {
        Hero,
        GoodGirlKarmaBody
    },
    props: {}
});
</script>
