  <script lang="ts" setup>
  import {defineProps, computed, PropType} from "vue";
    import IncidentChild from "./IncidentChild.vue";
    import SearchBarChild from "./SearchBarChild.vue";
    import ProfileChild from "../../pages/base/pages/profile/components/ProfileChild.vue";

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
  </script>

  <template>
    <div :style="gradientStyle" class="h-60  w-full mx-auto mt-6 bg-gray-100 rounded-3xl flex flex-col justify-center items-center" >
      <p class="text-4xl font-bold mt-7 mb-8 text-white font-sans">{{ props.data?.title }}</p>
      <p class="text-xl text-white font-sans">{{ props.data.subtitle}}</p>
      <IncidentChild v-if="props.data?.currentPage === 'issues'" class="relative translate-y-14"/>
      <SearchBarChild v-if="props.data?.currentPage === 'faqs'" class="relative translate-y-14"/>
      <ProfileChild v-if="props.data?.currentPage === 'profile'" class="relative translate-y-20 -translate-x-[27em]" :user="props.user"/>
    </div>
  </template>

<style scoped>

</style>
