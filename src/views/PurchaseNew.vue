<template>
    <div class="w-full text-indigo-400 bg-pink-200">
        <purchase-form-new v-if="viewingState === ViewingState.Form" />
        <purchase-successful-new v-if="viewingState === ViewingState.SuccessfulPurchase" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PurchaseSuccessfulNew from '@/components/purchasenew/PurchaseSuccessfulNew.vue';
import PurchaseFormNew from '@/components/purchasenew/PurchaseFormNew.vue';
import { mapGetters, mapActions } from 'vuex';
import { ViewingState } from '@/store/index';

export default defineComponent({
    name: 'PurchaseNew',
    components: {
        PurchaseFormNew,
        PurchaseSuccessfulNew
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
