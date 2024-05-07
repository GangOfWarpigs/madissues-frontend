  <script lang="ts" setup>
  import {defineProps, defineEmits, computed, PropType } from "vue";

    interface UserDataProps {
      first_name: string,
      last_name: string,
      degree: string,
      last_school_year: string,
      email: string
    }

    interface Props{
      title: string,
      subtitle: string,
      primaryColor: string,
      secondaryColor: string,
      currentPage: string,
    }
  const props = defineProps({
    data: {
      type: Object as PropType<Props>,
      required: true
    },
    user: {
      type: Object as PropType<UserDataProps>,
      required: true
    }
  });

  // Calculamos el estilo del degradado
    const gradientStyle = computed(() => {
      return {
        backgroundImage: `linear-gradient(to right, ${props.data?.primaryColor}, ${props.data?.secondaryColor})`
      };
    });
    const emits = defineEmits(['search']);
  </script>

  <template>
    <div :style="gradientStyle" class="w-full mx-auto min-h-[300px] bg-gray-100 rounded-3xl flex flex-col justify-center items-center" >
      <p class="text-4xl font-bold text-white font-sans">{{ props.data?.title }}</p>
      <p class="text-xl text-white font-sans">{{ props.data.subtitle}}</p>
      <div class="relative w-full">
        <slot></slot>
      </div>
      <!-- 
        <IncidentChild v-if="props.data?.currentPage === 'issues'" class="relative translate-y-14"/>
        <SearchBarChild @search="handleSearch" v-if="props.data?.currentPage === 'faqs'" class="relative translate-y-14"/>
        <div class="w-full">
          <ProfileChild v-if="props.data?.currentPage === 'profile'" class="relative translate-y-20" :user="props.user"/>
        </div>
      -->
    </div>
  </template>

<style scoped>

</style>
