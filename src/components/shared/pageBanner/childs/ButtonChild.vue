<script setup lang="ts">
    const props = defineProps({
        route: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <div class="relative translate-y-[4.2em] z-1">
        <router-link :to="props.route" class="shadow-xl shadow-slate-200 font-semibold bg-white border-2 hover:bg-gradient-to-r transition-all hover:text-white hover:bg-[#5B8AF2]  via-[#5B8AF2] hover:from-[#978EFF] border-[#978EFF] text-[#978EFF] px-6 py-2 rounded-[0.8em]">{{ props.text }}</router-link>
    </div>
</template>