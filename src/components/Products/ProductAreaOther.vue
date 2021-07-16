<template>
  <div class="product-area pb-60">
    <div class="container">
      <div class="section-title-tab-wrap mb-75">
        <div class="section-title-2" data-aos="fade-up" data-aos-delay="200">
          <h2>Hot Products</h2>
        </div>
        <div class="tab-style-1 nav" data-aos="fade-up" data-aos-delay="400">
          <a class="active" href="#pro-1" data-bs-toggle="tab">New Arrivals </a>
          <a href="#pro-2" data-bs-toggle="tab" class=""> Best Sellers </a>
          <a href="#pro-3" data-bs-toggle="tab" class=""> Sale Items </a>
        </div>
      </div>
      <div class="tab-content jump">
        <div id="pro-1" class="tab-pane active">
          <div class="row">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
        <div id="pro-2" class="tab-pane">
          <div class="row">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
        <div id="pro-3" class="tab-pane">
          <div class="row">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "./Product.vue";

export default {
  name: "ProductAreaOther",
  components: {
    Product,
  },
};
</script>

<style>
</style>