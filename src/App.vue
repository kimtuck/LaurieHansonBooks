<template>
    <div class="container flex flex-wrap items-center mx-auto">
        <navigation />
        <div id="nav" class="hidden">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
        <router-view />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navigation from '@/components/Navigation.vue';

export default defineComponent({
    name: 'App',
    components: {
        Navigation
    }
});
</script>
