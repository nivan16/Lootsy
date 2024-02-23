#!/usr/bin/env bash

# exit on error
set -o errexit

# Precompile assets for production

npm run build
bundle install
bin/rails db:migrate
bin/rails db:seed #if needed