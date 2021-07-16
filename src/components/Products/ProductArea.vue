<template>
  <div class="product-area pb-95">
    <div class="container">
      <div
        class="section-border section-border-margin-1"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div class="section-title-timer-wrap bg-white">
          <div class="section-title-1">
            <h2>Deal Of The Day</h2>
          </div>
          <div id="timer-1-active" class="timer-style-1">
            <span>End In: </span>
            <div data-countdown="2021/8/30"></div>
          </div>
        </div>
      </div>
      <div class="product-slider-active-1 swiper-container">
        <div class="swiper-wrapper">
          <Product />
          <Product />
          <Product />
          <Product />
          <div
            class="product-prev-1 product-nav-1"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <i class="fa fa-angle-left"></i>
          </div>
          <div
            class="product-next-1 product-nav-1"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <i class="fa fa-angle-right"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "./Product.vue";
export default {
  components: { Product },
  name: "ProductArea",
};
</script>

<style>
</style>