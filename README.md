<p align="center"> <img src="/public/favicon.ico" width="80" alt="Logo do Portfólio" /> <br> <img src="https://img.shields.io/badge/Remix-2.8.0-000000?logo=remix&logoColor=white" alt="Remix"> <img src="https://img.shields.io/badge/TailwindCSS-3.3.0-38B2AC?logo=tailwind-css&logoColor=white" alt="TailwindCSS"> <img src="https://img.shields.io/badge/Framer%20Motion-10.12.0-0055FF?logo=framer&logoColor=white" alt="Framer Motion"> <img src="https://img.shields.io/badge/TypeScript-5.0.0-3178C6?logo=typescript&logoColor=white" alt="TypeScript"> </p><h1 align="center">✨ Portfólio Template para Desenvolvedores ✨</h1><p align="center"> <a href="https://portfolio-template-one-bice.vercel.app/">🌐 Site ao Vivo</a> • <a href="#-funcionalidades">🚀 Funcionalidades</a> • <a href="#-arquitetura">🏗️ Arquitetura</a> • <a href="#-começando">📦 Começando</a> • <a href="#-personalização">🎨 Personalização</a> </p>

[![Site preview](/public/ReadmeImage.png)](https://portfolio-pinuya.vercel.app/)

Este projeto foi desenvolvido para ajudar desenvolvedores de todos os níveis a criar um portfólio profissional de forma rápida e eficiente. Utilizando tecnologias modernas e boas práticas de desenvolvimento, o template oferece uma base sólida para você mostrar seu trabalho ao mundo.

### Objetivos:

- 🎯 Prover uma base completa para portfólio
- 📚 Ser educativo para desenvolvedores iniciantes
- ⚡ Oferecer performance otimizada
- 📱 Garantir responsividade total
- 🎨 Ser facilmente personalizável

# 🏗️ Arquitetura do Projeto

```
┌─────────────────────────────────────────────────────┐
│                     Client-Side                     │
├─────────────────────────────────────────────────────┤
│  Components → Pages → Hooks → Utils → Styles        │
└─────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────┐
│                    Server-Side                      │
├─────────────────────────────────────────────────────┤
│  Loaders → Actions → API Routes                     |
└─────────────────────────────────────────────────────┘

```

# 📦 Começando

### 🚀 Instalação Rápida

1. Fork do Repositório

```bash
# 1. Clique em "Fork" no canto superior direito
# 2. Clone seu fork:
git clone https://github.com/seu-usuario/portfolio-template.git
cd portfolio-template
```

2. Instalação de Dependências

```bash
# Com Bun (recomendado)
bun install

# Com npm
npm install

# Com yarn
yarn install
```

3. Configuração do Ambiente

```bash
# Copie o arquivo de exemplo
cp .env.example .env

# Edite as variáveis necessárias
# Edite .env com suas configurações
```

4. Inicie o Servidor

```bash
# Desenvolvimento
bun dev

# Acesse em:
# http://localhost:3000
```

### ⚙️ Configuração

#### Configurações do Tailwind

O projeto já vem com Tailwind configurado. Para personalizar:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#your-color",
        secondary: "#your-color",
      },
      fontFamily: {
        sans: ["Inter", "system-ui"],
      },
    },
  },
};
```

# 🎨 Personalização

1. Cores e Tema
   No projeto voce tambem pode adicionar seu proprio tema personalizado no `/app/tailwind.css`, voce pode utilizar o site [tweakcn.com](https://tweakcn.com/editor/theme) para lhe auxiliar na montagem do seu tema :D

```javascript
// no /app/tailwind.css voce encontra o arquivo :root onde esta o tema que eu predefini.
@layer base {
  :root {
    --background: 219.9988 11.1749% 94.701%;
```

2. Conteúdo Principal
   Edite os arquivos de dados em `/_index.tsx`

```javascript
// substitua com suas experiencias
const experiences = [
  {
    company: "Utrip",
    period: "Mar. 2025 - Atual",
    role: "Front-End Developer Jr.",
    description:
      "Atuo como desenvolvedora Front-End utilizando React. Atualmente, estou alocada no time do Mais Taúá, trabalhando no desenvolvimento e na refatoração da aplicação do novo sistema.",
    points: [
      "Desenvolvedora Front-End, React",
      "Time do Mais Taúá",
      "Refatoração de aplicação",
    ],
  },
  {
    company: "Hubfy",
    period: "Out 2024 - Fev. 2025",
    role: "Front-End Developer Jr.",
    description:
      "Desenvolvi interfaces dinâmicas e responsivas, sendo responsável pelo front-end do novo sistema da Hubfy. Apliquei meus conhecimentos em Tailwind, React e Next.js para tornar a nova aplicação moderna, interativa e adaptável a diferentes dispositivos.",
    points: [
      "Desenvolvedora Front-End, React e Next.js",
      "Criação de interfaces responsivas",
    ],
  },
];
```

3. Meta Data - SEO

```javascript
// voce pode editar o title como preferir
export const meta: MetaFunction = () => {
  return [
    { title: "Portfolio" },
    {
      name: "Portfolio",
      content: "Bem-vindos ao meu portfolio construido em Remix.",
    },
  ];
};
```

4. Seções
   Para adicionar/remover seções, edite `app/root.tsx`:

```javascript
// Adicione ou remova componentes de seção
<html lang="en">
  <head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <Meta />
    <Links />
  </head>
  <body className="py-4 font-dmSans">
    {/* <Nav /> */}
    {children}
    <ScrollRestoration />
    <Scripts />
  </body>
</html>
```

## 📝 Editando Arquivos de Internacionalização (i18n)

### 📁 Estrutura de Arquivos

```text
/locales/
├── pt.ts    # Traduções em português
├── en.ts    # Traduções em inglês
└── index.ts # Configuração principal
```

### 🔧 Como Editar Traduções

1. Editar um Idioma Existente
   Abra o arquivo do idioma desejado e modifique os valores das chaves:

```javascript
// /locales/pt.ts
  title: "Pinuya",  // ← Edite eseses valores
  description:
    "Desenvolvedora Full-Stack apaixonada por criar experiências web incríveis.",
  about: {
  // ... outras seções
}
```

2. Adicionar Nova Tradução
   Adicione novas chaves em ambos os arquivos (pt.ts e en.ts) para manter consistência:

```javascript
// Em ambos pt.ts E en.ts
export default = {
  // ... traduções existentes

  newSection: {
    newKey: "Novo texto em português"  // ← Adicione aqui
  }
}

export const en = {
  // ... existing translations

  newSection: {
    newKey: "New text in English"  // ← Adicione a tradução correspondente
  }
}
```

3. Adicionar Novo Idioma
   Crie um novo arquivo no diretório /locales:

```text
/locales/es.ts  # Para espanhol, por exemplo
```

Exporte as traduções no mesmo formato:

```javascript
// /locales/es.ts
export default = {
  common: {
    welcome: "¡Hola, Bienvenido!",
    save: "Guardar",
    cancel: "Cancelar"
  },
  // ... outras traduções
}
```

4. Adicione o novo idioma no arquivo de configuração:

```javascript
// /config/i18n.ts
import { es } from "./es";

export const resources = {
  pt: { translation: pt },
  en: { translation: en },
  es: { translation: es }, // ← Novo idioma
};
```

### 📋 Boas Práticas

#### ✅ O que fazer:

- Mantenha a mesma estrutura em todos os arquivos de idioma
- Use chaves descritivas com namespace:

```javascript
// Bom
dashboard: {
  welcomeMessage: "Bem-vindo ao painel";
}

// Evitar
welcomeMsg: "Bem-vindo ao painel";
```

- Adicione comentários para contexto quando necessário:

```javascript
errorMessages: {
  invalidEmail: "E-mail inválido", // Exibido quando o formato do e-mail está incorreto
  requiredField: "Este campo é obrigatório"
}
```

### ❌ O que evitar:

- Não modifique apenas um arquivo de idioma sem atualizar os outros
- Não remova chaves que estão em uso no código
- Não use texto dinâmico dentro das traduções (use parâmetros)

### 📝 Convenções do Projeto

- Idioma padrão: Português (pt)
- Formato: TypeScript com objetos aninhados
- Namespace: Use namespaces lógicos (common, auth, dashboard, etc.)
- Chaves: camelCase com notação de ponto para hierarquia

# 🚀 Deploy

### Opções de Hospedagem

1. Vercel (Recomendado)

```bash
# Instale a CLI da Vercel
npm i -g vercel

# Faça deploy
vercel
```

### Passos para Deploy

1. Prepare o Projeto

```bash
bun run build
```

2. Configure o Domínio

- Acesse as configurações do seu provedor
- Adicione domínio personalizado
- Configure SSL

3. Variáveis de Produção

- Adicione variáveis de ambiente no painel
- Configure analytics
- Teste o formulário de contato

## 🤝 Contribuindo

Contribuições são bem-vindas! Siga estes passos:

1. Fork o projeto
2. Crie uma branch (git checkout -b feature/nova-feature)
3. Commit suas mudanças (git commit -m 'Add nova feature')
4. Push para a branch (git push origin feature/nova-feature)
5. Abra um Pull Request

## 🐛 Reportando Bugs

1. Use o issue tracker e inclua:
2. Descrição do bug
3. Passos para reproduzir
4. Comportamento esperado vs atual
5. Screenshots (se aplicável)

## 💡 Sugestões de Features

1. Verifique se já não existe uma issue similar
2. Descreva claramente a feature
3. Explique o porquê seria úti
4. Dê exemplos de uso

# 📄 Licença

### Permissões

#### ✅ Permitido:

- Usar o código como base para seu portfólio
- Modificar e adaptar o design
- Aprender com o código fonte
- Usar em projetos comerciais

#### ✅ Com Créditos (se design pouco alterado):

- Manter crédito ao designer original
- Link para o repositório original

#### ❌ Não Permitido:

- Vender o template sem modificações significativas
- Apresentar projetos do template como seus próprios trabalhos
- Remover licença de código aberto

#### Atribuição

Se você usar este template, considere:

1. Manter o link para o repositório original
2. Dar crédito nas redes sociais
3. Dar uma ⭐ no repositório

### 🙏 Agradecimentos

Um agradecimento especial a:

- [Remix](https://remix.run/) - Framework incrível
- [Tailwind CSS](https://tailwindcss.com/) - Estilização utilitária
- [Framer Motion](https://motion.dev/) - Animações fluidas
- Todos os contribuidores do projeto

# 🆕 Changelog

### [1.0.0] - 2024-01-15

- 🎉 Release inicial
- ✅ Todas as seções básicas
- 📱 Design totalmente responsivo

### [Próximas Features]

Blog integrado

- Internacionalização
- Mais templates

### Mostre seu apoio

Dê um ⭐ se você gosta deste site!

Desenvolvido com 💜 por Tifany Nunes.
