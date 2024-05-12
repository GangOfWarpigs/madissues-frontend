<script setup lang="ts">
    import FaqDisplay from "../../../../../../components/business/faqs/FaqDisplay.vue";
    import PageBanner from "../../../../../../components/shared/pageBanner/PageBanner.vue";
    import ButtonChild from "../../../../../../components/shared/pageBanner/childs/ButtonChild.vue";

    function loadMore() {
        // aquí se escribe la lógica para cargar más faqs
    }
</script>

<template>
    <PageBanner title="FAQs" subtitle="Ask what you want, we listen to you">
        <ButtonChild route="./faqs/create" text="I have a question"/>
    </PageBanner>
    <div class="w-full flex flex-col mt-12">
        <FaqDisplay/>
    </div>
</template>