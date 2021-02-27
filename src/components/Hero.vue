<template>
    <div>
        <div class="container flex flex-col items-center mx-auto bg-pink-300 text-color bg-opacity-30 md:flex-row ">
            <!-- Left Col -->
            <div class="flex flex-col items-start justify-center w-full px-12 pt-6 pb-6 lg:w-1/2 ">
                <img class="shadow-xl" src="@assets/cropped-book-covertreasure.jpg" />
            </div>
            <!-- Right Col -->
            <div class="flex flex-col items-center w-full text-center text-indigo-400 lg:w-1/2 lg:py-6">
                <div class="text-7xl">Treasure's Gift</div>
                <div class="m-4">A funny, thoughful story about a Golden Retriever and her best friend.</div>

                <purple-dragonfly class="w-3/4 m-2 " />

                <buy-button />
            </div>
        </div>
    </div>
</template>

<script>
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
