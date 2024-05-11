import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import routes from "./routes";
import { BootstrapIconsPlugin } from "bootstrap-icons-vue";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as FaIcons from "oh-vue-icons/icons/fa";
import * as BiIcons from "oh-vue-icons/icons/bi";
import * as IoIcons from "oh-vue-icons/icons/io";
import * as RiIcons from "oh-vue-icons/icons/ri";
import * as PrIcons from "oh-vue-icons/icons/pr";
import * as OiIcons from "oh-vue-icons/icons/oi";
import * as MdIcons from "oh-vue-icons/icons/md";
import * as LaIcons from "oh-vue-icons/icons/la";
import * as HiIcons from "oh-vue-icons/icons/hi";
import * as CiIcons from "oh-vue-icons/icons/ci";
import * as GiIcons from "oh-vue-icons/icons/gi";
import * as CoIcons from "oh-vue-icons/icons/co";
import * as AiIcons from "oh-vue-icons/icons/ai";
import CKEditor from '@ckeditor/ckeditor5-vue';
import {VueQueryPlugin} from "@tanstack/vue-query";

const icons = Object.values({ ...FaIcons, ...BiIcons, ...IoIcons, ...RiIcons, ...PrIcons, ...OiIcons, ...MdIcons, ...LaIcons, 
    ...HiIcons, ...CiIcons, ...GiIcons, ...CoIcons, ...AiIcons });
addIcons(...icons);

createApp(App)
    .component("vue-icon", OhVueIcon)
    .use(BootstrapIconsPlugin)
    .use(CKEditor)
    .use(VueQueryPlugin)
    .use(routes.router)
    .use(VueQueryPlugin)
    .mount('#base')
