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


const schema = yup.object({
  email: yup.string().required().email(),
  first_name: yup.string().required("First name is required*"),
  last_name: yup.string().required("Last name is required*"),
  phone_number: yup.string().required("Phone number is required*"),
  started_studies_date: yup.date().required("Date is required*"),
  degree: yup.string().required("A degree must be selected*"),
  password : yup
      .string()
      .required("Password is required*")
      .matches(
          /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$/,
          'Password must contain at least one uppercase letter, one number and must be at least 8 characters'
      ),
  verify_password: yup
      .string()
      .oneOf([yup.ref('password'), ''], 'Passwords must match')
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
  <main class="w-full h-screen grid grid-cols-2 relative">
      <section class="w-full h-full bg-blue-500 col-span-1 flex flex-col items-center justify-center">
        <p class="text-white font-semibold text-xl text-center max-w-[40rem]">
          Lorem ipsum dolor sit ¡amet, consectetur adipiscing elit. Aenean maximus metus id justo molestie dictum. Integer vitae commodo enim, vel dapibus ante. Pellentesque et elementum mi.
        </p>
      </section>
      <section class="w-full h-full col-span-1 flex flex-col items-center justify-center">
        <div class="flex flex-col mb-14">
          <h1 class="text-center font-semibold text-gray-700 text-3xl mb-1">Join our community of MadIssues</h1>
        </div>
        <div class="flex flex-col gap-3 w-[30rem]">
          <div class="grid grid-cols-2 gap-4">
            <FormInput name="first_name" type="text" placeholder="First name"/>
            <FormInput name="last_name" type="text" placeholder="Last name"/>
            <FormInput name="phone_number" type="text" placeholder="Phone number"/>
            <FormInput name="started_studies_date" type="date" placeholder="Date you started your studies"/>
          </div>
          <!-- AQUÍ VA EL SELECT -->
          <FormInput name="email" type="email" placeholder="Email"/>
          <FormInput name="password" type="password" placeholder="Password"/>
          <FormInput name="verify_password" type="password" placeholder="Confirm Password"/>
          <FormButton text="Sign up" type="submit" @click="submit"/>
          <button type="button" @click="router.replace(basePath + '/auth/signin')" class="bg-gray-100 text-gray-500 font-semibold px-3 py-1 rounded-3xl h-8 text-sm w-full">
            Sign in
          </button>
        </div>
      </section>
      <div class="absolute w-full pr-3 pl-10 pt-1 top-0 left-0 flex justify-between items-center">
        <img src="../../../../assets/icons/madissues/transparent_logo_rectangle.svg" alt="Logo MadIssues" width="200" height="200">
        <img src="../../../../assets/icons/madissues/transparent_logo_ulpgc_deii.svg" alt="Logo Organización" width="300" height="300">
      </div>
  </main>
</template>