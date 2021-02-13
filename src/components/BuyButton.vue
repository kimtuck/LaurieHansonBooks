<template>
    <router-link :to="{ name: 'Purchase' }">
        <button
            class="bg-green-500 hover:bg-green-300 text-white hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-black"
        >
            Buy Treasure's Gift
        </button>
    </router-link></template
>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'BuyButton'
});
</script>
