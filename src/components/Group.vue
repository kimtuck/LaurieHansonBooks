<template>
    <div class="p-4 m-8 border-2 border-black border-solid">
        <div class="pb-2 text-2xl">{{ label }}</div>
        <slot />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Group',
    props: {
        label: {
            type: String,
            default: ''
        }
    }
});
</script>
