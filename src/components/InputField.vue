<template>
    <div>
        <label class="block m-2">
            <div for="name" class="text-gray-700">{{ label }}</div>
            <v-field
                :name="name"
                :type="inputtype"
                class="block w-full border-2 border-black border-solid resize-y"
                :value="modelValue"
                :rules="isRequired"
                @input="$emit('update:modelValue', $event.target.value)"
            />
            <error-message class="text-sm text-red-600" name="name" />
        </label>
    </div>
</template>

<script lang="ts">
import { Field as VField, ErrorMessage } from 'vee-validate';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'InputField',
    components: {
        VField,
        ErrorMessage
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
        },
        inputtype: {
            type: String,
            default: 'text'
        }
    },
    methods: {
        isRequired(value: any) {
            return value ? true : 'This field is required';
        }
    }
});
</script>
