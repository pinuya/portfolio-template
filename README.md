<p align="center"> <img src="/public/favicon.ico" width="80" alt="Logo do Portfólio" /> <br> <img src="https://img.shields.io/badge/React%20Router-7-CA4245?logo=reactrouter&logoColor=white" alt="React Router"> <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black" alt="React"> <img src="https://img.shields.io/badge/TailwindCSS-3-38B2AC?logo=tailwind-css&logoColor=white" alt="TailwindCSS"> <img src="https://img.shields.io/badge/Motion-12-0055FF?logo=framer&logoColor=white" alt="Motion"> <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" alt="TypeScript"> <img src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white" alt="Vite"> </p><h1 align="center">✨ Portfólio Template para Desenvolvedores ✨</h1><p align="center"> <a href="https://portfolio-template-one-bice.vercel.app/">🌐 Site ao Vivo

[![Site preview](/public/ReadmeImage.png)](https://portfolio-pinuya.vercel.app/)

Este projeto foi desenvolvido para ajudar desenvolvedores de todos os níveis a criar um portfólio profissional de forma rápida e eficiente. Utilizando tecnologias modernas e boas práticas de desenvolvimento, o template oferece uma base sólida para você mostrar seu trabalho ao mundo.

### Objetivos:

- 🎯 Prover uma base completa para portfólio
- 📚 Ser educativo para desenvolvedores iniciantes
- ⚡ Oferecer performance otimizada
- 📱 Garantir responsividade total
- 🎨 Ser facilmente personalizável

### O que já vem pronto:

- 🌗 **Tema claro e escuro** com detecção automática e sem flash ao carregar
- 🌍 **Dois idiomas** (PT/EN) com troca instantânea, funcionando até sem JavaScript
- 🧩 **Seções prontas**: hero, sobre, experiência, projetos, stack e contato
- ⚙️ **Um arquivo de configuração** (`app/config/site.ts`) para os seus dados
- ✨ Animações sutis com Motion, respeitando `prefers-reduced-motion`
- ♿ Navegação por teclado, foco visível e contraste acessível

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

2. Node.js

O projeto exige **Node.js `^20.19.0` ou `>=22.12.0`** (requisito do Vite 8).
Se você usa [nvm](https://github.com/nvm-sh/nvm), o `.nvmrc` já está pronto:

```bash
nvm use
```

3. Instalação de Dependências

Primeiro instale o bun na sua maquina:
[Bun.com](https://bun.com/)

```bash
# Com Bun (recomendado)
bun install
```

4. Inicie o Servidor

```bash
# Desenvolvimento
bun dev

# Acesse em:
# http://localhost:3000
```

# 🗂️ Estrutura

```text
app/
├── config/
│   ├── site.ts          # 👈 seus dados: nome, links, foto, stack, navbar
│   └── i18n.ts          # idiomas suportados
├── locales/
│   ├── pt.ts            # 👈 todos os textos em português
│   └── en.ts            # 👈 todos os textos em inglês
├── components/
│   ├── sections/        # Hero, About, Experience, Projects, Stack, Contact
│   ├── ui/              # Button, DropdownMenu (shadcn/ui)
│   ├── site-header.tsx  # navbar + troca de idioma + troca de tema
│   ├── site-footer.tsx
│   ├── section.tsx      # espaçamento e título padrão das seções
│   └── reveal.tsx       # animação de entrada ao scrollar
├── routes/_index.tsx    # monta a página juntando as seções
├── routes.ts            # de onde as rotas são carregadas
└── tailwind.css         # 👈 tokens de cor (tema claro e escuro)

react-router.config.ts   # SSR e flags do framework
vite.config.ts
```

> As rotas continuam sendo baseadas em arquivos: crie um `.tsx` novo em
> `app/routes/` e ele vira uma rota, sem precisar registrar em lugar nenhum.

# 🎨 Personalização

Praticamente tudo que você precisa mudar está em **três arquivos**.

### 1. Seus dados — `app/config/site.ts`

Nome, foto, links sociais, itens da navbar e sua stack:

```ts
export const siteConfig = {
  name: "Seu Nome",
  avatar: "/pfp.jpg", // troque a imagem em public/
  headlines: ["Web Designer", "Full-stack Developer"],
  links: {
    github: "https://github.com/seu-usuario",
    linkedin: "https://linkedin.com/in/seu-usuario",
    email: "voce@exemplo.com", // deixe "" para esconder o link
  },
  // ...
};
```

Na seção **Stack**, os nomes são convertidos em ícones automaticamente.
Tecnologias sem ícone conhecido aparecem só com o texto, então você pode
adicionar o que quiser — e cadastrar novos ícones em
`app/components/sections/stack.tsx`.

### 2. Seus textos — `app/locales/pt.ts` e `app/locales/en.ts`

Bio, experiências e projetos ficam aqui, porque são traduzidos.
Adicione ou remova itens dos arrays livremente — as seções se ajustam sozinhas:

```ts
projects: [
  {
    name: "Meu Projeto",
    description: "O que ele faz e quais problemas resolve.",
    tags: ["Next.js", "TypeScript"],
    href: "https://meu-projeto.com", // "" esconde o botão
    repo: "https://github.com/...",  // "" esconde o botão
  },
],
```

> ⚠️ Edite sempre os **dois** arquivos para manter os idiomas em sincronia.

### 3. Suas cores — `app/tailwind.css`

O tema usa CSS variables em HSL, com suporte a claro e escuro. Para trocar a
identidade visual inteira, basta mudar a cor de destaque nos dois blocos:

```css
:root {
  --primary: 340 72% 50%; /* 👈 tema claro */
}

.dark {
  --primary: 340 80% 68%; /* 👈 tema escuro, um tom mais claro */
}
```

Use o [tweakcn.com](https://tweakcn.com/editor/theme) se quiser montar uma
paleta completa visualmente.

### Adicionando ou removendo seções

Cada seção é um componente independente em `app/components/sections/`.
Para reordenar ou remover, edite `app/routes/_index.tsx`:

```tsx
<main>
  <Hero />
  <About />
  <Experience />
  <Projects />
  <Stack />
  <Contact />
</main>
```

Se remover uma seção, lembre-se de tirar o item correspondente de
`siteConfig.nav`.

### SEO

Título, descrição e Open Graph ficam no `meta` de `app/routes/_index.tsx`.

## 📝 Editando Arquivos de Internacionalização (i18n)

### 📁 Estrutura de Arquivos

```text
app/locales/
├── pt.ts            # Traduções em português
└── en.ts            # Traduções em inglês

app/config/i18n.ts   # Idiomas suportados e idioma padrão
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
// app/config/i18n.ts
import es from "~/locales/es";

export const supportedLngs = ["pt", "en", "es"]; // ← Novo idioma

export const resources = {
  pt: { translation: pt },
  en: { translation: en },
  es: { translation: es }, // ← Novo idioma
};
```

E adicione a opção no seletor em `app/components/language-switcher.tsx`:

```tsx
const LANGUAGES = [
  { code: "pt", flag: "🇧🇷", label: "Português" },
  { code: "en", flag: "🇺🇸", label: "English" },
  { code: "es", flag: "🇪🇸", label: "Español" }, // ← Novo idioma
];
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
bunx vercel

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

- [React Router](https://reactrouter.com/) - Framework incrível
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
