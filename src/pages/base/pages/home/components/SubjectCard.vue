<script setup lang="ts">
    import { computed, PropType } from "vue";
  
    interface subjectCardProps {
        icon: string,
        title: string,
        primaryColor: string,
        secondaryColor: string,
        numOfIssues: number,
        course: number
    }

    const props = defineProps({
        subjectCard: {
            type: Object as PropType<subjectCardProps>,
            required: true
        }
    })

    const gradientStyle = computed(() => {
        return {
            backgroundImage: `linear-gradient(to right, ${props.subjectCard.primaryColor}, ${props.subjectCard.secondaryColor})`
        };
    });
</script>

<template>
    <div :style="gradientStyle" class="flex flex-col justify-center relative rounded-xl p-5 py-6 overflow-hidden cursor-pointer hover:shadow-lg hover:shadow-blue-100 hover:scale-105">
        <img src="../../../../../assets/icons/subjects/subject_card_icon.svg" class="w-10 mb-1"/>
        <p class="text-white text-xl mb-1 font-semibold mt-4">{{ props.subjectCard.title }}</p>
        <p class="text-white">{{props.subjectCard.numOfIssues}} issues</p>
        <img src="../../../../../assets/images/subject_bg.webp" class="absolute bottom-0 left-0 z-0 w-full">
    </div>
</template>