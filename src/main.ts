import { createApp } from "vue";
import { createPinia } from "pinia";

import router from "@/router";
import App from "./App.vue";

import "virtual:svg-icons-register";

createApp(App).use(createPinia()).use(router).mount("#app");
