<script setup lang="ts">
import FormInput  from "../../components/FormInput.vue";
import * as yup from 'yup';
import {useForm} from "vee-validate";
import FormButton from "../../components/FormButton.vue"
import {useRoute, useRouter} from "vue-router";
import {useMutation, useQuery} from "@tanstack/vue-query";
import {signUpStudent} from "../../../../api/organizations.ts";

const router = useRouter()
const basePath = "/organizations/" + useRoute().params.id
const routeId = useRoute().params.id;
const route = useRoute()
const organizationId = route.params["organization_id"] as string
console.log(organizationId)



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

const { handleSubmit } = useForm<{organization_id:string, first_name:string, last_name:string, phone_number:string, started_studies_date:string, email : string, password : string, verify_password: string, degreeId: string }>({
  validationSchema: schema,
  initialValues: {
    organization_id: organizationId,
    first_name: "",
    last_name: "",
    phone_number: "",
    started_studies_date: "",
    email: "",
    password: "",
    verify_password: "",
    degreeId: ""
  }
})

// Variable para almacenar el valor seleccionado del grado
let selectedDegree = '';

// Función para manejar el cambio en el select
const handleChange = (event: Event) => {
  // Accede al valor seleccionado del select y asígnalo a selectedDegree
  selectedDegree = (event.target as HTMLSelectElement).value;
  console.log(selectedDegree)
};

const { mutate, error } = useMutation({
  mutationFn: (req: {organization_id:string, first_name:string, last_name:string, phone_number:string, started_studies_date:string, email : string, password : string, verify_password: string, degreeId: string }) => signUpStudent(req),
})

const submit = handleSubmit((values) => {
  // Incluir degreeId en los valores enviados a la función mutate
  mutate({ ...values, degreeId: selectedDegree })
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
            <FormInput name="first_name" type="text" placeholder="First name"/>
            <FormInput name="last_name" type="text" placeholder="Last name"/>
            <FormInput name="phone_number" type="text" placeholder="Phone number"/>
            <FormInput name="started_studies_date" type="date" placeholder="Date you started your studies"/>
          </div>
          <select id="degreeSelect" v-model="selectedDegree" @change="handleChange" class="flex space-x-2 items-center rounded-3xl bg-gray-100 py-1 text-[#7C7C7C]">
            <option v-for="degree in degrees" :key="degree.id" :value="degree.id">{{ degree.name }}</option>
          </select>
          <FormInput name="email" type="email" placeholder="Email"/>
          <FormInput name="password" type="password" placeholder="Password"/>
          <FormInput name="verify_password" type="password" placeholder="Confirm Password"/>
          <FormButton text="Sign up" type="submit" @click="submit"/>
          <button type="button" @click="router.replace(basePath + '/auth/signin')" class="bg-gray-100 text-gray-500 font-semibold px-3 py-1 rounded-3xl h-8 text-sm w-full">Log in</button>
          <p class="text-red-500">{{error}}</p>
        </div>
      </div>
    </section>
  </main>
</template>
