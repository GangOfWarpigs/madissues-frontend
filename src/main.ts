import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import routes from "./routes";
import { BootstrapIconsPlugin } from "bootstrap-icons-vue";

createApp(App)
    .use(BootstrapIconsPlugin)
    .use(routes.router)
    .mount('#base')
