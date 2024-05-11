<script setup lang="ts">
    import { computed, PropType } from "vue";
    import { Course } from "../../../../../api/organizations";

    const props = defineProps({
        subjectCard: {
            type: Object as PropType<Course>,
            required: true
        }
    })

    const gradientStyle = computed(() => {
        return {
            backgroundImage: `linear-gradient(to right, ${props.subjectCard.primary_color}, ${props.subjectCard.secondary_color})`
        };
    });
</script>

<template>
    <div :style="gradientStyle" class="flex flex-col justify-center relative rounded-xl p-5 py-6 overflow-hidden cursor-pointer hover:shadow-lg transition-all hover:shadow-blue-100 hover:scale-105">
        <!-- <img src="../../../../../assets/icons/subjects/subject_card_icon.svg" class="w-10 mb-1"/> -->
        <vue-icon :name="props.subjectCard.icon" class="w-10 mb-1 text-white"></vue-icon>
        <p class="text-white text-xl mb-1 font-semibold mt-4">{{ props.subjectCard.code }}</p>
        <p class="text-white">{{ props.subjectCard.name }}</p>
        <img src="../../../../../assets/images/subject_bg.webp" class="absolute bottom-0 left-0 z-0 w-full">
    </div>
</template>