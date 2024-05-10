<script setup lang="ts">
import FormInput  from "../../components/FormInput.vue";
import * as yup from 'yup';
import {useForm} from "vee-validate";
import FormButton from "../../components/FormButton.vue"

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

    <div class="items-start w-full p-2">
      <img src="../../../../../src/assets/icons/madissues/transparent_logo_ulpgc_deii.svg" alt="Logo" width="200" height="200">
    </div>
    <div class="w-full h-full flex flex-col justify-center items-center">
      <div class="-translate-y-16">
        <h2 class="w-full text-center text-[2.5em] text-black font-bold mb-3">Welcome back</h2>
        <h4 class="w-full text-center text-[1.2em] text-[#505050]">please enter your data for log in</h4>
      </div>
      <article class="w-full max-w-[70%] px-20  text-[0.50rem] space-y-5">
        <form @submit.prevent="submit">
          <div class="flex flex-col text-xs w-full space-y-2.5">
            <FormInput name="email" type="email" placeholder="Email"/>
            <FormInput name="password" type="password" placeholder="Password"/>
            <FormButton text="Sign in" type="submit"/>
          </div>
        </form>
        <p class="text-center text-[#ADADAD] text-[1.5em]">o tambien puedes</p>
        <section class="flex flex-col space-y-2 items-center mx-7">
          <div class="w-full">
            <button class="bg-[#404040] h-9 text-[1.7em] text-white font-medium px-3 py-1 rounded-3xl w-full">Access with Microsoft</button>
          </div>
          <div class="w-full">
            <button class="bg-[#F5F5F5] h-9 text-[1.7em] font-medium px-3 py-1 rounded-3xl w-full">Access with Google</button>
          </div>
        </section>

      </article>
    </div>

  <div class="flex-row flex items-end justify-center pb-12">
    <p class="text-xs">Not registered yet? <a href="#" style="color: blue;">Get Started</a></p>
  </div>

</template>
