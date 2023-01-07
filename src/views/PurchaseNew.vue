<template>
    <div class="w-full text-indigo-400 bg-green-200">
        <purchase-form-new-container v-if="viewingState === ViewingState.Form" />
        <purchase-successful-new v-if="viewingState === ViewingState.SuccessfulPurchase" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PurchaseSuccessfulNew from '@/components/purchasenew/PurchaseSuccessfulNew.vue';
import PurchaseFormNewContainer from '@/components/purchasenew/PurchaseFormNewContainer.vue';
import { mapGetters, mapActions } from 'vuex';
import { ViewingState } from '@/store/index';

export default defineComponent({
    name: 'PurchaseNew',
    components: {
        PurchaseFormNewContainer,
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
