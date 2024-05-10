<script setup lang="ts">

import {useRoute} from "vue-router";
import {computed} from "vue";

const route = useRoute()
const routePath = computed(() => route.path)
const parts = routePath.value.split("/")
const routeName = parts[parts.length - 1];
console.log(routeName)

import { ref, onMounted, onUnmounted } from 'vue';

const windowHeight = ref(window.innerHeight);

// Actualizar la altura de la ventana cuando se redimensiona
const updateWindowHeight = () => {
  windowHeight.value = window.innerHeight;
};

// Escuchar el evento de redimensionamiento de la ventana
onMounted(() => {
  window.addEventListener('resize', updateWindowHeight);
});

// Dejar de escuchar el evento de redimensionamiento cuando se desmonta el componente
onUnmounted(() => {
  window.removeEventListener('resize', updateWindowHeight);
});
</script>


<template>
  <main class="flex h-full" :style="{height: windowHeight + 'px','flex-direction': routeName === 'signin' ? 'row-reverse' : 'row'}">
    <section class="flex flex-1 flex-col items-center text-xs bg-gradient-to-r from-[#1986E3] to-[#978EFF]" >
      <div class="flex w-full  p-4" :style="{'justify-content': routeName === 'signin' ? 'flex-end' : 'flex-start'}">
        <img src="../../../src/assets/icons/madissues/transparent_logo_rectangle.svg" alt="Logo" width="150" height="150">
      </div>
      <div class="flex items-center flex-grow px-10 ">
        <p class="text-white font-bold text-lg">
          Lorem ipsum dolor sit ¡amet, consectetur adipiscing elit. Aenean maximus metus id justo molestie dictum. Integer vitae commodo enim, vel dapibus ante. Pellentesque et elementum mi.
        </p>
      </div>
    </section>
    <section class="flex flex-1 flex-col items-center space-y-10 text-xs">
      <RouterView></RouterView>
    </section>
  </main>

</template>

<style scoped>

</style>