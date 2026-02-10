#!/bin/sh
set -e

# Load environment variables
if [ -f .env ]; then
  export $(grep -v '^#' .env | xargs)
fi

echo "Deploying latest version..."

# Pull latest code
git pull origin main

# Pull latest images
docker compose pull

# Restart containers
docker compose up -d

# Prune old images (optional)
docker image prune -f

echo "Deployment complete! 🚀"
