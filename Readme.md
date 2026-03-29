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
| `1.0.x`         | Prisma 7.x     | ❌ Not yet       |
| `0.1.0`         | Prisma 5.18.0+ / 6.x | ✅ Yes     |

> ⚠️ **Important:** If you are using Prisma 5 or 6, install version `0.1.0`. Version `1.0.x` is only compatible with Prisma 7.

### Prisma 7 migration notes

**Driver adapters are now required.** Prisma 7 removed the built-in query engine, so every `PrismaClient` must receive a driver adapter. Install the adapter for your database, for example:

```bash
npm install @prisma/adapter-pg pg
```

Then pass it when constructing the client:

```ts
import { PrismaClient } from "./prisma/generated/client/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });
```

**Generated import path changed.** In Prisma 7 the entry point of the generated client is `client.ts` instead of `index.ts`. The generator handles this automatically, but if you set `customPrismaImportPath` in your schema you must append `/client`:

```prisma
generator typegraphql {
  provider               = "typegraphql-prisma"
  // Prisma 7: point to client.ts, not just the folder
  customPrismaImportPath = "../generated/client/client"
}
```

**Environment variables are not auto-loaded.** Prisma 7 no longer reads `.env` automatically. Add `import "dotenv/config"` at the top of any file that uses `PrismaClient` or call `dotenv.config()` before instantiating it.

**Align `prisma` CLI and `@prisma/client` versions.** Always keep both packages on exactly the same version to avoid runtime errors at startup.

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
