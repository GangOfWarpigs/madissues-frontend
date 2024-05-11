<template>
  <Listbox v-if="isSuccess"  v-model="selectedPeople" multiple>
    <ListboxButton class="bg-white text-gray-500 rounded-full p-2 text-left flex justify-between px-4">
      <div>
        {{ selectedPeople?.length > 0 ? selectedPeople?.map(personId => people.find(x => x.id === personId).name).join(', ') : 'Select people' }}
      </div>
      <vue-icon class="mt-1" scale="0.9" name="bi-chevron-down"></vue-icon>
    </ListboxButton>
    <ListboxOptions class="absolute mt-20 w-[200px] bg-white shadow-lg max-h-60 rounded-md overflow-auto z-20">
      <ListboxOption v-for="person in people" :key="person.id" :value="person.id" class="cursor-pointer select-none relative p-2 hover:bg-gray-100 flex items-center">
        <div v-if="selectedPeople?.includes(person.id)">
          <vue-icon class="mt-1 text-green-500" scale="0.9" name="bi-check"></vue-icon>
        </div>
        {{ person.name }}
      </ListboxOption>
    </ListboxOptions>
  </Listbox>
  <span class="text-red-500" v-if="errorMessage">{{ errorMessage }}</span>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue';
import { useField } from 'vee-validate';
import {getOrganizationElement} from "@/api/organizations.ts";
import {useRoute} from "vue-router";
import {useQuery} from "@tanstack/vue-query";

// Define props received from parent
const props = defineProps({
  name: String,
  path: String
});


const route = useRoute()
const id = route.params["organization_id"]

const {data : people, isSuccess} = useQuery({
  queryKey: ["organizations", id, props.path],
  queryFn: () => getOrganizationElement(id, props.path),
})

// Access the form context



// Setup the field with the input name from props
const { value: selectedPeople, errorMessage, } = useField<number[]>(props.name);

// Define the list of people


</script>