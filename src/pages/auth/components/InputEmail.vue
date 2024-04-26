<script setup lang="ts">
import {useField} from 'vee-validate'
import * as yup from 'yup'

const props = defineProps({
  email: {
    type: String,
    required: true,
  },
});

const emailRules = yup.string()
    .required('Email is required')
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email address')
    .email('Please enter a valid email address')


const {value, errorMessage } = useField(props.email, emailRules);
</script>

<template>
  <div class="flex flex-col  rounded-2x w-full">
    <div class="flex space-x-2 items-center bg-[#F5F5F5] w-full py-1 px-1 text-[#7C7C7C]">
      <b-icon-envelope-fill class="h-5"/>
      <input class="bg-[#F5F5F5] w-full text-[#7C7C7C] outline-none" v-model="value" placeholder="Email" :rules="emailRules"/>
    </div>
    <span class="text-red-500" v-if="errorMessage">{{ errorMessage }}</span>
  </div>

</template>

<style scoped>

</style>