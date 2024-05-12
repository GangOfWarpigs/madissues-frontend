<script setup lang="ts">
    const { item } = defineProps<{
        item: string
    }>();
</script>

<template>
    <div class="flex justify-center mt-[100px]">
        <div class="flex justify-center flex-col items-center">
            <div class="text-gray-600 h-[200px] w-[200px] bg-gray-100 rounded-full flex justify-center items-center">
                <vue-icon scale="6" name="bi-inbox-fill"></vue-icon>
            </div>
            <h1 class="mt-6 font-semibold text-3xl">Oh, oh</h1>
            <h2 class="mt-2 text-gray-500 text-xl">Looks like there is no {{ item }} yet</h2>
        </div>
    </div>
</template>