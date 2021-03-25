<template>
    <div class="container mx-auto bg-pink-300 bg-opacity-20 text-indigo-400">
        <hero />
        <landing-body />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Hero from './Hero.vue';
import LandingBody from './LandingBody.vue';

export default defineComponent({
    name: 'Landing',
    components: {
        Hero,
        LandingBody
    },
    props: {}
});
</script>
