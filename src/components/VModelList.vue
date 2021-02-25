<template>
    <div>
        <div v-for="(n, index) in modelValue.length" :key="index">
            <slot :item="modelValue[index]" :index="index" @update:model-value="update(index)" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'VModelList',
    props: {
        modelValue: {
            required: true,
            type: Array
        }
    },
    methods: {
        update() {
            this.$emit(' @update:model-value', this.modelValue);
        }
    }
});
</script>

<style scoped>
input[type='textarea'] {
    height: 10em;
}
</style>
