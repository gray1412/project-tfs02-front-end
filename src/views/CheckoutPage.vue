<template>
  <div>
    <div class="breadcrumb-area bg-gray-4 breadcrumb-padding-1">
      <div class="container">
        <div class="breadcrumb-content text-center">
          <h2>Checkout</h2>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><i class="ti-angle-right"></i></li>
            <li>Checkout</li>
          </ul>
        </div>
      </div>
      <div class="breadcrumb-img-1">
        <img src="assets/images/banner/breadcrumb-1.png" alt="" />
      </div>
      <div class="breadcrumb-img-2">
        <img src="assets/images/banner/breadcrumb-2.png" alt="" />
      </div>
    </div>
    <div class="checkout-main-area pb-100 pt-100">
      <div class="container">
        <div class="checkout-wrap pt-30">
          <div class="row">
            <BillingDetails />
            <Order />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BillingDetails from "@/components/Checkout/BillingDetails.vue";
import Order from "@/components/Checkout/Order.vue";

export default {
  name: "CheckoutPage",
  components: {
    BillingDetails,
    Order,
  },
};
</script>

<style>
</style>