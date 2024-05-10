<script setup lang="ts">
import FormInput  from "../../components/FormInput.vue";
import * as yup from 'yup';
import {useForm} from "vee-validate";
import FormButton from "../../components/FormButton.vue"
import {useRoute, useRouter} from "vue-router";

const router = useRouter()
const basePath = "/organizations/" + useRoute().params.id
const routeId = useRoute().params.id;
const organizationId = Array.isArray(routeId) ? routeId[0] : routeId || "";

const degrees = [
  { id: '1', name: 'Grado en Ingeniería Informática' },
  { id: '2', name: 'Grado en Ciencias de Datos' },
];

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

const { handleSubmit } = useForm<{organization_id:string, firstName:string, lastName:string, phoneNumber:string, startedStudiesDate:string, email : string, password : string, passwordConfirmation: string }>({
  validationSchema: schema,
  initialValues: {
    organization_id: organizationId,
    firstName: "",
    lastName: "",
    phoneNumber: "",
    startedStudiesDate: "",
    email: "",
    password: "",
    passwordConfirmation: ""
  }
})

const submit = handleSubmit((values) => {
  try{
  console.log(values)
  }catch(error){
    console.log(error)
  }
});

</script>

<template>

  <main class="w-full h-[100vh] grid grid-cols-2">
    <section class="w-full h-full bg-blue-400 col-span-1 grid grid-rows-3 items-start">
      <div class="flex w-full p-4 justify-start">
        <img src="../../../../assets/icons/madissues/transparent_logo_rectangle.svg" alt="Logo" width="250" height="250">
      </div>
      <div class="flex  justify-center px-10">
        <p class="text-white font-semibold text-xl">
          Lorem ipsum dolor sit ¡amet, consectetur adipiscing elit. Aenean maximus metus id justo molestie dictum. Integer vitae commodo enim, vel dapibus ante. Pellentesque et elementum mi.
        </p>
      </div>
    </section>
    <section class="w-full h-full col-span-1 grid grid-rows-3 items-start">
      <div class="flex justify-end">
        <img src="../../../../assets/icons/madissues/transparent_logo_ulpgc_deii.svg" alt="Logo" width="300" height="300">
      </div>
      <div class="flex  justify-center flex-col items-center gap-4">
        <div>
          <h1 class="text-center  font-semibold text-xl text-gray-500">Join our community of MadIssues</h1>
        </div>
        <div class="flex flex-col max-w-[700px] w-full px-2  gap-2">

          <div class="grid grid-cols-2 gap-4">
            <FormInput name="firstName" type="text" placeholder="First name"/>
            <FormInput name="lastName" type="text" placeholder="Last name"/>
            <FormInput name="phoneNumber" type="text" placeholder="Phone number"/>
            <FormInput name="startedStudiesDate" type="date" placeholder="Date you started your studies"/>
          </div>
          <select id="degreeSelect" v-model="selectedDegree" @change="handleChange" class="flex space-x-2 items-center rounded-3xl bg-gray-100 py-1 text-[#7C7C7C]">
            <option v-for="degree in degrees" :key="degree.id" :value="degree.id">{{ degree.name }}</option>
          </select>
          <FormInput name="email" type="email" placeholder="Email"/>
          <FormInput name="password" type="password" placeholder="Password"/>
          <FormInput name="passwordConfirmation" type="password" placeholder="Confirm Password"/>
          <FormButton text="Sign up" type="submit" @click="submit"/>
          <button type="button" @click="router.replace(basePath + '/auth/signin')" class="bg-gray-100 text-gray-500 font-semibold px-3 py-1 rounded-3xl h-8 text-sm w-full">Log in</button>
        </div>
      </div>
    </section>
  </main>
</template>
