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
  <article class="faq-card flex flex-col w-full bg-gray-200 rounded-lg">
    <section class="py-2 px-2">
        <p class="text-xs font-medium text-blue-500">Official answer</p>
    </section>
    <section class="py-4 px-2 w-full overflow-auto">
      <p class="text-1 text-center text-gray-500 font-medium">
        CUal es el trimeppo limtie .....
        CUal es el trimeppo limtie .....
        CUal es el trimeppo limtie .....
        CUal es el trimeppo limtie .....
        CUal es el trimeppo limtie .....
        {{props.faq.question}}
      </p>
    </section>
    <section class="flex justify-between items-start content-center py-2 px-2 w-full">
      <div class="bg-green-200 rounded-lg py-1 px-1">
        <p class="text-[0.6rem] font-medium text-green-500">Administrativo</p>
      </div>
      <div class="flex flex-col text-gray-500">
        <div>
          <p class="text-[0.6rem]">icon answers</p>
        </div>
        <p class="text-[0.5rem] font-normal">{{ props.faq.date }}</p>
      </div>
    </section>
  </article>
</template>

<style scoped>

</style>