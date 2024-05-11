import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import routes from "./routes";
import { BootstrapIconsPlugin } from "bootstrap-icons-vue";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as FaIcons from "oh-vue-icons/icons/fa";
import * as BiIcons from "oh-vue-icons/icons/bi";
import * as IoIcons from "oh-vue-icons/icons/io";
import * as MdIcons from "oh-vue-icons/icons/md";
import CKEditor from '@ckeditor/ckeditor5-vue';
import {VueQueryPlugin} from "@tanstack/vue-query";

const icons = Object.values({ ...FaIcons, ...BiIcons, ...IoIcons, ...MdIcons});
addIcons(...icons);

createApp(App)
    .component("vue-icon", OhVueIcon)
    .use(BootstrapIconsPlugin)
    .use(CKEditor)
    .use(routes.router)
    .use(VueQueryPlugin)
    .mount('#base')
