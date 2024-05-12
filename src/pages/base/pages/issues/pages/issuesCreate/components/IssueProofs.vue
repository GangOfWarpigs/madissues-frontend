<script setup lang="ts">

import {useField} from "vee-validate";

const { label, name } = defineProps<{
  label: string,
  name: string
}>()

const base64List: string[] = [];

const { value, errorMessage, setValue } = useField(() => name)

const handleFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement;
  const files = input.files;

  if (files) {
    const fileArray = Array.from(files);


    fileArray.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        base64List.push(e.target?.result as string);
        if (base64List.length === fileArray.length) {
          setValue(base64List);
        }
      };
      reader.readAsDataURL(file);
    })
  }
};

const removeImage = (index: number) => {
  base64List.splice(index, 1);
  setValue(base64List);
};

</script>

<template>
  <div class="flex flex-col items-center justify-center w-full">
    <label
        for="dropzone-file"
        class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
    >
      <div class="flex flex-col items-center justify-center pt-5 pb-6">
        <vue-icon name="bi-file-earmark-fill" scale="3" class="text-gray-400"/>
        <p class="text-sm text-gray-300 dark:text-gray-400">
          Drop files to upload
        </p>
        <p class="text-xs text-gray-300 dark:text-gray-400">
          PNG (MAX. 800x400px)
        </p>
        <input
            id="dropzone-file"
            type="file"
            class="hidden"
            accept=".png"
            multiple
            @change="handleFileChange"
        />
      </div>
    </label>
    <div v-if="value" class="flex flex-row items-center relative mt-7 gap-7">
      <div v-for="(image, index) in value" :key="index" class="flex flex-row">
        <img :src="image" alt="Preview" class="max-h-24 min-h-16 mb-4 rounded-lg border-2 p-2"/>
        <button
            @click="removeImage(index)"
            class="relative rounded-full top-[-10px] right-3 bg-red-500 w-[30px] h-[30px] text-white shadow-2xl hover:bg-red-600"
        >
          <vue-icon name="io-close" scale="1"></vue-icon>
        </button>
      </div>
    </div>
    <p v-if="errorMessage" class="text-red-500 mt-2">{{ errorMessage }}</p>

  </div>
</template>