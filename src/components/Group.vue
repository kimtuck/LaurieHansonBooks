<template>
    <box :class="computedClass">
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
        },
        type: {
            type: String,
            default: 'normal'
        }
    },
    computed: {
        computedClass(): String {
            switch (this.type) {
                case 'normal':
                    return 'bg-indigo-100 text-black p-4 m-8 shadow-2xl';
                case 'alert':
                    return 'bg-red-600 text-white p-4 m-8 shadow-2xl';
                default:
                    return '';
            }
        }
    }
});
</script>
