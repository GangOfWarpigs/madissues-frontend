<script setup lang="ts">
import FormInput  from "../../components/FormInput.vue";
import * as yup from 'yup';
import {useForm} from "vee-validate";
import FormButton from "../../components/FormButton.vue"
import {useRoute, useRouter} from "vue-router";
import {useMutation} from "@tanstack/vue-query";
import {signInStudent} from "../../../../api/organizations.ts";


const router = useRouter()
const basePath = "/organizations/" + useRoute().params.id

const schema = yup.object({
  email: yup.string().required().email(),
  password : yup
      .string()
      .required()
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
})

const submit = handleSubmit((values) => {
  mutate(values)
});

</script>

<template>
  <main class="w-full h-[100vh] grid grid-cols-2">
    <section class="w-full h-full col-span-1 grid grid-rows-3 items-start">
      <div class="flex justify-start">
        <img src="../../../../assets/icons/madissues/transparent_logo_ulpgc_deii.svg" alt="Logo" width="300" height="300">
      </div>
      <div class="flex  justify-center flex-col items-center px-2 gap-4">
        <div>
          <h1 class="text-center  font-semibold text-xl text-gray-500">Welcome back</h1>
          <p class="text-center  font-medium text-sm text-gray-400">Please enter your data for log in</p>
        </div>
        <div class="flex flex-col max-w-[600px] w-full gap-2">
          <FormInput class="" name="email" type="email" placeholder="Email"/>
          <FormInput name="password" type="password" placeholder="Password"/>
          <FormButton text="Sign up" type="submit" @click="submit"/>
          <button type="button" @click="router.replace(basePath + '/auth/signup')" class="bg-gray-100 text-gray-500 font-semibold px-3 py-1 rounded-3xl h-8 text-sm w-full">Register</button>
          <p class="text-red-500">{{error}}</p>


        </div>
        </div>
    </section>
    <section class="w-full h-full bg-blue-400 col-span-1 grid grid-rows-3 items-start">
      <div class="flex justify-end p-4">
        <img src="../../../../assets/icons/madissues/transparent_logo_rectangle.svg" alt="Logo" width="200" height="200">
      </div>
      <div class="flex  justify-center px-10">
        <p class="text-white font-semibold text-xl text-center">
          Lorem ipsum dolor sit ¡amet, consectetur adipiscing elit. Aenean maximus metus id justo molestie dictum. Integer vitae commodo enim, vel dapibus ante. Pellentesque et elementum mi.
        </p>
      </div>
    </section>

  </main>
</template>
