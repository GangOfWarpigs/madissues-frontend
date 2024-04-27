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
  <div class="flex flex-col  rounded-2x w-full">
    <div class="flex space-x-2 items-center bg-[#F5F5F5] w-full py-1 px-1 text-[#7C7C7C]">
      <b-icon-envelope-fill v-if="props.type == 'email'" class="h-5"/>
      <b-icon-lock-fill  v-if="props.type == 'password'" class="h-5"/>
      <input :type="type" v-model="value" :placeholder="props.placeholder" class="bg-[#F5F5F5] w-full text-[#7C7C7C] outline-none font-medium" />
    </div>
    <span class="text-red-500" v-if="errorMessage">{{ errorMessage }}</span>
  </div>
</template>

<style scoped>

</style>