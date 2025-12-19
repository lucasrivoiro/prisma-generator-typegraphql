![integration logo](https://raw.githubusercontent.com/MichalLytek/typegraphql-prisma/main/img/integration.png)

# TypeGraphQL & Prisma integration

Prisma generator to emit TypeGraphQL types and CRUD resolvers from your Prisma schema. This project is a copy of [**typegraphql-prisma**](https://github.com/MichalLytek/typegraphql-prisma), and I intend to keep it updated, implementing new features as Prisma is updated.

## ✅ Prisma 7 Support

This library now fully supports **Prisma 7**, including all breaking changes and new features. All tests are passing and the generator is production-ready.

### Version compatibility:

| Library Version | Prisma Version |
|-----------------|----------------|
| `1.0.0`         | Prisma 7.x     |
| `0.1.0`         | Prisma 5.18.0+ / 6.x |

> ⚠️ **Important:** If you are using Prisma 5 or 6, install version `0.1.0`. Version `1.0.0` is only compatible with Prisma 7.

Feel free to send PRs with improvements and new features. Let's keep this lib together!

[**https://prisma.typegraphql.com**](https://prisma.typegraphql.com)

## Documentation

The documentation, installation guide, detailed description of the API and all of its features is [available on the original website](https://prisma.typegraphql.com). In the future, I will be implementing a dedicated website for this lib's documentation.

## Examples

You can check out some usage examples on this repo:

https://github.com/lucasrivoiro/prisma-generator-typegraphql/tree/main/examples/Readme.md
