<template>
    <box class="p-6 px-20 m-10 text-2xl bg-white">
        <blockquote>
            I'm delighted that you've chosen to purchase Treasure's Gift. I expect that you will enjoy reading the book as
            much as I have enjoyed writing it.
        </blockquote>
        <cite>&mdash;&mdash; Laurie</cite>
    </box>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Box from './Box.vue';

export default defineComponent({
    name: 'SmallHero',
    components: {
        Box
    }
});
</script>

<style>
cite,
blockquote {
    display: inline;
}
blockquote {
    color: #666;
    line-height: 1.3em;
    padding-top: 1em;
    position: relative;
    z-index: 1;
    margin-bottom: 0.75em;
}
q,
blockquote {
    quotes: none;
}
cite {
    font-size: 18px;
    color: #595756;
    font-weight: bold;
    margin: 2em 0;
    margin-left: 38px;
}

blockquote::before {
    content: '“';
    color: #e0ddd7;
    font-family: georgia, serif;
    font-size: 12rem;
    position: absolute;
    left: -4rem;
    top: 4.7rem;
    z-index: -10;
}
</style>
