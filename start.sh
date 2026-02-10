#!/bin/sh
# Do not let this script fail silently
set -e

echo "Syncing database schema..."
node ./node_modules/prisma/build/index.js db push --accept-data-loss

echo "Starting Next.js..."
node server.js
