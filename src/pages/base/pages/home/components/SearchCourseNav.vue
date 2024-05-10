<script setup lang="ts">
    import { ref, onMounted } from 'vue';

    const props = defineProps({
        years: {
            type: Number,
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
    <nav class="bg-gray-100 rounded-full px-5 py-2 mt-8 relative overflow-hidden">
        <ul class="flex items-center z-10 relative">
            <li class="mr-6 cursor-pointer nav-item py-1 px-3" :key="0" @click="handleClick(0)">
                <p @click="$emit('updatedFilter', 0)" class="hover:text-gray-700 font-medium text-gray-500 transition duration-300 select-none">All courses</p>
            </li>
            <li v-for="(n, index) in props.years" :key="index+1" class=" mr-6 last:mr-0 cursor-pointer nav-item py-1 px-3" @click="handleClick(index + 1)">
                <p @click="$emit('updatedFilter', index+1)" class="hover:text-gray-700  font-medium text-gray-500 transition duration-300 select-none">{{ n }}º course</p>
            </li>
        </ul>
        <div class="bg-white rounded-full h-[80%] my-1 mx-3 z-0 left-0 absolute top-0 transition-all" :style="{ left: selectedOffset + 'px', width: width + 'px' }"></div>
    </nav>
</template>