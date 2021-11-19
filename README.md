## Overview

This project was build using Bedrock - a modern WordPress boilerplate which includes extended WP development features.

## Features

- Better folder structure
- Dependency management with [Composer](https://getcomposer.org)
- Easy WordPress configuration with environment specific files
- Environment variables with [Dotenv](https://github.com/vlucas/phpdotenv)
- Autoloader for mu-plugins (use regular plugins as mu-plugins)
- Enhanced security (separated web root and secure passwords with [wp-password-bcrypt](https://github.com/roots/wp-password-bcrypt))

## Requirements

- PHP >= 7.1
- Composer - [Install](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-osx)

## Installation

1. Install composer dependencies:
   ```sh
   $ composer install
   ```
2. Install npm dependencies.
   ```sh
   $ npm install
   ```
3. Install composer dependencies in theme directory - web/app/themes/growtype.
   ```sh
   $ npm install
   ```
4. Build theme scripts.
   for development:
   ```sh
   $ npm run watch
   ```
   or for production:
   ```sh
   $ npm run build
   ```
5. Duplicate `.env.example` to `.env` file and update environment variables in the `.env` file. Wrap values that may contain non-alphanumeric characters with quotes, or they may be incorrectly parsed.

- Required .env variables
  - `DB_NAME` - Database name
  - `DB_USER` - Database user
  - `DB_PASSWORD` - Database password
  - `DB_HOST` - Database host
  - `WP_ENV` - Set to environment (`development`, `staging`, `production`)
  - `WP_HOME` - Full URL to WordPress home (https://example.com)
  - `AUTH_KEY`, `SECURE_AUTH_KEY`, `LOGGED_IN_KEY`, `NONCE_KEY`, `AUTH_SALT`, `SECURE_AUTH_SALT`, `LOGGED_IN_SALT`, `NONCE_SALT`
  - Generate with [wp-cli-dotenv-command](https://github.com/aaemnnosttv/wp-cli-dotenv-command)
  - Generate with [our WordPress salts generator](https://roots.io/salts.html)

- Optional .env variables
  - `REPLACE_MISSING_IMAGES` - replaces missing images' domain with external domain
  - `DATABASE_URL` - for using a DSN instead of using the variables above (e.g. `mysql://user:password@127.0.0.1:3306/db_name`)
  - `WP_SITEURL` - Full URL to WordPress including subdirectory (https://example.com/wp)

6. Access WordPress admin at `{domain}/wp/wp-admin/`

## Important

- `WP_ENV` if set `development` or `staging` - page indexing is DISABLED

## Documentation

Bedrock documentation is available at [https://roots.io/docs/bedrock/master/installation/](https://roots.io/docs/bedrock/master/installation/).

## Development


