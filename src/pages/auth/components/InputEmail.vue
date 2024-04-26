<script setup lang="ts">
import {useField} from 'vee-validate'

const props = defineProps({
  email: {
    type: String,
    required: true,
  },
});

const {value, errorMessage } = useField(() => props.email);



</script>

<template>
  <div class="flex space-x-2 rounded-b-lg bg-[#F5F5F5] w-full py-1 px-1 text-[#7C7C7C]">
    <b-icon-envelope-fill class="h-5"/>
    <input class="bg-[#F5F5F5] w-full text-[#7C7C7C] outline-none" v-model="value" placeholder="Email"/>
    <span class="error" v-if="errorMessage">{{ errorMessage }}</span>
  </div>

</template>

<style scoped>

</style>