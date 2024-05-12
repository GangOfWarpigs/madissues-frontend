<script setup lang="ts">
import FormInput  from "../../components/FormInput.vue";
import * as yup from 'yup';
import {useForm} from "vee-validate";
import FormButton from "../../components/FormButton.vue"
import {useRoute, useRouter} from "vue-router";
import {useMutation, useQuery} from "@tanstack/vue-query";
import {signInStudent} from "../../../../api/organizations.ts";
import { getOrganizationById } from "../../../../api/organizations.ts";
import { calculateGradient } from "../../../../helpers.ts";
import { baseURL } from "../../../../api/client.ts";

const router = useRouter()

const route = useRoute()
const organizationId = route.params["organization_id"] as string
const basePath = "/organizations/" + organizationId

const schema = yup.object({
  email: yup.string().required("Email is required").email(),
  password : yup
      .string()
      .required("Password is required")
      .matches(
          /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$/,
          'Password must contain at least one uppercase letter, one number and must be at least 8 characters'
      )
});

const { handleSubmit } = useForm<{email : string, password : string}>({
  validationSchema: schema,
  initialValues: {
    email: "",
    password: "",
  }
})

const { mutate, error } = useMutation({
  mutationFn: (req: {email: string, password: string}) => signInStudent(req),

  onSuccess: (response) => {
    if (response && response.token){
      const token = response.token;
      localStorage.setItem("token", token);
      router.replace(basePath + '/base/home');
    }
  },
})

const submit = handleSubmit((values) => {
  mutate(values)
});

const { data } = useQuery({
    queryKey: ["organizations", organizationId],
    queryFn: async () => await getOrganizationById(organizationId)
})
</script>

<template>
  <main class="w-full h-screen grid grid-cols-2 relative">
    <section class="w-full h-full col-span-1 flex flex-col items-center justify-center">
      <div class="flex flex-col mb-14">
        <h1 class="text-center font-semibold text-gray-700 text-3xl mb-1">Welcome back</h1>
        <p class="text-base text-gray-500">Please enter your data to log in</p>
      </div>
      <div class="gap-3 flex flex-col w-[30rem]">
        <FormInput name="email" type="email" placeholder="Email"/>
        <FormInput name="password" type="password" placeholder="Password"/>
        <FormButton text="Sign in" type="submit" @click="submit" :color="data?.primary_color"/>
        <button type="button" @click="router.replace(basePath + '/auth/signup')" class="bg-gray-100 text-gray-500 font-semibold px-3 py-1 rounded-full h-8 text-sm w-full">
          Sign up
        </button>
        <p class="text-red-500">{{error}}</p>
      </div>
    </section>
    <section :style="calculateGradient(data?.primary_color!, data?.secondary_color!)" class="w-full h-full col-span-1 flex flex-col items-center justify-center">
      <div class="text-white font-semibold text-xl text-center max-w-[40rem]" v-html="data?.description" ></div>
    </section>
    <div class="absolute w-full px-10 pt-5 top-0 left-0 flex justify-between items-center">
      <div class="flex items-center text-gray-700">
        <img :src="baseURL + '/media/' + data?.logo " class="bg-gray-200 rounded-full mr-4" alt="Logo Organization" width="50" height="50">
        <p class="font-semibold text-lg">{{ data?.name }}</p>
      </div>
      <img src="../../../../assets/icons/madissues/transparent_logo_rectangle.svg" alt="Logo MadIssues" width="200" height="200">
    </div>
  </main>
</template>