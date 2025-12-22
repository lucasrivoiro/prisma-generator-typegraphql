![integration logo](https://raw.githubusercontent.com/MichalLytek/typegraphql-prisma/main/img/integration.png)

# TypeGraphQL & Prisma integration

🌐 *Read in other languages: [Português](README.pt-BR.md) | [Español](README.es.md)*

Prisma generator to emit TypeGraphQL types and CRUD resolvers from your Prisma schema. This project is a copy of [**typegraphql-prisma**](https://github.com/MichalLytek/typegraphql-prisma), and I intend to keep it updated, implementing new features as Prisma is updated.

## ✅ Prisma 7 Support

This library now fully supports **Prisma 7**, including all breaking changes and new features. All tests are passing and the generator is production-ready.

> ⚠️ **MongoDB Notice:** Prisma 7 does not yet support MongoDB. If you are using MongoDB, please use version `0.1.0` of this library with Prisma 6.19 until MongoDB support is added to Prisma 7.

### Version compatibility:

| Library Version | Prisma Version | MongoDB Support |
|-----------------|----------------|-----------------|
| `1.0.0`         | Prisma 7.x     | ❌ Not yet       |
| `0.1.0`         | Prisma 5.18.0+ / 6.x | ✅ Yes     |

> ⚠️ **Important:** If you are using Prisma 5 or 6, install version `0.1.0`. Version `1.0.0` is only compatible with Prisma 7.

Feel free to send PRs with improvements and new features. Let's keep this lib together!

[**https://prisma.typegraphql.com**](https://prisma.typegraphql.com)

## Documentation

The documentation, installation guide, detailed description of the API and all of its features is [available on the original website](https://prisma.typegraphql.com). In the future, I will be implementing a dedicated website for this lib's documentation.

## Examples

> ⚠️ **Note:** The examples have not yet been migrated to Prisma 7. They still use the previous version of the library. Migration is in progress.

You can check out some usage examples on this repo:

https://github.com/lucasrivoiro/prisma-generator-typegraphql/tree/main/examples/Readme.md

## Experiments

The `experiments` folder contains ready-to-run projects for testing the generator with different databases. These are useful for development and testing purposes.

### PostgreSQL Experiment

A complete setup with PostgreSQL database using Docker.

**Setup:**

```bash
cd experiments/postgres

# Install dependencies
npm install

# Start PostgreSQL container
docker compose up -d

# Run migrations
npx prisma migrate deploy

# Seed the database
npx prisma db seed

# Start the GraphQL server
npm run start
```

The server will be available at http://localhost:4000/graphql

**Requirements:**
- Docker and Docker Compose
- Node.js 20.19.0+

### MongoDB Experiment

> ⚠️ **Note:** MongoDB is not yet supported in Prisma 7. This experiment requires Prisma 6.19 or earlier.

A setup for MongoDB database using Docker.

**Setup:**

```bash
cd experiments/mongodb

# Install dependencies
npm install

# Start MongoDB container
docker compose up -d

# Push schema to database
npx prisma db push

# Seed the database
npx prisma db seed

# Start the GraphQL server
npm run start
```

The server will be available at http://localhost:4000/graphql

**Requirements:**
- Docker and Docker Compose
- Node.js 20.19.0+
- Prisma 6.19 (MongoDB not supported in Prisma 7 yet)
