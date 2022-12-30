<template>
    <div>
        <quote-box
            body="What a wonderful book! We gave to a lovely, and lively, little girl on Christmas Eve. She sat still on her grandma's lap and insisted that Grandma read it over and over. She simply loved it!"
            author="Stephanie"
        />
        <quote-box
            body="I've purchased two of these books and given them to young children as gifts. They were in love with the book. I was sent videos of the kids with the books and they are just so sweet. Wonderfully written and illustrated."
            author="Mark"
        />
        <quote-box
            body='I gave this book to the children of 3 of my friends and they all said it was the "best gift ever!" Parents loved it too! and said the children keep reading it over and over!'
            author="Susan"
        />
        <buy-button class="p-2" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import QuoteBox from './QuoteBox.vue';
import BuyButton from './BuyButton.vue';

export default defineComponent({
    name: 'LandingBody',
    components: {
        QuoteBox,
        BuyButton
    }
});
</script>

<style scoped>
p {
    padding-bottom: 2rem;
}
</style>
