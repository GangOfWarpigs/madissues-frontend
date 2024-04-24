<script setup lang="ts">
  import NavBar from '../../components/shared/NavBar.vue';

  const paths: Map<string, string> = new Map();
  paths.set("Home", "#")
  paths.set("Issues", "#")
  paths.set("FAQs", "#")
</script>

<template>
  <NavBar name="Delegación de Estudiantes EII" :paths="paths" />
  <div>
    <RouterView/>
  </div>
</template>

<style scoped>

</style>