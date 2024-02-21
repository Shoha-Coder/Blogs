import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import RegisterViewVue from "@/views/RegisterView.vue";
import LoginViewVue from "@/views/LoginView.vue";
import ArticleDetailView from "@/views/ArticleDetailView.vue";
import CreateArticleView from "@/views/CreateArticleView.vue"

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
    {
      path: '/article/:slug',
      name: 'article-detail',
      component: ArticleDetailView
    },
    {
      path: '/article/create',
      name: 'create-article',
      component: CreateArticleView
    }
  ],
});

export default router;
