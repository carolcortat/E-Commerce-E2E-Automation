# E-Commerce Website - Cypress Automation Test

Overview

This project is an automated testing suite for an e-commerce website using Cypress. The suite targets the public Magento Luma demo at [magento2-demo.magebit.com](https://magento2-demo.magebit.com/) (replacement for the retired `magento.softwaretestingboard.com`). The test scripts cover user flows such as browsing products, adding items to the cart, making a purchase, and validating account-related actions.

## Installation

Clone the repository:

```bash
  git clone https://github.com/moisesAlc/E-Commerce-E2E-Automation.git
```

Navigate to the project directory:

```bash
  cd E-Commerce-E2E-Automation
```

Install dependencies

```bash
  npm install
```

Install Cypress:

```bash
  npm install cypress --save-dev

```

## Test Scenarios

- Product Browsing: Tests for searching and filtering products.
- Cart: Adding/removing items, updating quantities.
- Checkout Process: Validating the checkout flow, payment gateway integration.
- User Account: Registration, login, and profile management tests.

## Running Tests

To run the Cypress tests, use the following commands:

Open the Cypress Test Runner:

```bash
  npx cypress open
```

This will open the Cypress dashboard, where you can run individual tests or the whole suite.

Run tests in headless mode:

```bash
  npx cypress run
```

This runs all the tests in headless mode (without the browser UI) and generates a report.

## Test Coverage

The tests cover the following areas:

- Product Pages: Ensuring that the product list and individual product details load properly, including filters, search functionality, and pagination.
- Cart Management: Adding products to the cart, updating quantities, and removing items.
- User Authentication: User registration, login, logout, and profile updates.
- Checkout Flow: Address input, shipping options, payment validation, and order completion.
- Order History: Validating order history after a successful purchase.

## Reporting

After running the tests, reports are automatically generated and can be found under the cypress/reports directory. You can view detailed information about passed/failed tests.

## Contributing

Contributions are always welcome!

1. Fork this repository.
2. Create a new branch (git checkout -b feature/your-feature).
3. Commit your changes (git commit -m 'Add your feature').
4. Push to the branch (git push origin feature/your-feature).
5. Open a pull request.

## Authors

- [@moisesAlc](https://github.com/moisesAlc)
- Original: [@Tahamidul Haque](https://github.com/tahmid888)
