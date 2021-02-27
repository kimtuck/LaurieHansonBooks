<template>
    <div>
        <div>XXXX XXX Order form {{ orderForm }}</div>
        <order-form
            v-model:name="name"
            v-model:email="email"
            v-model:address="address"
            v-model:city="city"
            v-model:state="state"
            v-model:zip="zip"
        /></div
></template>

<script lang="ts">
import { defineComponent } from 'vue';
import OrderForm from '@/components/OrderForm.vue';
import { mapGetters, mapActions } from 'vuex';

const d = (field: string) => {
    return {
        // @ts-expect-error
        get() {
            // @ts-expect-error
            return this.orderForm[field];
        },
        set(value: any) {
            console.log('update orderForm', field, value);
            // @ts-expect-error
            const newOrderForm = { ...this.orderForm, ...{ [field]: value } };
            console.log('update orderForm, new orderForm', newOrderForm);
            // @ts-expect-error
            this.updateOrderForm({ orderForm: newOrderForm });
        }
    };
};

export default defineComponent({
    name: 'OrderFormContainer',
    components: {
        OrderForm
    },
    computed: {
        ...mapGetters(['orderForm']),
        name: d('name'),
        email: d('email'),
        address: d('address'),
        city: d('city'),
        state: d('state'),
        zip: d('zip')
    },
    methods: {
        ...mapActions(['updateOrderForm'])
    }
});
</script>
