#!/bin/sh
# Do not let this script fail silently
set -e

echo "Running migrations..."
npx prisma migrate deploy --url "${DATABASE_URL:-postgresql://postgres:3293abecb7acaeb77d03d4d58512efac@db-dev.icare-services.cloud:5432/speakup?schema=public}"

echo "Starting Next.js..."
node server.js
