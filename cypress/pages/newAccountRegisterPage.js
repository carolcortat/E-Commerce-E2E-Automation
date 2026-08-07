export class RegisterPage {
  webLocators = {
    firstName: "#firstname",
    lastName: "#lastname",
    email: "#email_address",
    password: "#password",
    confirmPassword: "#password-confirmation",
    createAnAccountButton: ".action.submit.primary",
    successMessage: "div.message-success.success.message",
  };

  openURL() {
    cy.visit(Cypress.env("URL"));
  }

  enterFirstName(FName) {
    cy.get(this.webLocators.firstName).clear().type(FName);
  }

  enterLastName(LName) {
    cy.get(this.webLocators.lastName).clear().type(LName);
  }

  enterEmail(Email) {
    cy.get(this.webLocators.email).clear().type(Email);
  }

  enterPassword(password) {
    cy.get(this.webLocators.password).clear().type(password);
  }

  enterConfirmPassword(password) {
    cy.get(this.webLocators.confirmPassword).clear().type(password);
  }

  enterCreateAnAccountButton() {
    cy.get(this.webLocators.createAnAccountButton).click();
  }

  successFullCreateAccountMessage(message) {
    return cy
      .get(this.webLocators.successMessage)
      .should("be.visible")
      .and("contain.text", message);
  }
}
