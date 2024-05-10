<script setup lang="ts">
import { TagsInputItem, TagsInputItemDelete, TagsInputItemText, TagsInputRoot } from 'radix-vue'
import {Ref, ref} from "vue";

import { Icon } from '@iconify/vue'

const modelValue:Ref<string[]> = ref([])
const allowedTags = ['Matricula', 'Plazos', 'Examenes', 'GameFest', 'Asadero']
const selectedTag = ref('')

const addTag = () => {
  if (selectedTag.value && !modelValue.value.includes(selectedTag.value) && modelValue.value.length < 3) {
    modelValue.value.push(selectedTag.value)
  }
}

const deleteTag = () => {
  selectedTag.value = '';
}
</script>

<template>
  <div class="flex flex-col w-full">
    <TagsInputRoot
        v-model="modelValue"
        class="flex gap-2 items-center w-full flex-wrap"
    >
      <TagsInputItem v-for="item in modelValue" :key="item" :value="item" class="flex items-center justify-center gap-2 bg-rose-200 my-2 rounded py-1 px-3 text-xs text-rose-600">
        <TagsInputItemText />
        <TagsInputItemDelete @click="deleteTag">
          <Icon icon="lucide:x"/>
        </TagsInputItemDelete>
      </TagsInputItem>
    </TagsInputRoot>
    <select v-model="selectedTag" @change="addTag" class="focus:outline-none flex-1 px-2.5 py-2.5 bg-white rounded-md font-normal">
      <option disabled value="">Select a tag</option>
      <option v-for="tag in allowedTags" :key="tag" :value="tag">{{ tag }}</option>
    </select>
  </div>
</template>