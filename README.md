# 🛒 E-Commerce Website — Cypress Automation Test

![Quality Masters](docs/assets/grupo.png)

## 📖 Visão geral

Suíte de testes automatizados com **Cypress** para um site de e-commerce.  
O alvo atual é o demo público Magento Luma em [magento2-demo.magebit.com](https://magento2-demo.magebit.com/) (substituto do `magento.softwaretestingboard.com`, descontinuado).

Os scripts cobrem **cadastro de conta** e **compra logada** (catálogo → carrinho → checkout → pedido).

## 🧰 Pré-requisitos

Instale e confira as ferramentas abaixo **antes** do `npm install`:

| Ferramenta | Versão recomendada | Observação |
|------------|--------------------|------------|
| 🔧 **Git** | 2.40+ (qualquer 2.x recente) | Necessário para clonar o repositório |
| 🟢 **Node.js** | **20 LTS** ou **22 LTS** (`>= 18`) | Cypress 13 exige Node.js 18 ou superior |
| 📦 **npm** | **10.x** (vem com o Node 20/22) | Usado para instalar dependências e rodar scripts |

Versões usadas com sucesso neste projeto:

- Node.js `v22.22.2`
- npm `10.9.7`
- Git `2.43.x`

Dependência do projeto (via `package.json`):

- 🧪 **Cypress** `^13.15.0` (instalado com `npm install`)

Como conferir no terminal:

```bash
git --version
node -v
npm -v
```

## ⚙️ Instalação

1️⃣ Clone o repositório:

```bash
git clone https://github.com/moisesAlc/E-Commerce-E2E-Automation.git
```

2️⃣ Entre no diretório do projeto:

```bash
cd E-Commerce-E2E-Automation
```

3️⃣ Instale as dependências (inclui o Cypress):

```bash
npm install
```

## 🧭 Cenários de teste (fluxos E2E)

| Spec | CT | O que faz |
|------|----|-----------|
| `signUpForm.cy.js` | #CT-1 | 👤 Cadastro de nova conta |
| `whatsNew.cy.js` | #CT-2 | 🛍️ Compra logada (catálogo → checkout → pedido) |

📄 Descrição detalhada de cada cenário: [`docs/fluxos.md`](docs/fluxos.md).

## ▶️ Executando os testes

🖥️ Abrir o Cypress Test Runner:

```bash
npx cypress open
```

🤖 Rodar em modo headless:

```bash
npx cypress run
```

📜 Scripts npm:

```bash
npm test                 # suíte completa
npm run test:signUp      # só #CT-1
npm run test:whatsNew    # só #CT-2
```

## 📊 Relatórios

Após a execução, artefatos do Cypress (quando gerados) ficam em `cypress/screenshots` e `cypress/videos`.

## 🤝 Contribuindo

Contribuições são bem-vindas!

1. Faça um fork deste repositório.
2. Crie uma nova branch (`git checkout -b feature/sua-feature`).
3. Faça o commit das alterações (`git commit -m 'Add your feature'`).
4. Envie a branch (`git push origin feature/sua-feature`).
5. Abra um pull request.

## 👥 Autores

- [@moisesAlc](https://github.com/moisesAlc)
- Original: [@Tahamidul Haque](https://github.com/tahmid888)
