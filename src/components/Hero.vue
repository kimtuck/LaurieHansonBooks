<template>
    <div>
        <div class="text-color bg-pink-300 bg-opacity-30 container mx-auto flex flex-col md:flex-row items-center ">
            <!-- Left Col -->
            <div class="flex flex-col w-full lg:w-1/2 justify-center items-start pt-6 pb-6 px-12 ">
                <img class="shadow-xl" src="@assets/cropped-book-covertreasure.jpg" />
            </div>
            <!-- Right Col -->
            <div class="w-full lg:w-1/2 lg:py-6 text-center text-indigo-400 flex flex-col items-center">
                <div class="text-7xl">Treasure's Gift</div>
                <div class="m-4">A funny, thoughful story about a Golden Retriever and her best friend.</div>

                <purple-dragonfly class="m-2 shadow-lg rounded-md w-1/2 bg-purple-600 text-white  " />

                <buy-button />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BuyButton from './BuyButton.vue';
import PurpleDragonfly from './PurpleDragonfly.vue';

export default defineComponent({
    name: 'Hero',
    components: {
        BuyButton,
        PurpleDragonfly
    }
});
</script>
