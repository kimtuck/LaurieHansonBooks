<template>
    <div class="border-2 border-gray-600 shadow-xl rounded-xl" :class="cls">
        <slot />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Box',
    props: {
        cls: {
            type: String,
            default: ''
        }
    }
});
</script>
