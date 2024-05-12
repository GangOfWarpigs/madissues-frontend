<script setup lang="ts">
    import WriteIssueContent from "../issuesCreate/components/WriteIssueContent.vue";
    import IssueProofs from "../issuesCreate/components/IssueProofs.vue";
    import InfoDialog from "../../../../../../components/shared/InfoDialog.vue";
    import { ref } from 'vue';
    import {useMutation} from "@tanstack/vue-query";
    import { createIssue, IssueCreateRequest } from "../../../../../../api/issues";
    import {useForm} from "vee-validate";
    import {useRoute, useRouter} from "vue-router";

    const showInfoDialog = ref(true);

    const closeInfoDialog = () => {
      showInfoDialog.value = false;
    };

    const goBack = () => {
      window.history.back();
    };

    const route = useRoute()
    const id = route.params["organization_id"] as string;

    const router = useRouter()

    const { mutate, isPending, error } = useMutation({
      mutationFn: async (req : IssueCreateRequest) => await createIssue(req),
      onSuccess: () => router.push({name: "Issues"})
    })

    const { values, handleSubmit } = useForm<IssueCreateRequest>({
      initialValues: {
        organization_id: id,
        teachers : [],
        proofs: [],
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
    <IssueProofs name="proofs" label="proofs"></IssueProofs>
    <p class="text-red-500">{{ error }}</p>
    <div class="flex justify-between text-white font-medium text-base">
      <button @click="goBack" class="rounded bg-rose-500 py-1 px-3">
        Discard
      </button>
      <button
          type="button"
          class="inline-flex items-center gap-3 justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          @click="submit"
      >
        <div role="status" v-if="isPending">
          <svg aria-hidden="true" class="w-5 h-5 text-red-200 animate-spin dark:text-gray-600 fill-red-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
        Create
      </button>
    </div>
  </main>
</template>