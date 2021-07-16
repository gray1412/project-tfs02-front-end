<template>
  <div class="col-lg-7">
    <div class="billing-info-wrap">
      <h3>Billing Details</h3>
      <div class="row">
        <div class="col-lg-6 col-md-6">
          <div class="billing-info mb-20">
            <label
              >First Name
              <abbr class="required" title="required">*</abbr></label
            >
            <input type="text" />
          </div>
        </div>
        <div class="col-lg-6 col-md-6">
          <div class="billing-info mb-20">
            <label
              >Last Name <abbr class="required" title="required">*</abbr></label
            >
            <input type="text" />
          </div>
        </div>
        <div class="col-lg-12">
          <div class="billing-info mb-20">
            <label
              >Company Name
              <abbr class="required" title="required">*</abbr></label
            >
            <input type="text" />
          </div>
        </div>
        <div class="col-lg-12">
          <div class="billing-select select-style mb-20">
            <label
              >Country <abbr class="required" title="required">*</abbr></label
            >
            <select class="select-two-active">
              <option>Select a country</option>
              <option>Azerbaijan</option>
              <option>Bahamas</option>
              <option>Bahrain</option>
              <option>Bangladesh</option>
              <option>Barbados</option>
            </select>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="billing-info mb-20">
            <label
              >Street Address
              <abbr class="required" title="required">*</abbr></label
            >
            <input
              class="billing-address"
              placeholder="House number and street name"
              type="text"
            />
            <input placeholder="Apartment, suite, unit etc." type="text" />
          </div>
        </div>
        <div class="col-lg-12">
          <div class="billing-info mb-20">
            <label
              >Town / City
              <abbr class="required" title="required">*</abbr></label
            >
            <input type="text" />
          </div>
        </div>
        <div class="col-lg-12 col-md-12">
          <div class="billing-info mb-20">
            <label
              >State / County
              <abbr class="required" title="required">*</abbr></label
            >
            <input type="text" />
          </div>
        </div>
        <div class="col-lg-12 col-md-12">
          <div class="billing-info mb-20">
            <label
              >Postcode / ZIP
              <abbr class="required" title="required">*</abbr></label
            >
            <input type="text" />
          </div>
        </div>
        <div class="col-lg-12 col-md-12">
          <div class="billing-info mb-20">
            <label
              >Phone <abbr class="required" title="required">*</abbr></label
            >
            <input type="text" />
          </div>
        </div>
        <div class="col-lg-12 col-md-12">
          <div class="billing-info mb-20">
            <label
              >Email Address
              <abbr class="required" title="required">*</abbr></label
            >
            <input type="text" />
          </div>
        </div>
      </div>
      <div class="checkout-account mb-25">
        <input class="checkout-toggle2" type="checkbox" />
        <span>Create an account?</span>
      </div>
      <div class="checkout-account-toggle open-toggle2 mb-30">
        <label>Email Address</label>
        <input placeholder="Password" type="password" />
      </div>
      <div class="checkout-account mt-25">
        <input class="checkout-toggle" type="checkbox" />
        <span>Ship to a different address?</span>
      </div>
      <div class="different-address open-toggle mt-30">
        <div class="row">
          <div class="col-lg-6 col-md-6">
            <div class="billing-info mb-20">
              <label>First Name</label>
              <input type="text" />
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="billing-info mb-20">
              <label>Last Name</label>
              <input type="text" />
            </div>
          </div>
          <div class="col-lg-12">
            <div class="billing-info mb-20">
              <label>Company Name</label>
              <input type="text" />
            </div>
          </div>
          <div class="col-lg-12">
            <div class="billing-select select-style mb-20">
              <label>Country</label>
              <select class="select-two-active">
                <option>Select a country</option>
                <option>Azerbaijan</option>
                <option>Bahamas</option>
                <option>Bahrain</option>
                <option>Bangladesh</option>
                <option>Barbados</option>
              </select>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="billing-info mb-20">
              <label>Street Address</label>
              <input
                class="billing-address"
                placeholder="House number and street name"
                type="text"
              />
              <input placeholder="Apartment, suite, unit etc." type="text" />
            </div>
          </div>
          <div class="col-lg-12">
            <div class="billing-info mb-20">
              <label>Town / City</label>
              <input type="text" />
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="billing-info mb-20">
              <label>State / County</label>
              <input type="text" />
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="billing-info mb-20">
              <label>Postcode / ZIP</label>
              <input type="text" />
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="billing-info mb-20">
              <label>Phone</label>
              <input type="text" />
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="billing-info mb-20">
              <label>Email Address</label>
              <input type="text" />
            </div>
          </div>
        </div>
      </div>
      <div class="additional-info-wrap">
        <label>Order notes</label>
        <textarea
          placeholder="Notes about your order, e.g. special notes for delivery. "
          name="message"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BillingDetails",
};
</script>

<style>
</style>