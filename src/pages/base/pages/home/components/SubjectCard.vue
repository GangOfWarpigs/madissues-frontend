<script setup lang="ts">
  import {computed} from "vue";

  interface Props{
    title: string,
    icon: string,
    primaryColor: string,
    secondaryColor: string,
  }
  const {title, icon, primaryColor, secondaryColor} = withDefaults(defineProps<Props>(), {
    title:"Titulo de asignatura",
    icon: "URL",
    primaryColor:"#1986E3",
    secondaryColor:"#978EFF",
  })

  const subject = {
    title,
    icon,
    primaryColor,
    secondaryColor
  };

  // Calculamos el estilo del degradado
  const gradientStyle = computed(() => {
    return {
      backgroundImage: `linear-gradient(to right, ${subject.primaryColor}, ${subject.secondaryColor})`
    };
  });
</script>

<template>
  <div :style="gradientStyle" class="w-full">
    <p class="text-2xl">{{subject.title}}</p>
    <p> {{subject.icon}} </p>
    <v-stage ref="stage" :config="stageSize">
      <v-layer>
        <v-shape :config="shapeConfig"/>
      </v-layer>
    </v-stage>
  </div>
</template>

<style scoped>

</style>