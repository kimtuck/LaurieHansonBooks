<template>
    <div class="container h-screen mx-auto text-2xl bg-pink-200 border">
        <navigation />
        <div class="" w-full h-screen>
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
