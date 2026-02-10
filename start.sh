#!/bin/sh
# Do not let this script fail silently
set -e

echo "Running migrations..."
npx prisma migrate deploy

echo "Starting Next.js..."
node server.js
