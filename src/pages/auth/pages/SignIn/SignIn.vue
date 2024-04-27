<script setup lang="ts">
import InputEmail  from "../../components/InputEmail.vue";
import InputPassword from "../../components/InputPassword.vue";
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


const { handleSubmit } = useForm<{email : string, password : string}>({
  validationSchema: schema,
  initialValues: {
    email: "",
    password: ""
  }
})

const submit = handleSubmit((values) => {
  console.log(values.email, values.password)
});

</script>

<template>
  <form @submit.prevent="submit">
    <InputEmail email="email" placeholder="Email"/>
    <InputPassword password="password" placeholder="Password"/>
    <button>Submit</button>
  </form>

</template>
