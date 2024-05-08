<script setup lang="ts">
    import IssueInput from "../components/IssueInput.vue";
    import IssueTextArea from "../components/IssueTextArea.vue";
    import IssueTagSelector from "../components/IssueTagsInput.vue";
</script>

<template>
    <section class="bg-gray-100 rounded-lg flex flex-col w-full px-8 py-5 font-medium text-sm gap-4">
        <div class="w-full flex flex-col">
            <h4 class="text-gray-700 mb-2 text-base">Title</h4>
            <IssueInput placeholder="e.g. It is possible to vote to change the date of an exam?"/>
        </div>
        <div class="w-full flex flex-col">
            <h4 class="text-gray-700 mb-2 text-base">Description</h4>
            <IssueTextArea placeholder="e.g. It is possible to vote to change the date of an exam?"></IssueTextArea>
        </div>
        <div class="w-full flex flex-col">
            <h4 class="text-gray-700 mb-2 text-base">Subject</h4>
            <IssueInput placeholder="e.g. It is possible to vote to change the date of an exam?"></IssueInput>
        </div>
        <div class="w-full flex flex-col">
            <h4 class="text-gray-700 mb-2 text-base">Teachers Implicated</h4>
            <IssueTagSelector></IssueTagSelector>
        </div>
    </section>
</template>