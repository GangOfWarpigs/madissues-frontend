<script setup lang="ts">
  import {computed} from "vue";
  interface Props{
    icon: string,
    title: string,
    primaryColor: string,
    secondaryColor: string,
    numOfIssues: number
  }
  const {icon, title, primaryColor, secondaryColor, numOfIssues} = withDefaults(defineProps<Props>(), {
    icon: "",
    title:"Aquí va el título de la asignatura",
    primaryColor:"#1986E3",
    secondaryColor:"#978EFF",
    numOfIssues: 0
  })
  // Calculamos el estilo del degradado
  const gradientStyle = computed(() => {
    return {
      backgroundImage: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`
    };
  });
</script>
<template>
  <div :style="gradientStyle" class="flex flex-col justify-center relative w-1/4 rounded-2xl p-5 overflow-hidden h-[10em]">
    <img src="../../../../../assets/images/subject_card_icon.svg" class="w-[2.4em] mb-1"/>
    <p class="text-white text-xl mb-1">{{title}}</p>
    <p class="text-white">{{numOfIssues}} issues</p>
    <img src="../../../../../assets/images/subject_card_vectorA.svg" class="absolute -bottom-0 right-0 z-0 w-full"/>
    <img src="../../../../../assets/images/subject_card_vectorB.svg" class="absolute -bottom-0 left-0 w-full" />
  </div>
</template>



<style scoped>

</style>