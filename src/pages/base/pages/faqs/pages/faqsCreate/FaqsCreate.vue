<script setup lang="ts">
import InfoDialog from "../../../../../../components/shared/InfoDialog.vue";
import {ref} from "vue";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import IssueTagSelector from "../../../../../../pages/base/pages/issues/pages/issuesCreate/components/IssueTagsInput.vue";
import FaqTagsInput from "@/pages/base/pages/faqs/pages/faqsCreate/components/FaqTagsInput.vue";


const showInfoDialog = ref(true);

const closeInfoDialog = () => {
  showInfoDialog.value = false;
};
const goBack = () => {
  window.history.back();
};
const editor = ClassicEditor;
const editorValue = ref('');
const editorConfig = {
  // Editor configuration can be added here
  height: 500
};
</script>

<template>
  <main class="flex flex-col space-y-5">
    <h1 class="self-center text-4xl font-semibold mb-4">Add a public question</h1>
    <InfoDialog v-if="showInfoDialog" @close="closeInfoDialog" title="Writing a good question" content="Summarize your problem in a one-line title, describe your
     question in more detail and add tags which help surface your question to members of the organization."/>
    <div class="bg-[#F5F5F5] p-4 rounded-2xl">
      <h2 class="text-[#404040] font-semibold mb-1">What is your question?</h2>
      <ckeditor
          :editor="editor"
          v-model="editorValue"
          :config="editorConfig"
      ></ckeditor>
    </div>
    <div class="w-full flex flex-col bg-[#F5F5F5] p-4 rounded-2xl">
      <h2 class="text-[#404040] font-semibold mb-1">Tags</h2>
      <p class="text-[#404040] mb-1">Add up to 3 tags to describe what your question is about.</p>
      <FaqTagsInput/>
    </div>
    <div class="flex justify-between text-white font-medium text-base">
      <button @click="goBack" class="rounded bg-rose-500 py-1 px-3">
        Discard
      </button>
      <button class="rounded bg-blue-500 py-1 px-3">
        Post the question
      </button>
    </div>
  </main>
</template>

<style scoped>
.ck-editor__editable {
  min-height: 250px !important;
}
</style>