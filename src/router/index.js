import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home/home";
import Order from "@/views/Order/order";
import Find from "@/views/Find/find";
import My from "@/views/My/my";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "index",
    component: Home,
  },
  {
    path: "/order",
    name: "order",
    component: Order,
  },
  {
    path: "/find",
    name: "find",
    component: Find,
  },
  {
    path: "/my",
    name: "my",
    component: My,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
