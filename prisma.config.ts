import "dotenv/config";
import { defineConfig } from "prisma/config";

const user = process.env["DB_USER"];
const password = process.env["DB_PASSWORD"];
const host = process.env["DB_HOST"];
const port = process.env["DB_PORT"] || "5432";
const dbName = process.env["DB_NAME"];
const ssl = process.env["DB_SSL"] === "true" ? "?sslmode=require" : "";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: `postgresql://${user}:${password}@${host}:${port}/${dbName}${ssl}`,
  },
});
