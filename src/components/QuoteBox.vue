<template>
    <div class="p-5 bg-indigo-100">
        <quote>
            <template #quote>
                {{ body }}
            </template>
            <template #cite>
                {{ author }}
            </template>
        </quote>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Quote from './Quote.vue';

export default defineComponent({
    name: 'QuoteBox',
    components: {
        Quote
    },
    props: {
        body: { required: true, type: String },
        author: { required: true, type: String }
    }
});
</script>
