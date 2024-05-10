import {RouteRecordRaw} from "vue-router";
import Auth from "../pages/auth/Auth.vue";
import SignIn from "../pages/auth/pages/signIn/SignIn.vue";
import SignUp from "../pages/auth/pages/signUp/SignUp.vue";

export const auth : RouteRecordRaw[] =
    [{
        path: 'auth',
        component: Auth,
        children: [
            {
                path : "signin",
                component: SignIn,
            },
            {
                path : "signup",
                component: SignUp
            }
        ]
    }]
