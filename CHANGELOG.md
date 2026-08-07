# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [1.1.0] - 2026-08-07

### Changed
- Migrated the Cypress suite from the retired `magento.softwaretestingboard.com` target to the public Magento Luma demo at [magento2-demo.magebit.com](https://magento2-demo.magebit.com/).
- Updated repository URLs to [moisesAlc/E-Commerce-E2E-Automation](https://github.com/moisesAlc/E-Commerce-E2E-Automation).
- Replaced hardcoded absolute Magento URLs with relative selectors and `baseUrl`-based navigation.
- Stabilized checkout by opening `/checkout/` directly when the cart CTA is unreliable on the Magebit demo.
- Switched post-purchase validation to customer order history, because the Magebit demo often redirects to an empty cart instead of `/checkout/onepage/success`.
- Updated shipping fixtures to a US address with an explicit region for more reliable Magento checkout.

### Added
- Unique email generation for signup and shopping flows so runs do not depend on shared demo credentials.
- Custom `cy.registerAccount` command for creating a fresh logged-in customer before purchase tests.
- npm scripts: `test`, `test:signUp`, and `test:whatsNew`.
- Cypress timeouts tuned for Magento checkout (`defaultCommandTimeout`, `pageLoadTimeout`).
- `.gitignore` entries for `cypress/screenshots`, `cypress/videos`, and `cypress/downloads`.

### Fixed
- Register page object password/confirm-password handling and success-message assertion.
- Product selection for Echo Fit Compression Short (no longer the first item in the Yoga collection).
- Size/color selection via Magento swatch options instead of brittle option IDs from the old demo.

### Removed
- Hardcoded login credentials from fixtures.
- Checked-in Cypress failure screenshots.
