import Base from "../pages/base/Base.vue";
import Home from "../pages/base/pages/home/Home.vue";
import Issues from "../pages/base/pages/issues/Issues.vue";
import IssuesList from "../pages/base/pages/issues/pages/issuesList/IssuesList.vue";
import IssuesDetailed from "../pages/base/pages/issues/pages/issuesDetailed/IssuesDetailed.vue";
import IssuesCreate from "../pages/base/pages/issues/pages/issuesCreate/IssuesCreate.vue";
import Faqs from "../pages/base/pages/faqs/Faqs.vue";
import FaqsList from "../pages/base/pages/faqs/pages/faqsList/FaqsList.vue";
import FaqsDetailed from "../pages/base/pages/faqs/pages/faqsDetailed/FaqsDetailed.vue";
import FaqsCreate from "../pages/base/pages/faqs/pages/faqsCreate/FaqsCreate.vue";
import Profile from "../pages/base/pages/profile/Profile.vue";
import ProfileInformation from "../pages/base/pages/profile/pages/profileInformation/ProfileInformation.vue";
import ProfileIssues from "../pages/base/pages/profile/pages/profileIssues/ProfileIssues.vue";
import ProfileFaqs from "../pages/base/pages/profile/pages/profileFaqs/ProfileFaqs.vue";


export const base = [
    {
        path: 'base' ,
        component: Base,
        children: [
            {
                path: "home",
                name: "Home",
                component: Home,
            },
            {
                path: "issues",
                component: Issues,
                children: [
                    {
                        path: "",
                        component: IssuesList,
                    },
                    {
                        path: ":id",
                        component: IssuesDetailed,
                    },
                    {
                        path: "create",
                        component : IssuesCreate
                    }
                ]
            },
            {
                path: "faqs",
                component: Faqs,
                children: [
                    {
                        path: "",
                        component: FaqsList,
                    },
                    {
                        path: ":id",
                        component: FaqsDetailed,
                    },
                    {
                        path: "create",
                        component : FaqsCreate
                    }
                ]
            },
            {
                path: "profile",
                component: Profile,
                children: [
                    {
                        path: "information",
                        component: ProfileInformation,
                    },
                    {
                        path: "issues",
                        component: ProfileIssues,
                    },
                    {
                        path: "faqs",
                        component: ProfileFaqs,
                    }
                ]
            },
        ]
    }
]