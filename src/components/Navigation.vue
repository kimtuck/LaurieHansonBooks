<template>
    <nav class="p-2 mt-0 w-full  bg-gray-500 bg-opacity-30">
        <!-- Add this to make the nav fixed: "fixed z-10 pin-t" -->
        <div class="container mx-auto flex flex-wrap items-center">
            <div class="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
                <a class="text-gray-400 no-underline hover:text-white hover:no-underline" href="#">
                    <span class="text-2xl pl-2"><i class="em em-grinning" />Laurie Hanson Books</span>
                </a>
            </div>
            <div class="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
                <ul class="text-gray-400 list-reset flex justify-between flex-1 md:flex-none items-center">
                    <li v-for="route in routes" :key="route.to" class="mr-3">
                        <router-link :to="route.to">{{ route.label }}</router-link> |
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Navigation',
    data() {
        return {
            routes: [
                { to: '/', label: 'Home' },
                { to: '/Purchase', label: 'Purchase' }
            ]
        };
    }
});
</script>
