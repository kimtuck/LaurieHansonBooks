<template>
    <div class="w-full text-indigo-400 bg-pink-200">
        <landing />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Landing from '@/components/Landing.vue';

export default defineComponent({
    name: 'Home',
    components: {
        Landing
    }
});
</script>
