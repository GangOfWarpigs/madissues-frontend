<script setup lang="ts">
const props = defineProps<{
  text: string,
  type: "button" | "submit" | "reset" | undefined,
}>()

const emit = defineEmits(['click'])

function handleClick() {
  emit('click')
}
</script>

<template>
  <button
      :type="props.type"
      @click="handleClick"
      class="bg-blue-500 text-white font-medium px-3 py-1 rounded-3xl w-full"
  >
    {{ props.text }}
  </button>
</template>
