<template>
    <group>
        <v-form id="app" @submit="onSubmit">
            <div class="text-2xl">Contact Information</div>
            <input-field v-model="nameValue" name="name" label="Name" :required="true" />
            <input-field v-model="emailValue" name="email" label="Email Address" :required="true" />
        </v-form>
    </group>
</template>

<script lang="ts">
import { Form as VForm } from 'vee-validate';
import { defineComponent } from 'vue';
import InputField from './InputField.vue';
import Group from '@/components/Group.vue';

const proptype = {
    type: String,
    default: '',
    required: true
};

const g = (field: string) => {
    return {
        // @ts-expect-error
        get() {
            // @ts-expect-error
            return this[field];
        },
        set(value: any) {
            // @ts-expect-error
            this.$emit(`update:${field}`, value);
        }
    };
};

export default defineComponent({
    name: 'OrderForm',
    components: {
        VForm,
        InputField,
        Group
    },
    props: {
        name: proptype,
        email: proptype
    },
    computed: {
        nameValue: g('name'),
        emailValue: g('email')
    },
    methods: {
        isRequired(value: any) {
            return value ? true : 'This field is required';
        },
        onSubmit() {}
    }
});
/*

*/
</script>
