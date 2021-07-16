<template>
  <div>
    <Slider />
    <Banner />
    <ProductArea />
    <Service />
    <ProductDetail />
    <ProductAreaOther />
    <Brand />
    <Blog />
  </div>
</template>

<script>
import Slider from "../components/Slider.vue";
import Banner from "../components/Banner.vue";
import ProductArea from "../components/Products/ProductArea.vue";
import Service from "../components/Service.vue";
import ProductDetail from "../components/Products/ProductDetail.vue";
import ProductAreaOther from "../components/Products/ProductAreaOther.vue";
import Brand from "../components/Brand.vue";
import Blog from "../components/Blog.vue";

export default {
  name: "Homepage",
  components: {
    Slider,
    Banner,
    ProductArea,
    Service,
    ProductDetail,
    ProductAreaOther,
    Brand,
    Blog,
  },
};
</script>

<style>
</style>