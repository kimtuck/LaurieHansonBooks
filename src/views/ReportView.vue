<template>
    <div class="w-full text-indigo-400 bg-green-200">
        <report />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Report from '@/components/Report.vue';

export default defineComponent({
    name: 'ReportView',
    components: {
        Report
    }
});
</script>
