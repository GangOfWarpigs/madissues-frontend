<script setup lang="ts">
    import WriteIssueContent from "../issuesCreate/components/WriteIssueContent.vue";
    import IssueProofs from "../issuesCreate/components/IssueProofs.vue";
    import InfoDialog from "../../../../../../components/shared/InfoDialog.vue";
    import { ref } from 'vue';
    import {useMutation} from "@tanstack/vue-query";
    import {createIssue, IssueCreateRequest} from "@/api/organizations.ts";
    import {useForm} from "vee-validate";
    import {useRoute} from "vue-router";

    const showInfoDialog = ref(true);

    const closeInfoDialog = () => {
      showInfoDialog.value = false;
    };

    const goBack = () => {
      window.history.back();
    };

    const route = useRoute()
    const id = route.params["organization_id"]


    const { mutate } = useMutation({
      mutationFn: async (req : IssueCreateRequest) => await createIssue(req)
    })

    const {values, handleSubmit} = useForm<IssueCreateRequest>({
      initialValues: {
        organization_id: id,
        teachers : [],
        proofs: [],
        student: id,
        course: "",
      }
    })

    const submit = handleSubmit((values) => mutate(values))

</script>

<template>
  <main class="flex flex-col space-y-5">
    <h1 class="self-center text-4xl font-semibold mb-4" >Add a new issue</h1>
    <InfoDialog v-if="showInfoDialog" @close="closeInfoDialog" title="Writing a good question" content="Summarize your problem in a one-line title, describe your
    question in more detail and add tags which help surface your question to members of the organization."></InfoDialog>
    <WriteIssueContent></WriteIssueContent>
    <IssueProofs></IssueProofs>
    <div class="flex justify-between text-white font-medium text-base">
      <button @click="goBack" class="rounded bg-rose-500 py-1 px-3">
        Discard
      </button>
      <button @click="submit" class="rounded bg-blue-500 py-1 px-3">
        Post the issue
      </button>
    </div>
  </main>
</template>

<style scoped>

</style>