#!/bin/bash
# This script sets up the development environment

echo "Installing dependencies..."
npm install

echo "Navigating to the prisma directory and creating an empty dev.db file..."
cd prisma
touch dev.db

echo "Generating Prisma client..."
npx prisma generate

echo "Running database migrations..."
npx prisma migrate dev --name init

echo "Starting the development server..."
cd ..
npm run dev