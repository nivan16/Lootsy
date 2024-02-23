#!/usr/bin/env bash

# exit on error
set -o errexit

# Run webpack to bundle frontend assets
npm run build

# Install gems
bundle install

# Precompile assets for production
rails assets:precompile

# Run database migrations and seeds
rails db:migrate
rails db:seed #if needed