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

## Cenários de teste

- Navegação de produtos: busca e filtros.
- Carrinho: adicionar/remover itens e atualizar quantidades.
- Checkout: validação do fluxo de compra e integração de pagamento.
- Conta do usuário: cadastro, login e gerenciamento de perfil.

## Executando os testes

Para rodar os testes Cypress, use os comandos abaixo.

Abrir o Cypress Test Runner:

```bash
  npx cypress open
```

Isso abre o painel do Cypress, onde você pode executar testes individuais ou a suíte completa.

Rodar os testes em modo headless:

```bash
  npx cypress run
```

Isso executa todos os testes sem a interface do navegador.

Scripts npm disponíveis:

```bash
  npm test
  npm run test:signUp
  npm run test:whatsNew
```

## Cobertura de testes

Os testes cobrem as seguintes áreas:

- Páginas de produto: listagem e detalhes, incluindo filtros, busca e paginação.
- Gestão do carrinho: adicionar produtos, atualizar quantidades e remover itens.
- Autenticação: cadastro, login, logout e atualizações de perfil.
- Fluxo de checkout: endereço, opções de envio, pagamento e conclusão do pedido.
- Histórico de pedidos: validação do pedido após a compra.

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
