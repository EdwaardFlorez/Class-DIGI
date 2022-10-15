import { createRouter, RouteRecordRaw ,createWebHashHistory } from "vue-router";
import Login from "../views/Login.vue"
import Home from "../views/Home.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
