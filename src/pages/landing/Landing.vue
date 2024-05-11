<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import FaqLanding from './component/FaqLanding.vue'
import {useQuery} from "@tanstack/vue-query";
import {getOrganizationById} from "../../api/organizations.ts";
import Error from "@/components/shared/Error.vue";
import Spinner from "@/components/Spinner.vue";
import {baseURL} from "@/api/client.ts";
import {calculateGradient} from "@/helpers.ts";

const router = useRouter()

const navigate = () => router.push({name: "signUp"})
const navigateSignUp = () => router.push({name: "signIn"})

const route = useRoute()
const id = route.params["id"] as string

const {data, isLoading, error, isSuccess, isError} = useQuery({
  queryKey: ["organizations", id],
  queryFn: async () => await getOrganizationById(id)
  })

</script>

<template>
  <div v-if="isLoading" class="w-full h-[100vh] items-center justify-center flex">
    <Spinner size="70" color="red-500"></Spinner>
  </div>
  <div v-if="isError" class="flex h-[100vh] items-center">
    <Error :message="error"></Error>
  </div>
  <body v-if="isSuccess" :style="calculateGradient(data?.primary_color, data?.secondary_color)" class="bg-blue-500 min-h-[100vh] flex justify-center w-full">
    <div class="w-full max-w-[1380px] flex flex-col h-full">
      <div class="bg-transparent min-h-[250px] flex justify-center items-center">
        <img width="400" src="../../assets/icons/madissues/transparent_logo_rectangle.svg">
      </div>
      <div class="bg-white flex-1 h-full p-10 px-20 rounded-2xl m-2">
        <img :src="baseURL + '/media/' + data?.logo " class="w-[130px] h-[130px] mt-[-100px] bg-gray-200 rounded-full">
        <section class="mt-5">
          <h1 class="font-semibold text-gray-700 text-3xl ">{{ data.name }}</h1>
          <h4 class="font-medium text-gray-500 text-lg ">{{ data.contact_info }}</h4>
          <div class="mt-10" v-html="data.description" ></div>
          <div class="flex justify-center mt-12">
            <div class="flex flex-col max-w-[300px] w-full gap-4">
              <button :style="calculateGradient(data?.primary_color, data?.secondary_color)"  @click="navigate()" class="hover:bg-blue-600 py-3 rounded-full font-semibold text-white">Unirme a la comunidad</button>
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