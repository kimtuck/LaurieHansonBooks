<template>
    <div class="container  mx-auto flex flex-wrap items-center">
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
