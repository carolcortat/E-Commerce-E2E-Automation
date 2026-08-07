Cypress.Commands.add("login", (email, password) => {
  cy.visit("/customer/account/login/");
  cy.get('[name="login[username]"]').clear().type(email);
  cy.get('[name="login[password]"]').clear().type(password);
  cy.get(".action.login.primary").click();
});

Cypress.Commands.add("registerAccount", (account) => {
  cy.visit("/customer/account/create/");
  cy.get("#firstname").clear().type(account.firstName);
  cy.get("#lastname").clear().type(account.lastName);
  cy.get("#email_address").clear().type(account.email);
  cy.get("#password").clear().type(account.password);
  cy.get("#password-confirmation").clear().type(account.password);
  cy.get(".action.submit.primary").click();
  cy.get("div.message-success.success.message").should("be.visible");
});
