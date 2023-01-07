<template>
    <div>
        <quote-box
            body="What a wonderful book! We gave to a lovely, and lively, little girl on Christmas Eve. She sat still on her grandma's lap and insisted that Grandma read it over and over. She simply loved it!"
            author="Stephanie"
        />
        <div class="p-16">
            <box class="p-5 bg-white">
                <div class="pb-10 text-4xl font-bold ">The Story</div>
                <p>
                    Treasure loves her best friend, Annie. One day, Annie hears some sad news -- Annie's family is moving.
                    Annie is worried that she won't have any friends in the new neighborhood, and her birthday is only two
                    weeks away!
                </p>
                <p>
                    Treasure can sense that Annie is sad. She tries hard to make Annie happy, but without friends, it will be
                    a very lonely birthday party.
                </p>
                <p>Can Treasure help Annie make new friends? Of course -- Treasure has a plan!</p>
            </box>
        </div>

        <quote-box
            body="I've purchased two of these books and given them to young children as gifts. They were in love with the book. I was sent videos of the kids with the books and they are just so sweet. Wonderfully written and illustrated."
            author="Mark"
        />
        <div class="p-16">
            <box class="p-5 bg-white">
                <div class="pb-10 text-4xl font-bold">About the Book</div>
                <p>
                    Treasure's Gift is published as a quality hardcover book, with durable pages. I wanted a a high-quality
                    book that is meant to be read over and over again. It's slightly larger than most children's books, which
                    makes it easier for young hands to hold and read.
                </p>
                <p>
                    Treasure's Gift is a fully illustrated chapter book, with 36 pages divided into seven chapters. The story
                    is written for readers in first or second grade, and can be enjoyed by young children of all ages. The
                    main characters in the story are Annie, a young girl, and her very special friend Treasure, a Golden
                    Retriever. It captures the essence of that special bond that you have when you grow up with a dog in the
                    family.
                </p>
                <p>
                    This story will appeal to youngsters who loves dogs (especially Golden Retrievers) and anyone who had a
                    very special dog in their life.
                </p>
                <p>
                    Each book will be signed by the author, and you can have a special dedication to the child you're giving
                    the book to. Imagine giving a special gift with a message from the author, addressed to your child or
                    grandchild!
                </p>
                <buy-button label="Buy 'Treasure's Gift'" />
            </box>
        </div>
        <quote-box
            body='I gave this book to the children of 3 of my friends and they all said it was the "best gift ever!" Parents loved it too! and said the children keep reading it over and over!'
            author="Susan"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import QuoteBox from './QuoteBox.vue';
import Box from './Box.vue';
import BuyButton from './BuyButton.vue';

export default defineComponent({
    name: 'GoodGirlKarmaBody',
    components: {
        QuoteBox,
        Box,
        BuyButton
    }
});
</script>

<style scoped>
p {
    padding-bottom: 2rem;
}
</style>
