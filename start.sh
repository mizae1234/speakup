#!/bin/sh
# Do not let this script fail silently
set -e

echo "Running migrations..."
node ./node_modules/prisma/build/index.js migrate deploy

echo "Starting Next.js..."
node server.js
