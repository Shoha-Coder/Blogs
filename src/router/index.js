import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import RegisterViewVue from "@/views/RegisterView.vue";
import LoginViewVue from "@/views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterViewVue,
    },
    {
      path: "/login",
      name: "login",
      component: LoginViewVue,
    },
  ],
});

export default router;
