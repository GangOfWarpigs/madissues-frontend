<script setup lang="ts">
    import IssueCommentBox from './components/IssueCommentBox.vue';
    import IssueDetails from './components/IssueDetails.vue';
    import CommentBox from './components/CommentBox.vue';
    import { Issue } from '../../../../../../api/organizations';
    import { getIssueById, getIssueComments, IssueComment } from '../../../../../../api/issues';
    import { useQuery } from '@tanstack/vue-query';
    import { useRoute } from 'vue-router';

    const issueId = useRoute().params["issue_id"] as string;

    const { data:issue, isSuccess:issueIsSuccess } = useQuery<Issue>({
        queryKey: ["issue_id", issueId],
        queryFn: async () => await getIssueById(issueId)
    });

    const { data:comments, isSuccess:commentsIsSuccess } = useQuery<IssueComment[]>({
        queryKey: ["issue_id", issueId, "comments"],
        queryFn: async () => await getIssueComments(issueId)
    });

    const goBack = () => {
      window.history.back();
    };
</script>

<template>
    <div class="flex flex-row w-full">
      <button @click="goBack" class="mr-4 flex items-center justify-center h-10 w-10 rounded-full bg-[#F5F5F5] hover:bg-gray-200 focus:outline-none translate-y-8 -translate-x-7">
        <b-icon-chevron-left class="text-[#828282] text-bg scale-[120%] -translate-x-0.5"/>
      </button>
      <div class="flex flex-col w-full">
        <IssueDetails :issue="issue" v-if="issue !== undefined && issueIsSuccess"/>
        <section class="w-full flex flex-col">
            <CommentBox />
            <IssueCommentBox v-for="comment in comments" :comment="comment" v-if="comments !== undefined && commentsIsSuccess"/>
        </section>
      </div>
    </div>
</template>