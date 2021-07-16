<template>
  <div>
    <div class="breadcrumb-area bg-gray-4 breadcrumb-padding-1">
      <div class="container">
        <div class="breadcrumb-content text-center">
          <h2 data-aos="fade-up" data-aos-delay="200">Product Details</h2>
          <ul data-aos="fade-up" data-aos-delay="400">
            <li><a href="index.html">Home</a></li>
            <li><i class="ti-angle-right"></i></li>
            <li>Product Details</li>
          </ul>
        </div>
      </div>
      <div class="breadcrumb-img-1" data-aos="fade-right" data-aos-delay="200">
        <img src="assets/images/banner/breadcrumb-1.png" alt="" />
      </div>
      <div class="breadcrumb-img-2" data-aos="fade-left" data-aos-delay="200">
        <img src="assets/images/banner/breadcrumb-2.png" alt="" />
      </div>
    </div>
    <ProductDetail />
  </div>
</template>

<script>
import ProductDetail from "@/components/Products/ProductDetail.vue";

export default {
  name: "ProductDetailPage",
  components: {
    ProductDetail,
  },
};
</script>

<style>
</style>