![integration logo](https://raw.githubusercontent.com/MichalLytek/typegraphql-prisma/main/img/integration.png)

# Integração TypeGraphQL & Prisma

🌐 *Leia em outros idiomas: [English](README.md) | [Español](README.es.md)*

Gerador Prisma para emitir tipos TypeGraphQL e resolvers CRUD a partir do seu schema Prisma. Este projeto é uma cópia do [**typegraphql-prisma**](https://github.com/MichalLytek/typegraphql-prisma), e pretendo mantê-lo atualizado, implementando novos recursos conforme o Prisma é atualizado.

## ✅ Suporte ao Prisma 7

Esta biblioteca agora suporta totalmente o **Prisma 7**, incluindo todas as breaking changes e novos recursos. Todos os testes estão passando e o gerador está pronto para produção.

> ⚠️ **Aviso sobre MongoDB:** O Prisma 7 ainda não suporta MongoDB. Se você está usando MongoDB, por favor use a versão `0.1.0` desta biblioteca com Prisma 6.19 até que o suporte ao MongoDB seja adicionado ao Prisma 7.

### Compatibilidade de versões:

| Versão da Biblioteca | Versão do Prisma | Suporte MongoDB |
|---------------------|------------------|-----------------|
| `1.0.0`             | Prisma 7.x       | ❌ Ainda não     |
| `0.1.0`             | Prisma 5.18.0+ / 6.x | ✅ Sim      |

> ⚠️ **Importante:** Se você está usando Prisma 5 ou 6, instale a versão `0.1.0`. A versão `1.0.0` é compatível apenas com Prisma 7.

Sinta-se à vontade para enviar PRs com melhorias e novos recursos. Vamos manter esta lib juntos!

[**https://prisma.typegraphql.com**](https://prisma.typegraphql.com)

## Documentação

A documentação, guia de instalação, descrição detalhada da API e todos os seus recursos está [disponível no site original](https://prisma.typegraphql.com). No futuro, estarei implementando um site dedicado para a documentação desta lib.

## Exemplos

> ⚠️ **Nota:** Os exemplos ainda não foram migrados para o Prisma 7. Eles ainda usam a versão anterior da biblioteca. A migração está em andamento.

Você pode conferir alguns exemplos de uso neste repositório:

https://github.com/lucasrivoiro/prisma-generator-typegraphql/tree/main/examples/Readme.md

## Experimentos

A pasta `experiments` contém projetos prontos para executar para testar o gerador com diferentes bancos de dados. Estes são úteis para desenvolvimento e testes.

### Experimento PostgreSQL

Uma configuração completa com banco de dados PostgreSQL usando Docker.

**Configuração:**

```bash
cd experiments/postgres

# Instalar dependências
npm install

# Iniciar container PostgreSQL
docker compose up -d

# Executar migrações
npx prisma migrate deploy

# Popular o banco de dados
npx prisma db seed

# Iniciar o servidor GraphQL
npm run start
```

O servidor estará disponível em http://localhost:4000/graphql

**Requisitos:**
- Docker e Docker Compose
- Node.js 20.19.0+

### Experimento MongoDB

> ⚠️ **Nota:** MongoDB ainda não é suportado no Prisma 7. Este experimento requer Prisma 6.19 ou anterior.

Uma configuração para banco de dados MongoDB usando Docker.

**Configuração:**

```bash
cd experiments/mongodb

# Instalar dependências
npm install

# Iniciar container MongoDB
docker compose up -d

# Enviar schema para o banco de dados
npx prisma db push

# Popular o banco de dados
npx prisma db seed

# Iniciar o servidor GraphQL
npm run start
```

O servidor estará disponível em http://localhost:4000/graphql

**Requisitos:**
- Docker e Docker Compose
- Node.js 20.19.0+
- Prisma 6.19 (MongoDB não suportado no Prisma 7 ainda)
