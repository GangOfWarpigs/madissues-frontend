<script setup lang="ts">

import {PropType} from "vue";

interface Faq {
  question: string,
  date: string,
}

const props = defineProps({
    faq: {
      type: Object as PropType<Faq>,
      required: true,
    }
  })
</script>

<template>
  <article class="faq-card flex flex-col w-full bg-gray-100 text-gray-500 rounded-lg">
    <section class="py-2 px-2 flex text-center space-x-1  text-blue-500">
        <b-icon-star-fill class="h-3"/>
        <p class="text-xs font-medium">Official answer</p>
    </section>
    <section class="py-4 px-2 w-full overflow-auto">
      <p class="text-1 text-center font-medium">
        {{props.faq.question}}
      </p>
    </section>
    <section class="flex justify-between items-start content-center py-2 px-2 w-full">
      <div class="bg-green-200 rounded-lg py-1 px-1">
        <p class="text-xs font-medium text-green-500">Administrativo</p>
      </div>
      <div class="flex flex-col font-medium">
        <div class="py-1 px-2 flex text-center space-x-1">
          <b-icon-chat-left-text class="h-full"/>
          <p class="text-xs">2 answers</p>
        </div>
        <p class="text-[0.5rem] px-2 text-end font-medium">{{ props.faq.date }}</p>
      </div>
    </section>
  </article>
</template>

<style scoped>

</style>