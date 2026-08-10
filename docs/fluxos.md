# Cenários de teste (fluxos E2E) — Magebit / Magento Luma

Alvo: [magento2-demo.magebit.com](https://magento2-demo.magebit.com/).  
Suíte Cypress com Page Object Model. Hoje existem **dois** cenários E2E.

| Spec | TC | Script npm | Resumo |
|------|----|------------|--------|
| `cypress/e2e/tests/signUpForm.cy.js` | #TC-1 | `npm run test:signUp` | Cadastro de conta |
| `cypress/e2e/tests/whatsNew.cy.js` | #TC-2 | `npm run test:whatsNew` | Compra logada ponta a ponta |

O nome **whatsNew** é legado do menu Magento “What’s New”; o fluxo real é de **compra**.

---

## 1. `signUpForm` — #TC-1 Cadastro

**Arquivos:** `signUpForm.cy.js`, `pages/newAccountRegisterPage.js`, `fixtures/registerAccountData.json`

### Objetivo
Validar que um visitante consegue **criar uma conta** e ver a mensagem de sucesso.

### Passo a passo
1. Gera e-mail único: `e2e.signup.<timestamp>@example.com` (evita conflito com contas já existentes no demo).
2. Abre a página de criação de conta (`Cypress.env("URL")` → `/customer/account/create/`).
3. Preenche First Name, Last Name, Email, Password e Confirm Password (dados de `registerAccountData.json`; senha de exemplo `Captain@123`).
4. Clica em **Create an Account**.
5. Assert: mensagem visível *“Thank you for registering with Main Website Store.”*

### Fora de escopo deste TC
Não cobre compra, navegação de catálogo nem um caso isolado de login posterior.

---

## 2. `whatsNew` — #TC-2 Compra (nome legado)

**Arquivos:** `whatsNew.cy.js`, `pages/whatsNewPage.js`, `fixtures/whatsNewData.json`  
**Pré-condição:** cliente autenticado via `cy.registerAccount` no `before` (e-mail `e2e.shop.<timestamp>@example.com`).

### Objetivo
Exercitar o caminho **conta → catálogo What’s New / Yoga → produto configurável → carrinho → checkout → pedido**, validando o pedido no histórico do cliente.

### Passo a passo
1. **Navegação**
   - Clica em What’s New (`/what-is-new.html`).
   - Clica em **Shop New Yoga**.
   - Confere o título **“New Luma Yoga Collection”**.

2. **Produto**
   - Abre a PDP `/echo-fit-compression-short.html` (**Echo Fit Compression Short**).
   - Confere o nome na página (`span.base`).

3. **Configuração e carrinho**
   - Seleciona a primeira opção de size e de color (swatches Magento).
   - Define quantidade **4**.
   - Clica em **Add to Cart**.
   - Assert da mensagem *“You added Echo Fit Compression Short to your …”*.

4. **Carrinho**
   - Visita `/checkout/cart/`.
   - Confere o título “Shopping Cart” e pelo menos um item na lista.

5. **Checkout**
   - Abre `/checkout/` diretamente (no demo Magebit o CTA do carrinho às vezes é instável).
   - Preenche endereço de envio (fixture: EUA / California).
   - Escolhe o primeiro método de frete e avança (**Next**), aguardando `POST **/shipping-information`.
   - Seleciona método de pagamento (`checkmo` / COD / primeiro disponível).
   - Clica em **Place Order** e valida `POST **/payment-information` com id de pedido.

6. **Confirmação**
   - Não depende da página de sucesso (o demo costuma redirecionar para carrinho vazio).
   - Abre `/sales/order/history/`, abre o pedido mais recente e confere o nome do produto.

7. **Encerramento**
   - Volta à home e confere a visibilidade do logo.

### Em uma frase
Conta nova → What’s New / Yoga → Echo Fit → carrinho → checkout → pedido confirmado no **My Orders**.

---

## Comparativo rápido

| | `signUpForm` | `whatsNew` |
|---|---|---|
| Foco | Cadastro | Compra completa |
| Autenticação | Conta criada no próprio TC | Conta criada no `before` |
| Produto | — | Echo Fit Compression Short |
| Assert final | Mensagem de registro | Produto no histórico de pedidos |

---

## Como executar

```bash
npm run test:signUp
npm run test:whatsNew
npm test          # suíte completa
```
