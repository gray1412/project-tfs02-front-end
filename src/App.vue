<template>
  <div class="main-wrapper main-wrapper-2">
    <HeaderDefault />
    <router-view />
    <FooterDefault />
  </div>
</template>

<script>
import HeaderDefault from "./components/layout/HeaderDefault.vue";
import FooterDefault from "./components/layout/FooterDefault.vue";

// import * as modernizr from "./assets/js/vendor/modernizr-3.11.2.min";
// import * as jquery from "./assets/js/vendor/jquery-3.6.0.min";
// import * as jquery_migrate from "./assets/js/vendor/jquery-migrate-3.3.2.min";
// import * as popper from "./assets/js/vendor/popper.min";
// import "./assets/js/vendor/bootstrap.min";
// import "./assets/js/plugins/wow";
// import "./assets/js/plugins/scrollup";
// import "./assets/js/plugins/aos";
// import "./assets/js/plugins/magnific-popup";
// import "./assets/js/plugins/jquery.syotimer.min";
// import "./assets/js/plugins/swiper.min";
// import "./assets/js/plugins/imagesloaded.pkgd.min";
// import "./assets/js/plugins/isotope.pkgd.min";
// import "./assets/js/plugins/jquery-ui";
// import "./assets/js/plugins/jquery-ui-touch-punch";
// import "./assets/js/plugins/jquery.nice-select.min";
// import "./assets/js/plugins/waypoints.min";
// import "./assets/js/plugins/counterup.min";
// import "./assets/js/plugins/select2.min";
// import "./assets/js/plugins/easyzoom";
// import "./assets/js/plugins/slinky.min";
// import "./assets/js/plugins/ajax-mail";
// import "./assets/js/main";

export default {
  name: "App",
  components: {
    HeaderDefault,
    FooterDefault,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
