<template>
    <div>
        <order-form v-model:name="name" v-model:email="email" /></div
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
            // @ts-expect-error
            const newOrderForm = { ...this.orderForm, ...{ [field]: value } };
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
        email: d('email')
    },
    methods: {
        ...mapActions(['updateOrderForm'])
    }
});
</script>
