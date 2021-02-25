<template>
    <div>
        <input-area v-model="dedication" :name="label" class="w-auto" :label="label" :required="false" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InputArea from '@/components/InputArea.vue';

export default defineComponent({
    name: 'Dedication',
    components: {
        InputArea
    },
    props: {
        modelValue: {
            required: true,
            type: String
        },
        label: {
            required: true,
            type: String
        }
    },
    computed: {
        dedication: {
            // @ts-expect-error
            get() {
                // @ts-expect-error
                return this.modelValue;
            },
            set(value: string) {
                this.$emit('update:modelValue', value);
            }
        }
    }
});
</script>

<style scoped>
input[type='textarea'] {
    height: 10em;
}
</style>
