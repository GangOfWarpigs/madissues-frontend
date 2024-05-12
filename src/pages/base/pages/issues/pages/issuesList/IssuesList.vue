<script setup lang="ts">
    import PageBanner from "../../../../../../components/shared/pageBanner/PageBanner.vue";
    import ButtonChild from "../../../../../../components/shared/pageBanner/childs/ButtonChild.vue";
    import IssueDisplay from "../../../../../../components/business/issues/IssueDisplay.vue";
    import { useRoute } from "vue-router";
    import { useQuery } from "@tanstack/vue-query";
    import { getOrganizationIssues, Issue } from "../../../../../../api/organizations.ts";

    const route = useRoute();
    const organizationId = route.params["organization_id"] as string;

    const { data, isSuccess } = useQuery<Issue[]>({
      queryKey: ["organization", organizationId, "issues"],
      queryFn: async () => await getOrganizationIssues(organizationId),
    });
</script>

<template>
    <PageBanner title="Incidents" subtitle="Here you can report an incident">
        <ButtonChild route="./issues/create" text="I have an incident"/>
    </PageBanner>
    <div class="w-full mt-10">
        <IssueDisplay :issues="data" :key="data ? data?.length : 0" v-if="isSuccess && data !== undefined"/>
    </div>
</template>