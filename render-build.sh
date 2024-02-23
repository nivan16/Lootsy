#!/usr/bin/env bash

# exit on error
set -o errexit

# Install gems
bundle install

# Precompile assets for production
bundle exec rake assets:precompile

# Run webpack to bundle frontend assets
npm run build

# Run database migrations and seeds
rails db:migrate
rails db:seed #if needed