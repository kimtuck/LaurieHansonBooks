<template>
    <box cls="p-4 m-8 bg-indigo-100 shadow-2xl ">
        <div v-if="label" class="pb-2 text-2xl">{{ label }}</div>
        <div v-if="sublabel" class="pb-2 text-lg">{{ sublabel }}</div>
        <slot />
    </box>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Box from './Box.vue';

export default defineComponent({
    name: 'Group',
    components: {
        Box
    },
    props: {
        label: {
            type: String,
            default: ''
        },
        sublabel: {
            type: String,
            default: ''
        }
    }
});
</script>
