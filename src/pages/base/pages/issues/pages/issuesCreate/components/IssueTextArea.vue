<script setup lang="ts">

const props = defineProps<{
  placeholder: string
}>()

</script>

<template>
  <textarea class="resize-none w-full h-32 rounded-[0.75rem] outline-0 py-2.5 px-2.5 font-normal" :placeholder="props.placeholder" ref="textarea"/>
</template>

<style scoped>

</style>