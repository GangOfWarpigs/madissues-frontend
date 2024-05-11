<script setup lang="ts">
  import NavBar from '../../components/shared/NavBar.vue';
</script>

<template>
  <NavBar name="Delegación de Estudiantes EII" username="Jose Peña Seco"/>
  <div class="flex justify-center w-full">
  <body class="w-full box-border max-w-[1200px] min-h-screen py-12 px-2">
    <RouterView/>
  </body>
  </div>
</template>