<template>
    <div>
        <landing />
        <div>
            <a
                href="https://www.centerforworkplacehappiness.com/happy-vet-happy-pet?fbclid=IwAR3aMOVxKtQG2BNoG6ykBgMqy0oKjsdUowAsSlRy4eyJhItGBaFxgtWJ3bY"
                >ref</a
            >
        </div>
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
