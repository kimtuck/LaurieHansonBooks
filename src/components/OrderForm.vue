<template>
    <div>
        <div>Order form</div>
        <v-form id="app" @submit="onSubmit">
            <div>Name: {{ name }}</div>
            <input-field v-model="name" name="name" label="Name" :required="true" />
            <input-field v-model="address" name="address" label="Address" :required="true" />
            <input-field v-model="city" name="city" label="City" :required="true" />
            <input-field v-model="state" name="state" label="State" :required="true" />
            <input-field v-model="zip" name="zip" label="Zip" :required="true" />

            <p>
                <input type="submit" value="Submit" />
            </p>
        </v-form></div
></template>

<script lang="ts">
import { Form as VForm } from 'vee-validate';
import { defineComponent } from 'vue';
import InputField from './InputField.vue';

export default defineComponent({
    name: 'OrderForm',
    components: {
        VForm,
        InputField
    },
    data() {
        return {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        };
    },
    methods: {
        isRequired(value: any) {
            return value ? true : 'This field is required';
        },
        onSubmit(values: any) {
            console.log(JSON.stringify(values, null, 2));
        }
    }
});
</script>
