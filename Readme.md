![integration logo](https://raw.githubusercontent.com/MichalLytek/typegraphql-prisma/main/img/integration.png)

# TypeGraphQL & Prisma integration

Prisma generator to emit TypeGraphQL types and CRUD resolvers from your Prisma schema. This project is a copy of [**typegraphql-prisma**](https://github.com/MichalLytek/typegraphql-prisma), and I intend to keep it updated, implementing new features as Prisma is updated.

For now, only the upgrade to version 6 of Prisma has been done. The tests are failing, however, the simple update has been sufficient for my production projects and has not presented any failures. But since I do not yet know well the code produced by Michael Lytek, I recommend that you test it thoroughly before using it. For now, it is at your own risk.

As soon as possible, I will be fixing the failing tests.

Feel free to send PRs with improvements and new features. Let's keep this lib together!

[**https://prisma.typegraphql.com**](https://prisma.typegraphql.com)

## Documentation

The documentation, installation guide, detailed description of the API and all of its features is [available on the original website](https://prisma.typegraphql.com). In the future, I will be implementing a dedicated website for this lib's documentation.

## Examples

You can check out some usage examples on this repo:

https://github.com/lucasrivoiro/prisma-generator-typegraphql/tree/main/examples/Readme.md
