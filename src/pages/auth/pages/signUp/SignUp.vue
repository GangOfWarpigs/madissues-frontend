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
          <FormInput name="degree" type="text" placeholder="Degree"/>
          <FormInput name="email" type="email" placeholder="Email"/>
          <FormInput name="password" type="password" placeholder="Password"/>
          <FormInput name="verify_password" type="password" placeholder="Confirm Password"/>
          <FormButton text="Sign up" type="submit" @click="submit"/>
          <button type="button" @click="router.replace(basePath + '/auth/signin')" class="bg-gray-100 text-gray-500 font-semibold px-3 py-1 rounded-3xl h-8 text-sm w-full">Log in</button>
        </div>
      </div>
    </section>
  </main>
</template>
