<template>
    <router-link :to="{ name: 'Purchase' }">
        <div class="flex content-center">
            <div class="inline-flex flex-col mx-auto border-black ">
                <button
                    class="px-4 py-2 text-4xl text-white bg-green-500 border border-black rounded shadow hover:bg-green-300 hover:text-black hover:shadow-lg"
                >
                    Good Girl Karma -- Coming Soon!
                </button>
            </div>
        </div>
    </router-link>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ComingSoonButton',
});
</script>
