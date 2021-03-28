<template>
    <div class="flex flex-row mb-2">
        <div class="w-40 font-bold min-w-40 whitespace-nowrap">{{ label }}</div>
        <div class="ml-3">{{ value }}</div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'BuyButton',
    props: {
        label: { type: String, required: true },
        value: { type: [String, Number], required: true }
    }
});
</script>
