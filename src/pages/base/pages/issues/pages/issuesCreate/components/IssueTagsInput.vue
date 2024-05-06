<script setup lang="ts">
import { TagsInputInput, TagsInputItem, TagsInputItemDelete, TagsInputItemText, TagsInputRoot } from 'radix-vue'
import {ref} from "vue";

import { Icon } from '@iconify/vue'

const modelValue = ref([])
const allowedTags = ['Marilola', 'Domingo', 'Carmelo']


</script>

<template>
  <TagsInputRoot
      v-model="modelValue"
      class="flex gap-2 items-center p-2 rounded-[0.75rem] bg-white w-full flex-wrap"
  >
    <TagsInputItem v-for="item in modelValue" :key="item" :value="item" class="flex items-center justify-center gap-2 bg-green-200 rounded p-1">
      <TagsInputItemText class="text-sm pl-1" />
      <TagsInputItemDelete class="p-0.5 rounded">
        <Icon icon="lucide:x" />
      </TagsInputItemDelete>
    </TagsInputItem>
    <TagsInputInput placeholder="Write..." class="text-sm focus:outline-none flex-1 rounded px-1" :options="allowedTags "/>
  </TagsInputRoot>
</template>

<style scoped>

</style>