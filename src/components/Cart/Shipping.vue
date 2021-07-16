<template>
  <div class="col-lg-4 col-md-6 col-12">
    <div class="cart-calculate-discount-wrap mb-40">
      <h4>Calculate shipping</h4>
      <div class="calculate-discount-content">
        <div class="select-style mb-15">
          <select class="select-two-active">
            <option>Bangladesh</option>
            <option>Bahrain</option>
            <option>Azerbaijan</option>
            <option>Barbados</option>
            <option>Barbados</option>
          </select>
        </div>
        <div class="select-style mb-15">
          <select class="select-two-active">
            <option>State / County</option>
            <option>Bahrain</option>
            <option>Azerbaijan</option>
            <option>Barbados</option>
            <option>Barbados</option>
          </select>
        </div>
        <div class="input-style">
          <input type="text" placeholder="Town / City" />
        </div>
        <div class="input-style">
          <input type="text" placeholder="Postcode / ZIP" />
        </div>
        <div class="calculate-discount-btn btn-hover">
          <a class="btn theme-color" href="#">Update</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Shipping",
};
</script>

<style>
</style>