<template>
  <div class="w-full justify-center items-center flex ">
    <div class="text-center flex flex-col items-center">
      <div class=" h-[250px] w-[250px] bg-gray-100 rounded-full flex justify-center items-center bg-red-500 text-white">
        <vue-icon scale="9" name="md-warning-round"></vue-icon>
      </div>
      <h1 class="text-2xl text-gray-700 font-semibold mt-5">
        Oh, oh
      </h1>
      <h1 class="text-lg text-gray-500 mt-3">
        An error has happend.
      </h1>
      <h2 class="text-red-500">
        {{message}}
      </h2>

    </div>
  </div>
</template>
<script setup lang="ts">
  const { message } = defineProps<{message : string}>()
</script>