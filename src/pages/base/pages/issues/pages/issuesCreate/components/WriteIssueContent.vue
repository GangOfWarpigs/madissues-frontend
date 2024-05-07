<script setup lang="ts">

import IssueInput from "../components/IssueInput.vue";
import IssueTextArea from "../components/IssueTextArea.vue";
import IssueTagSelector from "../components/IssueTagsInput.vue";
</script>

<template>
  <section class="bg-[#F5F5F5] rounded-2xl flex flex-col w-full px-10 py-10 font-medium text-sm gap-4">
    <div class="w-full flex flex-col gap-1">
      <p class="rounded-2xl">Title</p>
      <IssueInput placeholder="e.g. It is possible to vote to change the date of an exam?"/>
    </div>
    <div class="w-full flex flex-col gap-1">
      <p class="rounded-2xl">Description</p>
      <IssueTextArea placeholder="e.g. It is possible to vote to change the date of an exam?"></IssueTextArea>
    </div>
    <div class="w-full flex flex-col gap-1">
      <p class="rounded-2xl">Subject</p>
      <IssueInput placeholder="e.g. It is possible to vote to change the date of an exam?"></IssueInput>
    </div>
    <div class="w-full flex flex-col gap-1">
      <p class="rounded-2xl">Teachers Implicated</p>
      <IssueTagSelector></IssueTagSelector>
    </div>
  </section>
</template>

<style scoped>

</style>