<template>
  <div class="col-lg-3 col-md-4 col-sm-6 col-12">
    <div class="product-wrap mb-35" data-aos="fade-up" data-aos-delay="200">
      <div class="product-img img-zoom mb-25">
        <a>
          <img
            src="assets/images/product/product-2.png"
            @click="$router.push({ name: 'ProductDetailPage' })"
            alt=""
          />
        </a>
        <div class="product-badge badge-top badge-right badge-pink">
          <span>10%</span>
        </div>
        <div class="product-action-wrap">
          <button class="product-action-btn-1" title="Wishlist">
            <i class="pe-7s-like"></i>
          </button>
          <button
            class="product-action-btn-1"
            title="Quick View"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <i class="pe-7s-look"></i>
          </button>
        </div>
        <div class="product-action-2-wrap">
          <button class="product-action-btn-2" title="Add To Cart">
            <i class="pe-7s-cart"></i> Add to cart
          </button>
        </div>
      </div>
      <div class="product-content">
        <h3 @click="$router.push({ name: 'ProductDetailPage' })">
          <a>Garmin Fenix 6X </a>
        </h3>
        <div class="product-price">
          <span class="old-price">21.490.000 ₫</span>
          <span class="new-price">19.170.000 ₫</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import products from "@/data/products.js";

export default {
  name: "Product",
  data() {
    return { products };
  },
};
</script>

<style>
</style>