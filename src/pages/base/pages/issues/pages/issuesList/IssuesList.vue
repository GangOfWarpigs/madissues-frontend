<script setup lang="ts">
    import { ref, watch } from "vue";
    import PageBanner from "../../../../../../components/shared/pageBanner/PageBanner.vue";
    import ButtonChild from "../../../../../../components/shared/pageBanner/childs/ButtonChild.vue";
    import IssueDisplay from "../../../../../../components/business/issues/IssueDisplay.vue";
    import { useRoute } from "vue-router";
    import { useQuery } from "@tanstack/vue-query";
    import { getOrganizationIssues, Issue } from "../../../../../../api/organizations.ts";

    const route = useRoute();
    const organizationId = route.params["organization_id"] as string;

    const { data, isSuccess, isLoading } = useQuery<Issue[]>({
      queryKey: ["organization", organizationId],
      queryFn: async () => await getOrganizationIssues(organizationId),
    });

    const issues = ref(data);
</script>

<template>
    <PageBanner title="Incidents" subtitle="Here you can report an incident">
        <ButtonChild route="./issues/create" text="I have an incident"/>
    </PageBanner>
    <div class="w-full mt-10">
        <IssueDisplay :issues="issues" v-if="issues !== undefined && isSuccess && !isLoading"/>
    </div>
</template>