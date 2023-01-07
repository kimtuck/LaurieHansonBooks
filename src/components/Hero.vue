<template>
    <div>
        <div class="container flex flex-col items-center mx-auto text-color md:flex-row ">
            <!-- Left Col -->
            <div class="justify-center w-full px-12 pt-6 pb-6 align-items: center lg:w-1/2">
                <vue-agile
                    :options="agileOptions"
                    :class="carouselVisibility"
                    nav-buttons="false"
                    speed="2500"
                    fade
                    pause-on-hover
                    autoplay
                >
                    <img class="w-full shadow-xl" src="@assets/carousel/Treasure-Annie-min.png" />
                    <img class="w-full shadow-xl" src="@assets/carousel/cropped-book-covertreasure-min.jpg" />
                    <img class="w-full shadow-xl" src="@assets/carousel/annie2-min.png" />
                    <img class="w-full shadow-xl" src="@assets/carousel/Treasure-ball-min.png" />
                </vue-agile>
            </div>
            <!-- Right Col -->
            <div class="flex flex-col items-center w-full text-center text-indigo-400 lg:w-1/2 lg:py-6">
                <div class="text-7xl">Treasure's Gift</div>
                <div class="m-4">A funny, thoughful story about a Golden Retriever and her best friend.</div>

                <purple-dragonfly class="w-3/4 m-2 " />

                <buy-button label="Buy 'Treasure's Gift'"/>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import BuyButton from './BuyButton.vue';
import PurpleDragonfly from './PurpleDragonfly.vue';
import { VueAgile } from 'vue-agile';

export default defineComponent({
    name: 'Hero',
    components: {
        BuyButton,
        PurpleDragonfly,
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
            return require(`@assets/carousel/${pic}-min`);
        }
    }
});
</script>
