import Vue from "vue";
import VueRouter from "vue-router";
import ProductDetailPage from "../views/ProductDetailPage.vue";
import Homepage from "../views/Homepage.vue";
import AuthPage from "../views/AuthPage.vue";
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
    path: "/ProductDetailPage",
    name: "ProductDetailPage",
    component: ProductDetailPage,
  },
  {
    path: "/AuthPage",
    name: "AuthPage",
    component: AuthPage,
  },
  {
    path: "/CartPage",
    name: "CartPage",
    component: CartPage,
  },
  {
    path: "/CheckoutPage",
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
