import { RegisterPage } from "../../pages/newAccountRegisterPage";
import registerAccountData from "../../fixtures/registerAccountData.json";

const registerObj = new RegisterPage();

describe("Test Suite for Register New A/C", () => {
  it("#TC-1 Register New Account", () => {
    const email = `e2e.signup.${Date.now()}@example.com`;

    registerObj.openURL();
    registerObj.enterFirstName(registerAccountData.name.firstName);
    registerObj.enterLastName(registerAccountData.name.lastName);
    registerObj.enterEmail(email);
    registerObj.enterPassword(registerAccountData.password.password);
    registerObj.enterConfirmPassword(
      registerAccountData.password.confirmPassword
    );
    registerObj.enterCreateAnAccountButton();
    registerObj.successFullCreateAccountMessage(
      registerAccountData.successFullCreateAccountMessage
    );
  });
});
