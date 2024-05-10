import {RouteRecordRaw} from "vue-router";
import SignIn from "../pages/auth/pages/SignIn/SignIn.vue";
import SignUp from "../pages/auth/pages/SignUp/SignUp.vue";
import Auth from "../pages/auth/Auth.vue";


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
