<script setup lang="ts">
const props = defineProps<{
  text: string,
  type: "button" | "submit" | "reset" | undefined,
  color: string | undefined
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
      class="text-white font-medium px-3 py-1 rounded-3xl h-8 text-sm w-full"
      :style="{ backgroundColor: color }"
  >
    {{ props.text }}
  </button>
</template>