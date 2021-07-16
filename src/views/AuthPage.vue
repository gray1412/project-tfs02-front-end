<template>
  <div>
    <div class="breadcrumb-area bg-gray-4 breadcrumb-padding-1">
      <div class="container">
        <div class="breadcrumb-content text-center">
          <h2>Login - Register</h2>
          <ul>
            <li><a>Home</a></li>
            <li><i class="ti-angle-right"></i></li>
            <li>Login - Register</li>
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
    <LoginRegister />
  </div>
</template>

<script>
import LoginRegister from "@/components/Auth/LoginRegister.vue";

export default {
  name: "AuthPage",
  components: {
    LoginRegister,
  },
};
</script>

<style>
</style>