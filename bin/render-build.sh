#!/usr/bin/env bash

# exit on error
set -o errexit

# Precompile assets for production
RAILS_ENV=production rails assets:precompile


npm run build
bundle install
rails db:migrate
rails db:seed #if needed