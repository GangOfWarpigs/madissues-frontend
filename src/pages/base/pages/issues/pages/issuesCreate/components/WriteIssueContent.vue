<script setup lang="ts">
    import IssueInput from "../components/IssueInput.vue";
    import IssueTextArea from "../components/IssueTextArea.vue";
    import IssueTagSelector from "../components/IssueTagsInput.vue";
    import SmallInput from "@/pages/auth/components/SmallInput.vue";
    import InputRichText from "@/pages/auth/components/InputRichText.vue";
    import FormMultiselect from "@/pages/auth/components/FormMultiselect.vue";
    import FormSelect from "@/pages/auth/components/FormSelect.vue";
    import AreaInput from "@/pages/auth/components/AreaInput.vue";
</script>

<template>
    <section class="bg-gray-100 rounded-lg flex flex-col w-full px-8 py-5 font-medium text-sm gap-4">
        <div class="w-full flex flex-col">
            <h4 class="text-gray-700 mb-2 text-base">Title</h4>
            <SmallInput name="title" placeholder="e.g. It is possible to vote to change the date of an exam?"/>
        </div>
        <div class="w-full flex flex-col">
          <h4 class="text-gray-700 mb-2 text-base">Teachers Implicated</h4>
          <FormMultiselect path="teachers" name="teachers"></FormMultiselect>
        </div>
      <div class="w-full flex flex-col">
        <h4 class="text-gray-700 mb-2 text-base">Course</h4>
        <FormSelect path="courses" name="course"></FormSelect>
      </div>
        <div class="w-full flex flex-col">
            <h4 class="text-gray-700 mb-2 text-base">Description</h4>
            <AreaInput name="description" placeholder="e.g. It is possible to vote to change the date of an exam?"></AreaInput>
        </div>
      <div class="w-full flex flex-col">
        <h4 class="text-gray-700 mb-2 text-base">Details</h4>
          <InputRichText name="details" placeholder="e.g. It is possible to vote to change the date of an exam?"></InputRichText>
        </div>
    </section>
</template>