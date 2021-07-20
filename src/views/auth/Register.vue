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
    <div class="login-register-area pb-100 pt-95">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-12 offset-lg-2">
            <div class="login-register-wrapper">
              <div class="login-register-tab-list nav">
                <a
                  data-bs-toggle="tab"
                  @click="$router.push({ name: 'Login' })"
                >
                  <h4>login</h4>
                </a>
                <a
                  class="active"
                  data-bs-toggle="tab"
                  @click="$router.push({ name: 'Register' })"
                >
                  <h4>register</h4>
                </a>
              </div>
              <div class="tab-content">
                <div class="tab-pane active">
                  <div class="login-form-container">
                    <div class="login-register-form">
                      <form action="#" method="post">
                        <input
                          type="text"
                          name="first_name"
                          placeholder="First Name"
                        />
                        <input
                          type="text"
                          name="last_name"
                          placeholder="Last Name"
                        />
                        <input type="email" name="email" placeholder="Email" />
                        <input
                          type="password"
                          name="password"
                          placeholder="Password"
                        />
                        <input
                          type="password"
                          name="confirm_password"
                          placeholder="Confirm Password"
                        />
                        <div class="button-box btn-hover">
                          <button type="submit">Register</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
};
</script>

<style>
</style>