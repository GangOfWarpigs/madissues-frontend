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
  const emits = defineEmits(['close']);

  // Método para emitir el evento 'close' al hacer clic en el botón
  const closeComponent = () => {
    emits('close');
  }
</script>

<template>
  <div class="w-full bg-sky-100 rounded-xl p-5 pl-8 border border-[#1986E3]">
    <div class="flex flex-row justify-between">
      <b-icon-info-circle-fill class="mb-2 text-2xl text-[#1986E3]"/>
      <button @click="closeComponent" class="flex items-center">
        <b-icon-x class="text-[#1986E3] mr-1 scale-[200%]" />
      </button>
    </div>
    <p class="text-2xl text-[#1986E3]">{{props.title}}</p>
    <p class="text-[#1986E3]">{{props.content}}</p>
  </div>
</template>

<style scoped>

</style>