const { defineConfig } = require('prisma/config');

module.exports = defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env.DATABASE_URL || "postgresql://postgres:3293abecb7acaeb77d03d4d58512efac@db-dev.icare-services.cloud:5432/speakup?schema=public",
  },
});
