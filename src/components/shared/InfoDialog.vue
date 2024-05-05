<script setup lang="ts">
  const props = defineProps({
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  })

</script>

<template>
  <div class="w-full bg-sky-100 rounded-xl p-5 pl-8 border border-[#1986E3]">
    <b-icon-info-circle-fill class="mb-2 text-2xl text-[#1986E3]"/>
    <p class="text-2xl text-[#1986E3]">{{props.title}}</p>
    <p class="text-[#1986E3]">{{props.content}}</p>
  </div>
</template>

<style scoped>

</style>