<template>
    <fieldset :id="id">
        <legend v-if="label">{{ label }}</legend>
        <div v-for="(option, index) in options" :key="option.text">
            <label :for="id + index">
                <input
                    :id="id + index"
                    :name="id"
                    type="radio"
                    :value="option.value"
                    :checked="option.value === modelValue"
                    :class="inputClass"
                    :disabled="disabled"
                    :required="required"
                    @change="updateValue(option.value)"
                />
                <span><slot :option="option"/></span>
                <slot v-if="option.value === modelValue" :name="option.value" />
            </label>
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
            default: ''
        },
        modelValue: {
            required: true,
            type: [String, Number]
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

