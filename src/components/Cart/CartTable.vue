<template>
  <div class="row">
    <div class="col-12">
      <form action="#">
        <div class="cart-table-content">
          <div class="table-content table-responsive">
            <table>
              <thead>
                <tr>
                  <th class="width-thumbnail"></th>
                  <th class="width-name">Product</th>
                  <th class="width-price">Price</th>
                  <th class="width-quantity">Quantity</th>
                  <th class="width-subtotal">Subtotal</th>
                  <th class="width-remove"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="product-thumbnail">
                    <a href="product-details.html"
                      ><img src="assets/images/cart/cart-1.jpg" alt=""
                    /></a>
                  </td>
                  <td class="product-name">
                    <h5>
                      <a href="product-details.html">Stylish Swing Chair</a>
                    </h5>
                  </td>
                  <td class="product-cart-price">
                    <span class="amount">$120.00</span>
                  </td>
                  <td class="cart-quality">
                    <div class="product-quality">
                      <input
                        class="cart-plus-minus-box input-text qty text"
                        name="qtybutton"
                        value="1"
                      />
                    </div>
                  </td>
                  <td class="product-total"><span>$120.00</span></td>
                  <td class="product-remove">
                    <a href="#"><i class="ti-trash"></i></a>
                  </td>
                </tr>
                <tr>
                  <td class="product-thumbnail">
                    <a href="product-details.html"
                      ><img src="assets/images/cart/cart-2.jpg" alt=""
                    /></a>
                  </td>
                  <td class="product-name">
                    <h5>
                      <a href="product-details.html">Modern Lounge Chairs</a>
                    </h5>
                  </td>
                  <td class="product-cart-price">
                    <span class="amount">$120.00</span>
                  </td>
                  <td class="cart-quality">
                    <div class="product-quality">
                      <input
                        class="cart-plus-minus-box input-text qty text"
                        name="qtybutton"
                        value="1"
                      />
                    </div>
                  </td>
                  <td class="product-total"><span>$120.00</span></td>
                  <td class="product-remove">
                    <a href="#"><i class="ti-trash"></i></a>
                  </td>
                </tr>
                <tr>
                  <td class="product-thumbnail">
                    <a href="product-details.html"
                      ><img src="assets/images/cart/cart-3.jpg" alt=""
                    /></a>
                  </td>
                  <td class="product-name">
                    <h5>
                      <a href="product-details.html">Modern Swivel Chair</a>
                    </h5>
                  </td>
                  <td class="product-cart-price">
                    <span class="amount">$120.00</span>
                  </td>
                  <td class="cart-quality">
                    <div class="product-quality">
                      <input
                        class="cart-plus-minus-box input-text qty text"
                        name="qtybutton"
                        value="1"
                      />
                    </div>
                  </td>
                  <td class="product-total"><span>$120.00</span></td>
                  <td class="product-remove">
                    <a href="#"><i class="ti-trash"></i></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="cart-shiping-update-wrapper">
              <div class="cart-shiping-update btn-hover">
                <a href="#">Continue Shopping</a>
              </div>
              <div class="cart-clear-wrap">
                <div class="cart-clear btn-hover">
                  <button>Update Cart</button>
                </div>
                <div class="cart-clear btn-hover">
                  <a href="#">Clear Cart</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartTable",
};
</script>

<style>
</style>