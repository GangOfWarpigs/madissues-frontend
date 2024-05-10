<script setup lang="ts">
import {useField} from 'vee-validate'

const props = defineProps<{
  name: string,
  type: "email" | "password",
  placeholder: string,
}>()

const { value, errorMessage } = useField<string>(() => props.name);
</script>

<template>
  <div class="flex flex-col w-full">
    <div class="flex space-x-2 items-center h-10 rounded-3xl px-5 bg-[#F5F5F5] w-full py-1 text-[#7C7C7C]">
      <b-icon-envelope-fill v-if="props.type == 'email'" class="h-10 scale-150"/>
      <b-icon-lock-fill  v-if="props.type == 'password'" class="h-10 scale-150"/>
      <input :type="type" v-model="value" :placeholder="props.placeholder" class="bg-[#F5F5F5] w-full text-[#7C7C7C] text-sm outline-none font-medium" />
    </div>
    <span class="text-red-500" v-if="errorMessage">{{ errorMessage }}</span>
  </div>
</template>

<style scoped>

</style>