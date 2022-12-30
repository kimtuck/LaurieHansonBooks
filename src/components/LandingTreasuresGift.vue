<template>
    <div class="flex flex-col items-center w-full">
        <!-- Left Col -->
        <div class="border-solid border-black border-2 p-4 m-2 flex flex-col items-center">
            <div class="text-5xl">Treasure's Gift</div>
        </div>
        <div class="text-4xl text-red-700 font-extrabold">&nbsp;</div>
        <div class="justify-center w-full px-12 pt-2 pb-2 align-items: center">
            <vue-agile
                :options="agileOptions"
                :class="carouselVisibility"
                nav-buttons="false"
                speed="2500"
                fade
                pause-on-hover
                autoplay
            >
                <img class="w-full shadow-xl" src="@assets/carousel/Treasure-Annie.png" />
                <img class="w-full shadow-xl" src="@assets/carousel/cropped-book-covertreasure.jpg" />
                <img class="w-full shadow-xl" src="@assets/carousel/annie2.png" />
                <img class="w-full shadow-xl" src="@assets/carousel/Treasure-ball.png" />
            </vue-agile>
        </div>
        <div class="flex flex-col items-center w-full text-center text-indigo-400">
            <div class="m-4">A funny, thoughful story about a Golden Retriever and her best friend.</div>
        </div>

        <buy-button class="p-2" label="Buy 'Treasure's Gift'"/>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import BuyButton from './BuyButton.vue';
// import PurpleDragonfly from './PurpleDragonfly.vue';
import { VueAgile } from 'vue-agile';

export default defineComponent({
    name: 'Hero',
    components: {
        BuyButton,
        // PurpleDragonfly,
        VueAgile
    },
    data() {
        return {
            carousel: ['cropped-book-cover.jpg', 'Annie2.png', 'Treasure-Annie.png', 'Treasure-Ball.png'],
            carouselVisibility: 'invisible',
            coverVisibility: '',
            agileOptions: { navButtons: false }
        };
    },
    mounted() {
        const self = this;
        setTimeout(() => {
            self.carouselVisibility = '';
            self.coverVisibility = 'hidden';
        }, 0);
    },
    methods: {
        getImgUrl(pic) {
            // eslint-disable-next=line
            // eslint-disable-next-line global-require
            return require(`@assets/carousel/${pic}`);
        }
    }
});
</script>
