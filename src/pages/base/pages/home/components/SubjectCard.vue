<script setup lang="ts">
  import {computed, PropType} from "vue";
  
  interface subjectCardProps {
    icon: string,
    title: string,
    primaryColor: string,
    secondaryColor: string,
    numOfIssues: number,
    curse: number
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
  <div :style="gradientStyle" class="flex flex-col justify-center relative w-1/4 max-w-[20em] rounded-2xl p-5 overflow-hidden h-[10em]">
    <img src="../../../../../assets/images/subject_card_icon.svg" class="w-[2.4em] mb-1"/>
    <p class="text-white text-xl mb-1">{{props.subjectCard.title}}</p>
    <p class="text-white">{{props.subjectCard.numOfIssues}} issues</p>
    <img src="../../../../../assets/images/subject_card_vectorA.svg" class="absolute -bottom-0 right-0 z-0 w-full"/>
    <img src="../../../../../assets/images/subject_card_vectorB.svg" class="absolute -bottom-0 left-0 w-full" />
  </div>
</template>

<style scoped>

</style>