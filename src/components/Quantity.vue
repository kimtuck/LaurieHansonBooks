<template>
    <div>
        <div>Order Quantity</div>
        <div>{{ quantity }}</div>
        <radio-button-group id="radio" v-model="quantity" label="one" :options="options" />
        <input-field type="radio" name="quantity">One book</input-field>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import RadioButtonGroup from '@/components/RadioButtonGroup.vue';

export default defineComponent({
    name: 'Quantity',
    components: {
        RadioButtonGroup
    },
    props: {
        // eslint-disable-next-line
        options: {
            default: [],
            required: true
        }
    },
    data() {
        return {
            quantity: 0
        };
    }
});
</script>
