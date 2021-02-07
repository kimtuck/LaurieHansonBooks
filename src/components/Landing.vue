<template>
    <div class="container mx-auto ">
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
