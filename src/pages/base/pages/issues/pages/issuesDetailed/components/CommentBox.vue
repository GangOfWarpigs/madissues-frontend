<script setup lang="ts">
    import {useForm} from "vee-validate";
    import AreaInput from "@/pages/auth/components/AreaInput.vue";
    import {useRoute} from "vue-router";
    import {useMutation, useQueryClient} from "@tanstack/vue-query";
    import {createComment} from "@/api/organizations.ts";
    import * as yup from "yup";

    const emit = defineEmits(['newComment']);

    const schema = yup.object({
      content: yup.string().required("Content is required").max(255),
    });

    const route = useRoute()
    const id = route.params["issue_id"] as string

    const { handleSubmit, resetForm} = useForm<{issue_id : string, content: string}>({
      initialValues: {
        issue_id : id,
      },
      validationSchema: schema
    })

    const queryClient = useQueryClient()

    const {mutate} = useMutation({
      mutationFn: async (values : {issue_id : string, content: string}) => await createComment(values),
      onSuccess: () => {
        queryClient.refetchQueries({queryKey: ["issue_id", id, "comments"]})
        resetForm()
      }
    })

    const submit = handleSubmit((value) => mutate(value))

</script>

<template>
    <div class="w-full flex flex-col px-8 py-5 bg-gray-100 rounded-lg box-border">
        <p class="font-semibold text-sm text-gray-600">Write a comment</p>
        <AreaInput
            placeholder="Put your content here"
            name="content"
        ></AreaInput>
        <div class="w-full flex justify-end items-center">
            <button @click="submit" class="text-sm font-semibold text-white px-3 py-1 rounded bg-blue-500 cursor-pointer active:scale-95">Publish</button>
        </div>
    </div>
</template>