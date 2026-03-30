![integration logo](https://raw.githubusercontent.com/MichalLytek/typegraphql-prisma/main/img/integration.png)

# Integração TypeGraphQL & Prisma

🌐 _Leia em outros idiomas: [English](README.md) | [Español](README.es.md)_

Gerador Prisma para emitir tipos TypeGraphQL e resolvers CRUD a partir do seu schema Prisma. Este projeto é uma cópia do [**typegraphql-prisma**](https://github.com/MichalLytek/typegraphql-prisma), e pretendo mantê-lo atualizado, implementando novos recursos conforme o Prisma é atualizado.

## ✅ Suporte ao Prisma 7

Esta biblioteca agora suporta totalmente o **Prisma 7**, incluindo todas as breaking changes e novos recursos. Todos os testes estão passando e o gerador está pronto para produção.

> ⚠️ **Aviso sobre MongoDB:** O Prisma 7 ainda não suporta MongoDB. Se você está usando MongoDB, por favor use a versão `0.1.0` desta biblioteca com Prisma 6.19 até que o suporte ao MongoDB seja adicionado ao Prisma 7.

## 🔧 Changelog

### v1.0.4

**Corrigido: erros de importação circular com bundlers como o Turbopack.**

Versões anteriores geravam instruções `import` entre arquivos de input types que podiam formar ciclos de dependência. Bundlers mais rígidos, como o Turbopack do Next.js, lançavam um `ReferenceError: Cannot access 'X' before initialization` em runtime porque uma classe era referenciada antes que seu módulo terminasse de ser carregado.

A versão `1.0.4` resolve isso:

- Gerando `import type` (importações somente de tipo) para referências entre input types — elas são apagadas em runtime e não criam dependências de carregamento de módulos.
- Usando uma chamada lazy `require()` dentro de cada thunk de tipo no `@Field`, de forma que a classe só é acessada depois que todos os módulos estão completamente inicializados.

Nenhuma mudança no seu schema Prisma ou no código da aplicação é necessária — basta regenerar com `prisma generate`.

---

### Compatibilidade de versões:

| Versão da Biblioteca | Versão do Prisma     | Suporte MongoDB |
| -------------------- | -------------------- | --------------- |
| `1.0.x`              | Prisma 7.x           | ❌ Ainda não    |
| `0.1.0`              | Prisma 5.18.0+ / 6.x | ✅ Sim          |

> ⚠️ **Importante:** Se você está usando Prisma 5 ou 6, instale a versão `0.1.0`. A versão `1.0.x` é compatível apenas com Prisma 7.

### Notas de migração para o Prisma 7

**Driver adapters são obrigatórios.** O Prisma 7 removeu o engine de queries embutido, então todo `PrismaClient` deve receber um driver adapter. Instale o adapter do seu banco de dados, por exemplo:

```bash
npm install @prisma/adapter-pg pg
```

Em seguida, passe-o ao construir o client:

```ts
import { PrismaClient } from "./prisma/generated/client/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });
```

**O caminho do import gerado mudou.** No Prisma 7, o entry point do client gerado é `client.ts` em vez de `index.ts`. O gerador lida com isso automaticamente, mas se você definir `customPrismaImportPath` no schema, deve adicionar `/client` ao final:

```prisma
generator typegraphql {
  provider               = "typegraphql-prisma"
  // Prisma 7: aponte para client.ts, não apenas a pasta
  customPrismaImportPath = "../generated/client/client"
}
```

**Variáveis de ambiente não são carregadas automaticamente.** O Prisma 7 não lê o `.env` automaticamente. Adicione `import "dotenv/config"` no topo de qualquer arquivo que use o `PrismaClient` ou chame `dotenv.config()` antes de instanciá-lo.

**Alinhe as versões de `prisma` CLI e `@prisma/client`.** Mantenha ambos os pacotes sempre na mesma versão para evitar erros em runtime na inicialização.

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
