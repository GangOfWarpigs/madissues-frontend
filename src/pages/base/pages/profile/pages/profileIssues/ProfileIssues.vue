<script setup lang="ts">
    import IssueDisplay from '../../../../../../components/business/issues/IssueDisplay.vue';
    import { useRoute } from "vue-router";
    import { useQuery } from "@tanstack/vue-query";
    import { getOrganizationIssues, Issue } from "../../../../../../api/organizations.ts";
    import { ref } from "vue";

    const route = useRoute();
    const organizationId = route.params["organization_id"] as string;

    const { data, isSuccess, isLoading } = useQuery<Issue[]>({
      queryKey: ["organization", organizationId],
      queryFn: async () => await getOrganizationIssues(organizationId),
    });

    const issues = ref(data);
</script>

<template>
    <IssueDisplay :issues="issues" v-if="issues !== undefined && isSuccess && !isLoading"></IssueDisplay>
</template>