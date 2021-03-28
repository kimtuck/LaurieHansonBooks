<template>
    <nav
        class="w-full p-2 mt-0 font-extrabold text-white no-underline bg-gray-500 border-b-2 border-black tex-xxl bg-opacity-30 hover:no-underline"
    >
        <!-- Add this to make the nav fixed: "fixed z-10 pin-t" -->
        <div class="container flex flex-wrap items-center mx-auto">
            <div class="flex justify-center w-full md:w-1/2 md:justify-start">
                <a class="hover:text-purple-200 " href="#">
                    <span class="pl-2 text-2xl"><i class="em em-grinning" />Laurie Hanson Books</span>
                </a>
            </div>
            <div class="flex content-center justify-between w-full pt-2 md:w-1/2 md:justify-end">
                <ul class="flex items-center justify-between flex-1 list-reset md:flex-none">
                    <li v-for="route in routes" :key="route.to" class="mr-3 text-2xl hover:text-purple-200">
                        <router-link :to="route.to">{{ route.label }}</router-link>
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
