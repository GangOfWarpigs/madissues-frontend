<script setup lang="ts">
import { computed, ref } from "vue";
import IssueCard from "./IssueCard.vue";
import { Issue } from "../../../api/organizations";
import Empty from "../../shared/Empty.vue";
import { filterBySearchQuery, orderByMultiplePriorities } from "../../../helpers.ts";

const { issues } = defineProps<{ issues: Issue[] }>();
const searchQuery = ref("");
const orderPriority = ref<string[]>([]);

const solved = computed(() => issues.filter((x) => x.status === "Solved").length);
const queued = computed(() => issues.filter((x) => x.status === "Queued").length);

const filteredIssues = computed(() => {
  return orderByMultiplePriorities(
    filterBySearchQuery(issues, searchQuery.value),
    orderPriority.value
  );
});

const handlePriorityChange = (priority: string) => {
  if (orderPriority.value.includes(priority)) {
    orderPriority.value = [];
    return;
  }
  orderPriority.value = [priority];
};
</script>

<template>
  <div class="w-full flex flex-col">
    <div class="flex items-center mb-4">
      <div class="relative">
        <vue-icon
          name="io-search"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"
        />
        <input
          type="text"
          v-model="searchQuery"
          class="pl-10 pr-4 text-base rounded-full focus:outline-none focus:border-blue-500 bg-gray-100 py-2"
          placeholder="Search by title..."
        />
      </div>
    </div>
    <div class="flex items-center justify-between px-2 text-gray-400 text-sm font-normal">
      <div class="flex items-center">
        <div class="flex items-center mr-4">
          <vue-icon name="bi-record-circle-fill" />
          <p class="ml-2">{{ queued }} Queued</p>
        </div>
        <div class="flex items-center">
          <vue-icon name="bi-check-circle-fill" />
          <p class="ml-2">{{ solved }} Solved</p>
        </div>
      </div>
      <div class="flex items-center">
        <div
          class="flex items-center mr-5 cursor-pointer select-none"
          @click="handlePriorityChange('title')"
        >
          <p class="mr-1">Title</p>
          <b-icon-caret-down-fill
            class="text-xs"
            v-if="!orderPriority.includes('title')"
          ></b-icon-caret-down-fill>
          <b-icon-caret-up-fill
            class="text-xs"
            v-if="orderPriority.includes('title')"
          ></b-icon-caret-up-fill>
        </div>
        <div
          class="flex items-center mr-5 cursor-pointer select-none"
          @click="handlePriorityChange('course')"
        >
          <p class="mr-1">Subject</p>
          <b-icon-caret-down-fill
            class="text-xs"
            v-if="!orderPriority.includes('course')"
          ></b-icon-caret-down-fill>
          <b-icon-caret-up-fill
            class="text-xs"
            v-if="orderPriority.includes('course')"
          ></b-icon-caret-up-fill>
        </div>
        <div
          class="flex items-center cursor-pointer select-none"
          @click="handlePriorityChange('status')"
        >
          <p class="mr-1">Status</p>
          <b-icon-caret-down-fill
            class="text-xs"
            v-if="!orderPriority.includes('status')"
          ></b-icon-caret-down-fill>
          <b-icon-caret-up-fill
            class="text-xs"
            v-if="orderPriority.includes('status')"
          ></b-icon-caret-up-fill>
        </div>
      </div>
    </div>
    <div class="w-full flex flex-col space-y-4 mt-4">
      <IssueCard v-for="issue in filteredIssues" :key="issue.id" :issue="issue" />
    </div>
    <div
      class="w-full flex flex-col justify-center items-center mt-10"
      v-if="filteredIssues.length > 10"
    >
      <button class="border rounded-lg px-5 py-2 font-semibold" @click="">
        Load more
      </button>
    </div>
    <Empty item="issue" v-if="filteredIssues.length == 0"></Empty>
  </div>
</template>
