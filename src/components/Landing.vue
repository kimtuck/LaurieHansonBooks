<template>
    <div>
        <div class="flex flex-col items-center w-full text-7xl text-black pb-2">Laurie's books</div>
        <div class="flex flex-column">
            <landing-good-girl-karma />
            <landing-treasures-gift />
        </div>
        <landing-body />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LandingGoodGirlKarma from './LandingGoodGirlKarma.vue';
import LandingTreasuresGift from './LandingTreasuresGift.vue';
import LandingBody from './LandingBody.vue';

export default defineComponent({
    name: 'Landing',
    components: {
        LandingGoodGirlKarma,
        LandingTreasuresGift,
        LandingBody
    },
    props: {}
});
</script>
