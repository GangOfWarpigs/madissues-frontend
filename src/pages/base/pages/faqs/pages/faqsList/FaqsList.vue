<script setup lang="ts">
  import FaqCard from "../../../../../../components/business/faqs/FaqCard.vue";
  import PageBanner from "../../../../../../components/shared/PageBanner.vue";
  import InfoDialog from "../../../../../../components/shared/InfoDialog.vue";
  const faqPageData = {
    title: "FAQs",
    subtitle: "Ask what you want, we listen to you",
    primaryColor: "#1986E3",
    secondaryColor:"#978EFF",
    currentPage: "faqs"
  }
  const userData1 = {
    first_name: "Jose Ricardo",
    last_name: "Peña Seco",
    degree: "Ingeniería informática",
    last_school_year: "4",
    email: "jose.pena101@alu.ulpgc.es"
  }
  const faqData = {
    id: "1",
    question: "Hey una pregunta",
    date: '2024-04-23'
  }
</script>

<template>
  this is faqs list
  <div class="mx-16 mb-12">
    <PageBanner :data="faqPageData" :user="userData1" ></PageBanner>
  </div>
  <div class="mx-24">
    <InfoDialog title="Hi, this is an information dialog" description="This is the text of the information dialog"/>
  </div>
  <FaqCard :faq="faqData"></FaqCard>
</template>

<style scoped>
</style>