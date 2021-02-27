<template>
    <group>
        <div class="text-2xl text-black ">Winner, 2017</div>
        <div class="flex flex-row justify-center rounded-md">
            <img class="w-1/4 h-auto m-4 bg-white border-2 border-black rounded-md" src="@assets/PurpleDragonflyLogo.png" />
        </div>
        <div>Treasure's Gift is a 2017 winner of the</div>
        <div>Purple Dragonfly Award</div>
        <div>for Best Children's Book in the Animal/Pet category.</div>
    </group>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Group from '@/components/Group.vue';

export default defineComponent({
    name: 'PurpleDragonfly',
    components: {
        Group
    }
});
</script>
