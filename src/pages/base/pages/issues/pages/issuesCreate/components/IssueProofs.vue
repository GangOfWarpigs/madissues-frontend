<script setup lang="ts">
import {  MultipleFileUpload } from '@canopassoftware/vue-file-upload'

let uploadedFiles: Array<{
  fileType: string
  fileUrl: string
  fileName: string
}> = []


async function handleMultipleFiles(files: any) {
  for (var i = 0; i < files.length; i++) {
    console.log("Uploading file: ", files[i].file.name)
    uploadedFiles.push({
      fileType: 'image',
      fileUrl: 'https://picsum.photos/300/224',
      fileName: 'example-image.jpg'
    })
  }
  await new Promise((resolve) => setTimeout(resolve, 2000))
}

</script>

<template>
  <section class="bg-[#F5F5F5] rounded-2xl flex flex-col w-full px-10 py-10 font-medium text-sm gap-4">
    <p class="text-[#404040]">Proofs</p>
    <p class=" text-[#999999] font-normal">If you have some screen shots of mails sended to email, proofs about test questions etc...</p>
    <div class="file-upload">
      <MultipleFileUpload
          :removeBtnText="'remove'"
          :uploadBtnText="'Save'"
          :progressBtnText="'Saving...'"
          :uploadedFiles="uploadedFiles"
          :callback="handleMultipleFiles"
          class="file-upload"
      >
        <template v-slot="file">
          <div class="text-[#989898]">
            <div class="flex items-center justify-center text-[#989898]">
              <label
                  v-if="!file.file"
                  for="dropzone-file"
                  class="flex flex-col items-center justify-center w-full h-56 rounded-2xl cursor-pointer bg-[#E9E9E9]"
              >
                <div class="flex flex-col items-center justify-center py-5 px-10 ">
                  <vue-icon name="bi-file-earmark-fill" scale="3"/>
                  <p class="mb-2 text-sm text-gray-500">
                    Drop files to upload
                  </p>
                </div>
              </label>
              <div v-else>
                <div class="w-full h-16">
                  <img
                      class="h-full w-32 object-contain rounded-2xl"
                      :src="file.file.previewUrl"
                  />
                </div>
              </div>
            </div>
            <p class="flex items-center justify-center text-center ">
              {{ file.file ? file.file.previewName : '' }}
            </p>
          </div>
        </template>
      </MultipleFileUpload>
    </div>
  </section>
</template>

<style scoped>
</style>