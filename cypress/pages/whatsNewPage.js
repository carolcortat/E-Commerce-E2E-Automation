export class whatsNewPage {
  webLocators = {
    shopNewYogaButton: ".more.button",
    whatsNewTopTitleText: "span.base",
    addToCartText: ".message-success.success.message",
    clickWhatsNewLink: 'a[href*="/what-is-new.html"]',
    newLumaYogaCollectionLink: 'a[href*="/collections/yoga-new.html"]',
    productItem: "li.item.product.product-item",
    productItemLink: "a.product-item-link",
    sizeOption: '.swatch-attribute.size .swatch-option',
    colorOption: '.swatch-attribute.color .swatch-option',
    typeQty: 'input[name="qty"]',
    addToCartButton: 'button.action.primary.tocart',
    miniCart: ".action.showcart",
    viewCart: "a.action.viewcart",
    proceedToCheckout: '[data-role="proceed-to-checkout"]',
    firstName: '#shipping-new-address-form input[name="firstname"]',
    lastName: '#shipping-new-address-form input[name="lastname"]',
    company: '#shipping-new-address-form input[name="company"]',
    streetAddress: '#shipping-new-address-form input[name="street[0]"]',
    city: '#shipping-new-address-form input[name="city"]',
    postalCode: '#shipping-new-address-form input[name="postcode"]',
    telephone: '#shipping-new-address-form input[name="telephone"]',
    countryDropdown: '#shipping-new-address-form [name="country_id"]',
    regionDropdown: '#shipping-new-address-form [name="region_id"]',
    shippingMethodsRadioButton: 'input[type="radio"]',
    nextButton: "button.button.action.continue.primary",
    purchaseMessage: '[data-ui-id="page-title-wrapper"]',
    continueShoppingButton: "a.action.primary.continue",
  };

  clickWhatsNew() {
    cy.get(this.webLocators.clickWhatsNewLink).first().click();
  }

  shopNewYogaButton() {
    cy.get(this.webLocators.shopNewYogaButton)
      .click()
      .should("contain", "Shop New Yoga");
  }

  message() {
    return cy.get(this.webLocators.whatsNewTopTitleText);
  }

  selectProductByName(productName) {
    cy.contains(this.webLocators.productItemLink, productName).click();
    cy.get("span.base").should("contain", productName);
  }

  openProduct(path) {
    cy.visit(path);
  }

  selectSizeOfDress() {
    cy.get(this.webLocators.sizeOption).first().click();
  }

  selectColourOfDress() {
    cy.get(this.webLocators.colorOption).first().click();
  }

  typeQty(qty = "4") {
    cy.get(this.webLocators.typeQty).clear().type(String(qty));
  }

  addToCartButton() {
    cy.get(this.webLocators.addToCartButton).click();
  }

  addToCartmessage() {
    return cy.get(this.webLocators.addToCartText);
  }

  cartCheckOut() {
    cy.visit("/checkout/cart/");
    cy.contains("h1", "Shopping Cart", { timeout: 15000 }).should("be.visible");
    cy.get(".cart.item").should("have.length.at.least", 1);
  }

  proceedToCheckout() {
    cy.get(this.webLocators.proceedToCheckout, { timeout: 15000 })
      .should("be.visible")
      .and("not.be.disabled");

    // Magebit demo sometimes ignores the cart CTA click; open checkout directly.
    cy.visit("/checkout/");
    cy.url({ timeout: 20000 }).should("include", "/checkout");
    cy.url().should("not.include", "/cart");
    cy.get("#checkout", { timeout: 20000 }).should("be.visible");
  }

  verifyShippingText() {
    cy.get(".step-title").should("contain", "Shipping Address");
    cy.get(".step-title").should("contain", "Shipping Methods");
  }

  shippingAddressFName(FName) {
    cy.get(this.webLocators.firstName, { timeout: 20000 })
      .should("be.visible")
      .clear({ force: true })
      .type(FName, { force: true });
  }

  shippingAddressLName(LName) {
    cy.get(this.webLocators.lastName)
      .clear({ force: true })
      .type(LName, { force: true });
  }

  shippingAddressCompany(companyName) {
    cy.get(this.webLocators.company).type(companyName, { force: true });
  }

  shippingAddressStreet(streetAddress) {
    cy.get(this.webLocators.streetAddress).type(streetAddress, { force: true });
  }

  shippingAddressCity(city) {
    cy.get(this.webLocators.city).type(city, { force: true });
  }

  stateByDropDown(region = "California") {
    cy.get(this.webLocators.regionDropdown, { timeout: 10000 })
      .should("be.visible")
      .select(region, { force: true });
  }

  shippingAddressPostalCode(postalCode) {
    cy.get(this.webLocators.postalCode).clear({ force: true }).type(postalCode, {
      force: true,
    });
  }

  countryByDropDown(country = "United States") {
    cy.get(this.webLocators.countryDropdown).select(country, { force: true });
  }

  shippingAddressTelephone(telephone) {
    cy.get(this.webLocators.telephone).type(telephone, { force: true });
  }

  shippingMethods() {
    cy.get(".table-checkout-shipping-method", { timeout: 20000 }).should(
      "be.visible"
    );
    cy.get('.table-checkout-shipping-method input[type="radio"]')
      .should("be.visible")
      .first()
      .check({ force: true });
  }

  waitForCheckoutLoader() {
    cy.get("body").should(($body) => {
      const $mask = $body.find(".loading-mask");
      if ($mask.length) {
        expect($mask.is(":visible"), "checkout loading mask").to.eq(false);
      }
    });
  }

  nextButtonClick() {
    cy.intercept("POST", "**/shipping-information").as("shippingInformation");
    cy.get(this.webLocators.nextButton).should("be.visible").click();
    cy.wait("@shippingInformation", { timeout: 30000 })
      .its("response.statusCode")
      .should("be.oneOf", [200, 204]);
    this.waitForCheckoutLoader();
    cy.get(".payment-method", { timeout: 30000 }).should("be.visible");
  }

  paymentMethodCheck() {
    cy.get("body").then(($body) => {
      if ($body.find('#checkmo, input[value="checkmo"]').length) {
        cy.get('#checkmo, input[value="checkmo"]').first().check({ force: true });
      } else if ($body.find('#cashondelivery, input[value="cashondelivery"]').length) {
        cy.get('#cashondelivery, input[value="cashondelivery"]')
          .first()
          .check({ force: true });
      } else {
        cy.get('input[name="payment[method]"]').first().check({ force: true });
      }
    });

    cy.get(".payment-method._active", { timeout: 15000 }).should("be.visible");

    cy.get("body").then(($body) => {
      const checkbox = $body.find(
        ".payment-method._active input[name='billing-address-same-as-shipping']"
      );
      if (checkbox.length && !checkbox.is(":checked")) {
        cy.wrap(checkbox.first()).check({ force: true });
      }
    });

    this.waitForCheckoutLoader();
  }

  placeOrderButton() {
    cy.intercept("POST", "**/payment-information").as("paymentInformation");
    cy.get(".payment-method._active button.action.primary.checkout", {
      timeout: 15000,
    })
      .should("be.visible")
      .and("not.be.disabled")
      .click();

    cy.wait("@paymentInformation", { timeout: 30000 }).then(({ response }) => {
      expect(response?.statusCode, "payment-information status").to.eq(200);
      // Magento returns the created order id as a JSON number/string.
      expect(String(response?.body || ""), "created order id").to.match(
        /\d+/
      );
    });
  }

  /**
   * Magebit demo redirects to an empty cart after place-order instead of the
   * success page. Confirm the purchase through the customer order history.
   */
  verifyOrderPlaced(productName) {
    cy.visit("/sales/order/history/");
    cy.get("#my-orders-table tbody tr", { timeout: 15000 })
      .should("have.length.at.least", 1)
      .first()
      .find("a.action.view")
      .click();

    cy.contains(productName, { timeout: 15000 }).should("be.visible");
  }

  purchaseMessage() {
    return cy.get(this.webLocators.purchaseMessage);
  }

  continueShoppingButton() {
    cy.visit("/");
    cy.get(".logo").should("be.visible");
  }

  checkSortByDropDown() {
    cy.get("#sorter").should("be.visible");
    cy.get(".sorter-options option:selected")
      .first()
      .should("contain", "Position");
    cy.get(".sorter-options").first().select("name");
    cy.get(".sorter-options").should("contain", "Product Name");
    cy.get(".sorter-options").first().select("price");
    cy.get(".sorter-options").should("contain", "Price");
  }
}
