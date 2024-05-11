import {auth} from "./auth.ts";
import {landing} from "./landing.ts";
import {base} from "./base.ts";
import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes : [
        {
            path : '/organizations/:organization_id',
            children: [
                ...auth,
                ...landing,
                ...base
            ]
        }
    ]
})

export default {
    router
}