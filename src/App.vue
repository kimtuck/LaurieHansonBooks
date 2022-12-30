<template>
    <div class="container mx-auto text-2xl border-2 border-black mb-4">
        <navigation />
        <div class="" w-full>
            <router-view />
        </div>
        <spinner />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navigation from '@/components/Navigation.vue';
import Spinner from '@/components/Spinner.vue';

export default defineComponent({
    name: 'App',
    components: {
        Navigation,
        Spinner
    }
});
</script>
