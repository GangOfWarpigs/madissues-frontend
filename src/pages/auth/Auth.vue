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
      <RouterView></RouterView>
</template>

<style scoped>

</style>