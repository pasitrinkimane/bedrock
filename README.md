<<<<<<< HEAD
=======
<p align="center">
  <a href="https://roots.io/bedrock/">
    <img alt="Bedrock" src="https://cdn.roots.io/app/uploads/logo-bedrock.svg" height="100">
  </a>
</p>

<p align="center">
  <a href="LICENSE.md">
    <img alt="MIT License" src="https://img.shields.io/github/license/roots/bedrock?color=%23525ddc&style=flat-square" />
  </a>

  <a href="https://packagist.org/packages/roots/bedrock">
    <img alt="Packagist" src="https://img.shields.io/packagist/v/roots/bedrock.svg?style=flat-square" />
  </a>

  <a href="https://github.com/roots/bedrock/actions/workflows/ci.yml">
    <img alt="Build Status" src="https://img.shields.io/github/workflow/status/roots/bedrock/CI?style=flat-square" />
  </a>

  <a href="https://twitter.com/rootswp">
    <img alt="Follow Roots" src="https://img.shields.io/twitter/follow/rootswp.svg?style=flat-square&color=1da1f2" />
  </a>
</p>

<p align="center">
  <strong>A modern WordPress stack</strong>
</p>

<p align="center">
  <a href="https://roots.io/"><strong><code>Website</code></strong></a> &nbsp;&nbsp; <a href="https://docs.roots.io/bedrock/master/installation/"><strong><code>Documentation</code></strong></a> &nbsp;&nbsp; <a href="https://github.com/roots/bedrock/releases"><strong><code>Releases</code></strong></a> &nbsp;&nbsp; <a href="https://discourse.roots.io/"><strong><code>Support</code></strong></a>
</p>

## Sponsors

**Bedrock** is an open source project and completely free to use.

However, the amount of effort needed to maintain and develop new features and products within the Roots ecosystem is not sustainable without proper financial backing. If you have the capability, please consider [sponsoring Roots](https://github.com/sponsors/roots).

<p align="center"><a href="https://github.com/sponsors/roots"><img height="32" src="https://img.shields.io/badge/sponsor%20roots-525ddc?logo=github&logoColor=ffffff&message=" alt="Sponsor Roots"></a></p>

<div align="center">
<a href="https://k-m.com/"><img src="https://cdn.roots.io/app/uploads/km-digital.svg" alt="KM Digital" width="148" height="111"></a> <a href="https://carrot.com/"><img src="https://cdn.roots.io/app/uploads/carrot.svg" alt="Carrot" width="148" height="111"></a> <a href="https://wordpress.com/"><img src="https://cdn.roots.io/app/uploads/wordpress.svg" alt="WordPress.com" width="148" height="111"></a> <a href="https://pantheon.io/"><img src="https://cdn.roots.io/app/uploads/pantheon.svg" alt="Pantheon" width="148" height="111"></a>
</div>

>>>>>>> 6cc89564fa187340276c88105c919d417d485c7d
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
<<<<<<< HEAD
5. Duplicate `.env.example` to `.env` file and update environment variables in the `.env` file. Wrap values that may contain non-alphanumeric characters with quotes, or they may be incorrectly parsed.
=======
   By default, this installs the `dist` version of all dependent packages.  To install the `source` versions instead, update `composer.json` as follows:
   ```json
    "preferred-install": {
      "roots/wordpress-no-content": "dist",
      "*": "source"
    },
   ```
2. Update environment variables in the `.env` file. Wrap values that may contain non-alphanumeric characters with quotes, or they may be incorrectly parsed.
>>>>>>> 6cc89564fa187340276c88105c919d417d485c7d

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

<<<<<<< HEAD
6. Access WordPress admin at `{domain}/wp/wp-admin/`

## Important

- `WP_ENV` if set `development` or `staging` - page indexing is DISABLED
- `WP_ENV` if set `production` - plugins updates are DISABLED

## Documentation

Bedrock documentation is available at [https://roots.io/docs/bedrock/master/installation/](https://roots.io/docs/bedrock/master/installation/).

## Development

TODO
=======
## Community
>>>>>>> 6cc89564fa187340276c88105c919d417d485c7d


<<<<<<< HEAD
=======
- Join us on Discord by [sponsoring us on GitHub](https://github.com/sponsors/roots)
- Participate on the [Roots Discourse](https://discourse.roots.io/)
- Follow [@rootswp on Twitter](https://twitter.com/rootswp)
- Read and subscribe to the [Roots Blog](https://roots.io/blog/)
- Subscribe to the [Roots Newsletter](https://roots.io/subscribe/)
>>>>>>> 6cc89564fa187340276c88105c919d417d485c7d
