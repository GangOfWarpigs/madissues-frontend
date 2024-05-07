<script setup lang="ts">
  import { defineEmits } from 'vue';

  const emits = defineEmits(['search']);

  const handleSearch = (event: Event) => {
    const query = (event.target as HTMLInputElement).value;
    emits('search', query);
  };
</script>

<template>
  <div class="flex flex-row drop-shadow-2xl justify-center items-center w-full">
    <div class=" relative transform translate-x-9 h-fit bg-white px-2 py-1 rounded-[0.5em]">
      <b-icon-search />
    </div>
    <input type="text" class="rounded-[0.5em] mr-3 px-9 py-1 text-gray-700" placeholder="Search here" @input="handleSearch($event)"/>
    <router-link to="./faqs/create" class="bg-white border-2 border-[#978EFF] text-[#978EFF] px-4 py-1 rounded-[0.8em]">Ask us</router-link>
  </div>
</template>

<style scoped>

</style>