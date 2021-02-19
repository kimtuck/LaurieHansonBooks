<template>
    <fieldset :id="id">
        <legend v-if="label">{{ label }}</legend>
        <div v-for="(option, index) in options" :key="option.text">
            <input
                :id="id + index"
                :name="id"
                type="radio"
                :value="option.value"
                :checked="option.value === value"
                :class="inputClass"
                :disabled="disabled"
                :required="required"
                @change="updateValue(option.value)"
            />
            <label :for="id + index">{{ option.text }}</label>
            <slot v-if="option.value === value" :name="option.value" />
        </div>
    </fieldset>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    model: {
        event: 'change'
    },
    props: {
        id: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        },
        modelValue: {
            required: true,
            type: String
        },
        options: {
            type: [Array],
            required: true
        },
        required: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        inputClass: {
            type: [String, Object],
            default: ''
        }
    },
    methods: {
        updateValue(value: any) {
            this.$emit('update:modelValue', value);
        }
    }
});
</script>
