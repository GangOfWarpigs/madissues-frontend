<script setup lang="ts">
  const emits = defineEmits(['search']);

  const handleSearch = (event: Event) => {
    const query = (event.target as HTMLInputElement).value;
    emits('search', query);
  };
</script>

<template>
  <div class="flex flex-row drop-shadow-2xl justify-center items-center w-full">
    <div class=" relative transform translate-x-9 h-fit bg-transparent px-2 py-1 rounded-xl">
      <vue-icon name="io-search" class="text-gray-400" />
    </div>
    <input type="text" class="hover:bg-gray-100 rounded-xl transition-all mr-3 text-gray-700 py-2 px-12" placeholder="Search here" @input="handleSearch($event)"/>
      <router-link to="./faqs/create" class="font-semibold bg-white border-2 hover:bg-gradient-to-r transition-all hover:text-white hover:bg-[#5B8AF2]  via-[#5B8AF2] hover:from-[#978EFF] border-[#978EFF] text-[#978EFF] px-6 py-2 rounded-[0.8em]">Ask us</router-link>
  </div>
</template>

<style scoped>

</style>