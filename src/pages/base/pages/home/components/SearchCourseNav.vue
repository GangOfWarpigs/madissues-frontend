<script setup lang="ts">
    import { PropType, ref, onMounted } from 'vue';

    const props = defineProps({
        n_years: {
            type: Object as PropType<number>,
            required: true
        }
    });

    const selectedIndex = ref(0);
    const selectedOffset = ref(0);
    const width = ref(0);

    const handleClick = (index: number) => {
        selectedIndex.value = index;
        const selectedItem = document.querySelector('.nav-item:nth-child(' + (index + 1) + ')');
        if (selectedItem) {
            const parentElement = selectedItem.parentElement;
            if (parentElement) {
                const rect = selectedItem.getBoundingClientRect();
                const parentRect = parentElement.getBoundingClientRect();
                selectedOffset.value = rect.left - parentRect.left;
                width.value = rect.width * 1.22;
            }
        }
    };

    onMounted(() => {
        handleClick(0);
    });
</script>

<template>
    <div class="flex flex-col items-center">
        <h2 class="text-2xl font-semibold text-slate-700 select-none">Search by course</h2>
        <nav class="bg-gray-100 rounded-full px-5 py-2 mt-8 relative overflow-hidden">
            <ul class="flex items-center z-10 relative">
                <li class="mr-6 cursor-pointer nav-item" :key="0" @click="handleClick(0)">
                    <p @click="$emit('updatedFilter', 0)" class="hover:text-slate-700 font-medium text-slate-500 transition duration-300 select-none">All courses</p>
                </li>
                <li v-for="(n, index) in props.n_years" :key="index+1" class="mr-6 last:mr-0 cursor-pointer nav-item" @click="handleClick(index + 1)">
                    <p @click="$emit('updatedFilter', index+1)" class="hover:text-slate-700 font-medium text-slate-500 transition duration-300 select-none">{{ n }}º course</p>
                </li>
            </ul>
            <transition name="slide">
                <div class="bg-white rounded-full h-[80%] my-1 mx-3 z-0 left-0 absolute top-0" :style="{ left: selectedOffset + 'px', width: width + 'px' }"></div>
            </transition>
        </nav>
    </div>
</template>