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
                <span>{{ option.text }}</span>
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

<style lang="scss" scoped>
xx {
}
$primary-color: #00005c; // Change color here. C'mon, try it!
$text-color: mix(#000, $primary-color, 64%);

label {
    display: flex;
    cursor: pointer;
    font-weight: 500;
    position: relative;
    overflow: hidden;
    margin-bottom: 0.375em;
    /* Accessible outline */
    /* Remove comment to use */
    /*
		&:focus-within {
				outline: .125em solid $primary-color;
		}
	*/
    input {
        position: absolute;
        left: -9999px;
        &:checked + span {
            background-color: mix(#fff, $primary-color, 84%);
            &:before {
                box-shadow: inset 0 0 0 0.4375em $primary-color;
            }
        }
    }
    span {
        display: flex;
        align-items: center;
        padding: 0.375em 0.75em 0.375em 0.375em;
        border-radius: 99em; // or something higher...
        transition: 0.25s ease;
        &:hover {
            background-color: mix(#fff, $primary-color, 84%);
        }
        &:before {
            display: flex;
            flex-shrink: 0;
            content: '';
            background-color: #fff;
            width: 1.5em;
            height: 1.5em;
            border-radius: 50%;
            margin-right: 0.375em;
            transition: 0.25s ease;
            box-shadow: inset 0 0 0 0.125em $primary-color;
        }
    }
}
</style>
