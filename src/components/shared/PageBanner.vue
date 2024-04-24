<script lang="ts" setup>
  import {computed} from "vue";

  interface Props{
    title: string,
    subtitle: string,
    primaryColor: string,
    secondaryColor: string
  }
  const {title, subtitle, primaryColor, secondaryColor} = withDefaults(defineProps<Props>(), {
    title:"Aquí va el título de la página",
    subtitle: "Breve descripción de la página",
    primaryColor:"#1986E3",
    secondaryColor:"#978EFF"
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
    <h2 class="text-4xl font-bold mb-9 text-white font-sans">{{ title }}</h2>
    <p class="text-xl text-white font-sans">{{ subtitle }}</p>
  </div>
</template>

<style scoped>

</style>
