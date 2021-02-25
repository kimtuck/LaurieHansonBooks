<template>
    <dedication v-model="dedicationValue" :label="label" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Dedication from '@/components/Dedication.vue';
import { mapGetters, mapActions } from 'vuex';

export default defineComponent({
    name: 'DedicationContainer',
    components: {
        Dedication
    },
    props: {
        index: {
            required: true,
            type: Number
        },
        label: {
            required: true,
            type: String
        }
    },
    computed: {
        ...mapGetters(['dedication']),
        dedicationValue: {
            // @ts-expect-error
            get() {
                // @ts-expect-error
                return this.dedication(this.index);
            },
            set(value: any) {
                this.updateDedication({
                    dedication: value,
                    index: this.index
                });
            }
        }
    },
    methods: {
        ...mapActions(['updateDedication'])
    }
});
</script>
