<template>
  <div class="col-lg-4 col-md-12 col-12">
    <div class="grand-total-wrap">
      <div class="grand-total-content">
        <h3>Subtotal <span>$180.00</span></h3>
        <div class="grand-shipping">
          <span>Shipping</span>
          <ul>
            <li>
              <input
                type="radio"
                name="shipping"
                value="info"
                checked="checked"
              /><label>Free shipping</label>
            </li>
            <li>
              <input
                type="radio"
                name="shipping"
                value="info"
                checked="checked"
              /><label>Flat rate: <span>$100.00</span></label>
            </li>
            <li>
              <input
                type="radio"
                name="shipping"
                value="info"
                checked="checked"
              /><label>Local pickup: <span>$120.00</span></label>
            </li>
          </ul>
        </div>
        <div class="shipping-country">
          <p>Shipping to Bangladesh</p>
        </div>
        <div class="grand-total">
          <h4>Total <span>$185.00</span></h4>
        </div>
      </div>
      <div class="grand-total-btn btn-hover">
        <a
          class="btn theme-color"
          @click="$router.push({ name: 'CheckoutPage' })"
          >Proceed to checkout</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubTotal",
};
</script>

<style>
</style>