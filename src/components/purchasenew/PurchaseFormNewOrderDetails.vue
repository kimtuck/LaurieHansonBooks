<template>
    <div>
        <dropdown
            class="my-dropdown-toggle"
            :options="arrayOfObjects"
            :selected="object"
            v-on:updateOption="methodToRunOnSelect"
            :placeholder="'Select an Item'"
            :closeOnOutsideClick="boolean"
        >
        </dropdown>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OrderDetails from '@/Library/OrderDetails';
import cloneDeep from 'lodash.clonedeep';
import dropdown from 'vue-dropdowns';

export default defineComponent({
    name: 'PurchaseFormNewOrderDetails',
    components: {},
    data() {
        return {
            //arrayOfObjects: [1,2,3,4,5].map(x=> { id: 1, name: `${x} book${x === 1 ? '' : 's'}`})
        };
    },
    props: {
        orderDetails: {
            type: OrderDetails,
            required: true,
        },
    },
    computed: {},
    methods: {
        updateOrderDetails(orderDetails: OrderDetails) {
            this.$emit('input', cloneDeep(orderDetails));
        },
    },
});
</script>'
'
<style scoped>
.my-dropdown-toggle {
    border-radius: 5px;

    ::v-deep .dropdown-toggle {
        color: tomato;
        font-size: 25px;
        font-weight: 800;
    }

    ::v-deep .dropdown-toggle-placeholder {
        color: #c4c4c4;
    }
}
</style>