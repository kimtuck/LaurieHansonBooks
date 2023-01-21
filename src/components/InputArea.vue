<template>
    <div>
        <label class="block m-2">
            <div for="name" class="text-gray-700">{{ label }} ({{ maxChars - modelValue.length }} characters left)</div>
            <textarea
                rows="4"
                :name="name"
                :value="modelValue"
                :rules="isRequired"
                :maxlength="maxChars"
                @input="$emit('update:modelValue', $event.target.value)"
            />
            <error-message class="text-sm text-red-600" name="name" />
        </label>
    </div>
</template>

<script lang="ts">
import { ErrorMessage } from 'vee-validate';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'InputArea',
    components: {
        ErrorMessage
    },

    data() {
        return {
            maxChars: 300
        };
    },

    props: {
        modelValue: {
            required: true,
            type: String
        },
        name: {
            required: true,
            type: String
        },
        label: {
            required: true,
            type: String
        }
    },
    methods: {
        isRequired(value: any) {
            return value ? true : 'This field is required';
        }
    }
});
</script>

<style scoped>
textarea {
    border: solid black 1px;
    width: 100%;
    padding: 4px;
}
</style>
