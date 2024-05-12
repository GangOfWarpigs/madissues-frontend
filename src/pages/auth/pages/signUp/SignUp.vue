<script setup lang="ts">
import FormInput  from "../../components/FormInput.vue";
import * as yup from 'yup';
import {useForm} from "vee-validate";
import FormButton from "../../components/FormButton.vue"
import {useRoute, useRouter} from "vue-router";
import {useMutation, useQuery} from "@tanstack/vue-query";
import {
  getOrganizationById,
  signUpStudent
} from "../../../../api/organizations.ts";
import FormSelect from "../../components/FormSelect.vue";
import { calculateGradient } from "../../../../helpers.ts";
import { baseURL } from "../../../../api/client.ts";

const router = useRouter()
// const routeId = useRoute().params.id;
const route = useRoute()
const organizationId = route.params["organization_id"] as string
console.log(organizationId)
const basePath = "/organizations/" + organizationId

const schema = yup.object({
  email: yup.string().required().email(),
  first_name: yup.string().required("First name is required*"),
  last_name: yup.string().required("Last name is required*"),
  phone_number: yup.string().required("Phone number is required*"),
  started_studies_date: yup.string().required("Date is required*"),
  degreeId: yup.string().required("A degree must be selected*"),

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

const { mutate, error } = useMutation({
  mutationFn: (req: {organization_id:string, first_name:string, last_name:string, phone_number:string, started_studies_date:string, email : string, password : string, verify_password: string, degreeId: string }) => signUpStudent(req),
  onSuccess: (response) => {
    if (response && response.token) {
      const token = response.token;
      localStorage.setItem("token", token);
      router.push({name:"Home"});
    }
  },
})

const submit = handleSubmit((values) => {
  // Incluir degreeId en los valores enviados a la función mutate
  mutate({ ...values, })
});

const { data } = useQuery({
    queryKey: ["organizations", organizationId],
    queryFn: async () => await getOrganizationById(organizationId)
})
</script>

<template>
  <main class="w-full h-screen grid grid-cols-2 relative">
    <section :style="calculateGradient(data?.primary_color!, data?.secondary_color!)" class="w-full h-full col-span-1 flex flex-col items-center justify-center">
      <div class="text-white font-semibold text-xl text-center max-w-[40rem]" v-html="data?.description" ></div>
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
          <FormInput name="started_studies_date" type="date" placeholder=""/>
        </div>
        <FormSelect class-name="!bg-gray-100" path="degrees" name="degreeId"/>
        <FormInput name="email" type="email" placeholder="Email"/>
        <FormInput name="password" type="password" placeholder="Password"/>
        <FormInput name="verify_password" type="password" placeholder="Confirm Password"/>
        <FormButton text="Sign up" type="submit" :color="data?.primary_color" @click="submit"/>
        <button type="button" @click="router.replace(basePath + '/auth/signin')" class="bg-gray-100 text-gray-500 font-semibold px-3 py-1 rounded-3xl h-8 text-sm w-full">
          Sign in
        </button>
        <p class="text-red-500">{{error}}</p>
      </div>
    </section>
    <div class="absolute w-full px-10 pt-5 top-0 left-0 flex justify-between items-center">
      <img src="../../../../assets/icons/madissues/transparent_logo_rectangle.svg" alt="Logo MadIssues" width="200" height="200">
      <div class="flex items-center text-gray-700">
        <img :src="baseURL + '/media/organizations/' + data?.logo" class="h-[50px] w-[50px] bg-gray-200 rounded-full mr-4" alt="Logo Organization" width="50" height="50">
        <p class="font-semibold text-lg">{{ data?.name }}</p>
      </div>
    </div>
  </main>
</template>