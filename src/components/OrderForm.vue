<template>
    <div>
        <div>Order form</div>
        <v-form id="app" @submit="onSubmit">
            <p>
                <label for="name">Name</label>
                <v-field id="name" v-model="name" type="text" name="name" :rules="isRequired" />
                <error-message name="name" />
            </p>

            <p>
                <label for="age">Age</label>
                <input id="age" v-model="age" type="number" name="age" min="0" />
            </p>

            <p>
                <label for="movie">Favorite Movie</label>
                <select id="movie" v-model="movie" name="movie">
                    <option>Star Wars</option>
                    <option>Vanilla Sky</option>
                    <option>Atomic Blonde</option>
                </select>
            </p>

            <p>
                <input type="submit" value="Submit" />
            </p>
        </v-form></div
></template>

<script lang="ts">
import { Field as VField, Form as VForm, ErrorMessage } from 'vee-validate';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'OrderForm',
    components: {
        VForm,
        VField,
        ErrorMessage
    },
    data() {
        return {
            name: '',
            age: 0,
            movie: ''
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
