<script setup lang="ts">
import {Degree} from "@/api/organizations.ts";
import {useField} from "vee-validate";

const props = defineProps<{
  name: string,
  data: Degree[],
}>()

const { value: selectedDegree, errorMessage } = useField<string>(() => props.name);

</script>

<template>
  <div class="flex flex-col w-full text-gray-500">
      <select v-model="selectedDegree" class="flex space-x-2 items-center rounded-full px-3 font-semibold bg-gray-100 py-1 h-10 text-gray-400 text-sm">
        <option v-for="degree in props.data" :key="degree.id" :value="degree.id">{{ degree.name }}</option>
      </select>
      <span class="text-red-500" v-if="errorMessage">{{ errorMessage }}</span>
  </div>
</template>

<style scoped>

</style>