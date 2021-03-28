<template>
    <div class="p-10">
        <box class="p-6 px-20 text-2xl bg-white">
            <blockquote>
                <slot name="quote" />
            </blockquote>
            <cite>&mdash;&mdash; <slot name="cite"/></cite>
        </box>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Box from './Box.vue';

export default defineComponent({
    name: 'Quote',
    components: {
        Box
    }
});
</script>

<style scoped>
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
