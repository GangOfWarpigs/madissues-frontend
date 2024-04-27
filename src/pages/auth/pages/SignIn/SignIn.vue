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


const { handleSubmit } = useForm<{email : string, password : string, passwordConfirmation: string}>({
  validationSchema: schema,
  initialValues: {
    email: "",
    password: "",
    passwordConfirmation: ""
  }
})

const submit = handleSubmit((values) => {
  console.log(values.email, values.password, values.passwordConfirmation)
});

</script>

<template>
    <div class="items-start w-full">
      <p>Logo uni</p>
    </div>
    <h2 class="w-full text-center text-[#505050] font-bold">Join our community of MadIssues</h2>
    <article class="w-full px-20  text-[0.50rem] space-y-2">
      <form @submit.prevent="submit">
        <div class="flex flex-col w-full space-y-1.5">
          <FormInput name="email" type="email" placeholder="Email"/>
          <FormInput name="password" type="password" placeholder="Password"/>
          <FormInput name="passwordConfirmation" type="password" placeholder="Confirm Password"/>
          <FormButton text="Sign up" type="submit"/>
        </div>
      </form>
      <p class="text-center text-[#ADADAD]">o tambien puedes</p>
      <section class="flex flex-col space-y-2 items-center mx-7">
        <div class="w-full">
          <button class="bg-[#404040] text-white font-medium px-3 py-1 rounded-3xl w-full">Access with Microsoft</button>
        </div>
        <div class="w-full">
          <button class="bg-[#F5F5F5] text-[#505050] font-medium px-3 py-1 rounded-3xl w-full">Access with Google</button>
        </div>
      </section>
    </article>


</template>
