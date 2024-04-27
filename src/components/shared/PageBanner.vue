<script lang="ts" setup>
  import {computed} from "vue";
  import IncidentChild from "./IncidentChild.vue";
  import SearchBarChild from "./SearchBarChild.vue";
  interface Props{
    title: string,
    subtitle: string,
    primaryColor: string,
    secondaryColor: string,
    currentPage: string
  }
  const {title, subtitle, primaryColor, secondaryColor, currentPage} = withDefaults(defineProps<Props>(), {
    title:"Aquí va el título de la página",
    subtitle: "Breve descripción de la página",
    primaryColor:"#1986E3",
    secondaryColor:"#978EFF",
    currentPage:"faqs"
  })
  // Calculamos el estilo del degradado
  const gradientStyle = computed(() => {
    return {
      backgroundImage: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`
    };
  });
</script>

<template>
  <div :style="gradientStyle" class="h-60  w-full mx-auto mt-6 bg-gray-100 rounded-3xl flex flex-col justify-center items-center" >
    <p class="text-4xl font-bold mt-7 mb-8 text-white font-sans">{{ title }}</p>
    <p class="text-xl text-white font-sans">{{ subtitle }}</p>
    <IncidentChild v-if="currentPage === 'issues'" class="relative translate-y-14"/>
    <SearchBarChild v-if="currentPage === 'faqs'" class="relative translate-y-14"/>
  </div>
</template>

<style scoped>

</style>
