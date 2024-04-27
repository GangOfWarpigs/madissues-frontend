<script setup lang="ts">
  interface Props{
    title: string,
    content: string
  }
  const {title, content} = withDefaults(defineProps<Props>(), {
    title:"Aquí va el título de la página",
    description: "Breve descripción de la página"
  })
</script>

<template>
  <div class="w-full bg-sky-100 rounded-xl p-5 pl-8 border border-[#1986E3]">
    <b-icon-info-circle-fill class="mb-2 text-2xl text-[#1986E3]"/>
    <p class="text-2xl text-[#1986E3]">{{title}}</p>
    <p class="text-[#1986E3]">{{content}}</p>
  </div>
</template>

<style scoped>

</style>