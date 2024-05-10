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
                name: "SignIn",
                path : "signin",
                component: SignIn,
            },
            {
                name: "SignUp",
                path : "signup",
                component: SignUp
            }
        ]
    }]