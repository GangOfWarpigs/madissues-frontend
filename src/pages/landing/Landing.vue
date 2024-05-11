<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import FaqLanding from './component/FaqLanding.vue'
import {useQuery} from "@tanstack/vue-query";
import {getOrganizationById, OrganizationReadModel} from "../../api/organizations.ts";
import {apiCall, baseUrl} from "@/api/client.ts";

const router = useRouter()
const navigate = () => router.push({name: "SignUp"})
const navigateSignUp = () => router.push({name: "SignIn"})

const route = useRoute()
const organizationId = route.params["organization_id"] as string

const { data, isSuccess, isLoading } = useQuery<OrganizationReadModel>({
  queryKey: ["organization", organizationId],
  queryFn: async () => await getOrganizationById(organizationId)
})


</script>

<template>
  <div v-if="isLoading">
    loading...
  </div>
  <body v-if="isSuccess" class="bg-blue-500 min-h-[100vh] flex justify-center w-full">
    <div class="w-full max-w-[1380px] flex flex-col h-full">
      <div class="bg-transparent min-h-[250px] flex justify-center items-center">
        <img width="400" src="../../assets/icons/madissues/transparent_logo_rectangle.svg">
      </div>
      <div class="bg-white flex-1 h-full p-10 px-20 rounded-2xl m-2">
        <img :src="baseUrl + '/' + data.logo" class="w-[130px] h-[130px] mt-[-100px] bg-gray-200 rounded-full">
        <section class="mt-5">
          <h1 class="font-semibold text-gray-700 text-3xl ">{{ data.name }}</h1>
          <h4 class="font-medium text-gray-500 text-lg ">{{ data.description }}</h4>
          <div class="mt-10" v-html="data?.description" ></div>
          <div class="flex justify-center mt-12">
            <div class="flex flex-col max-w-[300px] w-full gap-4">
              <button @click="navigate()"  class="bg-blue-500 hover:bg-blue-600 py-3 rounded-full font-semibold text-white">Unirme a la comunidad</button>
              <p class="text-gray-500 w-full text-center text-sm">¿Ya tienes cuenta?</p>
              <button @click="navigateSignUp()" class="bg-gray-100 py-3 hover:bg-gray-200 rounded-full font-semibold text-gray-500">Iniciar sesión</button>
            </div>
          </div>

          <FaqLanding/>

        </section>
          
      </div>
    </div>

  </body>

</template>

<style scoped>

</style>