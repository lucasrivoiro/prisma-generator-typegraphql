![integration logo](https://raw.githubusercontent.com/MichalLytek/typegraphql-prisma/main/img/integration.png)

# Integración TypeGraphQL & Prisma

🌐 *Lee en otros idiomas: [English](README.md) | [Português](README.pt-BR.md)*

Generador Prisma para emitir tipos TypeGraphQL y resolvers CRUD desde tu esquema Prisma. Este proyecto es una copia de [**typegraphql-prisma**](https://github.com/MichalLytek/typegraphql-prisma), y tengo la intención de mantenerlo actualizado, implementando nuevas funciones a medida que Prisma se actualiza.

## ✅ Soporte para Prisma 7

Esta biblioteca ahora soporta completamente **Prisma 7**, incluyendo todos los breaking changes y nuevas funciones. Todas las pruebas están pasando y el generador está listo para producción.

> ⚠️ **Aviso sobre MongoDB:** Prisma 7 aún no soporta MongoDB. Si estás usando MongoDB, por favor usa la versión `0.1.0` de esta biblioteca con Prisma 6.19 hasta que se agregue el soporte para MongoDB en Prisma 7.

### Compatibilidad de versiones:

| Versión de la Biblioteca | Versión de Prisma | Soporte MongoDB |
|-------------------------|-------------------|-----------------|
| `1.0.0`                 | Prisma 7.x        | ❌ Aún no        |
| `0.1.0`                 | Prisma 5.18.0+ / 6.x | ✅ Sí        |

> ⚠️ **Importante:** Si estás usando Prisma 5 o 6, instala la versión `0.1.0`. La versión `1.0.0` solo es compatible con Prisma 7.

¡Siéntete libre de enviar PRs con mejoras y nuevas funciones. Mantengamos esta lib juntos!

[**https://prisma.typegraphql.com**](https://prisma.typegraphql.com)

## Documentación

La documentación, guía de instalación, descripción detallada de la API y todas sus funciones está [disponible en el sitio web original](https://prisma.typegraphql.com). En el futuro, implementaré un sitio web dedicado para la documentación de esta lib.

## Ejemplos

> ⚠️ **Nota:** Los ejemplos aún no han sido migrados a Prisma 7. Todavía usan la versión anterior de la biblioteca. La migración está en progreso.

Puedes ver algunos ejemplos de uso en este repositorio:

https://github.com/lucasrivoiro/prisma-generator-typegraphql/tree/main/examples/Readme.md

## Experimentos

La carpeta `experiments` contiene proyectos listos para ejecutar para probar el generador con diferentes bases de datos. Estos son útiles para desarrollo y pruebas.

### Experimento PostgreSQL

Una configuración completa con base de datos PostgreSQL usando Docker.

**Configuración:**

```bash
cd experiments/postgres

# Instalar dependencias
npm install

# Iniciar contenedor PostgreSQL
docker compose up -d

# Ejecutar migraciones
npx prisma migrate deploy

# Poblar la base de datos
npx prisma db seed

# Iniciar el servidor GraphQL
npm run start
```

El servidor estará disponible en http://localhost:4000/graphql

**Requisitos:**
- Docker y Docker Compose
- Node.js 20.19.0+

### Experimento MongoDB

> ⚠️ **Nota:** MongoDB aún no es soportado en Prisma 7. Este experimento requiere Prisma 6.19 o anterior.

Una configuración para base de datos MongoDB usando Docker.

**Configuración:**

```bash
cd experiments/mongodb

# Instalar dependencias
npm install

# Iniciar contenedor MongoDB
docker compose up -d

# Enviar esquema a la base de datos
npx prisma db push

# Poblar la base de datos
npx prisma db seed

# Iniciar el servidor GraphQL
npm run start
```

El servidor estará disponible en http://localhost:4000/graphql

**Requisitos:**
- Docker y Docker Compose
- Node.js 20.19.0+
- Prisma 6.19 (MongoDB no soportado en Prisma 7 aún)
