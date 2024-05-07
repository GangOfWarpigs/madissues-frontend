<script setup lang="ts">
    import {PropType} from "vue";
    import { useRouter, useRoute } from 'vue-router';

    interface Faq {
        id: string,
        question: string,
        date: string,
    }

    const props = defineProps({
        faq: {
            type: Object as PropType<Faq>,
            required: true,
        }
    })
    
    const router = useRouter();
    const currentRoute = useRoute().fullPath;

    function goToFaq() {
        router.push({ path: currentRoute + "/" + props.faq.id })
    }
</script>

<template>
  <article @click="goToFaq" class="faq-card flex flex-col w-full py-4 px-4 bg-gray-100 text-gray-500 rounded-lg cursor-pointer hover:shadow-lg hover:shadow-gray-200">
    <section class="flex text-center space-x-1  text-blue-500">
        <b-icon-star-fill class="h-3"/>
        <p class="text-xs font-medium">Official answer</p>
    </section>
    <section class="py-4 px-2 w-full overflow-auto">
        <p class="text-1 text-center font-medium">
            {{props.faq.question}}
        </p>
    </section>
    <section class="flex justify-between items-end content-center w-full">
        <div class="bg-green-200 rounded-lg py-1 px-1">
            <p class="text-xs font-medium text-green-500">Administrativo</p>
        </div>
        <div class="flex flex-col font-medium">
            <div class="py-1 px-2 flex text-center space-x-1 items-center">
                <b-icon-chat-left-text class="h-4 mr-1"/>
                <p class="text-sm">2 answers</p>
            </div>
            <p class="text-xs px-2 text-end font-medium">{{ props.faq.date }}</p>
        </div>
    </section>
  </article>
</template>

<style scoped>
  .faq-card {
    flex: 1 0 calc(45% - 1rem); /* Ajusta el ancho de la tarjeta para que ocupe aproximadamente el 45% del contenedor */
     /* Ajusta el margen entre las tarjetas */
  }

  @media (max-width: 768px) {
    .faq-card {
      flex: 1 0 calc(100% - 1rem); /* En dispositivos móviles, cada tarjeta ocupará una fila completa */
    }
  }
</style>