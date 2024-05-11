<script setup lang="ts">
    import PageBanner from "../../../../../../components/shared/pageBanner/PageBanner.vue";
    import ButtonChild from "../../../../../../components/shared/pageBanner/childs/ButtonChild.vue";
    import IssueDisplay from "../../../../../../components/business/issues/IssueDisplay.vue";
    import {useRoute} from "vue-router";
    import {useQuery} from "@tanstack/vue-query";
    import {getOrganizationIssues, Issue} from "@/api/organizations.ts";

    const pageProps = {
        title: "Incidents",
        subtitle: "Here you can report an incident",
        primaryColor: "#1986E3",
        secondaryColor: "#978EFF", 
    }

    const route = useRoute()
    const organizationId = route.params["organization_id"] as string
    const { data, isLoading, isSuccess } = useQuery<Issue[]>({
      queryKey: ["organization", organizationId],
      queryFn: async () => await getOrganizationIssues(organizationId),
    })
</script>

<template>
    <PageBanner :data="pageProps">
        <ButtonChild route="./issues/create" text="I have an incident"/>
    </PageBanner>
    <div class="w-full mt-10">
        <IssueDisplay :issues="data" v-if="isSuccess"/>
    </div>
</template>