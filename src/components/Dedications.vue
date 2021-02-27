<template>
    <div>
        <group label="Dedications" sublabel="Laurie can personalize each copy of the book with a handwritten message.">
            <div v-for="(n, index) in dedications.length" :key="index">
                <dedication-container :index="index" :label="label(index)" />
            </div>
        </group>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Group from '@/components/Group.vue';
import DedicationContainer from '@/components/DedicationContainer.vue';
import { mapGetters } from 'vuex';

export default defineComponent({
    name: 'Dedications',
    components: {
        Group,
        DedicationContainer
    },
    computed: {
        ...mapGetters(['dedications'])
    },
    methods: {
        label(index: number) {
            return `Dedication for book ${index + 1}:`;
        }
    }
});
</script>

<style scoped>
input[type='textarea'] {
    height: 10em;
}
</style>
