<script setup lang="ts">
    import FaqDisplay from "../../../../../../components/business/faqs/FaqDisplay.vue";
    import PageBanner from "../../../../../../components/shared/pageBanner/PageBanner.vue";
</script>

<template>
    <PageBanner title="FAQs" subtitle="Ask what you want, we listen to you">
    </PageBanner>
    <div class="w-full flex flex-col mt-12">
        <FaqDisplay/>
    </div>
</template>