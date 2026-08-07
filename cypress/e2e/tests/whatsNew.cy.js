import { whatsNewPage } from "../../pages/whatsNewPage";
import whatsNewData from "../../fixtures/whatsNewData.json";
import registerAccountData from "../../fixtures/registerAccountData.json";

const whatsNewPageObj = new whatsNewPage();

describe("Whats New Test Suite-2", () => {
  before(() => {
    const email = `e2e.shop.${Date.now()}@example.com`;

    cy.registerAccount({
      firstName: registerAccountData.name.firstName,
      lastName: registerAccountData.name.lastName,
      email,
      password: registerAccountData.password.password,
    });
  });

  it("#TC-2 Whats new ", () => {
    whatsNewPageObj.clickWhatsNew();
    whatsNewPageObj.shopNewYogaButton();
    whatsNewPageObj
      .message()
      .should("contain.text", whatsNewData.message.titleMessage);

    // Echo Fit remains on the demo store, but is no longer the first Yoga collection item.
    whatsNewPageObj.openProduct(whatsNewData.product.path);
    cy.get("span.base").should("contain", whatsNewData.product.name);

    whatsNewPageObj.selectSizeOfDress();
    whatsNewPageObj.selectColourOfDress();
    whatsNewPageObj.typeQty();
    whatsNewPageObj.addToCartButton();
    whatsNewPageObj
      .addToCartmessage()
      .should("contain.text", whatsNewData.message.addToCartMessage);
    whatsNewPageObj.cartCheckOut();
    whatsNewPageObj.proceedToCheckout();
    whatsNewPageObj.shippingAddressFName(
      whatsNewData.shippingInfo.name.firstName
    );
    whatsNewPageObj.shippingAddressLName(
      whatsNewData.shippingInfo.name.lastName
    );
    whatsNewPageObj.shippingAddressCompany(whatsNewData.shippingInfo.company);
    whatsNewPageObj.shippingAddressStreet(
      whatsNewData.shippingInfo.streetAddress
    );
    whatsNewPageObj.shippingAddressCity(whatsNewData.shippingInfo.city);
    whatsNewPageObj.countryByDropDown(whatsNewData.shippingInfo.country);
    whatsNewPageObj.stateByDropDown(whatsNewData.shippingInfo.region);
    whatsNewPageObj.shippingAddressPostalCode(
      whatsNewData.shippingInfo.postalCode
    );
    whatsNewPageObj.shippingAddressTelephone(
      whatsNewData.shippingInfo.telephone
    );
    whatsNewPageObj.shippingMethods();
    whatsNewPageObj.nextButtonClick();
    whatsNewPageObj.paymentMethodCheck();
    whatsNewPageObj.placeOrderButton();
    whatsNewPageObj.verifyOrderPlaced(whatsNewData.product.name);
    whatsNewPageObj.continueShoppingButton();
  });
});
