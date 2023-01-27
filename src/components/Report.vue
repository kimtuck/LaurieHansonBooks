<template>
    <div class="p-5 bg-indigo-100">
        <box class="mb-6">
            <h1>Completed Purchases with dedications</h1>
            <ul>
                <li v-for="entry in completedWithDedicationOnly" :key="entry.orderId">
                    <box class="p-2 m-5">
                        {{ entry.orderId }} {{ entry.contactInfo.name }} {{ entry.contactInfo.email }}
                        <ol>
                            <li v-for="(book, index) in entry.booksOrdered" :key="index">
                                <div>Book {{ index + 1 }} {{ book.bookId }}</div>
                                <div>Dedication: {{ book.dedication }}</div>
                            </li>
                        </ol>
                    </box>
                </li>
            </ul>
        </box>
        <box class="mb-6">
            <h1>Completed Purchases -- no dedication</h1>
            <ul>
                <li v-for="entry in completedNoDedication" :key="entry.orderId">
                    <box class="p-2 m-5">
                        {{ entry.orderId }} {{ entry.contactInfo.name }} {{ entry.contactInfo.email }}
                        <ol>
                            <li v-for="(book, index) in entry.booksOrdered" :key="index">
                                <div>Book {{ index + 1 }} {{ book.bookId }}</div>
                            </li>
                        </ol>
                    </box>
                </li>
            </ul>
        </box>
        <box class="p-2 mb-6">
            <h1>Started Paypay, did not complete</h1>
            <ul>
                <li v-for="entry in abandoned" :key="entry.orderId">
                    {{ entry.orderId }} {{ entry.contactInfo.name }} {{ entry.contactInfo.email }}
                </li>
            </ul>
        </box>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';
import Box from './Box.vue';

export default defineComponent({
    name: 'Report',
    components: { Box },
    data() {
        return {
            docs: []
        };
    },

    computed: {
        started(): any {
            return this.docs
                .filter((x: any) => x.orderState === 'Begin Purchase')
                .map((x: any) => ({ orderId: x.orderId.substring(0, 10) }))
                .reduce((accum: Array<{ orderId: string; count: number }>, x: any) => {
                    const entry = accum.find((a: any) => a.orderId === x.orderId);
                    if (!entry) {
                        accum.push({ orderId: x.orderId, count: 1 });
                    } else {
                        entry.count += 1;
                    }

                    return accum;
                }, []);
        },

        abandoned(): any {
            // eslint-disable-next-line

            console.log('started only', this.started);
            return this.docs.filter((x: any) => x.orderState === 'Show Paypal Dialog' && !x.details);
        },

        completedNoDedication(): any {
            return this.docs.filter(
                (x: any) =>
                    x.orderState === 'Show Paypal Dialog' && x.details && !x.booksOrdered.some((book: any) => book.dedication)
            );
        },

        completedWithDedicationOnly(): any {
            return this.docs.filter(
                (x: any) =>
                    x.orderState === 'Show Paypal Dialog' && x.details && x.booksOrdered.some((book: any) => book.dedication)
            );
        }
    },

    async created() {
        const result = await this.getOrders();
        this.docs = result.docs
            .map((x: { data: () => any }) => x.data())
            .filter(
                (x: any) =>
                    !['robert.h.hanson@rbc.com', 'f', 'robert.hanson@solutiondesign.com', 'ss'].includes(
                        x.contactInfo?.email
                    )
            )
            .sort((a: any, b: any) => (a.orderId > b.orderId ? 1 : b.orderId > a.orderid ? -1 : 0))
            .reverse();
    },

    methods: {
        ...mapActions(['getOrders'])
    }
});
</script>
