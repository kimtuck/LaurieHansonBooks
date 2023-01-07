<template>
    <div>
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
                        <img class="w-full shadow-xl" src="@assets/GoodGirlKarma/page1-min.jpg" />
                        <img class="w-full shadow-xl" src="@assets/GoodGirlKarma/page12-min.jpg" />
                        <img class="w-full shadow-xl" src="@assets/GoodGirlKarma/page7-min.jpg" />
                        <img class="w-full shadow-xl" src="@assets/GoodGirlKarma/page14-min.jpg" />
                    </vue-agile>
                </div>
                <!-- Right Col -->
                <div class="flex flex-col items-center w-full text-center text-indigo-400 lg:w-1/2 lg:py-6">
                    <div class="text-7xl mb-8">Good Girl, Karma</div>
                    <div class="m-4 text-6xl">Meet Karma!</div>
                    <div class="m-2 text-4xl">A golden retriever who likes to do good things.</div>
                    <div class="m-4">Let's discover all the ways Karma is a good dog!</div>
                    <div class="m-4">A book for beginning readers, with beautiful illustrations.</div>
                    <buy-button label="Buy 'Good Girl, Karma'" />
                </div>
            </div>
        </div>

        <div>
            <div class="m-6">
                <box class="p-5 bg-white">
                    <div class="pb-10 text-4xl font-bold">About the Book</div>
                    <p class="pb-10">
                        Good Girl Karma is published as a quality softcover book, with durable pages. Each page has a short,
                        easy to read phrase on the left side, and a beautiful illustration on the right side. There are 15
                        illustrated pages.
                    </p>
                    <p class="pb-2 ml-10">
                        "Karma likes to play games with you."
                    </p>
                    <p class="pb-10 ml-10">"Good Girl, Karma."</p>
                    <p class="pb-10">
                        This book will appeal to pre-readers, young readers, children who love dogs (especially Golden
                        Retrievers) and anyone who had a very special dog in their life.
                    </p>
                    <p class="pb-10">
                        Each book will be signed by the author, and you can have a special dedication to the child you're
                        giving the book to. Imagine giving a special gift with a message from the author, addressed to your
                        child or grandchild!
                    </p>
                    <buy-button class="my-4" label="Buy 'Good Girl, Karma'" />
                </box>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BuyButton from './BuyButton.vue';
import { VueAgile } from 'vue-agile';
import Box from '@/components/Box.vue';

export default defineComponent({
    name: 'GoodGirlKarma',
    components: {
        VueAgile,
        BuyButton,
        Box
    },
    props: {},
    data() {
        return {
            carousel: ['page 1-min.jpg', 'page 4-min.jpg', 'Page 6-min.jpg', 'Page 12-min.jpm'],
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
        getImgUrl(pic: string) {
            // eslint-disable-next=line
            // eslint-disable-next-line global-require
            return require(`@assets/GoodGirlKarma/${pic}`);
        }
    }
});
</script>
