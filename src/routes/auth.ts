import {RouteRecordRaw} from "vue-router";
import SignIn from "../pages/auth/pages/signIn/SignIn.vue";
import SignUp from "../pages/auth/pages/signUp/SignUp.vue";
import Auth from "../pages/auth/Auth.vue";

export const auth : RouteRecordRaw[] =
    [{
        path: 'auth',
        component: Auth,
        children: [
            {
                name: "signIn",
                path : "signin",
                component: SignIn,
            },
            {
                name: "signUp",
                path : "signup",
                component: SignUp
            }
        ]
    }]