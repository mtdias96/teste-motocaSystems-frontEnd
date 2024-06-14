# teste-motocasystems

## Visão Geral

Este repositório contém um projeto para gerenciar dados de motocicletas usando React e tecnologias relacionadas.

## Scripts

- `dev:server`: Inicia o servidor JSON para servir o banco de dados (`db.json`).
- `dev`: Inicia o Vite no modo de desenvolvimento.
- `build`: Compila o projeto usando o Vite.
- `lint`: Executa a análise estática do código usando ESLint com regras específicas para React.
- `preview`: Usa o Vite para pré-visualizar a versão de produção.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **React Router DOM**: Roteamento declarativo para React.
- **React Hook Form**: Formulários performáticos com validação fácil de usar.
- **Axios**: Cliente HTTP baseado em promessas para o navegador e Node.js.
- **Tailwind CSS**: Framework CSS utilitário para construir rapidamente designs personalizados.
- **clsx**: Utilitário pequeno para construir strings de className condicionalmente.
- **react-icons**: Bibliotecas populares de ícones para projetos React.
- **tailwind-merge**: Plugin Tailwind CSS para estender estilos.

## Dependências

- `axios`: ^1.7.2
- `clsx`: ^2.1.1
- `prop-types`: ^15.8.1
- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `react-hook-form`: ^7.51.5
- `react-icons`: ^5.2.1
- `react-router-dom`: ^6.23.1
- `tailwind-merge`: ^2.3.0

## DevDependencies

- `@eslint/js`: ^9.4.0
- `@types/react`: ^18.2.66
- `@types/react-dom`: ^18.2.22
- `@vitejs/plugin-react`: ^4.2.1
- `autoprefixer`: ^10.4.19
- `eslint`: 8.x
- `eslint-plugin-react`: ^7.34.2
- `eslint-plugin-react-hooks`: ^4.6.0
- `eslint-plugin-react-refresh`: ^0.4.6
- `globals`: ^15.4.0
- `json-server`: ^1.0.0-beta.1
- `postcss`: ^8.4.38
- `tailwindcss`: ^3.4.4
- `vite`: ^5.2.0

## Como Começar

1. **Clone o repositório:**
   ```bash
   git clone <URL-do-repositório>
   cd teste-motocasystems

2. **Baixa a pasta node_modules:"
   ```bash
   yarn
   
3. **Inicie o servidor json server para subir o mock da api"
   ```bash
   yarn dev:server
   
4. **Abra outro terminal e suba um servidor local:"
   ```bash
   yarn dev
