import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/LoginPage.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/home/HomePage.vue"),
    children: [
      {
        path: "user",
        name: "User",
        component: () => import("@/views/user/User.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
