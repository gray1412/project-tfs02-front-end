import Vue from "vue";
import VueRouter from "vue-router";
import ProductDetailPage from "../views/ProductDetailPage.vue";
import Homepage from "../views/Homepage.vue";
import Login from "../views/auth/Login.vue";
import Register from "../views/auth/Register.vue";
import ForgotPassword from "../views/auth/ForgotPassword.vue";
import ResetPassword from "../views/auth/ResetPassword.vue";
import CartPage from "../views/CartPage.vue";
import CheckoutPage from "../views/CheckoutPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Homepage",
    component: Homepage,
  },
  {
    path: "/product-detail",
    name: "ProductDetailPage",
    component: ProductDetailPage,
  },
  {
    path: "/auth-login",
    name: "Login",
    component: Login,
  },
  {
    path: "/auth-register",
    name: "Register",
    component: Register,
  },
  {
    path: "/auth-forgot",
    name: "ForgotPassword",
    component: ForgotPassword,
  },
  {
    path: "/auth-reset",
    name: "ResetPassword",
    component: ResetPassword,
  },
  {
    path: "/cart",
    name: "CartPage",
    component: CartPage,
  },
  {
    path: "/checkout",
    name: "CheckoutPage",
    component: CheckoutPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
