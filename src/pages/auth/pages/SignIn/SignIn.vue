<script setup lang="ts">
import FormInput  from "../../components/FormInput.vue";
import * as yup from 'yup';
import {useForm} from "vee-validate";


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
  <form @submit.prevent="submit">
    <div class="flex flex-col w-full space-y-3">
      <FormInput name="email" type="email" placeholder="Email"/>
      <FormInput name="password" type="password" placeholder="Password"/>
      <FormInput name="passwordConfirmation" type="password" placeholder="Confirm Password"/>
      <button>Submit</button>
    </div>

  </form>

</template>
