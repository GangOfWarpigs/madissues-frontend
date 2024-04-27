<script setup lang="ts">
import {useField} from 'vee-validate'

const props = defineProps<{
  email: string,
  placeholder: string,
}>()


const { value, errorMessage } = useField<string>(() => props.email);
</script>

<template>
  <div class="flex flex-col  rounded-2x w-full">
    <div class="flex space-x-2 items-center bg-[#F5F5F5] w-full py-1 px-1 text-[#7C7C7C]">
      <b-icon-envelope-fill class="h-5"/>
      <input type="email" v-model="value" :placeholder="props.placeholder" class="bg-[#F5F5F5] w-full text-[#7C7C7C] outline-none" />
    </div>
    <span class="text-red-500" v-if="errorMessage">{{ errorMessage }}</span>
  </div>
</template>

<style scoped>

</style>