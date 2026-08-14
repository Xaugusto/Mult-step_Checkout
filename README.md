# 🛒 Checkout Multi-Step (Multi-Step Checkout UI)

> Uma interface moderna, limpa e altamente responsiva para processos de **Checkout em Múltiplas Etapas (Multi-Step)**, desenvolvida para proporcionar a melhor Experiência do Usuário (UX) na conversão de vendas e assinaturas online.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Bootstrap 5](https://img.shields.io/badge/Bootstrap_5.3.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![Responsive](https://img.shields.io/badge/Layout-Responsivo-brightgreen?style=for-the-badge)

---

## 📌 Sobre o Projeto

O **Multi-Step Checkout** é uma aplicação web focada em otimizar a etapa final da jornada de compra do cliente. Dividir o formulário de pagamento em etapas graduais reduz o cansaço visual, melhora a clareza das informações e aumenta as taxas de conversão.

O projeto conta com um fluxo intuitivo de 3 etapas principais + tela de confirmação do pedido, além de um resumo lateral fixo com os valores atualizados do carrinho de compras.

---

## 🚀 Fluxo da Aplicação

```text
[ 1. Dados Pessoais ] ➔ [ 2. Entrega ] ➔ [ 3. Pagamento ] ➔ [ 🎉 Pedido Concluído ]
```

### 📋 Etapas do Checkout:

1. **Etapa 1 - Dados Pessoais (`index.html`)**
   - Coleta de dados fundamentais do cliente (Nome Completo, E-mail e Telefone).
   - Utilização de *Floating Labels* modernas para dinamizar o preenchimento.
   - Stepper visual indicando o avanço no processo.

2. **Etapa 2 - Opções de Entrega (`src/pages/entrega.html`)**
   - Preenchimento do endereço de entrega completo.
   - Seleção interativa da opção de frete (Padrão ou Expresso).
   - Efeitos visuais dinâmicos em JavaScript para destaque da opção selecionada.

3. **Etapa 3 - Forma de Pagamento (`src/pages/pedido.html`)**
   - Opções flexíveis de pagamento (Cartão de Crédito, PIX, Boleto Bancário).
   - Formulário completo para validação dos dados do cartão.
   - Resumo claro de subtotal, taxas e valor total com selo de ambiente seguro.

4. **Etapa 4 - Confirmação do Pedido (`src/pages/final.html`)**
   - Tela de sucesso informando que a compra foi processada.
   - Exibição de resumo do pedido, endereço de entrega e código de rastreamento fictício.
   - Links úteis e opções de suporte ao cliente.

---

## 🎨 Principais Destaques de Design e UX

- 💎 **Interface Minimalista e Premium**: Paleta de cores limpa com tons `#F7F9FF` e contraste acessível.
- 📱 **Totalmente Responsivo**: Layout otimizado para dispositivos móveis, tablets e telas de alta resolução.
- 🔒 **Elementos de Confiança**: Ícones e selos de "Ambiente 100% Seguro" e ícones do Google Material Symbols.
- ⚡ **Desempenho Leve**: Bootstrap carregado 100% via CDN (jsDelivr), garantindo rápido carregamento.
- 🔤 **Tipografia Moderna**: Integração com as fontes Google Sans, Inter e Roboto via Google Fonts.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 Semântico**: Estrutura acessível e bem padronizada.
- **CSS3 Personalizado**: Estilizações customizadas para formulários, badges e animações suaves (`src/styles/style.css`, `src/styles/entrega.css`, `src/styles/pedido.css`, `src/styles/final.css`).
- **Bootstrap 5.3.3 (via CDN)**: Sistema de Grid dinâmico e utilitários flex.
- **JavaScript (ES6)**: Manipulação da DOM para interatividade dos seletores de frete e pagamento.
- **Google Material Symbols & Fonts**: Ícones modernos e tipografia de alta qualidade.

---

## 📂 Estrutura de Arquivos

```text
Mult-step Checkout/
├── index.html                  # Etapa 1: Dados Pessoais (Página Principal)
├── public/
│   └── assets/
│       └── icons/              # Ícones SVG e recursos estáticos
├── src/
│   ├── pages/
│   │   ├── entrega.html        # Etapa 2: Dados de Entrega e Frete
│   │   ├── pedido.html         # Etapa 3: Pagamento e Resumo do Pedido
│   │   └── final.html          # Etapa 4: Confirmação e Sucesso
│   └── styles/
│       ├── style.css           # Estilos globais e componentes compartilhados
│       ├── entrega.css         # Estilos específicos da tela de entrega
│       ├── pedido.css          # Estilos específicos da tela de pagamento
│       └── final.css           # Estilos específicos da tela final
├── .gitattributes              # Configuração de padronização de quebra de linha (LF)
├── .gitignore                  # Regras de arquivos ignorados pelo Git
├── package.json                # Dependências do projeto
└── README.md                   # Documentação do projeto
```

---

## 💻 Como Executar o Projeto

Como o projeto é desenvolvido em **HTML, CSS e JavaScript puros** utilizando Bootstrap via CDN, **não é necessária nenhuma instalação complexa ou servidor Node.js**.

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Xaugusto/Mult-step_Checkout.git
   ```

2. **Navegue até a pasta do projeto:**
   ```bash
   cd Mult-step_Checkout
   ```

3. **Abra o projeto no seu navegador:**
   - Basta dar um duplo clique no arquivo `index.html` ou utilizar uma extensão como o [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) no VS Code.

---

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para utilizar, modificar e contribuir!

---

<p align="center">Desenvolvido por <a href="https://github.com/Xaugusto">Augusto Pereira</a></p>
