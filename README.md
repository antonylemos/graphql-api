<h1 align="center">GraphQL Study ⚡️</h1>

## 🏷️ Sobre

Essa API foi desenvolvida para fins de **estudo** acerca do **GraphQL** (com _Subscriptions_/_Real-time_). Nela é possível criar usuários e postagens de texto.


## 🚀 Tecnologias utilizadas

As seguintes tecnologias foram utilizadas no desenvolvimento dessa aplicação:

- [Node.js](https://nodejs.org/en/)
- [GraphQL](https://graphql.org/)
- [apollo-server](https://github.com/apollographql/apollo-server)
- [MongoDB](https://www.mongodb.com/)


## 📦 Como baixar e executar?

**Antes de baixar e executar o projeto**, é necessário ter o **Node.js** já instalado e, em seguida, instalar as seguintes ferramentas:

- [Git](https://git-scm.com/)
- [Yarn](https://classic.yarnpkg.com/lang/en/)
- [Docker](https://www.docker.com/)

### ⬇️ Baixando o projeto

Abra o terminal do seu sistema operacional e execute os seguintes comandos:

```bash
  # Clonar o repositório
  git clone https://github.com/antonylemos/graphql-api.git

  # Entrar no diretório
  cd graphql-api

  # Instalar as dependências
  yarn install
```

### 🌎 Preparando o ambiente

Utilizando o **Docker**, iremos baixar a imagens do banco de dados necessário para a execução da API:

```bash
  # Baixar o MongoDB
  docker run --name mongodb -p 27017:27017 -d -t mongo
```

Para saber se o banco de dados está em execução, rode o seguinte comando:

```bash
  docker ps
```

Caso não esteja, execute o seguinte comando:

```bash
  docker start mongodb
```

**Observação:** caso queira interromper a execução, substitua `start` por `stop`.

### 🏃 Executando a API

Com os bancos de dados em execução e estando no diretório da API, execute os seguintes comandos:

```bash
  # Executar o servidor
  yarn dev:server
```

---

Desenvolvido com 💜 por Antony Lemos 🧑🏽‍🚀
