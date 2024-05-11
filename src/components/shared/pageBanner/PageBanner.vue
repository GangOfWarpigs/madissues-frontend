<script setup lang="ts">
    import { computed, PropType } from "vue";

    interface dataProps {
        title: string,
        subtitle: string,
        primaryColor: string,
        secondaryColor: string,
    }

    const props = defineProps({
        data: {
            type: Object as PropType<dataProps>,
            required: true
        }
    });

    const gradientStyle = computed(() => {
        return {
            backgroundImage: `linear-gradient(to right, ${props.data?.primaryColor}, ${props.data?.secondaryColor})`
        };
    });
</script>

<template>
    <div :style="gradientStyle" class="h-60 w-full rounded-2xl flex flex-col justify-center items-center" >
        <p class="text-4xl font-bold mb-8 text-white font-sans">{{ props.data.title }}</p>
        <p class="text-xl text-white font-sans">{{ props.data.subtitle }}</p>
        <slot></slot>
    </div>
</template>