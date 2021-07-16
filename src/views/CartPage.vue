<template>
  <div>
    <div class="breadcrumb-area bg-gray-4 breadcrumb-padding-1">
      <div class="container">
        <div class="breadcrumb-content text-center">
          <h2>Cart</h2>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><i class="ti-angle-right"></i></li>
            <li>Cart</li>
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
    <div class="cart-area pt-100 pb-100">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <CartTable />
            <div class="row">
              <Shipping />
              <Discount />
              <SubTotal />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartTable from "@/components/Cart/CartTable.vue";
import Shipping from "@/components/Cart/Shipping.vue";
import Discount from "@/components/Cart/Discount.vue";
import SubTotal from "@/components/Cart/SubTotal.vue";

export default {
  name: "CartPage",
  components: {
    CartTable,
    Shipping,
    Discount,
    SubTotal,
  },
};
</script>

<style>
</style>