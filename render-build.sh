#!/usr/bin/env bash

# exit on error
set -o errexit

ls

# Precompile assets for production
npm run build

# Install gems and run database migrations and seeds
bundle install

cd ./bin
rails db:migrate
rails db:seed #if needed

ls

cd ..

ls