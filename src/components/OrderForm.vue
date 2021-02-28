<template>
    <group>
        <v-form id="app" @submit="onSubmit">
            <div class="text-2xl">Contact Information</div>
            <input-field v-model="nameValue" name="name" label="Name" :required="true" />
            <input-field v-model="emailValue" name="email" label="Email Address" :required="true" />
            <div class="mt-5" />
            <div class="text-2xl">Shipping Information</div>
            <input-field v-model="addressValue" name="address" label="Address" :required="true" />
            <input-field v-model="cityValue" name="city" label="City" :required="true" />
            <input-field v-model="stateValue" name="state" label="State" :required="true" />
            <input-field v-model="zipValue" name="zip" label="Zip" :required="true" />
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
        email: proptype,
        address: proptype,
        city: proptype,
        state: proptype,
        zip: proptype
    },
    computed: {
        nameValue: g('name'),
        emailValue: g('email'),
        addressValue: g('address'),
        cityValue: g('city'),
        stateValue: g('state'),
        zipValue: g('zip')
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
/*

*/
</script>
