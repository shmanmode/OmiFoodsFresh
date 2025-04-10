#!/bin/bash

set -e

echo "Building client for GitHub Pages..."
npm run build

# Ensure .nojekyll, 404.html, and CNAME are placed correctly
touch dist/public/.nojekyll

echo "Setting up 404 page..."
cp client/public/404.html dist/public/404.html

echo "Setting up CNAME..."
cp client/public/CNAME dist/public/CNAME

echo "GitHub Pages build completed successfully!"
