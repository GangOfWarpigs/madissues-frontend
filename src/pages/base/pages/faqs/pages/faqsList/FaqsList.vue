<script setup lang="ts">
    import FaqDisplay from "../../../../../../components/business/faqs/FaqDisplay.vue";
    import PageBanner from "../../../../../../components/shared/pageBanner/PageBanner.vue";
    import ButtonChild from "../../../../../../components/shared/pageBanner/childs/ButtonChild.vue";

    const faqPageData = {
        title: "FAQs",
        subtitle: "Ask what you want, we listen to you",
        primaryColor: "#1986E3",
        secondaryColor:"#978EFF"
    }

    function loadMore() {
        // aquí se escribe la lógica para cargar más faqs
    }
</script>

<template>
    <PageBanner :data="faqPageData">
        <ButtonChild route="./faqs/create" text="I have a question"/>
    </PageBanner>
    <div class="w-full flex flex-col mt-12">
        <FaqDisplay/>
    </div>
</template>