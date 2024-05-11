<script setup lang="ts">
import {useField} from 'vee-validate'

const props = defineProps<{
  name: string,
  type: string,
  placeholder: string,
}>()

const { value, errorMessage } = useField<string>(() => props.name);
</script>

<template>
  <div class="flex flex-col w-full text-gray-500">
    <div class="flex space-x-4 items-center h-10 rounded-3xl px-5 bg-gray-100 w-full py-1">
      <b-icon-envelope-fill v-if="props.type === 'email'" class="text-xl"/>
      <b-icon-lock-fill  v-if="props.type === 'password'" class="text-xl"/>
      <input :type="type" v-model="value" :placeholder="props.placeholder" class="bg-gray-100 text-gray-500 w-full text-sm outline-none font-medium" />
    </div>
    <span class="text-red-500" v-if="errorMessage">{{ errorMessage }}</span>
  </div>
</template>