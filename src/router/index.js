import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "login",
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/LoginPage-vue3.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
