#!/usr/bin/env bash

# exit on error
set -o errexit

#change the context of the script to be the root directory
cd ..

# Precompile assets for production
npm run build

# Install gems and run database migrations and seeds
bundle install
rails db:migrate
rails db:seed #if needed