<template>
    <div class="w-full text-indigo-400 bg-pink-200">
        <purchase-form v-if="viewingState === ViewingState.Form" />
        <purchase-successful v-if="viewingState === ViewingState.SuccessfulPurchase" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PurchaseSuccessful from '@/components/PurchaseSuccessful.vue';
import PurchaseForm from '@/components/PurchaseForm.vue';
import { mapGetters, mapActions } from 'vuex';
import { ViewingState } from '@/store/index';

export default defineComponent({
    name: 'Purchase',
    components: {
        PurchaseForm,
        PurchaseSuccessful
    },
    data() {
        return {
            ViewingState
        };
    },
    computed: {
        ...mapGetters(['viewingState'])
    },
    created() {
        // this.viewingPurchaseForm();
    },
    methods: {
        ...mapActions(['viewingPurchaseForm'])
    }
});
</script>
