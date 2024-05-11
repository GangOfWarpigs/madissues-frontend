<script setup lang="ts">
    import PageBanner from "../../../../../../components/shared/pageBanner/PageBanner.vue";
    import ButtonChild from "../../../../../../components/shared/pageBanner/childs/ButtonChild.vue";
    import IssueDisplay from "../../../../../../components/business/issues/IssueDisplay.vue";

    const pageProps = {
        title: "Incidents",
        subtitle: "Here you can report an incident",
        primaryColor: "#1986E3",
        secondaryColor: "#978EFF", 
    }
</script>

<template>
    <PageBanner :data="pageProps">
        <ButtonChild route="./issues/create" text="I have an incident"/>
    </PageBanner>
    <div class="w-full mt-10">
        <IssueDisplay/>
    </div>
</template>