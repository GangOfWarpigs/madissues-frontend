<script setup lang="ts">
import FormInput  from "../../components/FormInput.vue";
import * as yup from 'yup';
import {useForm} from "vee-validate";
import FormButton from "../../components/FormButton.vue"
import {useRoute, useRouter} from "vue-router";


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

const submit = handleSubmit((values) => {
  console.log(values.email, values.password)
});

</script>

<template>

  <main class="w-full h-[100vh] grid grid-cols-2">
    <section class="h-[100vh] flex flex-col justify-center items-center">
      <div class="flex w-full flex-col max-w-[500px] gap-2">
        <div>
          <h1 class="text-center  font-semibold text-xl text-gray-500">Join our community of MadIssues</h1>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <FormInput name="firstName" type="text" placeholder="First name"/>
          <FormInput name="lastName" type="text" placeholder="Last name"/>
          <FormInput name="phoneNumber" type="text" placeholder="Phone number"/>
          <FormInput name="startedStudiesDate" type="date" placeholder="Date you started your studies"/>
        </div>
        <FormInput name="email" type="email" placeholder="Email"/>
        <FormInput name="password" type="password" placeholder="Password"/>
        <FormInput name="passwordConfirmation" type="password" placeholder="Confirm Password"/>
        <FormButton text="Sign up" type="submit" @click="submit"/>
        <button type="button" @click="router.replace(basePath + '/auth/signup')" class="bg-gray-100 text-gray-500 font-semibold px-3 py-1 rounded-3xl h-8 text-sm w-full">Log in</button>
      </div>
    </section>
    <section class="w-full h-full bg-blue-400 col-span-1 grid grid-rows-3">
      <div class="flex w-full  p-4 justify-start">
        <img src="../../../src/assets/icons/madissues/transparent_logo_rectangle.svg" alt="Logo" width="150" height="150">
      </div>
      <div class="flex  justify-center px-10 justify-center">
        <p class="text-white font-semibold text-xl">
          Lorem ipsum dolor sit ¡amet, consectetur adipiscing elit. Aenean maximus metus id justo molestie dictum. Integer vitae commodo enim, vel dapibus ante. Pellentesque et elementum mi.
        </p>
      </div>
    </section>

  </main>
</template>
