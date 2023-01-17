# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.7.6'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 6.0.3.3'
# Use postgresql as the database for Active Record
gem 'pg', '>= 0.18', '< 2.0'
# Use Puma as the app server
gem 'puma', '~> 3.12'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5'
# Transpile app-like JavaScript. Read more: https://github.com/rails/webpacker
gem 'webpacker', '~> 4.0'
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.7'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 4.0'
# Use Active Model has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Active Storage variant
# gem 'image_processing', '~> 1.2'

gem 'devise'
gem 'omniauth-github'
# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.4.2', require: false

gem 'graphql', '1.11.4'
gem 'dry-validation', '~> 1.5.6'
gem 'fast_jsonapi', '~> 1.5'
gem 'colorize', '~> 0.8.1'
gem 'recursive-open-struct', '~>
 1.1.2'

group :staging, :production do
  gem 'rails_12factor'
end

group :staging, :development do
  gem 'graphiql-rails', '1.7.0'
end

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: %i[mri mingw x64_mingw]
  gem 'rspec-rails', '~> 4.0.1'
  gem 'faker', '~> 2.14.0'
  gem 'bullet', '~> 6.1.0'
  gem 'rubocop', '~> 0.91.1', require: false
  gem 'rubocop-rails_config', '~> 0.12.6'
  gem 'rubocop-rspec', '>= 1.42.2'
  gem 'factory_bot_rails', '~> 6.1'
end

group :development do
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'web-console', '>= 3.3.0'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'binding_of_caller'
  gem 'brakeman'
  gem 'bundler-audit', '>= 0.7.0.1'
end

group :test do
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '>= 2.15'
  gem 'selenium-webdriver'
  # Easy installation and use of web drivers to run system tests with browsers
  gem 'webdrivers'
  gem 'database_cleaner'
  gem 'shoulda-matchers', '~> 4.4.1', require: false
  gem 'json_spec'
  gem 'timecop', '~> 0.9.1'
  gem 'rspec-graphql_matchers', '>= 1.3.0'
end

group :development do
  gem 'ruby-debug-ide', '0.7.2'
  gem 'debase', '0.2.4.1'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]
