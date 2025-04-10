#!/bin/bash

# Exit on error
set -e

# Build the client
echo "Building client for GitHub Pages..."
npm run build

# Create .nojekyll file to prevent Jekyll processing
touch dist/.nojekyll

# Copy the 404.html to the dist folder
echo "Setting up 404 page..."
cp client/public/404.html dist/404.html

# Copy CNAME file to the dist folder
echo "Setting up CNAME..."
cp client/public/CNAME dist/CNAME

echo "GitHub Pages build completed successfully!"