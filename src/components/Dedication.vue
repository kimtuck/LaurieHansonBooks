<template>
    <div>
        <group label="Dedications">
            <div v-for="(n, index) in books" :key="index">
                <input-area v-model="name" class="w-auto" :label="label(index)" :required="false" />
            </div>
        </group>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Group from '@/components/Group.vue';
import InputArea from '@/components/InputArea.vue';

export default defineComponent({
    name: 'Dedications',
    components: {
        Group,
        InputArea
    },
    props: {
        books: {
            type: Number,
            default: 3
        }
    },
    data() {
        return {
            dedications: []
        };
    },
    methods: {
        label(index: number) {
            return `Dedication for book ${index + 1}`;
        }
    }
});
</script>

<style scoped>
input[type='textarea'] {
    height: 10em;
}
</style>
