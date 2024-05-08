<script setup lang="ts">

import WriteIssueContent from "../issuesCreate/components/WriteIssueContent.vue";
import IssueProofs from "../issuesCreate/components/IssueProofs.vue";
</script>

<template>
  <main class="flex flex-col space-y-5">
    <WriteIssueContent></WriteIssueContent>
    <IssueProofs></IssueProofs>
    <div class="flex justify-between text-white font-medium text-base">
      <button class="rounded bg-rose-500 py-1 px-3">
        Discard
      </button>
      <button class="rounded bg-blue-500 py-1 px-3">
        Post the issue
      </button>
    </div>
  </main>

</template>

<style scoped>

</style>