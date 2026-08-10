# E-Commerce Website - Cypress Automation Test

## Visão geral

Este projeto é uma suíte de testes automatizados para um site de e-commerce usando Cypress. A suíte aponta para o demo público Magento Luma em [magento2-demo.magebit.com](https://magento2-demo.magebit.com/) (substituto do `magento.softwaretestingboard.com`, que foi descontinuado). Os scripts cobrem fluxos como navegação de produtos, adição ao carrinho, compra e ações relacionadas à conta.

## Instalação

Clone o repositório:

```bash
  git clone https://github.com/moisesAlc/E-Commerce-E2E-Automation.git
```

Entre no diretório do projeto:

```bash
  cd E-Commerce-E2E-Automation
```

Instale as dependências:

```bash
  npm install
```

Instale o Cypress (se ainda não estiver nas dependências):

```bash
  npm install cypress --save-dev
```

## Cenários de teste (fluxos E2E)

| Spec | TC | O que faz |
|------|----|-----------|
| `signUpForm.cy.js` | #TC-1 | Cadastro de nova conta |
| `whatsNew.cy.js` | #TC-2 | Compra logada (catálogo → checkout → pedido) |

Descrição detalhada de cada cenário: [`docs/fluxos.md`](docs/fluxos.md).

## Executando os testes

Abrir o Cypress Test Runner:

```bash
  npx cypress open
```

Rodar em modo headless:

```bash
  npx cypress run
```

Scripts npm:

```bash
  npm test
  npm run test:signUp
  npm run test:whatsNew
```

## Relatórios

Após a execução, artefatos do Cypress (quando gerados) ficam em diretórios como `cypress/screenshots` e `cypress/videos`.

## Contribuindo

Contribuições são bem-vindas!

1. Faça um fork deste repositório.
2. Crie uma nova branch (`git checkout -b feature/sua-feature`).
3. Faça o commit das alterações (`git commit -m 'Add your feature'`).
4. Envie a branch (`git push origin feature/sua-feature`).
5. Abra um pull request.

## Autores

- [@moisesAlc](https://github.com/moisesAlc)
- Original: [@Tahamidul Haque](https://github.com/tahmid888)
